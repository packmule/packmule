# PACKMULE 📦 🐴
> Stubborn configuration generator for webpack.

`packmule` is an opinionated, plugin-based configuration-generator for [`webpack`](https://webpack.js.org/).

## Usage

**Example**
```ts
import Packmule, { SassPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.use(new SassPack());
return packmule.generate();
```

### Packs
`packmule` plugins are called `packs` and each `pack` handles configuration generation for a specific task.

* **AliasPack** - Configures Webpack aliases.
* **ChunkPack** - Wraps the Webpack chunk-plugin.
* **CleanPack** - Deletes everything within a given directory.
* **CompressionPack** - Generates `gzip` and `brotli` versions of configured assets.
* **CopyPack** - Simply copies files.
* **EntryPack** - Defines the entrypoints for Webpack.
* **HotModuleReplacementPack** - Includes the `hot module replacement` plugin for development.
* **ImageManipulationPack** - Manipulates images using `sharp` and optimizes them using `imagemin`.
* **ImageOptimizationPack** - Optimizes images using `imagemin`.
* **JarvisPack** - Runs the Jarvis web-interface displaying bundle statistics.
* **JavaScriptPack** - Processes JS including Babel support.
* **LogPack** - Configures console logging.
* **MeasurePack** - Configures entry and asset sizes.
* **NamedModulesPack** - Uses named modules (for development) instead of hashing them.
* **NotifyPack** - Enables desktop notifications for development builds.
* **OutputPack** - Defines the output options for Webpack.
* **RawPack** - Merges raw Webpack configuration directly.
* **SassPack** - Compiles and optimizes Sass/SCSS to CSS including PostCSS processing.
* **ServiceWorkerPack** - Generates a simple service worker using `workbox`.
* **TypeScriptPack** - Compiles TS to JS including Babel support.
* **UglifyPack** - Optimizes JS using `Uglify`.
* **VectorSpritePack** - Generates a SVG-based vector-sprite.

## Utilities

### Development Server

**Example**
```ts
import { Server } from '@pixelart/packmule';
import configuration from './webpack.config.ts';
import * as options from './.browsersyncrc.json';

const server = new Server(configuration({
    development: true,
    server: true,
}), options);

server.launch();
```
