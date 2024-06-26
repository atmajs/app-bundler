import alot from 'alot';
import { BaseScriptBuilder } from "../base/BaseScriptBuilder";
import { OutputItem } from "../../../class/OutputResources";
import { Resource } from "../../../class/Resource";
import { class_Uri } from "atma-utils";
import { path_changeExtension, path_hasExtension, path_isRelative, path_toRelative } from "../../../utils/path";

import { Configuration } from '../../../config/Configuration';


/**
 * Primary purpose of this builder is to copy source files to the output folder.
 * Atma IO middlewares are used to compile/transpile the files.
 *
 * For now the accent is made for Typescript files.
 */

export class CopyJsBuilder extends BaseScriptBuilder {

    wrapModule(resource: Resource, outputItem: OutputItem) {
        let { content, dependencies } = resource;
        let offset = 0;

        dependencies && dependencies.filter(x => x.pos != null && path_isRelative(x.url)).forEach(dep => {

            let resUrl = new class_Uri(resource.url);
            let resDep = new class_Uri(dep.url);


            let url = resUrl.combine(resDep as any).toLocalFile();

            let start = dep.pos + offset + 1;
            let c = content[start - 1];
            let end = content.indexOf(c, start);

            let oldLength = end - start;
            let newLength = url.length;

            content = content.substring(0, start) + url + content.substring(end);
            offset += newLength - oldLength;
        })

        return content;
    }

    async buildRoot(root: Resource, outputDependencies: Resource[]) {

        let outputResources = this.solution.outputResources;

        outputResources.items = await alot(outputResources.items)
            .mapManyAsync(async item => {
            if (item.resource.isGlob !== true) {
                return [ item ]
            }
            // Normal output

            let copyItems = await alot(item.resources)
                .mapMany(resource => {

                    return this.createOutputItems(item, resource)
                })
                .toArrayAsync();


            return copyItems;
        }).toArrayAsync()
    }

    getRootContent(root, outputDependencies?) {
        return root.content;
    }

    accepts(resource: Resource) {
        if (resource.type !== 'js') {
            return false;
        }
        return resource.isGlob === true;
    }

    private async createOutputItems(parent: OutputItem, resource: Resource): Promise<OutputItem[]> {
        let solution = this.solution;
        let rewriteToRelativeUrls = {} as Record<string, string>;

        if (resource.dependencies?.length > 0) {

            let appBase = this.solution.opts.base;
            alot(resource.dependencies)
                .forEach(dep => {
                    if (dep.resource == null) {
                        return;
                    }
                    if (dep.resource.filename.startsWith(appBase) === false) {
                        // if (path_hasExtension(dep.url) === false) {
                        //     rewriteToRelativeUrls[dep.url] = dep.url + '.' + this.solution.opts.outputExtension;
                        // }
                        // is project dependency
                        return;
                    }
                    let relativePath = path_toRelative(dep.resource.filename, resource.filename);
                    if (relativePath == null || /(..\/)*?\/?node_modules/.test(relativePath)) {
                        return;
                    }

                    relativePath = path_changeExtension(relativePath, this.solution.opts.outputExtension);
                    relativePath = relativePath.startsWith('.')
                        ? relativePath
                        : './' + relativePath;

                    rewriteToRelativeUrls[dep.url] = relativePath;
                })
                .toArray();

            resource.content = rewriteUrls(resource, rewriteToRelativeUrls);
        }

        let result = [
            createOutputItem(cloneWithExtension(resource, this.solution.opts.outputExtension))
        ];

        let extra = [{
            ext: 'ts.map',
            output: 'js.map',
        }, {
            ext: 'd.ts',
            output: 'd.ts',
        }];

        let readFile = Configuration.Instance.get('readFile');

        await alot(extra).forEachAsync(async x => {
            let cloned = cloneWithExtension(resource, x.ext);

            try {
                cloned.content = await readFile(cloned.filename);
            } catch (e) {
                console.error(`Error loading ${resource.filename} from ${parent.resource.filename}`);
                throw e;
            }
            cloned.content = rewriteUrls(cloned, rewriteToRelativeUrls);

            result.push(
                createOutputItem(cloneWithExtension(cloned, x.output))
            );

            if (x.ext === 'ts.map' && cloned.content != null) {
                let outputItem = result[result.length - 1];
                let source = resource.filename;
                let target = outputItem.resource.filename;
                let rel = path_toRelative(source, target);

                outputItem.resource.content = outputItem.resource.content.replace(/"sources":\["[^"]+"\]/, `"sources":["${rel}"]`);
            }
        }).toArrayAsync({ threads: 1 });

        function createOutputItem (resource: Resource) {
            return new OutputItem({
                page: parent.page,
                bundle: parent.bundle,
                type: parent.type,
                solution: solution,
                resources: [resource],
                isGlob: false,

                resource: resource.toTarget(solution)
            });
        }

        function cloneWithExtension (resource: Resource, ext: string) {
            let cloned = resource.clone();
            cloned.filename = path_changeExtension(cloned.filename, ext);
            cloned.url = path_changeExtension(cloned.url, ext);
            return cloned;
        }


        function rewriteUrls (resource: Resource, rewriteToRelativeUrls: Record<string, string>): string {
            let content = resource.content as any;
            if (content == null) {
                console.error(`<rewrite urls> No content for ${resource.filename}`);
                return '';
            }
            for (let key in rewriteToRelativeUrls) {
                content = content
                    .replaceAll(`"${key}"`, `"${rewriteToRelativeUrls[key]}"`)
                    .replaceAll(`'${key}'`, `'${rewriteToRelativeUrls[key]}'`);
            }
            return content;
        }

        return result;
    }
};
