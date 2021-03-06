import { TestHelper } from '../TestHelper';
import { Bundler } from '../../src/Bundler'

var Files = {
    'main.html': `
		<!DOCTYPE html>
		<link rel='stylesheet' href='./styles/icons.less' />;
	`,
    'styles/icons.less': `
		.gear { background: url("foodir/gear.png") center; }
		.user { background: url("/styles/foodir/user.png") center; }
	`,
};
UTest({
    $before() {
        TestHelper.registerFiles(Files);
        Bundler.clearCache();
    },
    $teardown() {
        Bundler.clearCache();
    },
    'should get resource tree from files for same bases'() {
        var bundler = new Bundler('main.html', { silent: true });

        return bundler.build().done((resources) => {
            var solution = bundler.solution;
            var urls = resources.map(x => x.filename);
            eq_(urls.length, 2);
            has_(urls[0], '/build/release/main_index.css');
            has_(urls[1], '/build/release/main.html');

            has_(resources[0].content, `"assets/styles/foodir/gear.png"`);
            has_(resources[0].content, `"/styles/foodir/user.png"`);

            has_(resources[1].content, `"main_index.css"`);


            var assets = solution.assetsManager.getAssets();
            var arr = assets.map(x => x.toTarget(solution).toJSON());
            eq_(arr.length, 1, 'Only when asset with relative path in less should be copied')
            eq_(arr[0].url, '/build/release/assets/styles/foodir/gear.png')
        });
    },
    'should get resource tree from files for different bases'() {
        var bundler = new Bundler('main.html', { outputBase: 'dist', silent: true });

        return bundler.build().done(resources => {
            var solution = bundler.solution;
            var urls = resources.map(x => x.filename);
            eq_(urls.length, 2);
            has_(urls[0], '/dist/build/release/main_index.css');
            has_(urls[1], '/dist/build/release/main.html');

            has_(resources[0].content, `"assets/styles/foodir/gear.png"`);
            has_(resources[0].content, `"assets/styles/foodir/user.png"`);



            has_(resources[1].content, `"main_index.css"`);


            var assets = solution.assetsManager.getAssets();
            var arr = assets.map(x => x.toTarget(solution).toJSON());
            eq_(arr.length, 2, 'Only when asset with relative path in less should be copied')
            has_(arr[0].filename, '/dist/build/release/assets/styles/foodir/gear.png')
            has_(arr[1].filename, '/dist/build/release/assets/styles/foodir/user.png')
        });
    }
});