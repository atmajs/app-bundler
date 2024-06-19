import { AstUtil } from './utils/AstUtil';
import { async_reject, async_whenAll } from '../../utils/async';
import { ResourceInfo } from '../../class/ResourceInfo';
import { arr_flattern } from '../../utils/arr';
import { CommonJsHandler } from './common-js/CommonJsHandler';
import { AmdJsHandler } from './amd-js/AmdJsHandler';
import { IncludeJsHandler } from './include-js/IncludeJsHandler';
import { BaseParser } from "../base/BaseParser";
import { ImportJsHandler } from './import-js/ImportJsHandler';
import { Resource } from '../../class/Resource';


export class ScriptParser extends BaseParser {
    parsers = [
        new CommonJsHandler.Parser(this.solution, this.handler),
        new AmdJsHandler.Parser(this.solution, this.handler),
        new IncludeJsHandler.Parser(this.solution, this.handler),
        new ImportJsHandler.Parser(this.solution, this.handler),
    ];

    transpile(content: any, resource: Resource): Promise<{ content: string; }> {
        let [ common ] = this.parsers;
        return common.transpile(content, resource);
    }


    getDependencies(content: string, ownerResource: Resource) {
        if (!content) {
            throw new Error(`Content is undefined for ${ownerResource.filename}`);
        }
        let opts = {
            filename: ownerResource.filename
        };
        let asTextDfrs = this
            .parsers
            .filter(x => x.asText === true)
            .map(parser => parser.getDependencies(content, ownerResource));


        let ast;
        try {
            ast = AstUtil.parse(content, opts);
        } catch (error) {
            if (/^throw\s+(new\s+)?Error/i.test(content)) {
                var error = new Error(content);
                error.filename = ownerResource.filename;
                throw error;
            }
            if (error.filename == null) {
                error.filename = ownerResource.filename
            }
            return async_reject(error) as PromiseLike<{ dependencies: ResourceInfo[] }>;
        }

        let dfrs = this
            .parsers
            .filter(x => x.asText !== true)
            .map(parser => parser.getDependencies(ast, ownerResource));

        dfrs.unshift(...asTextDfrs);

        return async_whenAll(dfrs).then(results => {
            let arr = arr_flattern(results);
            let merged = ResourceInfo.merge(...arr);
            return merged;
        }) as PromiseLike<{ dependencies: ResourceInfo[] }>;
    }

    accepts(type) {
        return type === 'js';
    }
};
