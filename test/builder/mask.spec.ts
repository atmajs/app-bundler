import { TestHelper } from '../TestHelper'
import { Bundler } from '../../src/Bundler'
import { File } from 'atma-io'

const Files =  {
    'main.mask': `
        import Letter from './compos/Letter';
        Letter;
    `,
    'compos/Letter.mask': `
        define Letter {
            h4 > 'I am an A';
        }
    `,
    'global.mask': `
        import from './main';
        i > 'Lorem'
    `,
    'index.html': `
        <!doctype html>
        <script type='text/mask' data-run='auto'>
            import from 'global.mask';
        </script>
    `,
    'about-a.mask': `
        span > 'AboutA';
    `,
    'about-b.mask': `
        span > 'AboutB';
    `,
    'info-a.mask': `
        span > 'InfoA';
    `,
    'info-b.mask': `
        span > 'InfoB';
    `,
    'pages.html': `
        <!doctype html>
        <script type='text/mask' data-run='auto'>
            ViewManager {
                View page='about' {
                    import from './about-a'
                    import from './about-b';
                }
                View page='info' {
                    import from './info-a';
                    import from './info-b';
                }
            }
        </script>
    `,
    'scripts.mask': `
        import * as Provider from './Provider.js';

        define Foo {
            function onRenderStart () {
                this.model = this.$scope('Provider').getName();
            }
            h4 > '~[.]';
        }
        Foo;
    `,
    'Provider.js': `
        module.exports = {
            getName: function () { return 'IFoo' }
        };
    `
};

let mask;
UTest({
    $before () {
        TestHelper.registerFiles(Files);
        mask = require('maskjs');

        Bundler.clearCache();
        mask.Module.clearCache();
        mask.cfg('getFile');
    },
    $after () {
        TestHelper.clearFiles(Files);
    },
    $teardown () {
        Bundler.clearCache();
        mask.Module.clearCache();
        mask.cfg('getFile');
    },
    $config: {
        breakOnError: true
    },
    'should bundle mask' () {
        return Bundler.build('main.mask', {silent: true}).done(resources => {
            eq_(resources.length, 1);
            let main = resources[0];

            eq_(main.type, 'mask');
            eq_(main.url, '/build/release/main.mask');

            let avoid = assert.avoid('Should not load the dependency');
            mask.cfg('getFile', avoid);

            let  html = mask.render(main.content, null, { filename: main.url })
            has_(html, 'I am an A</h4>')
        });
    },
    'should get mask resources for html' () {

        return Bundler
            .getResources('index.html', {silent: true})
            .then(arr => arr.map(x => x.toJSON(false)))
            .then(arr => {
                eq_(arr.length, 4);

                let paths = arr.map(x => x.url);
                deepEq_(paths, ['/compos/Letter.mask', '/main.mask', '/global.mask', '/index.html']);

                let asModules = arr.map(x => x.asModules);
                deepEq_(asModules, [['mask'], ['mask'], ['mask'], ['root']]);
            });
    },
    'should bundle mask in html page' () {
        return Bundler.build('index.html', {silent: true}).done(resources => {

            eq_(resources.length, 1);
            eq_(resources[0].type, 'html');
            let main = resources[0];
            eq_(main.url, '/build/release/index.html');

            ['compos/Letter.mask', 'main.mask', 'global.mask']
                .forEach(path => has_(main.content, `module path="/${path}"`));

        });
    },
    'should test mask sync module loading' (done) {

        let Files = {
            'MyComponents.mask': `
                module path='A.mask' {
                    h1 > 'A'
                }
                module path='B.mask' {
                    h1 > 'B'
                }
                module path='C.mask' {
                    h1 > 'C'
                }
            `,
            'MyNumber.mask': `
                import * as Template from './B';
                Template;
            `
        };
        let _queue = [];
        mask.cfg('getFile', (path) => {
            let dfr = new mask.class.Deferred();
            let name = path.substring(path.lastIndexOf('/') + 1);
            let str = Files[name];
            is_(str, 'String');
            _queue.push(name);
            if (name === 'MyComponents.mask') {
                setTimeout(() => dfr.resolve(str), 200);
                return dfr;
            }
            return dfr.resolve(str);
        });

        mask
            .renderAsync(`
                import sync from './MyComponents';
                import Number from './MyNumber';
            `)
            .done(x => {
                deepEq_(_queue, ['MyComponents.mask', 'MyNumber.mask']);
                done();
            })
    },
    'should test pages in html page' (done) {
        Bundler.build('pages.html', { silent: true }).done(resources => {

            eq_(resources.length, 3);
            let urls = resources.map(x => x.url);
            deepEq_(urls, [
                '/build/release/about_index.mask',
                '/build/release/info_index.mask',
                '/build/release/pages.html'
            ]);

            let main = resources[2];

            urls
                .slice(0, urls.length - 1)
                .forEach(path => has_(main.content, `import sync from '${path}';`));


            mask.cfg('getScript', path => {
                let resource = resources.find(x => path.indexOf(x.url) > -1);
                is_(resource, 'Object', `Resource not found ${path}`);
                return (new mask.class.Deferred()).resolve(resource.content);
            });
            mask.cfg('getFile', path => {
                let resource = resources.find(x => path.indexOf(x.url) > -1);
                is_(resource, 'Object', `Resource not found ${path}`);
                return (new mask.class.Deferred()).resolve(resource.content);
            });

            let template = mask.j(main.content).find('script').text();
            mask
                .renderAsync(template, {}, { filename: main.url })
                .done(html => {
                    is_(html, 'String');
                    done();
                })
        });
    },
    'should test mask scripts' (done) {
        Bundler.build('scripts.mask', {silent: true}).done(resources => {

            eq_(resources.length, 2);
            let urls = resources.map(x => x.url);
            deepEq_(urls, [
                '/build/release/main_index.js',
                '/build/release/scripts.mask'
            ]);



            let main = resources[1];
            has_(main.content, `import sync from 'main_index.js';`);
            mask.cfg('getScript', assert.await(path => {
                if (path.includes('Provider.js')) {
                    return Promise.resolve(require('../../Provider.js'));
                }

                let resource = resources.find(x => path.indexOf(x.url) > -1);
                notEq_(resource, null, 'Failed for path ' + path);

                eval(resource.content);
                return Promise.resolve();
            }));

            let template = main.content;
            mask
                .renderAsync(template, {}, { filename: main.url }, null, new mask.Compo())
                .fail(console.error)
                .done(html => {
                    has_(html, 'IFoo</h4>');
                    done();
                })

        });
    },
    'should test mask with styles': {
         $before () {
            TestHelper.registerFiles({
                'button.mask': `

                    import from './button.css';
                    import Clickable from '/compos/Clickable';
                    define Button extends Clickable {
                        h4 > '~[ this.getFoo() ]'
                    }
                    Button;
                `,
                'compos/Clickable.mask': `
                    import from '../compos/clickable.css';
                    define Clickable {
                        function getFoo () {
                            return 42;
                        }
                    }
                `,
                'button.css': `
                    button { border: 0px; }
                `,
                'compos/clickable.css': `
                    button:hover { background: red}
                `
            });
        },

        'should test deps' () {
            let bundler = new Bundler('button.mask', {silent: true});
            return bundler
                .getResources()
                .then(result => {
                    let urls = result.map(x => x.url);
                    deepEq_(urls, [
                        '/button.css',
                        '/compos/clickable.css',
                        '/compos/Clickable.mask',
                        '/button.mask'
                    ]);
                });
        },

        'should test build' (done) {

            Bundler.build('button.mask', {silent: true}).done(resources => {


                eq_(resources.length, 2);
                let urls = resources.map(x => x.url);
                deepEq_(urls, [
                    '/build/release/main_index.css',
                    '/build/release/button.mask'
                ]);

                let styles = [
                    File.read('button.css'),
                    File.read('compos/clickable.css')
                ].join('\n');

                eq_(resources[0].content, styles);

                let main = resources[1];
                mask.cfg('getFile', assert.avoid());
                mask
                    .renderAsync(main.content, {}, { filename: main.url}, null, new mask.Compo())
                    .fail(console.error)
                    .done(html => {
                        has_(html, '42</h4>');
                        done();
                    })

            });
        }
    }
})
