import webpack from 'webpack';
import micromatch from 'micromatch';
import mozjpeg from 'imagemin-mozjpeg'
import pngquant from 'imagemin-pngquant'
import ImagePlugin from 'imagemin-webpack-plugin';
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

    private configuration: webpack.Configuration = {
        module: {
            rules: [],
        },
        plugins: [],
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
            use: [],
        };

        const extraction: webpack.Loader = {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: this.options.path || undefined,
            },
        };

        const optimization = new ImagePlugin({
            disable: !options.optimize,
            jpegtran: null,
            optipng: null,
            plugins: [
                mozjpeg({
                    quality: 80,
                }),
                pngquant({
                    speed: 3,
                }),
            ],
        });

        Array.isArray(rule.use) && rule.use.push(extraction);
        this.configuration.module!.rules.push(rule);
        this.configuration.plugins!.push(optimization);

        return this.configuration;
    }
}
