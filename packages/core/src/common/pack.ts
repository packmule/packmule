import webpack from 'webpack';
import Hints from './hints';
import Options from './options';

export default interface Pack {
    include?(include: PackIncludeOption): this;
    exclude?(exclude: PackExcludeOption): this;
    generate?(options?: Options, hints?: Hints): webpack.Configuration;
    process?(configuration: webpack.Configuration): webpack.Configuration;
}

export type PackIncludeOption = string | RegExp | ((path: string) => true);
export type PackExcludeOption = string | RegExp | ((path: string) => true);
