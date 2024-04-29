import alot from 'alot'
import { class_Dfr, obj_extend } from 'atma-utils'
import { res_getTreeInfo, res_walk } from '../utils/res';
import { path_getExtension } from '../utils/path';
import { async_resolve, async_waterfall } from '../utils/async';
import { Parser } from '../parser/Parser';
import * as assert from 'assert'
import { Resource } from '../class/Resource';
import { Configuration } from '../config/Configuration';
import { Solution } from '../class/Solution';
import { color } from '../utils/color';
import { ResourceInfo, ResourceType } from '../class/ResourceInfo';

export const Loader = {
    opts: null,
    solution: null,

    load(type: ResourceType, path: string, opts, solution: Solution) {
        this.opts = opts;
        this.solution = solution;


        let includeData: ResourceInfo = {
            type: type,
            url: path,
            module: 'root',
            page: solution.opts.mainPage
        };

        let start = Date.now();
        return ResourceLoader
            .load(includeData, null, opts, solution)
            .then(loader => {
                let end = Date.now();
                let seconds = ((end - start) / 1000).toFixed(2);
                let treeInfo = res_getTreeInfo(loader.resource);
                let reporter = solution.reporter;
                reporter
                    .info(color(`Loaded bold<yellow<${treeInfo.count}>> files in bold<yellow<${seconds}>> sec.`));
                reporter
                    .info(treeInfo.treeString);
                return loader.resource;
            });
    },
    loadResource(resource) {
        return ResourceLoader
            .loadResource(resource, this.opts, this.solution)
            .promise
            .then(loader => loader.resource);
    },
    clearCache() {
        ResourceLoader.clearCache();
        return this;
    },
    removeCached(filename) {
        ResourceLoader.clearCacheSingle(filename);
        return this;
    },
    getTypeFromPath(path) {
        let ext = path_getExtension(path);
        let type = Object.keys(types).find(type => {
            return types[type].indexOf(` ${ext} `) !== -1
        });
        if (type == null) {
            throw new Error('Resource type can`t be resolve from path ' + path);
        }
        return type;
    }
};

let types = {
    'js': ' es6 js ',
    'mask': ' mask ',
    'html': ' html ',
    'css': ' css scss less '
};

namespace ResourceLoader {
    export function load(includeData: ResourceInfo, parent: Resource, opts, solution: Solution): Promise<TreeLoader> {
        let resource = new Resource(includeData, parent, solution);
        let loader = __loaders[resource.filename];
        if (loader == null) {
            loader = __loaders[resource.filename] = new TreeLoader(resource, opts, solution);
            loader.process();
        } else {
            // Try to find the resource in ancestors
            let res = tryGetCyclicRoot(resource);
            if (res != null) {
                solution.reporter.warn(`Caution. Cyclic dependency detected. '${includeData.url}' in '${parent.url}'`);
                return Promise.resolve(<TreeLoader>{ resource: res })
            }
        }
        if (includeData.page) {
            loader.promise.done(() => {
                this.definePageForAll(includeData.page, loader.resource);
            });
        }

        return loader.promise;
    }
    export function loadResource(resource, opts, solution) {
        let loader = __loaders[resource.filename];
        if (loader == null) {
            loader = __loaders[resource.filename] = new TreeLoader(resource, opts, solution);
            loader.process();
        }
        return loader;
    }
    export function clearCache() {
        __loaders = {};
        let cacheCleaner = Configuration.Instance.get('clearFileCache');
        cacheCleaner && cacheCleaner();
        return ResourceLoader;
    }
    export function clearCacheSingle(filename) {
        delete __loaders[filename];
        return ResourceLoader;
    }
    export function definePageForAll(name, resource) {
        res_walk(resource, res => {
            if (res.page) return false;

            let arr = res.inPages;
            if (arr.indexOf(name) !== -1)
                return;

            res.inPages.push(name);
        });
    }
    export function tryGetCyclicRoot(resource: Resource) {
        let x = resource.parent;
        while (x != null) {
            if (x.filename === resource.filename) {
                let res = x.clone();
                res.isCyclic = true;
                return res;
            }
            x = x.parent;
        }
        return null;
    }

    class TreeLoader {
        promise = new class_Dfr as (class_Dfr & Promise<TreeLoader>)

        constructor(public resource: Resource, public opts, public solution: Solution) {

        }
        async process() {
            this
                .solution
                .reporter
                .print('Load ' + toMessage(this.resource.url));

            function toMessage(path) {
                let parts = path.replace(/^\/+/, '').split('/');
                let name = parts.pop();
                parts = parts.map(x => color(`bold<${x}>`));
                name = color(`green<${name}>`);
                parts.push(name);
                return parts.join('/');
            }
            if (this.resource.parent == null && this.solution.opts.mainContent) {
                this.resource.content = this.solution.opts.mainContent;
                this.processChildren();
                return;
            }

            try {
                let start = Date.now();
                let reader = Configuration.Instance.get('readFile');

                let content = await reader(this.resource.filename, this.opts);
                let handler = this.solution.handlers.find(x => x.parser.accepts(this.resource.type))
                if (handler?.parser?.transpile !== null) {
                    let result = await handler.parser.transpile(content, this.resource);
                    content = result?.content ?? content;
                }

                let end = Date.now();
                this.solution.reporter.print(color(` cyan<${end - start}> ms \n`));
                this.resource.content = content;

                if (this.resource.type === 'data' || this.resource.type === 'load') {
                    this.promise.resolve(this);
                    return;
                }
                this.processChildren();

            } catch (error) {
                this.promise.reject(error);
            }
        }
        private processChildren() {
            if (this.shouldSkipChildren()) {
                this.promise.resolve(this);
                return;
            }
            Parser
                .getDependencies(this.resource, this.solution)
                .then(result => {
                    this.loadChildren(result).catch(err => {
                        this.promise.reject(err);
                    });
                }, error => this.promise.reject(error));
        }
        private async loadChildren(result: ResourceInfo) {

            assert(Array.isArray(result.dependencies), `Expects array of dependencies for ${this.resource.url}`);

            this.resource.meta = obj_extend(this.resource.meta, result.meta);
            this.resource.dependencies = result.dependencies;

            const deps = result.dependencies;
            const resources = await alot(deps).mapAsync(async dep => {
                let loader: TreeLoader = await ResourceLoader.load(
                    dep
                    , this.resource
                    , this.opts
                    , this.solution
                );
                let res = loader.resource;
                dep.resource = res;
                return res;
            }).toArrayAsync({ threads: 1, errors: 'reject' });

            resources.forEach((res, i) => {
                let dep = deps[i];
                if (res.isMapped) {
                    let str = this.resource.content.replace(dep.url, res.url);
                    if (str === this.resource.content) {
                        throw new Error(`Mapped url was not replaced: ${dep.url}`);
                    }

                    this.resource.content = str;
                    dep.url = res.url;
                }
            })

            this.resource.resources.push(...resources);
            this.promise.resolve(this);

            // async_waterfall(deps, dep => {
            //     return ResourceLoader
            //         .load(dep, this.resource, this.opts, this.solution)
            //         .then(loader => {
            //             dep.resource = loader.resource;
            //             return loader.resource;
            //         });
            // })
            //     .fail(error => this.promise.reject(error))
            //     .done(resources => {
            //         this.resource.resources.push(...resources);
            //         this.promise.resolve(this);
            //     });
        }
        private shouldSkipChildren() {
            let arr = this.solution.opts.parserIgnoreDependencies;
            let shouldSkip = arr.some(rgx => (rgx as RegExp).test(this.resource.filename));
            if (shouldSkip) {
                return true;
            }

            let meta = this.resource.meta;
            if (meta && meta.skipDependencies) {
                return true;
            }
            return false;
        }
    }

    let __loaders: { [key: string]: TreeLoader } = {};
}
