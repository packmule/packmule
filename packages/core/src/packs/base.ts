import webpack from 'webpack';
import Pack from '../common/pack';
import Hints from '../common/hints';
import Options from '../common/options';

export default class BasePack implements Pack {
    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public generate(options: Options, hints: Hints): webpack.Configuration {
        this.configuration.mode = options.mode;
        this.configuration.context = options.root;

        return this.configuration;
    }
}
