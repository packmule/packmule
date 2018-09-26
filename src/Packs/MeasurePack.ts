import * as micromatch from 'micromatch';
import * as webpack from 'webpack';
import Pack from '../Core/Pack';

interface Options {
    entrySize: number;
    assetSize: number;
    glob?: string;
}

export default class MeasurePack implements Pack {
    private options: Options;
    private defaults: Options = {
        entrySize: 0,
        assetSize: 0,
        glob: '**/*.{js,css,html,ttf,woff,woff2,otf}',
    };

    private configuration: webpack.Configuration = {
        performance: {
            hints: 'warning',
            maxEntrypointSize: 0,
            maxAssetSize: 0,
        },
    };

    public constructor(options?: {}) {
        this.options = {...this.defaults, ...options};
    }

    public include(glob: string): this {
        this.options.glob = glob;
        return this;
    }

    public generate(): webpack.Configuration {
        this.configuration.performance!.maxEntrypointSize = this.options.entrySize;
        this.configuration.performance!.maxAssetSize = this.options.assetSize;

        if (this.options.glob) {
            this.configuration.performance!.assetFilter = (path: string) => {
                return micromatch.isMatch(path, this.options.glob!);
            };
        }

        return this.configuration;
    }
}
