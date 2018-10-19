import * as webpack from 'webpack';
import * as ManifestPlugin from 'webpack-pwa-manifest';
import Pack from '../Core/Pack';

export default class ManifestPack implements Pack {
    private options: ManifestPlugin.ManifestOptions;

    private configuration: webpack.Configuration= {
        plugins: [],
    };

    public constructor(options: ManifestPlugin.ManifestOptions) {
        this.options = options;
    }

    public generate (): webpack.Configuration {
        const manifest = new ManifestPlugin(this.options);

        this.configuration.plugins!.push(manifest);

        return this.configuration;
    }
}
