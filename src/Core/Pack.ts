import * as webpack from 'webpack';
import Options from './Options';

export default interface Pack {
    include? (glob: string): this;
    generate? (options?: Options): webpack.Configuration;
    process? (configuration: webpack.Configuration): webpack.Configuration;
}
