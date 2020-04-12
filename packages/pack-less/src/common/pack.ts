import webpack from 'webpack';
import ExtractPlugin from 'mini-css-extract-plugin';
import OptimizePlugin from 'optimize-css-assets-webpack-plugin';
import LintPlugin from 'stylelint-webpack-plugin';
import { Hints, Options, Pack } from '@packmule/core';

interface PackOptions {
    modules?: boolean;
}

export default class LessPack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
        modules: false,
    };

    private configuration: webpack.Configuration = {
        resolve: {
            extensions: ['.css', '.less'],
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
                loader: 'less-loader',
                options: {
                    sourceMap: true,
                    relativeUrls: false,
                },
            },
        ];

        if (hints.lint) {
            const lint = new LintPlugin({
                context: options.root,
                lintDirtyModulesOnly: true,
                files: ['**/*.{css,less}'],
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
            test: /\.(css|less)$/,
            use: loaders,
        };

        this.configuration.module!.rules.push(rule);

        return this.configuration;
    }
}
