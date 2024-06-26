import { _middlewares } from '../class/Middlewares';
import { path_getExtension } from "../utils/path";
import { async_resolve } from "../utils/async";
import { class_Dfr } from "atma-utils";
import { Solution } from "../class/Solution";

import * as assert from 'assert';
import { ResourceInfo } from '../class/ResourceInfo';
import { Resource } from '../class/Resource';

export const Parser = {
    getDependencies(resource: Resource, solution: Solution): PromiseLike<ResourceInfo> {
        assert(resource != null, 'Resource is empty');
        assert(solution instanceof Solution, 'Solution is not passed');

        let dfr = new class_Dfr;

        getDependenciesInternal(resource, solution)
            .then(_runMiddlewares, error => dfr.reject(error))
            ;

        function _runMiddlewares(deps) {
            getDependenciesExternal(deps, resource, solution)
                .then((deps) => mapDeps(deps, solution))
                .then((deps) => filterDynamicDeps(deps, solution))
                .then(deps => dfr.resolve(deps), error => dfr.reject(error))
                ;
        }
        return dfr as any;
    }
};

function getDependenciesInternal(resource: Resource, solution: Solution): Promise<ResourceInfo> {
    assert(typeof resource.url === 'string', 'Path is expected');

    if (resource.isGlob) {
        let paths = resource.content as any as string[];
        let resInfos = paths.map(path => {
            return {
                type: resource.type,
                url: path,
                module: resource.module,
                page: resource.page
            } as ResourceInfo;
        });
        let result = { dependencies: resInfos }
        return async_resolve(result);
    }

    let ext = path_getExtension(resource.url);
    let handler = solution.handlers.find(x => x.parser.accepts(resource.type) || x.parser.accepts(ext))
    if (handler == null) {
        console.warn('GetDependenciesInternal: Skip unknown resource type', resource.type);
        return async_resolve({ dependencies: [] });
    }

    return handler.parser.getDependencies(resource.content, resource);
}
function getDependenciesExternal(deps, resource, solution) {
    return _middlewares
        .run('parseDependencies', resource, deps, solution)
        .then(() => deps)
        ;
}
function filterDynamicDeps(info: { dependencies: any[]; }, solution: Solution) {
    info.dependencies = info.dependencies.filter(dep => {
        let isDynamic = isDynamicDependency(dep, solution);
        if (isDynamic) {
            solution.outputResources.addDynamicDependency(dep);
        }

        return isDynamic === false
    });
    return info;
}
function isDynamicDependency(dep, solution) {
    let arr = solution.opts.dynamicDependencies;
    return arr.length !== 0 && arr.some(rgx => rgx.test(dep.url));
}
function mapDeps(info: ResourceInfo, solution: Solution) {
    info.dependencies.forEach(dep => {

        // @TODO do we need to map at this level?
    })
    return info;
}
