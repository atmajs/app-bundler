import { Resource } from "../../../class/Resource";
import { Templates } from "./templates/Templates";
import { CommonJsBuilder } from "./CommonJsBuilder";
import { IBaseScriptBuilderOpts } from '../base/BaseScriptBuilder';


export const CommonJsBuilderSimplified = {
    wrapModule(this: CommonJsBuilder, resource: Resource, outputItem, outputItems, setts: IBaseScriptBuilderOpts) {
        let varId = getVarId(resource);
        let content = resource.content;

        content = replaceWithVarIds(content, resource, this.solution);
        content = Templates
            .ModuleSimplified
            .replace(/[_]{3}VAR_ID[_]{3}/g, () => varId)
            .replace(/[_]{3}MODULE[_]{3}/g, () => content)
            .replace(/[_]{3}FOOTER[_]{3}/g, () => (setts?.partials?.footer ?? ''));
            ;
        let opts = this.solution.iteration;
        if (opts.commonjs == null) {
            opts.commonjs = {
                addHeading: true,
                hasHeading: false
            }
        };
        if (opts.commonjs.hasHeading === false && opts.commonjs.addHeading === true) {
            opts.commonjs.hasHeading = true;
            content = this.getHeaderContent() + content;
        }
        return content;
    },

    getRootContent(root) {
        let rootInput = this.solution.outputResources.rootInput;
        let content = replaceWithVarIds(root.content, rootInput, this.solution);

        return content;
    },
    getHeaderContent() {
        let resources = this
            .solution
            .outputResources
            .items
            .map(x => x.resources)
            .reduce((aggr, x) => aggr.concat(x), []);

        return getModuleVars(resources);
    }

};

function replaceWithVarIds(content: string | Record<string, any>, resource, solution) {
    let rgx_REQUIRE = /require\s*\(\s*['"]([^'"]+)['"]\s*\)/g;
    if (typeof content !== 'string') {
        return JSON.stringify(content)
    }

    return content.replace(rgx_REQUIRE, (full, path) => {
        let res = new Resource({ url: path, type: 'js' }, resource, solution);
        let current = resource.resources.find(x => x.url === res.url);
        if (current == null) {
            return full;
        }
        return getVarId(current);
    });
}
function getVarId(resource) {
    let str = resource.url.replace(/\.\w+$/, '');
    return str.replace(/[^\w\d]/g, '_');
}
function getModuleVars(resources) {
    return resources
        .map(getVarId)
        .sort()
        .map(x => `var ${x} = {};`)
        .join('\n') + '\n';
}
