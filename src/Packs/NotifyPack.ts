import * as webpack from 'webpack';
import * as NotifierPlugin from 'webpack-notifier';
import Pack from '../Core/Pack';

export default class NotifyPack implements Pack {
    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public generate (): webpack.Configuration {
        this.configuration.plugins!.push(new NotifierPlugin({
            alwaysNotify: false,
            excludeWarnings: true,
        }));

        return this.configuration;
    }
}
