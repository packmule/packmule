import webpack from 'webpack';
import NotifierPlugin from 'webpack-notifier';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

export interface NotifyPackOptions {
    alwaysNotify?: boolean;
    excludeWarnings?: boolean;
}

export default class NotifyPack implements Pack {
    private options: NotifyPackOptions;
    private defaults: NotifyPackOptions = {
        alwaysNotify: false,
        excludeWarnings: true,
    };

    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public constructor(options: NotifyPackOptions = {}) {
        this.options = {
            ...this.defaults,
            ...options,
        };
    }

    public generate(options: Options): webpack.Configuration {
        if (options.notify) {
            this.configuration.plugins!.push(new NotifierPlugin(this.options));
        }

        return this.configuration;
    }
}
