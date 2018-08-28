import * as webpack from 'webpack';
import * as ExtractPlugin from 'mini-css-extract-plugin';
import * as LintPlugin from 'stylelint-webpack-plugin';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

export default class SassPack implements Pack {
    private configuration: webpack.Configuration &{
        module: webpack.Module;
    } = {
        resolve: {
            extensions: ['.scss', '.sass'],
        },
        module: {
            rules: [],
        },
        plugins: [],
    };

    public generate (options: Options): webpack.Configuration {
        let loaders: webpack.Loader[] | webpack.Loader = [
            { loader: 'css-loader', options: { sourceMap: false, minimize: options.optimize } },
            { loader: 'postcss-loader', options: { sourceMap: options.debug } },
            { loader: 'sass-loader', options: { sourceMap: options.debug } },
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
                filename: '[name].css',
                chunkFilename: '[name].css',
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

        const rule: webpack.RuleSetRule = {
            test: /\.s[ac]ss$/,
            use: loaders,
        };

        this.configuration.module.rules.push(rule);

        return this.configuration;
    }
}
