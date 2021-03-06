import { TestHelper } from '../TestHelper'
import { Bundler } from '../../src/Bundler'

var Files =  {
    'a.js': `
        import './b'
        export const A = '[a]'
    `,
    'b.js': `
        import './e'
        import './d'        
        export const B = '[b]'
    `,
    'c.js': `
        import './d' 
        export const C = '[c]'
    `,
    'd.js': `
        export const D = '[d]'
    `,
    'e.js': `
        export const E = '[e]'
    `,
    'lf': `
        import { D } from './d'
        export const F = '[f]'
    `,
    'var.js': `
        export var __Foo_x = '[foo]'
    `,
};

UTest({
	$before () {
		TestHelper.registerFiles(Files);		
		Bundler.clearCache();
	},
	$after () {
		TestHelper.clearFiles(Files);
	},
	$teardown () {
		Bundler.clearCache();		
	},
	$config: {
		breakOnError: true
    },
    'should serialize simple export' () {
        
        return Bundler.build('main.js', { 
            mainContent: `import 'e.js';`,
            silent: true,
      		package: {
                module: 'import',
                moduleWrapper: 'iif'
            },
		}).done(resources => {
			eq_(resources.length, 1);
			var main = resources[0];

			eq_(main.url, '/build/release/main.js');
            let expect = `
                (function(){
                    var E;
                    (function(){            
                        E = '[e]'        
                    }());        
                }());
            `;
            Helpers.compareLines(main.content, expect);

		});        
    },
    async 'should serialize simple var export' () {
        let content = `export * from 'var.js';`;        
        let code = await Helpers.$process(content);
        let expect = `            
            var __Foo_x;
            (function(){            
                __Foo_x = '[foo]'
            }());               
        `;
        Helpers.compareLines(code, expect);
    },
	async 'should serialize simple re-export' () {
        let content = `export * from 'e.js';`;        
        let code = await Helpers.$process(content);
        let expect = `            
            var E;
            (function(){            
                E = '[e]'        
            }());               
        `;
        Helpers.compareLines(code, expect);
    },
    async 'should serialize simple import' () {
        let content = `import 'c.js';`;        
        let code = await Helpers.$process(content);
        
        let letters = Helpers.$extractLetters(code);
        deepEq_(letters, ['d', 'c']);

        let expect = `
            (function(){
                var C;
                (function(){
                    var D;
                    (function(){
                        D = '[d]'
                    }());
                    C = '[c]'
                }());
            }());
        `;
        Helpers.compareLines(code, expect);
    },
    async 'should serialize simple import 2' () {
        let content = `import './b'`;
        let code = await Helpers.$process(content);
        let letters = Helpers.$extractLetters(code);
        deepEq_(letters, ['e', 'd', 'b']);

        let expect = `
            (function(){
                var B;
                (function(){
                    var E;
                    (function(){
                        E = '[e]'
                    }());
                    var D;
                    (function(){
                        D = '[d]'
                    }());
                    B = '[b]'
                }());
            }());
        `;
        Helpers.compareLines(code, expect);
    },
    async 'should serialize simple import and export' () {
        let content = `import 'c.js'; \n export const Foo = C`;        
        let code = await Helpers.$process(content);
        
        let letters = Helpers.$extractLetters(code);
        deepEq_(letters, ['d', 'c']);

        let expect = `
            var Foo;
            (function(){
                var C;
                (function(){
                    var D;
                    (function(){
                        D = '[d]'
                    }());
                    C = '[c]'
                }());
                Foo = C
            }());
        `;
        Helpers.compareLines(code, expect);

    },
    async 'should serialize all to global scope' () {
        let content = `import { A } from './a';\nexport const Foo = A;`;
        let code = await Helpers.$process(content);
        let letters = Helpers.$extractLetters(code);
        deepEq_(letters, ['e', 'd', 'b', 'a']);
        
        let expect = `
        var Foo;
        (function(){
            var A;
            (function(){
                var B;
                (function(){
                    var E;
                    (function(){
                        E = '[e]'
                    }());
                    var D;
                    (function(){
                        D = '[d]'
                    }());
                    B = '[b]'
                }());
                A = '[a]'
            }());
            Foo = A;
        }());
        `;
        Helpers.compareLines(code, expect);
    },
    async 'should serialize to scope' () {
        let content = `import 'b.js';`;        
        let code = await Helpers.$process(content);
        let letters = Helpers.$extractLetters(code);
        deepEq_(letters, ['e', 'd', 'b']);
        has_(code, /function[^\[]+\[d]/)
    },
    async 'should extract both scoped imports to outer' () {
        let content = `import './b'; \nimport './lf';`;        
        let code = await Helpers.$process(content);
        let letters = Helpers.$extractLetters(code);
        deepEq_(letters, ['e', 'd', 'b', 'f']);

        let expect = `
            (function(){
                var D,
                    D;
                var B;
                (function(){
                    var E;
                    (function(){
                        E = '[e]'
                    }());
                    (function(){
                        D = '[d]'
                    }());
                    B = '[b]'
                }());
                var F;
                (function(){
                    F = '[f]'
                }());
            }());   
        `;
        Helpers.compareLines(code, expect);
    },
    'should build cyclic':  {
        $before () {
            this.files = {
                'foo.js': `
                    import './bar'
                    export const Foo = '[foo]'
                `,
                'bar.js': `
                    import './foo'
                    export const Bar = '[bar]'
                `
            };
            TestHelper.registerFiles(this.files);
        },
        $after () {
            TestHelper.clearFiles(this.files);
        },
        $teardown () {
            Bundler.clearCache();
        },
        async 'cyclic scoped reference' () {
            let content = `import './foo.js';`;
            let code = await Helpers.$process(content);
            let expect = `
                (function(){
                    var Foo;
                    (function(){
                        var Bar;
                        (function(){                
                            Bar = '[bar]'
                        }());
                        Foo = '[foo]'
                    }());
                }());
            `;
            Helpers.compareLines(code, expect);
        },
        async 'cyclic global reference' () {
            let content = `import './foo.js'; \n import './bar.js';`;
            let code = await Helpers.$process(content);
            let expect = `
                (function(){
                    var Foo;
                    (function(){                
                        Foo = '[foo]'
                    }());
                    var Bar;
                    (function(){
                        Bar = '[bar]'
                    }());
                }());
            `;
            Helpers.compareLines(code, expect);
        }
    },
    'should handle reexported import':  {
        $before () {
            this.files = {
                'foo.js': `
                    export { Bar } from './bar'
                    export const Foo = '[foo]'
                `,
                'bar.js': `
                    export const Bar = '[bar]'
                `
            };
            TestHelper.registerFiles(this.files);
        },
        $after () {
            TestHelper.clearFiles(this.files);
        },
        $teardown () {
            Bundler.clearCache();
        },
        async 'reexport single' () {
            let content = `import './foo.js';`;
            let code = await Helpers.$process(content);
            let expect = `
                (function(){
                    var Bar,
                        Foo;
                    (function(){
                        (function(){                
                            Bar = '[bar]'
                        }());
                        Foo = '[foo]'
                    }());
                }());
            `;
            Helpers.compareLines(code, expect);
        }
    },
    'should export scoped vars':  {
        $before () {
            this.files = {
                'foo.js': `
                    import { Bar } from './bar'
                `,
                'bar.js': `
                    var Bar = '[bar]'
                    export { Bar }
                `
            };
            TestHelper.registerFiles(this.files);
        },
        $after () {
            TestHelper.clearFiles(this.files);
        },
        $teardown () {
            Bundler.clearCache();
        },
        async 'unused export' () {
            let content = `import './foo.js';`;
            let code = await Helpers.$process(content);            
            let expect = `
                (function(){
                    (function(){
                        var Bar;
                        (function(){
                            Bar = '[bar]'
                        }());
                    }());
                }());
            `;
            Helpers.compareLines(code, expect);
        }
    },
    'should skip unused export':  {
        $before () {
            this.files = {
                'foo.js': `
                    import { Bar } from './bar'
                `,
                'bar.js': `
                    export const Bar = '[bar]'
                    export var NotBar = ''
                `
            };
            TestHelper.registerFiles(this.files);
        },
        $after () {
            TestHelper.clearFiles(this.files);
        },
        $teardown () {
            Bundler.clearCache();
        },
        async 'unused export' () {
            let content = `import './foo.js';`;
            let code = await Helpers.$process(content, { removeUnusedExports: true });
            let expect = `
                (function (){
                    (function (){
                        var Bar;
                        (function(){
                            Bar = '[bar]'
                            var NotBar = ''          
                        }());
                    }());
                }());
            `;
            Helpers.compareLines(code, expect);
        }
    }
})



namespace Helpers {
    export async function $process (str: string, { 
        moduleWrapper = <'iif' | 'script'> 'iif',  
        removeUnusedExports = false
    } = {}) {
        let resources = await Bundler.build('main.js', { 
            mainContent: str,
            silent: true,
			package: {
                module: 'import',
                moduleWrapper,
                import: {
                    removeUnusedExports
                }
            },
        });
        
        return resources[0].content;
    }
    export function $extractLetters (code: string) {
        let letters = [];
        code.replace(/\[(\w)+\]/g, (full, letter) => {
            letters.push(letter);
            return full;
        });
        return letters;
    }
    export function compareLines (a: string, b: string) {
        function getLines (str) {
            let arr = str
                .split(/\n/g)
                .map((x, i) => ({line:i, str: x.trim()}))
                .filter(x => !!x.str);
            return arr;
        }
        let aLines = getLines(a);
        let bLines = getLines(b);
        eq_(aLines.length, bLines.length, `
            Lines should be equal.
            A:${a}
            B:${b}
        `);

        for (let i = 0; i < aLines.length; i++) {
            let aLine = aLines[i].str.replace(/\s+/g, '');
            let bLine = bLines[i].str.replace(/\s+/g, '');
            eq_(aLine, bLine, `
                Lines are not equal at ${i}.
            `)
            if (aLine !== bLine) {
                break;
            }
        }
        
    }
}