import * as webpack from 'webpack';
import * as micromatch from 'micromatch';
import * as VuePlugin from 'vue-loader/lib/plugin';
import Pack, {PackIncludeOption} from '../Core/Pack';
import Options from '../Core/Options';

interface VuePackOptions {
    include?: PackIncludeOption;
}

export default class VuePack implements Pack {
    private options: VuePackOptions;
    private defaults: VuePackOptions = {
        include: () => true,
    };

    private configuration: webpack.Configuration= {
        resolve: {
            extensions: ['.vue'],
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
        this.options.include = typeof include === 'string'
            ? micromatch.makeRe(include, { dot: true })
            : include;

        return this;
    }

    public generate(options: Options): webpack.Configuration {
        const plugin = new VuePlugin();

        const rule: webpack.RuleSetRule = {
            test: /\.vue$/,
            include: this.options.include,
            use: [],
        };

        const compilation: webpack.Loader = {
            loader: 'vue-loader',
            options: {
                prettify: options.debug,
                exposeFilename: options.debug,
            },
        };

        Array.isArray(rule.use) && rule.use.push(compilation);

        this.configuration.module!.rules.push(rule);
        this.configuration.plugins!.push(plugin);

        return this.configuration;
    }
}
