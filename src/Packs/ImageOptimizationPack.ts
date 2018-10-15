import * as micromatch from 'micromatch';
import * as webpack from 'webpack';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

interface ImageOptimizationPackOptions {
    extensions: string[];
    glob?: string;
    path?: string;
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

    public include(glob: string): this {
        this.options.glob = glob;
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
            include: (path: string) => this.options.glob ? micromatch.isMatch(path, this.options.glob, { dot: true }) : true,
            use: [] as any[],
        };

        const extraction: webpack.NewLoader = {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: this.options.path || undefined,
            },
        };

        Array.isArray(rule.use) && rule.use.push(extraction);

        if (options.optimize) {
            const optimization: webpack.NewLoader = {
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
