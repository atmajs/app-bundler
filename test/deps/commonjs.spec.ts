import { Bundler } from '../../src/Bundler'
import { class_Dfr } from 'atma-utils'

UTest({
	'should parse single commonjs' () {
		return parse(`require("foo")`,
			[ {type: 'js', url: 'foo', module: 'commonjs'} ]
		);

	},
	'should parse with multiple require' () {
		return parse(`
			(function(){
				var foo = require('./foo');
				var foo = require('./folder/qux.js');
				var foo = require('../baz');
			}());
		`, [
				{type: 'js', url: './foo', module: 'commonjs'},
				{type: 'js', url: './folder/qux.js', module: 'commonjs'},
				{type: 'js', url: '../baz', module: 'commonjs'},
		]);
	},
	'should parse AMD and CommonJS at same time' () {
		return parse(`
			var fs = require('fs');
			require(['./some'], function(){});
		`, [
				{type: 'js', url: 'fs', module: 'commonjs'},
				{type: 'js', url: './some', module: 'amd'}
		]);
	},
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