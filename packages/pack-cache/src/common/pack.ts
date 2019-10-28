import webpack from 'webpack';
import { Hints, Options, Pack } from '@packmule/core';

interface PackOptions {
    dependencies?: {
        [key: string]: string;
    };
}

export default class CachePack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
        dependencies: {},
    };

    private configuration: webpack.Configuration = {
        cache: false,
    };

    public constructor() {
        this.options = this.defaults;
    }

    public add(path: string): void {
        this.options.dependencies!.path = path;
    }

    public remove(path: string): void {
        delete this.options.dependencies!.path;
    }

    public generate(options: Options, hints: Hints): webpack.Configuration {
        if (hints.cache) {
            this.configuration.cache = {
                type: 'filesystem',
                buildDependencies: this.options.dependencies,
            };
        }

        return this.configuration;
    }
}
