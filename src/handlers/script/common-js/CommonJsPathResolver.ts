import { BasePathResolver } from '../../base/BasePathResolver';
import { Npm } from '../../../utils/npm';

export class CommonJsPathResolver extends BasePathResolver {

    accepts (includeData) {
        if (includeData.type !== 'js' || includeData.module !== 'commonjs') {
            return false;
        }
        if (!/^[\w\-_\$/]+$/.test(includeData.url)) {
            return false;
        }
        if (nodeCoreModules.includes(includeData.url)) {
            return false;
        }

        return true;
    }

    resolve (includeData, parentResource) {
        let filename = Npm.resolveAppUrl(includeData.url, parentResource.directory, this.solution.opts);
        if (filename) {
            let url = this.solution.opts.toAppUrl(filename);
            this.solution.opts.mappings[includeData.url] = url;
        }
        return filename;
    }
};


const nodeCoreModules = [
    'assert', 'buffer', 'child_process', 'cluster', 'console', 'constants',
    'crypto', 'dgram', 'dns', 'domain', 'events', 'fs', 'http', 'https', 'module', 'net', 'os', 'path',
    'process', 'punycode', 'querystring', 'readline', 'repl', 'stream', 'string_decoder', 'sys', 'timers',
    'tls', 'tty', 'url', 'util', 'vm', 'zlib'
];
