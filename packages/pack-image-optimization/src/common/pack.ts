import webpack from 'webpack';
import micromatch from 'micromatch';
import ImagePlugin from 'image-minimizer-webpack-plugin';
import { Hints, Options, Pack, PackIncludeOption } from '@packmule/core';

interface PackOptions {
    extensions: string[];
    webp?: boolean;
    include?: PackIncludeOption;
}

export default class ImageOptimizationPack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
        extensions: ['svg', 'gif', 'png', 'jpg', 'jpeg'],
        webp: false,
    };

    private configuration: webpack.Configuration = {
        module: {
            rules: [],
        },
        optimization: {
            minimizer: [],
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
        const pattern = '(' + this.options.extensions.map((extension: string) => `\\.${extension}`).join('|') + ')$';
        const expression = new RegExp(pattern, 'i');

        const rule: webpack.RuleSetRule = {
            test: expression,
            include: this.options.include,
            type: 'asset/resource',
        };

        this.configuration.module!.rules!.push(rule);

        if (hints.optimize) {
            const options: ImagePlugin.PluginOptions<any, any> = {
                minimizer: {
                    implementation: ImagePlugin.imageminMinify,
                    options: {
                        plugins: [
                            ['mozjpeg', { quality: 80 }],
                            ['pngquant', { speed: 3, strip: true }],
                        ],
                    },
                },
            };

            if (this.options.webp) {
                options.generator = [
                    {
                        type: 'asset',
                        filename: '[path][name].webp',
                        implementation: ImagePlugin.imageminGenerate,
                        options: {
                            plugins: ['imagemin-webp'],
                        },
                    },
                ];
            }

            const plugin = new ImagePlugin(options);

            this.configuration.optimization?.minimizer?.push(plugin);
        }

        return this.configuration;
    }
}
