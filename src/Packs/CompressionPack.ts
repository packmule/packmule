import * as micromatch from 'micromatch';
import * as webpack from 'webpack';
import * as ZopfliCompressionPlugin from 'zopfli-webpack-plugin';
import * as BrotliCompressionPlugin from 'brotli-webpack-plugin';
import Pack from '../Core/Pack';

export interface Options {
    extensions: string[];
    gzip: boolean;
    brotli: boolean;
    glob?: string;
}

export default class CompressionPack implements Pack {
    private options: Options;
    private defaults: Options = {
        extensions: ['html', 'json', 'xml', 'js', 'css', 'svg', 'ttf', 'otf'],
        gzip: true,
        brotli: true,
    };

    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public constructor(options?: Options) {
        this.options = {...this.defaults, ...options};
    }

    public include(glob: string): this {
        this.options.glob = glob;
        return this;
    }

    public generate(): webpack.Configuration {
        const pattern = '(' + this.options.extensions.map((extension: string) => `\\.${extension}`).join('|') + ')$';
        const expression = new RegExp(pattern, 'i');
        const options = {
            test: expression,
            include: (path: string) => (this.options.glob ? micromatch.isMatch(path, this.options.glob) : false),
        };

        if (this.options.gzip) {
            const zopfli = new ZopfliCompressionPlugin(options);
            this.configuration.plugins!.push(zopfli);
        }

        if (this.options.brotli) {
            const brotli = new BrotliCompressionPlugin(options);
            this.configuration.plugins!.push(brotli);
        }

        return this.configuration;
    }
}
