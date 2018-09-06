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
	UMD: `
// import ./UMD.js
`,
	load (path: string) {
		let template = io.File.read(path);
		if (!template) {
			throw new Error(`Custom Wrapper Module not found: ${path}`)
		}
		return template;
	}
};