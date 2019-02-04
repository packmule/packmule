import * as webpack from 'webpack';
import BarPlugin from 'webpackbar';
import Pack from '../Pack';
import Options from '../Options';

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

        this.configuration.plugins!.push(new BarPlugin());

        return this.configuration;
    }
}
