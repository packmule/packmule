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
        output: {
            filename: '[name].js',
            chunkFilename: 'chunks/[name].js',
        },
    };

    public constructor(path: string, web: string = '/') {
        this.options = {
            path,
            web,
        };
    }

    public generate(options: Options): webpack.Configuration {
        this.configuration.output!.path = resolve(options.root!, this.options.path);
        this.configuration.output!.publicPath = this.options.web;

        return this.configuration;
    }
}
