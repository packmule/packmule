import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { Pack } from '@packmule/core';

export default class CleanPack implements Pack {
    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public generate(): webpack.Configuration {
        const clean = new CleanWebpackPlugin();
        this.configuration.plugins!.push(clean);

        return this.configuration;
    }
}
