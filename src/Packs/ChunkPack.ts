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
    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public constructor (name: string) {
        this.options.name = name;
    }

    public include (glob: string): this {
        this.options.glob = glob;
        return this;
    }

    public generate (): webpack.Configuration {
        const options: any = {
            name: this.options.name,
        };

        if (this.options.glob) {
            options.minChunks = (module: any) => {
                return module.context && micromatch.isMatch(module.context, this.options.glob);
            };
        }

        //const chunk = new webpack.optimize.SplitChunksPlugin(options);
        // this.configuration.plugins!.push(chunk);

        return this.configuration;
    }
}
