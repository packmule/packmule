import webpack from 'webpack';
import { Options, Pack } from '@packmule/core';

type TargetArgument =
    | 'web'
    | 'webworker'
    | 'node'
    | 'async-node'
    | 'node-webkit'
    | 'atom'
    | 'electron'
    | 'electron-renderer'
    | 'electron-main'
    | ((compiler?: any) => void);

interface PackOptions {
    target?: TargetArgument;
}

export default class Entry implements Pack {
    private options: PackOptions;
    private configuration: webpack.Configuration = {};

    public constructor(target: TargetArgument) {
        this.options = {
            target,
        };
    }

    public generate(options: Options): webpack.Configuration {
        this.configuration.target = this.options.target;
        return this.configuration;
    }
}
