import * as ReporterPlugin from 'webpack-stylish';
import * as webpack from 'webpack';
import Pack from '../Core/Pack';

export default class LogPack implements Pack {
    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public generate (): webpack.Configuration {
        if (process.argv.indexOf('--json') === -1) {
            this.configuration.stats = false;
            this.configuration.plugins!.push(new ReporterPlugin());
        }

        return this.configuration;
    }
}
