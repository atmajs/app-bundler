import { BaseScriptBuilder } from "../base/BaseScriptBuilder";
import { OutputItem } from "../../../class/OutputResources";
import { Resource } from "../../../class/Resource";
import { Builder } from './Builder';
import { Templates } from '../common-js/templates/Templates';
import { IImporterOptions } from './ModuleFile';

export class ImportJsBuilder extends BaseScriptBuilder {

    buildRoot(outputRoot: Resource, outputDependencies) {
        outputDependencies.forEach(x => x.embed = true);

        Builder.clearCache();

        let root = outputRoot.source;        
        let module = Builder.getModuleFromResource(root);
        let $package = this.solution.opts.package;
        let options = $package.import || new IImporterOptions;
        options.wrapper = $package.moduleWrapper as any;

        let body = Builder.build(module, options);

		switch (options.wrapper) {
			case 'custom':
				body = this.wrapWithCustom(body);
				break;
            case 'script':
            case 'iif':
                break;
            default:
				throw new Error(`Unsupported module wrapper "${options.wrapper}" for import`);
		}
        outputRoot.content = body;
    }

	wrapModule (resource: Resource, outputItem: OutputItem) {
        return resource.content;
        // let content = resource.content;
        // let newLine = u_getNewLine(content, io);
        // // normalize exports
        // if (resource.meta.import.exports) {
        //     resource.meta.import.exports.reverse().forEach(x => {
        //         switch (x.type) {
        //             case 'const': 
        //                 console.log(content, '<< content')
        //                 content = String.replace(content, x.position, x.length, x.ref);
        //                 console.log(content, '<< after')
        //                 break;
        //             case 'function': 
        //                 content = String.replace(content, x.position, x.length, `${x.ref} = function `);
        //                 break;
        //         }
        //     });
        // }
        // // remove imports
        // if (resource.meta.import.imports) {
        //     resource.meta.import.imports.reverse().forEach(x => {
        //         content = String.replace(content, x.position, x.length, '');
        //     });
        // }

        // if (resource.meta.import.exports) {
        //     let externalRefs = '';
        //     if (resource.meta.import.exports.length > 0) {
        //         externalRefs = resource.meta.import.exports.reverse().map(x => `    ${x.ref}`).join(`,${newLine}`);
        //         externalRefs = String.replace(externalRefs, 0, 3, 'var');
        //         externalRefs += ';';
        //     }
        // }
        
        // return resource.content = content;


		// let { content, dependencies } = resource;
		// let offset = 0;
		
		// dependencies && dependencies.filter(x => x.pos != null && path_isRelative(x.url)).forEach(dep => {
			
		// 	let resUrl = new class_Uri(resource.url);
		// 	let resDep = new class_Uri(dep.url);
			
			
		// 	let url = resUrl.combine(resDep as any).toLocalFile();

		// 	let start = dep.pos + offset + 1;
		// 	let c = content[start - 1];
		// 	let end = content.indexOf(c, start);

		// 	let oldLength = end - start;
		// 	let newLength = url.length;

		// 	content = content.substring(0, start) + url + content.substring(end);
		// 	offset += newLength - oldLength;
		// })

		// return content;
	}
	
	accepts (resource: Resource) {	
        if (resource.type !== 'js')  {
            return false;
        }
        let module = resource.getModule();
        if (module === 'root' && resource.solution.opts.package.module === 'import') {
            module = 'import';
        }        
        return module === 'import';
    }
    
    
	wrapWithCustom (body) {
		let opts = this.solution.opts.package;
		let template = Templates.load(opts.moduleWrapperCustomPath);
		
		return template
			.replace('/**MODULE**/', () => body)
			;
	}
};

