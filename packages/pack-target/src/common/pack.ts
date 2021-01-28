import webpack from 'webpack';
import { Options, Pack } from '@packmule/core';

interface PackOptions {
    target?: string | false | string[];
}

export default class Entry implements Pack {
    private options: PackOptions;
    private configuration: webpack.Configuration = {};

    public constructor(target: string | false | string[]) {
        this.options = {
            target,
        };
    }

    public generate(options: Options): webpack.Configuration {
        this.configuration.target = this.options.target;
        return this.configuration;
    }
}
