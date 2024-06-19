let isWeb = true;

export function path_getDir(path) {
    return path.substring(0, path.lastIndexOf('/') + 1);
};
export function path_getFile(path) {
    path = path
        .replace('file://', '')
        .replace(/\\/g, '/')
        .replace(/\?[^\n]+$/, '');

    if (/^\/\w+:\/[^\/]/i.test(path)) {
        // win32 drive
        return path.substring(1);
    }
    return path;
};
export function path_getExtension(path: string) {
    let query = path.indexOf('?');
    if (query !== -1) {
        path = path.substring(0, query);
    }
    let match = rgx_EXT.exec(path);
    return match == null ? '' : match[1];
};

export function path_appendQuery(path: string, key: string, val: string) {
    let conjunctor = path.indexOf('?') === -1 ? '?' : '&';
    return path + conjunctor + key + '=' + val;
};

export function path_withProtocol(path: string) {
    return /^\/\/|^file:|^https?:|^ftps?:/i.test(path);
};


let current_: string;

export function path_resolveCurrent() {
    if (current_ != null) return current_;
    return (current_ = path_win32Normalize(process.cwd()));
};



export function path_normalize(path) {
    let path_ = path
        .replace(/\\/g, '/')
        // remove double slashes, but not near protocol
        .replace(/([^:\/])\/{2,}/g, '$1/')
        // './xx' to relative string
        .replace(/^\.\//, '')
        // join 'xx/./xx'
        .replace(/\/\.\//g, '/')
        ;

    // use triple slashes by file protocol
    if (/^file:\/\/[^\/]/.test(path_)) {
        path_ = path_.replace('file://', 'file:///');
    }
    return path_collapse(path_);
};
export function path_resolveUrl(path, base) {
    let url = path_normalize(path);
    if (path_isRelative(url)) {
        return path_normalize(path_combine(base || path_resolveCurrent(), url));
    }
    if (rgx_PROTOCOL.test(url))
        return url;

    if (url.charCodeAt(0) === 47 /*/*/) {

    }
    return url;
};
export function path_isRelative(path) {
    return rgx_PROTOCOL.test(path) === false;
};
export function path_toRelative(path: string, anchor: string, base?: string) {

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
    } else {
        let sub = '../';
        while (true) {
            let folder = absolute_.replace(/[^\/]+\/?$/, '');
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

export function path_combine(...args: string[]) {
    let out = '';
    let imax = args.length;
    let i = -1, x;
    while (++i < imax) {
        x = args[i];
        if (!x) continue;

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

export function path_sliceHash(url) {
    if (url == null) {
        return null;
    }
    let i = url.indexOf('#');
    if (i === -1) {
        return null;
    }
    return url.substring(i);
};
export function path_sliceQuery(url) {
    if (url == null) {
        return null;
    }
    let i = url.indexOf('?');
    if (i === -1) {
        return null;
    }
    return url.substring(i);
};
export function path_removeQuery(url) {
    if (url == null) {
        return null;
    }
    let i = url.indexOf('#');
    if (i !== -1) {
        url = url.substring(0, i);
    }
    i = url.indexOf('?');
    if (i !== -1) {
        url = url.substring(0, i);
    }
    return url;
};

export function path_changeExtension (path: string, ext: string) {
    let str = ext ? '.' + ext : '';
    let i = path.indexOf('.');
    if (i === -1) {
        return path + str;
    }
    return path.substring(0, i) + str;
}


export function path_toAbsolute(path, parentLocation?, rootLocation?) {
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

let _cwd;
function cwd() {
    return _cwd || (_cwd = path_normalize(process.cwd()));
}


let rgx_PROTOCOL = /^(file|https?):/i,
    rgx_SUB_DIR = /[^\/\.]+\/\.\.\//,
    rgx_FILENAME = /\/[^\/]+\.\w+(\?.*)?(#.*)?$/,
    rgx_EXT = /\.(\w+)$/,
    rgx_win32Drive = /(^\/?\w{1}:)(\/|$)/
    ;

function path_win32Normalize(path) {
    path = path_normalize(path);
    if (path.substring(0, 5) === 'file:')
        return path;

    return 'file://' + path;
}

function path_collapse(url_) {
    let url = url_;
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
