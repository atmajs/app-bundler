import { BaseParser } from "../../base/BaseParser";
import { Resource } from '../../../class/Resource';
import { Parser } from './Parser';
import * as io from 'atma-io'
import { ResourceInfo } from '../../../class/ResourceInfo';

export class ImportJsParser extends BaseParser {
    /** @TODO: set to false and handle ast in ScriptParser */
    asText = true

    async transpile(content: any, resource: Resource): Promise<{ content: string; }> {
        if (/\.(yml|json)([^\w]|$)/.test(resource.filename)) {
            let str = typeof content !== 'string' ? JSON.stringify(content, null, '  ') : content;
            str = [
                `const data = ${str};`,
                `export default data;`
            ].join('\n');
            return { content: str };
        }
    }

    getDependencies (content: string, ownerResource: Resource) {
        if (Parser.supports(content) === false) {
            return null;
        }

        let module = Parser.parse(content, new io.File(ownerResource.filename));

        let deps = module.imports.map(imp => {
            let res = new ResourceInfo;
            res.url = imp.path;
            res.pos = imp.position;
            res.length = imp.length;
            res.module = 'import';
            res.import = imp;
            return res;
        });
        return <ResourceInfo> {
            dependencies: deps,
            meta: {
                import: {
                    imports: module.imports,
                    exports: module.exports
                }
            }
        };
    }
};
