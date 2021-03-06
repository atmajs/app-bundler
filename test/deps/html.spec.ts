import { Bundler } from '../../src/Bundler'
import { TestHelper } from '../TestHelper';
import { class_Dfr } from 'atma-utils'

UTest({
	'should parse imports' : {
		'should parse script and styles from html' () {
			var html = `
				<script src='./foo.js'></script>
				<script src =      "bar.js" type='text/javascript' data-bundler-bundle='vendor'></script>
				
				<!-- 
					<script src='./foo-no.js'></script>				
				-->

				<script src = "no.coffee" type='text/coffee'></script>
				<script src = "no.js" data-bundler='ignore'></script>

				<link hreF= '/main.less' rel='stYLESheet' />				
			`;
			return parse(html, [ 
				{type: 'js', url: './foo.js', module: 'global'},
				{type: 'js', url: 'bar.js', module: 'global', bundle: 'vendor'},
				{type: 'css', url: '/main.less', module: 'global'}
			]);
		},
		'should parse mask deps' () {
			var html = `
				<script type='text/mask'>
					import Foo from './foo';
					import from 'Controller.x2' is script;

					View name='about' { import from './my'; }
				</script>
			`;
			return parse(html, [ 
				{type: 'mask', url: './foo.mask', module: 'mask'},
				{type: 'js', url: 'Controller.x2', module: 'mask'},
				{page: 'about', type: 'mask', url: './my.mask', module: 'mask'}
			]);
		},
		'should include conditions' () {
			var template = `
				<script src='/debug.js' data-bundler-if='DEBUG'></script>
			`;
			return parse(template, [
				{
					type: 'js', 
					url: '/debug.js', 
					module: 'global'
				}
			], { varDefs: { DEBUG: true }})
		},
		'should exclude conditions' () {
			var template = `
				<script src='/debug.js' data-bundler-if='DEBUG'></script>
			`;
			return parse(template, [], { varDefs: { DEBUG: false }});
		},

		'should check deeper dependencies': {
			$before () {
				TestHelper.registerFiles({
					'index-deep.html': `
						<script src='/foo.js'></script>
					`,
					'index-single.html': `
						<script src='/foo.js' data-bundler-dependencies='ignore'></script>
					`,
					'foo.js': `
						require('bar.js');
					`,
					'bar.js': `
						module.exports = 'Bar';
					`
				});
			},
			$teardown () {
				Bundler.clearCache();
			},
			'should get nested scripts' () {
				
				return Bundler.getResources('index-deep.html', { silent: true }).done(resources => {

					eq_(resources.length, 3);
					has_(resources[0].toJSON(), {type: 'js', url: '/bar.js', asModules: ['commonjs']});
					has_(resources[1].toJSON(), {type: 'js', url: '/foo.js', asModules: ['global']});
					has_(resources[2].toJSON(), {type: 'html'});
				});
			},
			'should ignore nested scripts' () {
				
				return Bundler.getResources('index-single.html', { silent: true }).done(resources => {

					eq_(resources.length, 2);
					return;
					has_(resources[0].toJSON(), {type: 'js', url: '/foo.js', asModules: ['global']});
					has_(resources[1].toJSON(), {type: 'html'});
				});
			}
		}
	}
});

function parse (code, expect, opts: any = {}) {
	var dfr = new class_Dfr();
	opts.type = 'html';
	Bundler.Parser.getDependencies(code, opts).then(result => {
		var deps = result.dependencies;
		eq_(deps.length, expect.length)

		deps.forEach((x, index) => {
			has_(x, expect[index]);
		})

		dfr.resolve();
	});
	return dfr;
}