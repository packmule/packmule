import webpack from 'webpack';
import ManifestPlugin from 'webpack-pwa-manifest';
import { Pack } from '@packmule/core';

export default class ManifestPack implements Pack {
    private readonly options: ManifestPlugin.ManifestOptions;

    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public constructor(options: ManifestPlugin.ManifestOptions) {
        this.options = options;
    }

    public generate(): webpack.Configuration {
        const manifest: webpack.WebpackPluginInstance = new ManifestPlugin(this.options);
        this.configuration.plugins!.push(manifest);

        return this.configuration;
    }
}
