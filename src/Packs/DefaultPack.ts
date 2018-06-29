import * as webpack from 'webpack';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

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

    public generate (options: Options): webpack.Configuration {
        if (options.optimize) {
            this.configuration.plugins!.push(new webpack.optimize.ModuleConcatenationPlugin());
        }

        if (options.debug) {
            this.configuration.devtool = 'cheap-source-map';
        }

        this.configuration.cache = options.cache;

        return this.configuration;
    }
}
