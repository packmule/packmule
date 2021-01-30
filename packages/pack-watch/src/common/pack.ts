import webpack from 'webpack';
import micromatch from 'micromatch';
import { Options, Hints, Pack, PackIncludeOption } from '@packmule/core';

interface PackOptions {
    exclude?: Exclude<PackIncludeOption, (path: string) => true>;
}

export default class WatchPack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
        exclude: 'node_modules',
    };

    private configuration: webpack.Configuration = {
        watchOptions: {},
    };

    constructor() {
        this.options = this.defaults;
    }

    public exclude(exclude: Exclude<PackIncludeOption, (path: string) => true>): this {
        this.options.exclude = typeof exclude === 'string' ? micromatch.makeRe(exclude, { dot: true }) : exclude;

        return this;
    }

    public generate(options: Options, hints: Hints): webpack.Configuration {
        this.configuration.watch = hints.watch;
        this.configuration.watchOptions!.ignored = this.options.exclude;

        return this.configuration;
    }
}
