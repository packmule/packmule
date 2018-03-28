import * as micromatch from 'micromatch';
import * as webpack from 'webpack';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

interface JavaScriptPackOptions {
    glob?: string;
}

export default class JavaScriptPack implements Pack {
    private options: JavaScriptPackOptions = {};

    private configuration: webpack.Configuration &{
        module: webpack.NewModule;
    } = {
        resolve: {
            extensions: ['.js'],
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
        const rule: webpack.NewUseRule = {
            test: /\.js$/,
            include: (path: string) => (this.options.glob ? micromatch.isMatch(path, this.options.glob) : true),
            use: [],
        };

        const transpilation: webpack.NewLoader = {
            loader: 'babel-loader',
            options: {
                cacheDirectory: options.cache,
            },
        };

        Array.isArray(rule.use) && rule.use.push(transpilation);

        this.configuration.module.rules.push(rule);

        return this.configuration;
    }
}
