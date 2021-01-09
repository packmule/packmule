import webpack from 'webpack';
import ManifestPlugin from 'webpack-assets-manifest';
import { Pack } from '@packmule/core';

interface PackOptions {
    name?: string;
}

export default class AssetsPack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
        name: 'manifest.json',
    };

    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public constructor(name?: string) {
        this.options = this.defaults;

        if (name) {
            this.options.name = name;
        }
    }

    public generate(): webpack.Configuration {
        const manifest = new ManifestPlugin({
            output: this.options.name,
            entrypoints: true,
            publicPath: true,
            sortManifest: false,
            writeToDisk: true,
        });

        this.configuration.plugins!.push(manifest);

        return this.configuration;
    }
}
