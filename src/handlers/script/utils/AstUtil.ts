import * as UglifyJS from 'uglify-js';

let nope = function () {
    return true;
};
let variableOverrides = null;

function walk(node, fn) {
    var walker = new UglifyJS.TreeWalker(function (node, descend) {
        return fn.call(this, node, descend);
    });
    node.walk(walker);
}

function findNode(node, fn, options: { scopeOnly: boolean } = { scopeOnly: false }) {
    var result, intop = true;
    walk(node, function (node) {
        if (options.scopeOnly && !intop) {
            if (node instanceof UglifyJS.AST_Scope) {
                return true;
            }
        }
        intop = false;

        if (fn(node)) {
            result = node;
            this.visit = nope;
            return true;
        }
        return null;
    });
    return result;
}

function each(node, selector, fn) {
    walk(node, function (node) {
        return selector(node) ? fn.call(this, node, selector) : null;
    });
}
function getVariableValue(scope, varName) {
    if (variableOverrides && varName in variableOverrides) {
        return variableOverrides[varName];
    }

    var varDef = findNode(scope, function (node) {
        return node instanceof UglifyJS.AST_VarDef && node.name.name == varName;
    }, {
        scopeOnly: true
    });

    if (varDef) {
        return evaluateNode(varDef.value, scope);
    }

    varDef = findNode(scope, function (node) {
        if (node instanceof UglifyJS.AST_Assign && node.left instanceof UglifyJS.AST_SymbolRef && node.left.name == varName) {
            return true;
        }
        return null;
    }, {
        scopeOnly: true
    });

    if (varDef) {
        return evaluateNode(varDef.right, scope);
    }

    return null;
}
function evaluateNode(node, scope) {
    if (scope == null) {
        console.warn('Evaluate Node: Scope is undefined', node);
    }
    switch (node.TYPE) {
        case 'String':
        case 'Number':
        case 'True':
        case 'False':
        case 'Boolean':
            return node.value;
        case 'Array':
            return Array.from(node.elements).map(function (x) {
                return evaluateNode(x, scope);
            });
        case 'Object':
            var aggr = {};
            Array.from(node.properties).forEach(function (x: any) {
                aggr[x.key] = evaluateNode(x.value, scope);
            });
            return aggr;
        case 'Binary':
            var left = evaluateNode(node.left, scope),
                right = evaluateNode(node.right, scope);

            if (left == null || right == null) {
                return null;
            }

            switch (node.operator) {
                case '+':
                    return left + right;
                case '-':
                    return left - right;
                case '*':
                    return left * right;
                case '/':
                    return left / right;
                default:
                    console.error('Unknown operator', node);
            }
            break;
        case 'Assign':
            return evaluateNode(node.right, scope);
        case 'SymbolRef':
            return getVariableValue(scope, node.name);
    }

    //var type = node.TYPE,
    //	info = node.start || node.end || node,
    //	file = '~' + info.file.substr(-25);
    //
    //console.warn('[includes parser]: Dynamic Expression', type, file, ':', info.line);
    return null;
}

function getArguments(args, scope) {
    if (scope == null) {
        console.warn('getArguments: scope is undefined', args);
    }

    args = Array.prototype.slice.call(args);



    args = Array.from(args).map(function (x) {
        return evaluateNode(x, scope);
    });


    return cleanArgs(args);
}
function cleanArgs(args) {
    for (var i = 0, x, length = args.length; i < length; i++) {
        x = args[i];

        if (x == null) {
            args.splice(i, 1);
            length--;
            i--;
            continue;
        }

        if (Array.isArray(x)) {
            for (var j = 0; j < x.length; j++) {
                if (x[j] == null) {
                    x.splice(j, 1);
                    j--;
                }
            }
            continue;
        }

        if (typeof x === 'object') {
            var empty = true;
            for (var key in x) {
                if (x.hasOwnProperty(key) == false) {
                    continue;
                }

                if (x[key] == null) {
                    delete x[key];
                    continue;
                }
                empty = false;
            }

            if (empty) {
                args.splice(i, 1);
                length--;
                i--;
            }
        }
    }

    return args;
}
function getPropertyChain(node, stack) {
    if ((node instanceof UglifyJS.AST_SymbolRef) == false) {
        console.warn('Current node is not a sumbol referencing');
    }

    var i = stack.length - 1,
        chain = [],
        key
    while (--i > -1) {
        var x = stack[i];

        if (x instanceof UglifyJS.AST_PropAccess) {
            chain.push(typeof x.property === 'string' ? x.property : x.property.value);
            continue;
        }
        break;
    }

    return chain;
}

function transform(node, fn) {
    var transform = new UglifyJS.TreeTransformer(fn);
    node.transform(transform);
};



export const AstUtil = {
    findNode: findNode,
    each: each,
    evaluateNode: evaluateNode,
    getArguments: getArguments,
    getPropertyChain: getPropertyChain,
    transform: transform,
    parse: function (code, opts) {

        let options = {
            parse: {},
            compress: false,
            mangle: false,
            output: {
                ast: true,
                code: false
            }
        };
        let result = UglifyJS.minify(code, options);
        if (result.error) {
            let error = result.error;
            error.filename = opts.filename;
            error.toString = function () {
                let str = error.message;
                str += '\n' + opts.filename;
                str += '\n' + code.split(/\r?\n/g)[result.error.line - 1];
                let i = error.col, pad = '';
                while (--i > -1) pad += ' ';
                str += `\n` + pad + '^';
                return str;
            };
            throw error;
        }
        return result.ast;
    },
    is: {
        includeFunction: function (node) {
            return !!(node instanceof UglifyJS.AST_Call && node.start && node.start.value == 'include');
        },
        amdFunction: function (node) {
            if (node instanceof UglifyJS.AST_Call === false) {
                return false;
            }
            if (node.start == null) {
                return false;
            }
            var name = node.start.value;
            var args = node.args;
            if (args.length === 0) {
                return false;
            }
            if (name === 'define') {
                return true;
            }
            if (name === 'require') {
                if (args.length > 1) {
                    return true;
                }
                if (AstUtil.is.string(args[0])) {
                    // is commonjs require
                    return false;
                }
                return true;
            }
            return false;
        },
        commonJsFunction: function (node) {
            if (node instanceof UglifyJS.AST_Call === false) {
                return false;
            }
            if (node.start == null) {
                return false;
            }
            var name = node.start.value;
            var args = node.args;
            if (args.length === 0) {
                return false;
            }
            if (name === 'require') {
                if (args.length !== 1) {
                    return false;
                }

                if (AstUtil.is.string(args[0])) {
                    // is commonjs require
                    return true;
                }
            }
            return false;
        },
        type: function (obj, type) {
            if (type instanceof Array) {
                for (var i = 0, length = type.length; i < length; i++) {
                    if (obj instanceof UglifyJS[type[i]]) {
                        return true;
                    }
                }
                return false;
            }

            return obj instanceof UglifyJS[type];
        },
        string(node) {
            return node instanceof UglifyJS.AST_Node && node.TYPE === 'String';
        }
    },
};
