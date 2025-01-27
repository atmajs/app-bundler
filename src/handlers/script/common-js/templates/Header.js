
var __register, __require, require;

(function(){

    // import ./path.js

    var __global = typeof global !== 'undefined' && global ? global : window;
    var __nativeRequire = __global.require || require;
    var __bundlerRequire = function (path_) {
        var arr = [
            path_resolveUrl(path_, this.location)
        ];
        if (typeof include !== 'undefined' && typeof include.resolvePath === 'function') {
            arr.push(include.resolvePath(path_));
        }
        if (/^[@\\w]/.test(path_)) {
            arr.push(path_);
        }
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] in modules) {
                return modules[arr[i]].runOnce();
            }
        }

        for (var key in modules) {
            var $pathWithoutExt = key.replace(/\\.\\w+$/, '').toLowerCase();
            for (var i = 0; i < arr.length; i++) {
                var path = arr[i];
                var pathWithoutExt = path.replace(/\\.\\w+$/, '').toLowerCase();
                if ($pathWithoutExt === pathWithoutExt) {
                    let module = modules[path] = modules[key];
                    return module.runOnce();
                }
            }
        }

        return __nativeRequire(path_);
    };

    __register = function (path, aliases, factory) {
        var filename = path_resolveUrl(path);
        var module = new Module(filename, factory);
        modules[filename] = module;
        if (aliases) {
            aliases.forEach(alias => {
                modules[alias] = module;
            })
        }
    };

    __require =__bundlerRequire.bind({ location: path_getDir(path_resolveUrl('%ROOT_DIR%')) });

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
        var require = __bundlerRequire.bind({
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
