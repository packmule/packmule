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

    private configuration: webpack.Configuration = {
        performance: {
            hints: 'warning',
        },
    };

    public constructor(entrySize?: number, assetSize?: number) {
        this.options = {
            ...this.defaults,
            ...{ entrySize, assetSize },
        };
    }

    public generate(): webpack.Configuration {
        this.configuration.performance!.maxEntrypointSize = this.options.entrySize;
        this.configuration.performance!.maxAssetSize = this.options.assetSize;
        this.configuration.performance!.assetFilter = (path: string) => {
            return micromatch.isMatch(path, this.options.include!, { dot: true })
        };

        return this.configuration;
    }
}
