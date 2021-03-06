import { TestHelper } from '../TestHelper';
import { Bundler } from '../../src/Bundler'

UTest({
	$before () {
		Bundler.clearCache();
	},	
	$teardown () {
		Bundler.clearCache();		
	},
	$config: {
		breakOnError: true
	},
	'should just rewrite path with changed base': {
		$before () {
			TestHelper.registerFiles({
				'index.html': `
					<!doctype html>					
					<script src='/node_modules/foo.js' data-bundler='ignore'></script>					
				`
			});
		},		
		'should rewrite path to load file from local app base path' () {
			return Bundler
				.build('index.html', {
					outputMain: 'bar-folder/index.html',
					outputSources: 'bar-folder',
					outputAppBase: '/bar-folder',
					silent: true
				})
				.done(arr => {			
					eq_(arr.length, 1);
					has_(arr[0].content, 'src="/bar-folder/node_modules/foo.js"');
				});
		},
		'should rewrite path to load file from global path relative to index' () {
			return Bundler
				.build('index.html', {
					outputMain: 'bar-folder/index.html',
					outputSources: 'bar-folder',
					silent: true
				})
				.done(arr => {			
					eq_(arr.length, 1);
					has_(arr[0].content, 'src="/node_modules/foo.js"');
				});
		},
	},
	'should build bundles': {
		$before () {
			TestHelper.registerFiles({
				'foo1.js': `var foo = { foo1: true }`,
				'foo2.js': `foo.foo2 = true`,
				'bar1.js': `var bar = { bar1: true }`,
				'bar2.js': `bar.bar2 = true`,
				'index.html': `
					<!doctype html>
					<script src='/foo1.js' data-bundler-bundle='foo'></script>
					<script src='/foo2.js' data-bundler-bundle='foo'></script>
					<script src='/bar1.js' data-bundler-bundle='bar'></script>
					<script src='/bar2.js' data-bundler-bundle='bar'></script>
				`
			});
		},
		'should get resource' () {
			Bundler
				.getResources('index.html', { type: 'html'})
				.done(arr => {
					deepEq_(arr.map(x => x.url), [
						'/foo1.js',
						'/foo2.js',
						'/bar1.js',
						'/bar2.js',
						'/index.html'
					]);
				})
		},
		'should rewrite path to load file from local app base path' () {
			return Bundler
				.build('index.html', {
					outputMain: 'bar-folder/index.html',
					outputSources: 'bar-folder',
					outputAppBase: '/bar-folder',
					silent: true
				})
				.done(arr => {			
					eq_(arr.length, 3);

					eq_(arr[0].url, 'main_foo.js');
					has_(arr[0].filename, '/bar-folder/main_foo.js');

					eq_(arr[1].url, 'main_bar.js');
					has_(arr[1].filename, '/bar-folder/main_bar.js');

					var iFoo = arr[2].content.indexOf('"main_foo.js"');
					var iBar = arr[2].content.indexOf('"main_bar.js"');

					(assert as any).lt_(iFoo, iBar);
				});
		}
	},
	
	'should insert bundles in proper places': {
		$before () {
			TestHelper.registerFiles({
				'foo1.js': `var foo1;`,
				'foo2.js': `var foo2;`,
				'bar1.js': `var bar1;`,
				'bar2.js': `var bar2;`,
				'foo1.css': ` foo1 {} `,
				'foo2.css': ` foo2 {}`,
				'bar1.css': ` bar1 {} `,
				'bar2.css': ` bar2 {}`,
				
				'index.html': `
					<!doctype html>
					<head>
						<link rel='stylesheet' href='csstest1' data-bundler='ignore' />
						<link rel='stylesheet' href='foo1.css' data-bundler-bundle='foo' />
						
						<link rel='stylesheet' href='csstest2' data-bundler='ignore' />
						<link rel='stylesheet' href='foo2.css' data-bundler-bundle='foo' />
					</head>
					<body>
						<link rel='stylesheet' href='bar1.css' data-bundler-bundle='bar' />

						<script src='some-global-main' data-bundler='ignore'></script>

						<script src='/foo1.js' data-bundler-bundle='foo'></script>
						<script src='/foo2.js' data-bundler-bundle='foo'></script>
						
						<script src='some-helpers' data-bundler='ignore'></script>

						<script src='/bar1.js' data-bundler-bundle='bar'></script>
						<script src='/bar2.js' data-bundler-bundle='bar'></script>

						<script src='some-further-helpers' data-bundler='ignore'></script>


						<link rel='stylesheet' href='bar2.css' data-bundler-bundle='bar' />
					</body>
				`
			});
		},
		'should get resource' () {
			Bundler
				.getResources('index.html', { type: 'html'})
				.done(arr => {
					deepEq_(arr.map(x => x.url), [
						'/foo1.css',
						'/foo2.css',
						'/bar1.css',
						'/foo1.js',
						'/foo2.js',
						'/bar1.js',
						'/bar2.js',
						'/bar2.css',
						'/index.html'
					]);
				})
		},
		'should build html' () {
			return Bundler
				.build('index.html', {
					outputMain: 'release.html',
					outputSources: '/',
					silent: true
				})
				.then(arr => {			
					eq_(arr.length, 5);

					var html = arr[4].content;

					return UTest
						.domtest
						.use('cheerio')
						.process(html, `
							find('link') > length 4;
							find('script') > length 5;

							find('link, script') {
								length 9;

								eq(0) {
									has attr href csstest1;
								}
								eq(1) {
									has attr href foo;
								}
								eq(2) {
									has attr href csstest2;
								}
								eq(3) {
									has attr href bar;
								}
								eq(4) {
									has attr src some-global-main;
								}
								eq(5) {
									has attr src foo;
								}
								eq(6) {
									has attr src some-helpers;
								}
								eq(7) {
									has attr src bar;
								}
								eq(8) {
									has attr src some-further-helpers;
								}
							}
						`)
				});
		}
	},

	'!should inline content': {
		$before () {
			TestHelper.registerFiles({
				'foo.css': ` h2 {}`,
				'bar.js': `var bar`,
				'index.html': `
					<!doctype html>
					<body>
						<script src='/bar.js' data-bundler='ignore' data-bundler-content='inline'></script>
						<link href='foo.css' rel='sTylesheet' data-bundler='ignore' data-bundler-content='inline' />
					</body>
				`
			});
		},
		
		'should test inline' () {
			return Bundler
				.build('index.html', { silent: true })
				.then(arr => {			
					eq_(arr.length, 1);

					var html = arr[0].content;
					return UTest
						.domtest
						.use('cheerio')
						.process(html, `
							find ('script') > has text ('var bar');
							find ('style') > has text ('h2 {}');
						`);
				});
		}
	}
	
})