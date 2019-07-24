import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import Pack from '../common/pack';
import Hints from '../common/hints';
import Options from '../common/options';

export default class MinificationPack implements Pack {
    private configuration: webpack.Configuration = {
        optimization: {
            minimizer: [],
        },
    };

    public generate(options: Options, hints: Hints): webpack.Configuration {
        if (hints.optimize) {
            const terser = new TerserPlugin({
                parallel: true,
                cache: hints.cache,
                sourceMap: hints.map,
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
