# Documentation

## Installation

```sh
npm install --save-dev @pixelart/packmule
```

## API

```ts
Packmule(mode?: 'development' | 'production' | 'none', options?: Options)
    .register(pack: Pack)
    .generate();
```

### Options

Options are shared with and used by packs. Packs can choose which options to use.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| **mode** | `string` | `'none'` | Sets the mode for webpack. |
| **root** | `string` | `dir.sync(process.cwd())` | Sets the project root directory. |
| **optimize** | `boolean` | `false` | Enables optimization steps. |
| **extract** | `boolean` | `false` | Enables file extraction. |
| **notify** | `boolean` | `false` | Enables desktop notifications. |
| **watch** | `boolean` | `false` | Enables file watching. |
| **lint** | `boolean` | `false` | Enables code linting. |
| **fix** | `boolean` | `false` | Enables code fixing. |
| **debug** | `boolean` | `false` | Enables debugging. |
| **cache** | `boolean` | `true` | Enables caching. |
| **hash** | `boolean` | `false` | Enable filename hashing. |

## Packs
`packmule` plugins are called `packs` and each `pack` handles generation for a specific `webpack` configuration part.
Several `packs` expose API methods to include or exclude files from processing using
[`file globbing`](https://en.wikipedia.org/wiki/Glob_(programming)) or
[`regular expression`](https://en.wikipedia.org/wiki/Regular_expression) patterns.

* **[AliasPack](packs/alias.md)** - Configure webpack aliases.
* **[AssetMapPack](packs/asset-map.md)** - Create an asset map file for use with hashed file names.
* **[ChunkPack](packs/chunk.md)** - Wrap the webpack chunk-plugin.
* **[CleanPack](packs/clean.md)** - Delete everything within a given directory.
* **[CompressionPack](packs/compression.md)** - Generate `gzip` and `brotli` versions of configured assets.
* **[CopyPack](packs/copy.md)** - Copy files.
* **[EntryPack](packs/entry.md)** - Define the entrypoints for webpack.
* **[HotModuleReplacementPack](packs/hot-module-replacement.md)** - Include the `hot module replacement` plugin for development.
* **[ImageOptimizationPack](packs/image-optimization.md)** - Optimize images using `imagemin`.
* **[JavaScriptPack](packs/javascript.md)** - Processe JS including Babel support.
* **[LogPack](packs/log.md)** - Configure console logging.
* **[ManifestPack](packs/manifest.md)** - Generate a web app manifest.
* **[MeasurePack](packs/measure.md)** - Configure entry and asset sizes.
* **[NotifyPack](packs/notify.md)** - Enable desktop notifications for development builds.
* **[OutputPack](packs/output.md)** - Define the output options for webpack.
* **[RawPack](packs/raw.md)** - Merge raw webpack configuration directly.
* **[RuntimePack](packs/runtime.md)** - Configure the webpack runtime chunk.
* **[SassPack](packs/sass.md)** - Compile and optimize Sass/SCSS to CSS including PostCSS processing.
* **[ServiceWorkerPack](packs/service-worker.md)** - Generate a simple service worker using `workbox`.
* **[SveltePack](packs/svelte.md)** - Handle `svelte` single-file-component files.
* **[TypeScriptPack](packs/typescript.md)** - Compile TS to JS including Babel support.
* **[VectorSpritePack](packs/vector-sprite.md)** - Generate a SVG-based vector-sprite.
* **[VuePack](packs/vue.md)** - Handle `vue` single-file-component files.

## Utilities

### Development Server

`packmule` comes with a development-server which wraps the `browser-sync` server
and uses the `webpack-dev-middleware` and `webpack-hot-middleware` to watch and
reload the web application on demand.

```ts
import { Server } from '@pixelart/packmule';
import configuration from './webpack.config.ts';
import options from './.browsersyncrc.json';

const server = new Server(configuration({
    development: true,
    server: true,
}), options);

server.launch();
```

`options` can be a `browser-sync` configuration object or an
array of configuration objects, to launch multiple servers.
