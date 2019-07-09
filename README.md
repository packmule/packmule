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

Run the following command within your project directory to install the
[default edition](packages/edition-default/) of `packmule` which includes
the [`@packmule/core`](packages/core/) package and most relevant packs.

```sh
npm install --save-dev @packmule/default
```

## Example

```ts
import Packmule from '@packmule/core';
import EntryPack from '@packmule/entry-pack';
import OutputPack from '@packmule/output-pack';
import TypescriptPack from '@packmule/typescript-pack';

const packmule = new Packmule(mode);
packmule.register(new EntryPack('main.ts'));
packmule.register(new OutputPack('public/', '/'));
packmule.register(new TypescriptPack());

return packmule.generate();
```

## Packs
`packmule` plugins are called packs and each one handles generation of a specific `webpack` configuration part.
Several packs expose API methods to include or exclude files from processing using
[`file globbing`](https://en.wikipedia.org/wiki/Glob_(programming)) or
[`regular expression`](https://en.wikipedia.org/wiki/Regular_expression) patterns.

* **[AliasPack](packages/pack-alias/)** - Configure webpack aliases.
* **[AssetsPack](packages/pack-assets/)** - Create an asset map file for use with hashed file names.
* **[ChunkPack](packages/pack-chunk/)** - Wrap the webpack chunk-plugin.
* **[CleanPack](packages/pack-clean/)** - Delete everything within a given directory.
* **[CompressionPack](packages/pack-compression/)** - Generate `gzip` and `brotli` versions of configured assets.
* **[CopyPack](packages/pack-copy/)** - Copy files.
* **[EntryPack](packages/pack-entry/)** - Define the entrypoints for webpack.
* **[HotModuleReplacementPack](packages/pack-hmr/)** - Include the `hot module replacement` plugin for development.
* **[ImageOptimizationPack](packages/pack-image-optimization/)** - Optimize images using `imagemin`.
* **[JavaScriptPack](packages/pack-javascript/)** - Processe JS including Babel support.
* **[LogPack](packages/pack-log/)** - Configure console logging.
* **[ManifestPack](packages/pack-manifest/)** - Generate a web app manifest.
* **[NotificationPack](packages/pack-notification/)** - Enable desktop notifications for development builds.
* **[OutputPack](packages/pack-output/)** - Define the output options for webpack.
* **[PerformancePack](packages/pack-performance/)** - Configure entry and asset sizes.
* **[RawPack](packages/pack-raw/)** - Merge raw webpack configuration directly.
* **[RuntimePack](packages/pack-runtime/)** - Configure the webpack runtime chunk.
* **[SassPack](packages/pack-sass/)** - Compile and optimize Sass/SCSS to CSS including PostCSS processing.
* **[ServiceWorkerPack](packages/pack-service-worker/)** - Generate a simple service worker using `workbox`.
* **[SveltePack](packages/pack-svelte/)** - Handle `svelte` single-file-component files.
* **[TypeScriptPack](packages/pack-typescript/)** - Compile TS to JS including Babel support.
* **[SpritePack](packages/pack-sprite/)** - Generate a SVG-based vector-sprite.
* **[VuePack](packages/pack-vue/)** - Handle `vue` single-file-component files.

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">
