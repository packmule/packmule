import webpack from 'webpack';
import Pack from '../Core/Pack';

interface RuntimePackOptions {
    name?: string | ((...args: any[]) => any);
}

export default class RuntimePack implements Pack {
    private options: RuntimePackOptions;
    private defaults: RuntimePackOptions = {
        name: 'runtime',
    };

    private configuration: webpack.Configuration = {
        optimization: {},
    };

    public constructor(name?: string | ((...args: any[]) => any)) {
        this.options = this.defaults;

        if (name) {
            this.options.name = name;
        }
    }

    public generate(): webpack.Configuration {
        this.configuration.optimization!.runtimeChunk = {
            name: this.options.name,
        };

        return this.configuration;
    }
}
