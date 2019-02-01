import * as webpack from 'webpack';
import BarPlugin from 'webpackbar';
import Pack from '../Pack';
import Options from '../Options';

export default class DefaultPack implements Pack {
    private configuration: webpack.Configuration = {
        mode: 'none',
        resolve: {
            extensions: ['.json'],
        },
        plugins: [],
    };

    public generate(options: Options): webpack.Configuration {
        this.configuration.context = options.root;
        this.configuration.cache = options.cache;

        this.configuration.plugins!.push(new BarPlugin());

        if (options.debug) {
            this.configuration.devtool = 'cheap-source-map';
        }

        return this.configuration;
    }
}
