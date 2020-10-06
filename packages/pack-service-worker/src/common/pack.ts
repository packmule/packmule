import webpack from 'webpack';
import micromatch from 'micromatch';
import WorkboxPlugin from 'workbox-webpack-plugin';
import { Pack, PackIncludeOption, Options, Hints } from '@packmule/core';

interface PackOptions {
    path?: string;
    include?: PackIncludeOption;
}

export default class ServiceWorkerPack implements Pack {
    private caches: any[] = [];
    private options: PackOptions;
    private defaults: PackOptions = {};

    private configuration: webpack.Configuration = {
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

    public cache(urlPattern: RegExp, handler: string, options?: any): this {
        this.caches.push({
            urlPattern,
            handler,
            options,
        });

        return this;
    }

    public generate(options: Options, hints: Hints): webpack.Configuration {
        const configuration: any = {
            mode: options.mode,
            sourcemap: hints.map,
            clientsClaim: true,
            skipWaiting: true,
            cleanupOutdatedCaches: true,
            inlineWorkboxRuntime: false,
            runtimeCaching: this.caches,
            dontCacheBustURLsMatching: /.+/,
        };

        if (this.options.path) {
            configuration.swDest = this.options.path;
        }

        if (this.options.include) {
            configuration.include = [this.options.include];
        } else {
            configuration.exclude = [/.+/];
        }

        this.configuration.plugins!.push(new WorkboxPlugin.GenerateSW(configuration));

        return this.configuration;
    }
}
