import { Bundler } from '../../src/Bundler'
import { class_Dfr } from 'atma-utils'

UTest({
	'should parse single include' () {
		return parse(`include.js("foo")`, [ 
			{type: 'js', url: 'foo', module: 'includejs'} 
		]);
	},
	'should parse multiple includes' () {
		return parse(`include.js("foo", "bar.js")`, [
			{type: 'js', url: 'foo', module: 'includejs'},
			{type: 'js', url: 'bar.js', module: 'includejs'}
		]);
	},
	'should parse single include array' () {
		return parse(`include.js(["foo", "bar.js", "qux.js"])`, [
			{type: 'js', url: 'foo', module: 'includejs'},
			{type: 'js', url: 'bar.js', module: 'includejs'},
			{type: 'js', url: 'qux.js', module: 'includejs'}
		]);
	},
	'should parse single script, css and mask' () {
		var code = `
			include
				.js( 'baz.js')
				.mask('my.mask')
				.css('main.less')
				.done()
		`;
		return parse(code, [
			{type: 'js', url: 'baz.js', module: 'includejs'},
			{type: 'mask', url: 'my.mask', module: 'includejs'},
			{type: 'css', url: 'main.less', module: 'includejs'}
		]);
	}
});

function parse (code, expect) {
	var dfr = new class_Dfr();
	Bundler.Parser.getDependencies(code).then(result => {
		var deps = result.dependencies;
		eq_(deps.length, expect.length)

		deps.forEach((x, index) => {
			has_(x, expect[index]);
		})

		dfr.resolve();
	});
	return dfr;
}