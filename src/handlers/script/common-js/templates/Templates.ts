import { io } from "../../../../global";

export const Templates = {
    Module: `
// import ./Module.js
`,
    ModuleSimplified: `
// import ./ModuleSimplified.js
`,
    Header: `
// import ./Header.js
`,
    RootModule: `
// import ./RootModule.js
`,
    RootModuleWrapped: `
// import ./RootModuleWrapped.js
`,
    UMD: `
// import ./UMD.js
`,
    ESM: `
// import ./ESM.js
`,
    Style: `
// import ./Style.js
`,
    Mask: `
// import ./Mask.js
`,
    load (path: string) {
        let template = io.File.read<string>(path);
        if (!template) {
            throw new Error(`Custom module wrapper not found: ${path}`)
        }
        return template;
    }
};
