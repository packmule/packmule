import * as webpack from 'webpack';
import Pack from '../Core/Pack';

interface Options {
    entrySize: number;
    assetSize: number;
}

export default class MeasurePack implements Pack {
    private options: Options;
    private defaults: Options = {
        entrySize: 0,
        assetSize: 0,
    };

    private configuration: webpack.Configuration = {
        performance: {
            hints: 'warning',
            maxEntrypointSize: 0,
            maxAssetSize: 0,
        },
    };

    public constructor (options?: {}) {
        this.options = {...this.defaults, ...options};
    }

    public generate (): webpack.Configuration {
        this.configuration.performance!.maxEntrypointSize = this.options.entrySize;
        this.configuration.performance!.maxAssetSize = this.options.assetSize;

        return this.configuration;
    }
}
