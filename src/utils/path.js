var path_getDir,
	path_getFile,
	path_getExtension,
	path_resolveCurrent,
	path_normalize,
	path_resolveUrl,
	path_combine,
	path_isRelative,
	path_toRelative,
	path_appendQuery,
	path_toAbsolute
	;
(function(){
	var isWeb = true;

	path_getDir = function(path) {
		return path.substring(0, path.lastIndexOf('/') + 1);
	};
	path_getFile = function(path) {
		path = path
			.replace('file://', '')
			.replace(/\\/g, '/')
			.replace(/\?[^\n]+$/, '');

		if (/^\/\w+:\/[^\/]/i.test(path)){
			// win32 drive
			return path.substring(1);
		}
		return path;
	};
	path_getExtension = function(path) {
		var query = path.indexOf('?');
		if (query !== -1) {
			path = path.substring(0, query);
		}
		var match = rgx_EXT.exec(path);
		return match == null ? '' : match[1];
	};

	path_appendQuery = function(path, key, val){
		var conjunctor = path.indexOf('?') === -1 ? '?' : '&';
		return path + conjunctor + key + '=' + val;
	};

	(function(){
		var current_;
		path_resolveCurrent = function(){
			if (current_ != null) return current_;
			return (current_ = path_win32Normalize(process.cwd()));
		};
	}());


	path_normalize = function(path) {
		var path_ = path
			.replace(/\\/g, '/')
			// remove double slashes, but not near protocol
			.replace(/([^:\/])\/{2,}/g, '$1/')
			// './xx' to relative string
			.replace(/^\.\//, '')
			// join 'xx/./xx'
			.replace(/\/\.\//g, '/')
			;
		return path_collapse(path_);
	};
	path_resolveUrl = function(path, base) {
		var url = path_normalize(path);
		if (path_isRelative(url)) {
			return path_normalize(path_combine(base || path_resolveCurrent(), url));
		}
		if (rgx_PROTOCOL.test(url))
			return url;

		if (url.charCodeAt(0) === 47 /*/*/) {
			
		}
		return url;
	};
	path_isRelative = function(path) {
		return rgx_PROTOCOL.test(path) === false;
	};
	path_toRelative = function(path, anchor, base){
		var path_     = path_resolveUrl(path_normalize(path), base),
			absolute_ = path_resolveUrl(path_normalize(anchor), base);

		if (path_getExtension(absolute_) !== '') {
			absolute_ = path_getDir(absolute_);
		}
		absolute_ = path_combine(absolute_, '/');
		if (path_.toUpperCase().indexOf(absolute_.toUpperCase()) === 0) {
			return path_.substring(absolute_.length);
		} else {
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
				sub += '../'
			}
		}
		return path;
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

	(function(){
		path_toAbsolute = function(path, parentLocation, rootLocation){
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
		};

		var _cwd;
		function cwd() {
			return _cwd || (_cwd = path_normalize(process.cwd()));
		}
	}());

	var rgx_PROTOCOL = /^(file|https?):/i,
		rgx_SUB_DIR  = /[^\/\.]+\/\.\.\//,
		rgx_FILENAME = /\/[^\/]+\.\w+(\?.*)?(#.*)?$/,
		rgx_EXT      = /\.(\w+)$/,
		rgx_win32Drive = /(^\/?\w{1}:)(\/|$)/
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
