import { path_combine } from './path';
import { io } from '../global'
import { Directory } from 'atma-io';

export namespace Npm {
    export function resolveAppUrl (path: string, currentLocation: string, base: string) {

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
            if (resource === '') {
                let pkg = path_combine(dirname, 'package.json');
                let json = io.File.read(pkg);
                if (json) {
                    resource = json.main;
                }
            }

            let filename = combineMain(dirname, resource);
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
