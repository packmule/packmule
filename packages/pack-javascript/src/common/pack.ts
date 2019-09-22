import webpack from 'webpack';
import micromatch from 'micromatch';
import formatter from 'eslint-formatter-pretty';
import { Hints, Options, Pack, PackIncludeOption } from '@packmule/core';

interface PackOptions {
    include?: PackIncludeOption;
}

export default class JavaScriptPack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
        include: () => true,
    };

    private configuration: webpack.Configuration = {
        resolve: {
            extensions: ['.js'],
        },
        module: {
            rules: [],
        },
    };

    constructor() {
        this.options = this.defaults;
    }

    public include(include: PackIncludeOption): this {
        this.options.include = typeof include === 'string' ? micromatch.makeRe(include, { dot: true }) : include;

        return this;
    }

    public generate(options: Options, hints: Hints): webpack.Configuration {
        const rule: webpack.RuleSetRule = {
            test: /\.js$/,
            include: this.options.include,
            use: [],
        };

        const transpilation: webpack.Loader = {
            loader: 'babel-loader',
            options: {
                cacheDirectory: hints.cache,
            },
        };

        Array.isArray(rule.use) && rule.use.push(transpilation);

        if (hints.lint) {
            const linting: webpack.Loader = {
                loader: 'eslint-loader',
                options: {
                    fix: hints.fix,
                    cache: hints.cache,
                    formatter: formatter,
                },
            };

            if (Array.isArray(rule.use)) {
                rule.use.push(linting);
            }
        }

        this.configuration.module!.rules.push(rule);

        return this.configuration;
    }
}
