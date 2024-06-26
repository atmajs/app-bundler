import { Solution } from "../../class/Solution";
import { BaseHandler } from "./BaseHandler";
import * as assert from 'assert'
import { ResourceInfo } from '../../class/ResourceInfo';
import type { Resource } from '../../class/Resource';

export abstract class BaseParser {

    asText: boolean

    constructor(public solution: Solution, public handler: BaseHandler) {
        assert(solution instanceof Solution, 'Solution expected for Parser');
        assert(handler instanceof BaseHandler, 'BaseHandler expected for the Parser');
    }

    /** Usually we transpile on `atma-io` level. But in some cases the bundle may need to adjust the content.
     *  For example the .json or .yml files should be serialized to export the content
     */
    transpile (content: string | any, resource: Resource): Promise<{ content: string } | null> {
        return Promise.resolve({ content });
    }

    getDependencies(content: string, ownerResource: Resource): Promise<ResourceInfo> {
        throw new Error('Not implemented');
    }

    accepts(type): boolean {
        throw new Error('Not implemented');
    }
};
