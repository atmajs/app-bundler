import { path_combine } from './path';
import { io } from '../global'

export namespace Npm {
    export function resolveAppUrl (path: string, currentLocation: string, base: string) {

        let name = /^(@?[^\\\/]+)/.exec(path)[0];
        let resource = path.substring(name.length + 1);
        while (path != null) {
            let dirname = path_combine(currentLocation, 'node_modules', name);
            let pckg = path_combine(dirname, 'package.json');
            if (io.File.exists(pckg)) {

                let main = resource;
                if (main === '') {
                    let json = io.File.read(pckg);
                    if (json) {
                        main = json.main;
                    }
                }
                if (main) {
                    let filename = combineMain(dirname, main);
                    if (base) {
                        if (base.endsWith('/') === false) {
                            // Base path must be a folder
                            base += '/';
                        }
                        // in-case CWD path is not equal to BASE path, make sure resolved FS module path is relative to BASE folder
                        let relative = io.env.currentDir.toRelativeString(base);
                        if (relative) {
                            filename = path_combine(relative, filename);
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


    function combineMain (directory, filename) {
        if (filename == null) {
            filename = 'index.js';
        }


        let path = path_combine(directory, filename);
        if (hasExt(path) === false) {
            let likelyTs = path.includes('/src/');
            if (likelyTs) {
                if (io.File.exists(path + '.ts')) {
                    return path + '.ts';
                }
            }
            path += '.js';
        }

        if (io.File.exists(path)) {
            return path;
        }
        console.log(`Entry File does not exist: ${filename}`);
    }
    function hasExt(path) {
        return /\.[\w]{1,8}($|\?|#)/.test(path);
    }
}
