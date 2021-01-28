import webpack from 'webpack';
import micromatch from 'micromatch';
import VuePlugin from 'vue-loader/lib/plugin';
import { Options, Hints, Pack, PackIncludeOption } from '@packmule/core';

interface PackOptions {
    include?: PackIncludeOption;
}

export default class VuePack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
        include: () => true,
    };

    private configuration: webpack.Configuration = {
        resolve: {
            extensions: ['.vue'],
        },
        module: {
            rules: [],
        },
        plugins: [],
    };

    constructor() {
        this.options = this.defaults;
    }

    public include(include: PackIncludeOption): this {
        this.options.include = typeof include === 'string' ? micromatch.makeRe(include, { dot: true }) : include;

        return this;
    }

    public generate(options: Options, hints: Hints): webpack.Configuration {
        const plugin = new VuePlugin();

        const rule: webpack.RuleSetRule = {
            test: /\.vue$/,
            include: this.options.include,
            use: [],
        };

        const compilation: webpack.RuleSetRule = {
            loader: 'vue-loader',
            options: {
                exposeFilename: !hints.optimize,
            },
        };

        Array.isArray(rule.use) && rule.use.push(compilation);

        this.configuration.module!.rules!.push(rule);
        this.configuration.plugins!.push(plugin);

        return this.configuration;
    }
}
