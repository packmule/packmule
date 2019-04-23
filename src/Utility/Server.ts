import webpack from 'webpack';
import browsersync from 'browser-sync';
import browserstack from 'browserstack-local';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

export default class Server {
    private readonly webpackConfiguration: webpack.Configuration;
    private readonly browsersyncOptions: browsersync.Options[];

    public constructor(
        webpackConfiguration: webpack.Configuration,
        browsersyncOptions: browsersync.Options | browsersync.Options[] = {},
    ) {
        this.webpackConfiguration = webpackConfiguration;
        this.browsersyncOptions = Array.isArray(browsersyncOptions) ? browsersyncOptions : [browsersyncOptions];
    }

    public launch(): browsersync.BrowserSyncInstance | browsersync.BrowserSyncInstance[] {
        const instances: browsersync.BrowserSyncInstance[]  = [];
        const compiler = webpack(this.webpackConfiguration);

        const dev = webpackDevMiddleware(compiler, {
            publicPath: this.webpackConfiguration.output!.publicPath || '/',
            stats: this.webpackConfiguration.stats,
            logLevel: 'warn',
            writeToDisk: true,
            lazy: false,
        });

        const hmr = webpackHotMiddleware(compiler, {
            log: false,
        });

        this.browsersyncOptions.forEach((options) => {
            const server = browsersync.create().init({...options, ...{
                middleware: [
                    dev,
                    hmr,
                ],
            }});

            instances.push(server);
        });

        return instances.length === 1 ? instances[0] : instances;
    }

    public tunnel(key: string): Promise<void> {
        const client = new browserstack.Local();

        return new Promise((resolve, reject) => {
            client.start({
                key,
                force: true,
                forceLocal: true,
            }, (error?: any) => {
                error ? reject() : resolve();
            });
        });
    }
}
