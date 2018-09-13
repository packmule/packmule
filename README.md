# PACKMULE 📦 🐴
> Stubborn configuration generator for webpack.

`packmule` is an opinionated, plugin-based configuration-generator for [`webpack`](https://webpack.js.org/).

## Usage

**Example**
```ts
import Packmule, {
    EntryPack,
    OutputPack,
    SassPack,
    TypeScriptPack,
    ChunkPack,
    UglifyPack,
    CompressionPack,
} from '@pixelart/packmule';

const packmule = new Packmule();

packmule.use(new EntryPack('main.ts'));
packmule.use(new OutputPack('public/', '/'));
packmule.use(new SassPack());
packmule.use(new TypeScriptPack());
packmule.use(new ChunkPack('manifest', true));
packmule.use(new ChunkPack('vendors').include('**/node_modules/**'));

if (env.production) {
    packmule.use(new UglifyPack());
    packmule.use(new CompressionPack());
}

return packmule.generate();
```

### Packs
`packmule` plugins are called `packs` and each `pack` handles configuration generation for a specific task.

* **AliasPack** - Configure Webpack aliases.
* **ChunkPack** - Wrap the Webpack chunk-plugin.
* **CleanPack** - Delete everything within a given directory.
* **CompressionPack** - Generate `gzip` and `brotli` versions of configured assets.
* **CopyPack** - Copy files.
* **EntryPack** - Define the entrypoints for Webpack.
* **HotModuleReplacementPack** - Include the `hot module replacement` plugin for development.
* **ImageManipulationPack** - Manipulate images using `sharp` and optimizes them using `imagemin`.
* **ImageOptimizationPack** - Optimize images using `imagemin`.
* **JavaScriptPack** - Processe JS including Babel support.
* **LogPack** - Configure console logging.
* **MeasurePack** - Configure entry and asset sizes.
* **NotifyPack** - Enable desktop notifications for development builds.
* **OutputPack** - Define the output options for Webpack.
* **RawPack** - Merge raw Webpack configuration directly.
* **SassPack** - Compile and optimize Sass/SCSS to CSS including PostCSS processing.
* **ServiceWorkerPack** - Generate a simple service worker using `workbox`.
* **TypeScriptPack** - Compile TS to JS including Babel support.
* **UglifyPack** - Optimize JS using `Uglify`.
* **VectorSpritePack** - Generate a SVG-based vector-sprite.

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
