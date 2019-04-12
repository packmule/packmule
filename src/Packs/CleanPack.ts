import webpack from 'webpack';
import CleanPlugin from 'clean-webpack-plugin';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

export default class CleanPack implements Pack {
    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public constructor(path?: string) {}

    public generate(options: Options): webpack.Configuration {
        const settings = {
            verbose: options.debug && !options.watch,
        };

        const clean = new CleanPlugin(settings);
        this.configuration.plugins!.push(clean);

        return this.configuration;
    }
}
