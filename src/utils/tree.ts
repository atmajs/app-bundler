import { res_getTreeInfo } from "./res";
import { class_Dfr } from "atma-utils";

export interface IWorkerInfo {
    action: () => class_Dfr
    message: (treeInfo: any, time: any) => string
    reporter: {
        info: (message: string) => void
    }
}

export function tree_async(workerInfo: IWorkerInfo) {
    let start = Date.now();
    let dfr;
    try {
        dfr = workerInfo.action();
    } catch (error) {
        console.error(error);
        return class_Dfr.reject(error);
    }
    let reporter = workerInfo.reporter;

    dfr.then(resources => {
        let end = Date.now();
        let seconds = ((end - start) / 1000).toFixed(2);
        let treeInfo = res_getTreeInfo(resources);
        reporter
            .info(workerInfo.message(treeInfo, seconds));
        reporter
            .info(treeInfo.treeString);
    }, err => {
        console.error(err);
        throw err;
    })

    return dfr;
};
