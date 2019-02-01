import webpack from 'webpack';
import Options from './Options';

export type PackIncludeOption = string | RegExp | ((path: string) => true);

export default interface Pack {
    include? (include: PackIncludeOption): this;
    generate? (options?: Options): webpack.Configuration;
    process? (configuration: webpack.Configuration): webpack.Configuration;
}
