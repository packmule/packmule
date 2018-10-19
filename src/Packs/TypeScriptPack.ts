import * as micromatch from 'micromatch';
import * as webpack from 'webpack';
import Pack, { PackIncludeOption } from '../Core/Pack';
import Options from '../Core/Options';

interface TypeScriptPackOptions {
    include?: PackIncludeOption;
}

export default class TypeScriptPack implements Pack {
    private options: TypeScriptPackOptions;
    private defaults: TypeScriptPackOptions = {
        include: () => true,
    };

    private configuration: webpack.Configuration = {
        resolve: {
            extensions: ['.ts', '.tsx'],
        },
        module: {
            rules: [],
        },
    };

    constructor() {
        this.options = this.defaults;
    }

    public include(include: PackIncludeOption): this {
        this.options.include = typeof include === 'string'
            ? micromatch.makeRe(include, { dot: true })
            : include;

        return this;
    }

    public generate(options: Options): webpack.Configuration {
        const rule: webpack.RuleSetRule = {
            test: /\.tsx?$/,
            include: this.options.include,
            use: [],
        };

        const transpilation: webpack.Loader = {
            loader: 'babel-loader',
            options: {
                cacheDirectory: options.cache,
            },
        };

        const compilation: webpack.Loader = {
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

        this.configuration.module!.rules.push(rule);

        if (options.lint) {
            const linter: webpack.RuleSetRule = {
                test: /\.tsx?$/,
                include: this.options.include,
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

            this.configuration.module!.rules.push(linter);
        }

        return this.configuration;
    }
}
