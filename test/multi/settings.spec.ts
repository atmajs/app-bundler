import { TestHelper } from '../TestHelper';
import { Bundler } from '../../src/Bundler'

UTest({
    $before() {
        Bundler.clearCache();
    },
    $teardown() {
        Bundler.clearCache();
    },
    $config: {
        breakOnError: true
    },
    'should transform inner requires to vars': {
        $before() {
            TestHelper.registerFiles({
                'foo.js': `
                    module.exports = {
                        letters: require('./data/icons')
                    };
                `,
                'data/icons.js': `
                    module.exports = ['a', 'b'];
                `,
            });
        },
        'should rewrite path to load file from local app base path'() {
            return Bundler
                .build('foo.js', {

                    package: {
                        module: 'commonjs',
                        commonjs: {
                            output: 'simplified'
                        }
                    },
                    silent: true

                })
                .done(resources => {
                    eq_(resources.length, 1);
                    var main = resources[0];

                    eq_(main.url, '/build/release/foo.js');
                    var module = {} as any;
                    eval(main.content);
                    deepEq_(module.exports.letters, ['a', 'b']);
                });
        }
    },
    'nodejs file resolution': {
        $before() {
            TestHelper.registerFiles({
                'main.js': `
                    module.exports = require('baz');
                `,
                'node_modules/baz/package.json':  {
                    "main": "lib/some.js"
                },
                'node_modules/baz/lib/some.js': `
                    module.exports = 'a foo some';
                `,
            });
        },
        'should load file with nodejs path resolution'() {
            return Bundler
                .build('main.js', {
                    package: {
                        module: 'commonjs',
                        commonjs: {
                            output: 'simplified'
                        }
                    },
                    silent: true
                })
                .done(resources => {
                    eq_(resources.length, 1);
                    var main = resources[0];

                    eq_(main.url, '/build/release/main.js');

                    var module = {} as any;
                    eval(main.content);
                    deepEq_(module.exports, 'a foo some');
                });
        }
    },
});
