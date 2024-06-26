import { IncludeJsHandler } from './include-js/IncludeJsHandler';
import { BaseRewriter } from '../base/BaseRewriter';
import { BaseHandler } from '../base/BaseHandler';
import { Solution } from '../../class/Solution';
import { Resource } from '../../class/Resource';
import { DataInliner } from './data/DataInliner';

export class ScriptRewriter extends BaseRewriter {

    rewriters =  [
        new IncludeJsHandler.Rewriter(this.solution, this.handler),
        new DataInliner(this.solution, this.handler),
    ]

    rewritePartial (content, ownerResource) {

    }

    rewriteResource (resource: Resource) {
        return this.rewriters.map(rewriter => {
            return rewriter.rewriteResource(resource);
        });
    }

    accepts (type) {
        return type === 'js';
    }
};
