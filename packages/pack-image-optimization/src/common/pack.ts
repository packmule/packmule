import webpack from 'webpack';
import micromatch from 'micromatch';
import ImagePlugin from 'image-minimizer-webpack-plugin';
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
            type: 'asset/resource',
        };

        this.configuration.module!.rules!.push(rule);

        if (hints.optimize) {
            const optimization = new ImagePlugin({
                test: expression,
                minimizerOptions: {
                    plugins: [
                        ['mozjpeg', { quality: 80 }],
                        ['pngquant', { speed: 3, strip: true }],
                    ],
                },
            });

            const transformation = new ImagePlugin({
                test: expression,
                filename: '[path][name].webp',
                minimizerOptions: {
                    plugins: [['imagemin-webp']],
                },
            });

            this.configuration.plugins!.push(optimization);
            this.configuration.plugins!.push(transformation);
        }

        return this.configuration;
    }
}
