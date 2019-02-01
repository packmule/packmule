import * as webpack from 'webpack';
import Pack from '../Core/Pack';

export default class LogPack implements Pack {
    private configuration: webpack.Configuration = {
        stats: {
            assets: true,
            assetsSort: 'field',
            builtAt: false,
            cached: true,
            cachedAssets: true,
            children: false,
            chunks: false,
            chunkModules: false,
            chunkOrigins: false,
            chunksSort: 'field',
            colors: true,
            depth: false,
            entrypoints: false,
            env: false,
            errors: true,
            errorDetails: true,
            hash: true,
            maxModules: 25,
            modules: false,
            modulesSort: 'field',
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

    public generate(): webpack.Configuration {
        return this.configuration;
    }
}
