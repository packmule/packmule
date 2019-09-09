import { resolve } from 'path';
import webpack from 'webpack';
import { Options, Pack } from '@packmule/core';

interface PackOptions {
    path?: string;
    web?: string;
}

export default class OutputPack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {};

    private configuration: webpack.Configuration = {
        output: {},
    };

    public constructor(path: string, web: string = '/') {
        this.options = {
            ...this.defaults,
            ...{ path, web },
        };
    }

    public generate(options: Options): webpack.Configuration {
        if (this.configuration.output) {
            this.configuration.output.path = resolve(options.root!, this.options.path!);
            this.configuration.output.publicPath = this.options.web;
            this.configuration.output.filename = options.hash ? '[name].[contenthash:8].js' : '[name].js';
            this.configuration.output.chunkFilename = options.hash
                ? 'chunks/[name].[contenthash:8].js'
                : 'chunks/[name].js';
        }

        return this.configuration;
    }
}
