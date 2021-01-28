import webpack from 'webpack';
import NotifierPlugin from 'webpack-notifier';
import { Hints, Options, Pack } from '@packmule/core';

interface PackOptions {
    alwaysNotify?: boolean;
    excludeWarnings?: boolean;
}

export default class NotificationPack implements Pack {
    private readonly options: PackOptions;
    private defaults: PackOptions = {
        alwaysNotify: false,
        excludeWarnings: true,
    };

    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public constructor(options: PackOptions = {}) {
        this.options = {
            ...this.defaults,
            ...options,
        };
    }

    public generate(options: Options, hints: Hints): webpack.Configuration {
        if (hints.notify) {
            const plugin: webpack.WebpackPluginInstance = new NotifierPlugin(this.options);
            this.configuration.plugins!.push(plugin);
        }

        return this.configuration;
    }
}
