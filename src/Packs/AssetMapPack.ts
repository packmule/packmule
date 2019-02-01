import webpack from 'webpack';
import ManifestPlugin from 'webpack-manifest-plugin';
import Pack from '../Core/Pack';

export default class AssetMapPack implements Pack {
    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public generate(): webpack.Configuration {
        const manifest = new ManifestPlugin({
            writeToFileEmit: true,
        });

        this.configuration.plugins!.push(manifest);

        return this.configuration;
    }
}
