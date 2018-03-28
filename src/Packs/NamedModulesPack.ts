import * as webpack from 'webpack';
import Pack from '../Core/Pack';

export default class NamedModulesPack implements Pack {
    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public generate (): webpack.Configuration {
        const names = new webpack.NamedModulesPlugin();
        this.configuration.plugins!.push(names);

        return this.configuration;
    }
}
