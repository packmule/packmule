import webpack from 'webpack';
import browsersync from 'browser-sync';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

export default class Server {
    private readonly webpackConfiguration: webpack.Configuration;
    private readonly browsersyncOptions: browsersync.Options;

    public constructor(
        webpackConfiguration: webpack.Configuration,
        browsersyncOptions: browsersync.Options = {},
    ) {
        this.webpackConfiguration = webpackConfiguration;
        this.browsersyncOptions = browsersyncOptions;
    }

    public launch(): browsersync.BrowserSyncInstance {
        const server = browsersync.create();
        const compiler = webpack(this.webpackConfiguration);

        const dev = webpackDevMiddleware(compiler, {
            writeToDisk: true,
        });

        const hmr = webpackHotMiddleware(compiler as any, {
            log: false,
        });

        return server.init({...this.browsersyncOptions, ...{
            middleware: [
                dev,
                hmr,
            ],
        }});
    }
}
