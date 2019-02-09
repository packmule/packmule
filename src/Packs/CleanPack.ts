import webpack from 'webpack';
import CleanPlugin from 'clean-webpack-plugin';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

interface CleanPackOptions {
    path?: string;
}

export default class CleanPack implements Pack {
    private options: CleanPackOptions;
    private defaults: CleanPackOptions = {};

    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public constructor(path: string) {
        this.options = {
            ...this.defaults,
            ...{ path },
        }
    }

    public generate(options: Options): webpack.Configuration {
        const settings = {
            root: options.root,
            verbose: options.debug && !options.watch,
        };

        const clean = new CleanPlugin([this.options.path], settings);
        this.configuration.plugins!.push(clean);

        return this.configuration;
    }
}
