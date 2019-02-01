import webpack from 'webpack';
import micromatch from 'micromatch';
import Pack, { PackIncludeOption } from '../Core/Pack';
import Options from '../Core/Options';

interface JavaScriptPackOptions {
    include?: PackIncludeOption;
}

export default class JavaScriptPack implements Pack {
    private options: JavaScriptPackOptions;
    private defaults: JavaScriptPackOptions = {
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
        this.options.include = typeof include === 'string'
            ? micromatch.makeRe(include, { dot: true })
            : include;

        return this;
    }

    public generate(options: Options): webpack.Configuration {
        const rule: webpack.RuleSetRule = {
            test: /\.js$/,
            include: this.options.include,
            use: [],
        };

        const transpilation: webpack.Loader = {
            loader: 'babel-loader',
            options: {
                cacheDirectory: options.cache,
            },
        };

        Array.isArray(rule.use) && rule.use.push(transpilation);

        this.configuration.module!.rules.push(rule);

        return this.configuration;
    }
}
