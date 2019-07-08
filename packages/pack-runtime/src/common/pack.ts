import webpack from 'webpack';
import { Pack } from '@packmule/core';

interface PackOptions {
    name?: string | ((...args: any[]) => any);
}

export default class RuntimePack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
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
