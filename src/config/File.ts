import memd from 'memd';
import axios from 'axios';
import { io } from '../global'

export const FileActions = {
    readFile (path: string, opts) {
        if (/^https?:/.test(path)) {
            return HttpLoader.load(path, opts);
        }
        return io.File.readAsync(path, opts)
    },
    async readDirectory (path: string, opts) {

        let i = path.indexOf('*');
        let patternI = path.lastIndexOf('/', i);
        if (patternI === -1) {
            throw new Error(`Invalid glob pattern: ${path}`);
        }
        let pattern = path.substring(patternI + 1);
        let directory  = path.substring(0, patternI + 1)
        let files = await io.Directory.readFiles(directory, pattern);
        let paths = files.map(x => x.uri.toString());
        return paths;
    },
    writeFile (path: string, content: string, opts){
        return io.File.writeAsync(path, content, opts);
    },
    clearFileCache () {
        io.File.clearCache();
    }
};


class HttpLoader {
    @memd.deco.memoize()
    static async load (url: string, opts?) {
        let resp = await axios.get(url);
        if (resp.status !== 200) {
            throw new Error(`Network error ${resp.status} for a file ${url}`);
        }
        if (typeof resp.data !== 'string') {
            throw new Error(`Expects text content from ${url}`);
        }
        return resp.data;
    }
}
