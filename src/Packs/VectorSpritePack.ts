import * as micromatch from 'micromatch';
import * as webpack from 'webpack';
import * as SpritePlugin from 'external-svg-sprite-loader/lib/SvgStorePlugin';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

interface VectorSpritePackOptions {
    name?: string;
    glob?: string;
    path: string;
}

export default class VectorSpritePack implements Pack {
    private options: VectorSpritePackOptions = {
        path: '',
    };

    private configuration: webpack.Configuration &{
        module: webpack.NewModule;
    } = {
        module: {
            rules: [],
        },
        plugins: [],
    };

    public constructor (name: string) {
        this.options.name = name;
    }

    public include (glob: string): this {
        this.options.glob = glob;
        return this;
    }

    public to (path: string): this {
        this.options.path = path;
        return this;
    }

    public generate (options: Options): webpack.Configuration {
        const rule: webpack.NewUseRule = {
            test: /\.svg$/,
            include: (path: string) => (this.options.glob ? micromatch.isMatch(path, this.options.glob) : true),
            use: [],
        };

        const generation: webpack.NewLoader = {
            loader: 'external-svg-sprite-loader',
            options: {
                name: `${this.options.path}${this.options.name}.svg`,
                iconName: '[name]',
            },
        };

        Array.isArray(rule.use) && rule.use.push(generation);

        const sprite = new SpritePlugin();
        this.configuration.plugins!.push(sprite);

        this.configuration.module.rules.push(rule);

        return this.configuration;
    }
}
