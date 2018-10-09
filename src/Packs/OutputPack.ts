import { resolve } from 'path';
import * as webpack from 'webpack';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

interface OutputPackOptions {
    path: string;
    web: string;
}

export default class OutputPack implements Pack {
    private options: OutputPackOptions;

    private configuration: webpack.Configuration = {
        output: {},
    };

    public constructor(path: string, web: string = '/') {
        this.options = {
            path,
            web,
        };
    }

    public generate(options: Options): webpack.Configuration {
        if (this.configuration.output) {
            this.configuration.output.path = resolve(options.root!, this.options.path);
            this.configuration.output.publicPath = this.options.web;
            this.configuration.output.filename = options.hash ? '[name].[contenthash:8].js' : '[name].js';
            this.configuration.output.chunkFilename = options.hash ? 'chunks/[name].[contenthash:8].js' : 'chunks/[name].js';
        }

        return this.configuration;
    }
}
