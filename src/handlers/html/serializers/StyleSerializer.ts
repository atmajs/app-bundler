import { BaseSerializer } from "./BaseSerializer";
import { StyleLinkReader } from "../readers/StyleLinkReader";

export class StyleSerializer extends BaseSerializer {

	removeDependencies ($) {
		let reader = new StyleLinkReader();
		$('link[href]')
			.filter((i, el) => {
				let $el = $(el);
				return $el.attr('data-bundler') !== 'ignore' && reader.canHandle($el);
			})
			.each((i, el) => {
				this._replaceWithPlaceholder($(el), 'css');
			})
			;
	}
	
	serialize ($, resources) {
		var arr = resources.filter(x => x.type === 'css');
		if (arr.length === 0)
			return;


		arr.forEach(resource => {
			var url = resource.url;
			if (this.solution.opts.version) {
				url += '?v=' + this.solution.opts.version;
			}
			var html = `<link href='${url}' rel='stylesheet' />`; 

			var inserted = this._insertDependency($, resource, html);
			if (inserted === false) {
				this.builder.append($, 'head', html);
				return;
			}
		});		
	}

	rewrite ($, resource) {
		this._inlineResources(
			resource,
			$,
			'link[href][data-bundler-content="inline"]',
			'href',
			content => `<style>${content}</style>`			
		);
		this._rewriteStaticUrls(
			resource,
			$,
			'link[rel="stylesheet"][data-bundler="ignore"]',
			'href'
		);
	}
}