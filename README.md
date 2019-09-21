# packmule 📦 🐴
> Stubborn configuration generator for webpack.

`packmule` is an opinionated, plugin-based configuration-generator for [`webpack`](https://webpack.js.org/).

**Biased Features**
* Various `webpack` options are pre-configured to work with HTTP2 at an optimum by default.
* Bundled `packs` have been developed and tested for specific use cases.

**Supported Functionality**
* Replace any bundled `pack` with your own custom `pack`.
* Add your own `pack` to generate custom `webpack` configuration.
* Use the bundled `raw` pack to add custom `webpack` configuration directly.

## Installation

Run the following command within your project directory to install `packmule`.
```
npm install --save-dev @packmule/packmule
```

## Example

```ts
import Packmule, {
    EntryPack,
    OutputPack,
    SassPack,
    TypeScriptPack,
    CompressionPack,
} from '@packmule/packmule';

const packmule = new Packmule(mode);
packmule.register(new EntryPack('main.ts'));
packmule.register(new OutputPack('public/', '/'));
packmule.register(new SassPack());
packmule.register(new TypeScriptPack());

if (mode === 'production') {
    packmule.register(new CompressionPack());
}

return packmule.generate();
```

`packmule` will generate the following configuration for `webpack` on the fly, running `webpack --mode production`; it's simplified and shortened to make it more readable.

<details>
  <summary>Generated webpack configuration</summary>

```ts
{
    mode: 'production',
    cache: false,
    entry: {
        main: ['source/main.ts'],
    },
    output: {
        path: '/public',
        publicPath: '/',
        filename: '[name].[contenthash:8].js',
        chunkFilename: 'chunks/[name].[contenthash:8].js',
    },
    resolve: {
        extensions: ['.json', '.scss', '.sass', '.ts', '.tsx'],
    },
    plugins: [
        HashedModuleIdsPlugin,
        MiniCssExtractPlugin,
        CompressionPlugin,
    ],
    optimization: {
        splitChunks: {
            minSize: 0,
            minChunks: 1,
        },
        minimizer: [
            TerserPlugin,
            OptimizeCssAssetsWebpackPlugin,
        ],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ['node_modules/mini-css-extract-plugin/dist/loader.js',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false,
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: [{
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: false,
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            logLevel: 'warn',
                            transpileOnly: true,
                            onlyCompileBundledFiles: true,
                            compilerOptions: {
                                sourceMap: false,
                            },
                        },
                    },
                ],
            },
        ],
    },
}
```
</details>

[**Documentation**](docs/index.md)

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">
