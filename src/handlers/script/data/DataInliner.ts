import { Resource } from '../../../class/Resource';
import { BaseRewriter } from '../../../handlers/base/BaseRewriter';

export class DataInliner extends BaseRewriter {

    rewriteRoot(resourceInput: Resource, resourceOutput: Resource): void {

    }

    rewritePartial(content, ownerResource) {

    }

    async rewriteResource(resource: Resource) {
        for (let res of resource.dependencies) {
            if (/(json|yml)$/.test(res.url) === false) {
                continue;
            }
            if (res.import != null) {
                await this.rewriteImport(resource, res);
                continue;
            }
            await this.rewriteRequire(resource, res);
        }
    }

    accepts(type) {
        return type === 'js';
    }


    private rewriteImport (resource: Resource, dep: Resource['dependencies'][0]) {
        let rgx = new RegExp(`import\\s+(?<name>[\\w_$]+)\\s+from\\s+['"]${dep.url}['"];?`);
        let match = rgx.exec(resource.content);
        if (match == null) {
            console.error(`No data import found for ${dep.url} in ${resource.filename}`);
            return;
        }
        let name = match.groups.name;
        let json = dep.resource.content;
        if (typeof json !== 'string') {
            json = JSON.stringify(json);
        }
        let code = `const ${name} = ${json}`;
        let content = resource.content.replace(match[0], code);
        resource.content = content;

        let i = resource.dependencies.indexOf(dep);
        resource.dependencies.splice(i, 1);

        this.solution.outputResources.remove(dep.resource);
    }
    private rewriteRequire (resource: Resource, dep: Resource['dependencies'][0]) {
        let rgx = new RegExp(`require\\s*\\(\\s*['"]${dep.url}['"]\\s*\\)\\s*;?`);
        let match = rgx.exec(resource.content);
        if (match == null) {
            console.error(`No require found for ${dep.url} in ${resource.filename}`);
            return;
        }
        let name = match.groups.name;
        let json = dep.resource.content;
        if (typeof json !== 'string') {
            json = JSON.stringify(json);
        }
        let code = `${json}`;
        let content = resource.content.replace(match[0], code);
        resource.content = content;

        let i = resource.dependencies.indexOf(dep);
        resource.dependencies.splice(i, 1);

        this.solution.outputResources.remove(dep.resource);
    }
};
