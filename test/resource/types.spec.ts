import { TestHelper } from '../TestHelper';
import { Bundler } from '../../src/Bundler'

var Files =  {
	'root.js': `
		include
			.mask('templates/root.mask')
			.css('./styles/reset.less', '/styles/main.less')
			.js('./scripts/helper')
			//.js('foo commented')
			.done(function(){ /* include.js('commented') */ });

		Foo.include.js('property accessor must be skipped from parser');
	`,
	'scripts/app.js': `
		include.js('./helper::Helper');
	`,
	'scripts/helper.js': `
		module.exports = 42;
	`,
	'templates/root.mask': `
		import from '../styles/app.css'
		import from '../scripts/app.js'
	`,
	'styles/app.css': `
		h4 { color: red; }
	`,
	'styles/reset.less': `
		html, body { padding: 0; }
	`,
	'styles/main.less': `
		body { background: green; }
	`
};
UTest({
	$before () {
		TestHelper.registerFiles(Files);
		Bundler.clearCache();
	},
	'should get resource tree with different types' () {

		return Bundler.getResourceTree('root.js', {silent: true}).done(resource => {

			var expect = {
				url: '/root.js',
				type: 'js',
				resources: [{
					url: '/templates/root.mask',
					type: 'mask',
					resources: [{
						url: '/styles/app.css',
						type: 'css'
					}, {
						url: '/scripts/app.js',
						type: 'js',
						resources: [{
							url: '/scripts/helper.js',
							type: 'js',
						}]
					}]
				}, {
					url: '/styles/reset.less',
					type: 'css'
				}, {
					url: '/styles/main.less',
					type: 'css'
				}, {
					url: '/scripts/helper.js',
					type: 'js'
				}]
			};
			has_(resource, expect);
		});
	},
	'should flattern resource tree with different types' () {

		return Bundler.getResources('root.js', {silent: true}).done(resources => {
			var arr = resources.map(x => x.url);
			var expect = [
				'/styles/app.css',
				'/scripts/helper.js',
				'/scripts/app.js',
				'/templates/root.mask',
				'/styles/reset.less',
				'/styles/main.less',
				'/root.js'
			];
			deepEq_(arr, expect);
		});
	}
});