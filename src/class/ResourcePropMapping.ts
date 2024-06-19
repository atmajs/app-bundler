import { Resource } from "./Resource";

export type ResourceMappingMatch = {
    [P in keyof Resource]?: Resource[P] | ((value: Resource[P]) => boolean)
}
export type ResourceMappingTransform = {
    [P in keyof Resource]?:  Resource[P] | ((value: Resource[P]) => Resource[P])
}

export class ResourcePropMapping {
    constructor (public resA: ResourceMappingMatch, public resB: ResourceMappingTransform) {

    }

    map (resource: Resource) {
        let match = true;
        for(let key in this.resA) {
            let val = this.resA[key];
            if (val == null)
                continue;

            let currentVal = resource[key];

            if (typeof val === 'function') {
                match = val(currentVal);
            }
            if (val instanceof RegExp) {
                match = val.exec(currentVal) != null;
            }
            if (typeof val === 'string' || typeof val === 'number') {
                match = val === currentVal;
            }

            if (match == false) {
                return resource;
            }
        }

        let clone = resource.clone();
        for(let key in this.resB) {
            let val = this.resB[key];
            let currentVal = resource[key];

            if (typeof val === 'function') {
                clone[key] = val(currentVal, resource);
                continue;
            }
            if (typeof val === 'string' || typeof val === 'boolean') {
                clone[key] = val;
                continue;
            }
        }

        return clone;
    }
}
