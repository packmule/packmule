import * as micromatch from 'micromatch';
import * as webpack from 'webpack';
import * as CompressionPlugin from 'compression-webpack-plugin';
import * as zopfli from '@gfx/zopfli';
import * as iltorb from 'iltorb';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

export interface CompressionPackOptions {
    extensions: string[];
    gzip: boolean;
    brotli: boolean;
    glob?: string;
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

    public constructor(options?: CompressionPackOptions) {
        this.options = {...this.defaults, ...options};
    }

    public include(glob: string): this {
        this.options.glob = glob;
        return this;
    }

    public generate(options: Options): webpack.Configuration {
        const pattern = '(' + this.options.extensions.map((extension: string) => `\\.${extension}`).join('|') + ')$';
        const expression = new RegExp(pattern, 'i');

        if (options.optimize) {
            if (this.options.gzip) {
                const gzip = new CompressionPlugin({
                    test: expression,
                    include: this.options.glob && micromatch.makeRe(this.options.glob),
                    cache: options.cache,
                    algorithm(input: any, compressionOptions: any, callback: any) {
                        return zopfli.gzip(input, compressionOptions, callback);
                    },
                });

                this.configuration.plugins!.push(gzip);
            }

            if (this.options.brotli) {
                const brotli = new CompressionPlugin({
                    test: expression,
                    include: this.options.glob && micromatch.makeRe(this.options.glob),
                    cache: options.cache,
                    algorithm(input: any, compressionOptions: any, callback: any) {
                        return iltorb.compress(input, compressionOptions, callback);
                    }
                });

                this.configuration.plugins!.push(brotli);
            }
        }

        return this.configuration;
    }
}
