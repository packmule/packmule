import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import * as dir from 'pkg-dir';
import DefaultPack from '../Packs/DefaultPack';
import Pack from './Pack';
import Options from './Options';

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
    };

    public constructor(options: Options = {}) {
        this.options = {...this.defaults, ...options};
        this.use(new DefaultPack());
    }

    public use(pack: Pack): this {
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
