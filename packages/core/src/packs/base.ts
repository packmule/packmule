import webpack from 'webpack';
import Pack from '../common/pack.js';
import Hints from '../common/hints.js';
import Options from '../common/options.js';

export default class BasePack implements Pack {
    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public generate(options: Options, hints: Hints): webpack.Configuration {
        this.configuration.mode = options.mode;
        this.configuration.context = options.root;
        this.configuration.cache = hints.cache;

        return this.configuration;
    }
}
