import webpack from 'webpack';
import Pack from '../Core/Pack';

export interface HotModuleReplacementPackOptions {
    overlay?: boolean;
    info?: boolean;
    reload?: boolean;
    polyfill?: boolean;
}

export default class HotModuleReplacementPack implements Pack {
    private options: HotModuleReplacementPackOptions;
    private defaults: HotModuleReplacementPackOptions = {
        overlay: true,
        info: true,
        reload: true,
        polyfill: true,
    };

    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public constructor(options: HotModuleReplacementPackOptions = {}) {
        this.options = {
            ...this.defaults,
            ...options,
        };
    }

    public generate(): webpack.Configuration {
        const hmr = new webpack.HotModuleReplacementPlugin();

        this.configuration.plugins!.push(hmr);

        return this.configuration;
    }

    public process(configuration: webpack.Configuration & {
        entry: {
            [key: string]: string[];
        };
    }): webpack.Configuration {
        const middleware = 'webpack-hot-middleware/client';
        const query = `overlay=${this.options.overlay}&noInfo=${!this.options.info}&reload=${this.options.reload}`;

        for (const entry in configuration.entry as {}) {
            configuration.entry[entry].push(`${middleware}?${query}`);

            if (this.options.polyfill) {
                configuration.entry[entry].push('eventsource/eventsource-polyfill');
                configuration.entry[entry].push('promise-polyfill/src/polyfill');
            }
        }

        return configuration;
    }
}
