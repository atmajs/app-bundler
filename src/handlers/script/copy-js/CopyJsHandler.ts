import { BaseHandler } from '../../base/BaseHandler';
import { CopyJsParser } from './CopyJsParser';
import { CopyJsRewriter } from './CopyJsRewriter';
import { CopyJsBuilder } from './CopyJsBuilder';

export class CopyJsHandler extends BaseHandler {
	static Parser = CopyJsParser
	static Rewriter = CopyJsRewriter
	static Builder = CopyJsBuilder
	static PathResolver = null
};
