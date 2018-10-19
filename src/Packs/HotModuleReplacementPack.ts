import * as webpack from 'webpack';
import Pack from '../Core/Pack';

export default class HotModuleReplacementPack implements Pack {
    private options: {
        overlay?: boolean;
        info?: boolean;
        reload?: boolean;
    } = {
        overlay: true,
        info: true,
        reload: true,
    };

    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public constructor(options?: {}) {
        this.options = {...this.options, ...options};
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
        }

        return configuration;
    }
}
