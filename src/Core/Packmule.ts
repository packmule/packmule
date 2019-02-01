import webpack from 'webpack';
import merge from 'webpack-merge';
import dir from 'pkg-dir';
import Pack from './Pack';
import Options from './Options';
import BasePack from './Packs/BasePack';
import OptimizationPack from './Packs/OptimizationPack';
import MinificationPack from './Packs/MinificationPack';

export default class Packmule {
    private packs: Pack[] = [];
    private options: Options = {};
    private defaults: Options = {
        root: dir.sync(process.cwd()),
        optimize: false,
        extract: false,
        notify: false,
        watch: false,
        lint: false,
        debug: false,
        cache: true,
        hash: false,
    };

    public constructor(options: Options = {}) {
        this.options = {...this.defaults, ...options};
        this.register(new BasePack());
        this.register(new OptimizationPack());
        this.register(new MinificationPack());
    }

    public register(pack: Pack): this {
        this.packs.push(pack);
        return this;
    }

    public generate(): webpack.Configuration {
        const parts: webpack.Configuration[] = [];

        this.packs.forEach((pack: Pack) => {
            pack.generate && parts.push(pack.generate(this.options));
        });

        let configuration = merge(...parts);

        this.packs.forEach((pack: Pack) => {
            pack.process && (configuration = pack.process(configuration));
        });

        return configuration;
    }
}
