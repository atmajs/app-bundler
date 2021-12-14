import AppCfg from 'appcfg'
import { Runner } from './Runner';


export = async function run () {
    let config = await Config.load();
    return Runner.run(config);
}


namespace Config {
    async function doLoad(sources) {
        try {
            let config = await AppCfg.fetch(sources);
            return config.toJSON();
        } catch (error) {
            console.error('Configuration error', error.message);
            process.exit(1);
        }
    }

    export async function load() {
        let json = await doLoad([{
            path: 'package.json',
            getterProperty: 'app-bundler',
            optional: true
        }]);
        if (json.config) {
            return await doLoad([{ path: json.config }]);
        }
        return json;
    }

}
