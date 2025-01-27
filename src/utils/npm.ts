import { path_combine } from './path';
import { io } from '../global'
import { Directory } from 'atma-io';
import type { SolutionOpts } from '../class/SolutionOpts';

export namespace Npm {
    export function resolveAppUrl (path: string, currentLocation: string, opts: SolutionOpts) {
        let base = opts.base;
        let name = /^(@?[^\\\/]+)/.exec(path)[0];
        let resource = path.substring(name.length + 1);
        while (path != null) {
            let dirname = path_combine(currentLocation, 'node_modules', name, '/');
            if (Directory.exists(dirname) === false) {
                let next = currentLocation.replace(/[^\/]+\/?$/, '');
                if (next === currentLocation) {
                    return null;
                }
                currentLocation = next;
                continue;
            }
            if (path.startsWith('@') && resource.length > 0) {
                let subPackageMatch = /[^/\\]+/.exec(resource);
                let subPackage = subPackageMatch[0];
                dirname = path_combine(dirname, `/${subPackage}`, '/');
                resource = resource.substring(subPackage.length + 1);
            }

            let pkg = path_combine(dirname, 'package.json');
            let json = io.File.read<TPackageJson> (pkg);
            let filename = resolveAppUrlFromPackageJson(dirname, json, resource, opts);


            if (base) {
                if (base.endsWith('/') === false) {
                    // Base path must be a folder
                    base += '/';
                }
                // in-case CWD path is not equal to BASE path, make sure resolved FS module path is relative to BASE folder
                let relative = io.env.currentDir.toRelativeString(base);
                if (relative) {
                    filename = path_combine(relative, filename);
                }
            }
            return filename;
        }
        return null;
    }


    type TExportsMap = string | Record<'.' | `./${string}`, string>
    type TModuleExportsMap = {
        import: TExportsMap
        require: TExportsMap
        default: TExportsMap
    }
    type TConditionExportsMap = {
        node: TExportsMap | TModuleExportsMap
        browser: TExportsMap | TModuleExportsMap
        default: TExportsMap | TModuleExportsMap
    }

    type TPackageJson = {
        main?: string
        exports?: TExportsMap | TModuleExportsMap | TConditionExportsMap
    }

    export function resolveAppUrlFromPackageJson (pkgDir: string, pkg: TPackageJson, subPath: string, opts: SolutionOpts) {
        if (pkg.main == null && pkg.exports == null) {
            return combineMain(pkgDir, subPath);
        }
        if (pkg.exports == null) {
            return combineMain(pkgDir, subPath || pkg.main);
        }
        if (typeof pkg.exports === 'string') {
            return combineMain(pkgDir, subPath || pkg.exports);
        }
        const moduleExportsMap = 'require';
        const conditionExportsMap = opts.package.platform ?? 'node';
        let libraryFilePath = fromExports(pkg.exports, subPath, {
            moduleExports: moduleExportsMap,
            conditionExports: conditionExportsMap,
            pkgDir,
        });
        return combineMain(pkgDir, libraryFilePath);
    }

    function fromExports(exports: TPackageJson['exports'], subPath: string, opts: {
        pkgDir?: string
        moduleExports: 'require' | 'import'
        conditionExports: 'browser' | 'node'
    }) {
        if (exports == null) {
            throw new Error(`Invalid exports for ${ subPath }`);
        }
        if (typeof exports === 'object') {
            exports = extractConditional(exports, opts);
        }

        if (typeof exports === 'object') {
            // TExportsMap
            let map = exports as TExportsMap;
            if (!subPath) {
                let dot = '.';
                if (map[dot] == null) {
                    throw new Error(`Missing default "." export in exports for ${ JSON.stringify(exports)}`);
                }
                return extractConditional(map[dot], opts);
            }

            for (let tpl in exports) {
                let mapped = extractConditional(exports[tpl], opts);
                if (typeof mapped !== 'string') {
                    throw new Error(`Invalid conditional exports for ${ JSON.stringify(exports) } in ${ opts.pkgDir ?? subPath }`);
                }
                if (tpl.startsWith('./')) {
                    tpl = tpl.substring(2);

                    if (tpl === '*') {
                        return mapped.replace('*', subPath);
                    }

                    let globIndex = tpl.indexOf('*');
                    if (globIndex === -1 && tpl === subPath) {
                        return mapped;
                    }
                    if (globIndex > -1) {
                        let tplPfx = tpl.substring(0, globIndex).replace(/\/+$/, '');
                        if (subPath.startsWith(tplPfx)) {
                            let subPathSfx = subPath.replace(tplPfx, '');
                            return mapped.replace('*', subPathSfx);
                        }
                    }
                }
            }
        }
        if (typeof exports === 'string') {
            return exports;
        }

        throw new Error(`Path can't be mapped ${ JSON.stringify(exports)  }`);
    }

    function extractConditional (exports: TPackageJson['exports'], opts: {
        moduleExports: 'require' | 'import'
        conditionExports: 'browser' | 'node'
    }) {
        if (exports == null || typeof exports !== 'object') {
            return exports;
        }
        if (opts.conditionExports in exports) {
            return extractConditional(exports[opts.conditionExports], opts);
        }
        if (opts.moduleExports in exports) {
            return extractConditional(exports[opts.moduleExports], opts);
        }
        if ('default' in exports) {
            return extractConditional(exports['default'], opts);
        }

        return exports;
    }


    function combineMain (directory, filename) {
        filename ??= 'index.js';

        let path = path_combine(directory, filename);
        if (hasExt(path) === false) {
            let likelyTs = path.includes('/src/');
            if (likelyTs) {
                if (io.File.exists(path + '.ts')) {
                    return path + '.ts';
                }
            }
            path += '.js';
        }

        if (io.File.exists(path)) {
            return path;
        }
        console.log(`Entry File does not exist: ${filename}`);
    }
    function hasExt(path) {
        return /\.[\w]{1,8}($|\?|#)/.test(path);
    }
}
