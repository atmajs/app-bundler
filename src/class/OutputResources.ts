import { Resource } from './Resource';
import { Solution } from "./Solution";
import { res_groupByPageAndBundles, res_groupResourcesByType } from '../utils/res';

export class OutputResources {

    items: OutputItem[] =[]
    resources: Resource[] = []
    pagesInput: any = {}
    rootInput: Resource
    rootOutput: Resource
    constructor (public solution: Solution) {

    }

    prepare (resources: Resource[]) {
        this.resources = [];
        this.pagesInput = {};
        this.items = [];

        let root = resources.pop();
        let isGlob = root.isGlob;
        if (isGlob !== true) {
            this.rootOutput = root.toTarget(this.solution);
            this.rootOutput.content = root.content;
        }

        this.rootInput = root;
        this.pagesInput = res_groupByPageAndBundles(resources, this.solution.opts);

        Object.keys(this.pagesInput).forEach(page => {

            Object.keys(this.pagesInput[page]).forEach(bundle => {

                let resources = this.pagesInput[page][bundle];
                let byType = res_groupResourcesByType(resources, this.solution.opts);
                Object.keys(byType).forEach(type => {

                    let arr = byType[type];
                    let item = new OutputItem({
                        page,
                        bundle,
                        type,
                        solution: this.solution,
                        resources: arr,
                        isGlob: isGlob,
                    });
                    this.items.push(item);
                });

                // @TODO: Do we need empty output item?
                // if (byType['js'] == null) {
                //     let item = new OutputItem({
                //         page,
                //         bundle,
                //         type: 'js',
                //         solution: this.solution,
                //         resources: []
                //     });
                //     this.items.push(item);
                // }

            });
        });
    }

    getForPage (page) {
        return this.items.filter(x => x.page === page).map(x => x.resource);
    }

    getAll () {
        let all = this
            .items
            .map(x => x.resource)
            .filter(x => x.embed !== true)
            .filter(x => Boolean(x.content));

        if (this.rootOutput) {
            all.push(this.rootOutput);
        }
        return all;
    }
}


export class OutputItem {
    page: string
    bundle: string
    type: string
    solution: Solution
    resource: Resource
    resources: Resource[]

    constructor (params: { page, bundle, type, solution, resources, isGlob, resource?: Resource }) {
        let { page, bundle, type, solution, resources, isGlob } = params;
        this.page = page;
        this.bundle = bundle;
        this.type = type;
        this.resource = params.resource;
        this.resources = resources ?? [];

        if (this.resource == null) {
            let ext = solution.opts.getExtForType(type);
            let sfx = '';
            if (isGlob === true) {
                sfx = '_*';
            }
            let filename = `${page}_${bundle}${sfx}.${ext}`;

            let resource = new Resource({
                type: type,
                url: filename,
                bundle: bundle
            }, null, solution);

            this.resource = resource.toTarget(solution);
        }
    }
}
