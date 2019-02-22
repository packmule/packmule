import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import Pack from '../../Core/Pack';
import Options from '../../Core/Options';

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
