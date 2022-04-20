import { BaseBuilder } from '../base/BaseBuilder';
import { OutputItem } from '../../class/OutputResources';
import { Resource } from '../../class/Resource';
import { MaskScriptable } from './MaskScriptable';
export class MaskBuilder extends BaseBuilder {

    createModule(outputItem: OutputItem, otherOutputItems: OutputItem[]) {
        let out = [], arr;


        otherOutputItems.forEach(item => {
            if (item.resource.type === 'css') {
                let arr = this.registerStyles(item.resources);
                out.push(...arr);
            }
        })

        arr = outputItem.resources.map(resource => {

            this.solution.assetsManager.rewriteAssets(resource, outputItem.resource, this.solution);

            /*
            * @TODO consider to use relative paths instead of applications root
            */
            //-let url = resource.toRelative(outputItem.resource);
            let url = resource.url;
            return `module path="${url}" {
                ${resource.content}
            }`
        });
        out.push(...arr);


        outputItem.resource.content = out.join('\n');
    }

    buildRoot(resource: Resource, dependencies: Resource[]) {
        if (this.solution.opts.package.type === 'bundle') {
            let scriptable = new MaskScriptable(this.solution);
            resource.content = scriptable.convert(resource.content, resource, dependencies)
            return;
        }

        let maskDeps = dependencies.filter(x => x.type === 'mask');

        maskDeps.forEach(x => x.embed = true);

        let body = maskDeps.map(x => x.content).join('\n');
        let imports = dependencies
            .filter(x => x.type !== 'mask')
            .filter(x => Boolean(x.content))
            .sort((x,y) => {
                if (x.type === 'js') return 1;
                if (y.type === 'js') return -1;
                return 0;
            })
            .sort((x,y) => {
                if (x.type === 'css') return -1;
                if (y.type === 'css') return 1;
                return 0;
            })
            .map(x => {
                let url = x.toRelative(resource);
                return `import sync from '${url}';`;
            })
            .join('\n');



        resource.content = `${body}\n${imports}\n${resource.content}`;
    }

    accepts(type) {
        return type === 'mask';
    }

    registerStyles(resources) {
        return resources.filter(x => x.getModule() === 'mask').map(resource => {
            return `module path="${resource.url}";`
        });
    }

};

