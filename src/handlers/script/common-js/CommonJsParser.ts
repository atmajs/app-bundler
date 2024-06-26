import { AstUtil } from '../utils/AstUtil';
import { Include } from '../../../class/Include';
import { BaseParser } from "../../base/BaseParser";
import { class_Dfr } from 'atma-utils';
import { ResourceInfo } from '../../../class/ResourceInfo';
import { Resource } from '../../../class/Resource';

export class CommonJsParser extends BaseParser {

    // async transpile(content: any, resource: Resource): Promise<{ content: string; }> {
    //     // we will inline the content instead
    //     if (/\.(yml|json)([^\w]|$)/.test(resource.filename)) {
    //         let str = typeof content !== 'string' ? JSON.stringify(content, null, '  ') : content;
    //         str = `module.exports = ${str};`;
    //         return { content: str };
    //     }
    // }

    getDependencies(ast, ownerResource) {
        let info = {
            dependencies: []
        };
        AstUtil.each(ast, AstUtil.is.commonJsFunction, (node, descend) => {
            let scope = node.scope || ast;
            let deps = this._process(node, scope);
            if (deps) {
                info.dependencies.push(...deps);
            }
            return true;
        });

        info.dependencies.forEach(x => x.module = 'commonjs');
        return new class_Dfr().resolve(info) as PromiseLike<ResourceInfo>;
    }

    private _process(node, scope) {
        if (node.args.length !== 1) {
            return null;
        }

        let args = AstUtil.getArguments(node.args, scope);
        let include = new Include();
        let path = args[0];
        if (typeof path !== 'string') {
            throw new Error('Path should be a string: ' + path);
        }
        if (this._isNodeJsNative(path)) {
            //@TODO: Should we provide the shims for browser builds?
            return null;
        }
        let groups = Include.groupByType([path], this.solution.opts);
        for (let type in groups) {
            include[type].apply(include, groups[type]);
        }
        let includes = include.includes;
        includes.forEach((x, i) => {
            let arg = node.args[i];

            x.pos = arg.start.pos;
        })
        return include.includes;
    }

    private _isNodeJsNative(path) {
        return false;
    }
};
