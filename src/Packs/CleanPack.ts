import * as webpack from 'webpack';
import * as CleanPlugin from 'clean-webpack-plugin';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

export default class CleanPack implements Pack {
    private path: string;

    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public constructor(path: string) {
        this.path = path;
    }

    public generate(options: Options): webpack.Configuration {
        const settings = {
            root: options.root,
            verbose: options.debug,
        };

        const clean = new CleanPlugin([this.path], settings);
        this.configuration.plugins!.push(clean);

        return this.configuration;
    }
}
