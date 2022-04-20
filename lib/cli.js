var _node_modules_tslib_tslib = {};
var _src_Bundler = {};
var _src_Runner = {};
var _src_assets_AssetsManager = {};
var _src_assets_CssAssets = {};
var _src_assets_MaskAssets = {};
var _src_builder_Builder = {};
var _src_class_HandlersUtils = {};
var _src_class_Include = {};
var _src_class_Middlewares = {};
var _src_class_OutputResources = {};
var _src_class_Reporter = {};
var _src_class_Resource = {};
var _src_class_ResourceInfo = {};
var _src_class_ResourcePropMapping = {};
var _src_class_Solution = {};
var _src_class_SolutionOpts = {};
var _src_class_VarDefinitions = {};
var _src_config_Configuration = {};
var _src_config_File = {};
var _src_config_MultiBundle = {};
var _src_global = {};
var _src_handlers_base_BaseBuilder = {};
var _src_handlers_base_BaseHandler = {};
var _src_handlers_base_BaseParser = {};
var _src_handlers_base_BasePathResolver = {};
var _src_handlers_base_BaseRewriter = {};
var _src_handlers_css_CssBuilder = {};
var _src_handlers_css_CssHandler = {};
var _src_handlers_css_CssParser = {};
var _src_handlers_css_CssPathResolver = {};
var _src_handlers_css_CssRewriter = {};
var _src_handlers_exports = {};
var _src_handlers_html_HtmlBuilder = {};
var _src_handlers_html_HtmlHandler = {};
var _src_handlers_html_HtmlParser = {};
var _src_handlers_html_HtmlPathResolver = {};
var _src_handlers_html_HtmlRewriter = {};
var _src_handlers_html_readers_BaseTagReader = {};
var _src_handlers_html_readers_MaskContentReader = {};
var _src_handlers_html_readers_ScriptContentReader = {};
var _src_handlers_html_readers_ScriptLinkReader = {};
var _src_handlers_html_readers_StyleLinkReader = {};
var _src_handlers_html_serializers_BaseSerializer = {};
var _src_handlers_html_serializers_HtmlSerializer = {};
var _src_handlers_html_serializers_LoadSerializer = {};
var _src_handlers_html_serializers_MaskSerializer = {};
var _src_handlers_html_serializers_ScriptSerializer = {};
var _src_handlers_html_serializers_StyleSerializer = {};
var _src_handlers_load_LoadBuilder = {};
var _src_handlers_load_LoadHandler = {};
var _src_handlers_load_LoadParser = {};
var _src_handlers_load_LoadPathResolver = {};
var _src_handlers_load_LoadRewriter = {};
var _src_handlers_mask_MaskBuilder = {};
var _src_handlers_mask_MaskHandler = {};
var _src_handlers_mask_MaskParser = {};
var _src_handlers_mask_MaskPathResolver = {};
var _src_handlers_mask_MaskRewriter = {};
var _src_handlers_mask_MaskScriptable = {};
var _src_handlers_script_ModuleTree = {};
var _src_handlers_script_ScriptBuilder = {};
var _src_handlers_script_ScriptHandler = {};
var _src_handlers_script_ScriptParser = {};
var _src_handlers_script_ScriptPathResolver = {};
var _src_handlers_script_ScriptRewriter = {};
var _src_handlers_script_amd_js_AmdJsBuilder = {};
var _src_handlers_script_amd_js_AmdJsHandler = {};
var _src_handlers_script_amd_js_AmdJsParser = {};
var _src_handlers_script_amd_js_AmdJsRewriter = {};
var _src_handlers_script_base_BaseScriptBuilder = {};
var _src_handlers_script_common_js_CommonJsBuilder = {};
var _src_handlers_script_common_js_CommonJsBuilderSimplified = {};
var _src_handlers_script_common_js_CommonJsHandler = {};
var _src_handlers_script_common_js_CommonJsParser = {};
var _src_handlers_script_common_js_CommonJsPathResolver = {};
var _src_handlers_script_common_js_CommonJsRewriter = {};
var _src_handlers_script_common_js_ModuleWrapper = {};
var _src_handlers_script_common_js_templates_Templates = {};
var _src_handlers_script_global_js_GlobalJsBuilder = {};
var _src_handlers_script_global_js_GlobalJsHandler = {};
var _src_handlers_script_global_js_GlobalJsParser = {};
var _src_handlers_script_global_js_GlobalJsRewriter = {};
var _src_handlers_script_import_js_Builder = {};
var _src_handlers_script_import_js_Dictionary = {};
var _src_handlers_script_import_js_ImportJsBuilder = {};
var _src_handlers_script_import_js_ImportJsHandler = {};
var _src_handlers_script_import_js_ImportJsParser = {};
var _src_handlers_script_import_js_ImportJsRewriter = {};
var _src_handlers_script_import_js_ModuleFile = {};
var _src_handlers_script_import_js_Parser = {};
var _src_handlers_script_import_js_String = {};
var _src_handlers_script_import_js_utils = {};
var _src_handlers_script_include_js_IncludeJsBuilder = {};
var _src_handlers_script_include_js_IncludeJsHandler = {};
var _src_handlers_script_include_js_IncludeJsParser = {};
var _src_handlers_script_include_js_IncludeJsRewriter = {};
var _src_handlers_script_mask_js_MaskJsBuilder = {};
var _src_handlers_script_mask_js_MaskJsHandler = {};
var _src_handlers_script_mask_js_MaskJsParser = {};
var _src_handlers_script_mask_js_MaskJsRewriter = {};
var _src_handlers_script_utils_AstUtil = {};
var _src_loader_Loader = {};
var _src_loader_Watcher = {};
var _src_parser_Parser = {};
var _src_utils_arr = {};
var _src_utils_async = {};
var _src_utils_color = {};
var _src_utils_npm = {};
var _src_utils_obj = {};
var _src_utils_path = {};
var _src_utils_res = {};
var _src_utils_template = {};
var _src_utils_tree = {};

// source ./ModuleSimplified.js
var _src_global;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_global != null ? _src_global : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.logger = exports.assert = exports.mask = void 0;
let g = global;
let mask = require('maskjs');
exports.mask = mask;
let assert = require('assert');
exports.assert = assert;
let logger = require('atma-logger');
exports.logger = logger;
let io = g.io || require('atma-io');
exports.io = io;
/* Make compatible with previous atma-loaders */
g.Class = require('atma-class');
//# sourceMappingURL=global.js.map
//# sourceMappingURL=global.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_global === module.exports) {
        // do nothing if
    } else if (__isObj(_src_global) && __isObj(module.exports)) {
        Object.assign(_src_global, module.exports);
    } else {
        _src_global = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_path;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_path != null ? _src_utils_path : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.path_toAbsolute = exports.path_removeQuery = exports.path_sliceQuery = exports.path_sliceHash = exports.path_combine = exports.path_toRelative = exports.path_isRelative = exports.path_resolveUrl = exports.path_normalize = exports.path_resolveCurrent = exports.path_withProtocol = exports.path_appendQuery = exports.path_getExtension = exports.path_getFile = exports.path_getDir = void 0;
var isWeb = true;
function path_getDir(path) {
    return path.substring(0, path.lastIndexOf('/') + 1);
}
exports.path_getDir = path_getDir;
;
function path_getFile(path) {
    path = path
        .replace('file://', '')
        .replace(/\\/g, '/')
        .replace(/\?[^\n]+$/, '');
    if (/^\/\w+:\/[^\/]/i.test(path)) {
        // win32 drive
        return path.substring(1);
    }
    return path;
}
exports.path_getFile = path_getFile;
;
function path_getExtension(path) {
    var query = path.indexOf('?');
    if (query !== -1) {
        path = path.substring(0, query);
    }
    var match = rgx_EXT.exec(path);
    return match == null ? '' : match[1];
}
exports.path_getExtension = path_getExtension;
;
function path_appendQuery(path, key, val) {
    var conjunctor = path.indexOf('?') === -1 ? '?' : '&';
    return path + conjunctor + key + '=' + val;
}
exports.path_appendQuery = path_appendQuery;
;
function path_withProtocol(path) {
    return /^\/\/|^file:|^https?:|^ftps?:/i.test(path);
}
exports.path_withProtocol = path_withProtocol;
;
var current_;
function path_resolveCurrent() {
    if (current_ != null)
        return current_;
    return (current_ = path_win32Normalize(process.cwd()));
}
exports.path_resolveCurrent = path_resolveCurrent;
;
function path_normalize(path) {
    var path_ = path
        .replace(/\\/g, '/')
        // remove double slashes, but not near protocol
        .replace(/([^:\/])\/{2,}/g, '$1/')
        // './xx' to relative string
        .replace(/^\.\//, '')
        // join 'xx/./xx'
        .replace(/\/\.\//g, '/');
    // use triple slashes by file protocol
    if (/^file:\/\/[^\/]/.test(path_)) {
        path_ = path_.replace('file://', 'file:///');
    }
    return path_collapse(path_);
}
exports.path_normalize = path_normalize;
;
function path_resolveUrl(path, base) {
    var url = path_normalize(path);
    if (path_isRelative(url)) {
        return path_normalize(path_combine(base || path_resolveCurrent(), url));
    }
    if (rgx_PROTOCOL.test(url))
        return url;
    if (url.charCodeAt(0) === 47 /*/*/) {
    }
    return url;
}
exports.path_resolveUrl = path_resolveUrl;
;
function path_isRelative(path) {
    return rgx_PROTOCOL.test(path) === false;
}
exports.path_isRelative = path_isRelative;
;
function path_toRelative(path, anchor, base) {
    let pathNormalized = path_normalize(path);
    let anchorNormalized = path_normalize(anchor);
    let path_ = path_resolveUrl(pathNormalized, base);
    let absolute_ = path_resolveUrl(anchorNormalized, base);
    if (pathNormalized.includes(anchorNormalized) === false && path_getExtension(absolute_) !== '') {
        // in-case anchor is a File
        absolute_ = path_getDir(absolute_);
    }
    absolute_ = path_combine(absolute_, '/');
    if (path_.toUpperCase().indexOf(absolute_.toUpperCase()) === 0) {
        return path_.substring(absolute_.length);
    }
    else {
        var sub = '../';
        while (true) {
            var folder = absolute_.replace(/[^\/]+\/?$/, '');
            if (folder === '' || folder === absolute_) {
                break;
            }
            absolute_ = folder;
            if (path_.toUpperCase().indexOf(absolute_.toUpperCase()) === 0) {
                return path_combine(sub, path_.substring(absolute_.length));
            }
            sub += '../';
        }
    }
    return path;
}
exports.path_toRelative = path_toRelative;
;
function path_combine(...args) {
    var out = '', imax = args.length, i = -1, x;
    while (++i < imax) {
        x = args[i];
        if (!x)
            continue;
        x = path_normalize(x);
        if (out === '') {
            out = x;
            continue;
        }
        if (out[out.length - 1] !== '/') {
            out += '/';
        }
        if (x[0] === '/') {
            x = x.substring(1);
        }
        out += x;
    }
    return path_collapse(out);
}
exports.path_combine = path_combine;
;
function path_sliceHash(url) {
    if (url == null)
        return null;
    var i = url.indexOf('#');
    if (i === -1)
        return null;
    return url.substring(i);
}
exports.path_sliceHash = path_sliceHash;
;
function path_sliceQuery(url) {
    if (url == null)
        return null;
    var i = url.indexOf('?');
    if (i === -1)
        return null;
    return url.substring(i);
}
exports.path_sliceQuery = path_sliceQuery;
;
function path_removeQuery(url) {
    if (url == null)
        return null;
    var i = url.indexOf('#');
    if (i !== -1)
        url = url.substring(0, i);
    var i = url.indexOf('?');
    if (i !== -1)
        url = url.substring(0, i);
    return url;
}
exports.path_removeQuery = path_removeQuery;
;
function path_toAbsolute(path, parentLocation, rootLocation) {
    path = path_normalize(path);
    if (path_isRelative(path) === false) {
        return path;
    }
    if (path[0] === '/') {
        if (rootLocation == null) {
            rootLocation = path_resolveCurrent();
        }
        return path_combine(rootLocation, path);
    }
    if (parentLocation == null) {
        parentLocation = rootLocation || path_resolveCurrent();
    }
    return path_combine(parentLocation, path);
}
exports.path_toAbsolute = path_toAbsolute;
;
var _cwd;
function cwd() {
    return _cwd || (_cwd = path_normalize(process.cwd()));
}
var rgx_PROTOCOL = /^(file|https?):/i, rgx_SUB_DIR = /[^\/\.]+\/\.\.\//, rgx_FILENAME = /\/[^\/]+\.\w+(\?.*)?(#.*)?$/, rgx_EXT = /\.(\w+)$/, rgx_win32Drive = /(^\/?\w{1}:)(\/|$)/;
function path_win32Normalize(path) {
    path = path_normalize(path);
    if (path.substring(0, 5) === 'file:')
        return path;
    return 'file://' + path;
}
function path_collapse(url_) {
    var url = url_;
    while (rgx_SUB_DIR.test(url)) {
        url = url.replace(rgx_SUB_DIR, '');
    }
    return url;
}
function path_ensureTrailingSlash(path) {
    if (path.charCodeAt(path.length - 1) === 47 /* / */)
        return path;
    return path + '/';
}
function path_sliceFilename(path) {
    return path_ensureTrailingSlash(path.replace(rgx_FILENAME, ''));
}
//# sourceMappingURL=path.js.map
//# sourceMappingURL=path.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_path === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_path) && __isObj(module.exports)) {
        Object.assign(_src_utils_path, module.exports);
    } else {
        _src_utils_path = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_color;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_color != null ? _src_utils_color : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.color = void 0;
function color(str) {
    return str.color;
}
exports.color = color;
//# sourceMappingURL=color.js.map
//# sourceMappingURL=color.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_color === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_color) && __isObj(module.exports)) {
        Object.assign(_src_utils_color, module.exports);
    } else {
        _src_utils_color = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_res;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_res != null ? _src_utils_res : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.res_find = exports.res_walk = exports.res_getTreeInfo = exports.res_flattern = exports.res_getPage = exports.res_groupResourcesByType = exports.res_groupByPageAndBundles = exports.res_groupByBundle = exports.res_groupByPage = exports.res_groupByType = void 0;
const path_1 = _src_utils_path;
const color_1 = _src_utils_color;
function res_groupByType(arr, opts) {
    var pckg = {}, imax = arr.length, i = -1;
    while (++i < imax) {
        var path = arr[i];
        var ext = (0, path_1.path_getExtension)(path);
        var type = opts.getTypeForExt(ext);
        append(pckg, type, path);
    }
    return pckg;
}
exports.res_groupByType = res_groupByType;
;
function res_groupByPage(arr, opts) {
    var pages = {}, imax = arr.length, i = -1;
    while (++i < imax) {
        var resource = arr[i];
        var name = res_getPage(resource, opts);
        append(pages, name, resource);
    }
    return pages;
}
exports.res_groupByPage = res_groupByPage;
;
function res_groupByBundle(arr) {
    var bundles = {}, imax = arr.length, i = -1;
    while (++i < imax) {
        var resource = arr[i];
        var name = resource.bundle;
        append(bundles, name, resource);
    }
    return bundles;
}
exports.res_groupByBundle = res_groupByBundle;
;
function res_groupByPageAndBundles(arr, opts) {
    var pages = res_groupByPage(arr, opts);
    for (var key in pages) {
        pages[key] = res_groupByBundle(pages[key]);
    }
    return pages;
}
exports.res_groupByPageAndBundles = res_groupByPageAndBundles;
;
function res_groupResourcesByType(arr, opts) {
    var out = {}, imax = arr.length, i = -1;
    while (++i < imax) {
        var resource = arr[i];
        var type = resource.type;
        append(out, type, resource);
    }
    return out;
}
exports.res_groupResourcesByType = res_groupResourcesByType;
;
function res_getPage(resource, opts) {
    var pages = resource.inPages;
    if (pages == null || pages.length === 0)
        return opts.mainPage;
    if (pages.length === 1) {
        return pages[0];
    }
    return opts.mainPage;
    //@TODO pagebundles
    if (pages.indexOf(opts.mainPage) !== -1) {
        return opts.mainPage;
    }
    return pages.sort().join('-');
}
exports.res_getPage = res_getPage;
;
function append(pckg, name, x) {
    var arr = pckg[name];
    if (arr == null) {
        arr = pckg[name] = [];
    }
    arr.push(x);
}
function res_flattern(resource, dependencies) {
    let arr = ResFlatternUtils.flattern(resource);
    if (dependencies) {
        outer: for (let i = 0; i < arr.length; i++) {
            let a = arr[i];
            let deps = dependencies.filter(x => x.resource.test(a.url));
            if (deps.length === 0) {
                continue;
            }
            let indexes = [i];
            for (let j = i + 1; j < arr.length; j++) {
                let b = arr[j];
                if (b == null) {
                    continue;
                }
                let isSame = deps.some(x => x.resource.test(b.url));
                if (isSame) {
                    indexes.push(j);
                    continue;
                }
                let isDependency = deps.some(x => x.dependency.test(b.url));
                if (isDependency) {
                    let cursor = j;
                    indexes.forEach(idx => {
                        arr.splice(++cursor, 0, arr[idx]);
                    });
                    indexes.reverse().forEach(idx => {
                        arr.splice(idx, 1);
                    });
                    i--;
                    continue outer;
                }
            }
        }
    }
    return arr;
}
exports.res_flattern = res_flattern;
;
var ResFlatternUtils;
(function (ResFlatternUtils) {
    function flattern(resource, copyInfo = false, out = [], hash = {}) {
        if (resource.url in hash) {
            return out;
        }
        if (resource.resources) {
            resource
                .resources
                .filter(x => x.isCyclic !== true)
                .forEach(x => flattern(x, copyInfo, out, hash));
        }
        let cached = hash[resource.url];
        if (cached == null) {
            hash[resource.url] = resource;
            out.push(resource);
        }
        else {
            if (copyInfo) {
                takeModuleDescriptions(cached, resource);
                takePageDefinitions(cached, resource);
            }
        }
        return out;
    }
    ResFlatternUtils.flattern = flattern;
    // export function distinct(stack) {
    //     for (var i = 0; i < stack.length; i++) {
    //         for (var j = i + 1; j < stack.length; j++) {
    //             if (stack[i].url === stack[j].url) {
    //                 takeModuleDescriptions(stack[i], stack[j]);
    //                 takePageDefinitions(stack[i], stack[j]);
    //                 stack.splice(j, 1);
    //                 j--;
    //             }
    //         }
    //     }
    //     return stack;
    // }
    // export function toArray(resource, out) {
    //     if (resource.resources) {
    //         resource
    //             .resources
    //             .filter(x => x.isCyclic !== true)
    //             .forEach(x => toArray(x, out));
    //     }
    //     out['push'](resource);
    //     return out;
    // }
    function takeModuleDescriptions(resA, resB) {
        if (resB.asModules == null || resB.asModules.length === 0) {
            return;
        }
        resB
            .asModules
            .filter(name => resA.asModules.indexOf(name) === -1)
            .forEach(name => resA.asModules.push(name));
    }
    function takePageDefinitions(resA, resB) {
        if (resB.inPages == null || resB.inPages.length === 0) {
            return;
        }
        resB
            .inPages
            .filter(name => resA.inPages.indexOf(name) === -1)
            .forEach(name => resA.inPages.push(name));
    }
})(ResFlatternUtils || (ResFlatternUtils = {}));
/* Array of resources or root resource */
function res_getTreeInfo(mix) {
    var arr = Array.isArray(mix) ? mix : ResFlatternUtils.flattern(mix);
    var paths = arr.map(x => {
        var pages = x.inPages.map(page => (0, color_1.color)(`bg_white<black<${page}>>`)).join(' ');
        return `${x.url} ${pages}`;
    }).sort();
    return {
        count: arr.length,
        treeString: ResGetTreeInfo.formatTree(paths)
    };
}
exports.res_getTreeInfo = res_getTreeInfo;
;
var ResGetTreeInfo;
(function (ResGetTreeInfo) {
    // export function flattern(resource: Resource) {
    //     return toUniqueArray(resource, [], {});
    // };
    //- function distinct(stack) {
    //     for (var i = 0; i < stack.length; i++) {
    //         for (var j = i + 1; j < stack.length; j++) {
    //             if (stack[i].url === stack[j].url) {
    //                 stack.splice(j, 1);
    //                 j--;
    //             }
    //         }
    //     }
    //     return stack;
    // }
    function toUniqueArray(resource, out, hash) {
        if (resource.resources) {
            resource
                .resources
                .filter(x => x.isCyclic !== true)
                .forEach(x => toUniqueArray(x, out, hash));
        }
        if (hash[resource.url] == null) {
            hash[resource.url] = true;
            out.push(resource);
        }
        return out;
    }
    function formatTree(paths) {
        var tree = tree_fromPaths(paths);
        tree = tree_collapse(tree);
        var str = '';
        formatArr(tree, 0);
        return str;
        function formatArr(items, indent) {
            items.forEach((item, index) => {
                str += getIndent(indent, index === items.length - 1);
                str += (0, color_1.color)(`yellow<${item.id}>`);
                str += '\n';
                formatArr(item.items, indent + 1);
            });
        }
        function getIndent(indent, isLastEntry) {
            var i = -1;
            var str = '';
            while (++i < indent) {
                var leading = i === indent - 1 && isLastEntry ? '└' : '|';
                var seperator = i === indent - 1 ? '───' : '   ';
                str += leading + seperator;
            }
            return str;
        }
    }
    ResGetTreeInfo.formatTree = formatTree;
    function tree_collapse(arr) {
        arr.forEach(item => {
            if (item.items.length === 1) {
                item.id += '/' + item.items[0].id;
                item.items = item.items[0].items;
            }
            tree_collapse(item.items);
        });
        return arr;
    }
    function tree_fromPaths(model) {
        var index = -1, index_ = index, i = 0, imax = model.length;
        for (; i < imax - 1; i++) {
            index_ = str_lastSameIndex(model[i], model[++i]);
            if (index === -1 || index > index_) {
                index = index_;
            }
        }
        if (imax === 1)
            model[0] = model[0].substring(model[0].lastIndexOf('/') + 1);
        if (index > 0) {
            index_ = model[0].lastIndexOf('/');
            if (index_ < index) {
                index = index_;
            }
            for (i = 0; i < imax; i++) {
                model[i] = model[i].substring(index);
                if (model[i][0] === '/')
                    model[i] = model[i].substring(1);
            }
        }
        var tree = [], parts;
        for (var i = 0, imax = model.length; i < imax; i++) {
            tree_ensurePath(tree, model[i].split('/'));
        }
        return tree;
    }
    function tree_getItem(items, id) {
        for (var i = 0, x, imax = items.length; i < imax; i++) {
            x = items[i];
            if (x.id === id)
                return x;
        }
        return null;
    }
    function tree_ensurePath(rootItems, parts) {
        var items = rootItems, item_, item;
        for (var i = 0, imax = parts.length; i < imax; i++) {
            item_ = tree_getItem(items, parts[i]);
            if (item_ == null) {
                item_ = {
                    id: parts[i],
                    items: []
                };
                items.push(item_);
            }
            items = item_.items;
        }
        return items;
    }
    function str_lastSameIndex(str, compare) {
        var i = 0, imax = str.length < compare.length
            ? str.length
            : compare.length;
        for (; i < imax; i++) {
            if (str.charCodeAt(i) !== compare.charCodeAt(i)) {
                break;
            }
        }
        return i;
    }
    function path_combine(_1, _2) {
        if (_1[_1.length - 1] === '/')
            _1 = _1.substring(0, _1.length - 1);
        if (_2[0] !== '/')
            _2 = '/' + _2;
        return _1 + _2;
    }
})(ResGetTreeInfo || (ResGetTreeInfo = {}));
function res_walk(res, fn) {
    var result = fn(res);
    if (result === false)
        return result;
    var arr = res.resources;
    if (arr == null)
        return;
    var imax = arr.length, i = -1;
    while (++i < imax) {
        var x = arr[i];
        if (x.isCyclic === true) {
            continue;
        }
        result = res_walk(x, fn);
        if (result === false) {
            return result;
        }
    }
}
exports.res_walk = res_walk;
;
function res_find(res, matcher) {
    var out = null;
    res_walk(res, x => {
        if (matcher(x)) {
            out = x;
            return false;
        }
    });
    return out;
}
exports.res_find = res_find;
//# sourceMappingURL=res.js.map
//# sourceMappingURL=res.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_res === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_res) && __isObj(module.exports)) {
        Object.assign(_src_utils_res, module.exports);
    } else {
        _src_utils_res = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_Middlewares;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class_Middlewares != null ? _src_class_Middlewares : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._middlewares = void 0;
const atma_utils_1 = require("atma-utils");
class Middlewares {
    constructor() {
        this.runners = {};
        this.supports = {
            'parseDependencies': function (resource, deps, opts, solution) {
                return new atma_utils_1.class_Dfr();
            },
            'buildResources': function (resources, solution) {
                return new atma_utils_1.class_Dfr();
            },
            'rewriteDependencies': function (resources, solution) {
                var outputItems = solution.outputResources.items;
                return new atma_utils_1.class_Dfr();
            },
            'buildBundle': function (outputItem) {
                return new atma_utils_1.class_Dfr();
            }
        };
        this.runners = {};
        this.supports = {
            'parseDependencies': function (resource, deps, opts, solution) {
                return new atma_utils_1.class_Dfr();
            },
            'buildResources': function (resources, solution) {
                return new atma_utils_1.class_Dfr();
            },
            'rewriteDependencies': function (resources, solution) {
                var outputItems = solution.outputResources.items;
                return new atma_utils_1.class_Dfr();
            },
            'buildBundle': function (outputItem) {
                return new atma_utils_1.class_Dfr();
            }
        };
    }
    define(name, fn) {
        if (this.supports[name] === void 0) {
            throw new Error('Unsupported middleware name: ' + name);
        }
        var fns = this.runners[name];
        if (fns == null) {
            fns = this.runners[name] = [];
        }
        fns.push(fn);
    }
    run(name, ...args) {
        if (this.supports[name] === void 0) {
            throw new Error('Unsupported middleware name: ' + name);
        }
        var dfr = new atma_utils_1.class_Dfr;
        var fns = this.runners[name];
        if (fns == null || fns.length === 0) {
            return dfr.resolve(...args);
        }
        var arr = fns.slice();
        function next(...transformedArgs) {
            var nextArgs = transformedArgs.length === 0 ? args : transformedArgs;
            if (arr.length === 0) {
                dfr.resolve(...(nextArgs || []));
                return;
            }
            args = nextArgs;
            var fn = arr.shift();
            var result = fn.call(null, ...args);
            if (result != null) {
                if (result.then) {
                    result.then(next, error => dfr.reject(error));
                    return;
                }
                if (Array.isArray(result)) {
                    args = result;
                }
                else {
                    args = [result];
                }
            }
            next();
        }
        next();
        return dfr;
    }
}
exports._middlewares = new Middlewares;
//# sourceMappingURL=Middlewares.js.map
//# sourceMappingURL=Middlewares.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class_Middlewares === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class_Middlewares) && __isObj(module.exports)) {
        Object.assign(_src_class_Middlewares, module.exports);
    } else {
        _src_class_Middlewares = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_async;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_async != null ? _src_utils_async : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.async_run = exports.async_reject = exports.async_resolve = exports.async_whenAll = exports.async_waterfall = exports.async_map = void 0;
const atma_utils_1 = require("atma-utils");
function async_map(arr, mapper) {
    var out = new Array(arr.length);
    var dfr = new atma_utils_1.class_Dfr;
    var errored = false;
    var wait = arr.length;
    if (wait === 0) {
        return dfr.resolve(out);
    }
    arr.forEach((x, i) => {
        if (x == null) {
            set(null, i);
            return;
        }
        var mix = mapper(x);
        if (mix == null || mix.then == null) {
            set(mix, i);
            return;
        }
        mix.then(x => set(x, i), error => {
            errored = true;
            dfr.reject(error);
        });
    });
    function set(value, i) {
        if (errored) {
            return;
        }
        out[i] = value;
        if (--wait === 0) {
            dfr.resolve(out);
        }
    }
    return dfr;
}
exports.async_map = async_map;
;
function async_waterfall(arr, mapper) {
    var out = new Array(arr.length);
    var dfr = new atma_utils_1.class_Dfr;
    var i = -1;
    next();
    function next() {
        if (++i >= arr.length) {
            dfr.resolve(out);
            return;
        }
        var x = arr[i];
        if (x == null) {
            set(null, i);
            next();
            return;
        }
        var mix = mapper(x);
        if (mix == null || mix.then == null) {
            set(mix, i);
            next();
            return;
        }
        mix.then(x => {
            set(x, i);
            next();
        }, error => {
            dfr.reject(error);
        });
    }
    function set(value, i) {
        out[i] = value;
    }
    return dfr;
}
exports.async_waterfall = async_waterfall;
;
function async_whenAll(mix) {
    var arr = Array.isArray(mix) ? mix : Array.from(arguments);
    var out = new Array(arr.length);
    var dfr = new atma_utils_1.class_Dfr;
    var errored = false;
    var wait = arr.length;
    if (wait === 0) {
        return dfr.resolve(out);
    }
    arr.forEach((x, i) => {
        if (x == null) {
            set(null, i);
            return;
        }
        var mix = x;
        if (mix == null || mix.then == null) {
            set(mix, i);
            return;
        }
        mix.then(x => set(x, i), error => {
            errored = true;
            dfr.reject(error);
        });
    });
    function set(value, i) {
        if (errored) {
            return;
        }
        out[i] = value;
        if (--wait === 0) {
            dfr.resolve(out);
        }
    }
    return dfr;
}
exports.async_whenAll = async_whenAll;
;
function async_resolve(...args) {
    return (new atma_utils_1.class_Dfr()).resolve(...args);
}
exports.async_resolve = async_resolve;
;
function async_reject(...args) {
    return (new atma_utils_1.class_Dfr()).reject(...args);
}
exports.async_reject = async_reject;
;
function async_run(fn) {
    if (fn.length === 0) {
        var result = fn();
        if (result && result.then)
            return result;
        return async_resolve();
    }
    return atma_utils_1.class_Dfr.run((resolve, reject) => {
        fn(resolve, reject);
    });
}
exports.async_run = async_run;
//# sourceMappingURL=async.js.map
//# sourceMappingURL=async.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_async === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_async) && __isObj(module.exports)) {
        Object.assign(_src_utils_async, module.exports);
    } else {
        _src_utils_async = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_Include;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class_Include != null ? _src_class_Include : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Include = void 0;
const res_1 = _src_utils_res;
const atma_utils_1 = require("atma-utils");
const global_1 = _src_global;
var lib = require('includejs/lib/include.node.module.js');
var Routes = lib.includeLib.Routes();
var PathResolver = lib.includeLib.PathResolver;
var config = {};
class Include {
    constructor(resource) {
        this.includes = [];
        if (resource) {
            this.url = resource.url;
            this.location = resource.location;
        }
    }
    include(type, mix) {
        var pckg = mix;
        if (typeof pckg === 'string' && arguments.length > 2) {
            pckg = Array.prototype.slice.call(arguments, 1);
        }
        Routes.each(type, pckg, (namespace, route) => {
            let item = new Include();
            item.type = type;
            item.url = atma_utils_1.class_Uri.combine(this.base, route.path);
            item.route = route;
            item.namespace = namespace;
            item.module = 'includejs';
            this.includes.push(item);
        });
        return this;
    }
    cfg(...args) {
        if (args.length === 2) {
            var key = args[0], val = args[1];
            config[key] = val;
        }
        if (args.length === 1) {
            global_1.mask.obj.extend(config, args[0]);
        }
        var result = lib.include.cfg.apply(lib.include, args);
        return this;
    }
    setBase(path) {
        this.base = path;
        return this;
    }
    routes(arg) {
        if (arg == null) {
            return Routes.getRoutes();
        }
        // register namespaces at include, used later in resolve url
        lib.include.routes(arg);
        for (var key in arg) {
            Routes.register(key, arg[key], this);
        }
        return this;
    }
    static getConfig() {
        return config;
    }
    static toJsonRoutes() {
        var result = {}, routes = Routes.getRoutes();
        for (var key in routes) {
            result[key] = _join(routes[key]);
        }
        function _join(route) {
            var result = '';
            for (var i = 0, x, imax = route.length; i < imax; i++) {
                x = route[i];
                if (i % 2 === 0) {
                    result += x;
                    continue;
                }
                result += '{%1}'.format(x);
            }
            return result;
        }
        return result;
    }
    ;
}
exports.Include = Include;
Include.groupByType = res_1.res_groupByType;
Include.PathResolver = PathResolver;
;
['js', 'css', 'load', 'lazy', 'mask'].forEach(type => {
    Include.prototype[type] = function () {
        var mix = arguments.length > 1 ? Array.from(arguments) : arguments[0];
        return this.include(type, mix);
    };
});
//# sourceMappingURL=Include.js.map
//# sourceMappingURL=Include.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class_Include === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class_Include) && __isObj(module.exports)) {
        Object.assign(_src_class_Include, module.exports);
    } else {
        _src_class_Include = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_HandlersUtils;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class_HandlersUtils != null ? _src_class_HandlersUtils : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlersUtils = void 0;
exports.HandlersUtils = {
    findPathResolver(handlers, includeData) {
        var handler = handlers.find(x => x.pathResolver && x.pathResolver.accepts && x.pathResolver.accepts(includeData));
        return handler && handler.pathResolver;
    }
};
//# sourceMappingURL=HandlersUtils.js.map
//# sourceMappingURL=HandlersUtils.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class_HandlersUtils === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class_HandlersUtils) && __isObj(module.exports)) {
        Object.assign(_src_class_HandlersUtils, module.exports);
    } else {
        _src_class_HandlersUtils = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_npm;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_npm != null ? _src_utils_npm : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Npm = void 0;
const path_1 = _src_utils_path;
const global_1 = _src_global;
var Npm;
(function (Npm) {
    function resolveAppUrl(path, currentLocation, base) {
        let name = /^(@?[^\\\/]+)/.exec(path)[0];
        let resource = path.substring(name.length + 1);
        if (resource && hasExt(resource) === false) {
            resource += '.js';
        }
        while (path != null) {
            let dirname = (0, path_1.path_combine)(currentLocation, 'node_modules', name);
            let pckg = (0, path_1.path_combine)(dirname, 'package.json');
            if (global_1.io.File.exists(pckg)) {
                let json = global_1.io.File.read(pckg);
                if (json) {
                    let filename = combineMain(dirname, json.main);
                    if (base) {
                        if (base.endsWith('/') === false) {
                            // Base path must be a folder
                            base += '/';
                        }
                        // in-case CWD path is not equal to BASE path, make sure resolved FS module path is relative to BASE folder
                        let relative = global_1.io.env.currentDir.toRelativeString(base);
                        if (relative) {
                            filename = (0, path_1.path_combine)(relative, filename);
                        }
                    }
                    return filename;
                }
            }
            let next = currentLocation.replace(/[^\/]+\/?$/, '');
            if (next === currentLocation) {
                return null;
            }
            currentLocation = next;
        }
        return null;
    }
    Npm.resolveAppUrl = resolveAppUrl;
    function combineMain(cwd, filename) {
        if (filename == null) {
            filename = 'index.js';
        }
        if (hasExt(filename) === false) {
            filename += '.js';
        }
        var path = (0, path_1.path_combine)(cwd, filename);
        if (global_1.io.File.exists(path)) {
            return path;
        }
        console.log(`Entry File does not exist: ${filename}`);
    }
    function hasExt(path) {
        return /\.[\w]{1,8}($|\?|#)/.test(path);
    }
})(Npm = exports.Npm || (exports.Npm = {}));
//# sourceMappingURL=npm.js.map
//# sourceMappingURL=npm.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_npm === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_npm) && __isObj(module.exports)) {
        Object.assign(_src_utils_npm, module.exports);
    } else {
        _src_utils_npm = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_Resource;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class_Resource != null ? _src_class_Resource : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
const path_1 = _src_utils_path;
const Include_1 = _src_class_Include;
const HandlersUtils_1 = _src_class_HandlersUtils;
const npm_1 = _src_utils_npm;
class Resource {
    constructor(includeData, parent, solution) {
        this.parent = parent;
        this.solution = solution;
        this.resources = [];
        this.filename = '';
        this.directory = '';
        this.content = '';
        this.url = '';
        this.location = '';
        this.query = '';
        this.hash = '';
        this.namespace = '';
        this.type = null;
        this.bundle = 'index';
        this.module = '';
        this.page = '';
        /** Target Resource will contain the Source Resource */
        this.source = null;
        this.embed = false;
        this.asModules = null;
        this.inPages = null;
        this.isCyclic = false;
        this.isMapped = false;
        this.meta = null;
        this.aliases = [];
        if (arguments.length === 0)
            return;
        if (includeData == null) {
            includeData = {
                type: solution && solution.opts.type || null,
                url: null
            };
        }
        if (includeData.type == null) {
            if (includeData.url) {
                includeData.type = solution.opts.getTypeForExt((0, path_1.path_getExtension)(includeData.url));
            }
            else {
                includeData.type = solution && solution.opts.type || null;
            }
        }
        this.parent = parent;
        this.type = includeData.type;
        this.content = includeData.content;
        this.namespace = includeData.namespace;
        this.page = includeData.page;
        this.asModules = [];
        this.inPages = [];
        this.source = null;
        if (includeData.bundle) {
            this.bundle = includeData.bundle;
        }
        if (includeData.module) {
            this.asModules = [includeData.module];
        }
        if (includeData.meta) {
            this.meta = includeData.meta;
        }
        if (includeData.page) {
            this.inPages = [includeData.page];
        }
        else {
            let owner = parent;
            while (owner != null && owner.inPages.length === 0) {
                owner = owner.parent;
            }
            if (owner != null) {
                this.inPages = [...owner.inPages];
            }
        }
        if (includeData.url == null) {
            return;
        }
        if (solution && solution.opts.mappings[includeData.url]) {
            includeData.url = solution.opts.mappings[includeData.url];
        }
        let url;
        let pathResolver = HandlersUtils_1.HandlersUtils.findPathResolver(solution.handlers, includeData);
        if (pathResolver) {
            url = pathResolver.resolve(includeData, parent || {
                location: solution.opts.base
            });
        }
        if (url == null) {
            url = Include_1.Include.PathResolver.resolveBasic(includeData.url, includeData.type, parent || {
                location: solution.opts.base
            });
        }
        if (Include_1.Include.PathResolver.isNpm(includeData.url)) {
            this.aliases.push(includeData.url);
            url = npm_1.Npm.resolveAppUrl(includeData.url, parent && parent.location, solution.opts.base);
            if (url == null) {
                // Fix. `resolveAppUrl` returns undefined on native nodejs modules
                url = includeData.url;
            }
        }
        let mappedUrl = this.solution.mapUrl(url);
        if (mappedUrl != url) {
            console.log(`URL mapped: ${url} => ${mappedUrl}`);
            url = mappedUrl;
            this.isMapped = true;
        }
        this.hash = (0, path_1.path_sliceHash)(url);
        if (this.hash) {
            url = url.replace(this.hash, '');
        }
        this.query = (0, path_1.path_sliceQuery)(url);
        if (this.query) {
            url = url.replace(this.query, '');
        }
        // System paths
        this.filename = (0, path_1.path_toAbsolute)(url, null, solution.opts.base);
        this.directory = (0, path_1.path_getDir)(this.filename);
        // Application paths
        this.url = '/' + (0, path_1.path_toRelative)(this.filename, solution.opts.base);
        this.location = (0, path_1.path_getDir)(this.url);
        if (this.query) {
            this.url += this.query;
        }
        if (this.hash) {
            this.url += this.hash;
        }
        let mapped = solution.opts.mapResource(this);
        if (mapped) {
            return mapped;
        }
        this.solution = solution;
        return this;
    }
    clone() {
        let res = new Resource();
        res.resources = this.resources;
        res.parent = this.parent;
        res.filename = this.filename;
        res.directory = this.directory;
        res.content = this.content;
        res.url = this.url;
        res.location = this.location;
        res.namespace = this.namespace;
        res.type = this.type;
        res.bundle = this.bundle;
        res.module = this.module;
        res.embed = this.embed;
        res.asModules = this.asModules;
        res.inPages = this.inPages;
        res.source = this.source;
        res.isCyclic = this.isCyclic;
        res.aliases = this.aliases;
        return res;
    }
    toTarget(solution, settings) {
        var _a;
        let resource = (settings === null || settings === void 0 ? void 0 : settings.targetType) === 'static'
            ? this._toStaticTarget(solution, settings)
            : this._toOutputTarget(solution, settings);
        resource.content = this.content;
        resource.asModules = this.asModules;
        resource.inPages = this.inPages;
        resource.bundle = this.bundle;
        resource.aliases = this.aliases;
        if (solution.opts.version && ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.type) !== 'load') {
            resource.url += '?v=' + solution.opts.version;
        }
        return resource;
    }
    _toStaticTarget(solution, settings) {
        let opts = solution.opts;
        let url = this.url;
        let filename = (0, path_1.path_removeQuery)(url);
        let resource = new Resource({ type: this.type, url: null }, this, solution);
        if (settings == null || settings.relative !== true) {
            url = (0, path_1.path_combine)(solution.opts.outputAppBase, url);
        }
        resource.url = url;
        resource.location = (0, path_1.path_getDir)(url);
        resource.filename = filename;
        resource.directory = (0, path_1.path_getDir)(filename);
        resource.source = this;
        return resource;
    }
    _toOutputTarget(solution, settings) {
        let opts = solution.opts;
        let url;
        if (solution.isMainResource(this)) {
            url = opts.outputMain;
        }
        else {
            url = (0, path_1.path_combine)(opts.getOutputFolder(this.type), (0, path_1.path_removeQuery)(this.url));
        }
        let filename = (0, path_1.path_combine)(opts.outputBase, url);
        let resource = new Resource({ type: this.type }, this, solution);
        if (settings == null || settings.relative !== true && url.indexOf(solution.opts.outputAppBase) === -1) {
            url = (0, path_1.path_combine)(solution.opts.outputAppBase, url);
        }
        resource.url = url;
        resource.location = (0, path_1.path_getDir)(url);
        resource.filename = filename;
        resource.directory = (0, path_1.path_getDir)(filename);
        resource.source = this;
        return resource;
    }
    toRelative(resource) {
        let url = (0, path_1.path_toRelative)(this.filename, resource.filename);
        return url;
    }
    toTargetUrl(solution) {
        let url = this.url;
        if (url.indexOf(solution.opts.outputAppBase) === -1)
            url = (0, path_1.path_combine)(solution.opts.outputAppBase, url);
        return url;
    }
    toJSON(deep) {
        return {
            type: this.type,
            namespace: this.namespace,
            filename: this.filename,
            directory: this.directory,
            url: this.url,
            location: this.location,
            asModules: this.asModules,
            resources: deep === false ? void 0 : this.resources.map(x => x.toJSON())
        };
    }
    setModuleType(type) {
        if (this.isModuleType(type)) {
            return;
        }
        this.module = this
            .module
            .split(',')
            .splice(0, 0, type)
            .join(',');
    }
    isModuleType(type) {
        return this.module.indexOf(type) !== -1;
    }
    getModule(solution) {
        let modules = this.asModules;
        if (modules == null || modules.length === 0) {
            return null;
        }
        if (modules.length === 1) {
            return modules[0];
        }
        let arr = ['global', 'commonjs', 'amd', 'includejs', 'import'];
        let name = arr.find(name => modules.indexOf(name) !== -1);
        if (name == null) {
            name = modules[0];
        }
        return name;
    }
    cdUrl(url) {
        if (url[0] === '/' || (0, path_1.path_isRelative)(url) === false)
            return url;
        return (0, path_1.path_combine)(this.location, url);
    }
}
exports.Resource = Resource;
;
//# sourceMappingURL=Resource.js.map
//# sourceMappingURL=Resource.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class_Resource === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class_Resource) && __isObj(module.exports)) {
        Object.assign(_src_class_Resource, module.exports);
    } else {
        _src_class_Resource = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_assets_CssAssets;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_assets_CssAssets != null ? _src_assets_CssAssets : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssAssets = void 0;
const path_1 = _src_utils_path;
const Resource_1 = _src_class_Resource;
exports.CssAssets = {
    rewrite(resource, targetResource, solution) {
        var regexp = /url[\s]*\(('|")?([^)'"]+)('|")?\)/gi, assets = [], hash = {}, match;
        var content = resource.content;
        while (match = regexp.exec(content)) {
            var href = match[2].trim();
            if (href === '') {
                continue;
            }
            if (solution.assetsManager.shouldCopy(href) === false) {
                if (solution.assetsManager.shouldRewritePath(href, resource, targetResource)) {
                    var asset = new Resource_1.Resource({ type: 'asset', url: href }, resource, solution);
                    content = replace(href, match, content, asset.url, targetResource.url, solution);
                }
                continue;
            }
            var asset = new Resource_1.Resource({ type: 'asset', url: href }, resource, solution);
            if (asset.filename in hash === false) {
                assets.push(asset);
                hash[asset.filename] = 1;
            }
            var assetUrl = asset.toTarget(solution).url;
            content = replace(href, match, content, assetUrl, targetResource.url, solution);
            // var before = content.substring(0, match.index),
            //     after = content.substring(match.index + match[0].length);
            // var assetUrl = asset.toTarget(solution).url;
            // var styleUrl = targetResource.url;
            // var relUrl = path_toRelative(assetUrl, styleUrl, "/");
            // var entry = match[0].replace(href, relUrl);
            // content = before + entry + after;
        }
        resource.content = content;
        return assets;
    }
};
function isAbsolute(href) {
    if (/^\s*data:/.test(href)) {
        return true;
    }
    return /^[\w]{1,8}:\/\//.test(href);
}
function formatUrl(assetUrl, targetUrl) {
    var styleUrl = targetUrl;
    return (0, path_1.path_toRelative)(assetUrl, styleUrl, "/");
}
function replace(href, match, content, assetUrl, targetUrl, solution) {
    var before = content.substring(0, match.index), after = content.substring(match.index + match[0].length);
    var relUrl = formatUrl(assetUrl, targetUrl);
    var entry = match[0].replace(href, relUrl);
    return before + entry + after;
}
//# sourceMappingURL=CssAssets.js.map
//# sourceMappingURL=CssAssets.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_assets_CssAssets === module.exports) {
        // do nothing if
    } else if (__isObj(_src_assets_CssAssets) && __isObj(module.exports)) {
        Object.assign(_src_assets_CssAssets, module.exports);
    } else {
        _src_assets_CssAssets = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_assets_MaskAssets;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_assets_MaskAssets != null ? _src_assets_MaskAssets : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskAssets = void 0;
const path_1 = _src_utils_path;
const Resource_1 = _src_class_Resource;
exports.MaskAssets = {
    rewrite(resource, targetResource, solution) {
        let regexp = /src\s*=\s*('|")([^)'"]+)('|")/gi;
        let assets = [];
        let hash = {};
        let match;
        let content = resource.content;
        while (match = regexp.exec(content)) {
            let href = match[2].trim();
            if (href === '' || /\.\w{1,5}(\?.+)?$/.test(href) === false || href.includes('~')) {
                continue;
            }
            if (solution.assetsManager.shouldCopy(href) === false) {
                if (solution.assetsManager.shouldRewritePath(href, resource, targetResource)) {
                    let asset = new Resource_1.Resource({ type: 'asset', url: href }, resource, solution);
                    content = replace(href, match, content, asset.url, targetResource.url, solution);
                }
                continue;
            }
            let asset = new Resource_1.Resource({ type: 'asset', url: href }, resource, solution);
            if (asset.filename in hash === false) {
                assets.push(asset);
                hash[asset.filename] = 1;
            }
            let assetUrl = asset.toTarget(solution, { targetType: 'static' }).url;
            content = replace(href, match, content, assetUrl, targetResource.url, solution);
        }
        resource.content = content;
        return assets;
    }
};
function isAbsolute(href) {
    if (/^\s*data:/.test(href)) {
        return true;
    }
    return /^[\w]{1,8}:\/\//.test(href);
}
function formatUrl(assetUrl, targetUrl) {
    let styleUrl = targetUrl;
    return (0, path_1.path_toRelative)(assetUrl, styleUrl, "/");
}
function replace(href, match, content, assetUrl, targetUrl, solution) {
    let before = content.substring(0, match.index);
    let after = content.substring(match.index + match[0].length);
    let entry = match[0].replace(href, assetUrl);
    return before + entry + after;
}
//# sourceMappingURL=MaskAssets.js.map
//# sourceMappingURL=MaskAssets.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_assets_MaskAssets === module.exports) {
        // do nothing if
    } else if (__isObj(_src_assets_MaskAssets) && __isObj(module.exports)) {
        Object.assign(_src_assets_MaskAssets, module.exports);
    } else {
        _src_assets_MaskAssets = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_assets_AssetsManager;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_assets_AssetsManager != null ? _src_assets_AssetsManager : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetsManager = void 0;
const CssAssets_1 = _src_assets_CssAssets;
const atma_utils_1 = require("atma-utils");
const global_1 = _src_global;
const MaskAssets_1 = _src_assets_MaskAssets;
const path_1 = _src_utils_path;
class AssetsManager {
    constructor(solution) {
        this.solution = solution;
        this.assets = [];
    }
    rewriteAssets(resource, targetResource, solution) {
        let arr = null;
        let type = resource.type;
        if (type === 'load') {
            let ext = (0, path_1.path_getExtension)(resource.url);
            type = this.solution.opts.getTypeForExt(ext);
        }
        switch (type) {
            case 'css':
                arr = CssAssets_1.CssAssets.rewrite(resource, targetResource, solution);
                break;
            case 'mask':
                arr = MaskAssets_1.MaskAssets.rewrite(resource, targetResource, solution);
                break;
        }
        if (arr) {
            this.assets.push(...arr);
        }
    }
    shouldCopy(href) {
        if (withProtocol(href)) {
            return false;
        }
        if (href[0] === '/' && this.solution.opts.isSameBase()) {
            return false;
        }
        return true;
    }
    shouldRewritePath(href, ownerResource, targetResource) {
        return this.shouldCopy(href);
    }
    getAssets() {
        return this.assets;
    }
    clearCache() {
        this.assets = [];
    }
    flush() {
        var i = -1, arr = this.assets, dfr = new atma_utils_1.class_Dfr, manager = this;
        function next() {
            if (++i >= arr.length) {
                dfr.resolve();
                return;
            }
            var asset = arr[i];
            var target = asset.toTarget(manager.solution);
            global_1.io
                .File
                .copyToAsync(asset.filename, target.filename)
                .then(next, error => {
                console.error(`AssetsManager can't copy a file ${asset.filename} to ${target.filename}`);
                next();
            });
        }
        next();
        return dfr;
    }
}
exports.AssetsManager = AssetsManager;
;
function hrefIsAbsolute(href) {
    if (withProtocol(href)) {
        return true;
    }
    if (href[0] === '/') {
        return true;
    }
    return false;
}
function withProtocol(href) {
    if (/^\s*data:/.test(href)) {
        return true;
    }
    if (/^[\w]{1,8}:\/\//.test(href)) {
        return true;
    }
    return false;
}
//# sourceMappingURL=AssetsManager.js.map
//# sourceMappingURL=AssetsManager.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_assets_AssetsManager === module.exports) {
        // do nothing if
    } else if (__isObj(_src_assets_AssetsManager) && __isObj(module.exports)) {
        Object.assign(_src_assets_AssetsManager, module.exports);
    } else {
        _src_assets_AssetsManager = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_VarDefinitions;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class_VarDefinitions != null ? _src_class_VarDefinitions : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VarDefinitions = void 0;
class VarDefinitions {
    constructor(solution, defs) {
        this.solution = solution;
        this.code = serializeVars(defs);
    }
    evaluate(expression) {
        try {
            var code = `${this.code}\n return ${expression};`;
            var fn = new Function(code);
            return fn();
        }
        catch (error) {
            var msg = `Expression evaluation failed: ${expression}. With message ${error.message}`;
            this.solution.reporter.error(msg);
        }
    }
}
exports.VarDefinitions = VarDefinitions;
function serializeVars(map) {
    var code = [];
    for (var key in map) {
        var expr = JSON.stringify(map[key]);
        var line = `var ${key} = ${expr};`;
        code.push(line);
    }
    return code.join('\n');
}
//# sourceMappingURL=VarDefinitions.js.map
//# sourceMappingURL=VarDefinitions.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class_VarDefinitions === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class_VarDefinitions) && __isObj(module.exports)) {
        Object.assign(_src_class_VarDefinitions, module.exports);
    } else {
        _src_class_VarDefinitions = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _node_modules_tslib_tslib;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _node_modules_tslib_tslib != null ? _node_modules_tslib_tslib : {};
    var module = { exports: exports };

    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    __extends = function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function (m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    };

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});
;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_node_modules_tslib_tslib === module.exports) {
        // do nothing if
    } else if (__isObj(_node_modules_tslib_tslib) && __isObj(module.exports)) {
        Object.assign(_node_modules_tslib_tslib, module.exports);
    } else {
        _node_modules_tslib_tslib = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_config_File;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_config_File != null ? _src_config_File : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileActions = void 0;
const tslib_1 = _node_modules_tslib_tslib;
const memd_1 = require("memd");
const axios_1 = require("axios");
const global_1 = _src_global;
exports.FileActions = {
    readFile(path, opts) {
        if (/^https?:/.test(path)) {
            return HttpLoader.load(path, opts);
        }
        return global_1.io.File.readAsync(path, opts);
    },
    writeFile(path, content, opts) {
        return global_1.io.File.writeAsync(path, content, opts);
    },
    clearFileCache() {
        global_1.io.File.clearCache();
    }
};
class HttpLoader {
    static async load(url, opts) {
        let resp = await axios_1.default.get(url);
        if (resp.status !== 200) {
            throw new Error(`Network error ${resp.status} for a file ${url}`);
        }
        if (typeof resp.data !== 'string') {
            throw new Error(`Expects text content from ${url}`);
        }
        return resp.data;
    }
}
tslib_1.__decorate([
    memd_1.default.deco.memoize()
], HttpLoader, "load", null);
//# sourceMappingURL=File.js.map
//# sourceMappingURL=File.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_config_File === module.exports) {
        // do nothing if
    } else if (__isObj(_src_config_File) && __isObj(module.exports)) {
        Object.assign(_src_config_File, module.exports);
    } else {
        _src_config_File = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_config_Configuration;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_config_Configuration != null ? _src_config_Configuration : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
const File_1 = _src_config_File;
const global_1 = _src_global;
class Configuration {
    constructor() {
        this.opts = {};
    }
    define(key, value) {
        let obj = this.opts[key];
        if (obj == null) {
            this.opts[key] = {
                default: value,
                value: value
            };
        }
        else {
            obj.value = value;
        }
        if (key === 'middlewares') {
            global_1.io.File.registerExtensions(value, /* clean previous */ true);
        }
    }
    defineMany(options) {
        for (var key in options) {
            this.define(key, options[key]);
        }
    }
    get(key) {
        var entry = this.opts[key];
        if (entry == null) {
            throw Error('Invalid configuration key: ' + key);
        }
        return entry.value || entry.default;
    }
    reset() {
        for (var key in this.opts) {
            var entry = this.opts[key];
            entry.value = entry.default;
        }
    }
    static get Instance() {
        return _instance;
    }
}
exports.Configuration = Configuration;
const _instance = new Configuration();
_instance.defineMany(File_1.FileActions);
//# sourceMappingURL=Configuration.js.map
//# sourceMappingURL=Configuration.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_config_Configuration === module.exports) {
        // do nothing if
    } else if (__isObj(_src_config_Configuration) && __isObj(module.exports)) {
        Object.assign(_src_config_Configuration, module.exports);
    } else {
        _src_config_Configuration = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_obj;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_obj != null ? _src_utils_obj : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj_deepExtend = exports.obj_deepDefaults = void 0;
function obj_deepDefaults(target, defaults) {
    if (target == null) {
        return defaults;
    }
    if (defaults == null) {
        return target;
    }
    if (typeof target !== 'object' || typeof defaults !== 'object') {
        return target !== null && target !== void 0 ? target : defaults;
    }
    for (let key in defaults) {
        if (target[key] == null) {
            target[key] = defaults[key];
            continue;
        }
        if (typeof target[key] === 'object' && defaults[key] != null && typeof defaults[key] === 'object') {
            obj_deepDefaults(target[key], defaults[key]);
        }
    }
    return target;
}
exports.obj_deepDefaults = obj_deepDefaults;
function obj_deepExtend(target, source) {
    if (target == null || source == null) {
        return target || obj_deepExtend({}, source);
    }
    for (let key in source) {
        let targetValue = target[key];
        let sourceValue = source[key];
        if (sourceValue != null && targetValue != null
            && typeof targetValue === 'object'
            && typeof sourceValue === 'object'
            && false === Array.isArray(targetValue)
            && false === Array.isArray(sourceValue)) {
            obj_deepExtend(targetValue, sourceValue);
            continue;
        }
        target[key] = sourceValue;
    }
    return target;
}
exports.obj_deepExtend = obj_deepExtend;
//# sourceMappingURL=obj.js.map
//# sourceMappingURL=obj.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_obj === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_obj) && __isObj(module.exports)) {
        Object.assign(_src_utils_obj, module.exports);
    } else {
        _src_utils_obj = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_SolutionOpts;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class_SolutionOpts != null ? _src_class_SolutionOpts : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolutionOpts = exports.SolutionOptsBase = void 0;
const path_1 = _src_utils_path;
const atma_utils_1 = require("atma-utils");
const Include_1 = _src_class_Include;
const global_1 = _src_global;
const VarDefinitions_1 = _src_class_VarDefinitions;
const Configuration_1 = _src_config_Configuration;
const obj_1 = _src_utils_obj;
class SolutionOptsBase {
    constructor() {
        this.mappers = [];
        this.options = {};
        this.copyFiles = null;
    }
}
exports.SolutionOptsBase = SolutionOptsBase;
class SolutionOpts extends SolutionOptsBase {
    constructor(solution, opts_) {
        super();
        this.solution = solution;
        this.defaults = {
            build: 'release',
            type: '',
            base: '',
            version: null,
            mainPage: 'main',
            mainBundle: '',
            mainContent: null,
            outputBase: '',
            outputAppBase: '/',
            output: '',
            outputMain: '{output}/build/{build}/{filename}.{ext}',
            outputSources: '{output}/build/{build}',
            outputAssets: '{output}/build/{build}/assets',
            outputShareBase: null,
            package: {
                module: 'commonjs',
                modules: ['commonjs', 'includejs', 'global', 'import'],
                type: 'module',
                types: ['module', 'bundle'],
                moduleWrapper: 'iif',
                moduleWrappers: ['umd', 'iif', 'script', 'custom'],
                moduleName: '',
                import: null,
            },
            extensions: {
                '': { type: 'js' },
                'js': { type: 'js' },
                'es6': { type: 'js' },
                'jsx': { type: 'js' },
                'ts': { type: 'js' },
                'mask': { type: 'mask' },
                'css': { type: 'css' },
                'less': { type: 'css' },
                'scss': { type: 'css' },
                'sass': { type: 'css' },
                'html': { type: 'html' },
                'json': { type: 'data' },
                'jpg': { type: 'asset' },
                'png': { type: 'asset' },
                'mp4': { type: 'asset' },
            },
            defaultExtensions: {
                'js': 'js',
                'mask': 'mask',
                'css': 'css',
                'load': 'load'
            },
            mappers: null,
            mappings: null,
            rewrites: null,
            middlewares: null,
            varDefs: null,
            parserIgnoreDependencies: [
                '\\/bower_components\\/',
                '\\/node_modules\\/',
                '\\.min\\.'
            ],
            dynamicDependencies: [],
            prebuild: [],
            postbuild: [],
            silent: false,
            watch: false,
            minify: false,
            options: {
                mask: {
                    Module: {
                        base: ''
                    }
                }
            },
            copyFiles: null,
            dependencies: null
        };
        this.resolvers = {
            base(basePath) {
                return basePath
                    ? (0, path_1.path_toAbsolute)(basePath)
                    : (0, path_1.path_resolveCurrent)();
            },
            outputBase(outputBase, opts) {
                return outputBase
                    ? (0, path_1.path_toAbsolute)(outputBase)
                    : opts.base;
            },
            outputMain: prepairPath,
            outputSources: prepairPath,
            outputAssets: prepairPath,
            package: function (packageOpts) {
                if (packageOpts == null) {
                    return this.package;
                }
                var opts = Object.create(this.defaults.package);
                return Object.assign(opts, packageOpts);
            },
            varDefs(varDefs) {
                return new VarDefinitions_1.VarDefinitions(this.solution, varDefs);
            },
            mappers() {
                return [];
            },
            mappings(val) {
                return val || {};
            },
            middlewares(val) {
                Configuration_1.Configuration.Instance.define('middlewares', val);
            },
            version(val, opts) {
                if (typeof val === 'string') {
                    if (val[0] === '#') {
                        var path = val.replace('#{', '').replace('}', '');
                        var json = require(process.cwd() + '/package.json');
                        return (0, atma_utils_1.obj_getProperty)(json, path);
                    }
                    if (val === 'random') {
                        return (Math.random() * 100000000 | 0).toString(32);
                    }
                }
                return val;
            },
            parserIgnoreDependencies(arr) {
                return arr.map(x => new RegExp(x));
            },
            dynamicDependencies(arr) {
                return arr.map(x => new RegExp(x));
            },
            extensions(opts) {
                if (opts === this.defaults.extensions) {
                    return opts;
                }
                let def = Object.create(this.defaults.extensions);
                return Object.assign(def, opts);
            },
            defaultExtensions(opts) {
                if (opts === this.defaults.defaultExtensions) {
                    return opts;
                }
                /** REFACTOR **/
                Include_1.Include.prototype.cfg('extentionDefault', opts);
                for (var type in opts) {
                    switch (type) {
                        case 'js':
                            global_1.mask.Module.cfg('ext.script', opts[type]);
                            break;
                        case 'css':
                            global_1.mask.Module.cfg('ext.style', opts[type]);
                            break;
                    }
                }
                let def = Object.create(this.defaults.defaultExtensions);
                return Object.assign(def, opts);
            },
            options(opts) {
                if (opts == null) {
                    return {};
                }
                if (opts.mask) {
                    if (opts.mask.Module) {
                        for (let key in opts.mask.Module) {
                            global_1.mask.Module.cfg(key, opts.mask.Module[key]);
                        }
                    }
                    for (let key in opts.mask)
                        if (key !== 'Module') {
                            global_1.mask.cfg(key, opts.mask.Module[key]);
                        }
                }
                if (opts.include) {
                    if (opts.include.routes) {
                        Include_1.Include.prototype.routes(opts.include.routes);
                    }
                }
                return opts;
            },
            dependencies(val) {
                if (val == null) {
                    return null;
                }
                let arr = [];
                for (let key in val) {
                    arr.push({
                        resource: new RegExp(key),
                        dependency: new RegExp(val[key])
                    });
                }
                return arr;
            }
        };
        this.paths = [solution.path];
        let opts = opts_ || {};
        for (let key in this.defaults) {
            this[key] = (0, obj_1.obj_deepDefaults)(opts[key], this.defaults[key]);
        }
        for (let key in this.resolvers) {
            this[key] = this.resolvers[key].call(this, this[key], this);
        }
        if (!this.type && solution.path) {
            this.type = this.getTypeForExt((0, path_1.path_getExtension)(solution.path));
        }
    }
    getOutputFolder(type) {
        if (type === 'asset') {
            return this.outputAssets;
        }
        return this.outputSources;
    }
    isSameBase() {
        if (this.outputShareBase === false) {
            return false;
        }
        return this.base === this.outputBase;
    }
    getExtForType(type) {
        var match = this.defaultExtensions[type];
        if (match == null)
            throw new Error('Type is not supported: ' + type);
        return match;
    }
    getTypeForExt(ext) {
        var match = this.extensions[ext];
        if (match == null)
            throw new Error('Extension is not configurated: ' + ext);
        return match.type;
    }
    mapResource(resource_) {
        var resource = resource_;
        this.mappers.forEach(mapper => {
            resource = mapper.map(resource);
        });
        return resource;
    }
    toAppUrl(filename) {
        return '/' + (0, path_1.path_toRelative)(filename, this.base);
    }
    fromAppUrl(url) {
        return (0, path_1.path_combine)(this.base, url);
    }
}
exports.SolutionOpts = SolutionOpts;
;
function prepairPath(path, opts) {
    return interpolateStr(path, opts);
}
function interpolateStr(str, opts) {
    return str.replace(/{(\w+)}/g, (full, name) => {
        var x = opts[name];
        if (x != null) {
            return x;
        }
        switch (name) {
            case 'filename':
                var path = opts.paths[0];
                if (path === '')
                    return opts.mainPage;
                var match = /([^/\\]+)\.\w+$/.exec(path);
                if (match) {
                    return match[1];
                }
                throw new Error('Filename can`t be parsed from: ' + opts.paths.join(','));
            case 'ext':
                var path = opts.paths[0];
                if (path === '')
                    return opts.type;
                var match = /\.(\w+)$/.exec(path);
                if (match) {
                    return match[1];
                }
                throw new Error('Extension can`t be parsed from: ' + opts.paths.join(','));
            default:
                throw new Error('Unknown interpolation key: ' + name);
        }
    });
}
//# sourceMappingURL=SolutionOpts.js.map
//# sourceMappingURL=SolutionOpts.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class_SolutionOpts === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class_SolutionOpts) && __isObj(module.exports)) {
        Object.assign(_src_class_SolutionOpts, module.exports);
    } else {
        _src_class_SolutionOpts = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_Reporter;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class_Reporter != null ? _src_class_Reporter : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IReporter = void 0;
const res_1 = _src_utils_res;
class IReporter {
    static create(opts) {
        if (opts.silent === true) {
            return new SilentReporter();
        }
        return new ConsoleReporter();
    }
}
exports.IReporter = IReporter;
;
class ConsoleReporter {
    error(...args) {
        console.error(...args);
    }
    warn(...args) {
        console.warn(...args);
    }
    log(...args) {
        console.log(...args);
    }
    info(...args) {
        console.info(...args);
    }
    print(x) {
        process.stdout.write(x);
    }
    treeTime(action, messageProvider, resources) {
        var start = Date.now();
        var dfr = action();
        dfr.done(() => {
            var end = Date.now();
            var seconds = ((end - start) / 1000).toFixed(2);
            var treeInfo = (0, res_1.res_getTreeInfo)(resources);
            this
                .info(messageProvider(treeInfo));
            this
                .info(treeInfo.treeString);
        });
        return dfr;
    }
}
class SilentReporter {
    error(...args) {
    }
    warn(...args) {
    }
    log(...args) {
    }
    info(...args) {
    }
    print(...args) {
    }
    treeTime(action, messageProvider, resources) {
        return action();
    }
}
//# sourceMappingURL=Reporter.js.map
//# sourceMappingURL=Reporter.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class_Reporter === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class_Reporter) && __isObj(module.exports)) {
        Object.assign(_src_class_Reporter, module.exports);
    } else {
        _src_class_Reporter = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_OutputResources;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class_OutputResources != null ? _src_class_OutputResources : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputItem = exports.OutputResources = void 0;
const Resource_1 = _src_class_Resource;
const res_1 = _src_utils_res;
class OutputResources {
    constructor(solution) {
        this.solution = solution;
        this.items = [];
        this.resources = [];
        this.pagesInput = {};
    }
    prepair(resources) {
        this.resources = [];
        this.pagesInput = {};
        this.items = [];
        this.rootInput = resources.pop();
        this.rootOutput = this.rootInput.toTarget(this.solution);
        this.rootOutput.content = this.rootInput.content;
        this.pagesInput = (0, res_1.res_groupByPageAndBundles)(resources, this.solution.opts);
        Object.keys(this.pagesInput).forEach(page => {
            Object.keys(this.pagesInput[page]).forEach(bundle => {
                let resources = this.pagesInput[page][bundle];
                let byType = (0, res_1.res_groupResourcesByType)(resources, this.solution.opts);
                Object.keys(byType).forEach(type => {
                    let arr = byType[type];
                    let item = new OutputItem({
                        page,
                        bundle,
                        type,
                        solution: this.solution,
                        resources: arr
                    });
                    this.items.push(item);
                });
                if (byType['js'] == null) {
                    let item = new OutputItem({
                        page,
                        bundle,
                        type: 'js',
                        solution: this.solution,
                        resources: []
                    });
                    this.items.push(item);
                }
            });
        });
    }
    getForPage(page) {
        return this.items.filter(x => x.page === page).map(x => x.resource);
    }
    getAll() {
        var all = this
            .items
            .map(x => x.resource)
            .filter(x => x.embed !== true)
            .filter(x => Boolean(x.content));
        if (this.rootOutput) {
            all.push(this.rootOutput);
        }
        return all;
    }
}
exports.OutputResources = OutputResources;
class OutputItem {
    constructor({ page, bundle, type, solution, resources }) {
        this.page = page;
        this.bundle = bundle;
        this.type = type;
        var ext = solution.opts.getExtForType(type);
        var filename = `${page}_${bundle}.${ext}`;
        var resource = new Resource_1.Resource({
            type: type,
            url: filename,
            bundle: bundle
        }, null, solution);
        this.resource = resource.toTarget(solution);
        this.resources = resources || [];
    }
}
exports.OutputItem = OutputItem;
//# sourceMappingURL=OutputResources.js.map
//# sourceMappingURL=OutputResources.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class_OutputResources === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class_OutputResources) && __isObj(module.exports)) {
        Object.assign(_src_class_OutputResources, module.exports);
    } else {
        _src_class_OutputResources = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_base_BaseHandler;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_base_BaseHandler != null ? _src_handlers_base_BaseHandler : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseHandler = void 0;
class BaseHandler {
    constructor(solution) {
        this.solution = solution;
        var { Parser, Rewriter, Builder, PathResolver } = this.constructor;
        this.parser = new Parser(solution, this);
        this.rewriter = new Rewriter(solution, this);
        this.builder = new Builder(solution, this);
        this.pathResolver = new PathResolver(solution, this);
    }
}
exports.BaseHandler = BaseHandler;
;
//# sourceMappingURL=BaseHandler.js.map
//# sourceMappingURL=BaseHandler.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_base_BaseHandler === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_base_BaseHandler) && __isObj(module.exports)) {
        Object.assign(_src_handlers_base_BaseHandler, module.exports);
    } else {
        _src_handlers_base_BaseHandler = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_base_BaseRewriter;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_base_BaseRewriter != null ? _src_handlers_base_BaseRewriter : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRewriter = void 0;
const Solution_1 = _src_class_Solution;
const BaseHandler_1 = _src_handlers_base_BaseHandler;
const assert = require("assert");
class BaseRewriter {
    constructor(solution, handler) {
        this.solution = solution;
        this.handler = handler;
        assert(solution instanceof Solution_1.Solution, 'Solution expected for Rewriter');
        assert(handler instanceof BaseHandler_1.BaseHandler, 'BaseHandler expected for the Rewriter');
    }
    rewritePartial(content, ownerResource) {
        throw Error('Not implemented');
    }
    rewriteResource(resource) {
        throw Error('Not implemented');
    }
    accepts(type) {
        throw Error('Not implemented');
    }
}
exports.BaseRewriter = BaseRewriter;
//# sourceMappingURL=BaseRewriter.js.map
//# sourceMappingURL=BaseRewriter.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_base_BaseRewriter === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_base_BaseRewriter) && __isObj(module.exports)) {
        Object.assign(_src_handlers_base_BaseRewriter, module.exports);
    } else {
        _src_handlers_base_BaseRewriter = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_load_LoadRewriter;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_load_LoadRewriter != null ? _src_handlers_load_LoadRewriter : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadRewriter = void 0;
const BaseRewriter_1 = _src_handlers_base_BaseRewriter;
class LoadRewriter extends BaseRewriter_1.BaseRewriter {
    rewritePartial(content, ownerResource) {
    }
    rewriteResource(resource) {
    }
    accepts(type) {
        return type === 'load';
    }
}
exports.LoadRewriter = LoadRewriter;
;
//# sourceMappingURL=LoadRewriter.js.map
//# sourceMappingURL=LoadRewriter.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_load_LoadRewriter === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_load_LoadRewriter) && __isObj(module.exports)) {
        Object.assign(_src_handlers_load_LoadRewriter, module.exports);
    } else {
        _src_handlers_load_LoadRewriter = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_base_BaseBuilder;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_base_BaseBuilder != null ? _src_handlers_base_BaseBuilder : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseBuilder = void 0;
const assert = require("assert");
const Solution_1 = _src_class_Solution;
const BaseHandler_1 = _src_handlers_base_BaseHandler;
class BaseBuilder {
    constructor(solution, handler) {
        this.solution = solution;
        this.handler = handler;
        assert(solution instanceof Solution_1.Solution, 'Solution expected for the Builder');
        assert(handler instanceof BaseHandler_1.BaseHandler, 'BaseHandler expected for the Builder');
    }
    buildPage(resource, dependencies) {
        throw Error('Not implemented');
    }
}
exports.BaseBuilder = BaseBuilder;
//# sourceMappingURL=BaseBuilder.js.map
//# sourceMappingURL=BaseBuilder.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_base_BaseBuilder === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_base_BaseBuilder) && __isObj(module.exports)) {
        Object.assign(_src_handlers_base_BaseBuilder, module.exports);
    } else {
        _src_handlers_base_BaseBuilder = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_load_LoadBuilder;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_load_LoadBuilder != null ? _src_handlers_load_LoadBuilder : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadBuilder = void 0;
const BaseBuilder_1 = _src_handlers_base_BaseBuilder;
class LoadBuilder extends BaseBuilder_1.BaseBuilder {
    createModule(outputItem, otherOutputItems) {
        var html = outputItem
            .resources
            .map(resource => {
            this.solution.assetsManager.rewriteAssets(resource, outputItem.resource, this.solution);
            let url = resource.toTargetUrl(this.solution);
            return `<script type='text/plain' data-bundler-path='${url}'>
                    ${resource.content}
                </script>`;
        })
            .join('\n');
        outputItem.resource.content = html;
        outputItem.resource.type = 'html';
    }
    buildRoot(resource, dependencies) {
        throw new Error('Right now only rewriter is supported');
    }
    accepts(type) {
        return type === 'load';
    }
}
exports.LoadBuilder = LoadBuilder;
;
//# sourceMappingURL=LoadBuilder.js.map
//# sourceMappingURL=LoadBuilder.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_load_LoadBuilder === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_load_LoadBuilder) && __isObj(module.exports)) {
        Object.assign(_src_handlers_load_LoadBuilder, module.exports);
    } else {
        _src_handlers_load_LoadBuilder = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_base_BasePathResolver;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_base_BasePathResolver != null ? _src_handlers_base_BasePathResolver : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePathResolver = void 0;
class BasePathResolver {
    constructor(solution, handler) {
        this.solution = solution;
        this.handler = handler;
    }
    resolve(includeData, resource) {
        throw Error('Not implemented');
    }
    accepts(type) {
        throw Error('Not implemented');
    }
}
exports.BasePathResolver = BasePathResolver;
//# sourceMappingURL=BasePathResolver.js.map
//# sourceMappingURL=BasePathResolver.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_base_BasePathResolver === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_base_BasePathResolver) && __isObj(module.exports)) {
        Object.assign(_src_handlers_base_BasePathResolver, module.exports);
    } else {
        _src_handlers_base_BasePathResolver = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_load_LoadPathResolver;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_load_LoadPathResolver != null ? _src_handlers_load_LoadPathResolver : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadPathResolver = void 0;
const BasePathResolver_1 = _src_handlers_base_BasePathResolver;
class LoadPathResolver extends BasePathResolver_1.BasePathResolver {
    accepts(type) {
        return false;
    }
}
exports.LoadPathResolver = LoadPathResolver;
;
//# sourceMappingURL=LoadPathResolver.js.map
//# sourceMappingURL=LoadPathResolver.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_load_LoadPathResolver === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_load_LoadPathResolver) && __isObj(module.exports)) {
        Object.assign(_src_handlers_load_LoadPathResolver, module.exports);
    } else {
        _src_handlers_load_LoadPathResolver = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_base_BaseParser;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_base_BaseParser != null ? _src_handlers_base_BaseParser : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseParser = void 0;
const Solution_1 = _src_class_Solution;
const BaseHandler_1 = _src_handlers_base_BaseHandler;
const assert = require("assert");
class BaseParser {
    constructor(solution, handler) {
        this.solution = solution;
        this.handler = handler;
        assert(solution instanceof Solution_1.Solution, 'Solution expected for Parser');
        assert(handler instanceof BaseHandler_1.BaseHandler, 'BaseHandler expected for the Parser');
    }
    getDependencies(content, ownerResource) {
        throw new Error('Not implemented');
    }
    accepts(type) {
        throw new Error('Not implemented');
    }
}
exports.BaseParser = BaseParser;
;
//# sourceMappingURL=BaseParser.js.map
//# sourceMappingURL=BaseParser.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_base_BaseParser === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_base_BaseParser) && __isObj(module.exports)) {
        Object.assign(_src_handlers_base_BaseParser, module.exports);
    } else {
        _src_handlers_base_BaseParser = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_load_LoadParser;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_load_LoadParser != null ? _src_handlers_load_LoadParser : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadParser = void 0;
const BaseParser_1 = _src_handlers_base_BaseParser;
class LoadParser extends BaseParser_1.BaseParser {
    getDependencies(content, ownerResource) {
        return null;
    }
    accepts(resource) {
        return false;
    }
}
exports.LoadParser = LoadParser;
;
//# sourceMappingURL=LoadParser.js.map
//# sourceMappingURL=LoadParser.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_load_LoadParser === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_load_LoadParser) && __isObj(module.exports)) {
        Object.assign(_src_handlers_load_LoadParser, module.exports);
    } else {
        _src_handlers_load_LoadParser = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_load_LoadHandler;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_load_LoadHandler != null ? _src_handlers_load_LoadHandler : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadHandler = void 0;
const LoadRewriter_1 = _src_handlers_load_LoadRewriter;
const LoadBuilder_1 = _src_handlers_load_LoadBuilder;
const LoadPathResolver_1 = _src_handlers_load_LoadPathResolver;
const BaseHandler_1 = _src_handlers_base_BaseHandler;
const LoadParser_1 = _src_handlers_load_LoadParser;
class LoadHandler extends BaseHandler_1.BaseHandler {
}
exports.LoadHandler = LoadHandler;
LoadHandler.Parser = LoadParser_1.LoadParser;
LoadHandler.Rewriter = LoadRewriter_1.LoadRewriter;
LoadHandler.Builder = LoadBuilder_1.LoadBuilder;
LoadHandler.PathResolver = LoadPathResolver_1.LoadPathResolver;
;
//# sourceMappingURL=LoadHandler.js.map
//# sourceMappingURL=LoadHandler.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_load_LoadHandler === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_load_LoadHandler) && __isObj(module.exports)) {
        Object.assign(_src_handlers_load_LoadHandler, module.exports);
    } else {
        _src_handlers_load_LoadHandler = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_mask_MaskRewriter;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_mask_MaskRewriter != null ? _src_handlers_mask_MaskRewriter : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskRewriter = void 0;
const BaseRewriter_1 = _src_handlers_base_BaseRewriter;
const path_1 = _src_utils_path;
const global_1 = _src_global;
class MaskRewriter extends BaseRewriter_1.BaseRewriter {
    rewritePartial(content, ownerResource) {
        var parser = this.handler.parser;
        var ast = parser._parse(content, ownerResource);
        var found = false;
        global_1.mask.TreeWalker.walk(ast, node => {
            if (node.tagName !== 'imports') {
                return;
            }
            if (ownerResource.source && ownerResource.location !== ownerResource.source.location) {
                node
                    .nodes
                    .filter(x => (0, path_1.path_isRelative)(x.path))
                    .forEach(x => {
                    let ownerSource = ownerResource.source.url, ownerTarget = ownerResource.url, currentUrl = (0, path_1.path_normalize)((0, path_1.path_combine)((0, path_1.path_getDir)(ownerSource), x.path)), targetUrl = (0, path_1.path_toRelative)(currentUrl, ownerTarget);
                    x.path = currentUrl; //targetUrl;
                });
            }
            var page = parser._getPageForNode(node.nodes[0]);
            if (page == null) {
                return;
            }
            found = true;
            var template = this
                .solution
                .outputResources
                .getForPage(page)
                .sort((x, y) => {
                if (x.type === 'js')
                    return 1;
                if (y.type === 'js')
                    return -1;
                return 0;
            })
                .sort((x, y) => {
                if (x.type === 'css')
                    return -1;
                if (y.type === 'css')
                    return 1;
                return 0;
            })
                .map(x => {
                let url = x.url; //x.toRelative(ownerResource);
                return `import sync from '${url}';`;
            })
                .join('');
            var imports = global_1.mask.parse(template);
            node.nodes.unshift(...(imports.nodes));
        });
        if (found === false) {
            return;
        }
        return global_1.mask.stringify(ast, {
            indent: this.solution.opts.minify ? 0 : 4
        });
    }
    rewriteResource(resource) {
        var meta = resource.meta;
        if (meta != null && meta.hasPages === false) {
            return;
        }
        var result = this.rewritePartial(resource.content, resource);
        if (result && result !== resource.content) {
            resource.content = result;
        }
    }
    rewriteRoot(resourceInput, resourceOutput) {
        var ast = this.handler.parser._parse(resourceInput.content);
        global_1.mask.TreeWalker.walk(ast, (node) => {
            if (node.tagName !== 'import') {
                return;
            }
            if (node.path == null || (0, path_1.path_isRelative)(node.path) === false) {
                return;
            }
            if (node.path[0] === '@') {
                // MaskJS prefixed path
                return;
            }
            let path = (0, path_1.path_combine)((0, path_1.path_getDir)(resourceInput.url), node.path);
            node.path = (0, path_1.path_toRelative)(path, resourceOutput.url);
        });
        resourceOutput.content = global_1.mask.stringify(ast, { indent: 4 });
    }
    accepts(type) {
        return type === 'mask';
    }
}
exports.MaskRewriter = MaskRewriter;
;
//# sourceMappingURL=MaskRewriter.js.map
//# sourceMappingURL=MaskRewriter.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_mask_MaskRewriter === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_mask_MaskRewriter) && __isObj(module.exports)) {
        Object.assign(_src_handlers_mask_MaskRewriter, module.exports);
    } else {
        _src_handlers_mask_MaskRewriter = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_mask_MaskScriptable;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_mask_MaskScriptable != null ? _src_handlers_mask_MaskScriptable : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskScriptable = void 0;
class MaskScriptable {
    constructor(solution) {
        this.solution = solution;
    }
    convert(template, resource, resources) {
        //let ast = 
    }
}
exports.MaskScriptable = MaskScriptable;
//# sourceMappingURL=MaskScriptable.js.map
//# sourceMappingURL=MaskScriptable.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_mask_MaskScriptable === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_mask_MaskScriptable) && __isObj(module.exports)) {
        Object.assign(_src_handlers_mask_MaskScriptable, module.exports);
    } else {
        _src_handlers_mask_MaskScriptable = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_mask_MaskBuilder;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_mask_MaskBuilder != null ? _src_handlers_mask_MaskBuilder : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskBuilder = void 0;
const BaseBuilder_1 = _src_handlers_base_BaseBuilder;
const MaskScriptable_1 = _src_handlers_mask_MaskScriptable;
class MaskBuilder extends BaseBuilder_1.BaseBuilder {
    createModule(outputItem, otherOutputItems) {
        let out = [], arr;
        otherOutputItems.forEach(item => {
            if (item.resource.type === 'css') {
                let arr = this.registerStyles(item.resources);
                out.push(...arr);
            }
        });
        arr = outputItem.resources.map(resource => {
            this.solution.assetsManager.rewriteAssets(resource, outputItem.resource, this.solution);
            /*
            * @TODO consider to use relative paths instead of applications root
            */
            //-let url = resource.toRelative(outputItem.resource);
            let url = resource.url;
            return `module path="${url}" {
                ${resource.content}
            }`;
        });
        out.push(...arr);
        outputItem.resource.content = out.join('\n');
    }
    buildRoot(resource, dependencies) {
        if (this.solution.opts.package.type === 'bundle') {
            let scriptable = new MaskScriptable_1.MaskScriptable(this.solution);
            resource.content = scriptable.convert(resource.content, resource, dependencies);
            return;
        }
        let maskDeps = dependencies.filter(x => x.type === 'mask');
        maskDeps.forEach(x => x.embed = true);
        let body = maskDeps.map(x => x.content).join('\n');
        let imports = dependencies
            .filter(x => x.type !== 'mask')
            .filter(x => Boolean(x.content))
            .sort((x, y) => {
            if (x.type === 'js')
                return 1;
            if (y.type === 'js')
                return -1;
            return 0;
        })
            .sort((x, y) => {
            if (x.type === 'css')
                return -1;
            if (y.type === 'css')
                return 1;
            return 0;
        })
            .map(x => {
            let url = x.toRelative(resource);
            return `import sync from '${url}';`;
        })
            .join('\n');
        resource.content = `${body}\n${imports}\n${resource.content}`;
    }
    accepts(type) {
        return type === 'mask';
    }
    registerStyles(resources) {
        return resources.filter(x => x.getModule() === 'mask').map(resource => {
            return `module path="${resource.url}";`;
        });
    }
}
exports.MaskBuilder = MaskBuilder;
;
//# sourceMappingURL=MaskBuilder.js.map
//# sourceMappingURL=MaskBuilder.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_mask_MaskBuilder === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_mask_MaskBuilder) && __isObj(module.exports)) {
        Object.assign(_src_handlers_mask_MaskBuilder, module.exports);
    } else {
        _src_handlers_mask_MaskBuilder = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_mask_MaskPathResolver;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_mask_MaskPathResolver != null ? _src_handlers_mask_MaskPathResolver : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskPathResolver = void 0;
const BasePathResolver_1 = _src_handlers_base_BasePathResolver;
const global_1 = _src_global;
class MaskPathResolver extends BasePathResolver_1.BasePathResolver {
    resolve(includeData, resource) {
        var node = {
            path: includeData.url,
            type: MAPPING[includeData.type]
        };
        var module = {
            path: resource.url,
            location: resource.location
        };
        return global_1.mask.Module.resolvePath(node, null, null, module);
    }
    accepts(includeData) {
        return includeData.module === 'mask';
    }
}
exports.MaskPathResolver = MaskPathResolver;
;
var MAPPING = { mask: 'mask', load: 'data', js: 'script', css: 'style' };
//# sourceMappingURL=MaskPathResolver.js.map
//# sourceMappingURL=MaskPathResolver.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_mask_MaskPathResolver === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_mask_MaskPathResolver) && __isObj(module.exports)) {
        Object.assign(_src_handlers_mask_MaskPathResolver, module.exports);
    } else {
        _src_handlers_mask_MaskPathResolver = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_mask_MaskParser;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_mask_MaskParser != null ? _src_handlers_mask_MaskParser : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskParser = void 0;
const BaseParser_1 = _src_handlers_base_BaseParser;
const async_1 = _src_utils_async;
const global_1 = _src_global;
const color_1 = _src_utils_color;
class MaskParser extends BaseParser_1.BaseParser {
    constructor(solution, handler) {
        super(solution, handler);
        this.solution = solution;
        this.handler = handler;
    }
    getDependencies(content, ownerResource) {
        var ast = this._parse(content, ownerResource);
        var arr = [];
        this._forEachImports(ast, imports => {
            arr.push(...imports);
        });
        return (0, async_1.async_resolve)({ dependencies: arr });
    }
    accepts(type) {
        return type === 'mask';
    }
    _parse(content, resource) {
        global_1.mask.off('error');
        global_1.mask.off('warn');
        var reporter = this.solution.reporter;
        global_1.mask.on('error', error => reporter.error(toMessage(error)));
        global_1.mask.on('warn', warning => reporter.warn(toMessage(warning)));
        function toMessage(warning) {
            var msg = '';
            if (resource)
                msg += (0, color_1.color)(`yellow<${resource.url}>\n`);
            msg += warning.message;
            return msg;
        }
        return global_1.mask.parse(content);
    }
    _forEachImports(ast, cb) {
        global_1.mask.TreeWalker.walk(ast, node => {
            if (node.tagName === 'imports') {
                var imports = Array
                    .from(node.nodes)
                    .filter(x => x.tagName === 'import')
                    .map(x => this._getDependenciesFromNode(x))
                    .reduce((aggr, x) => aggr.concat(...x), []);
                cb(imports);
            }
            if (node.tagName === 'import:cfg') {
                var arr = global_1.mask.Utils.Expression.evalStatements(node.expression);
                global_1.mask.Module.cfg.apply(global_1.mask.Module, arr);
            }
        });
    }
    _getDependenciesFromNode(node) {
        var page = this._getPageForNode(node), path = global_1.mask.Module.resolvePath(node, null, null, null, false), type = global_1.mask.Module.getType(new global_1.mask.Module.Endpoint(path, node.contentType));
        if (path[0] === '/') {
            // @NextIteration base will be handled in mask.Module.resolvePath
            // var base = mask.Module.cfg('base');
            // if (base) {
            // 	path = path_combine(base, path);
            // }
        }
        return [this._createDependency(path, type, page)];
    }
    _cfg_getExtensionForType(type) {
        return global_1.mask.Module.cfg('ext')[type];
    }
    _cfg_getBaseForNs(type) {
        return global_1.mask.Module.cfg('nsBase') || '';
    }
    _createDependency(path, type, page) {
        return {
            url: path,
            type: MAPPING[type],
            module: 'mask',
            page: page
        };
    }
    _getPageForNode(node) {
        var owner = node.parent;
        if (owner != null && owner.tagName === 'imports') {
            owner = owner.parent;
        }
        if (owner == null || owner.type === global_1.mask.Dom.FRAGMENT) {
            return null;
        }
        var page = owner.attr['data-bundler-page'] || owner.attr.page || owner.attr.id || owner.attr.name;
        if (page == null) {
            this.solution.reporter.warn('Nested import found, but the container has no "data-bundler-page", "page", "id" or "name" in attributes');
        }
        return page;
    }
}
exports.MaskParser = MaskParser;
;
var MAPPING = { mask: 'mask', data: 'load', script: 'js', style: 'css' };
//# sourceMappingURL=MaskParser.js.map
//# sourceMappingURL=MaskParser.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_mask_MaskParser === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_mask_MaskParser) && __isObj(module.exports)) {
        Object.assign(_src_handlers_mask_MaskParser, module.exports);
    } else {
        _src_handlers_mask_MaskParser = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_mask_MaskHandler;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_mask_MaskHandler != null ? _src_handlers_mask_MaskHandler : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskHandler = void 0;
const MaskRewriter_1 = _src_handlers_mask_MaskRewriter;
const MaskBuilder_1 = _src_handlers_mask_MaskBuilder;
const MaskPathResolver_1 = _src_handlers_mask_MaskPathResolver;
const BaseHandler_1 = _src_handlers_base_BaseHandler;
const MaskParser_1 = _src_handlers_mask_MaskParser;
const global_1 = _src_global;
class MaskHandler extends BaseHandler_1.BaseHandler {
    resolvePath(includeData, parent) {
        var endpoint = {
            path: includeData.url
        };
        return global_1.mask.Module.resolvePath(endpoint, parent, parent, parent);
    }
    accepts(type) {
        return type === 'mask';
    }
}
exports.MaskHandler = MaskHandler;
MaskHandler.Parser = MaskParser_1.MaskParser;
MaskHandler.Rewriter = MaskRewriter_1.MaskRewriter;
MaskHandler.Builder = MaskBuilder_1.MaskBuilder;
MaskHandler.PathResolver = MaskPathResolver_1.MaskPathResolver;
;
//# sourceMappingURL=MaskHandler.js.map
//# sourceMappingURL=MaskHandler.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_mask_MaskHandler === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_mask_MaskHandler) && __isObj(module.exports)) {
        Object.assign(_src_handlers_mask_MaskHandler, module.exports);
    } else {
        _src_handlers_mask_MaskHandler = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_utils_AstUtil;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_utils_AstUtil != null ? _src_handlers_script_utils_AstUtil : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AstUtil = void 0;
const UglifyJS = require("uglify-js");
let nope = function () {
    return true;
}, variableOverrides = null, walk = function (node, fn) {
    var walker = new UglifyJS.TreeWalker(function (node, descend) {
        return fn.call(this, node, descend);
    });
    node.walk(walker);
}, findNode = function (node, fn, options = { scopeOnly: false }) {
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
}, each = function (node, selector, fn) {
    walk(node, function (node) {
        return selector(node) ? fn.call(this, node, selector) : null;
    });
}, getVariableValue = function (scope, varName) {
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
}, evaluateNode = function (node, scope) {
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
            Array.from(node.properties).forEach(function (x) {
                aggr[x.key] = evaluateNode(x.value, scope);
            });
            return aggr;
        case 'Binary':
            var left = evaluateNode(node.left, scope), right = evaluateNode(node.right, scope);
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
}, getArguments = function (args, scope) {
    if (scope == null) {
        console.warn('getArguments: scope is undefined', args);
    }
    args = Array.prototype.slice.call(args);
    args = Array.from(args).map(function (x) {
        return evaluateNode(x, scope);
    });
    return cleanArgs(args);
}, cleanArgs = function (args) {
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
}, getPropertyChain = function (node, stack) {
    if ((node instanceof UglifyJS.AST_SymbolRef) == false) {
        console.warn('Current node is not a sumbol referencing');
    }
    var i = stack.length - 1, chain = [], key;
    while (--i > -1) {
        var x = stack[i];
        if (x instanceof UglifyJS.AST_PropAccess) {
            chain.push(typeof x.property === 'string' ? x.property : x.property.value);
            continue;
        }
        break;
    }
    return chain;
}, transform = function (node, fn) {
    var transform = new UglifyJS.TreeTransformer(fn);
    node.transform(transform);
};
exports.AstUtil = {
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
                while (--i > -1)
                    pad += ' ';
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
                if (exports.AstUtil.is.string(args[0])) {
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
                if (exports.AstUtil.is.string(args[0])) {
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
//# sourceMappingURL=AstUtil.js.map
//# sourceMappingURL=AstUtil.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_utils_AstUtil === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_utils_AstUtil) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_utils_AstUtil, module.exports);
    } else {
        _src_handlers_script_utils_AstUtil = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_ResourceInfo;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class_ResourceInfo != null ? _src_class_ResourceInfo : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportNode = exports.ImportNode = exports.ResourceInfo = exports.ResourceMeta = void 0;
class ResourceMeta {
}
exports.ResourceMeta = ResourceMeta;
class ResourceInfo {
    constructor() {
        this.dependencies = [];
    }
    static merge(...infos) {
        const result = new ResourceInfo;
        infos.forEach(x => {
            if (x.dependencies) {
                if (result.dependencies == null) {
                    result.dependencies = [];
                }
                result.dependencies.push(...x.dependencies);
            }
            if (x.meta) {
                if (result.meta == null) {
                    result.meta = {};
                }
                Object.assign(result.meta, x.meta);
            }
        });
        return result;
    }
}
exports.ResourceInfo = ResourceInfo;
class ImportNode {
}
exports.ImportNode = ImportNode;
class ExportNode {
    constructor() {
        this.dependents = [];
        this.builder = { movedToOuter: false };
    }
    clone() {
        var node = new ExportNode();
        node.position = this.position;
        node.length = this.length;
        node.str = this.str;
        node.ref = this.ref;
        node.refs = this.refs;
        node.type = this.type;
        node.dependents = this.dependents;
        return node;
    }
    hasExport(ref) {
        if (this.ref === ref) {
            return true;
        }
        if (this.refs != null && this.refs.includes(ref)) {
            return true;
        }
        return false;
    }
}
exports.ExportNode = ExportNode;
//# sourceMappingURL=ResourceInfo.js.map
//# sourceMappingURL=ResourceInfo.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class_ResourceInfo === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class_ResourceInfo) && __isObj(module.exports)) {
        Object.assign(_src_class_ResourceInfo, module.exports);
    } else {
        _src_class_ResourceInfo = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_arr;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_arr != null ? _src_utils_arr : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr_flattern = void 0;
function arr_flattern(arr) {
    var out = [];
    arr.forEach(x => {
        if (Array.isArray(x) === false) {
            out.push(x);
            return;
        }
        var flat = arr_flattern(x);
        out.push(...flat);
    });
    return out.filter(x => x != null);
}
exports.arr_flattern = arr_flattern;
;
//# sourceMappingURL=arr.js.map
//# sourceMappingURL=arr.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_arr === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_arr) && __isObj(module.exports)) {
        Object.assign(_src_utils_arr, module.exports);
    } else {
        _src_utils_arr = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_common_js_CommonJsParser;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_common_js_CommonJsParser != null ? _src_handlers_script_common_js_CommonJsParser : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonJsParser = void 0;
const AstUtil_1 = _src_handlers_script_utils_AstUtil;
const Include_1 = _src_class_Include;
const BaseParser_1 = _src_handlers_base_BaseParser;
const atma_utils_1 = require("atma-utils");
class CommonJsParser extends BaseParser_1.BaseParser {
    getDependencies(ast, ownerResource) {
        let info = {
            dependencies: []
        };
        AstUtil_1.AstUtil.each(ast, AstUtil_1.AstUtil.is.commonJsFunction, (node, descend) => {
            let scope = node.scope || ast;
            let deps = this._process(node, scope);
            if (deps) {
                info.dependencies.push(...deps);
            }
            return true;
        });
        info.dependencies.forEach(x => x.module = 'commonjs');
        return new atma_utils_1.class_Dfr().resolve(info);
    }
    _process(node, scope) {
        if (node.args.length !== 1) {
            return null;
        }
        let args = AstUtil_1.AstUtil.getArguments(node.args, scope);
        let include = new Include_1.Include();
        let path = args[0];
        if (typeof path !== 'string') {
            throw new Error('Path should be a string: ' + path);
        }
        if (this._isNodeJsNative(path)) {
            //@TODO: Should we provide the shims for browser builds?
            return null;
        }
        let groups = Include_1.Include.groupByType([path], this.solution.opts);
        for (let type in groups) {
            include[type].apply(include, groups[type]);
        }
        let includes = include.includes;
        includes.forEach((x, i) => {
            let arg = node.args[i];
            x.pos = arg.start.pos;
        });
        return include.includes;
    }
    _isNodeJsNative(path) {
        return false;
    }
}
exports.CommonJsParser = CommonJsParser;
;
//# sourceMappingURL=CommonJsParser.js.map
//# sourceMappingURL=CommonJsParser.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_common_js_CommonJsParser === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_common_js_CommonJsParser) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_common_js_CommonJsParser, module.exports);
    } else {
        _src_handlers_script_common_js_CommonJsParser = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_common_js_CommonJsRewriter;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_common_js_CommonJsRewriter != null ? _src_handlers_script_common_js_CommonJsRewriter : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonJsRewriter = void 0;
const BaseRewriter_1 = _src_handlers_base_BaseRewriter;
class CommonJsRewriter extends BaseRewriter_1.BaseRewriter {
    rewritePartial(content, ownerResource) {
    }
    rewriteResource(resource) {
    }
    accepts(type) {
        return type === 'mask';
    }
}
exports.CommonJsRewriter = CommonJsRewriter;
;
//# sourceMappingURL=CommonJsRewriter.js.map
//# sourceMappingURL=CommonJsRewriter.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_common_js_CommonJsRewriter === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_common_js_CommonJsRewriter) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_common_js_CommonJsRewriter, module.exports);
    } else {
        _src_handlers_script_common_js_CommonJsRewriter = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_common_js_templates_Templates;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_common_js_templates_Templates != null ? _src_handlers_script_common_js_templates_Templates : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Templates = void 0;
const global_1 = _src_global;
exports.Templates = {
    Module: `
// source ./Module.js
__register("%MODULE_PATH%", function(require, module, exports, __filename, __dirname){
	%MODULE%

	%FOOTER%
});

// end:source ./Module.js
`,
    ModuleSimplified: `
// source ./ModuleSimplified.js
var ___VAR_ID___;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = ___VAR_ID___ != null ? ___VAR_ID___ : {};
    var module = { exports: exports };

    ___MODULE___;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (___VAR_ID___ === module.exports) {
        // do nothing if
    } else if (__isObj(___VAR_ID___) && __isObj(module.exports)) {
        Object.assign(___VAR_ID___, module.exports);
    } else {
        ___VAR_ID___ = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js
`,
    Header: `
// source ./Header.js
var __register, __require, require;

(function(){

	// source ./path.js
	var path_getDir,
		path_resolveCurrent,
		path_normalize,
		path_resolveUrl,
		path_combine	
		;
	(function(){
		var isNodeJS = typeof process !== 'undefined' 
			&& typeof window === 'undefined' 
			&& typeof navigator === 'undefined';
	
		path_getDir = function(path) {
			return path.substring(0, path.lastIndexOf('/') + 1);
		};
	
		(function(){
			var current_;		
			if (isNodeJS === false) {
				path_resolveCurrent = function(){
					if (current_ != null) return current_;
	
					var fn = 'baseURI' in window.document
							? fromBase
							: fromLocation;
					return (current_ = path_sliceFilename(fn()));
				};
				function fromBase() {
					var path = window.document.baseURI;
					var i = path.indexOf('?');
					return i === -1 ? path : path.substring(0, i);
				}
				function fromLocation() {
					return window.location.origin + window.location.pathname;
				}
			}
			else {
			
				path_resolveCurrent = function(){
					if (current_ != null) return current_;
					return (current_ = path_win32Normalize(__dirname));
				};
			}
		}());
	
	
		path_normalize = function(path) {
			var path_ = path
				.replace(new RegExp("\\\\\\\\", "g"), '/')
				// remove double slashes, but not near protocol
				.replace(new RegExp("([^:\\\\/])\\\\/{2,}", "g"), '$1/')
				// './xx' to relative string
				.replace(new RegExp("^\\\\.\\\\/"), '')
				// join 'xx/./xx'
				.replace(new RegExp("\\\\/\\\\.\\\\//", "g"), '/')
				;
			path_ = path_collapse(path_);		
			return path_;
		};
		path_resolveUrl = function(path, location) {
			if (/\\.\\w+$/.test(path) === false) {
				path += '.js';
			}
			var url = path_normalize(path);
			if (url[0] === '/') {
				url = path_combine(path_resolveCurrent(), url);
			} else if (rgx_PROTOCOL.test(url) === false) {
				url = path_normalize(path_combine(location || path_resolveCurrent(), url));
			}
			if (rgx_PROTOCOL.test(url) === false) {
				url = 'file://' + url;
			}
			return url;
		};
		
		path_combine = function() {
			var out = '',
				imax = arguments.length,
				i = -1, x;
			while ( ++i < imax ){
				x = arguments[i];
				if (!x)  continue;
	
				x = path_normalize(x);
				if (out === '') {
					out = x;
					continue;
				}
				if (out[out.length - 1] !== '/') {
					out += '/'
				}
				if (x[0] === '/') {
					x = x.substring(1);
				}
				out += x;
			}
			return path_collapse(out);
		};
	
		var rgx_PROTOCOL = /^(file|https?):/i,
			rgx_SUB_DIR  = new RegExp("[^\\\\/\\\\.]+\/\\\\.\\\\.\\\\/"),
			rgx_FILENAME = new RegExp("\\\\/[^\\\\/]+\\\\.\\\\w+(\\\\?.*)?(#.*)?$"),
			rgx_EXT      = new RegExp("\\\\.(\\\\w+)$"),
			rgx_win32Drive = new RegExp("(^\\\\/?\\\\w{1}:)(\\\\/|$)")
			;
	
		function path_win32Normalize (path){
			path = path_normalize(path);
			if (path.substring(0, 5) === 'file:')
				return path;
	
			return 'file://' + path;
		}
	
		function path_collapse(url_) {
			var url = url_;
			while (rgx_SUB_DIR.test(url)) {
				url = url.replace(rgx_SUB_DIR, '');
			}
			return url;
		}
		function path_ensureTrailingSlash(path) {
			if (path.charCodeAt(path.length - 1) === 47 /* / */)
				return path;
	
			return path + '/';
		}
		function path_sliceFilename(path) {
			return path_ensureTrailingSlash(path.replace(rgx_FILENAME, ''));
		}
	
	}());
	
	// end:source ./path.js

	var __global = typeof global !== 'undefined' && global ? global : window;
	var __nativeRequire = __global.require;
	var __originalRequire = function (path_) {
		var location = this.location;
		var path = path_resolveUrl(path_, location);

		if (modules[path]) {
			return modules[path].runOnce();
		}

		return __nativeRequire(path_);
	};

	__register = function (path, factory) {
		var filename = path_resolveUrl(path);	
		modules[filename] = new Module(filename, factory);			
	};

	__require =__originalRequire.bind({ location: path_getDir(path_resolveUrl('%ROOT_DIR%')) });

	var modules = {};
	var Module = function(filename, factory){	
		this.filename = filename;
		this.dirname = path_getDir(filename);
		this.factory = factory;
		this.exports = null;
	};
	Module.prototype.runOnce = function(){
		if (this.exports != null) {
			return this.exports;
		}
		var require = __originalRequire.bind({ 
			location: this.dirname 
		});
		this.exports = {};
		this.factory(
			require, 
			this, 
			this.exports, 
			this.filename, 
			this.dirname
		);
		return this.exports;
	};
	
	require = __require;

	if (__nativeRequire == null) {
		__global.require = __require;
	}
}());
// end:source ./Header.js
`,
    RootModule: `
// source ./RootModule.js
(function(){
	
	%BUNDLE%

}());
// end:source ./RootModule.js
`,
    UMD: `
// source ./UMD.js
(function (factory) {

    var _name = '%NAME%',
        _global = typeof window === 'undefined' ? global : window,
        _module = {
            exports: {}
        };

    factory(_module, _module.exports, _global);

    if (typeof module === 'object' && module.exports) {
        module.exports = _module.exports;
    }

    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return _module.exports;
        });
        return;
    }
    
    if (_name) {
        _global[_name] = _module.exports;
    }

}(function (module, exports, global) {

    %MODULE%

}));

// end:source ./UMD.js
`,
    Style: `
// source ./Style.js
// %url%
(function (d) {
    if (d == null) {
        return;
    }
    var s = d.createElement('style');
    s.textContent = '%body%';
    (d.body || d.head).appendChild(s);
}(typeof document === 'undefined' ? null : document));
// end:source ./Style.js
`,
    Mask: `
// source ./Mask.js
//%url%
mask.define("%body%");
// end:source ./Mask.js
`,
    load(path) {
        let template = global_1.io.File.read(path);
        if (!template) {
            throw new Error(`Custom module wrapper not found: ${path}`);
        }
        return template;
    }
};
//# sourceMappingURL=Templates.js.map
//# sourceMappingURL=Templates.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_common_js_templates_Templates === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_common_js_templates_Templates) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_common_js_templates_Templates, module.exports);
    } else {
        _src_handlers_script_common_js_templates_Templates = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_common_js_CommonJsBuilderSimplified;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_common_js_CommonJsBuilderSimplified != null ? _src_handlers_script_common_js_CommonJsBuilderSimplified : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonJsBuilderSimplified = void 0;
const Resource_1 = _src_class_Resource;
const Templates_1 = _src_handlers_script_common_js_templates_Templates;
exports.CommonJsBuilderSimplified = {
    wrapModule(resource, outputItem, outputItems, setts) {
        var varId = getVarId(resource);
        var content = resource.content;
        content = replaceWithVarIds(content, resource, this.solution);
        content = Templates_1.Templates
            .ModuleSimplified
            .replace(/[_]{3}VAR_ID[_]{3}/g, () => varId)
            .replace(/[_]{3}MODULE[_]{3}/g, () => content)
            .replace(/[_]{3}FOOTER[_]{3}/g, () => { var _a, _b; return ((_b = (_a = setts === null || setts === void 0 ? void 0 : setts.partials) === null || _a === void 0 ? void 0 : _a.footer) !== null && _b !== void 0 ? _b : ''); });
        ;
        var opts = this.solution.iteration;
        if (opts.commonjs == null) {
            opts.commonjs = {
                addHeading: true,
                hasHeading: false
            };
        }
        ;
        if (opts.commonjs.hasHeading === false && opts.commonjs.addHeading === true) {
            opts.commonjs.hasHeading = true;
            content = this.getHeaderContent() + content;
        }
        return content;
    },
    getRootContent(root) {
        var rootInput = this.solution.outputResources.rootInput, content = replaceWithVarIds(root.content, rootInput, this.solution);
        return content;
    },
    getHeaderContent() {
        var resources = this
            .solution
            .outputResources
            .items
            .map(x => x.resources)
            .reduce((aggr, x) => aggr.concat(x), []);
        return getModuleVars(resources);
    }
};
function replaceWithVarIds(content, resource, solution) {
    var rgx_REQUIRE = /require\s*\(\s*['"]([^'"]+)['"]\s*\)/g;
    return content.replace(rgx_REQUIRE, (full, path) => {
        var res = new Resource_1.Resource({ url: path, type: 'js' }, resource, solution);
        var current = resource.resources.find(x => x.url === res.url);
        if (current == null) {
            return full;
        }
        return getVarId(current);
    });
}
function getVarId(resource) {
    var str = resource.url.replace(/\.\w+$/, '');
    return str.replace(/[^\w\d]/g, '_');
}
function getModuleVars(resources) {
    return resources.map(getVarId).sort().map(x => `var ${x} = {};`).join('\n') + '\n';
}
//# sourceMappingURL=CommonJsBuilderSimplified.js.map
//# sourceMappingURL=CommonJsBuilderSimplified.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_common_js_CommonJsBuilderSimplified === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_common_js_CommonJsBuilderSimplified) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_common_js_CommonJsBuilderSimplified, module.exports);
    } else {
        _src_handlers_script_common_js_CommonJsBuilderSimplified = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_base_BaseScriptBuilder;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_base_BaseScriptBuilder != null ? _src_handlers_script_base_BaseScriptBuilder : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseScriptBuilder = void 0;
const BaseBuilder_1 = _src_handlers_base_BaseBuilder;
class BaseScriptBuilder extends BaseBuilder_1.BaseBuilder {
    /** When a module has no js script, only other resource imports.
     *  You may want to add some resource registration code
     */
    wrapScriptlessModule(otherOutputItems) {
        return '';
    }
    isMainBuilder(solution) {
        return false;
    }
    createModule(outputItem, otherOutputItems) {
        throw new Error("Method not implemented.");
    }
    wrapModule(resource, outputItem = null, otherOutputItems = null, opts = null) {
        throw Error('Not implemented');
    }
    buildRoot(resource, dependencies) {
        throw Error('Not implemented');
    }
}
exports.BaseScriptBuilder = BaseScriptBuilder;
;
//# sourceMappingURL=BaseScriptBuilder.js.map
//# sourceMappingURL=BaseScriptBuilder.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_base_BaseScriptBuilder === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_base_BaseScriptBuilder) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_base_BaseScriptBuilder, module.exports);
    } else {
        _src_handlers_script_base_BaseScriptBuilder = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_template;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_template != null ? _src_utils_template : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template_stringifyContent = exports.template_interpolate = void 0;
const atma_utils_1 = require("atma-utils");
function template_interpolate(template, model) {
    template = template.replace(/%([\w\.\d]+)%/g, (full, property) => {
        return (0, atma_utils_1.obj_getProperty)(model, property);
    });
    return template;
}
exports.template_interpolate = template_interpolate;
function template_stringifyContent(str) {
    return str
        .replace(/[\n]/g, '\\n')
        .replace(/[\r]/g, '')
        .replace(/["]/g, '\\"');
}
exports.template_stringifyContent = template_stringifyContent;
//# sourceMappingURL=template.js.map
//# sourceMappingURL=template.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_template === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_template) && __isObj(module.exports)) {
        Object.assign(_src_utils_template, module.exports);
    } else {
        _src_utils_template = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_common_js_ModuleWrapper;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_common_js_ModuleWrapper != null ? _src_handlers_script_common_js_ModuleWrapper : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleWrapper = void 0;
const Templates_1 = _src_handlers_script_common_js_templates_Templates;
class ModuleWrapper {
    constructor(solution) {
        this.solution = solution;
    }
    wrap(body) {
        var wrapper = this.solution.opts.package.moduleWrapper;
        switch (wrapper) {
            case 'iif':
                body = this.wrapWithIIF(body);
                break;
            case 'umd':
                body = this.wrapWithUMD(body);
                break;
            case 'custom':
                body = this.wrapWithCustom(body);
                break;
            case 'script':
                break;
            default:
                throw new Error('Uknown module wrapper: ' + wrapper);
        }
        return body;
    }
    wrapWithIIF(body) {
        return Templates_1.Templates
            .RootModule
            .replace('%BUNDLE%', () => body);
    }
    wrapWithUMD(body) {
        var opts = this.solution.opts.package;
        var name = opts.moduleName || '';
        return Templates_1.Templates
            .UMD
            .replace('%MODULE%', () => body)
            .replace('%NAME%', () => name);
    }
    wrapWithCustom(body) {
        let opts = this.solution.opts.package;
        let template = Templates_1.Templates.load(opts.moduleWrapperCustomPath);
        return template
            .replace('/**MODULE**/', () => body);
    }
}
exports.ModuleWrapper = ModuleWrapper;
//# sourceMappingURL=ModuleWrapper.js.map
//# sourceMappingURL=ModuleWrapper.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_common_js_ModuleWrapper === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_common_js_ModuleWrapper) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_common_js_ModuleWrapper, module.exports);
    } else {
        _src_handlers_script_common_js_ModuleWrapper = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_common_js_CommonJsBuilder;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_common_js_CommonJsBuilder != null ? _src_handlers_script_common_js_CommonJsBuilder : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonJsBuilder = void 0;
const CommonJsBuilderSimplified_1 = _src_handlers_script_common_js_CommonJsBuilderSimplified;
const Templates_1 = _src_handlers_script_common_js_templates_Templates;
const BaseScriptBuilder_1 = _src_handlers_script_base_BaseScriptBuilder;
const template_1 = _src_utils_template;
const ModuleWrapper_1 = _src_handlers_script_common_js_ModuleWrapper;
class CommonJsBuilder extends BaseScriptBuilder_1.BaseScriptBuilder {
    constructor(solution, handler) {
        super(solution, handler);
        this.solution = solution;
        this.handler = handler;
        var opts = this.solution.opts.package.commonjs;
        if (opts && opts.output === 'simplified') {
            this.wrapModule = CommonJsBuilderSimplified_1.CommonJsBuilderSimplified.wrapModule;
            this.getRootContent = CommonJsBuilderSimplified_1.CommonJsBuilderSimplified.getRootContent;
            this.getHeaderContent = CommonJsBuilderSimplified_1.CommonJsBuilderSimplified.getHeaderContent;
        }
    }
    accepts(resource) {
        if (resource.type !== 'js') {
            return false;
        }
        let module = resource.getModule();
        if (module == null || module === 'root') {
            module = this.solution.opts.package.module;
        }
        return module === 'commonjs';
    }
    wrapModule(resource, outputItem, outputItems, setts) {
        var opts = this.solution.iteration;
        if (opts.commonjs == null) {
            opts.commonjs = {
                addHeading: true,
                hasHeading: false
            };
        }
        ;
        var body = '';
        if (opts.commonjs.hasHeading === false && opts.commonjs.addHeading === true) {
            opts.commonjs.hasHeading = true;
            body = this.getHeaderContent();
        }
        var { url, content } = resource;
        var module = Templates_1.Templates
            .Module
            .replace('%MODULE_PATH%', () => url)
            .replace('%MODULE%', () => content)
            .replace('%FOOTER%', () => { var _a, _b; return ((_b = (_a = setts === null || setts === void 0 ? void 0 : setts.partials) === null || _a === void 0 ? void 0 : _a.footer) !== null && _b !== void 0 ? _b : ''); });
        return body + module;
    }
    getHeaderContent() {
        var mainUrl = this.solution.outputResources.rootInput.url;
        return Templates_1.Templates
            .Header
            .replace('%ROOT_DIR%', () => mainUrl);
    }
    buildRoot(root, outputDependencies) {
        outputDependencies.forEach(x => x.embed = true);
        let content = this.getRootContent(root, outputDependencies);
        let body = outputDependencies
            .map(x => {
            let content = x.content;
            if (x.type === 'css') {
                content = (0, template_1.template_interpolate)(Templates_1.Templates.Style, { body: (0, template_1.template_stringifyContent)(content), url: x.url });
            }
            if (x.type === 'mask') {
                content = (0, template_1.template_interpolate)(Templates_1.Templates.Mask, { body: (0, template_1.template_stringifyContent)(content), url: x.url });
            }
            return content;
        })
            .concat([content])
            .join('\n');
        var wrapper = new ModuleWrapper_1.ModuleWrapper(this.solution);
        root.content = wrapper.wrap(body);
    }
    getRootContent(root, outputDependencies) {
        return root.content;
    }
}
exports.CommonJsBuilder = CommonJsBuilder;
;
//# sourceMappingURL=CommonJsBuilder.js.map
//# sourceMappingURL=CommonJsBuilder.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_common_js_CommonJsBuilder === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_common_js_CommonJsBuilder) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_common_js_CommonJsBuilder, module.exports);
    } else {
        _src_handlers_script_common_js_CommonJsBuilder = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_common_js_CommonJsPathResolver;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_common_js_CommonJsPathResolver != null ? _src_handlers_script_common_js_CommonJsPathResolver : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonJsPathResolver = void 0;
const BasePathResolver_1 = _src_handlers_base_BasePathResolver;
const path_1 = _src_utils_path;
const global_1 = _src_global;
class CommonJsPathResolver extends BasePathResolver_1.BasePathResolver {
    accepts(includeData) {
        if (includeData.type !== 'js' || includeData.module !== 'commonjs') {
            return false;
        }
        if (!/^[\w\-/]+$/.test(includeData.url)) {
            return false;
        }
        if (nodeCoreModules.indexOf(includeData.url) !== -1) {
            return false;
        }
        return true;
    }
    resolve(includeData, parentResource) {
        var filename = nodeModuleResolve(includeData.url, parentResource.directory);
        if (filename) {
            var url = this.solution.opts.toAppUrl(filename);
            this.solution.opts.mappings[includeData.url] = url;
        }
        return filename;
    }
}
exports.CommonJsPathResolver = CommonJsPathResolver;
;
const nodeCoreModules = [
    'assert', 'buffer', 'child_process', 'cluster', 'console', 'constants',
    'crypto', 'dgram', 'dns', 'domain', 'events', 'fs', 'http', 'https', 'module', 'net', 'os', 'path',
    'process', 'punycode', 'querystring', 'readline', 'repl', 'stream', 'string_decoder', 'sys', 'timers',
    'tls', 'tty', 'url', 'util', 'vm', 'zlib'
];
function nodeModuleResolve(path, location_) {
    var location = location_.replace(/[\\\/]+$/, '');
    var name = /^([\w\-]+)/.exec(path)[0];
    var resource = path.substring(name.length + 1);
    if (resource && hasExt(resource) === false) {
        resource += '.js';
    }
    var current = location;
    var root_ = current + '/node_modules/' + name + '/';
    while (true) {
        var nodeModules = (0, path_1.path_combine)(current, '/node_modules/' + name + '/');
        var pckg = nodeModules + 'package.json';
        if (global_1.io.File.exists(pckg) === false) {
            var next = current.replace(/[^\/\\]+[\/\\]?$/, '');
            if (next === current) {
                return root_ + 'package.json';
            }
            current = next;
            continue;
        }
        var json = global_1.io.File.read(pckg);
        if (typeof json === 'string') {
            json = JSON.parse(json);
        }
        if (resource) {
            return nodeModules + resource;
        }
        if (json.main) {
            return (0, path_1.path_combine)(nodeModules, json.main);
        }
        return nodeModules + 'index.js';
    }
}
function hasExt(path) {
    return /\.[\w]{1,8}($|\?)/.test(path);
}
//# sourceMappingURL=CommonJsPathResolver.js.map
//# sourceMappingURL=CommonJsPathResolver.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_common_js_CommonJsPathResolver === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_common_js_CommonJsPathResolver) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_common_js_CommonJsPathResolver, module.exports);
    } else {
        _src_handlers_script_common_js_CommonJsPathResolver = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_common_js_CommonJsHandler;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_common_js_CommonJsHandler != null ? _src_handlers_script_common_js_CommonJsHandler : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonJsHandler = void 0;
const CommonJsParser_1 = _src_handlers_script_common_js_CommonJsParser;
const CommonJsRewriter_1 = _src_handlers_script_common_js_CommonJsRewriter;
const CommonJsBuilder_1 = _src_handlers_script_common_js_CommonJsBuilder;
const CommonJsPathResolver_1 = _src_handlers_script_common_js_CommonJsPathResolver;
const BaseHandler_1 = _src_handlers_base_BaseHandler;
class CommonJsHandler extends BaseHandler_1.BaseHandler {
}
exports.CommonJsHandler = CommonJsHandler;
CommonJsHandler.Parser = CommonJsParser_1.CommonJsParser;
CommonJsHandler.Rewriter = CommonJsRewriter_1.CommonJsRewriter;
CommonJsHandler.Builder = CommonJsBuilder_1.CommonJsBuilder;
CommonJsHandler.PathResolver = CommonJsPathResolver_1.CommonJsPathResolver;
;
//# sourceMappingURL=CommonJsHandler.js.map
//# sourceMappingURL=CommonJsHandler.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_common_js_CommonJsHandler === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_common_js_CommonJsHandler) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_common_js_CommonJsHandler, module.exports);
    } else {
        _src_handlers_script_common_js_CommonJsHandler = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_amd_js_AmdJsParser;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_amd_js_AmdJsParser != null ? _src_handlers_script_amd_js_AmdJsParser : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmdJsParser = void 0;
const BaseParser_1 = _src_handlers_base_BaseParser;
const AstUtil_1 = _src_handlers_script_utils_AstUtil;
const atma_utils_1 = require("atma-utils");
const Include_1 = _src_class_Include;
class AmdJsParser extends BaseParser_1.BaseParser {
    getDependencies(ast, ownerResource) {
        let info = {
            dependencies: []
        };
        AstUtil_1.AstUtil.each(ast, AstUtil_1.AstUtil.is.amdFunction, (node, descend) => {
            let scope = node.scope || ast;
            let deps = this._process(node, scope);
            if (deps) {
                info.dependencies.push(...deps);
            }
            return true;
        });
        return new atma_utils_1.class_Dfr().resolve(info);
    }
    _process(node, scope) {
        if (node.args.length < 2) {
            return;
        }
        let args = AstUtil_1.AstUtil.getArguments(node.args, scope);
        let res = new Include_1.Include();
        let dependencies = args.find(x => Array.isArray(x));
        if (dependencies == null) {
            return;
        }
        let groups = Include_1.Include.groupByType(dependencies, this.solution.opts);
        for (let type in groups) {
            res[type].apply(res, groups[type]);
        }
        res.includes.forEach(x => x.module = 'amd');
        let ignore = ['exports', 'require'];
        res.includes = res.includes.filter(x => ignore.indexOf(x.url) === -1);
        return res.includes;
    }
}
exports.AmdJsParser = AmdJsParser;
;
//# sourceMappingURL=AmdJsParser.js.map
//# sourceMappingURL=AmdJsParser.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_amd_js_AmdJsParser === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_amd_js_AmdJsParser) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_amd_js_AmdJsParser, module.exports);
    } else {
        _src_handlers_script_amd_js_AmdJsParser = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_amd_js_AmdJsRewriter;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_amd_js_AmdJsRewriter != null ? _src_handlers_script_amd_js_AmdJsRewriter : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmdJsRewriter = void 0;
const BaseRewriter_1 = _src_handlers_base_BaseRewriter;
class AmdJsRewriter extends BaseRewriter_1.BaseRewriter {
    rewritePartial(content, ownerResource) {
    }
    rewriteResource(resource) {
    }
    accepts(type) {
        return type === 'mask';
    }
}
exports.AmdJsRewriter = AmdJsRewriter;
;
//# sourceMappingURL=AmdJsRewriter.js.map
//# sourceMappingURL=AmdJsRewriter.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_amd_js_AmdJsRewriter === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_amd_js_AmdJsRewriter) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_amd_js_AmdJsRewriter, module.exports);
    } else {
        _src_handlers_script_amd_js_AmdJsRewriter = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_amd_js_AmdJsBuilder;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_amd_js_AmdJsBuilder != null ? _src_handlers_script_amd_js_AmdJsBuilder : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmdJsBuilder = void 0;
const BaseScriptBuilder_1 = _src_handlers_script_base_BaseScriptBuilder;
class AmdJsBuilder extends BaseScriptBuilder_1.BaseScriptBuilder {
    buildRoot(resource, dependencies) {
    }
    accepts(type) {
        return false;
    }
}
exports.AmdJsBuilder = AmdJsBuilder;
;
//# sourceMappingURL=AmdJsBuilder.js.map
//# sourceMappingURL=AmdJsBuilder.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_amd_js_AmdJsBuilder === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_amd_js_AmdJsBuilder) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_amd_js_AmdJsBuilder, module.exports);
    } else {
        _src_handlers_script_amd_js_AmdJsBuilder = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_amd_js_AmdJsHandler;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_amd_js_AmdJsHandler != null ? _src_handlers_script_amd_js_AmdJsHandler : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmdJsHandler = void 0;
const AmdJsParser_1 = _src_handlers_script_amd_js_AmdJsParser;
const AmdJsRewriter_1 = _src_handlers_script_amd_js_AmdJsRewriter;
const AmdJsBuilder_1 = _src_handlers_script_amd_js_AmdJsBuilder;
const BaseHandler_1 = _src_handlers_base_BaseHandler;
class AmdJsHandler extends BaseHandler_1.BaseHandler {
}
exports.AmdJsHandler = AmdJsHandler;
AmdJsHandler.Parser = AmdJsParser_1.AmdJsParser;
AmdJsHandler.Rewriter = AmdJsRewriter_1.AmdJsRewriter;
AmdJsHandler.Builder = AmdJsBuilder_1.AmdJsBuilder;
AmdJsHandler.PathResolver = null;
;
//# sourceMappingURL=AmdJsHandler.js.map
//# sourceMappingURL=AmdJsHandler.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_amd_js_AmdJsHandler === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_amd_js_AmdJsHandler) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_amd_js_AmdJsHandler, module.exports);
    } else {
        _src_handlers_script_amd_js_AmdJsHandler = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_ResourcePropMapping;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class_ResourcePropMapping != null ? _src_class_ResourcePropMapping : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcePropMapping = void 0;
class ResourcePropMapping {
    constructor(resA, resB) {
        this.resA = resA;
        this.resB = resB;
    }
    map(resource) {
        var match = true;
        for (var key in this.resA) {
            var val = this.resA[key];
            if (val == null)
                continue;
            var currentVal = resource[key];
            if (typeof val === 'function') {
                match = val(currentVal);
            }
            if (val instanceof RegExp) {
                match = val.exec(currentVal) != null;
            }
            if (typeof val === 'string' || typeof val === 'number') {
                match = val === currentVal;
            }
            if (match == false)
                return resource;
        }
        var clone = resource.clone();
        for (var key in this.resB) {
            var val = this.resB[key];
            var currentVal = resource[key];
            if (typeof val === 'function') {
                clone[key] = val(currentVal, resource);
                continue;
            }
            if (typeof val === 'string' || typeof val === 'boolean') {
                clone[key] = val;
                continue;
            }
        }
        return clone;
    }
}
exports.ResourcePropMapping = ResourcePropMapping;
//# sourceMappingURL=ResourcePropMapping.js.map
//# sourceMappingURL=ResourcePropMapping.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class_ResourcePropMapping === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class_ResourcePropMapping) && __isObj(module.exports)) {
        Object.assign(_src_class_ResourcePropMapping, module.exports);
    } else {
        _src_class_ResourcePropMapping = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_include_js_IncludeJsParser;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_include_js_IncludeJsParser != null ? _src_handlers_script_include_js_IncludeJsParser : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncludeJsParser = void 0;
const AstUtil_1 = _src_handlers_script_utils_AstUtil;
const Include_1 = _src_class_Include;
const ResourcePropMapping_1 = _src_class_ResourcePropMapping;
const BaseParser_1 = _src_handlers_base_BaseParser;
const atma_utils_1 = require("atma-utils");
class IncludeJsParser extends BaseParser_1.BaseParser {
    constructor(solution, handler) {
        super(solution, handler);
        if (this.solution.opts.package.module === 'includejs') {
            this.solution.opts.mappers.push(...IncludeJsMappings);
        }
    }
    getDependencies(ast, ownerResource) {
        var info = {
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
        AstUtil_1.AstUtil.each(ast, AstUtil_1.AstUtil.is.includeFunction, (node, descend) => {
            function isIncludeSymbolRef(node) {
                return AstUtil_1.AstUtil.is.type(node, 'AST_SymbolRef') && node.name == 'include';
            }
            var scope = AstUtil_1.AstUtil.findNode(node, isIncludeSymbolRef).scope || ast;
            this._process(info, node, scope);
            return true;
        });
        if (this._getPropertySetter('exports', ast) != null) {
            info.meta.includejs.hasExports = true;
        }
        return new atma_utils_1.class_Dfr().resolve(info);
    }
    _process(info, node, scope) {
        var arr = [];
        function isIncludeMethodCall(node) {
            return AstUtil_1.AstUtil.is.type(node, 'AST_Call') && node.start.value == 'include';
        }
        ;
        AstUtil_1.AstUtil.each(node, isIncludeMethodCall, (node) => {
            switch (node.expression && node.expression.property) {
                case 'js':
                case 'css':
                case 'load':
                case 'lazy':
                case 'mask':
                case 'routes':
                case 'setBase':
                case 'cfg':
                    var pckg = {
                        type: node.expression.property,
                        args: AstUtil_1.AstUtil.getArguments(node.args, scope),
                    };
                    if (pckg.args.length > 0) {
                        arr.unshift(pckg);
                    }
                    info.meta.includejs.hasIncludes = true;
                    break;
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
        var include = new Include_1.Include();
        arr.forEach(function (x) {
            include[x.type].apply(include, x.args);
        });
        info.dependencies.push(...include.includes);
    }
    _processIncludeCallback(info, CallbackNode) {
        if (AstUtil_1.AstUtil.is.type(CallbackNode, 'AST_Function') == false) {
            return;
        }
        var meta = info.meta.includejs, args = CallbackNode.argnames, responseObjectName = args.length > 0
            ? args[args.length - 1].name
            : null;
        if (responseObjectName) {
            meta.hasResponseObject = true;
            var names = this._getPropertyAccessors(responseObjectName, CallbackNode);
            if (names) {
                meta.responseAccessors = (meta.responseAccessors || []).concat(names);
            }
        }
    }
    /**
     *	resolve %name%.propertyAccessor
     */
    _getPropertyAccessors(name, Fn) {
        var references = [];
        Fn.body.forEach(function (x) {
            function isSymbolName(node) {
                return AstUtil_1.AstUtil.is.type(node, 'AST_SymbolRef') && node.name === name;
            }
            AstUtil_1.AstUtil.each(x, isSymbolName, function (node) {
                var chain = AstUtil_1.AstUtil.getPropertyChain(node, this.stack);
                if (chain) {
                    references.push(chain);
                }
            });
        });
        return references;
    }
    /**
     *	aim to find all **.exports = X
     */
    _getPropertySetter(name, Fn) {
        var result = null;
        Fn.body.forEach(function (x) {
            function isPropertyName(node) {
                AstUtil_1.AstUtil.is.type(node, 'AST_Assign') && node.left.property === name;
            }
            AstUtil_1.AstUtil.each(x, isPropertyName, function (node) {
                var arr = ['include', 'module', 'exports'];
                if (arr.indexOf(node.start.value) > -1) {
                    result = node;
                }
            });
        });
        return result;
    }
}
exports.IncludeJsParser = IncludeJsParser;
;
var IncludeJsMappings = [
    new ResourcePropMapping_1.ResourcePropMapping({
        asModules: (arr) => arr.indexOf('mask') > -1
    }, {
        asModules: (arr) => {
            var i = arr.indexOf('mask');
            arr[i] = 'includejs';
            return arr;
        }
    }),
    new ResourcePropMapping_1.ResourcePropMapping({
        asModules: (arr) => arr.indexOf('amd') > -1
    }, {
        asModules: (arr) => {
            var i = arr.indexOf('amd');
            arr[i] = 'includejs';
            return arr;
        }
    }),
    new ResourcePropMapping_1.ResourcePropMapping({
        type: 'mask'
    }, {
        type: 'load'
    })
];
//# sourceMappingURL=IncludeJsParser.js.map
//# sourceMappingURL=IncludeJsParser.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_include_js_IncludeJsParser === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_include_js_IncludeJsParser) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_include_js_IncludeJsParser, module.exports);
    } else {
        _src_handlers_script_include_js_IncludeJsParser = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_include_js_IncludeJsBuilder;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_include_js_IncludeJsBuilder != null ? _src_handlers_script_include_js_IncludeJsBuilder : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncludeJsBuilder = void 0;
const arr_1 = _src_utils_arr;
const Include_1 = _src_class_Include;
const res_1 = _src_utils_res;
const BaseScriptBuilder_1 = _src_handlers_script_base_BaseScriptBuilder;
class IncludeJsBuilder extends BaseScriptBuilder_1.BaseScriptBuilder {
    wrapScriptlessModule(otherOutputItems) {
        var allResources = (0, arr_1.arr_flattern)(otherOutputItems.map(x => x.resources));
        var jsResources = allResources.filter(x => this.accepts(x));
        var cssResources = allResources.filter(x => x.type === 'css');
        var loadResources = allResources.filter(x => x.type === 'load');
        var jsRegister = this._serializeRegister(jsResources, 'js');
        var cssRegister = this._serializeRegister(cssResources, 'css');
        var loadRegister = this._serializeRegister(loadResources, 'load');
        return `
            ${jsRegister}
            ${cssRegister}
            ${loadRegister}
        `;
    }
    isMainBuilder(solution) {
        const KEY = 'includejs';
        const packageInfo = solution.opts.package;
        return packageInfo.module === KEY || packageInfo.moduleName === KEY;
    }
    wrapModule(resource, outputItem, otherOutputItems) {
        var opts = this.solution.opts;
        var page = (0, res_1.res_getPage)(resource, opts);
        var iteration = this.solution.iteration;
        if (iteration.includejs == null) {
            iteration.includejs = {};
        }
        if (iteration.includejs[page] == null) {
            iteration.includejs[page] = {
                addHeading: true,
                hasHeading: false,
                lastItem: null
            };
        }
        var builderOpts = iteration.includejs[page];
        var body = '';
        if (builderOpts.hasHeading === false && builderOpts.addHeading === true) {
            builderOpts.hasHeading = true;
            body = this._createHeading(builderOpts, resource, outputItem, otherOutputItems);
        }
        let content = resource.content;
        let url = resource.toTargetUrl(this.solution);
        let aliases = resource.aliases == null ? 'null' : '[' + resource.aliases.map(x => `'${x}'`).join(',') + ']';
        body += `include.setCurrent({ url: '${url}', aliases: ${aliases} });\n`;
        body += content;
        body += `\ninclude.getResourceById('${url}', 'js').readystatechanged(3);`;
        if (builderOpts.hasHeading && builderOpts.lastItem === resource) {
            body += `\ninclude.resumeStack();`;
        }
        return body;
    }
    accepts(resource) {
        if (resource.type !== 'js') {
            return false;
        }
        const module = resource.getModule();
        return module === 'includejs';
    }
    _createHeading(builderOpts, resource, outputItem, otherOutputItems) {
        var outputItems = [outputItem, ...otherOutputItems];
        var allResources = (0, arr_1.arr_flattern)(outputItems.map(x => x.resources));
        var jsResources = allResources.filter(x => this.accepts(x));
        var cssResources = allResources.filter(x => x.type === 'css');
        var loadResources = allResources.filter(x => x.type === 'load');
        builderOpts.lastItem = jsResources[jsResources.length - 1];
        var jsRegister = this._serializeRegister(jsResources, 'js');
        var cssRegister = this._serializeRegister(cssResources, 'css');
        var loadRegister = this._serializeRegister(loadResources, 'load');
        var version = this._serializeVersion();
        var config = this._serializeConfig();
        var heading = `
            ${version}
            ${config}
            include.pauseStack();
            ${jsRegister}
            ${cssRegister}
            ${loadRegister}
        `;
        return heading;
    }
    _serializeVersion() {
        var v = this.solution.opts.version;
        if (!v)
            return '';
        return `include.cfg('version', '${v}');`;
    }
    _serializeConfig() {
        var opts = Include_1.Include.getConfig();
        var json = JSON.stringify(opts);
        if (json === '{}')
            return '';
        return `include.cfg(${json});`;
    }
    _serializeRegister(resources, type) {
        var paths = resources
            .filter(x => x.type === type)
            .map(x => {
            return {
                type: type,
                url: x.toTargetUrl(this.solution)
            };
        });
        if (paths.length === 0) {
            return '';
        }
        var json = JSON.stringify({
            [type]: paths
        });
        return `
            include.register(${json});
        `;
    }
}
exports.IncludeJsBuilder = IncludeJsBuilder;
;
//# sourceMappingURL=IncludeJsBuilder.js.map
//# sourceMappingURL=IncludeJsBuilder.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_include_js_IncludeJsBuilder === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_include_js_IncludeJsBuilder) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_include_js_IncludeJsBuilder, module.exports);
    } else {
        _src_handlers_script_include_js_IncludeJsBuilder = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_include_js_IncludeJsRewriter;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_include_js_IncludeJsRewriter != null ? _src_handlers_script_include_js_IncludeJsRewriter : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncludeJsRewriter = void 0;
const BaseRewriter_1 = _src_handlers_base_BaseRewriter;
class IncludeJsRewriter extends BaseRewriter_1.BaseRewriter {
    rewritePartial(content, ownerResource) {
    }
    rewriteResource(resource) {
        if (resource.getModule() === 'global' && resource && resource.meta && resource.meta.includejs && resource.meta.includejs.hasIncludes) {
            resource.asModules = ['includejs'];
        }
    }
    accepts(type) {
        return type === 'js';
    }
}
exports.IncludeJsRewriter = IncludeJsRewriter;
;
//# sourceMappingURL=IncludeJsRewriter.js.map
//# sourceMappingURL=IncludeJsRewriter.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_include_js_IncludeJsRewriter === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_include_js_IncludeJsRewriter) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_include_js_IncludeJsRewriter, module.exports);
    } else {
        _src_handlers_script_include_js_IncludeJsRewriter = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_include_js_IncludeJsHandler;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_include_js_IncludeJsHandler != null ? _src_handlers_script_include_js_IncludeJsHandler : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncludeJsHandler = void 0;
const Templates_1 = _src_handlers_script_common_js_templates_Templates;
const Include_1 = _src_class_Include;
const IncludeJsParser_1 = _src_handlers_script_include_js_IncludeJsParser;
const IncludeJsBuilder_1 = _src_handlers_script_include_js_IncludeJsBuilder;
const BaseHandler_1 = _src_handlers_base_BaseHandler;
const IncludeJsRewriter_1 = _src_handlers_script_include_js_IncludeJsRewriter;
class IncludeJsHandler extends BaseHandler_1.BaseHandler {
    constructor(solution) {
        super(solution);
        // if (this.solution.opts.package.module === 'includejs') {
        // 	this.registerMappings_();
        // }
    }
    accepts(resource) {
        if (resource.type !== 'js') {
            return false;
        }
        var module = resource.getModule();
        if (module == null || module === 'root')
            module = this.solution.opts.package.module;
        return module === 'includejs';
    }
    rewriteRoot(root, dependencies) {
        dependencies.forEach(x => x.embed = true);
        var body = dependencies
            .map(x => x.content)
            .concat([root.content])
            .join('\n');
        body = Templates_1.Templates.RootModule.replace('%BUNDLE%', () => body);
        root.content = body;
    }
    resolvePath(includeData, parent) {
        return Include_1.Include
            .PathResolver
            .resolveBasic(includeData.url, includeData.type, parent);
    }
}
exports.IncludeJsHandler = IncludeJsHandler;
IncludeJsHandler.Parser = IncludeJsParser_1.IncludeJsParser;
IncludeJsHandler.Rewriter = IncludeJsRewriter_1.IncludeJsRewriter;
IncludeJsHandler.Builder = IncludeJsBuilder_1.IncludeJsBuilder;
IncludeJsHandler.PathResolver = null;
;
//# sourceMappingURL=IncludeJsHandler.js.map
//# sourceMappingURL=IncludeJsHandler.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_include_js_IncludeJsHandler === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_include_js_IncludeJsHandler) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_include_js_IncludeJsHandler, module.exports);
    } else {
        _src_handlers_script_include_js_IncludeJsHandler = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_import_js_utils;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_import_js_utils != null ? _src_handlers_script_import_js_utils : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.u_asString = exports.u_readFile = exports.u_getFilesFromPath = exports.u_makeIndent = exports.u_getIndent = exports.u_getNewLine = void 0;
function u_getNewLine(str, io) {
    var match = /(\r\n)|(\r)|(\n)/.exec(str);
    return (match && match[0]) || io.env.newLine;
}
exports.u_getNewLine = u_getNewLine;
;
function u_getIndent(str) {
    var match = /^[ \t]+/.exec(str);
    return match && match[0] || '';
}
exports.u_getIndent = u_getIndent;
;
function u_makeIndent(str, indent, io) {
    if (!indent || !str)
        return str;
    let newline = u_getNewLine(str, io);
    return str
        .split(newline)
        .map(line => indent + line)
        .join(newline);
}
exports.u_makeIndent = u_makeIndent;
;
function u_getFilesFromPath(path, io) {
    var file = new io.File(path);
    if (file.exists() === false) {
        console.error('File not found', file.uri.toLocalFile());
        return [];
    }
    return [file];
}
exports.u_getFilesFromPath = u_getFilesFromPath;
;
function u_readFile(io, file, indent, insertFileName) {
    var content = file.read().toString();
    var newline = u_getNewLine(content, io);
    if (indent) {
        content = content
            .split(newline)
            .map(line => indent + line)
            .join(newline);
    }
    if (insertFileName) {
        content = indent
            + '// source '
            + file.uri.file
            + newline
            + content;
    }
    return content;
}
exports.u_readFile = u_readFile;
;
function u_asString(str) {
    str = str
        .replace(/[\n\r]/g, '\\n')
        .replace(/"/g, '\\"');
    return `"${str}"`;
}
exports.u_asString = u_asString;
;
//# sourceMappingURL=utils.js.map
//# sourceMappingURL=utils.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_import_js_utils === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_import_js_utils) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_import_js_utils, module.exports);
    } else {
        _src_handlers_script_import_js_utils = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_import_js_Dictionary;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_import_js_Dictionary != null ? _src_handlers_script_import_js_Dictionary : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dictionary = void 0;
class Dictionary {
    constructor() {
        this.hash = {};
        this.arr = [];
    }
    add(...arr) {
        for (let i = 0; i < arr.length; i++) {
            let x = arr[i];
            if (this.hash[x.id] != null) {
                continue;
            }
            this.hash[x.id] = x;
            this.arr.push(x);
        }
    }
    insert(x, i) {
        if (this.hash[x.id] != null) {
            this.remove(x);
        }
        this.hash[x.id] = x;
        this.arr.splice(i, 0, x);
    }
    has(x) {
        return this.hash[x.id] != null;
    }
    indexOf(x) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].id === x.id) {
                return i;
            }
        }
        return -1;
    }
    remove(x) {
        delete this.hash[x.id];
        let i = this.arr.findIndex(module => module.id === x.id);
        this.arr.splice(i, 1);
    }
    removeByFn(fn) {
        let handled = new Dictionary();
        while (true) {
            let i = -1, length = this.arr.length;
            while (++i < length) {
                let x = this.arr[i];
                if (handled.has(x)) {
                    continue;
                }
                handled.add(x);
                if (fn(x)) {
                    this.arr.splice(i, 1);
                    delete this.hash[x.id];
                }
                break;
            }
            if (i === length) {
                break;
            }
        }
    }
    forEach(fn) {
        let handled = new Dictionary();
        while (true) {
            let i = -1, length = this.arr.length;
            while (++i < length) {
                let x = this.arr[i];
                if (handled.has(x)) {
                    continue;
                }
                handled.add(x);
                fn(x, i);
                break;
            }
            if (i === length) {
                break;
            }
        }
    }
}
exports.Dictionary = Dictionary;
//# sourceMappingURL=Dictionary.js.map
//# sourceMappingURL=Dictionary.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_import_js_Dictionary === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_import_js_Dictionary) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_import_js_Dictionary, module.exports);
    } else {
        _src_handlers_script_import_js_Dictionary = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_import_js_String;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_import_js_String != null ? _src_handlers_script_import_js_String : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.String = void 0;
var String;
(function (String) {
    function replace(str, i, length, ins = '') {
        return str.substring(0, i) + ins + str.substring(i + length);
    }
    String.replace = replace;
})(String = exports.String || (exports.String = {}));
//# sourceMappingURL=String.js.map
//# sourceMappingURL=String.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_import_js_String === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_import_js_String) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_import_js_String, module.exports);
    } else {
        _src_handlers_script_import_js_String = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_import_js_ModuleFile;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_import_js_ModuleFile != null ? _src_handlers_script_import_js_ModuleFile : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleFile = exports.IImporterOptions = void 0;
const io = require("atma-io");
const utils_1 = _src_handlers_script_import_js_utils;
const Dictionary_1 = _src_handlers_script_import_js_Dictionary;
const String_1 = _src_handlers_script_import_js_String;
class IImporterOptions {
    constructor() {
        this.removeUnusedExports = true;
        this.wrapper = 'iif';
        this.lazy = null;
    }
}
exports.IImporterOptions = IImporterOptions;
class ModuleFile {
    constructor(content, file) {
        this.content = content;
        this.file = file;
        this.outer = new Dictionary_1.Dictionary();
        this.scoped = new Dictionary_1.Dictionary();
        this.imports = [];
        this.exports = [];
        this.scopedVars = [];
        this.id = file.uri.toLocalFile();
        this.path = file.uri.toRelativeString(io.env.currentDir);
    }
    hasDeep(x, ignore, hash = new Dictionary_1.Dictionary()) {
        function check(arr) {
            for (let i = 0; i < arr.length; i++) {
                let module = arr[i];
                if (module == ignore || hash.has(module)) {
                    continue;
                }
                hash.add(module);
                let has = module.hasDeep(x, ignore, hash);
                if (has) {
                    return true;
                }
            }
            return false;
        }
        if (this.id === x.id) {
            return true;
        }
        return check(this.outer.arr) || check(this.scoped.arr);
    }
    getAllModules() {
        let dict = new Dictionary_1.Dictionary();
        function add(module) {
            if (dict.has(module)) {
                return;
            }
            dict.add(module);
            module.outer.forEach(add);
            module.scoped.forEach(add);
        }
        add(this);
        return dict.arr;
    }
    static getAllImports(modules) {
        let arr = [];
        modules.filter(x => x.imports != null).forEach(x => arr.push(...x.imports));
        return arr;
        // function read (module: ModuleFile, stack: ModuleFile[] = []): ImportNode[] {
        //     if (stack.includes(module) || module.imports == null) {
        //         return [];
        //     }
        //     stack.push(module);
        //     let arr = [...module.imports];
        //     module.imports.forEach(x => arr.push(...read(x.module, stack)));
        //     return arr;
        // }
        // return read(this);
    }
    toScript(parents = [], options, indent = '') {
        let newLine = (0, utils_1.u_getNewLine)(this.content, io);
        let outerContent = this
            .outer
            .arr
            .map(x => x.toScript([...parents, this], options))
            .map(x => x.replace(/[\s]*$/, ''))
            .join(newLine);
        let scopedContent = this
            .scoped
            .arr
            .map(x => x.toScript([...parents, this], options))
            .map(x => x.replace(/[\s]*$/, ''))
            .join(newLine);
        let scopedRefs = this
            .scopedVars
            .filter(x => !options.removeUnusedExports || x.dependents.length > 0)
            .map(x => `    ${x.ref}`)
            .join(`,${newLine}`);
        if (scopedRefs) {
            scopedRefs = String_1.String.replace(scopedRefs, 0, 3, 'var');
            scopedRefs += ';';
            scopedContent = scopedRefs + newLine + scopedContent;
        }
        let content = this.content;
        // normalize exports
        this.exports.reverse().forEach(x => {
            if (options.removeUnusedExports && x.dependents.length === 0) {
                let str = content.substring(x.position, x.position + x.length);
                str = str.replace(/\s*export\s*/g, '');
                content = String_1.String.replace(content, x.position, x.length, str);
                return;
            }
            switch (x.type) {
                case 'ref':
                    content = String_1.String.replace(content, x.position, x.length, x.ref);
                    break;
                case 'function':
                    content = String_1.String.replace(content, x.position, x.length, `${x.ref} = function `);
                    break;
                case 'named':
                    content = String_1.String.replace(content, x.position, x.length, '');
                    break;
                case 'scoped':
                    if (x.length > 0) {
                        content = String_1.String.replace(content, x.position, x.length, '');
                    }
                    break;
            }
        });
        // remove imports
        this.imports.reverse().forEach(x => {
            content = String_1.String.replace(content, x.position, x.length, '');
        });
        // create var declaration
        let externalRefs = '';
        if (this.exports.length > 0) {
            this
                .exports
                .filter(x => {
                return x.dependents.length > 0 || options.removeUnusedExports === false;
            })
                .forEach(x => {
                /** Remove local scoped var declaration and make it global scoped */
                if (x.type === 'scoped') {
                    let rgx = new RegExp(`\\b(var|let|const|function)\\s+${x.ref}`);
                    content = content.replace(rgx, x.ref);
                }
                return x;
            });
            externalRefs = this
                .exports
                .reverse()
                .filter(x => {
                if (x.builder.movedToOuter) {
                    return false;
                }
                if (options.removeUnusedExports === false) {
                    return true;
                }
                if (x.dependents.length === 0) {
                    console.warn(`Module ${this.id} has unused export ${x.ref}`);
                    return false;
                }
                return true;
            })
                .filter(x => {
                let exportInOuter = parents
                    .some(p => {
                    let parentsExport = p.exports.find(e => e.hasExport(x.ref));
                    if (parentsExport == null) {
                        return false;
                    }
                    if (options.removeUnusedExports && parentsExport.dependents.length === 0) {
                        return false;
                    }
                    return true;
                });
                return exportInOuter === false;
            })
                .map(x => `    ${x.ref}`)
                .join(`,${newLine}`);
            if (externalRefs.length > 0) {
                externalRefs = String_1.String.replace(externalRefs, 0, 3, 'var');
                externalRefs += ';';
            }
        }
        const SPACE = '\t';
        let indentScopedContent = `${(0, utils_1.u_makeIndent)(scopedContent || '', SPACE, io)}`;
        let indentContent = `${(0, utils_1.u_makeIndent)(content, SPACE, io)}`;
        let scopeLess = parents.length === 0 && options.wrapper !== 'iif';
        content = [
            `${outerContent}` || '',
            `${externalRefs}` || '',
            !scopeLess && (indentScopedContent || indentContent) ? `(function(){` : '',
            indentScopedContent,
            indentContent,
            !scopeLess && (indentScopedContent || indentContent) ? `}());` : ''
        ]
            .filter(x => !!x)
            .join(newLine);
        return (0, utils_1.u_makeIndent)(content, indent, io);
    }
    toImportsJson() {
        function toJSON(module) {
            var json = {
                id: module.id,
                imports: null
            };
            if (module.imports) {
                json.imports = module.imports.map(x => toJSON(x.module));
            }
            return json;
        }
        return toJSON(this);
    }
    toModulesJson() {
        function toJSON(module) {
            let json = {
                id: module.id,
                outer: module.outer.arr.map(x => toJSON(x)),
                scoped: module.scoped.arr.map(x => toJSON(x))
            };
            if (json.outer.length === 0) {
                delete json.outer;
            }
            if (json.scoped.length === 0) {
                delete json.scoped;
            }
            return json;
        }
        return toJSON(this);
    }
}
exports.ModuleFile = ModuleFile;
//# sourceMappingURL=ModuleFile.js.map
//# sourceMappingURL=ModuleFile.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_import_js_ModuleFile === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_import_js_ModuleFile) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_import_js_ModuleFile, module.exports);
    } else {
        _src_handlers_script_import_js_ModuleFile = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_import_js_Parser;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_import_js_Parser != null ? _src_handlers_script_import_js_Parser : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const ModuleFile_1 = _src_handlers_script_import_js_ModuleFile;
const ResourceInfo_1 = _src_class_ResourceInfo;
let Rgx = {
    Imports: {
        full: {
            rgx: /^[ \t]*import\s*['"]([^'"]+)['"][\t ;]*[\r\n]{0,2}/gm,
            map(match) {
                let $import = new ResourceInfo_1.ImportNode();
                $import.position = match.index;
                $import.length = match[0].length;
                $import.type = 'full';
                $import.path = match[1];
                return $import;
            }
        },
        refs: {
            rgx: /^[ \t]*import\s*\{([^}]+)}\s*from\s*['"]([^'"]+)['"][\t ;]*[\r\n]{0,2}/gm,
            map(match) {
                let $import = new ResourceInfo_1.ImportNode();
                $import.position = match.index;
                $import.length = match[0].length;
                $import.type = 'refs';
                $import.path = match[2];
                $import.refs = match[1].split(',').map(x => x.trim());
                return $import;
            }
        },
        exportAll: {
            rgx: /^[ \t]*export\s+\*\s+from\s*['"]([^'"]+)['"][\t ;]*[\r\n]{0,2}/gm,
            map(match) {
                let $import = new ResourceInfo_1.ImportNode();
                $import.position = match.index;
                $import.length = match[0].length;
                $import.type = 'exportAll';
                $import.path = match[1];
                $import.exportAll = true;
                return $import;
            }
        },
        exportRefs: {
            rgx: /^[ \t]*export\s*\{([^}]+)}\s*from\s*['"]([^'"]+)['"][\t ;]*[\r\n]{0,2}/gm,
            map(match) {
                let $import = new ResourceInfo_1.ImportNode();
                $import.position = match.index;
                $import.length = match[0].length;
                $import.type = 'exportRefs';
                $import.path = match[2];
                $import.refs = match[1].split(',').map(x => x.trim());
                $import.exportRefs = true;
                return $import;
            }
        }
    },
    Exports: {
        ref: {
            rgx: /^[ \t]*export\s*(const|let|var)\s+([\w\d_$]+)(?=\s*[^\w\d_$;])/gm,
            map(match) {
                let $export = new ResourceInfo_1.ExportNode();
                $export.position = match.index;
                $export.length = match[0].length;
                $export.type = 'ref';
                $export.ref = match[2];
                return $export;
            }
        },
        named: {
            rgx: /^[ \t]*export\s*(const|let|var)\s+([\w\d_$]+)(?=\s*[;])/gm,
            map(match) {
                let $export = new ResourceInfo_1.ExportNode();
                $export.position = match.index;
                $export.length = match[0].length;
                $export.type = 'named';
                $export.ref = match[2];
                return $export;
            }
        },
        scoped: {
            rgx: /^[ \t]*export\s*\{([^}]+)}\s*;?(?!\s*from)/gm,
            map(match) {
                let refs = match[1].split(',').map(x => x.trim());
                let $export = new ResourceInfo_1.ExportNode();
                $export.position = match.index;
                $export.length = match[0].length;
                $export.type = 'scoped';
                $export.ref = refs[0];
                let other = refs.slice(1).map(ref => {
                    let $export = new ResourceInfo_1.ExportNode();
                    $export.position = match.index;
                    $export.length = 0;
                    $export.type = 'scoped';
                    $export.ref = ref;
                    return $export;
                });
                return [$export, ...other];
            }
        },
        function: {
            rgx: /^[ \t]*export\s*function\s+([\w\d_$]+)/gm,
            map(match) {
                let $export = new ResourceInfo_1.ExportNode();
                $export.position = match.index;
                $export.length = match[0].length;
                $export.type = 'function';
                $export.ref = match[1];
                return $export;
            }
        }
    }
};
class Parser {
    static supports(content) {
        for (let type in Rgx) {
            for (let key in Rgx[type]) {
                let rgx = Rgx[type][key].rgx;
                rgx.lastIndex = 0;
                if (rgx.test(content)) {
                    return true;
                }
            }
        }
        return false;
    }
    static parse(content, file) {
        let module = new ModuleFile_1.ModuleFile(content, file);
        if (Parser.supports(content) === false) {
            return module;
        }
        for (let key in Rgx.Imports) {
            let x = Rgx.Imports[key];
            x.rgx.lastIndex = 0;
            for (let match = x.rgx.exec(content); match != null; match = x.rgx.exec(content)) {
                let result = x.map(match, content);
                if (Array.isArray(result)) {
                    module.imports.push(...result);
                }
                else {
                    module.imports.push(result);
                }
            }
        }
        for (let key in Rgx.Exports) {
            let x = Rgx.Exports[key];
            x.rgx.lastIndex = 0;
            for (let match = x.rgx.exec(content); match != null; match = x.rgx.exec(content)) {
                let result = x.map(match, content);
                if (Array.isArray(result)) {
                    module.exports.push(...result);
                }
                else {
                    module.exports.push(result);
                }
            }
        }
        module.imports.forEach(m => m.parent = module);
        module.imports.filter(x => x.type === 'exportRefs').forEach(imp => {
            imp.refs.forEach(ref => {
                let exp = new ResourceInfo_1.ExportNode();
                exp.position = 0;
                exp.length = 0;
                exp.ref = ref;
                module.exports.push(exp);
            });
        });
        module.imports.sort((a, b) => a.position < b.position ? -1 : 1);
        module.exports.sort((a, b) => a.position < b.position ? -1 : 1);
        return module;
    }
}
exports.Parser = Parser;
//# sourceMappingURL=Parser.js.map
//# sourceMappingURL=Parser.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_import_js_Parser === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_import_js_Parser) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_import_js_Parser, module.exports);
    } else {
        _src_handlers_script_import_js_Parser = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_import_js_ImportJsParser;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_import_js_ImportJsParser != null ? _src_handlers_script_import_js_ImportJsParser : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportJsParser = void 0;
const BaseParser_1 = _src_handlers_base_BaseParser;
const Parser_1 = _src_handlers_script_import_js_Parser;
const io = require("atma-io");
const ResourceInfo_1 = _src_class_ResourceInfo;
class ImportJsParser extends BaseParser_1.BaseParser {
    constructor() {
        super(...arguments);
        /** @TODO: set to false and handle ast in ScriptParser */
        this.asText = true;
    }
    getDependencies(content, ownerResource) {
        if (Parser_1.Parser.supports(content) === false) {
            return null;
        }
        let module = Parser_1.Parser.parse(content, new io.File(ownerResource.filename));
        let deps = module.imports.map(imp => {
            let res = new ResourceInfo_1.ResourceInfo;
            res.url = imp.path;
            res.pos = imp.position;
            res.length = imp.length;
            res.module = 'import';
            res.import = imp;
            return res;
        });
        return {
            dependencies: deps,
            meta: {
                import: {
                    imports: module.imports,
                    exports: module.exports
                }
            }
        };
    }
}
exports.ImportJsParser = ImportJsParser;
;
//# sourceMappingURL=ImportJsParser.js.map
//# sourceMappingURL=ImportJsParser.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_import_js_ImportJsParser === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_import_js_ImportJsParser) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_import_js_ImportJsParser, module.exports);
    } else {
        _src_handlers_script_import_js_ImportJsParser = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_import_js_ImportJsRewriter;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_import_js_ImportJsRewriter != null ? _src_handlers_script_import_js_ImportJsRewriter : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportJsRewriter = void 0;
const BaseRewriter_1 = _src_handlers_base_BaseRewriter;
class ImportJsRewriter extends BaseRewriter_1.BaseRewriter {
    rewritePartial(content, ownerResource) {
    }
    rewriteResource(resource) {
    }
    accepts(type) {
        return type === 'mask';
    }
}
exports.ImportJsRewriter = ImportJsRewriter;
;
//# sourceMappingURL=ImportJsRewriter.js.map
//# sourceMappingURL=ImportJsRewriter.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_import_js_ImportJsRewriter === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_import_js_ImportJsRewriter) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_import_js_ImportJsRewriter, module.exports);
    } else {
        _src_handlers_script_import_js_ImportJsRewriter = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_ModuleTree;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_ModuleTree != null ? _src_handlers_script_ModuleTree : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warnTransModuleChildDependencies = void 0;
const atma_utils_1 = require("atma-utils");
const global_1 = _src_global;
const Dictionary_1 = _src_handlers_script_import_js_Dictionary;
function warnTransModuleChildDependencies(root) {
    let modules = {};
    root
        .getAllModules()
        .filter(x => /exports\.\w+$/.test(x.path))
        .map(x => x.path)
        .forEach(path => {
        let uri = new atma_utils_1.class_Uri(path);
        let local = uri.toLocalFile();
        modules[local] = local;
    });
    let handled = new Dictionary_1.Dictionary();
    check(root);
    function check(m) {
        if (handled.has(m)) {
            return;
        }
        handled.add(m);
        m.imports && m.imports.forEach(imp => {
            checkSingle(m, imp);
            if (imp.isCyclic !== true) {
                check(imp.module);
            }
            ;
        });
    }
    function checkSingle(m, imp) {
        if (secondIsSubPath(m.path, imp.module.path)) {
            return;
        }
        let exports = secondHasCommonExports(m.path, imp.module.path);
        if (exports == null || exports.isSubPath) {
            return;
        }
        console.warn(`Transmodule import ${imp.module.path} in ${m.path}. Should import ${exports.exportPath} `);
    }
    function secondIsSubPath(a, b) {
        let uriA = new atma_utils_1.class_Uri(a);
        let uriB = new atma_utils_1.class_Uri(b);
        a = uriA.toLocalDir();
        b = uriB.toLocalFile();
        return b.includes(a);
    }
    function secondHasCommonExports(a, b) {
        const FILE = 'exports.ts';
        if (b.endsWith(FILE)) {
            return null;
        }
        let uriA = new atma_utils_1.class_Uri(a);
        let uriB = new atma_utils_1.class_Uri(b);
        let uriExports = null;
        let dir = new atma_utils_1.class_Uri(uriB.toLocalDir());
        let prev = dir.toLocalDir();
        while (uriExports == null) {
            let exp = dir.combine(FILE);
            if (global_1.io.File.exists(exp)) {
                uriExports = exp;
                break;
            }
            dir = dir.cdUp();
            if (dir.toLocalDir() === prev) {
                break;
            }
            prev = dir.toLocalDir();
        }
        if (uriExports == null) {
            return null;
        }
        let local = uriExports.toLocalFile();
        if (local in modules === false) {
            return null;
        }
        return {
            exportPath: local,
            isSubPath: secondIsSubPath(local, a)
        };
    }
}
exports.warnTransModuleChildDependencies = warnTransModuleChildDependencies;
//# sourceMappingURL=ModuleTree.js.map
//# sourceMappingURL=ModuleTree.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_ModuleTree === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_ModuleTree) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_ModuleTree, module.exports);
    } else {
        _src_handlers_script_ModuleTree = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_import_js_Builder;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_import_js_Builder != null ? _src_handlers_script_import_js_Builder : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveImportsToScoped = exports.Builder = void 0;
const io = require("atma-io");
const ModuleFile_1 = _src_handlers_script_import_js_ModuleFile;
const Dictionary_1 = _src_handlers_script_import_js_Dictionary;
const ModuleTree_1 = _src_handlers_script_ModuleTree;
let cache = {};
var Builder;
(function (Builder) {
    function clearCache() {
        cache = {};
    }
    Builder.clearCache = clearCache;
    function getModuleFromResource(resource) {
        if (resource.content == null) {
            throw new Error(`Content is no loaded: ${resource.filename}`);
        }
        let file = new io.File(resource.filename);
        let module = new ModuleFile_1.ModuleFile(resource.content, file);
        if (cache[module.id]) {
            return cache[module.id];
        }
        cache[module.id] = module;
        if (resource.dependencies) {
            let scoped = resource.dependencies.map(dep => {
                //let res = new Resource(dep, resource, resource.solution);
                return Builder.getModuleFromResource(dep.resource);
            });
            let scopedDict = new Dictionary_1.Dictionary();
            scopedDict.add(...scoped);
            module.scoped = scopedDict;
            module.imports = resource
                .dependencies
                .filter(x => x.import != null)
                .map(dep => {
                let imp = dep.import;
                imp.module = Builder.getModuleFromResource(dep.resource);
                return imp;
            });
        }
        if (resource.meta.import && resource.meta.import.exports) {
            module.exports = resource.meta.import.exports;
        }
        return module;
    }
    Builder.getModuleFromResource = getModuleFromResource;
    function build(root, options = new ModuleFile_1.IImporterOptions) {
        markLazyImports(root, options);
        markCyclicImports(root);
        (0, ModuleTree_1.warnTransModuleChildDependencies)(root);
        moveImportsToScoped(root);
        removeNestedScopedModules(root);
        moveToCommonParent(root);
        moveExportAllImportsToOuter(root);
        distinctOuter(root);
        markUsedExports(root);
        distinct(root);
        return root.toScript([], options);
    }
    Builder.build = build;
})(Builder = exports.Builder || (exports.Builder = {}));
function moveImportsToScoped(module, handled = new Dictionary_1.Dictionary()) {
    module
        .imports
        .forEach(x => {
        if (x.isCyclic === true || handled.has(x.module)) {
            return;
        }
        handled.add(x.module);
        moveImportsToScoped(x.module, handled);
        module.scoped.add(x.module);
    });
}
exports.moveImportsToScoped = moveImportsToScoped;
function removeNestedScopedModules(module, parent = null, parents = [], handled = new Dictionary_1.Dictionary()) {
    if (handled.has(module)) {
        return;
    }
    handled.add(module);
    module.scoped.removeByFn(x => {
        let inOuter = parents.some(p => p.module.outer.has(x));
        if (inOuter) {
            return true;
        }
        let parentsScope = parents.find(p => p.module.scoped.has(x));
        if (parentsScope != null) {
            let imp = module.imports.find(x => x.module.id === x.module.id);
            if (imp && imp.isLazy) {
                return true;
            }
            let ancestor = parentsScope.module;
            let foundIndex = ancestor.scoped.indexOf(x);
            let selfIndex = ancestor.scoped.indexOf(parentsScope.child);
            if (foundIndex === -1 || selfIndex === -1) {
                throw new Error(`0_o. Parents conflict. Self: ${selfIndex}. Found: ${foundIndex}`);
            }
            if (foundIndex > selfIndex) {
                let x = ancestor.scoped.arr[foundIndex];
                ancestor.scoped.arr.splice(foundIndex, 1);
                ancestor.scoped.arr.splice(selfIndex, 0, x);
            }
            return true;
        }
    });
    module.scoped.forEach(x => removeNestedScopedModules(x, module, [...parents, { child: x, module: module }], handled));
}
function moveToCommonParent(module, parent = null, parents = [], handled = new Dictionary_1.Dictionary()) {
    if (handled.has(module)) {
        return;
    }
    handled.add(module);
    module.scoped.forEach(x => {
        let topCommonParent;
        for (let i = parents.length - 1; i > -1; i--) {
            let item = parents[i];
            let p = item.module;
            let hasDeep = p.hasDeep(x, item.child);
            if (hasDeep) {
                topCommonParent = p;
            }
        }
        if (topCommonParent) {
            x.exports.forEach(exp => {
                let clone = exp.clone();
                exp.builder.movedToOuter = true;
                clone.position = 0;
                clone.length = 0;
                topCommonParent.scopedVars.push(clone);
            });
            // for (let i = 0; i < topCommonParent.outer.arr.length; i++) {
            //     let child = topCommonParent.outer.arr[i];
            //     if (child.hasDeep(x)) {
            //         topCommonParent.outer.insert(x, i);
            //         return true;
            //     }
            // }
            // for (let i = 0; i < topCommonParent.scoped.arr.length; i++) {
            //     let child = topCommonParent.scoped.arr[i];
            //     if (child.hasDeep(x)) {
            //         topCommonParent.scoped.insert(x, i);
            //         return true;
            //     }
            // }
            // throw new Error('O_o: Child not found');            
            // return true;
        }
        //return false;
    });
    module.scoped.forEach((x, i) => moveToCommonParent(x, module, [...parents, { child: x, module }], handled));
}
function distinctOuter(module, index = 0, parents = [], handled = new Dictionary_1.Dictionary()) {
    if (handled.has(module)) {
        return;
    }
    handled.add(module);
    module.outer.forEach((x, i) => distinctOuter(x, i, [...parents, { index, module }], handled));
    module.outer.removeByFn(x => {
        return parents.some(p => p.module.outer.has(x));
    });
}
function distinct(module, handled = new Dictionary_1.Dictionary()) {
    if (handled.has(module)) {
        return;
    }
    handled.add(module);
    module.outer.removeByFn(x => {
        if (handled.has(x)) {
            return true;
        }
        distinct(x, handled);
        return false;
    });
    module.scoped.removeByFn(x => {
        if (handled.has(x)) {
            console.log('Remove ', x.id);
            return true;
        }
        distinct(x, handled);
        return false;
    });
}
function moveExportAllImportsToOuter(module, handled = new Dictionary_1.Dictionary()) {
    if (handled.has(module)) {
        return;
    }
    handled.add(module);
    module
        .imports
        .filter(imp => imp.exportAll && module.scoped.has(imp.module) && imp.isCyclic !== true)
        .forEach(imp => {
        module.outer.add(imp.module);
        module.scoped.remove(imp.module);
    });
    module.scoped.forEach(m => {
        moveExportAllImportsToOuter(m, handled);
    });
}
function markUsedExports(module) {
    let modules = module.getAllModules();
    let imports = ModuleFile_1.ModuleFile.getAllImports(modules);
    modules.forEach(module => {
        // Search all imports for module
        imports.filter(x => x.module.id === module.id).forEach($import => {
            if ($import.exportAll || $import.refs == null) {
                module.exports.forEach(exp => {
                    if (exp.dependents.includes(module) === false) {
                        exp.dependents.push(module);
                    }
                });
                return;
            }
            $import.refs.forEach(ref => {
                let exp = module.exports.find(x => x.hasExport(ref));
                if (exp == null) {
                    throw new Error(`Imported reference ${ref} in ${$import.parent.id} is not exported from ${module.id}`);
                }
                if (exp.dependents.includes(module) === false) {
                    exp.dependents.push(module);
                }
            });
        });
    });
}
function markLazyImports(module, options, parentIds = {}, handled = new Dictionary_1.Dictionary()) {
    if (!options || !options.lazy) {
        return;
    }
    if (handled.has(module)) {
        return;
    }
    handled.add(module);
    let hash = { ...parentIds, [module.id]: 1 };
    module.imports.forEach(imp => {
        mark(module, imp);
        markLazyImports(imp.module, options, hash, handled);
    });
    function mark(owner, imp) {
        outer: for (let str in options.lazy) {
            let rgx = new RegExp(str);
            if (rgx.test(owner.id)) {
                let paths = options.lazy[str];
                for (let i = 0; i < paths.length; i++) {
                    let rgxPath = new RegExp(paths[i]);
                    if (rgxPath.test(imp.module.id)) {
                        imp.isCyclic = true;
                        imp.isLazy = true;
                        break outer;
                    }
                }
            }
        }
    }
}
function markCyclicImports(module, parentIds = {}, handled = new Dictionary_1.Dictionary()) {
    if (handled.has(module)) {
        return;
    }
    handled.add(module);
    let hash = { ...parentIds, [module.id]: 1 };
    module.imports.forEach(imp => {
        if (imp.module.id in hash) {
            imp.isCyclic = true;
            return;
        }
        markCyclicImports(imp.module, hash, handled);
    });
}
//# sourceMappingURL=Builder.js.map
//# sourceMappingURL=Builder.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_import_js_Builder === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_import_js_Builder) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_import_js_Builder, module.exports);
    } else {
        _src_handlers_script_import_js_Builder = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_import_js_ImportJsBuilder;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_import_js_ImportJsBuilder != null ? _src_handlers_script_import_js_ImportJsBuilder : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportJsBuilder = void 0;
const BaseScriptBuilder_1 = _src_handlers_script_base_BaseScriptBuilder;
const Builder_1 = _src_handlers_script_import_js_Builder;
const Templates_1 = _src_handlers_script_common_js_templates_Templates;
const ModuleFile_1 = _src_handlers_script_import_js_ModuleFile;
class ImportJsBuilder extends BaseScriptBuilder_1.BaseScriptBuilder {
    buildRoot(outputRoot, outputDependencies) {
        outputDependencies.forEach(x => x.embed = true);
        Builder_1.Builder.clearCache();
        let root = outputRoot.source;
        let module = Builder_1.Builder.getModuleFromResource(root);
        let $package = this.solution.opts.package;
        let options = $package.import || new ModuleFile_1.IImporterOptions;
        options.wrapper = $package.moduleWrapper;
        let body = Builder_1.Builder.build(module, options);
        switch (options.wrapper) {
            case 'custom':
                body = this.wrapWithCustom(body);
                break;
            case 'script':
            case 'iif':
                break;
            default:
                throw new Error(`Unsupported module wrapper "${options.wrapper}" for import`);
        }
        outputRoot.content = body;
    }
    wrapModule(resource, outputItem) {
        return resource.content;
    }
    accepts(resource) {
        if (resource.type !== 'js') {
            return false;
        }
        let module = resource.getModule();
        if (module === 'root' && resource.solution.opts.package.module === 'import') {
            module = 'import';
        }
        return module === 'import';
    }
    wrapWithCustom(body) {
        let opts = this.solution.opts.package;
        let template = Templates_1.Templates.load(opts.moduleWrapperCustomPath);
        return template
            .replace('/**MODULE**/', () => body);
    }
}
exports.ImportJsBuilder = ImportJsBuilder;
;
//# sourceMappingURL=ImportJsBuilder.js.map
//# sourceMappingURL=ImportJsBuilder.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_import_js_ImportJsBuilder === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_import_js_ImportJsBuilder) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_import_js_ImportJsBuilder, module.exports);
    } else {
        _src_handlers_script_import_js_ImportJsBuilder = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_import_js_ImportJsHandler;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_import_js_ImportJsHandler != null ? _src_handlers_script_import_js_ImportJsHandler : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportJsHandler = void 0;
const BaseHandler_1 = _src_handlers_base_BaseHandler;
const ImportJsParser_1 = _src_handlers_script_import_js_ImportJsParser;
const ImportJsRewriter_1 = _src_handlers_script_import_js_ImportJsRewriter;
const ImportJsBuilder_1 = _src_handlers_script_import_js_ImportJsBuilder;
class ImportJsHandler extends BaseHandler_1.BaseHandler {
}
exports.ImportJsHandler = ImportJsHandler;
ImportJsHandler.Parser = ImportJsParser_1.ImportJsParser;
ImportJsHandler.Rewriter = ImportJsRewriter_1.ImportJsRewriter;
ImportJsHandler.Builder = ImportJsBuilder_1.ImportJsBuilder;
ImportJsHandler.PathResolver = null;
;
//# sourceMappingURL=ImportJsHandler.js.map
//# sourceMappingURL=ImportJsHandler.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_import_js_ImportJsHandler === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_import_js_ImportJsHandler) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_import_js_ImportJsHandler, module.exports);
    } else {
        _src_handlers_script_import_js_ImportJsHandler = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_ScriptParser;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_ScriptParser != null ? _src_handlers_script_ScriptParser : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptParser = void 0;
const AstUtil_1 = _src_handlers_script_utils_AstUtil;
const async_1 = _src_utils_async;
const ResourceInfo_1 = _src_class_ResourceInfo;
const arr_1 = _src_utils_arr;
const CommonJsHandler_1 = _src_handlers_script_common_js_CommonJsHandler;
const AmdJsHandler_1 = _src_handlers_script_amd_js_AmdJsHandler;
const IncludeJsHandler_1 = _src_handlers_script_include_js_IncludeJsHandler;
const BaseParser_1 = _src_handlers_base_BaseParser;
const ImportJsHandler_1 = _src_handlers_script_import_js_ImportJsHandler;
class ScriptParser extends BaseParser_1.BaseParser {
    constructor() {
        super(...arguments);
        this.parsers = [
            new CommonJsHandler_1.CommonJsHandler.Parser(this.solution, this.handler),
            new AmdJsHandler_1.AmdJsHandler.Parser(this.solution, this.handler),
            new IncludeJsHandler_1.IncludeJsHandler.Parser(this.solution, this.handler),
            new ImportJsHandler_1.ImportJsHandler.Parser(this.solution, this.handler),
        ];
    }
    getDependencies(content, ownerResource) {
        if (!content) {
            throw new Error(`Content is undefined for ${ownerResource.filename}`);
        }
        let opts = {
            filename: ownerResource.filename
        };
        let asTextDfrs = this
            .parsers
            .filter(x => x.asText === true)
            .map(parser => parser.getDependencies(content, ownerResource));
        let ast;
        try {
            ast = AstUtil_1.AstUtil.parse(content, opts);
        }
        catch (error) {
            if (/^throw\s+(new\s+)?Error/i.test(content)) {
                var error = new Error(content);
                error.filename = ownerResource.filename;
                throw error;
            }
            if (error.filename == null) {
                error.filename = ownerResource.filename;
            }
            return (0, async_1.async_reject)(error);
        }
        let dfrs = this
            .parsers
            .filter(x => x.asText !== true)
            .map(parser => parser.getDependencies(ast, ownerResource));
        dfrs.unshift(...asTextDfrs);
        return (0, async_1.async_whenAll)(dfrs).then(results => {
            let arr = (0, arr_1.arr_flattern)(results);
            return ResourceInfo_1.ResourceInfo.merge(...arr);
        });
    }
    accepts(type) {
        return type === 'js';
    }
}
exports.ScriptParser = ScriptParser;
;
//# sourceMappingURL=ScriptParser.js.map
//# sourceMappingURL=ScriptParser.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_ScriptParser === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_ScriptParser) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_ScriptParser, module.exports);
    } else {
        _src_handlers_script_ScriptParser = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_ScriptRewriter;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_ScriptRewriter != null ? _src_handlers_script_ScriptRewriter : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptRewriter = void 0;
const IncludeJsHandler_1 = _src_handlers_script_include_js_IncludeJsHandler;
const BaseRewriter_1 = _src_handlers_base_BaseRewriter;
class ScriptRewriter extends BaseRewriter_1.BaseRewriter {
    constructor() {
        super(...arguments);
        this.rewriters = [
            new IncludeJsHandler_1.IncludeJsHandler.Rewriter(this.solution, this.handler)
        ];
    }
    rewritePartial(content, ownerResource) {
    }
    rewriteResource(resource) {
        this.rewriters.forEach(rewriter => {
            rewriter.rewriteResource(resource);
        });
    }
    accepts(type) {
        return type === 'js';
    }
}
exports.ScriptRewriter = ScriptRewriter;
;
//# sourceMappingURL=ScriptRewriter.js.map
//# sourceMappingURL=ScriptRewriter.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_ScriptRewriter === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_ScriptRewriter) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_ScriptRewriter, module.exports);
    } else {
        _src_handlers_script_ScriptRewriter = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_global_js_GlobalJsParser;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_global_js_GlobalJsParser != null ? _src_handlers_script_global_js_GlobalJsParser : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalJsParser = void 0;
const BaseParser_1 = _src_handlers_base_BaseParser;
class GlobalJsParser extends BaseParser_1.BaseParser {
    getDependencies(ast, ownerResource) {
        return null;
    }
}
exports.GlobalJsParser = GlobalJsParser;
;
//# sourceMappingURL=GlobalJsParser.js.map
//# sourceMappingURL=GlobalJsParser.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_global_js_GlobalJsParser === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_global_js_GlobalJsParser) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_global_js_GlobalJsParser, module.exports);
    } else {
        _src_handlers_script_global_js_GlobalJsParser = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_global_js_GlobalJsRewriter;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_global_js_GlobalJsRewriter != null ? _src_handlers_script_global_js_GlobalJsRewriter : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalJsRewriter = void 0;
const BaseRewriter_1 = _src_handlers_base_BaseRewriter;
class GlobalJsRewriter extends BaseRewriter_1.BaseRewriter {
    rewritePartial(content, ownerResource) {
    }
    rewriteResource(resource) {
    }
    accepts(type) {
        return type === 'mask';
    }
}
exports.GlobalJsRewriter = GlobalJsRewriter;
;
//# sourceMappingURL=GlobalJsRewriter.js.map
//# sourceMappingURL=GlobalJsRewriter.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_global_js_GlobalJsRewriter === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_global_js_GlobalJsRewriter) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_global_js_GlobalJsRewriter, module.exports);
    } else {
        _src_handlers_script_global_js_GlobalJsRewriter = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_global_js_GlobalJsBuilder;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_global_js_GlobalJsBuilder != null ? _src_handlers_script_global_js_GlobalJsBuilder : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalJsBuilder = void 0;
const BaseScriptBuilder_1 = _src_handlers_script_base_BaseScriptBuilder;
const atma_utils_1 = require("atma-utils");
const path_1 = _src_utils_path;
const ModuleWrapper_1 = _src_handlers_script_common_js_ModuleWrapper;
const Templates_1 = _src_handlers_script_common_js_templates_Templates;
const template_1 = _src_utils_template;
class GlobalJsBuilder extends BaseScriptBuilder_1.BaseScriptBuilder {
    wrapModule(resource, outputItem) {
        let { content, dependencies } = resource;
        let offset = 0;
        dependencies && dependencies.filter(x => x.pos != null && (0, path_1.path_isRelative)(x.url)).forEach(dep => {
            let resUrl = new atma_utils_1.class_Uri(resource.url);
            let resDep = new atma_utils_1.class_Uri(dep.url);
            let url = resUrl.combine(resDep).toLocalFile();
            let start = dep.pos + offset + 1;
            let c = content[start - 1];
            let end = content.indexOf(c, start);
            let oldLength = end - start;
            let newLength = url.length;
            content = content.substring(0, start) + url + content.substring(end);
            offset += newLength - oldLength;
        });
        return content;
    }
    buildRoot(root, outputDependencies) {
        outputDependencies.forEach(x => x.embed = true);
        let content = this.getRootContent(root, outputDependencies);
        let body = outputDependencies
            .map(x => {
            let content = x.content;
            if (x.type === 'css') {
                content = (0, template_1.template_interpolate)(Templates_1.Templates.Style, { body: (0, template_1.template_stringifyContent)(content), url: x.url });
            }
            if (x.type === 'mask') {
                throw new Error('Mask modules are not implemented for global modules');
            }
            return content;
        })
            .concat([content])
            .join('\n');
        var wrapper = new ModuleWrapper_1.ModuleWrapper(this.solution);
        root.content = wrapper.wrap(body);
    }
    getRootContent(root, outputDependencies) {
        return root.content;
    }
    accepts(resource) {
        if (resource.type !== 'js') {
            return false;
        }
        let module = resource.getModule();
        if (module == null || module === 'root') {
            module = this.solution.opts.package.module;
        }
        return module === 'global';
    }
}
exports.GlobalJsBuilder = GlobalJsBuilder;
;
//# sourceMappingURL=GlobalJsBuilder.js.map
//# sourceMappingURL=GlobalJsBuilder.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_global_js_GlobalJsBuilder === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_global_js_GlobalJsBuilder) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_global_js_GlobalJsBuilder, module.exports);
    } else {
        _src_handlers_script_global_js_GlobalJsBuilder = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_global_js_GlobalJsHandler;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_global_js_GlobalJsHandler != null ? _src_handlers_script_global_js_GlobalJsHandler : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalJsHandler = void 0;
const BaseHandler_1 = _src_handlers_base_BaseHandler;
const GlobalJsParser_1 = _src_handlers_script_global_js_GlobalJsParser;
const GlobalJsRewriter_1 = _src_handlers_script_global_js_GlobalJsRewriter;
const GlobalJsBuilder_1 = _src_handlers_script_global_js_GlobalJsBuilder;
class GlobalJsHandler extends BaseHandler_1.BaseHandler {
}
exports.GlobalJsHandler = GlobalJsHandler;
GlobalJsHandler.Parser = GlobalJsParser_1.GlobalJsParser;
GlobalJsHandler.Rewriter = GlobalJsRewriter_1.GlobalJsRewriter;
GlobalJsHandler.Builder = GlobalJsBuilder_1.GlobalJsBuilder;
GlobalJsHandler.PathResolver = null;
;
//# sourceMappingURL=GlobalJsHandler.js.map
//# sourceMappingURL=GlobalJsHandler.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_global_js_GlobalJsHandler === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_global_js_GlobalJsHandler) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_global_js_GlobalJsHandler, module.exports);
    } else {
        _src_handlers_script_global_js_GlobalJsHandler = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_mask_js_MaskJsParser;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_mask_js_MaskJsParser != null ? _src_handlers_script_mask_js_MaskJsParser : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskJsParser = void 0;
const BaseParser_1 = _src_handlers_base_BaseParser;
class MaskJsParser extends BaseParser_1.BaseParser {
    getDependencies(ast, ownerResource) {
        return null;
    }
}
exports.MaskJsParser = MaskJsParser;
;
//# sourceMappingURL=MaskJsParser.js.map
//# sourceMappingURL=MaskJsParser.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_mask_js_MaskJsParser === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_mask_js_MaskJsParser) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_mask_js_MaskJsParser, module.exports);
    } else {
        _src_handlers_script_mask_js_MaskJsParser = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_mask_js_MaskJsRewriter;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_mask_js_MaskJsRewriter != null ? _src_handlers_script_mask_js_MaskJsRewriter : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskJsRewriter = void 0;
const BaseRewriter_1 = _src_handlers_base_BaseRewriter;
class MaskJsRewriter extends BaseRewriter_1.BaseRewriter {
    rewriteRoot(resourceInput, resourceOutput) {
    }
    rewritePartial(content, ownerResource) {
    }
    rewriteResource(resource) {
    }
    accepts(type) {
        return type === 'mask';
    }
}
exports.MaskJsRewriter = MaskJsRewriter;
;
//# sourceMappingURL=MaskJsRewriter.js.map
//# sourceMappingURL=MaskJsRewriter.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_mask_js_MaskJsRewriter === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_mask_js_MaskJsRewriter) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_mask_js_MaskJsRewriter, module.exports);
    } else {
        _src_handlers_script_mask_js_MaskJsRewriter = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_mask_js_MaskJsBuilder;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_mask_js_MaskJsBuilder != null ? _src_handlers_script_mask_js_MaskJsBuilder : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskJsBuilder = void 0;
const BaseScriptBuilder_1 = _src_handlers_script_base_BaseScriptBuilder;
const CommonJsBuilder_1 = _src_handlers_script_common_js_CommonJsBuilder;
class MaskJsBuilder extends BaseScriptBuilder_1.BaseScriptBuilder {
    wrapModule(resource) {
        let builder = new CommonJsBuilder_1.CommonJsBuilder(this.solution, this.handler);
        let footer = Templates
            .footer
            .replace('%URL%', () => resource.url);
        let content = builder.wrapModule(resource, null, null, {
            partials: {
                footer
            }
        });
        return content;
        // return Templates
        //     .module
        //     .replace('%URL%', () => resource.url)
        //     .replace('%CONTENT%', () => content);
    }
    accepts(resource) {
        return resource.type === 'js' && resource.getModule() === 'mask';
    }
}
exports.MaskJsBuilder = MaskJsBuilder;
;
var Templates = {
    module: `
    var exports = {};
    var module = { exports: exports };

    %CONTENT%

    ;(function(exports, Module){
        var endpoint = new Module.Endpoint('%URL%', 'script');
        Module.registerModule(exports, endpoint);
    }(module.exports, mask.Module));
`, footer: `
    ;(function(exports, Module){
        var endpoint = new Module.Endpoint('%URL%', 'script');
        Module.registerModule(exports, endpoint);
    }(module.exports, mask.Module));
`
};
//# sourceMappingURL=MaskJsBuilder.js.map
//# sourceMappingURL=MaskJsBuilder.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_mask_js_MaskJsBuilder === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_mask_js_MaskJsBuilder) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_mask_js_MaskJsBuilder, module.exports);
    } else {
        _src_handlers_script_mask_js_MaskJsBuilder = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_mask_js_MaskJsHandler;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_mask_js_MaskJsHandler != null ? _src_handlers_script_mask_js_MaskJsHandler : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskJsHandler = void 0;
const MaskJsParser_1 = _src_handlers_script_mask_js_MaskJsParser;
const MaskJsRewriter_1 = _src_handlers_script_mask_js_MaskJsRewriter;
const MaskJsBuilder_1 = _src_handlers_script_mask_js_MaskJsBuilder;
const BaseHandler_1 = _src_handlers_base_BaseHandler;
class MaskJsHandler extends BaseHandler_1.BaseHandler {
}
exports.MaskJsHandler = MaskJsHandler;
MaskJsHandler.Parser = MaskJsParser_1.MaskJsParser;
MaskJsHandler.Rewriter = MaskJsRewriter_1.MaskJsRewriter;
MaskJsHandler.Builder = MaskJsBuilder_1.MaskJsBuilder;
MaskJsHandler.PathResolver = null;
;
//# sourceMappingURL=MaskJsHandler.js.map
//# sourceMappingURL=MaskJsHandler.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_mask_js_MaskJsHandler === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_mask_js_MaskJsHandler) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_mask_js_MaskJsHandler, module.exports);
    } else {
        _src_handlers_script_mask_js_MaskJsHandler = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_ScriptBuilder;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_ScriptBuilder != null ? _src_handlers_script_ScriptBuilder : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptBuilder = void 0;
const BaseBuilder_1 = _src_handlers_base_BaseBuilder;
const GlobalJsHandler_1 = _src_handlers_script_global_js_GlobalJsHandler;
const CommonJsHandler_1 = _src_handlers_script_common_js_CommonJsHandler;
const AmdJsHandler_1 = _src_handlers_script_amd_js_AmdJsHandler;
const IncludeJsHandler_1 = _src_handlers_script_include_js_IncludeJsHandler;
const MaskJsHandler_1 = _src_handlers_script_mask_js_MaskJsHandler;
const ImportJsHandler_1 = _src_handlers_script_import_js_ImportJsHandler;
class ScriptBuilder extends BaseBuilder_1.BaseBuilder {
    constructor() {
        super(...arguments);
        this.builders = [
            new GlobalJsHandler_1.GlobalJsHandler.Builder(this.solution, this.handler),
            new CommonJsHandler_1.CommonJsHandler.Builder(this.solution, this.handler),
            new AmdJsHandler_1.AmdJsHandler.Builder(this.solution, this.handler),
            new IncludeJsHandler_1.IncludeJsHandler.Builder(this.solution, this.handler),
            new MaskJsHandler_1.MaskJsHandler.Builder(this.solution, this.handler),
            new ImportJsHandler_1.ImportJsHandler.Builder(this.solution, this.handler),
        ];
    }
    createModule(outputItem, otherOutputItems) {
        let code = '';
        let resArr = outputItem.resources;
        if (resArr == null || resArr.length === 0) {
            let builder = this.builders.find(x => x.isMainBuilder(this.solution));
            if (builder) {
                code = builder.wrapScriptlessModule(otherOutputItems);
            }
        }
        else {
            const out = resArr.map(res => {
                let builder = this.builders.find(x => x.accepts(res));
                if (builder == null)
                    throw new Error('Module Builder not found for ' + res.url);
                return builder.wrapModule(res, outputItem, otherOutputItems);
            });
            code = out.join('\n');
        }
        outputItem.resource.content = code;
    }
    buildRoot(resource, dependencies) {
        var builder = this.builders.find(x => x.accepts(resource));
        if (builder == null) {
            throw new Error(`Root Builder not found for ${resource.url} (${resource.getModule()})`);
        }
        return builder.buildRoot(resource, dependencies);
    }
    accepts(type) {
        return type === 'js';
    }
}
exports.ScriptBuilder = ScriptBuilder;
;
//# sourceMappingURL=ScriptBuilder.js.map
//# sourceMappingURL=ScriptBuilder.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_ScriptBuilder === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_ScriptBuilder) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_ScriptBuilder, module.exports);
    } else {
        _src_handlers_script_ScriptBuilder = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_ScriptPathResolver;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_ScriptPathResolver != null ? _src_handlers_script_ScriptPathResolver : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptPathResolver = void 0;
const CommonJsHandler_1 = _src_handlers_script_common_js_CommonJsHandler;
const BasePathResolver_1 = _src_handlers_base_BasePathResolver;
class ScriptPathResolver extends BasePathResolver_1.BasePathResolver {
    constructor() {
        super(...arguments);
        this.resolvers = [
            new CommonJsHandler_1.CommonJsHandler.PathResolver(this.solution, this.handler)
        ];
    }
    accepts(includeData) {
        if (includeData.type !== 'js') {
            return false;
        }
        var resolver = this._getInnerResolver(includeData);
        return resolver != null;
    }
    resolve(includeData, parentResource) {
        var resolver = this._getInnerResolver(includeData);
        return resolver.resolve(includeData, parentResource);
    }
    _getInnerResolver(includeData) {
        return this.resolvers.find(x => x.accepts(includeData));
    }
}
exports.ScriptPathResolver = ScriptPathResolver;
;
//# sourceMappingURL=ScriptPathResolver.js.map
//# sourceMappingURL=ScriptPathResolver.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_ScriptPathResolver === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_ScriptPathResolver) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_ScriptPathResolver, module.exports);
    } else {
        _src_handlers_script_ScriptPathResolver = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_script_ScriptHandler;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_script_ScriptHandler != null ? _src_handlers_script_ScriptHandler : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptHandler = void 0;
const ScriptParser_1 = _src_handlers_script_ScriptParser;
const ScriptRewriter_1 = _src_handlers_script_ScriptRewriter;
const ScriptBuilder_1 = _src_handlers_script_ScriptBuilder;
const ScriptPathResolver_1 = _src_handlers_script_ScriptPathResolver;
const BaseHandler_1 = _src_handlers_base_BaseHandler;
class ScriptHandler extends BaseHandler_1.BaseHandler {
    accepts(type) {
        return type === 'js';
    }
}
exports.ScriptHandler = ScriptHandler;
ScriptHandler.Parser = ScriptParser_1.ScriptParser;
ScriptHandler.Rewriter = ScriptRewriter_1.ScriptRewriter;
ScriptHandler.Builder = ScriptBuilder_1.ScriptBuilder;
ScriptHandler.PathResolver = ScriptPathResolver_1.ScriptPathResolver;
;
//# sourceMappingURL=ScriptHandler.js.map
//# sourceMappingURL=ScriptHandler.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_script_ScriptHandler === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_script_ScriptHandler) && __isObj(module.exports)) {
        Object.assign(_src_handlers_script_ScriptHandler, module.exports);
    } else {
        _src_handlers_script_ScriptHandler = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_css_CssParser;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_css_CssParser != null ? _src_handlers_css_CssParser : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssParser = void 0;
const BaseParser_1 = _src_handlers_base_BaseParser;
const async_1 = _src_utils_async;
class CssParser extends BaseParser_1.BaseParser {
    getDependencies(content, ownerResource) {
        return (0, async_1.async_resolve)({ dependencies: [] });
    }
    accepts(type) {
        return type === 'css';
    }
}
exports.CssParser = CssParser;
;
//# sourceMappingURL=CssParser.js.map
//# sourceMappingURL=CssParser.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_css_CssParser === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_css_CssParser) && __isObj(module.exports)) {
        Object.assign(_src_handlers_css_CssParser, module.exports);
    } else {
        _src_handlers_css_CssParser = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_css_CssPathResolver;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_css_CssPathResolver != null ? _src_handlers_css_CssPathResolver : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssPathResolver = void 0;
const BasePathResolver_1 = _src_handlers_base_BasePathResolver;
class CssPathResolver extends BasePathResolver_1.BasePathResolver {
    accepts(type) {
        return false;
    }
}
exports.CssPathResolver = CssPathResolver;
;
//# sourceMappingURL=CssPathResolver.js.map
//# sourceMappingURL=CssPathResolver.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_css_CssPathResolver === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_css_CssPathResolver) && __isObj(module.exports)) {
        Object.assign(_src_handlers_css_CssPathResolver, module.exports);
    } else {
        _src_handlers_css_CssPathResolver = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_css_CssRewriter;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_css_CssRewriter != null ? _src_handlers_css_CssRewriter : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssRewriter = void 0;
const BaseRewriter_1 = _src_handlers_base_BaseRewriter;
class CssRewriter extends BaseRewriter_1.BaseRewriter {
    rewritePartial(content, ownerResource) {
    }
    rewriteResource(resource) {
    }
    accepts(type) {
        return type === 'css';
    }
}
exports.CssRewriter = CssRewriter;
;
//# sourceMappingURL=CssRewriter.js.map
//# sourceMappingURL=CssRewriter.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_css_CssRewriter === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_css_CssRewriter) && __isObj(module.exports)) {
        Object.assign(_src_handlers_css_CssRewriter, module.exports);
    } else {
        _src_handlers_css_CssRewriter = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_css_CssBuilder;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_css_CssBuilder != null ? _src_handlers_css_CssBuilder : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssBuilder = void 0;
const BaseBuilder_1 = _src_handlers_base_BaseBuilder;
class CssBuilder extends BaseBuilder_1.BaseBuilder {
    createModule(outputItem) {
        let out = outputItem
            .resources
            .map(res => {
            this.solution.assetsManager.rewriteAssets(res, outputItem.resource, this.solution);
            return res.content;
        });
        outputItem.resource.content = out.join('\n');
    }
    accepts(type) {
        return type === 'css';
    }
}
exports.CssBuilder = CssBuilder;
;
//# sourceMappingURL=CssBuilder.js.map
//# sourceMappingURL=CssBuilder.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_css_CssBuilder === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_css_CssBuilder) && __isObj(module.exports)) {
        Object.assign(_src_handlers_css_CssBuilder, module.exports);
    } else {
        _src_handlers_css_CssBuilder = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_css_CssHandler;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_css_CssHandler != null ? _src_handlers_css_CssHandler : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssHandler = void 0;
const CssParser_1 = _src_handlers_css_CssParser;
const BaseHandler_1 = _src_handlers_base_BaseHandler;
const CssPathResolver_1 = _src_handlers_css_CssPathResolver;
const CssRewriter_1 = _src_handlers_css_CssRewriter;
const CssBuilder_1 = _src_handlers_css_CssBuilder;
class CssHandler extends BaseHandler_1.BaseHandler {
    accepts(type) {
        return type === 'css';
    }
}
exports.CssHandler = CssHandler;
CssHandler.Parser = CssParser_1.CssParser;
CssHandler.Rewriter = CssRewriter_1.CssRewriter;
CssHandler.Builder = CssBuilder_1.CssBuilder;
CssHandler.PathResolver = CssPathResolver_1.CssPathResolver;
;
//# sourceMappingURL=CssHandler.js.map
//# sourceMappingURL=CssHandler.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_css_CssHandler === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_css_CssHandler) && __isObj(module.exports)) {
        Object.assign(_src_handlers_css_CssHandler, module.exports);
    } else {
        _src_handlers_css_CssHandler = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_html_HtmlRewriter;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_html_HtmlRewriter != null ? _src_handlers_html_HtmlRewriter : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlRewriter = void 0;
const BaseRewriter_1 = _src_handlers_base_BaseRewriter;
class HtmlRewriter extends BaseRewriter_1.BaseRewriter {
    rewritePartial(content, ownerResource) {
    }
    rewriteResource(resource) {
    }
    accepts(type) {
        return type === 'html';
    }
}
exports.HtmlRewriter = HtmlRewriter;
;
//# sourceMappingURL=HtmlRewriter.js.map
//# sourceMappingURL=HtmlRewriter.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_html_HtmlRewriter === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_html_HtmlRewriter) && __isObj(module.exports)) {
        Object.assign(_src_handlers_html_HtmlRewriter, module.exports);
    } else {
        _src_handlers_html_HtmlRewriter = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_html_readers_BaseTagReader;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_html_readers_BaseTagReader != null ? _src_handlers_html_readers_BaseTagReader : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseTagReader = void 0;
class BaseTagReader {
    constructor(solution) {
        this.solution = solution;
    }
    canHandle(el) {
        throw Error('Not implemented');
    }
    read(el) {
        throw Error('Not implemented');
    }
}
exports.BaseTagReader = BaseTagReader;
//# sourceMappingURL=BaseTagReader.js.map
//# sourceMappingURL=BaseTagReader.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_html_readers_BaseTagReader === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_html_readers_BaseTagReader) && __isObj(module.exports)) {
        Object.assign(_src_handlers_html_readers_BaseTagReader, module.exports);
    } else {
        _src_handlers_html_readers_BaseTagReader = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_html_readers_MaskContentReader;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_html_readers_MaskContentReader != null ? _src_handlers_html_readers_MaskContentReader : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskContentReader = void 0;
const BaseTagReader_1 = _src_handlers_html_readers_BaseTagReader;
class MaskContentReader extends BaseTagReader_1.BaseTagReader {
    canHandle(el) {
        var tagName = el.prop('tagName');
        if (tagName == null || tagName.toLowerCase() !== 'script') {
            return false;
        }
        var type = el.attr('type');
        if (type && type.toLowerCase().indexOf('mask') !== -1) {
            return true;
        }
        return false;
    }
    read(el) {
        var content = el.text();
        var handler = this.solution.handlers.find(x => x.parser.accepts('mask'));
        return handler.parser.getDependencies(content, {}).then(({ dependencies }) => {
            //dependencies.forEach(x => x.module = 'global');
            return dependencies;
        });
    }
}
exports.MaskContentReader = MaskContentReader;
;
//# sourceMappingURL=MaskContentReader.js.map
//# sourceMappingURL=MaskContentReader.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_html_readers_MaskContentReader === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_html_readers_MaskContentReader) && __isObj(module.exports)) {
        Object.assign(_src_handlers_html_readers_MaskContentReader, module.exports);
    } else {
        _src_handlers_html_readers_MaskContentReader = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_html_readers_StyleLinkReader;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_html_readers_StyleLinkReader != null ? _src_handlers_html_readers_StyleLinkReader : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleLinkReader = void 0;
const BaseTagReader_1 = _src_handlers_html_readers_BaseTagReader;
class StyleLinkReader extends BaseTagReader_1.BaseTagReader {
    canHandle(el) {
        var tagName = el.prop('tagName');
        if (tagName == null || tagName.toLowerCase() !== 'link') {
            return false;
        }
        if (el.attr('href') == null) {
            return false;
        }
        var rel = el.attr('rel');
        if (rel == null || rel.toLowerCase() !== 'stylesheet')
            return false;
        return true;
    }
    read(el) {
        var resource = {
            type: 'css',
            url: el.attr('href'),
            module: 'global',
            bundle: el.attr('data-bundler-bundle')
        };
        return [resource];
    }
}
exports.StyleLinkReader = StyleLinkReader;
//# sourceMappingURL=StyleLinkReader.js.map
//# sourceMappingURL=StyleLinkReader.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_html_readers_StyleLinkReader === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_html_readers_StyleLinkReader) && __isObj(module.exports)) {
        Object.assign(_src_handlers_html_readers_StyleLinkReader, module.exports);
    } else {
        _src_handlers_html_readers_StyleLinkReader = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_html_readers_ScriptLinkReader;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_html_readers_ScriptLinkReader != null ? _src_handlers_html_readers_ScriptLinkReader : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptLinkReader = void 0;
const BaseTagReader_1 = _src_handlers_html_readers_BaseTagReader;
class ScriptLinkReader extends BaseTagReader_1.BaseTagReader {
    canHandle(el) {
        var tagName = el.prop('tagName');
        if (tagName == null || tagName.toLowerCase() !== 'script') {
            return false;
        }
        if (this.getSource(el) == null) {
            return false;
        }
        var type = el.attr('type');
        if (type && type.toLowerCase().indexOf('javascript') === -1) {
            return false;
        }
        return true;
    }
    read(el) {
        var resource = {
            type: 'js',
            url: this.getSource(el),
            module: 'global',
            bundle: el.attr('data-bundler-bundle'),
            meta: {
                skipDependencies: el.attr('data-bundler-dependencies') === 'ignore'
            }
        };
        return [resource];
    }
    getSource(el) {
        return el.attr('src') || el.attr('data-bundler-src');
    }
}
exports.ScriptLinkReader = ScriptLinkReader;
//# sourceMappingURL=ScriptLinkReader.js.map
//# sourceMappingURL=ScriptLinkReader.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_html_readers_ScriptLinkReader === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_html_readers_ScriptLinkReader) && __isObj(module.exports)) {
        Object.assign(_src_handlers_html_readers_ScriptLinkReader, module.exports);
    } else {
        _src_handlers_html_readers_ScriptLinkReader = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_html_readers_ScriptContentReader;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_html_readers_ScriptContentReader != null ? _src_handlers_html_readers_ScriptContentReader : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptContentReader = void 0;
const BaseTagReader_1 = _src_handlers_html_readers_BaseTagReader;
class ScriptContentReader extends BaseTagReader_1.BaseTagReader {
    canHandle(el) {
        var tagName = el.prop('tagName');
        if (tagName == null || tagName.toLowerCase() !== 'script') {
            return false;
        }
        var type = el.attr('type');
        if (type && type.toLowerCase().indexOf('javascript') === -1) {
            return false;
        }
        return true;
    }
    read(el) {
        var content = el.text();
        var handler = this.solution.handlers.find(x => x.parser.accepts('js'));
        return handler.parser.getDependencies(content, {}).then(({ dependencies }) => {
            return dependencies;
        });
    }
}
exports.ScriptContentReader = ScriptContentReader;
//# sourceMappingURL=ScriptContentReader.js.map
//# sourceMappingURL=ScriptContentReader.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_html_readers_ScriptContentReader === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_html_readers_ScriptContentReader) && __isObj(module.exports)) {
        Object.assign(_src_handlers_html_readers_ScriptContentReader, module.exports);
    } else {
        _src_handlers_html_readers_ScriptContentReader = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_html_HtmlParser;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_html_HtmlParser != null ? _src_handlers_html_HtmlParser : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlParser = void 0;
const arr_1 = _src_utils_arr;
const MaskContentReader_1 = _src_handlers_html_readers_MaskContentReader;
const StyleLinkReader_1 = _src_handlers_html_readers_StyleLinkReader;
const ScriptLinkReader_1 = _src_handlers_html_readers_ScriptLinkReader;
const ScriptContentReader_1 = _src_handlers_html_readers_ScriptContentReader;
const BaseParser_1 = _src_handlers_base_BaseParser;
const async_1 = _src_utils_async;
class HtmlParser extends BaseParser_1.BaseParser {
    constructor(solution, handler) {
        super(solution, handler);
        this.solution = solution;
        this.handler = handler;
        this.readers = [
            new MaskContentReader_1.MaskContentReader(this.solution),
            new StyleLinkReader_1.StyleLinkReader(this.solution),
            new ScriptLinkReader_1.ScriptLinkReader(this.solution),
            new ScriptContentReader_1.ScriptContentReader(this.solution)
        ];
    }
    getDependencies(content, ownerResource) {
        var $ = this.createDocument(content);
        var queue = [];
        $('*').each((index, node) => {
            var $el = $(node);
            if ($el.attr('data-bundler') === 'ignore') {
                return;
            }
            var condition = $el.attr('data-bundler-if');
            if (condition) {
                var result = this.solution.opts.varDefs.evaluate(condition);
                if (!result) {
                    return;
                }
            }
            var reader = this.readers.find(reader => reader.canHandle($el));
            if (reader) {
                queue.push({
                    node: $el,
                    reader: reader
                });
            }
        });
        return (0, async_1.async_map)(queue, x => x.reader.read(x.node))
            .then(arr_1.arr_flattern)
            .then(deps => ({ dependencies: deps }));
    }
    accepts(type) {
        return type === 'html';
    }
    createDocument(html) {
        return require('cheerio').load(html);
    }
}
exports.HtmlParser = HtmlParser;
;
//# sourceMappingURL=HtmlParser.js.map
//# sourceMappingURL=HtmlParser.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_html_HtmlParser === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_html_HtmlParser) && __isObj(module.exports)) {
        Object.assign(_src_handlers_html_HtmlParser, module.exports);
    } else {
        _src_handlers_html_HtmlParser = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_html_serializers_BaseSerializer;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_html_serializers_BaseSerializer != null ? _src_handlers_html_serializers_BaseSerializer : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSerializer = void 0;
const path_1 = _src_utils_path;
const Resource_1 = _src_class_Resource;
const global_1 = _src_global;
class BaseSerializer {
    constructor(solution, builder) {
        this.solution = solution;
        this.builder = builder;
    }
    removeDependencies($) {
        throw new Error('Not implemented');
    }
    serialize($, allDependencies) {
        throw new Error('Not implemented');
    }
    rewrite($, ownerResource) {
        throw new Error('Not implemented');
    }
    clean($) {
        return void 0;
    }
    _replaceWithPlaceholder($el, type) {
        var bundle = $el.attr('data-bundler-bundle') || 'index';
        var html = `<placeholder id="bundlers-placeholder" type="${type}" bundle="${bundle}" />`;
        $el.replaceWith(html);
    }
    _insertDependency($, resource, html) {
        var bundle = resource.bundle;
        var type = resource.type;
        var getSelector = (bundle) => {
            return `placeholder#bundlers-placeholder[type="${type}"][bundle="${bundle}"]`;
        };
        var bundleSelector = getSelector(resource.bundle);
        var globalSelector = getSelector('index');
        var el = $(bundleSelector).first();
        if (el.length !== 0) {
            el.before(html);
            return true;
        }
        el = $(globalSelector).first();
        if (el.length !== 0) {
            el.before(html);
            return true;
        }
        return false;
    }
    _rewriteStaticUrls(ownerResource, $, selector, pathAttrName) {
        $(selector)
            .each((i, el) => {
            var path = $(el).attr(pathAttrName);
            if (!path || (0, path_1.path_withProtocol)(path))
                return;
            var resource = new Resource_1.Resource({ url: path, module: 'html' }, ownerResource, this.solution);
            var url = resource.toTarget(this.solution, { targetType: 'static' }).url;
            $(el).attr(pathAttrName, url);
        });
    }
    _inlineResources(ownerResource, $, selector, pathAttrName, createHtmlFn) {
        var reporter = this.solution.reporter;
        $(selector)
            .each((i, el) => {
            var path = $(el).attr(pathAttrName);
            if (/^https?:/.test(path)) {
                reporter.error('Only local resources can be inlined. Current: ' + path);
                return;
            }
            var resource = new Resource_1.Resource({ url: path, module: 'html' }, ownerResource, this.solution);
            if (global_1.io.File.exists(resource.filename) === false) {
                reporter.error('File not found: ' + resource.filename);
                return;
            }
            var content = global_1.io.File.read(resource.filename);
            var html = createHtmlFn(content);
            $(el).replaceWith(html);
            reporter.info('Inlined resource from ' + resource.url);
        });
    }
}
exports.BaseSerializer = BaseSerializer;
//# sourceMappingURL=BaseSerializer.js.map
//# sourceMappingURL=BaseSerializer.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_html_serializers_BaseSerializer === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_html_serializers_BaseSerializer) && __isObj(module.exports)) {
        Object.assign(_src_handlers_html_serializers_BaseSerializer, module.exports);
    } else {
        _src_handlers_html_serializers_BaseSerializer = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_html_serializers_MaskSerializer;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_html_serializers_MaskSerializer != null ? _src_handlers_html_serializers_MaskSerializer : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskSerializer = void 0;
const BaseSerializer_1 = _src_handlers_html_serializers_BaseSerializer;
class MaskSerializer extends BaseSerializer_1.BaseSerializer {
    removeDependencies($) {
        return void 0;
    }
    serialize($, resources) {
        var arr = resources.filter(x => x.type === 'mask');
        if (arr.length === 0)
            return;
        arr.forEach(x => x.embed = true);
        var html = arr
            .map(x => `<script type='text/mask' data-run='auto'>\n${x.content}\n</script>`)
            .join('\n');
        this
            .builder
            .insertBefore($, 'script[type="text/mask"]', html);
    }
    rewrite($, resource) {
        $('script[type="text/mask"]').each((i, node) => {
            var content = $(node).text();
            var handler = this.solution.handlers.find(x => x.rewriter.accepts('mask'));
            var result = handler.rewriter.rewritePartial(content, resource);
            if (result && result !== content) {
                $(node).text(result);
            }
        });
    }
}
exports.MaskSerializer = MaskSerializer;
//# sourceMappingURL=MaskSerializer.js.map
//# sourceMappingURL=MaskSerializer.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_html_serializers_MaskSerializer === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_html_serializers_MaskSerializer) && __isObj(module.exports)) {
        Object.assign(_src_handlers_html_serializers_MaskSerializer, module.exports);
    } else {
        _src_handlers_html_serializers_MaskSerializer = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_html_serializers_StyleSerializer;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_html_serializers_StyleSerializer != null ? _src_handlers_html_serializers_StyleSerializer : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleSerializer = void 0;
const BaseSerializer_1 = _src_handlers_html_serializers_BaseSerializer;
const StyleLinkReader_1 = _src_handlers_html_readers_StyleLinkReader;
class StyleSerializer extends BaseSerializer_1.BaseSerializer {
    removeDependencies($) {
        let reader = new StyleLinkReader_1.StyleLinkReader();
        $('link[href]')
            .filter((i, el) => {
            let $el = $(el);
            return $el.attr('data-bundler') !== 'ignore' && reader.canHandle($el);
        })
            .each((i, el) => {
            this._replaceWithPlaceholder($(el), 'css');
        });
    }
    serialize($, resources) {
        var arr = resources.filter(x => x.type === 'css');
        if (arr.length === 0)
            return;
        arr.forEach(resource => {
            var url = resource.url;
            if (this.solution.opts.version) {
                url += '?v=' + this.solution.opts.version;
            }
            var html = `<link href='${url}' rel='stylesheet' />`;
            var inserted = this._insertDependency($, resource, html);
            if (inserted === false) {
                this.builder.append($, 'head', html);
                return;
            }
        });
    }
    rewrite($, resource) {
        this._inlineResources(resource, $, 'link[href][data-bundler-content="inline"]', 'href', content => `<style>${content}</style>`);
        this._rewriteStaticUrls(resource, $, 'link[rel="stylesheet"][data-bundler="ignore"]', 'href');
    }
}
exports.StyleSerializer = StyleSerializer;
//# sourceMappingURL=StyleSerializer.js.map
//# sourceMappingURL=StyleSerializer.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_html_serializers_StyleSerializer === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_html_serializers_StyleSerializer) && __isObj(module.exports)) {
        Object.assign(_src_handlers_html_serializers_StyleSerializer, module.exports);
    } else {
        _src_handlers_html_serializers_StyleSerializer = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_html_serializers_ScriptSerializer;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_html_serializers_ScriptSerializer != null ? _src_handlers_html_serializers_ScriptSerializer : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptSerializer = void 0;
const BaseSerializer_1 = _src_handlers_html_serializers_BaseSerializer;
class ScriptSerializer extends BaseSerializer_1.BaseSerializer {
    removeDependencies($) {
        $('script[src]')
            .filter(function (i, x) {
            return x.attribs['data-bundler'] !== 'ignore';
        })
            .each((i, el) => {
            this._replaceWithPlaceholder($(el), 'js');
        });
    }
    serialize($, resources) {
        var arr = resources.filter(x => x.type === 'js');
        if (arr.length === 0)
            return;
        arr.forEach(resource => {
            var url = resource.url;
            if (this.solution.opts.version) {
                url += '?v=' + this.solution.opts.version;
            }
            var html = `<script src='${url}' type='text/javascript'></script>`;
            var inserted = this._insertDependency($, resource, html);
            if (inserted === false) {
                this.builder.append($, 'body', html);
                return;
            }
        });
    }
    rewrite($, resource) {
        this._inlineResources(resource, $, 'script[src][data-bundler-content="inline"]', 'src', content => `<script type='text/javascript'>${content}</script>`);
        this._rewriteStaticUrls(resource, $, 'script[data-bundler="ignore"]', 'src');
    }
    clean($) {
    }
}
exports.ScriptSerializer = ScriptSerializer;
//# sourceMappingURL=ScriptSerializer.js.map
//# sourceMappingURL=ScriptSerializer.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_html_serializers_ScriptSerializer === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_html_serializers_ScriptSerializer) && __isObj(module.exports)) {
        Object.assign(_src_handlers_html_serializers_ScriptSerializer, module.exports);
    } else {
        _src_handlers_html_serializers_ScriptSerializer = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_html_serializers_HtmlSerializer;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_html_serializers_HtmlSerializer != null ? _src_handlers_html_serializers_HtmlSerializer : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlSerializer = void 0;
const BaseSerializer_1 = _src_handlers_html_serializers_BaseSerializer;
class HtmlSerializer extends BaseSerializer_1.BaseSerializer {
    removeDependencies($) {
        $('[data-bundler-if]')
            .filter((i, x) => {
            var condition = x.attribs['data-bundler-if'];
            var result = !!this.solution.opts.varDefs.evaluate(condition);
            if (result) {
                this.solution.reporter.info('Removing resource from HTML with condition ' + condition);
            }
            return result;
        })
            .remove();
    }
    serialize($, resources) {
        var arr = resources.filter(x => x.type === 'html');
        if (arr.length === 0)
            return;
        arr.forEach(x => x.embed = true);
        var html = arr
            .map(x => x.content)
            .join('\n');
        this
            .builder
            .insertBefore($, 'script', html);
    }
    rewrite($, resource) {
        return void 0;
    }
}
exports.HtmlSerializer = HtmlSerializer;
//# sourceMappingURL=HtmlSerializer.js.map
//# sourceMappingURL=HtmlSerializer.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_html_serializers_HtmlSerializer === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_html_serializers_HtmlSerializer) && __isObj(module.exports)) {
        Object.assign(_src_handlers_html_serializers_HtmlSerializer, module.exports);
    } else {
        _src_handlers_html_serializers_HtmlSerializer = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_html_serializers_LoadSerializer;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_html_serializers_LoadSerializer != null ? _src_handlers_html_serializers_LoadSerializer : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadSerializer = void 0;
const BaseSerializer_1 = _src_handlers_html_serializers_BaseSerializer;
class LoadSerializer extends BaseSerializer_1.BaseSerializer {
    removeDependencies($) {
        return void 0;
    }
    serialize($, resources) {
        var arr = resources.filter(x => x.type === 'load');
        if (arr.length === 0)
            return;
        arr.forEach(x => x.embed = true);
        var html = arr
            .map(resource => {
            var url = resource.toTargetUrl(this.solution);
            return `<script type='text/plain' data-bundler-path='${url}'>			
					${resource.content}
				</script>`;
        })
            .join('\n');
        this
            .builder
            .insertBefore($, 'script', html);
    }
    rewrite($, resource) {
        return void 0;
    }
}
exports.LoadSerializer = LoadSerializer;
//# sourceMappingURL=LoadSerializer.js.map
//# sourceMappingURL=LoadSerializer.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_html_serializers_LoadSerializer === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_html_serializers_LoadSerializer) && __isObj(module.exports)) {
        Object.assign(_src_handlers_html_serializers_LoadSerializer, module.exports);
    } else {
        _src_handlers_html_serializers_LoadSerializer = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_html_HtmlBuilder;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_html_HtmlBuilder != null ? _src_handlers_html_HtmlBuilder : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlBuilder = void 0;
const BaseBuilder_1 = _src_handlers_base_BaseBuilder;
const MaskSerializer_1 = _src_handlers_html_serializers_MaskSerializer;
const StyleSerializer_1 = _src_handlers_html_serializers_StyleSerializer;
const ScriptSerializer_1 = _src_handlers_html_serializers_ScriptSerializer;
const HtmlSerializer_1 = _src_handlers_html_serializers_HtmlSerializer;
const LoadSerializer_1 = _src_handlers_html_serializers_LoadSerializer;
class HtmlBuilder extends BaseBuilder_1.BaseBuilder {
    constructor(solution, handler) {
        super(solution, handler);
        this.solution = solution;
        this.handler = handler;
        this.serializers = [
            new MaskSerializer_1.MaskSerializer(solution, this),
            new StyleSerializer_1.StyleSerializer(solution, this),
            new ScriptSerializer_1.ScriptSerializer(solution, this),
            new HtmlSerializer_1.HtmlSerializer(solution, this),
            new LoadSerializer_1.LoadSerializer(solution, this)
        ];
    }
    createModule(outputItem, otherOutputItems) {
        var arr = outputItem.resources.map(resource => {
            var url = resource.toTargetUrl(this.solution);
            return `<script type='text/plain' name='bunder-item' data-bundler-path='${url}'>
				${resource.content}
			</script>`;
        });
        outputItem.resource.content = arr.join('\n');
    }
    buildRoot(resource, dependencies) {
        var $ = this.createDocument(resource.content);
        dependencies.forEach(x => x.url = x.toRelative(resource));
        this.serializers.forEach(x => x.removeDependencies($));
        this.serializers.forEach(x => x.rewrite($, resource));
        this.serializers.forEach(x => x.serialize($, dependencies));
        this.serializers.forEach(x => x.clean($));
        this.clean($);
        resource.content = $.html();
    }
    append($, selector, html) {
        var container = $.root().find(selector).first();
        if (container.length !== 0) {
            container.append(html);
        }
        else {
            $.root().append(html);
        }
    }
    insertBefore($, selector, html) {
        var anchor = $.root().find(selector).first();
        if (anchor.length !== 0) {
            anchor.before(html);
        }
        else {
            $.root().append(html);
        }
    }
    accepts(type) {
        return type === 'html';
    }
    createDocument(html) {
        return require('cheerio').load(html);
    }
    clean($) {
        $('[data-bundler-if]')
            .filter((i, x) => {
            var condition = x.attribs['data-bundler-if'];
            var result = this.solution.opts.varDefs.evaluate(condition);
            return !!result;
        })
            .remove();
        $('placeholder#bundlers-placeholder')
            .remove();
    }
}
exports.HtmlBuilder = HtmlBuilder;
;
//# sourceMappingURL=HtmlBuilder.js.map
//# sourceMappingURL=HtmlBuilder.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_html_HtmlBuilder === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_html_HtmlBuilder) && __isObj(module.exports)) {
        Object.assign(_src_handlers_html_HtmlBuilder, module.exports);
    } else {
        _src_handlers_html_HtmlBuilder = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_html_HtmlPathResolver;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_html_HtmlPathResolver != null ? _src_handlers_html_HtmlPathResolver : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlPathResolver = void 0;
const BasePathResolver_1 = _src_handlers_base_BasePathResolver;
class HtmlPathResolver extends BasePathResolver_1.BasePathResolver {
    resolve(includeData, resource) {
        return (resource.source || resource).cdUrl(includeData.url);
    }
    accepts(includeData) {
        return includeData.module === 'html';
    }
}
exports.HtmlPathResolver = HtmlPathResolver;
;
//# sourceMappingURL=HtmlPathResolver.js.map
//# sourceMappingURL=HtmlPathResolver.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_html_HtmlPathResolver === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_html_HtmlPathResolver) && __isObj(module.exports)) {
        Object.assign(_src_handlers_html_HtmlPathResolver, module.exports);
    } else {
        _src_handlers_html_HtmlPathResolver = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_html_HtmlHandler;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_html_HtmlHandler != null ? _src_handlers_html_HtmlHandler : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlHandler = void 0;
const HtmlRewriter_1 = _src_handlers_html_HtmlRewriter;
const BaseHandler_1 = _src_handlers_base_BaseHandler;
const HtmlParser_1 = _src_handlers_html_HtmlParser;
const HtmlBuilder_1 = _src_handlers_html_HtmlBuilder;
const HtmlPathResolver_1 = _src_handlers_html_HtmlPathResolver;
class HtmlHandler extends BaseHandler_1.BaseHandler {
}
exports.HtmlHandler = HtmlHandler;
HtmlHandler.Parser = HtmlParser_1.HtmlParser;
HtmlHandler.Rewriter = HtmlRewriter_1.HtmlRewriter;
HtmlHandler.Builder = HtmlBuilder_1.HtmlBuilder;
HtmlHandler.PathResolver = HtmlPathResolver_1.HtmlPathResolver;
;
//# sourceMappingURL=HtmlHandler.js.map
//# sourceMappingURL=HtmlHandler.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_html_HtmlHandler === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_html_HtmlHandler) && __isObj(module.exports)) {
        Object.assign(_src_handlers_html_HtmlHandler, module.exports);
    } else {
        _src_handlers_html_HtmlHandler = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_handlers_exports;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_handlers_exports != null ? _src_handlers_exports : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handlers = void 0;
const LoadHandler_1 = _src_handlers_load_LoadHandler;
const MaskHandler_1 = _src_handlers_mask_MaskHandler;
const ScriptHandler_1 = _src_handlers_script_ScriptHandler;
const CssHandler_1 = _src_handlers_css_CssHandler;
const HtmlHandler_1 = _src_handlers_html_HtmlHandler;
exports.Handlers = [
    LoadHandler_1.LoadHandler,
    MaskHandler_1.MaskHandler,
    ScriptHandler_1.ScriptHandler,
    CssHandler_1.CssHandler,
    HtmlHandler_1.HtmlHandler
];
//# sourceMappingURL=exports.js.map
//# sourceMappingURL=exports.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_handlers_exports === module.exports) {
        // do nothing if
    } else if (__isObj(_src_handlers_exports) && __isObj(module.exports)) {
        Object.assign(_src_handlers_exports, module.exports);
    } else {
        _src_handlers_exports = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_class_Solution;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_class_Solution != null ? _src_class_Solution : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solution = void 0;
const AssetsManager_1 = _src_assets_AssetsManager;
const async_1 = _src_utils_async;
const atma_utils_1 = require("atma-utils");
const SolutionOpts_1 = _src_class_SolutionOpts;
const Reporter_1 = _src_class_Reporter;
const HandlersUtils_1 = _src_class_HandlersUtils;
const OutputResources_1 = _src_class_OutputResources;
const exports_1 = _src_handlers_exports;
const global_1 = _src_global;
class Solution extends atma_utils_1.class_EventEmitter {
    constructor(path, opts = {}) {
        super();
        this.iteration = {};
        this.path = path;
        this.opts = new SolutionOpts_1.SolutionOpts(this, opts);
        this.assetsManager = new AssetsManager_1.AssetsManager(this);
        this.outputResources = new OutputResources_1.OutputResources(this);
        this.reporter = Reporter_1.IReporter.create(this.opts);
        this.handlers = exports_1.Handlers.map(Ctor => new Ctor(this));
        Object.assign(this.handlers, HandlersUtils_1.HandlersUtils);
    }
    getOptionsForResource(resource) {
        // var files = this.opts.files;
        // if (files == null) {
        //     return null;
        // }
        // @TODO support settings for a resource
    }
    isMainResource(resource) {
        return this.outputResources.rootInput === resource;
    }
    runScripts(name, ...args) {
        return (0, async_1.async_run)((resolve, reject) => {
            let arr = this.opts[name];
            if (arr == null || arr.length === 0) {
                resolve(...args);
                return;
            }
            (0, async_1.async_waterfall)(arr, function (path) {
                let mix = require(atma_utils_1.class_Uri.combine(process.cwd(), path));
                if (mix && mix.process) {
                    return mix.process();
                }
            }).then(() => resolve(...args), reject);
        });
    }
    onBuildReady(result) {
        for (let source in this.opts.copyFiles) {
            if (source.endsWith('/')) {
                global_1.io.Directory.copyTo(source, this.opts.copyFiles[source], { verbose: true });
                continue;
            }
            global_1.io.File.copyTo(source, this.opts.copyFiles[source]);
        }
        return result;
    }
    mapUrl(url) {
        let maps = this.opts.rewrites;
        if (maps == null) {
            return url;
        }
        if (url in maps) {
            return maps[url];
        }
        return url;
    }
}
exports.Solution = Solution;
;
//# sourceMappingURL=Solution.js.map
//# sourceMappingURL=Solution.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_class_Solution === module.exports) {
        // do nothing if
    } else if (__isObj(_src_class_Solution) && __isObj(module.exports)) {
        Object.assign(_src_class_Solution, module.exports);
    } else {
        _src_class_Solution = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_parser_Parser;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_parser_Parser != null ? _src_parser_Parser : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const Middlewares_1 = _src_class_Middlewares;
const path_1 = _src_utils_path;
const async_1 = _src_utils_async;
const atma_utils_1 = require("atma-utils");
const Solution_1 = _src_class_Solution;
const assert = require("assert");
exports.Parser = {
    getDependencies(resource, solution) {
        assert(resource != null, 'Resource is empty');
        assert(solution instanceof Solution_1.Solution, 'Solution is not passed');
        var dfr = new atma_utils_1.class_Dfr;
        getDependenciesInternal(resource, solution)
            .done(_runMiddlewares)
            .fail(error => dfr.reject(error));
        function _runMiddlewares(deps) {
            getDependenciesExternal(deps, resource, solution)
                .then((deps) => mapDeps(deps, solution))
                .then((deps) => filterDynamicDeps(deps, solution))
                .done(deps => dfr.resolve(deps))
                .fail(error => dfr.reject(error));
        }
        return dfr;
    }
};
function getDependenciesInternal(resource, solution) {
    assert(typeof resource.url === 'string', 'Path is expected');
    var ext = (0, path_1.path_getExtension)(resource.url);
    var handler = solution.handlers.find(x => x.parser.accepts(resource.type) || x.parser.accepts(ext));
    if (handler == null) {
        console.warn('GetDependenciesInternal: Skip uknown resource type', resource.type);
        return (0, async_1.async_resolve)({ dependencies: [] });
    }
    return handler.parser.getDependencies(resource.content, resource);
}
function getDependenciesExternal(deps, resource, solution) {
    return Middlewares_1._middlewares
        .run('parseDependencies', resource, deps, solution)
        .then(() => deps);
}
function filterDynamicDeps(info, solution) {
    info.dependencies = info.dependencies.filter(dep => isDynamicDependency(dep, solution) === false);
    return info;
}
function isDynamicDependency(dep, solution) {
    var arr = solution.opts.dynamicDependencies;
    return arr.length !== 0 && arr.some(rgx => rgx.test(dep.url));
}
function mapDeps(info, solution) {
    info.dependencies.forEach(dep => {
        // @TODO do we need to map at this level?
    });
    return info;
}
//# sourceMappingURL=Parser.js.map
//# sourceMappingURL=Parser.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_parser_Parser === module.exports) {
        // do nothing if
    } else if (__isObj(_src_parser_Parser) && __isObj(module.exports)) {
        Object.assign(_src_parser_Parser, module.exports);
    } else {
        _src_parser_Parser = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_loader_Loader;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_loader_Loader != null ? _src_loader_Loader : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
const alot_1 = require("alot");
const atma_utils_1 = require("atma-utils");
const res_1 = _src_utils_res;
const path_1 = _src_utils_path;
const Parser_1 = _src_parser_Parser;
const assert = require("assert");
const Resource_1 = _src_class_Resource;
const Configuration_1 = _src_config_Configuration;
const color_1 = _src_utils_color;
exports.Loader = {
    opts: null,
    solution: null,
    load(type, path, opts, solution) {
        this.opts = opts;
        this.solution = solution;
        let includeData = {
            type: type,
            url: path,
            module: 'root',
            page: solution.opts.mainPage
        };
        let start = Date.now();
        return ResourceLoader
            .load(includeData, null, opts, solution)
            .then(loader => {
            let end = Date.now();
            let seconds = ((end - start) / 1000).toFixed(2);
            let treeInfo = (0, res_1.res_getTreeInfo)(loader.resource);
            let reporter = solution.reporter;
            reporter
                .info((0, color_1.color)(`Loaded bold<yellow<${treeInfo.count}>> files in bold<yellow<${seconds}>> sec.`));
            reporter
                .info(treeInfo.treeString);
            return loader.resource;
        });
    },
    loadResource(resource) {
        return ResourceLoader
            .loadResource(resource, this.opts, this.solution)
            .promise
            .then(loader => loader.resource);
    },
    clearCache() {
        ResourceLoader.clearCache();
        return this;
    },
    removeCached(filename) {
        ResourceLoader.clearCacheSingle(filename);
        return this;
    },
    getTypeFromPath(path) {
        let ext = (0, path_1.path_getExtension)(path);
        let type = Object.keys(types).find(type => {
            return types[type].indexOf(` ${ext} `) !== -1;
        });
        if (type == null) {
            throw new Error('Resource type can`t be resolve from path ' + path);
        }
        return type;
    }
};
let types = {
    'js': ' es6 js ',
    'mask': ' mask ',
    'html': ' html ',
    'css': ' css scss less '
};
var ResourceLoader;
(function (ResourceLoader) {
    function load(includeData, parent, opts, solution) {
        let resource = new Resource_1.Resource(includeData, parent, solution);
        let loader = __loaders[resource.filename];
        if (loader == null) {
            loader = __loaders[resource.filename] = new TreeLoader(resource, opts, solution);
            loader.process();
        }
        else {
            // Try to find the resource in ancestors
            let res = tryGetCyclicRoot(resource);
            if (res != null) {
                solution.reporter.warn(`Caution. Cyclic dependency detected. '${includeData.url}' in '${parent.url}'`);
                return Promise.resolve({ resource: res });
            }
        }
        if (includeData.page) {
            loader.promise.done(() => {
                this.definePageForAll(includeData.page, loader.resource);
            });
        }
        return loader.promise;
    }
    ResourceLoader.load = load;
    function loadResource(resource, opts, solution) {
        let loader = __loaders[resource.filename];
        if (loader == null) {
            loader = __loaders[resource.filename] = new TreeLoader(resource, opts, solution);
            loader.process();
        }
        return loader;
    }
    ResourceLoader.loadResource = loadResource;
    function clearCache() {
        __loaders = {};
        let cacheCleaner = Configuration_1.Configuration.Instance.get('clearFileCache');
        cacheCleaner && cacheCleaner();
        return ResourceLoader;
    }
    ResourceLoader.clearCache = clearCache;
    function clearCacheSingle(filename) {
        delete __loaders[filename];
        return ResourceLoader;
    }
    ResourceLoader.clearCacheSingle = clearCacheSingle;
    function definePageForAll(name, resource) {
        (0, res_1.res_walk)(resource, res => {
            if (res.page)
                return false;
            let arr = res.inPages;
            if (arr.indexOf(name) !== -1)
                return;
            res.inPages.push(name);
        });
    }
    ResourceLoader.definePageForAll = definePageForAll;
    function tryGetCyclicRoot(resource) {
        let x = resource.parent;
        while (x != null) {
            if (x.filename === resource.filename) {
                let res = x.clone();
                res.isCyclic = true;
                return res;
            }
            x = x.parent;
        }
        return null;
    }
    ResourceLoader.tryGetCyclicRoot = tryGetCyclicRoot;
    class TreeLoader {
        constructor(resource, opts, solution) {
            this.resource = resource;
            this.opts = opts;
            this.solution = solution;
            this.promise = new atma_utils_1.class_Dfr;
        }
        process() {
            this
                .solution
                .reporter
                .print('Load ' + toMessage(this.resource.url));
            function toMessage(path) {
                let parts = path.replace(/^\/+/, '').split('/');
                let name = parts.pop();
                parts = parts.map(x => (0, color_1.color)(`bold<${x}>`));
                name = (0, color_1.color)(`green<${name}>`);
                parts.push(name);
                return parts.join('/');
            }
            if (this.resource.parent == null && this.solution.opts.mainContent) {
                this.resource.content = this.solution.opts.mainContent;
                this.processChildren();
                return;
            }
            let start = Date.now();
            let reader = Configuration_1.Configuration.Instance.get('readFile');
            reader(this.resource.filename, this.opts).then(content => {
                let end = Date.now();
                this.solution.reporter.print((0, color_1.color)(` cyan<${end - start}> ms \n`));
                this.resource.content = content;
                this.processChildren();
            }, error => {
                this.promise.reject(error);
            });
        }
        processChildren() {
            if (this.shouldSkipChildren()) {
                this.promise.resolve(this);
                return;
            }
            Parser_1.Parser
                .getDependencies(this.resource, this.solution)
                .then(result => {
                this.loadChildren(result).catch(err => {
                    this.promise.reject(err);
                });
            }, error => this.promise.reject(error));
        }
        async loadChildren(result) {
            assert(Array.isArray(result.dependencies), `Expects array of dependencies for ${this.resource.url}`);
            this.resource.meta = (0, atma_utils_1.obj_extend)(this.resource.meta, result.meta);
            this.resource.dependencies = result.dependencies;
            const deps = result.dependencies;
            const resources = await (0, alot_1.default)(deps).mapAsync(async (dep) => {
                let loader = await ResourceLoader.load(dep, this.resource, this.opts, this.solution);
                let res = loader.resource;
                dep.resource = res;
                return res;
            }).toArrayAsync({ threads: 1, errors: 'reject' });
            resources.forEach((res, i) => {
                let dep = deps[i];
                if (res.isMapped) {
                    let str = this.resource.content.replace(dep.url, res.url);
                    if (str === this.resource.content) {
                        throw new Error(`Mapped url was not replaced: ${dep.url}`);
                    }
                    this.resource.content = str;
                    dep.url = res.url;
                }
            });
            this.resource.resources.push(...resources);
            this.promise.resolve(this);
            // async_waterfall(deps, dep => {
            //     return ResourceLoader
            //         .load(dep, this.resource, this.opts, this.solution)
            //         .then(loader => {
            //             dep.resource = loader.resource;
            //             return loader.resource;
            //         });
            // })
            //     .fail(error => this.promise.reject(error))
            //     .done(resources => {
            //         this.resource.resources.push(...resources);
            //         this.promise.resolve(this);
            //     });
        }
        shouldSkipChildren() {
            let arr = this.solution.opts.parserIgnoreDependencies;
            let shouldSkip = arr.some(rgx => rgx.test(this.resource.filename));
            if (shouldSkip) {
                return true;
            }
            let meta = this.resource.meta;
            if (meta && meta.skipDependencies) {
                return true;
            }
            return false;
        }
    }
    let __loaders = {};
})(ResourceLoader || (ResourceLoader = {}));
//# sourceMappingURL=Loader.js.map
//# sourceMappingURL=Loader.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_loader_Loader === module.exports) {
        // do nothing if
    } else if (__isObj(_src_loader_Loader) && __isObj(module.exports)) {
        Object.assign(_src_loader_Loader, module.exports);
    } else {
        _src_loader_Loader = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_loader_Watcher;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_loader_Watcher != null ? _src_loader_Watcher : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Watcher = void 0;
const global_1 = _src_global;
const atma_utils_1 = require("atma-utils");
const Loader_1 = _src_loader_Loader;
const res_1 = _src_utils_res;
const path_1 = _src_utils_path;
const color_1 = _src_utils_color;
exports.Watcher = {
    watch(resource, solution) {
        return new WatcherFactory(resource, solution);
    }
};
class WatcherFactory extends atma_utils_1.class_EventEmitter {
    constructor(resource, solution) {
        super();
        this.watchers = {};
        this.changeId = 0;
        this.solution = solution;
        this.rootResource = resource;
        this.bind(resource);
    }
    bind(resource) {
        var toWatch = (0, res_1.res_flattern)(resource)
            .map(x => x.filename)
            .filter(filename => (filename in this.watchers) === false);
        toWatch.forEach(filename => this.watchers[filename] = new FileWatcher(filename, this));
        this.solution.reporter.info((0, color_1.color)(`Watching bold<cyan<${toWatch.length}>> files`));
    }
    changed(filename) {
        var changeId = ++this.changeId;
        var reporter = this.solution.reporter;
        reporter.info((0, color_1.color)(`File changed bold<cyan<${(0, path_1.path_getFile)(filename)}>>`));
        Loader_1.Loader.removeCached(filename);
        global_1.io.File.clearCache(filename);
        var resource = (0, res_1.res_find)(this.rootResource, (res) => res.filename === filename);
        if (resource == null)
            throw Error('Resource not found ' + filename);
        Loader_1.Loader
            .loadResource(resource)
            .then((resource) => {
            this.bind(resource);
            if (this.changeId === changeId) {
                this.emit('changed');
            }
        }, (error) => {
            if (this.changeId !== changeId) {
                return;
            }
            reporter.error(`Resource errored ${filename}`);
            reporter.error(error);
            reporter.log((0, color_1.color)('yellow<Watcher resumed...>'));
        });
    }
}
;
class FileWatcher {
    constructor(filename, factory) {
        this.filename = filename;
        this.factory = factory;
        new global_1.io.File(filename).watch(() => this.factory.changed(filename));
    }
}
;
//# sourceMappingURL=Watcher.js.map
//# sourceMappingURL=Watcher.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_loader_Watcher === module.exports) {
        // do nothing if
    } else if (__isObj(_src_loader_Watcher) && __isObj(module.exports)) {
        Object.assign(_src_loader_Watcher, module.exports);
    } else {
        _src_loader_Watcher = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_utils_tree;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_utils_tree != null ? _src_utils_tree : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tree_async = void 0;
const res_1 = _src_utils_res;
let tree_async;
exports.tree_async = tree_async;
(function () {
    exports.tree_async = tree_async = function (workerInfo) {
        let start = Date.now(), dfr = workerInfo.action(), reporter = workerInfo.reporter;
        dfr.done(resources => {
            let end = Date.now();
            let seconds = ((end - start) / 1000).toFixed(2);
            let treeInfo = (0, res_1.res_getTreeInfo)(resources);
            reporter
                .info(workerInfo.message(treeInfo, seconds));
            reporter
                .info(treeInfo.treeString);
        });
        return dfr;
    };
}());
//# sourceMappingURL=tree.js.map
//# sourceMappingURL=tree.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_utils_tree === module.exports) {
        // do nothing if
    } else if (__isObj(_src_utils_tree) && __isObj(module.exports)) {
        Object.assign(_src_utils_tree, module.exports);
    } else {
        _src_utils_tree = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_builder_Builder;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_builder_Builder != null ? _src_builder_Builder : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builder = void 0;
const Middlewares_1 = _src_class_Middlewares;
const path_1 = _src_utils_path;
const async_1 = _src_utils_async;
const alot = require("alot");
exports.Builder = {
    build(resources, solution) {
        return Middlewares_1._middlewares
            .run('buildResources', resources, solution)
            .then(arr => {
            resources = arr || resources;
            solution.outputResources.prepair(resources);
            return Middlewares_1._middlewares
                .run('rewriteDependencies', resources, solution)
                .then(() => rewriteDependenciesInternal(resources))
                .then(rewriteRoot)
                .then(buildOutputItems)
                .then(buildRoot)
                .then(() => solution.outputResources.getAll());
        });
        function rewriteDependenciesInternal(resources) {
            var dfrs = resources.map(resource => {
                var ext = (0, path_1.path_getExtension)(resource.url);
                var handler = solution.handlers.find(x => x.rewriter.accepts(ext));
                if (handler == null) {
                    handler = solution.handlers.find(x => x.rewriter.accepts(resource.type));
                }
                if (handler == null) {
                    throw Error('Rewriter not found for the resource: ' + resource.url);
                }
                return handler.rewriter.rewriteResource(resource);
            });
            return (0, async_1.async_whenAll)(dfrs);
        }
        function rewriteRoot() {
            return (0, async_1.async_run)(() => {
                var input = solution.outputResources.rootInput, output = solution.outputResources.rootOutput, ext = (0, path_1.path_getExtension)(input.url);
                var handler = solution.handlers.find(x => x.rewriter.accepts(input.type) || x.rewriter.accepts(ext));
                if (handler == null || handler.rewriter.rewriteRoot == null) {
                    //throw new Error(`RootRewriter is not found for a resource ${input.url} and type ${input.type}`);
                    return;
                }
                return handler.rewriter.rewriteRoot(input, output);
            });
        }
        function buildOutputItems() {
            var items = solution.outputResources.items;
            return alot(items).mapAsync(item => {
                var otherOutputItems = items.filter(x => {
                    if (x === item)
                        return false;
                    if (x.page != item.page)
                        return false;
                    if (x.bundle != item.bundle)
                        return false;
                    return true;
                });
                return buildBundle(item, otherOutputItems);
            }).toArrayAsync();
        }
        function buildBundle(outputItem, otherOutputItems) {
            return Middlewares_1._middlewares
                .run('buildBundle', outputItem, otherOutputItems)
                .then(buildBundleInternal);
        }
        function buildBundleInternal(outputItem, otherOutputItems) {
            if (outputItem.resource.content) {
                return;
            }
            var ext = (0, path_1.path_getExtension)(outputItem.resource.url);
            var handler = solution.handlers.find(x => x.builder.accepts(outputItem.type));
            if (handler == null) {
                handler = solution.handlers.find(x => x.builder.accepts(ext));
            }
            if (handler == null) {
                throw Error(`Unknown builder for type ${outputItem.type}`);
            }
            return handler.builder.createModule(outputItem, otherOutputItems);
        }
        function buildRoot() {
            var main = solution.outputResources.rootOutput;
            var dependencies = solution.outputResources.getForPage(solution.opts.mainPage);
            var ext = (0, path_1.path_getExtension)(main.url);
            var handler = solution.handlers.find(x => x.builder.accepts(main.type) || x.builder.accepts(ext));
            if (handler == null || handler.builder.buildRoot == null) {
                throw new Error(`RootBuilder is not found for a resource ${main.url} and type ${main.type}`);
            }
            return handler.builder.buildRoot(main, dependencies, solution);
        }
    }
};
//# sourceMappingURL=Builder.js.map
//# sourceMappingURL=Builder.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_builder_Builder === module.exports) {
        // do nothing if
    } else if (__isObj(_src_builder_Builder) && __isObj(module.exports)) {
        Object.assign(_src_builder_Builder, module.exports);
    } else {
        _src_builder_Builder = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_Bundler;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_Bundler != null ? _src_Bundler : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bundler = void 0;
const Watcher_1 = _src_loader_Watcher;
const Middlewares_1 = _src_class_Middlewares;
const Parser_1 = _src_parser_Parser;
const Resource_1 = _src_class_Resource;
const AssetsManager_1 = _src_assets_AssetsManager;
const Loader_1 = _src_loader_Loader;
const atma_utils_1 = require("atma-utils");
const Solution_1 = _src_class_Solution;
const global_1 = _src_global;
const Configuration_1 = _src_config_Configuration;
const res_1 = _src_utils_res;
const tree_1 = _src_utils_tree;
const Builder_1 = _src_builder_Builder;
const color_1 = _src_utils_color;
class Bundler extends atma_utils_1.class_EventEmitter {
    constructor(path, opts) {
        super();
        global.__$bundler = this;
        this.solution = new Solution_1.Solution(path, opts);
    }
    static clearCache() {
        Loader_1.Loader.clearCache();
        if (global_1.io.File.middleware) {
            for (let key in global_1.io.File.middleware) {
                let midd = global_1.io.File.middleware[key];
                if (midd.clearTemp) {
                    midd.clearTemp();
                }
            }
        }
        return Bundler;
    }
    static get Config() {
        return Configuration_1.Configuration.Instance;
    }
    getResourceTree(opts) {
        var solution = this.solution, type = solution.opts.type, path = solution.path;
        return Loader_1.Loader
            .load(type, path, opts, solution)
            .then(x => x.toJSON());
    }
    static getResourceTree(path, opts) {
        return new Bundler(path, opts).getResourceTree();
    }
    getResources(opts) {
        var solution = this.solution, type = solution.opts.type, path = solution.path;
        return Loader_1.Loader.load(type, path, opts, solution).then(resource => {
            return (0, res_1.res_flattern)(resource, solution.opts.dependencies).map(x => x);
        });
    }
    static getResources(path, opts) {
        return new Bundler(path, opts).getResources();
    }
    build(opts) {
        var solution = this.solution, type = solution.opts.type, path = solution.path, shouldRebuild = false, isBuilding = false, isRebuilding = false, rootResource = null, self = this;
        function build(resource) {
            isBuilding = true;
            var resources = (0, res_1.res_flattern)(resource, solution.opts.dependencies);
            return (0, tree_1.tree_async)({
                resources,
                reporter: solution.reporter,
                action: () => Builder_1.Builder.build(resources, solution),
                message: (treeInfo, seconds) => (0, color_1.color)(`Created bold<yellow<${treeInfo.count}>> files in bold<yellow<${seconds}>> sec.`)
            }).done(buildComplete).fail(buildFailed);
        }
        function buildComplete(resources) {
            isBuilding = false;
            if (shouldRebuild) {
                shouldRebuild = false;
                isRebuilding = true;
                build(rootResource);
                return;
            }
            if (isRebuilding) {
                isRebuilding = false;
                self.emit('rebuild', resources);
            }
        }
        function buildFailed(error) {
            isBuilding = false;
            if (isRebuilding) {
                solution.reporter.error((0, color_1.color)('red<Build Failed>'));
                solution.reporter.error(error);
                isRebuilding = false;
            }
            if (shouldRebuild) {
                shouldRebuild = false;
                isRebuilding = true;
                build(rootResource);
                return;
            }
        }
        function rebuild() {
            if (isBuilding) {
                shouldRebuild = true;
                return;
            }
            isRebuilding = true;
            solution.iteration = {};
            build(rootResource);
        }
        function start() {
            return Loader_1.Loader
                .load(type, path, opts, solution)
                .then(resource => {
                rootResource = resource;
                if (opts && opts.watch === true) {
                    Watcher_1.Watcher
                        .watch(resource, solution)
                        .on('changed', rebuild);
                }
                return build(resource)
                    .then((result) => solution.onBuildReady(result))
                    .then((result) => solution.runScripts('postbuild', result));
            });
        }
        return solution
            .runScripts('prebuild')
            .then(start);
    }
    static build(path, opts) {
        return new Bundler(path, opts).build(opts);
    }
    static process(path, opts) {
        var bundler = new Bundler(path, opts);
        var solution = bundler.solution;
        function builderComplete(resources) {
            resources.forEach(res => {
                global_1.io.File.write(res.filename, res.content);
            });
            return solution
                .assetsManager
                .flush()
                .then(() => {
                return Promise.resolve(solution);
            });
        }
        if (opts && opts.watch === true) {
            bundler.on('rebuild', builderComplete);
        }
        return bundler
            .build(opts)
            .then(builderComplete);
    }
    defineMiddleware(name, fn) {
        Middlewares_1._middlewares.define(name, fn);
    }
    static get Parser() {
        return {
            getDependencies(content, opts = { type: 'js' }) {
                if (typeof opts === 'string')
                    opts = { type: opts };
                var solution = new Solution_1.Solution('', opts);
                var resource = new Resource_1.Resource({ type: opts.type, content: content }, null, solution);
                return Parser_1.Parser.getDependencies(resource, solution);
            }
        };
    }
    static get io() {
        return global_1.io;
    }
    static get AssetsManager() { return AssetsManager_1.AssetsManager; }
    static get Resource() { return Resource_1.Resource; }
    static get Solution() { return Solution_1.Solution; }
}
exports.Bundler = Bundler;
;
//# sourceMappingURL=Bundler.js.map
//# sourceMappingURL=Bundler.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_Bundler === module.exports) {
        // do nothing if
    } else if (__isObj(_src_Bundler) && __isObj(module.exports)) {
        Object.assign(_src_Bundler, module.exports);
    } else {
        _src_Bundler = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_config_MultiBundle;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_config_MultiBundle != null ? _src_config_MultiBundle : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureBundlesConfig = void 0;
const atma_utils_1 = require("atma-utils");
const obj_1 = _src_utils_obj;
function ensureBundlesConfig(config) {
    if (isMultiConfig(config)) {
        let common = config.common || {};
        let bundles = Object.keys(config.apps)
            .filter(name => {
            return config.app == null || config.app.includes(name);
        })
            .map(name => {
            let obj = { name };
            (0, obj_1.obj_deepExtend)(obj, JSON.parse(JSON.stringify(common)));
            (0, obj_1.obj_deepExtend)(obj, config.apps[name]);
            for (let key in config) {
                if (key === 'apps' || key === 'common') {
                    continue;
                }
                let prop = key;
                let dot = prop.indexOf('.');
                if (dot === -1) {
                    obj[prop] = config[prop];
                    continue;
                }
                let hostName = key.substring(0, dot);
                if (hostName in config.apps) {
                    if (hostName !== name) {
                        continue;
                    }
                    prop = prop.substring(dot + 1);
                }
                (0, atma_utils_1.obj_setProperty)(obj, prop, config[key]);
            }
            return obj;
        });
        return bundles;
    }
    return [config];
}
exports.ensureBundlesConfig = ensureBundlesConfig;
function isMultiConfig(config) {
    return config.apps != null;
}
//# sourceMappingURL=MultiBundle.js.map
//# sourceMappingURL=MultiBundle.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_config_MultiBundle === module.exports) {
        // do nothing if
    } else if (__isObj(_src_config_MultiBundle) && __isObj(module.exports)) {
        Object.assign(_src_config_MultiBundle, module.exports);
    } else {
        _src_config_MultiBundle = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js


// source ./ModuleSimplified.js
var _src_Runner;
(function () {
    // ensure AMD is not active for the model, so that any UMD exports as commonjs
    var define = null;
    var exports = _src_Runner != null ? _src_Runner : {};
    var module = { exports: exports };

    "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Runner = void 0;
const Bundler_1 = _src_Bundler;
const MultiBundle_1 = _src_config_MultiBundle;
function mainBundlerFunction(path, opts) {
    return Bundler_1.Bundler.process(path, opts);
}
var Runner;
(function (Runner) {
    function run(config, bundleFn = mainBundlerFunction) {
        let bundles = (0, MultiBundle_1.ensureBundlesConfig)(config);
        return processMany(bundles, bundleFn);
    }
    Runner.run = run;
    function processMany(bundles, bundleFn) {
        let i = -1, imax = bundles.length, hasWatcher = bundles.some(x => x.watch), results = [];
        return new Promise((resolve, reject) => {
            next();
            function next() {
                if (++i >= imax) {
                    console.log('All done');
                    resolve(results);
                    return;
                }
                let bundle = bundles[i];
                processSingle(bundle, bundleFn).then(function onComplete(val) {
                    let result = {
                        name: bundle.name || bundle.file,
                        result: val
                    };
                    results.push(result);
                    console.log(`Ready ${result.name}`);
                    next();
                }, function onError(error) {
                    let result = {
                        name: bundle.name || bundle.file,
                        error: error
                    };
                    console.error(`Failed ${result.name}`);
                    console.error(error);
                    results.push(result);
                    next();
                });
            }
        });
    }
    function processSingle(config, bundleFn) {
        validate(config);
        let path = config.file, opts = config;
        //** Caution: rewrite passing options to middleware not via globals */
        global.config = config.settings;
        if (opts.middlewares) {
            Bundler_1.Bundler.Config.define('middlewares', opts.middlewares);
        }
        Bundler_1.Bundler.clearCache();
        if (opts.configuration) {
            var Configurator = require(config.configuration);
            return Configurator.process(Bundler_1.Bundler).then(() => {
                return bundleFn(path, opts);
            });
        }
        return bundleFn(path, opts);
    }
    function validate(config) {
        if (!config.file) {
            throw new Error('`file` property should contain path to the main entry point of the app');
        }
    }
})(Runner = exports.Runner || (exports.Runner = {}));
//# sourceMappingURL=Runner.js.map
//# sourceMappingURL=Runner.ts.map;

    function __isObj(x) {
        return x != null && typeof x === 'object' && x.constructor === Object;
    }
    if (_src_Runner === module.exports) {
        // do nothing if
    } else if (__isObj(_src_Runner) && __isObj(module.exports)) {
        Object.assign(_src_Runner, module.exports);
    } else {
        _src_Runner = module.exports;
    }

    ;
}());

// end:source ./ModuleSimplified.js

"use strict";
const appcfg_1 = require("appcfg");
const Runner_1 = _src_Runner;
var Config;
(function (Config) {
    async function doLoad(sources) {
        try {
            let config = await appcfg_1.default.fetch(sources);
            return config.toJSON();
        }
        catch (error) {
            console.error('Configuration error', error.message);
            process.exit(1);
        }
    }
    async function load() {
        let json = await doLoad([{
                path: 'package.json',
                getterProperty: 'app-bundler',
                optional: true
            }]);
        if (json.config) {
            return await doLoad([{ path: json.config }]);
        }
        return json;
    }
    Config.load = load;
})(Config || (Config = {}));
module.exports = async function run() {
    let config = await Config.load();
    return Runner_1.Runner.run(config);
};
//# sourceMappingURL=cli.js.map
//# sourceMappingURL=cli.ts.map