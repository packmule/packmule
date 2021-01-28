import webpack from 'webpack';
import micromatch from 'micromatch';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import ImagePlugin from 'imagemin-webpack-plugin';
import { Hints, Options, Pack, PackIncludeOption } from '@packmule/core';

interface PackOptions {
    extensions: string[];
    path?: string;
    include?: PackIncludeOption;
}

export default class ImageOptimizationPack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
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
        this.options.include = typeof include === 'string' ? micromatch.makeRe(include, { dot: true }) : include;

        return this;
    }

    public to(path: string): this {
        this.options.path = path;
        return this;
    }

    public generate(options: Options, hints: Hints): webpack.Configuration {
        const pattern = '(' + this.options.extensions.map((extension: string) => `\\.${extension}`).join('|') + ')$';
        const expression = new RegExp(pattern, 'i');

        const rule: webpack.RuleSetRule = {
            test: expression,
            include: this.options.include,
            use: [],
        };

        const extraction: webpack.RuleSetRule = {
            loader: 'file-loader',
            options: {
                name: hints.hash ? '[name].[contenthash:8].[ext]' : '[name].[ext]',
                outputPath: this.options.path || undefined,
            },
        };

        Array.isArray(rule.use) && rule.use.push(extraction);
        this.configuration.module!.rules!.push(rule);

        if (hints.optimize) {
            const optimization: webpack.WebpackPluginInstance = new ImagePlugin({
                test: this.options.include,
                jpegtran: null,
                optipng: null,
                plugins: [
                    mozjpeg({
                        quality: 80,
                    }),
                    pngquant({
                        speed: 3,
                        strip: true,
                    }),
                ],
            });

            this.configuration.plugins!.push(optimization);
        }

        return this.configuration;
    }
}
