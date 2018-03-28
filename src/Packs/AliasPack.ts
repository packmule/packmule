import * as webpack from 'webpack';
import Pack from '../Core/Pack';

export default class AliasPack implements Pack {
    private name: string;
    private target: string;

    private configuration: webpack.Configuration = {
        resolve: {
            alias: {},
        },
    };

    public constructor (name: string, target: string) {
        this.name = name;
        this.target = target;
    }

    public generate (): webpack.Configuration {
        this.configuration.resolve!.alias![this.name] = this.target;

        return this.configuration;
    }
}
