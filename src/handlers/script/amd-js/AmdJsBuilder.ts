import { OutputItem } from '../../../class/OutputResources';
import { Resource } from '../../../class/Resource';
import { BaseScriptBuilder } from "../base/BaseScriptBuilder";

export class AmdJsBuilder extends BaseScriptBuilder {

    buildRoot (resource, dependencies) {

    }

    wrapModule (resource: Resource, outputItem: OutputItem) {
        return resource.content;
    }

    accepts (resource: Resource): boolean {
        if (resource.type !== 'js')  {
            return false;
        }
        let module = resource.getModule();
        if (module === 'root' && resource.solution.opts.package.module === 'amd') {
            module = 'amd';
        }
        return module === 'amd';
    }

};

