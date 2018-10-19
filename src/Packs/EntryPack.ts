import { resolve } from 'path';
import * as webpack from 'webpack';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

interface EntryPackOptions {
    name?: string;
    path?: string;
}

export default class EntryPack implements Pack {
    private options: EntryPackOptions;
    private defaults: EntryPackOptions = {
        name: 'bundle',
    };

    private configuration: webpack.Configuration &{
        entry: {
            [key: string]: string[];
        };
    } = {
        entry: {},
    };

    public constructor(path: string, name?: string) {
        this.options = {
            ...this.defaults,
            ...{ path, name },
        };
    }

    public generate(options: Options): webpack.Configuration {
        this.configuration.entry[this.options.name!] = [resolve(options.root!, this.options.path!)];
        return this.configuration;
    }
}
