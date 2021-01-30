import webpack from 'webpack';
import { ESBuildPlugin, ESBuildMinifyPlugin } from 'esbuild-loader';
import Pack from '../common/pack';
import Hints from '../common/hints';
import Options from '../common/options';

export default class MinificationPack implements Pack {
    private configuration: webpack.Configuration = {
        plugins: [],
        optimization: {
            minimizer: [],
        },
    };

    public generate(options: Options, hints: Hints): webpack.Configuration {
        if (hints.optimize) {
            const plugin = new ESBuildPlugin();
            this.configuration.plugins!.push(plugin);

            const optimization = new ESBuildMinifyPlugin();
            this.configuration.optimization!.minimizer!.push(optimization);
        }

        return this.configuration;
    }
}
