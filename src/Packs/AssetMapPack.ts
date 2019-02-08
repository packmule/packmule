import webpack from 'webpack';
import ManifestPlugin from 'webpack-assets-manifest';
import Pack from '../Core/Pack';

export default class AssetMapPack implements Pack {
    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public generate(): webpack.Configuration {
        const manifest = new ManifestPlugin({
            entrypoints: true,
            publicPath: true,
            sortManifest: false,
            writeToDisk: true,
        });

        this.configuration.plugins!.push(manifest);

        return this.configuration;
    }
}
