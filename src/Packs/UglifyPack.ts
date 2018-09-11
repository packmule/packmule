import * as webpack from 'webpack';
import * as UglifyPlugin from 'uglifyjs-webpack-plugin';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

export default class UglifyPack implements Pack {
    private configuration: webpack.Configuration = {
        optimization: {
            minimizer: [],
        },
    };

    public generate(options: Options): webpack.Configuration {
        const uglify = new UglifyPlugin({
            parallel: true,
            cache: options.cache,
            sourceMap: options.debug,
        });

        this.configuration.optimization!.minimizer!.push(uglify);

        return this.configuration;
    }
}
