import * as micromatch from 'micromatch';
import * as webpack from 'webpack';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

interface TypeScriptPackOptions {
    glob?: string;
}

export default class TypeScriptPack implements Pack {
    private options: TypeScriptPackOptions = {};

    private configuration: webpack.Configuration &{
        module: webpack.Module;
    } = {
        resolve: {
            extensions: ['.ts', '.tsx'],
        },
        module: {
            rules: [],
        },
    };

    public include (glob: string): this {
        this.options.glob = glob;
        return this;
    }

    public generate (options: Options): webpack.Configuration {
        const rule: webpack.RuleSetRule = {
            test: /\.tsx?$/,
            include: (path: string) => this.options.glob ? micromatch.isMatch(path, this.options.glob) : true,
            use: [],
        };

        const transpilation: webpack.NewLoader = {
            loader: 'babel-loader',
            options: {
                cacheDirectory: options.cache,
            },
        };

        const compilation: webpack.NewLoader = {
            loader: 'ts-loader',
            options: {
                logLevel: 'warn',
                onlyCompileBundledFiles: true,
                compilerOptions: {
                    sourceMap: options.debug,
                },
            },
        };

        if (Array.isArray(rule.use)) {
            rule.use.push(transpilation);
            rule.use.push(compilation);
        }

        this.configuration.module.rules.push(rule);

        if (options.lint) {
            const linter: webpack.RuleSetRule = {
                test: /\.tsx?$/,
                include: (path: string) => (this.options.glob ? micromatch.isMatch(path, this.options.glob) : true),
                enforce: 'pre',
                use: [
                    {
                        loader: 'tslint-loader',
                        options: {
                            tsConfigFile: 'assets/tsconfig.json',
                        },
                    },
                ],
            };

            this.configuration.module.rules.push(linter);
        }

        return this.configuration;
    }
}
