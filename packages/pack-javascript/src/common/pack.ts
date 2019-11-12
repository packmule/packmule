import webpack from 'webpack';
import micromatch from 'micromatch';
import formatter from 'eslint-formatter-pretty';
import LintPlugin from 'eslint-webpack-plugin';
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
        plugins: [],
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

        this.configuration.module!.rules.push(rule);

        if (hints.lint) {
            const lint = new LintPlugin({
                context: options.root,
                extensions: ['.js'],
                cache: hints.cache,
                fix: hints.fix,
                lintDirtyModulesOnly: hints.watch,
                formatter: formatter,
            });

            this.configuration.plugins!.push(lint);
        }

        return this.configuration;
    }
}
