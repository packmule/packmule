import webpack from 'webpack';
import BarPlugin from 'webpackbar';
import Pack from '../../Core/Pack';
import Options from '../../Core/Options';

export default class BasePack implements Pack {
    private configuration: webpack.Configuration = {
        resolve: {
            extensions: ['.json'],
        },
        plugins: [],
    };

    public generate(options: Options): webpack.Configuration {
        this.configuration.mode = options.mode;
        this.configuration.context = options.root;
        this.configuration.cache = options.cache;
        this.configuration.watch = options.watch;

        this.configuration.plugins!.push(new BarPlugin());

        if (options.optimize) {
            this.configuration.plugins!.push(new webpack.HashedModuleIdsPlugin());
        }

        return this.configuration;
    }
}
