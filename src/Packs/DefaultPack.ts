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
        optimization: {
            splitChunks: {
                minSize: 0,
                minChunks: 1,
                cacheGroups: false,
            },
        },
    };

    public generate(options: Options): webpack.Configuration {
        this.configuration.optimization!.minimize = options.optimize;
        this.configuration.optimization!.concatenateModules = options.optimize;
        this.configuration.optimization!.occurrenceOrder = options.optimize;
        this.configuration.optimization!.flagIncludedChunks = options.optimize;
        this.configuration.optimization!.namedModules = options.debug;
        this.configuration.optimization!.namedChunks = options.debug;
        this.configuration.optimization!.noEmitOnErrors = true;

        this.configuration.cache = options.cache;

        if (options.debug) {
            this.configuration.devtool = 'cheap-source-map';
        }

        return this.configuration;
    }
}
