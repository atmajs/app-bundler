import { Bundler } from '../../src/Bundler'
import { class_Dfr } from 'atma-utils'

UTest({
	'should parse defines' : {
		'should parse single amd' () {
			return parse(`define(["foo"], function(){})`, [ 
				{type: 'js', url: 'foo', module: 'amd'}
			]);
		},
		'should parse with id' () {
			return parse(`define('my', ["./foo"], function(){})`, [ 
				{type: 'js', url: './foo', module: 'amd'}
			]);
		},
		'should parse empty deps' () {
			return parse(`define('my', function(){})`, []);
		},
		'should parse css dep' () {
			return parse(`define(["main.less"], function(){})`, [ 
				{type: 'css', url: 'main.less', module: 'amd'}
			]);
		},
	},
	'should parse require': {
		'should parse single amd' () {
			return parse(`require(["foo"], function(){})`, [ 
				{type: 'js', url: 'foo', module: 'amd'}
			]);
		},
		'should parse with id' () {
			return parse(`require('my', ["./foo"], function(){})`, [
				{type: 'js', url: './foo', module: 'amd'},
			]);
		},
		'should parse empty deps when has amd declaration only' () {
			return parse(`require('my', function(){})`, []);
		},
		'should not parse commonjs require' () {
			return parse(`require('foo'); require('fs');`, [
				{type: 'js', url: 'foo', module: 'commonjs'},
				{type: 'js', url: 'fs', module: 'commonjs'}
			]);
		},
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