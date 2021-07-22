import webpack from 'webpack';
import { ESBuildMinifyPlugin } from 'esbuild-loader';
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
            const optimization = new ESBuildMinifyPlugin({
                target: 'esnext',
            });

            this.configuration.optimization!.minimizer!.push(optimization);
        }

        return this.configuration;
    }
}
