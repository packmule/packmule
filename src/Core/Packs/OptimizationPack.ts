import webpack from 'webpack';
import Pack from '../Pack';
import Options from '../Options';

export default class OptimizationPack implements Pack {
    private configuration: webpack.Configuration = {
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

        return this.configuration;
    }
}
