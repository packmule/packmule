import webpack from 'webpack';
import sass from 'sass';
import fibers from 'fibers';
import ExtractPlugin from 'mini-css-extract-plugin';
import OptimizePlugin from 'optimize-css-assets-webpack-plugin';
import LintPlugin from 'stylelint-webpack-plugin';
import { Hints, Options, Pack } from '@packmule/core';

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

    private configuration: webpack.Configuration = {
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

    public generate(options: Options, hints: Hints): webpack.Configuration {
        let loaders: webpack.Loader[] | webpack.Loader = [
            {
                loader: 'css-loader',
                options: {
                    modules: this.options.modules,
                    sourceMap: hints.map,
                },
            },
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: hints.map,
                },
            },
            {
                loader: 'resolve-url-loader',
                options: {
                    engine: 'postcss',
                    sourceMap: hints.map,
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    implementation: sass,
                    sourceMap: true,
                    sassOptions: {
                        fiber: fibers,
                        importer: this.options.importers,
                    },
                },
            },
        ];

        if (hints.lint) {
            const lint = new LintPlugin({
                context: options.root,
                lintDirtyModulesOnly: true,
                files: '**/*.s(a|c)ss',
            });

            this.configuration.plugins!.push(lint);
        }

        if (hints.extract) {
            const extraction = new ExtractPlugin({
                filename: hints.hash ? '[name].[contenthash:8].css' : '[name].css',
                chunkFilename: hints.hash ? 'chunks/[name].[contenthash:8].css' : 'chunks/[name].css',
            });

            this.configuration.plugins!.push(extraction);

            loaders = [ExtractPlugin.loader, ...loaders];
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

        if (hints.optimize) {
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
