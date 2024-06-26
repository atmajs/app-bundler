
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
    			.replace(new RegExp("\\\\", "g"), '/')
    			// remove double slashes, but not near protocol
    			.replace(new RegExp("([^:\\/])\\/{2,}", "g"), '$1/')
    			// './xx' to relative string
    			.replace(new RegExp("^\\.\\/"), '')
    			// join 'xx/./xx'
    			.replace(new RegExp("\\/\\.\\//", "g"), '/')
    			;
    		path_ = path_collapse(path_);		
    		return path_;
    	};
    	path_resolveUrl = function(path, location) {
    		if (/\.\w+$/.test(path) === false) {
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
    		rgx_SUB_DIR  = new RegExp("[^\\/\\.]+/\\.\\.\\/"),
    		rgx_FILENAME = new RegExp("\\/[^\\/]+\\.\\w+(\\?.*)?(#.*)?$"),
    		rgx_EXT      = new RegExp("\\.(\\w+)$"),
    		rgx_win32Drive = new RegExp("(^\\/?\\w{1}:)(\\/|$)")
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
    var __nativeRequire = __global.require || require;
    var __originalRequire = function (path_) {
        var location = this.location;
        var path = path_resolveUrl(path_, location);

        if (modules[path]) {
            return modules[path].runOnce();
        }
        var pathWithoutExt = path.replace(/\.\w+$/, '').toLowerCase();
        for (var key in modules) {
            var $pathWithoutExt = key.replace(/\.\w+$/, '').toLowerCase();
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

    __require =__originalRequire.bind({ location: path_getDir(path_resolveUrl('/index.html')) });

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

// source ./Module.js
__register("/script/b.js", function(require, module, exports, __filename, __dirname){
	module.exports = {
    b: 'is-b'
};

	
});

// end:source ./Module.js

let b = require('/script/b');

var Test = {
    b,
    a: 'is-a'
};