CommonJsHandler.Rewriter = class CommonJsRewriter extends BaseRewriter {

	constructor () {
		super(...arguments);
	}

	rewritePartial (content, ownerResource) {

	}

	rewriteResource (resource) {

	}

	accepts (type) {
		return type === 'mask';
	}
};