import { Bundler } from '../../src/Bundler'


UTest({
    $config: {
        timeout: 100_0000
    },
    async $teardown () {
        await Bundler.clearCache();
    },
    async 'should build esm'() {
        let resources = await Bundler.build('**.ts', {
            base: '/test/fixtures/typescript/src/',
            outputBase: '/test/tmp/esm/',
            outputSources: '',
            defaultExtensions: {
                'js': 'ts'
            },
            settings: {
                'atma-loader-ts': {
                    typescript: {
                        compilerOptions: {
                            module: 'ESNext',
                            target: 'ESNext',

                            "baseUrl": "./",
                            "paths": {
                                "@fixtures/*": ["test/fixtures/typescript/src/*"],
                            },
                        }
                    }
                }
            },
            "options": {
                "include": {
                    "routes": {
                        "@fixtures/*": ["test/fixtures/typescript/src/*"]
                    }
                }
            },
        });

        eq_(resources.length, 6);

        let resLoggerTs = get('test/tmp/esm/Logger.js');
        notEq_(resLoggerTs, null, `Logger.ts not found`);
        has_(resLoggerTs.content, `export class Logger`);

        let resLoggerMap = get('test/tmp/esm/Logger.js.map');
        has_(resLoggerMap.content, `{"version":3,"`);
        has_(resLoggerMap.content, `"sources":["../../fixtures/typescript/src/Logger.ts"]`);

        let resLoggerDTs = get('test/tmp/esm/Logger.d.ts');
        has_(resLoggerDTs.content, `export declare class Logger`);

        let resLetterTs = get('test/tmp/esm/Letter.js');
        notEq_(resLetterTs, null, `Letter.ts not found`);
        has_(resLetterTs.content, `import { Logger } from './Logger'`);

        let resLetterDTs = get('test/tmp/esm/Letter.d.ts');
        has_(resLetterDTs.content, `import { Logger } from './Logger'`);
        has_(resLetterDTs.content, `export declare class`);


        function get(path) {
            return resources.find(x => x.filename.endsWith(path))
        }
    },
    async 'should build cjs'() {
        let resources = await Bundler.build('**.ts', {
            base: '/test/fixtures/typescript/src/',
            outputBase: '/test/tmp/esm/',
            outputSources: '',
            defaultExtensions: {
                'js': 'ts'
            },
            settings: {
                'atma-loader-ts': {
                    typescript: {
                        compilerOptions: {
                            module: 'CommonJS',
                            target: 'ESNext',

                            "baseUrl": "./",
                            "paths": {
                                "@fixtures/*": ["test/fixtures/typescript/src/*"],
                            },
                        }
                    }
                }
            },
            "options": {
                "include": {
                    "routes": {
                        "@fixtures/*": ["test/fixtures/typescript/src/*"]
                    }
                }
            },
        });

        eq_(resources.length, 6);

        let resLoggerTs = get('test/tmp/esm/Logger.js');
        notEq_(resLoggerTs, null, `Logger.ts not found`);
        has_(resLoggerTs.content, `exports.Logger = Logger`);

        let resLoggerMap = get('test/tmp/esm/Logger.js.map');
        has_(resLoggerMap.content, `{"version":3,"`);

        let resLoggerDTs = get('test/tmp/esm/Logger.d.ts');
        has_(resLoggerDTs.content, `export declare class Logger`);

        let resLetterTs = get('test/tmp/esm/Letter.js');
        notEq_(resLetterTs, null, `Letter.ts not found`);
        has_(resLetterTs.content, `require("./Logger")`);

        let resLetterDTs = get('test/tmp/esm/Letter.d.ts');
        has_(resLetterDTs.content, `import { Logger } from './Logger'`);
        has_(resLetterDTs.content, `export declare class`);


        function get(path) {
            return resources.find(x => x.filename.endsWith(path))
        }
    }
});
