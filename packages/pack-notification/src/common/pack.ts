import webpack from 'webpack';
import NotifierPlugin from 'webpack-notifier';
import { Hints, Options, Pack } from '@packmule/core';

export interface PackOptions {
    alwaysNotify?: boolean;
    excludeWarnings?: boolean;
}

export default class NotificationPack implements Pack {
    private options: PackOptions;
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
            this.configuration.plugins!.push(new NotifierPlugin(this.options));
        }

        return this.configuration;
    }
}
