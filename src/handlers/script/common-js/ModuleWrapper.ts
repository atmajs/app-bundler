import { io } from '../../../global';
import { Solution } from '../../../class/Solution';
import { ImportJsParser } from '../import-js/ImportJsParser';
import { Templates } from './templates/Templates';
import { Parser } from '../import-js/Parser';

export class ModuleWrapper {
    constructor (public solution: Solution) {

    }
    wrap (body: string) {
        let wrapper = this.solution.opts.package.moduleWrapper;
        switch (wrapper) {
            case 'script':
                body = this.wrapSimple(body);
                break;
            case 'iif':
                body = this.wrapWithIIF(body);
                break;
            case 'umd':
                body = this.wrapWithUMD(body);
                break;
            case 'esm':
                body = this.wrapWithESM(body);
                break;
            case 'custom':
                body = this.wrapWithCustom(body);
                break;
            default:
                throw new Error('Uknown module wrapper: ' + wrapper);
        }
        return body;
    }

    private wrapSimple(body) {
        return Templates
            .RootModule
            .replace('%BUNDLE%', () => body);
    }

    private wrapWithIIF(body) {
        return Templates
            .RootModuleWrapped
            .replace('%BUNDLE%', () => body);
    }

    private wrapWithUMD(body) {
        let opts = this.solution.opts.package;
        let name = opts.moduleName || '';
        return Templates
            .UMD
            .replace('%MODULE%', () => body)
            .replace('%NAME%', () => name)
            ;
    }
    private wrapWithESM(body: string) {
        let opts = this.solution.opts.package;
        let exportsCode = opts.moduleExportsCode || '';
        let importsCode = opts.moduleImportsCode || '';

        let deps = this.solution.outputResources.dynamicDependencies;
        if (deps.length > 0) {
            let arr = deps.map(dep => {
                let key = `bundlerDynamic_${ dep.url.replace(/[^\w]/g, '_') }`;
                return {
                    url: dep.url,
                    key
                };
            });
            let strImports = arr.map(item => `import ${item.key} from '${item.url}';`).join('\n');
            let strCollection = `const bundlerDynamicRepository = {};\n`
                + arr.map(item => `bundlerDynamicRepository['${item.url}'] = ${item.key};`)
                    .join('\n');
            let strRequire = [
                `var bundlerOriginalRequire = require || function (url) { throw new Error('Not found: ' + url); };`,
                `var require = function (url) { return bundlerDynamicRepository[url] || bundlerOriginalRequire(url); };`
            ].join('\n');
            importsCode = [
                strImports,
                strCollection,
                strRequire
            ].join('\n');
        }

        let rootPath = this.solution.path;
        let rootContentRaw = io.File.read<string>(rootPath, { cached: false, skipHooks: true, encoding: 'utf8' });
        let module = Parser.parse(rootContentRaw, new io.File(this.solution.path));

        let exportsBefore = module.exports.map(x => {
            return `export const ${x.ref} = module.exports.${x.ref};`;
        }).join('\n');

        exportsCode = `${exportsBefore}\n${exportsCode}`;


        return Templates
            .ESM
            .replace('$CUSTOM_IMPORTS_CODE$', () => importsCode)
            .replace('$CUSTOM_EXPORTS_CODE$', () => exportsCode)
            .replace('$MODULE$', () => body)
            ;
    }
    private wrapWithCustom(body) {
        let opts = this.solution.opts.package;
        let template = Templates.load(opts.moduleWrapperCustomPath);

        return template
            .replace('/**MODULE**/', () => body)
            ;
    }
}
