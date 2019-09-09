import webpack from 'webpack';
import micromatch from 'micromatch';
import { Pack, PackIncludeOption } from '@packmule/core';

interface PackOptions {
    entrySize?: number;
    assetSize?: number;
    include?: PackIncludeOption;
}

export default class PerformancePack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
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

    public include(include: PackIncludeOption): this {
        this.options.include = typeof include === 'string' ? micromatch.makeRe(include, { dot: true }) : include;

        return this;
    }

    public generate(): webpack.Configuration {
        this.configuration.performance = {
            hints: 'warning',
            maxEntrypointSize: this.options.entrySize,
            maxAssetSize: this.options.assetSize,
            assetFilter: (path: string) => {
                return micromatch.isMatch(path, this.options.include!.toString(), { dot: true });
            },
        };

        return this.configuration;
    }
}
