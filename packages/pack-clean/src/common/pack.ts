import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { Options, Pack } from '@packmule/core';

export default class CleanPack implements Pack {
    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public constructor(path?: string) {}

    public generate(options: Options): webpack.Configuration {
        const clean = new CleanWebpackPlugin();
        this.configuration.plugins!.push(clean);

        return this.configuration;
    }
}
