import webpack from 'webpack';
import micromatch from 'micromatch';
import WorkboxPlugin from 'workbox-webpack-plugin';
import { Pack, PackIncludeOption } from '@packmule/core';

interface PackOptions {
    path?: string;
    include?: PackIncludeOption;
}

export default class ServiceWorkerPack implements Pack {
    private caches: any[] = [];
    private options: PackOptions;
    private defaults: PackOptions = {
        include: () => true,
    };

    private configuration: webpack.Configuration = {
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

    public cache(urlPattern: RegExp, handler: string, options?: any): this {
        this.caches.push({
            urlPattern,
            handler,
            options,
        });

        return this;
    }

    public generate(): webpack.Configuration {
        const configuration: any = {
            clientsClaim: true,
            skipWaiting: true,
            importWorkboxFrom: 'local',
            include: this.options.include,
            runtimeCaching: this.caches,
        };

        if (this.options.path) {
            configuration.swDest = this.options.path;
        }

        this.configuration.plugins!.push(new WorkboxPlugin.GenerateSW(configuration));

        return this.configuration;
    }
}
