import webpack from 'webpack';
import Pack from '../common/pack';
import Options from '../common/options';
import Hints from '../common/hints';

export default class WatchPack implements Pack {
    private configuration: webpack.Configuration = {
        watchOptions: {
            ignored: ['node_modules'],
        },
    };

    public generate(options: Options, hints: Hints): webpack.Configuration {
        this.configuration.watch = hints.watch;

        return this.configuration;
    }
}
