import webpack from 'webpack';
import micromatch from 'micromatch';
import { gzip as zopfli } from '@gfx/zopfli';
import CompressionPlugin from 'compression-webpack-plugin';
import { Hints, Options, Pack, PackIncludeOption } from '@packmule/core';

interface PackOptions {
    extensions?: string[];
    algorithm?: 'brotli' | 'gzip';
    ratio?: number;
    include?: PackIncludeOption;
}

export default class CompressionPack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
        extensions: ['html', 'json', 'xml', 'js', 'css', 'svg', 'ttf', 'otf'],
        algorithm: 'brotli',
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
            if (this.options.algorithm === 'gzip') {
                const gzip = new CompressionPlugin({
                    test: expression,
                    include: this.options.include,
                    filename: '[path][base].gz[query]',
                    minRatio: this.options.ratio,
                    algorithm: zopfli,
                });

                this.configuration.plugins!.push(gzip);
            } else if (this.options.algorithm === 'brotli') {
                const brotli = new CompressionPlugin({
                    test: expression,
                    include: this.options.include,
                    filename: '[path][base].br[query]',
                    minRatio: this.options.ratio,
                    algorithm: 'brotliCompress',
                    compressionOptions: {
                        level: 11,
                    },
                });

                this.configuration.plugins!.push(brotli);
            }
        }

        return this.configuration;
    }
}
