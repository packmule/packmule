import * as webpack from 'webpack';
import * as TerserPlugin from 'terser-webpack-plugin';
import Pack from '../Pack';
import Options from '../Options';

export default class MinificationPack implements Pack {
    private configuration: webpack.Configuration = {
        optimization: {
            minimizer: [],
        },
    };

    public generate(options: Options): webpack.Configuration {
        if (options.optimize) {
            const terser = new TerserPlugin({
                parallel: true,
                cache: options.cache,
                sourceMap: options.debug,
                terserOptions: {
                    mangle: {
                        keep_fnames: true,
                    },
                },
            });

            this.configuration.optimization!.minimizer!.push(terser);
        }

        return this.configuration;
    }
}
