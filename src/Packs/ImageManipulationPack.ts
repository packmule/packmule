import * as micromatch from 'micromatch';
import * as multi from 'multi-loader';
import * as combine from 'webpack-combine-loaders';
import * as webpack from 'webpack';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

export default class ImageManipulationPack implements Pack {
    private glob: string;
    private instructions: any[] = [];

    private configuration: webpack.Configuration & {
        module: webpack.Module;
    } = {
        module: {
            rules: [] as any[],
        },
    };

    public include(glob: string): this {
        this.glob = glob;
        return this;
    }

    public set(name: string, options: any): this {
        this.instructions.push({name, options});
        return this;
    }

    public generate(options: Options): webpack.Configuration {
        const use: any[] = [];
        const rule: webpack.RuleSetRule = {
            test: /\.(svg|gif|png|jpe?g|webp|tiff)$/,
            include: (path: string) => (this.glob ? micromatch.isMatch(path, this.glob, { dot: true }) : true),
            use: [],
        };

        this.instructions.forEach((instruction: any) => {
            const loaders = [];

            const extraction: webpack.NewLoader = {
                loader: 'file-loader',
                options: {
                    name: `[name]-${instruction.name}.[ext]`,
                    outputPath: 'icons/',
                },
            };

            loaders.push(extraction);

            if (options.optimize) {
                const optimization: webpack.NewLoader = {
                    loader: 'image-webpack-loader',
                    options: {},
                };

                loaders.push(optimization);
            }

            const manipulation: webpack.NewLoader = {
                loader: 'sharp-image-loader',
                options: instruction.options,
            };

            loaders.push(manipulation);

            use.push(combine(loaders));
        });

        rule.use = multi(...use);

        this.configuration.module.rules.push(rule);

        return this.configuration;
    }
}
