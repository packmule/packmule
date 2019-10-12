import webpack from 'webpack';
import { Hints, Options, Pack } from '@packmule/core';

type PackArgument = webpack.Configuration | ((options: Options, hints: Hints) => webpack.Configuration);

export default class RawPack implements Pack {
    private readonly configuration: PackArgument;

    public constructor(configuration: PackArgument) {
        this.configuration = configuration;
    }

    public generate(options: Options, hints: Hints): webpack.Configuration {
        return this.configuration instanceof Function ? this.configuration(options, hints) : this.configuration;
    }
}
