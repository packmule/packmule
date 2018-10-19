import * as micromatch from 'micromatch';
import * as webpack from 'webpack';
import Pack, { PackIncludeOption } from '../Core/Pack';
import Options from '../Core/Options';

interface ImageOptimizationPackOptions {
    extensions: string[];
    path?: string;
    include?: PackIncludeOption;
}

export default class ImageOptimizationPack implements Pack {
    private options: ImageOptimizationPackOptions;
    private defaults: ImageOptimizationPackOptions = {
        extensions: ['svg', 'gif', 'png', 'jpg', 'jpeg'],
    };

    private configuration: webpack.Configuration & {
        module: webpack.Module;
    } = {
        module: {
            rules: [],
        },
    };

    constructor() {
        this.options = this.defaults;
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

    public generate(options: Options): webpack.Configuration {
        const pattern = '(' + this.options.extensions.map((extension: string) => `\\.${extension}`).join('|') + ')$';
        const expression = new RegExp(pattern, 'i');

        const rule: webpack.RuleSetRule = {
            test: expression,
            include: this.options.include,
            use: [] as any[],
        };

        const extraction: webpack.Loader = {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: this.options.path || undefined,
            },
        };

        Array.isArray(rule.use) && rule.use.push(extraction);

        if (options.optimize) {
            const optimization: webpack.Loader = {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        enabled: false,
                    },
                },
            };

            Array.isArray(rule.use) && rule.use.push(optimization);
        }

        this.configuration.module.rules.push(rule);

        return this.configuration;
    }
}
