import { resolve } from 'path';
import webpack from 'webpack';
import { Hints, Options, Pack } from '@packmule/core';

interface PackOptions {
    path?: string;
    web?: string;
    clean?: boolean;
}

export default class OutputPack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {};

    private configuration: webpack.Configuration = {
        output: {
            pathinfo: false,
        },
    };

    public constructor(path: string, web: string = '/', clean: boolean = true) {
        this.options = {
            ...this.defaults,
            ...{ path, web, clean },
        };
    }

    public generate(options: Options, hints: Hints): webpack.Configuration {
        if (this.configuration.output) {
            this.configuration.output.clean = this.options.clean;
            this.configuration.output.path = resolve(options.root!, this.options.path!);
            this.configuration.output.publicPath = this.options.web;
            this.configuration.output.filename = hints.hash ? '[name].[contenthash:8].js' : '[name].js';
            this.configuration.output.chunkFilename = hints.hash
                ? 'chunks/[name].[contenthash:8].js'
                : 'chunks/[name].js';
        }

        return this.configuration;
    }
}
