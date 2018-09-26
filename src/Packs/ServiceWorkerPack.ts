import * as webpack from 'webpack';
import * as WorkboxPlugin from 'workbox-webpack-plugin';
import * as micromatch from 'micromatch';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

interface ServiceWorkerPackOptions {
    path?: string;
    glob?: string;
}

export default class ServiceWorkerPack implements Pack {
    private options: ServiceWorkerPackOptions = {};
    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public include(glob: string): this {
        this.options.glob = glob;
        return this;
    }

    public to(path: string): this {
        this.options.path = path;
        return this;
    }

    public generate(options: Options): webpack.Configuration {
        const configuration: any = {
            clientsClaim: true,
            skipWaiting: true,
            swDest: this.options.path,
            importWorkboxFrom: 'local',
        };

        if (this.options.glob) {
            configuration.include = micromatch.makeRe(this.options.glob);
        }

        this.configuration.plugins!.push(new WorkboxPlugin.GenerateSW(configuration));

        return this.configuration;
    }
}
