import { ModuleFile } from './ModuleFile';
import * as io from 'atma-io'
import { ImportNode, ExportNode } from '../../../class/ResourceInfo';

declare type File = InstanceType<typeof io.File>;

let Rgx = {
    Imports: {
        full: {
            rgx: /^[ \t]*import\s*(\*\s+as\s+\w+\s+from\s+)?['"](?<path>[^'"]+)['"][\t ;]*[\r\n]{0,2}/gm,
            map (match: RegExpMatchArray) {
                let $import = new ImportNode();
                $import.position = match.index;
                $import.length = match[0].length;
                $import.type = 'full';
                $import.path = match.groups.path;
                return $import;
            }
        },
        refs: {
            rgx: /^[ \t]*import\s*\{([^}]+)}\s*from\s*['"]([^'"]+)['"][\t ;]*[\r\n]{0,2}/gm,
            map (match: RegExpMatchArray) {
                let $import = new ImportNode();
                $import.position = match.index;
                $import.length = match[0].length;
                $import.type = 'refs';
                $import.path = match[2];
                $import.refs = match[1].split(',').map(x => x.trim());
                return $import;
            }
        },
        defaults: {
            rgx: /^[ \t]*import\s+(?<def>\w+)\s+from\s*['"](?<path>[^'"]+)['"][\t ;]*[\r\n]{0,2}/gm,
            map(match) {
                let $import = new ImportNode();
                $import.position = match.index;
                $import.length = match[0].length;
                $import.type = 'full';
                $import.path = match.groups.path;
                return $import;
            }
        },
        exportAll: {
            rgx: /^[ \t]*export\s+\*\s+from\s*['"]([^'"]+)['"][\t ;]*[\r\n]{0,2}/gm,
            map (match: RegExpMatchArray) {
                let $import = new ImportNode();
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
            map (match: RegExpMatchArray) {
                let $import = new ImportNode();
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
            map (match: RegExpMatchArray) {
                let $export = new ExportNode();
                $export.position = match.index;
                $export.length = match[0].length;
                $export.type = 'ref';
                $export.ref = match[2];
                return $export;
            }
        },
        named: {
            rgx: /^[ \t]*export\s*(const|let|var)\s+([\w\d_$]+)(?=\s*[;])/gm,
            map (match: RegExpMatchArray) {
                let $export = new ExportNode();
                $export.position = match.index;
                $export.length = match[0].length;
                $export.type = 'named';
                $export.ref = match[2];
                return $export;
            }
        },
        scoped: {
            rgx: /^[ \t]*export\s*\{([^}]+)}\s*;?(?!\s*from)/gm,
            map (match: RegExpMatchArray) {
                let refs = match[1].split(',').map(x => x.trim());
                let $export = new ExportNode();
                $export.position = match.index;
                $export.length = match[0].length;
                $export.type = 'scoped';
                $export.ref = refs[0];

                let other = refs.slice(1).map(ref => {
                    let $export = new ExportNode();
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
            map (match: RegExpMatchArray) {
                let $export = new ExportNode();
                $export.position = match.index;
                $export.length = match[0].length;
                $export.type = 'function';
                $export.ref = match[1];
                return $export;
            }
        }
    }
}

export class Parser {
    static supports (content: string) {
        for (let type in Rgx) {
            for (let key in Rgx[type]) {
                let rgx = Rgx[type][key].rgx as RegExp;
                rgx.lastIndex = 0
                if (rgx.test(content)) {
                    return true;
                }
            }
        }
        return false;
    }
    static parse (content: string, file: File): ModuleFile {
        let module = new ModuleFile(content, file);
        if (Parser.supports(content) === false) {
            return module;
        }
        for (let key in Rgx.Imports) {
            let x = <{rgx: RegExp, map: (...args) => ImportNode}> Rgx.Imports[key];
            x.rgx.lastIndex = 0;
            for (let match = x.rgx.exec(content); match != null; match = x.rgx.exec(content)) {
                let result = x.map(match, content);
                if (Array.isArray(result)) {
                    module.imports.push(...result);
                } else {
                    module.imports.push(result);
                }
            }
        }
        for (let key in Rgx.Exports) {
            let x = <{rgx: RegExp, map: (...args) => ExportNode}> Rgx.Exports[key];
            x.rgx.lastIndex = 0;
            for (let match = x.rgx.exec(content); match != null; match = x.rgx.exec(content)) {
                let result = x.map(match, content);
                if (Array.isArray(result)) {
                    module.exports.push(...result);
                } else {
                    module.exports.push(result);
                }
            }
        }

        module.imports.forEach(m => m.parent = module);
        module.imports.filter(x => x.type === 'exportRefs').forEach(imp => {
            imp.refs.forEach(ref => {
                let exp = new ExportNode();
                exp.position = 0;
                exp.length = 0;
                exp.ref = ref;
                module.exports.push(exp);
            })

        });

        module.imports.sort((a, b) => a.position < b.position ? -1 : 1);
        module.exports.sort((a, b) => a.position < b.position ? -1 : 1);
        return module;
    }
}

