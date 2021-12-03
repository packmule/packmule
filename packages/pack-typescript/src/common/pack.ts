import webpack from 'webpack';
import micromatch from 'micromatch';
import browserslist from 'browserslist-to-esbuild';
import formatter from 'eslint-formatter-pretty';
import LintPlugin from 'eslint-webpack-plugin';
import { Hints, Options, Pack, PackIncludeOption } from '@packmule/core';

interface PackOptions {
    include?: PackIncludeOption;
}

export default class TypeScriptPack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
        include: () => true,
    };

    private configuration: webpack.Configuration = {
        resolve: {
            extensions: ['.ts', '.tsx'],
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
            test: /\.tsx?$/,
            include: this.options.include,
            use: [],
        };

        const compilation: webpack.RuleSetRule = {
            loader: 'esbuild-loader',
            options: {
                loader: 'tsx',
                target: browserslist(),
            },
        };

        if (Array.isArray(rule.use)) {
            rule.use.push(compilation);
        }

        this.configuration.module!.rules!.push(rule);

        if (hints.lint) {
            const lint = new LintPlugin({
                context: options.root,
                extensions: ['.ts', '.tsx'],
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
