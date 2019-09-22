import webpack from 'webpack';
import { Options, Hints, Pack } from '@packmule/core';

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
            entrypoints: true,
            env: false,
            errors: true,
            errorDetails: true,
            hash: true,
            maxModules: Infinity,
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

    public generate(options: Options, hints: Hints): webpack.Configuration {
        (this.configuration.stats as any).assets = !hints.watch;
        return this.configuration;
    }
}
