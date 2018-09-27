import * as webpack from 'webpack';
import Pack from '../Pack';
import Options from '../Options';

export default class DefaultPack implements Pack {
    private configuration: webpack.Configuration = {
        mode: 'none',
        resolve: {
            extensions: ['.json'],
        },
        plugins: [
            new webpack.ProgressPlugin(),
        ],
    };

    public generate(options: Options): webpack.Configuration {
        this.configuration.context = options.root;
        this.configuration.cache = options.cache;

        if (options.debug) {
            this.configuration.devtool = 'cheap-source-map';
        }

        return this.configuration;
    }
}
