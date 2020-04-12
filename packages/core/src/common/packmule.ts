import webpack from 'webpack';
import merge from 'webpack-merge';
import dir from 'pkg-dir';
import parallel from 'parallel-webpack';
import presets from './presets';
import Pack from './pack';
import Hints from './hints';
import Options from './options';
import BasePack from '../packs/base';
import OptimizationPack from '../packs/optimization';
import MinificationPack from '../packs/minification';

export default class Packmule {
    private readonly packs: Map<Pack, Hints | undefined> = new Map();
    private readonly options: Options;
    private readonly hints: Hints;
    private readonly variants: any;

    private defaults: Options = {
        mode: 'none',
        root: dir.sync(process.cwd()),
        debug: false,
    };

    public constructor(mode?: 'development' | 'production' | 'none', options?: Options, hints?: Hints) {
        this.options = { ...this.defaults, ...{ mode: mode || this.defaults.mode }, ...options };
        this.hints = { ...presets[this.options.mode!], ...hints };

        this.add(new BasePack());
        this.add(new OptimizationPack());
        this.add(new MinificationPack());
    }

    public add(pack: Pack, hints?: Hints): this {
        this.packs.set(pack, hints);
        return this;
    }

    public remove(pack: Pack): this {
        this.packs.delete(pack);
        return this;
    }

    public vary(name: string, values: any[]): this {
        this.variants[name] = values;
        return this;
    }

    public generate(): webpack.Configuration | webpack.Configuration[] {
        if (this.variants) {
            return parallel.createVariants({}, this.variants, this.process);
        } else {
            return this.process();
        }
    }

    private process(vary?: any): webpack.Configuration {
        const parts: webpack.Configuration[] = [];

        this.packs.forEach((hints, pack) => {
            pack.generate &&
                parts.push(
                    pack.generate(this.options, {
                        ...this.hints,
                        ...hints,
                        ...{ vary },
                    }),
                );
        });

        let configuration = merge(...parts);

        this.packs.forEach((hints, pack) => {
            pack.process &&
                (configuration = pack.process(configuration, this.options, {
                    ...this.hints,
                    ...hints,
                    ...{ vary },
                }));
        });

        return configuration;
    }
}
