import * as micromatch from 'micromatch';
import * as webpack from 'webpack';
import * as SpritePlugin from 'external-svg-sprite-loader/lib/SvgStorePlugin';
import Pack, { PackIncludeOption } from '../Core/Pack';

interface VectorSpritePackOptions {
    name?: string;
    path?: string;
    include?: PackIncludeOption;
}

export default class VectorSpritePack implements Pack {
    private options: VectorSpritePackOptions;
    private defaults: VectorSpritePackOptions = {
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
            ...{ name }
        };
    }

    public include(include: PackIncludeOption): this {
        this.options.include = typeof include === 'string'
            ? micromatch.makeRe(include, { dot: true })
            : include;

        return this;
    }

    public to(path: string): this {
        this.options.path = path;
        return this;
    }

    public generate(): webpack.Configuration {
        const rule: webpack.RuleSetRule = {
            test: /\.svg$/,
            include: this.options.include,
            use: [],
        };

        const generation: webpack.Loader = {
            loader: 'external-svg-sprite-loader',
            options: {
                name: `${this.options.path}${this.options.name}.svg`,
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
