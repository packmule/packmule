import webpack from 'webpack';
import micromatch from 'micromatch';
import SpritePlugin from 'external-svg-sprite-loader';
import { Hints, Options, Pack, PackIncludeOption } from '@packmule/core';

interface PackOptions {
    name?: string;
    path?: string;
    include?: PackIncludeOption;
}

export default class VectorSpritePack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
        path: '/',
        include: () => true,
    };

    private configuration: webpack.Configuration = {
        module: {
            rules: [],
        },
        plugins: [],
    };

    public constructor(name: string) {
        this.options = {
            ...this.defaults,
            ...{ name },
        };
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
            test: /\.svg$/,
            include: this.options.include,
            use: [],
        };

        const generation: webpack.Loader = {
            loader: SpritePlugin.loader,
            options: {
                name: `${this.options.path}${this.options.name}${hints.hash ? '.[contenthash:8]' : ''}.svg`,
                iconName: '[name]',
            },
        };

        Array.isArray(rule.use) && rule.use.push(generation);

        const sprite = new SpritePlugin();
        this.configuration.plugins!.push(sprite);

        this.configuration.module!.rules.push(rule);

        return this.configuration;
    }
}
