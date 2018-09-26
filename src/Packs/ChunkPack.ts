import * as micromatch from 'micromatch';
import * as webpack from 'webpack';
import Pack from '../Core/Pack';

interface Options {
    name: string;
    glob: string;
}

export default class ChunkPack implements Pack {
    private options: Options = {
        name: '',
        glob: '',
    };
    private configuration: webpack.Configuration;

    public constructor(name: string) {
        this.options.name = name;
    }

    public include(glob: string): this {
        this.options.glob = glob;
        return this;
    }

    public generate(): webpack.Configuration {
        this.configuration = {
            optimization: {
                splitChunks: {
                    cacheGroups: {
                        [this.options.name]: {
                            test: micromatch.makeRe(this.options.glob),
                            name: this.options.name,
                            chunks: 'initial',
                        },
                    },
                },
            },
        };

        return this.configuration;
    }
}
