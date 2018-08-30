import * as webpack from 'webpack';
import * as CopyPlugin from 'copy-webpack-plugin';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

interface CopyPackOptions {
    path?: string;
    glob?: string;
}

export default class CopyPack implements Pack {
    private options: CopyPackOptions = {};

    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public include (glob: string): this {
        this.options.glob = glob;
        return this;
    }

    public to (path: string): this {
        this.options.path = path;
        return this;
    }

    public generate (options: Options): webpack.Configuration {
        const copy = new CopyPlugin([{
            from: this.options.glob!,
            to: this.options.path!,
        }]);

        this.configuration.plugins!.push(copy);

        return this.configuration;
    }
}
