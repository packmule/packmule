import webpack from 'webpack';
import Pack from '../../Core/Pack';
import Options from '../../Core/Options';

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
                },
            },
        },
    };

    public generate(options: Options): webpack.Configuration {
        return this.configuration;
    }
}
