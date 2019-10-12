import webpack from 'webpack';
import BarPlugin from 'webpackbar';
import colorize from 'string-to-color';
import { Options, Hints, Pack } from '@packmule/core';

interface PackOptions {
    name?: string;
}

export default class LogPack implements Pack {
    private options: PackOptions;
    private defaults: PackOptions = {
        name: 'packmule',
    };

    private configuration: webpack.Configuration = {
        plugins: [],
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

    public constructor(name?: string) {
        this.options = {
            ...this.defaults,
            ...{ name },
        };
    }

    public generate(options: Options, hints: Hints): webpack.Configuration {
        (this.configuration.stats as any).assets = !hints.watch;

        if (!process.argv.includes('--json')) {
            this.configuration.plugins!.push(
                new BarPlugin({
                    name: this.options.name,
                    color: colorize(this.options.name),
                }),
            );
        }

        return this.configuration;
    }
}
