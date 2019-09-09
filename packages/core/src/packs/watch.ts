import webpack from 'webpack';
import Pack from '../common/pack';
import Options from '../common/options';

export default class WatchPack implements Pack {
    private configuration: webpack.Configuration = {
        watchOptions: {
            ignored: ['node_modules'],
        },
    };

    public generate(options: Options): webpack.Configuration {
        this.configuration.watch = options.watch;

        return this.configuration;
    }
}
