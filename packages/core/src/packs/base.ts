import webpack from 'webpack';
import BarPlugin from 'webpackbar';
import Pack from '../common/pack';
import Options from '../common/options';

export default class BasePack implements Pack {
    private configuration: webpack.Configuration = {
        resolve: {
            extensions: ['.js', '.json'],
        },
        plugins: [],
    };

    public generate(options: Options): webpack.Configuration {
        this.configuration.mode = options.mode;
        this.configuration.context = options.root;
        this.configuration.cache = options.cache;
        this.configuration.watch = options.watch;

        if (!process.argv.includes('--json')) {
            this.configuration.plugins!.push(new BarPlugin());
        }

        if (options.optimize) {
            this.configuration.plugins!.push(new webpack.HashedModuleIdsPlugin());
        }

        return this.configuration;
    }
}
