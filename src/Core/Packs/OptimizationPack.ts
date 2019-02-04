import webpack from 'webpack';
import Pack from '../Pack';
import Options from '../Options';

export default class OptimizationPack implements Pack {
    private configuration: webpack.Configuration = {
        optimization: {
            splitChunks: {
                minSize: 0,
                minChunks: 1,
                cacheGroups: false,
            },
        },
    };

    public generate(options: Options): webpack.Configuration {
        return this.configuration;
    }
}
