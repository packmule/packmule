import webpack from 'webpack';
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
            extensions: ['.css', '.scss', '.sass'],
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
                    esModule: true,
                    modules: this.options.modules,
                    sourceMap: hints.map,
                },
            },
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: hints.map,
                    ctx: {
                        options,
                        hints,
                    },
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
                    sourceMap: true,
                    sassOptions: {
                        importer: this.options.importers,
                    },
                },
            },
        ];

        if (hints.lint) {
            const lint = new LintPlugin({
                context: options.root,
                lintDirtyModulesOnly: true,
                files: ['**/*.{css,scss,sass}'],
                fix: hints.fix,
                quiet: !options.debug,
            });

            this.configuration.plugins!.push(lint);
        }

        if (hints.extract) {
            const extraction = new ExtractPlugin({
                esModule: true,
                filename: hints.hash ? '[name].[contenthash:8].css' : '[name].css',
                chunkFilename: hints.hash ? 'chunks/[name].[contenthash:8].css' : 'chunks/[name].css',
            });

            this.configuration.plugins!.push(extraction);

            loaders = [
                {
                    loader: ExtractPlugin.loader,
                    options: {
                        esModule: true,
                    },
                },
                ...loaders,
            ];
        } else {
            loaders = [
                {
                    loader: 'style-loader',
                    options: {
                        esModule: true,
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
            test: /\.(css|scss|sass)$/,
            use: loaders,
        };

        this.configuration.module!.rules.push(rule);

        return this.configuration;
    }
}
