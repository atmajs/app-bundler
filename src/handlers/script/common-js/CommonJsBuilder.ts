import { BaseHandler } from '../../base/BaseHandler';
import { CommonJsBuilderSimplified } from './CommonJsBuilderSimplified';
import { Solution } from '../../../class/Solution';
import { Templates } from './templates/Templates';
import { BaseScriptBuilder, IBaseScriptBuilderOpts } from '../base/BaseScriptBuilder';
import { Resource } from '../../../class/Resource';
import { OutputResources, OutputItem } from '../../../class/OutputResources';
import { template_stringifyContent, template_interpolate } from '../../../utils/template';
import { ModuleWrapper } from './ModuleWrapper';

export class CommonJsBuilder extends BaseScriptBuilder {

    constructor(public solution: Solution, public handler: BaseHandler) {
        super(solution, handler);


        let opts = this.solution.opts.package.commonjs;
        if (opts && opts.output === 'simplified') {
            this.wrapModule = CommonJsBuilderSimplified.wrapModule;
            this.getRootContent = CommonJsBuilderSimplified.getRootContent;
            this.getHeaderContent = CommonJsBuilderSimplified.getHeaderContent;
        }
    }

    accepts(resource) {
        if (resource.type !== 'js') {
            return false;
        }
        let module = resource.getModule();
        if (module == null || module === 'root') {
            module = this.solution.opts.package.module;
        }
        return module === 'commonjs';
    }

    wrapModule(resource: Resource, outputItem, outputItems, setts: IBaseScriptBuilderOpts) {
        let opts = this.solution.iteration;
        if (opts.commonjs == null) {
            opts.commonjs = {
                addHeading: true,
                hasHeading: false
            }
        };

        let body = '';

        if (opts.commonjs.hasHeading === false && opts.commonjs.addHeading === true) {
            opts.commonjs.hasHeading = true;
            body = this.getHeaderContent();
        }

        let { url, content, aliases } = resource;

        let module = Templates
            .Module
            .replace('%MODULE_PATH%', () => `"${url}"`)
            .replace('%MODULE_ALIASES%', JSON.stringify(aliases ?? []))
            .replace('%MODULE%', () => content)
            .replace('%FOOTER%', () => (setts?.partials?.footer ?? ''));


        return body + module;
    }

    getHeaderContent() {
        let mainUrl = this.solution.outputResources.rootInput.url;

        return Templates
            .Header
            .replace('%ROOT_DIR%', () => mainUrl);
    }

    buildRoot(root: Resource, outputDependencies: Resource[]) {
        outputDependencies.forEach(x => x.embed = true);

        let content = this.getRootContent(root, outputDependencies);
        let body = outputDependencies
            .map(x => {
                let content = x.content;
                if (x.type === 'css') {
                    content = template_interpolate(Templates.Style, { body: template_stringifyContent(content), url: x.url });
                }
                if (x.type === 'mask') {
                    content = template_interpolate(Templates.Mask, { body: template_stringifyContent(content), url: x.url });
                }
                return content;
            })
            .concat([content])
            .join('\n');


        let wrapper = new ModuleWrapper(this.solution);
        root.content = wrapper.wrap(body);
    }

    getRootContent(root, outputDependencies?) {
        return root.content;
    }
};
