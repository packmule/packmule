import * as webpack from 'webpack';
import Pack from '../Core/Pack';

interface Options {
    name: string;
}

export default class RuntimePack implements Pack {
    private options: Options = {
        name: '',
    };
    private configuration: webpack.Configuration;

    public constructor(name: string) {
        this.options.name = name;
    }

    public generate(): webpack.Configuration {
        this.configuration = {
            optimization: {
                runtimeChunk: {
                    name: this.options.name,
                },
            },
        };

        return this.configuration;
    }
}
