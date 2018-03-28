import * as webpack from 'webpack';
import * as ObjectRestSpreadPlugin from '@sucrase/webpack-object-rest-spread-plugin';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

export default class DefaultPack implements Pack {
    private configuration: webpack.Configuration = {
        resolve: {
            extensions: ['.json'],
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new ObjectRestSpreadPlugin(),
        ],
    };

    public generate (options: Options): webpack.Configuration {
        if (options.optimize) {
            this.configuration.plugins!.push(new webpack.optimize.ModuleConcatenationPlugin());
        }

        if (options.debug) {
            this.configuration.devtool = 'cheap-source-map';
        }

        return this.configuration;
    }
}
