import webpack from 'webpack';
import OptimizationPlugin from 'esbuild-webpack-plugin';
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
            const optimization = new OptimizationPlugin();
            this.configuration.optimization!.minimizer!.push(optimization);
        }

        return this.configuration;
    }
}
