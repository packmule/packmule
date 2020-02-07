import webpack from 'webpack';
import { Pack } from '@packmule/core';

interface PackOptions {
    name: string;
}

export default class NamePack implements Pack {
    private options: PackOptions;

    private configuration: webpack.Configuration = {};

    public constructor(name: string) {
        this.options.name = name;
    }

    public generate(): webpack.Configuration {
        this.configuration.name = this.options.name;

        return this.configuration;
    }
}
