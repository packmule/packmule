import webpack from 'webpack';
import { Hints, Options, Pack } from '@packmule/core';

export default class CachePack implements Pack {
    private configuration: webpack.Configuration = {
        cache: false,
    };

    public generate(options: Options, hints: Hints): webpack.Configuration {
        if (hints.cache) {
            this.configuration.cache = {
                type: 'filesystem',
            };
        }

        return this.configuration;
    }
}
