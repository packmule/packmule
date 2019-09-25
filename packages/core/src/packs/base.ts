import webpack from 'webpack';
import Pack from '../common/pack';
import Hints from '../common/hints';
import Options from '../common/options';

export default class BasePack implements Pack {
    private configuration: webpack.Configuration = {
        resolve: {
            extensions: ['.js', '.json'],
        },
        plugins: [],
    };

    public generate(options: Options, hints: Hints): webpack.Configuration {
        this.configuration.mode = options.mode;
        this.configuration.context = options.root;
        this.configuration.cache = hints.cache;

        if (hints.optimize) {
            this.configuration.plugins!.push(new webpack.HashedModuleIdsPlugin());
        }

        return this.configuration;
    }
}
