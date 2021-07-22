import webpack from 'webpack';
import micromatch from 'micromatch';
import { Hints, Options, Pack, PackIncludeOption } from '@packmule/core';

interface PackOptions {
    path?: string;
    include?: PackIncludeOption;
}

export default class CopyPack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {};

    private configuration: webpack.Configuration = {
        module: {
            rules: [],
        },
    };

    constructor() {
        this.options = this.defaults;
    }

    public include(include: PackIncludeOption): this {
        this.options.include = typeof include === 'string' ? micromatch.makeRe(include, { dot: true }) : include;

        return this;
    }

    public to(path: string): this {
        this.options.path = path;
        return this;
    }

    public generate(options: Options, hints: Hints): webpack.Configuration {
        const rule: webpack.RuleSetRule = {
            test: /.+/,
            type: 'asset/resource',
            include: this.options.include,
            generator: {
                filename: this.options.path + '/' + (hints.hash ? '[name].[contenthash:8][ext]' : '[name][ext]'),
            },
        };

        this.configuration.module!.rules!.push(rule);

        return this.configuration;
    }
}
