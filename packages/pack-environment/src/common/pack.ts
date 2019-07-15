import webpack from 'webpack';
import DotenvPlugin from 'dotenv-webpack';
import { Options, Pack } from '@packmule/core';

interface PackOptions {
    path?: string;
    environment?: {
        [index: string]: any;
    };
}

export default class EnvironmentPack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
        path: '.env',
        environment: {},
    };

    private configuration: webpack.Configuration = {
        plugins: [],
    };

    constructor(path?: string) {
        this.options = {
            ...this.defaults,
            ...{
                path,
            },
        };
    }

    public set(key: string, value: any): this {
        this.options.environment![key] = value;

        return this;
    }

    public generate(options: Options): webpack.Configuration {
        const configuration = new DotenvPlugin({
            path: `${options.root}/${this.options.path}`,
            silent: !options.debug,
        });

        this.configuration.plugins!.push(configuration);

        const environment = new webpack.EnvironmentPlugin(this.options.environment!);

        this.configuration.plugins!.push(environment);

        return this.configuration;
    }
}
