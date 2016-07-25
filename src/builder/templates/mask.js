(function(){

	Templates['mask'] = class CommonJs extends ITemplate {
		wrapBundle (str) {
			return str
		}

		wrapModule (resource, ctx, solution) {
			return Module
				.replace('%MODULE_PATH%', resource.url)
				.replace('%MODULE%', str)
				;
		}
	};

	let Module = `
	module path="%MODULE_PATH%" {
		%MODULE%
	}
	`;

}());