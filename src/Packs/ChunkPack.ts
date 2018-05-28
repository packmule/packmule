import * as micromatch from 'micromatch';
import * as webpack from 'webpack';
import Pack from '../Core/Pack';

interface Options {
    name: string;
    glob: string;
    runtime: boolean;
}

export default class ChunkPack implements Pack {
    private options: Options = {
        name: '',
        glob: '',
        runtime: false,
    };
    private configuration: webpack.Configuration;

    public constructor (name: string, runtime: boolean = false) {
        this.options.name = name;
        this.options.runtime = runtime;
    }

    public include (glob: string): this {
        this.options.glob = glob;
        return this;
    }

    public generate (): webpack.Configuration {
        if (this.options.runtime) {
            this.configuration = {
                optimization: {
                    runtimeChunk: {
                        name: this.options.name,
                    },
                },
            }
        } else {
            this.configuration = {
                optimization: {
                    splitChunks: {
                        cacheGroups: {
                            [this.options.name]: {
                                test: micromatch.makeRe(this.options.glob),
                                name: this.options.name,
                                chunks: 'all',
                            }
                        },
                    },
                },
            };
        }

        return this.configuration;
    }
}
