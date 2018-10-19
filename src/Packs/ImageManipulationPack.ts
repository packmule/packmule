import * as micromatch from 'micromatch';
import * as multi from 'multi-loader';
import * as combine from 'webpack-combine-loaders';
import * as webpack from 'webpack';
import Options from '../Core/Options';
import Pack, { PackIncludeOption } from '../Core/Pack';

interface ImageManipulationPackOptions {
    instructions?: any[];
    include?: PackIncludeOption;
}

export default class ImageManipulationPack implements Pack {
    private options: ImageManipulationPackOptions;
    private defaults: ImageManipulationPackOptions = {
        instructions: [],
        include: () => true,
    };

    private configuration: webpack.Configuration = {
        module: {
            rules: [] as any[],
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

    public set(name: string, options: any): this {
        this.options.instructions!.push({name, options});
        return this;
    }

    public generate(options: Options): webpack.Configuration {
        const use: any[] = [];
        const rule: webpack.RuleSetRule = {
            test: /\.(svg|gif|png|jpe?g|webp|tiff)$/,
            include: this.options.include,
            use: [],
        };

        this.options.instructions!.forEach((instruction: any) => {
            const loaders = [];

            const extraction: webpack.Loader = {
                loader: 'file-loader',
                options: {
                    name: `[name]-${instruction.name}.[ext]`,
                    outputPath: 'icons/',
                },
            };

            loaders.push(extraction);

            if (options.optimize) {
                const optimization: webpack.Loader = {
                    loader: 'image-webpack-loader',
                    options: {},
                };

                loaders.push(optimization);
            }

            const manipulation: webpack.Loader = {
                loader: 'sharp-image-loader',
                options: instruction.options,
            };

            loaders.push(manipulation);

            use.push(combine(loaders));
        });

        rule.use = multi(...use);

        this.configuration.module!.rules.push(rule);

        return this.configuration;
    }
}
