import webpack from 'webpack';
import { Hints, Options, Pack } from '@packmule/core';

type GenerateArgument = (options: Options, hints: Hints) => webpack.Configuration;
type ProcessArgument = (configuration: webpack.Configuration) => webpack.Configuration;

interface PackOptions {
    generate?: GenerateArgument;
    process?: ProcessArgument;
}

export default class RawPack implements Pack {
    private options: PackOptions;

    public constructor(generate: GenerateArgument, process?: ProcessArgument) {
        this.options.generate = generate;
        this.options.process = process;
    }

    public generate(options: Options, hints: Hints): webpack.Configuration {
        return this.options.generate!(options, hints);
    }

    public process(configuration: webpack.Configuration): webpack.Configuration {
        return this.options.process ? this.options.process(configuration) : configuration;
    }
}
