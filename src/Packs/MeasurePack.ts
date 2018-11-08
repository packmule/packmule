import * as webpack from 'webpack';
import * as micromatch from 'micromatch';
import Pack from '../Core/Pack';

interface MeasurePackOptions {
    entrySize?: number;
    assetSize?: number;
    include?: string;
}

export default class MeasurePack implements Pack {
    private options: MeasurePackOptions;
    private defaults: MeasurePackOptions = {
        entrySize: 0,
        assetSize: 0,
        include: '**/*.{js,css,html,ttf,woff,woff2,otf}',
    };

    private configuration: webpack.Configuration = {};

    public constructor(entrySize?: number, assetSize?: number) {
        this.options = this.defaults;

        if (entrySize) {
            this.options.entrySize = entrySize;
        }

        if (assetSize) {
            this.options.assetSize = assetSize;
        }
    }

    public generate(): webpack.Configuration {
        this.configuration.performance = {
            hints: 'warning',
            maxEntrypointSize: this.options.entrySize,
            maxAssetSize: this.options.assetSize,
            assetFilter: (path: string) => {
                return micromatch.isMatch(path, this.options.include!, {dot: true});
            },
        };

        return this.configuration;
    }
}
