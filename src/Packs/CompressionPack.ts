import webpack from 'webpack';
import micromatch from 'micromatch';
import CompressionPlugin from 'compression-webpack-plugin';
import Options from '../Core/Options';
import Pack, { PackIncludeOption } from '../Core/Pack';

export interface CompressionPackOptions {
    extensions?: string[];
    gzip?: boolean;
    brotli?: boolean;
    include?: PackIncludeOption;
}

export default class CompressionPack implements Pack {
    private options: CompressionPackOptions;
    private defaults: CompressionPackOptions = {
        extensions: ['html', 'json', 'xml', 'js', 'css', 'svg', 'ttf', 'otf'],
        gzip: true,
        brotli: true,
    };

    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public constructor(options: CompressionPackOptions = {}) {
        this.options = {
            ...this.defaults,
            ...options,
        };
    }

    public include(include: PackIncludeOption): this {
        this.options.include = typeof include === 'string'
            ? micromatch.makeRe(include, { dot: true })
            : include;

        return this;
    }

    public generate(options: Options): webpack.Configuration {
        const pattern = '(' + this.options.extensions!.map((extension: string) => `\\.${extension}`).join('|') + ')$';
        const expression = new RegExp(pattern, 'i');

        if (options.optimize) {
            if (this.options.gzip) {
                const gzip = new CompressionPlugin({
                    test: expression,
                    include: this.options.include,
                    cache: options.cache,
                    filename: '[path].gz[query]',
                });

                this.configuration.plugins!.push(gzip);
            }

            if (this.options.brotli) {
                const brotli = new CompressionPlugin({
                    test: expression,
                    include: this.options.include,
                    cache: options.cache,
                    filename: '[path].br[query]',
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
