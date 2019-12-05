import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { Pack } from '@packmule/core';

export default class AnalyzerPack implements Pack {
    private configuration: webpack.Configuration = {
        plugins: [],
    };

    public generate(): webpack.Configuration {
        const analyzer = new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            logLevel: 'silent',
            openAnalyzer: false,
            generateStatsFile: true,
            statsFilename: 'logs/report.json',
            reportFilename: 'logs/report.html',
        });

        this.configuration.plugins!.push(analyzer);

        return this.configuration;
    }
}
