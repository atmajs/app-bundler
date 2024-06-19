import { AstUtil } from '../utils/AstUtil';
import { Include } from '../../../class/Include';
import { ResourcePropMapping } from '../../../class/ResourcePropMapping';
import { BaseParser } from "../../base/BaseParser";
import { class_Dfr } from 'atma-utils';
import { ResourceInfo } from '../../../class/ResourceInfo';

export class IncludeJsParser extends BaseParser {

    constructor (solution, handler) {
        super(solution, handler);

        if (this.solution.opts.package.module === 'includejs') {
            this.solution.opts.mappers.push(...IncludeJsMappings);
        }
    }

    getDependencies (ast, ownerResource) {

        let info = <ResourceInfo> {
            type: null,
            url: null,
            dependencies: [],
            meta: {
                includejs: {
                    hasIncludes: false,
                    hasExports: false,
                    hasResponseObject: false,
                    responseAccessors: null,
                }
            }
        };

        AstUtil.each(ast, AstUtil.is.includeFunction, (node, descend) => {
            function isIncludeSymbolRef (node) {
                return AstUtil.is.type(node, 'AST_SymbolRef') && node.name == 'include';
            }
            let scope = AstUtil.findNode(node, isIncludeSymbolRef).scope || ast;
            this._process(info, node, scope);
            return true;
        });

        if (this._getPropertySetter('exports', ast) != null) {
            info.meta.includejs.hasExports = true;
        }

        return new class_Dfr().resolve(info) as PromiseLike<ResourceInfo>;

    }

    _process(info, node, scope) {

        let arr = [];
        function isIncludeMethodCall (node) {
            return AstUtil.is.type(node, 'AST_Call') && node.start.value == 'include';
        };

        AstUtil.each(node, isIncludeMethodCall, (node) => {

            switch (node.expression && node.expression.property) {
            case 'js':
            case 'css':
            case 'load':
            case 'lazy':
            case 'mask':
            case 'routes':
            case 'setBase':
            case 'cfg':
                let pckg = {
                    type: node.expression.property,
                    args: AstUtil.getArguments(node.args, scope),
                };

                if (pckg.args.length > 0) {
                    arr.unshift(pckg);
                }
                info.meta.includejs.hasIncludes = true;

                break
            case 'done':
            case 'ready':
                this._processIncludeCallback(info, node.args && node.args[0]);
                break;
            case 'instance':
            case 'embed':
            case 'plugin':
            case 'ajax':
            case 'promise':
            case 'client':
            case 'server':
            case 'use':
            case 'getPending':
            case 'getResource':
            case 'getResourceById':
            case 'getResources':
            case 'apply':
                break;
            default:
                this.solution.reporter.warn('getIncludes: Unknown function call', node.expression);
                break;
            }
        });

        let include = new Include();
        arr.forEach(function(x) {
            include[x.type].apply(include, x.args);
        });

        info.dependencies.push(...include.includes);
    }

    _processIncludeCallback (info, CallbackNode) {
        if (AstUtil.is.type(CallbackNode, 'AST_Function') == false) {
            return;
        }

        let meta = info.meta.includejs,
            args = CallbackNode.argnames,
            responseObjectName = args.length > 0
                ? args[args.length - 1].name
                : null;

        if (responseObjectName) {
            meta.hasResponseObject = true;
            let names = this._getPropertyAccessors(responseObjectName, CallbackNode);
            if (names) {
                meta.responseAccessors = (meta.responseAccessors || []).concat(names);
            }
        }
    }

    /**
     *    resolve %name%.propertyAccessor
     */

    _getPropertyAccessors(name, Fn) {
        let references = [];
        Fn.body.forEach(function(x) {
            function isSymbolName(node) {
                return AstUtil.is.type(node, 'AST_SymbolRef') && node.name === name;
            }
            AstUtil.each(x, isSymbolName, function(node) {
                let chain = AstUtil.getPropertyChain(node, this.stack);
                if (chain) {
                    references.push(chain);
                }
            });
        });
        return references;
    }


    /**
     *    aim to find all **.exports = X
     */

    _getPropertySetter(name, Fn) {

        let result = null;
        Fn.body.forEach(function(x) {
            function isPropertyName(node) {
                AstUtil.is.type(node, 'AST_Assign') && node.left.property === name;
            }
            AstUtil.each(x, isPropertyName, function(node) {
                let arr = ['include', 'module', 'exports'];
                if (arr.indexOf(node.start.value) > -1) {
                    result = node;
                }
            });
        });
        return result;
    }

};


let IncludeJsMappings = [
    new ResourcePropMapping({
        asModules: (arr) => arr.indexOf('mask') > -1
    }, {
        asModules: (arr) => {
            let i = arr.indexOf('mask');
            arr[i] = 'includejs';
            return arr;
        }
    }),
    new ResourcePropMapping({
        asModules: (arr) => arr.indexOf('amd') > -1
    }, {
        asModules: (arr) => {
            let i = arr.indexOf('amd');
            arr[i] = 'includejs';
            return arr;
        }
    }),
    new ResourcePropMapping({
        type: 'mask'
    }, {
        type: 'load'
    })
];
