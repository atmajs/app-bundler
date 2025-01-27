import { _middlewares } from '../class/Middlewares';
import { path_getExtension } from '../utils/path';
import { async_run, async_whenAll } from '../utils/async';
import { Solution } from '../class/Solution';
import { Resource } from '../class/Resource';
import alot from 'alot';


export const Builder = {
    build(resources: Resource[], solution: Solution) {
        return _middlewares
            .run('buildResources', resources, solution)
            .then(arr => {
                resources = arr ?? resources;
                solution.outputResources.prepare(resources);

                return _middlewares
                    .run('rewriteDependencies', resources, solution)
                    .then(() => rewriteDependenciesInternal(resources))
                    .then(rewriteRoot)
                    .then(buildOutputItems)
                    .then(buildRoot)
                    .then(() => solution.outputResources.getAll());
            });

        async function rewriteDependenciesInternal(resources: Resource[]) {
            await alot(resources).forEachAsync(async (resource, i) => {
                let ext = path_getExtension(resource.url);
                let handler = solution.handlers.find(x =>
                    x.rewriter.accepts(ext)
                );
                if (handler == null) {
                    handler = solution.handlers.find(x =>
                        x.rewriter.accepts(resource.type)
                    );
                }
                if (handler == null) {
                    throw Error('Rewriter not found for the resource: ' + resource.url);
                }
                await handler.rewriter.rewriteResource(resource);

            }).toArrayAsync({ threads: 1 });
        }

        function rewriteRoot() {
            return async_run(() => {
                let input = solution.outputResources.rootInput;
                let output = solution.outputResources.rootOutput;
                let ext = path_getExtension(input.url);

                let handler = solution.handlers.find(x => x.rewriter.accepts(input.type) || x.rewriter.accepts(ext))
                if (handler == null || handler.rewriter.rewriteRoot == null) {
                    //throw new Error(`RootRewriter is not found for a resource ${input.url} and type ${input.type}`);
                    return;
                }

                return handler.rewriter.rewriteRoot(input, output);
            })
        }

        function buildOutputItems() {
            let items = solution.outputResources.items;
            return alot(items).mapAsync(item => {
                let otherOutputItems = items.filter(x => {
                    if (x === item) return false;
                    if (x.page != item.page) return false;
                    if (x.bundle != item.bundle) return false;
                    return true;
                });
                return buildBundle(item, otherOutputItems);
            }).toArrayAsync();
        }
        function buildBundle(outputItem, otherOutputItems) {
            return _middlewares
                .run('buildBundle', outputItem, otherOutputItems)
                .then(buildBundleInternal)
        }
        function buildBundleInternal(outputItem, otherOutputItems) {
            if (outputItem.resource.content) {
                return;
            }
            let ext = path_getExtension(outputItem.resource.url);
            let handler = solution.handlers.find(x => x.builder.accepts(outputItem.type));
            if (handler == null) {
                handler = solution.handlers.find(x => x.builder.accepts(ext));
            }
            if (handler == null) {
                throw Error(`Unknown builder for type ${outputItem.type}`)
            }
            return handler.builder.createModule(outputItem, otherOutputItems);
        }
        function buildRoot() {
            let main = solution.outputResources.rootOutput ?? solution.outputResources.rootInput;
            let dependencies = solution.outputResources.getForPage(solution.opts.mainPage);
            let ext = path_getExtension(main.url);
            let handler = solution.handlers.find(x => x.builder.accepts(main.type) || x.builder.accepts(ext))
            if (handler == null || handler.builder.buildRoot == null) {
                throw new Error(`RootBuilder is not found for a resource ${main.url} and type ${main.type}`);
            }
            return handler.builder.buildRoot(main, dependencies, solution);
        }
    }
};
