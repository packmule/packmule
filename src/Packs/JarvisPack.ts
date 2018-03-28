import * as Jarvis from 'webpack-jarvis';
import * as webpack from 'webpack';
import Pack from '../Core/Pack';

export default class JarvisPack implements Pack {
    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public generate (): webpack.Configuration {
        const plugin = new Jarvis();
        this.configuration.plugins!.push(plugin);
        return this.configuration;
    }
}
