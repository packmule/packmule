import * as webpack from 'webpack';
import * as NotifierPlugin from 'webpack-notifier';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

export interface NotifyPackOptions {
    alwaysNotify?: boolean;
    excludeWarnings?: boolean;
}

export default class NotifyPack implements Pack {
    private configuration: webpack.Configuration = {
        plugins: [],
    };

    private options: NotifyPackOptions;
    private defaults: NotifyPackOptions = {
        alwaysNotify: false,
        excludeWarnings: false,
    };

    public constructor (options: NotifyPackOptions = {}) {
        this.options = {...this.defaults, ...options};
    }

    public generate (options: Options): webpack.Configuration {
        if(options.notify) {
            this.configuration.plugins!.push(new NotifierPlugin(this.options));
        }

        return this.configuration;
    }
}
