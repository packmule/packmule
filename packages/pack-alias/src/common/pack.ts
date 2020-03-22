import path from 'path';
import webpack from 'webpack';
import { Options, Pack } from '@packmule/core';

interface PackOptions {
    name: string;
    target: string;
}

export default class AliasPack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
        name: '',
        target: '',
    };

    private configuration: webpack.Configuration = {
        resolve: {
            alias: {},
        },
    };

    public constructor(name: string, target: string) {
        this.options = {
            ...this.defaults,
            ...{ name, target },
        };
    }

    public generate(options: Options): webpack.Configuration {
        this.configuration.resolve!.alias![this.options.name] = path.resolve(options.root!, this.options.target);

        return this.configuration;
    }
}
