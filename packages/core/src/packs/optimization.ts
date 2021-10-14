import webpack from 'webpack';
import Pack from '../common/pack.js';
import Options from '../common/options.js';
import Hints from '../common/hints.js';

export default class OptimizationPack implements Pack {
    private configuration: webpack.Configuration = {};

    public generate(options: Options, hints: Hints): webpack.Configuration {
        if (hints.watch) {
            this.configuration.optimization = {
                splitChunks: false,
                removeEmptyChunks: false,
                removeAvailableModules: false,
            };
        } else {
            this.configuration.optimization = {
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
            };
        }

        return this.configuration;
    }
}
