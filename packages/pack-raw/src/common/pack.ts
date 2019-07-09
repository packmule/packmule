import webpack from 'webpack';
import { Pack } from '@packmule/core';

export default class RawPack implements Pack {
    private configuration: webpack.Configuration;

    public constructor(configuration: webpack.Configuration) {
        this.configuration = configuration;
    }

    public generate(): webpack.Configuration {
        return this.configuration;
    }
}
