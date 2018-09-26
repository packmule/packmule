import * as webpack from 'webpack';
import Pack from '../Core/Pack';

interface Options {
    name?: string;
}

export default class RuntimePack implements Pack {
    private options: Options = {
        name: 'runtime',
    };
    private configuration: webpack.Configuration = {
        optimization: {},
    };

    public constructor(name?: string) {
        this.options.name = name;
    }

    public generate(): webpack.Configuration {
        this.configuration.optimization!.runtimeChunk = {
            name: this.options.name,
        };

        return this.configuration;
    }
}
