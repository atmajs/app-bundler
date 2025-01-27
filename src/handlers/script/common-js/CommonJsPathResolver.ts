import { BasePathResolver } from '../../base/BasePathResolver';
import { path_combine } from '../../../utils/path';
import { io } from '../../../global'
import { Npm } from '../../../utils/npm';

export class CommonJsPathResolver extends BasePathResolver {

    accepts (includeData) {
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

// function nodeModuleResolve(path, location_){
//     let location = location_.replace(/[\\\/]+$/, '');
//     let name = /^([\w\-]+)/.exec(path)[0];
//     let resource = path.substring(name.length + 1);
//     let current = location;
//     let root_ = current + '/node_modules/' + name + '/';
//     while (true)  {
//         let nodeModules = path_combine(current, '/node_modules/' + name + '/');
//         let pkg = nodeModules + 'package.json';
//         if (io.File.exists(pkg) === false) {
//             let next = current.replace(/[^\/\\]+[\/\\]?$/, '');
//             if (next === current) {
//                 return root_ + 'package.json';
//             }
//             current = next;
//             continue;
//         }
//         if (resource) {
//             let path = nodeModules + resource;
//             if (hasExt(path) === false) {
//                 let likelyTs = path.includes('/src/');
//                 if (likelyTs) {
//                     if (io.File.exists(path + '.ts')) {
//                         return path + '.ts';
//                     }
//                 }
//                 return path + '.js';
//             }
//             return path;
//         }
//         let json = io.File.read(pkg);
//         if (typeof json === 'string') {
//             json = JSON.parse(json);
//         }

//         if (json.main) {
//             return path_combine(nodeModules, json.main)
//         }

//         return nodeModules + 'index.js';
//     }
// }
// function hasExt(path) {
//     return /\.[\w]{1,8}($|\?)/.test(path);
// }
