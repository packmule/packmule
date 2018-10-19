import * as micromatch from 'micromatch';
import * as webpack from 'webpack';
import Pack, { PackIncludeOption } from '../Core/Pack';

interface ChunkPackOptions {
    name?: string;
    include?: PackIncludeOption,
    chunks?: 'initial' | 'async' | 'all' | ((chunk: webpack.compilation.Chunk) => boolean),
}

export default class ChunkPack implements Pack {
    private options: ChunkPackOptions;
    private defaults: ChunkPackOptions = {
        include: () => true,
        chunks: 'initial',
    };

    private configuration: webpack.Configuration = {};

    public constructor(name: string, chunks?: 'initial' | 'async' | 'all' | ((chunk: webpack.compilation.Chunk) => boolean)) {
        this.options = {
            ...this.defaults,
            ...{ name, chunks }
        };
    }

    public include(include: PackIncludeOption): this {
        this.options.include = typeof include === 'string'
            ? micromatch.makeRe(include, { dot: true })
            : include;

        return this;
    }

    public generate(): webpack.Configuration {
        this.configuration = {
            optimization: {
                splitChunks: {
                    cacheGroups: {
                        [this.options.name!]: {
                            test: this.options.include,
                            name: this.options.name,
                            chunks: this.options.chunks,
                        },
                    },
                },
            }
        };

        return this.configuration;
    }
}
