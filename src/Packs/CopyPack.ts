import webpack from 'webpack';
import micromatch from 'micromatch';
import Pack, { PackIncludeOption } from '../Core/Pack';

interface CopyPackOptions {
    path?: string;
    include?: PackIncludeOption;
}

export default class CopyPack implements Pack {
    private options: CopyPackOptions;
    private defaults: CopyPackOptions = {};

    private configuration: webpack.Configuration & {
        module: webpack.Module;
    } = {
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

    public to(path: string): this {
        this.options.path = path;
        return this;
    }

    public generate(): webpack.Configuration {
        const rule: webpack.RuleSetRule = {
            test: /.+/,
            type: 'javascript/auto',
            include: this.options.include,
            use: [] as any[],
        };

        const extraction: webpack.Loader = {
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
