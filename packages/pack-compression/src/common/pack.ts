import webpack from 'webpack';
import micromatch from 'micromatch';
import iltorb from 'iltorb';
import CompressionPlugin from 'compression-webpack-plugin';
import { Hints, Options, Pack, PackIncludeOption } from '@packmule/core';

export interface PackOptions {
    extensions?: string[];
    gzip?: boolean;
    brotli?: boolean;
    ratio?: number;
    include?: PackIncludeOption;
}

export default class CompressionPack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
        extensions: ['html', 'json', 'xml', 'js', 'css', 'svg', 'ttf', 'otf'],
        gzip: true,
        brotli: true,
        ratio: 1,
    };

    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public constructor(options: PackOptions = {}) {
        this.options = {
            ...this.defaults,
            ...options,
        };
    }

    public include(include: PackIncludeOption): this {
        this.options.include = typeof include === 'string' ? micromatch.makeRe(include, { dot: true }) : include;

        return this;
    }

    public generate(options: Options, hints: Hints): webpack.Configuration {
        const pattern = '(' + this.options.extensions!.map((extension: string) => `\\.${extension}`).join('|') + ')$';
        const expression = new RegExp(pattern, 'i');

        if (hints.optimize) {
            if (this.options.gzip) {
                const gzip = new CompressionPlugin({
                    test: expression,
                    include: this.options.include,
                    cache: hints.cache,
                    filename: '[path].gz[query]',
                    minRatio: this.options.ratio,
                });

                this.configuration.plugins!.push(gzip);
            }

            if (this.options.brotli) {
                const brotli = new CompressionPlugin({
                    test: expression,
                    include: this.options.include,
                    cache: hints.cache,
                    filename: '[path].br[query]',
                    minRatio: this.options.ratio,
                    algorithm(input: any, compressionOptions: any, callback: any) {
                        return iltorb.compress(input, compressionOptions, callback);
                    },
                });

                this.configuration.plugins!.push(brotli);
            }
        }

        return this.configuration;
    }
}
