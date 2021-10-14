import webpack from 'webpack';
import Hints from './hints.js';
import Options from './options.js';

export default interface Pack {
    include?(include: PackIncludeOption): this;
    exclude?(exclude: PackExcludeOption): this;
    generate?(options: Options, hints: Hints): webpack.Configuration;
    process?(configuration: webpack.Configuration, options?: Options, hints?: Hints): webpack.Configuration;
}

export type PackIncludeOption = string | RegExp | ((path: string) => true);
export type PackExcludeOption = string | RegExp | ((path: string) => true);
