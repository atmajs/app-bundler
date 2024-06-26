import { TestHelper } from '../TestHelper';
import { Bundler } from '../../src/Bundler'
import { File } from 'atma-io'

const Files = {
    'main.js': `
        include
            .js('./data/icons.js')
            .done(resp => {
                include.exports = {
                    letters: require('./data/icons.js')
                };
            });
    `,
    'data/icons.js': `
        include.exports = ['a', 'b'];
    `,
    'global.js': `
        var data = require('main.js');
        function getData () {
            return data;
        }
    `,
    'index.html': `
        <!doctype html>

        <script src='node_modules/include/include.js' data-bundler='ignore'></script>
        <script src='main.js'></script>
    `
};


UTest({
    $before() {
        TestHelper.registerFiles(Files);
        Bundler.clearCache();
    },
    $after() {
        TestHelper.clearFiles(Files);
    },
    $teardown() {
        Bundler.clearCache();
    },
    'should bundle simple script files': {
        $before() {
            TestHelper.registerFiles({
                'main.js': `
                    include
                        .js('./data/icons.js')
                        .done(function (resp) {
                            include.exports = {
                                letters: resp.icons
                            };
                        });
                `,
                'data/icons.js': `
                    include.exports = ['a', 'b'];
                `,
                'index.html': `
                    <!doctype html>
                    <script src='node_modules/include/include.js' data-bundler='ignore'></script>
                    <script src='main.js'></script>
                `
            });
        },
        'should get files'() {
            return Bundler
                .getResources('index.html', { silent: true })
                .then(arr => arr.map(x => x.toJSON(false)))
                .then(arr => {
                    eq_(arr.length, 3);

                    var paths = arr.map(x => x.url);
                    deepEq_(paths, [
                        '/data/icons.js',
                        '/main.js',
                        '/index.html']);

                    var asModules = arr.map(x => x.asModules);
                    deepEq_(asModules, [['includejs'], ['global'], ['root']]);
                });
        },

        'should build files'() {
            return Bundler.build('index.html', {
                package: {
                    module: 'includejs'
                },
                silent: true
            }).done(resources => {

                eq_(resources.length, 2);

                var js = resources[0].content;
                has_(js, "url: '/data/icons.js'");
                has_(js, 'include.pauseStack()');
                has_(js, 'include.resumeStack()');
            });
        },

    },
    // '!should bundle script files embedded via global and via module': {
    //     $before() {
    //         TestHelper.registerFiles({
    //             'main.js': `
    //                 include
    //                     .js('./data/icons.js')
    //                     .done(function (resp) {
    //                         include.exports = {
    //                             letters: resp.icons
    //                         };
    //                     });
    //             `,
    //             'data/icons.js': `
    //                 include.exports = ['a', 'b'];
    //             `,
    //             'index.html': `
    //                 <!doctype html>
    //                 <script src='node_modules/include/include.js' data-bundler='ignore'></script>
    //                 <script src='data/icons.js'></script>
    //                 <script src='main.js'></script>
    //             `
    //         });
    //     },
    //     '!should get files'() {
    //         return Bundler
    //             .getResources('index.html', { silent: true })
    //             .then(arr => arr.map(x => x.toJSON(false)))
    //             .done(arr => {
    //                 eq_(arr.length, 3);

    //                 var paths = arr.map(x => x.url);
    //                 deepEq_(paths, [
    //                     '/data/icons.js',
    //                     '/main.js',
    //                     '/index.html']);

    //                 var asModules = arr.map(x => x.asModules);
    //                 deepEq_(asModules, [['global'], ['global'], ['root']]);
    //             });
    //     },

    //     'should build files'() {
    //         return Bundler.build('index.html', {
    //             package: {
    //                 module: 'includejs'
    //             },
    //             silent: true
    //         }).done(resources => {

    //             eq_(resources.length, 2);

    //             var js = resources[0].content;
    //             has_(js, "include.exports = ['a', 'b'];");
    //         });
    //     },

    // },
    'should bundle css files': {
        $before() {
            TestHelper.registerFiles({
                'main.js': `
                    include
                        .css(['foo.css', 'bar.css'])
                        .js('foo.js')
                `,
                'foo.js': `
                    console.log('Foo');
                `,
                'foo.css': `
                    html {}
                `,
                'bar.css': `
                    body {}
                `,
                'index.html': `
                    <!doctype html>
                    <script src='main.js'></script>
                `
            });
        },
        'should get files'() {
            return Bundler
                .getResources('index.html', { silent: true })
                .then(arr => arr.map(x => x.toJSON(false)))
                .then(arr => {
                    eq_(arr.length, 5);

                    var paths = arr.map(x => x.url);
                    deepEq_(paths, [
                        '/foo.css',
                        '/bar.css',
                        '/foo.js',
                        '/main.js',
                        '/index.html'
                    ]);

                    var asModules = arr.map(x => x.asModules);
                    deepEq_(asModules, [['includejs'], ['includejs'], ['includejs'], ['global'], ['root']]);
                });
        },

        'should build files'() {
            return Bundler.build('index.html', {
                package: {
                    module: 'includejs',
                },
                silent: true
            }).done(resources => {

                eq_(resources.length, 3);

                var urls = resources.map(x => x.url);
                deepEq_(urls, [
                    'main_index.css',
                    'main_index.js',
                    '/build/release/index.html'
                ]);

                var js = resources[1].content.trim();

                '> register resource'
                has_(js, '"url":"/foo.js"');
                has_(js, '"url":"/bar.css"');
                has_(js, '"url":"/foo.css"');

                var css = resources[0].content.trim();
                has_(css.replace(/\s/g, ''), 'html{}body{}');

                var html = resources[2].content.trim();
                has_(html, 'link href="main_index.css"')
                has_(html, 'script src="main_index.js"');
            });
        },
    },
    'should bundle mask files and its resources': {
        $before() {
            TestHelper.registerFiles({
                'foo.js': `
                    console.log('Foo');
                `,
                'Foo.mask': `
                    import * as FooController from './foo.js';
                    import from 'foo.less';
                `,
                'foo.less': `
                    body.foo {}
                `,
                'index.html': `
                    <!doctype html>
                    <script type='text/mask'>
                        import Foo from './Foo';
                    </script>
                `
            });
        },
        'should get files'() {
            return Bundler
                .getResources('index.html', {
                    package: {
                        module: 'includejs'
                    },
                    //silent: true
                })
                .then(arr => arr.map(x => x.toJSON(false)))
                .then(arr => {
                    eq_(arr.length, 4);

                    var paths = arr.map(x => x.url);
                    deepEq_(paths, [
                        '/foo.js',
                        '/foo.less',
                        '/Foo.mask',
                        '/index.html'
                    ]);

                    var types = arr.map(x => x.type);
                    deepEq_(types, [
                        'js',
                        'css',
                        'load',
                        'html'
                    ]);

                    var asModules = arr.map(x => x.asModules);
                    deepEq_(asModules, [['includejs'], ['includejs'], ['includejs'], ['root']]);
                });
        },

        'should build files'() {
            return Bundler.build('index.html', {
                package: {
                    module: 'includejs'
                },
                silent: true
            }).done(resources => {

                eq_(resources.length, 3);

                var urls = resources.map(x => x.url);
                deepEq_(urls, [
                    'main_index.js',
                    'main_index.css',
                    '/build/release/index.html'
                ]);


                var css = resources[1].content.trim();
                eq_(css, 'body.foo {}')


                var js = resources[0].content.trim();

                '> register resource'
                has_(js, '"url":"/foo.less"');
                has_(js, '"url":"/foo.js"');
                has_(js, '"url":"/Foo.mask"');


                var html = resources[2].content.trim();
                has_(html, File.read('Foo.mask'))

                has_(html, 'link href="main_index.css"')
                has_(html, 'script src="main_index.js"');
            });
        },
    },

})
