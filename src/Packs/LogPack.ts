import webpack from 'webpack';
import Pack from '../Core/Pack';
import Options from '../Core/Options';

export default class LogPack implements Pack {
    private configuration: webpack.Configuration = {
        stats: {
            assetsSort: 'id',
            builtAt: false,
            cached: true,
            cachedAssets: true,
            children: false,
            chunks: false,
            chunkModules: false,
            chunkOrigins: false,
            chunksSort: 'id',
            colors: true,
            depth: false,
            entrypoints: false,
            env: false,
            errors: true,
            errorDetails: true,
            hash: true,
            maxModules: 25,
            modules: false,
            modulesSort: 'id',
            moduleTrace: false,
            performance: true,
            providedExports: false,
            publicPath: false,
            reasons: false,
            source: false,
            timings: false,
            usedExports: false,
            version: false,
            warnings: true,
        },
    };

    public generate(options: Options): webpack.Configuration {
        (this.configuration.stats as any).assets = !options.watch;
        return this.configuration;
    }
}
