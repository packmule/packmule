import webpack from 'webpack';
import { ESBuildMinifyPlugin } from 'esbuild-loader';
import browserslist from 'browserslist-to-esbuild';
import Pack from '../common/pack.js';
import Hints from '../common/hints.js';
import Options from '../common/options.js';

export default class MinificationPack implements Pack {
    private configuration: webpack.Configuration = {
        optimization: {
            minimizer: [],
        },
    };

    public generate(options: Options, hints: Hints): webpack.Configuration {
        if (hints.optimize) {
            const optimization = new ESBuildMinifyPlugin({
                target: browserslist(),
                css: true,
            });

            this.configuration.optimization!.minimizer!.push(optimization);
        }

        return this.configuration;
    }
}
