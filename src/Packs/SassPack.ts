import webpack from 'webpack';
import ExtractPlugin from 'mini-css-extract-plugin';
import OptimizePlugin from 'optimize-css-assets-webpack-plugin';
import LintPlugin from 'stylelint-webpack-plugin';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

interface SassPackOptions {
    importers?: Function[],
}

export default class SassPack implements Pack {
    private options: SassPackOptions;
    private defaults: SassPackOptions = {
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

    public generate(options: Options): webpack.Configuration {
        let loaders: webpack.Loader[] | webpack.Loader = [
            {
                loader: 'css-loader',
                options: {
                    esModule: true,
                    sourceMap: options.debug,
                },
            },
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: options.debug,
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: options.debug,
                    sassOptions: {
                        importer: this.options.importers,
                    },
                },
            },
        ];

        if (options.lint) {
            const lint = new LintPlugin({
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
                {
                    loader: ExtractPlugin.loader,
                    esModule: true,
                },
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
