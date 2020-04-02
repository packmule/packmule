import webpack from 'webpack';
import micromatch from 'micromatch';
import WorkboxPlugin from 'workbox-webpack-plugin';
import Pack, { PackIncludeOption } from '../Core/Pack';
import Options from '../Core/Options';

interface ServiceWorkerPackOptions {
    path?: string;
    include?: PackIncludeOption,
}

export default class ServiceWorkerPack implements Pack {
    private options: ServiceWorkerPackOptions;
    private defaults: ServiceWorkerPackOptions = {
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

    public generate(options: Options): webpack.Configuration {
        const configuration: any = {
            mode: options.mode,
            sourcemap: options.debug,
            clientsClaim: true,
            skipWaiting: true,
            cleanupOutdatedCaches: true,
            inlineWorkboxRuntime: false,
            include: this.options.include,
        };

        if (this.options.path) {
            configuration.swDest = this.options.path;
        }

        this.configuration.plugins!.push(new WorkboxPlugin.GenerateSW(configuration));

        return this.configuration;
    }
}
