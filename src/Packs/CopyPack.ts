import * as micromatch from 'micromatch';
import * as webpack from 'webpack';
import Pack from '../Core/Pack';

interface CopyPackOptions {
    path?: string;
    glob?: string;
}

export default class CopyPack implements Pack {
    private options: CopyPackOptions = {};

    private configuration: webpack.Configuration & {
        module: webpack.Module;
    } = {
        module: {
            rules: [],
        },
    };

    public include(glob: string): this {
        this.options.glob = glob;
        return this;
    }

    public to(path: string): this {
        this.options.path = path;
        return this;
    }

    public generate(): webpack.Configuration {
        const rule: webpack.RuleSetRule = {
            test: /.+/,
            type: 'javascript/auto',
            include: (path: string) => (this.options.glob ? micromatch.isMatch(path, this.options.glob, { dot: true }) : false),
            use: [] as any[],
        };

        const extraction: webpack.NewLoader = {
            loader: 'file-loader',
            options:  {
                name: '[name].[ext]',
                outputPath: this.options.path,
            },
        };

        Array.isArray(rule.use) && rule.use.push(extraction);

        this.configuration.module.rules.push(rule);

        return this.configuration;
    }
}
