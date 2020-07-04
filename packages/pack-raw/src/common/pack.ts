import merge from 'webpack-merge';
import webpack from 'webpack';
import { Hints, Options, Pack } from '@packmule/core';

type GenerateArgument = (options: Options, hints: Hints) => webpack.Configuration;
type ProcessArgument = (
    configuration: webpack.Configuration,
    options?: Options,
    hints?: Hints,
) => webpack.Configuration;

interface PackOptions {
    generate?: GenerateArgument;
    process?: ProcessArgument;
}

export default class RawPack implements Pack {
    private options: PackOptions = {};

    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public constructor(generate?: GenerateArgument, process?: ProcessArgument) {
        this.options.generate = generate;
        this.options.process = process;
    }

    public plugin(plugin: webpack.Plugin): this {
        this.configuration.plugins!.push(plugin);
        return this;
    }

    public generate(options: Options, hints: Hints): webpack.Configuration {
        const configuration = this.options.generate ? this.options.generate!(options, hints) : {};
        return merge(configuration, this.configuration);
    }

    public process(configuration: webpack.Configuration, options?: Options, hints?: Hints): webpack.Configuration {
        return this.options.process ? this.options.process(configuration, options, hints) : configuration;
    }
}
