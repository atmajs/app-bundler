
var __register, __require, require;

(function(){

    // import ./path.js

    var __global = typeof global !== 'undefined' && global ? global : window;
    var __nativeRequire = __global.require || require;
    var __originalRequire = function (path_) {
        var path = typeof include !== 'undefined' && typeof include.resolvePath === 'function'
            ? include.resolvePath(path_)
            : path_resolveUrl(path_, this.location);

        if (modules[path]) {
            return modules[path].runOnce();
        }
        var pathWithoutExt = path.replace(/\\.\\w+$/, '').toLowerCase();
        for (var key in modules) {
            var $pathWithoutExt = key.replace(/\\.\\w+$/, '').toLowerCase();
            if ($pathWithoutExt === pathWithoutExt) {
                let module = modules[path] = modules[key];
                return module.runOnce();
            }
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

    if (__global.require != null) {
        __global.require = __require;
    }
}());
