import webpack from 'webpack';
import micromatch from 'micromatch';
import { Options, Hints, Pack, PackIncludeOption } from '@packmule/core';

interface PackOptions {
    include?: PackIncludeOption;
}

export default class SveltePack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
        include: () => true,
    };

    private configuration: webpack.Configuration = {
        resolve: {
            mainFields: ['svelte'],
            extensions: ['.svelte'],
        },
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

    public generate(options: Options, hints: Hints): webpack.Configuration {
        const rule: webpack.RuleSetRule = {
            test: /\.svelte$/,
            include: this.options.include,
            use: [],
        };

        const compilation: webpack.RuleSetRule = {
            loader: 'svelte-loader',
            options: {
                emitCss: hints.extract,
                hotReload: hints.watch,
            },
        };

        Array.isArray(rule.use) && rule.use.push(compilation);

        this.configuration.module!.rules!.push(rule);

        return this.configuration;
    }
}
