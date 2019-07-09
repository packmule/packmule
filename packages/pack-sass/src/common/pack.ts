import webpack from 'webpack';
import sass from 'sass';
import fibers from 'fibers';
import ExtractPlugin from 'mini-css-extract-plugin';
import OptimizePlugin from 'optimize-css-assets-webpack-plugin';
import LintPlugin from 'stylelint-webpack-plugin';
import { Options, Pack } from '@packmule/core';

interface PackOptions {
    modules?: boolean;
    importers?: Function[];
}

export default class SassPack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
        modules: false,
        importers: [],
    };

    private configuration: webpack.Configuration= {
        resolve: {
            extensions: ['.scss', '.sass'],
        },
        module: {
            rules: [],
        },
        optimization: {
            minimizer: [],
        },
        plugins: [],
    };

    constructor() {
        this.options = this.defaults;
    }

    public importer(importer: Function): this {
        this.options.importers!.push(importer);
        return this;
    }

    public modules(): this {
        this.options.modules = true;
        return this;
    }

    public generate(options: Options): webpack.Configuration {
        let loaders: webpack.Loader[] | webpack.Loader = [
            {
                loader: 'css-loader',
                options: {
                    modules: this.options.modules,
                    sourceMap: options.debug,
                },
            },
            { loader: 'postcss-loader', options: { sourceMap: options.debug } },
            {
                loader: 'resolve-url-loader',
                options: {
                    engine: 'postcss',
                    sourceMap: options.debug,
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    implementation: sass,
                    fiber: fibers,
                    sourceMap: true,
                    importer: this.options.importers,
                },
            },
        ];

        if (options.lint) {
            const lint = new LintPlugin({
                fix: options.fix,
                emitErrors: false,
                failOnError: false,
                lintDirtyModulesOnly: true,
            });

            this.configuration.plugins!.push(lint);
        }

        if (options.extract) {
            const extraction = new ExtractPlugin({
                filename: options.hash ? '[name].[contenthash:8].css' : '[name].css',
                chunkFilename: options.hash ? 'chunks/[name].[contenthash:8].css' : 'chunks/[name].css',
            });

            this.configuration.plugins!.push(extraction);

            loaders = [
                ExtractPlugin.loader,
                ...loaders,
            ];
        } else {
            loaders = [
                {
                    loader: 'style-loader',
                    options: {
                        sourceMap: options.debug,
                    },
                },
                ...loaders,
            ];
        }

        if (options.optimize) {
            const optimization = new OptimizePlugin();
            this.configuration.optimization!.minimizer!.push(optimization);
        }

        const rule: webpack.RuleSetRule = {
            test: /\.s[ac]ss$/,
            use: loaders,
        };

        this.configuration.module!.rules.push(rule);

        return this.configuration;
    }
}
