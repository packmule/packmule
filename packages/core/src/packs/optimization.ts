import webpack from 'webpack';
import Pack from '../common/pack';

export default class OptimizationPack implements Pack {
    private configuration: webpack.Configuration = {
        optimization: {
            splitChunks: {
                minSize: 0,
                minChunks: 1,
                maxInitialRequests: Infinity,
                maxAsyncRequests: Infinity,
                cacheGroups: {
                    default: false,
                    vendors: false,
                },
            },
        },
    };

    public generate(): webpack.Configuration {
        return this.configuration;
    }
}
