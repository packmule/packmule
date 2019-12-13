# packmule
> configuration generator for webpack

`packmule` is an opinionated, plugin-based configuration-generator for [`webpack`](https://webpack.js.org/).

---

* 🏇 Small, light-weight API.
* 🧰 Plugins for many use cases.
* 🔧 Build your own plugin for custom use cases.
* ⚡ Optimized webpack settings for HTTP/2.

```typescript
import Packmule from '@packmule/core';
import EntryPack from '@packmule/entry-pack';
import OutputPack from '@packmule/output-pack';
import TypescriptPack from '@packmule/typescript-pack';

const packmule = new Packmule('production');

packmule.add(new EntryPack('main.ts'));
packmule.add(new OutputPack('public/', '/'));
packmule.add(new TypescriptPack());

return packmule.generate();
```

## Setup

**Current Release**

Run the following command within your project directory to install the
[default edition](packages/edition-default/) of `packmule` which includes
the [`@packmule/core`](packages/core/) package and most relevant packs.

```bash
npm install --save-dev @packmule/default
```

The [complete edition](packages/edition-complete/) can be installed to have all `packs` available.

```bash
npm install --save-dev @packmule/complete
```

Alternatively, to have full control over the installed packages, it's
possible to install the [`core`](packages/core/) package and individual packs.

```bash
npm install --save-dev @packmule/core @packmule/entry-pack @packmule/output-pack @packmule/typescript-pack
```

**Nightly Build**

All `@packmule` packages have a nightly build tagged on the `npm` registry.

```bash
npm install --save-dev @packmule/<package>@nightly
```

## Editions

`packmule` provides `editions` which install a pre-defined
set of `packmule` packages including various `packs` and utilities.

It's recommended to install `packmule` packages individually
but editions provide an easy way to get started quickly.

* **[Default Edition](packages/edition-default/)** - A basic set of `packs` and utilities.
* **[Complete Edition](packages/edition-complete/)** - The full set of `packs` and utilities.

## Packs

`packmule` plugins are called `packs` and each one handles generation of a specific `webpack` configuration part.
Several `packs` expose API methods to include or exclude files from processing using
[`file globbing`](https://en.wikipedia.org/wiki/Glob_(programming)) or
[`regular expression`](https://en.wikipedia.org/wiki/Regular_expression) patterns.

* **[Alias Pack](packages/pack-alias/)** - Configure webpack aliases.
* **[Analyzer Pack](packages/pack-analyzer/)** - Analyze the bundle size.
* **[Assets Pack](packages/pack-assets/)** - Create an asset map file for use with hashed file names.
* **[Cache Pack](packages/pack-cache/)** - Configure the webpack cache.
* **[Chunk Pack](packages/pack-chunk/)** - Wrap the webpack chunk-plugin.
* **[Clean Pack](packages/pack-clean/)** - Clear the public directory prior to building the bundle.
* **[Compression Pack](packages/pack-compression/)** - Generate `gzip` and `brotli` versions of configured assets.
* **[Copy Pack](packages/pack-copy/)** - Copy files.
* **[Entry Pack](packages/pack-entry/)** - Define entrypoints for webpack.
* **[Environment Pack](packages/pack-environment/)** - Populate `process.env` via `.env` files and at runtime.
* **[Hot Module Replacement Pack](packages/pack-hmr/)** - Include the `hot module replacement` plugin for development.
* **[Image Optimization Pack](packages/pack-image-optimization/)** - Optimize images using `imagemin`.
* **[JavaScript Pack](packages/pack-javascript/)** - Process JS including Babel support.
* **[Less Pack](packages/pack-less/)** - Compile `less` to `CSS`.
* **[Log Pack](packages/pack-log/)** - Configure console logging.
* **[Manifest Pack](packages/pack-manifest/)** - Generate a web app manifest.
* **[Notification Pack](packages/pack-notification/)** - Enable desktop notifications for development builds.
* **[Output Pack](packages/pack-output/)** - Define the output options for webpack.
* **[Performance Pack](packages/pack-performance/)** - Configure entry and asset sizes.
* **[Raw Pack](packages/pack-raw/)** - Merge raw webpack configuration directly.
* **[Runtime Pack](packages/pack-runtime/)** - Configure the webpack runtime chunk.
* **[Sass Pack](packages/pack-sass/)** - Compile and optimize Sass/SCSS to CSS including PostCSS processing.
* **[Service Worker Pack](packages/pack-service-worker/)** - Generate a simple service worker using `workbox`.
* **[Sprite Pack](packages/pack-sprite/)** - Generate a SVG-based vector-sprite.
* **[Svelte Pack](packages/pack-svelte/)** - Handle `svelte` single-file-component files.
* **[Target Pack](packages/pack-target/)** - Set the target environment for the bundle.
* **[TypeScript Pack](packages/pack-typescript/)** - Compile TS to JS including Babel support.
* **[Vue Pack](packages/pack-vue/)** - Handle `vue` single-file-component files.
* **[Watch Pack](packages/pack-watch/)** - Handle file watching.

## Utilities

* **[Development Server](packages/utility-server/)** - Simple development server via `browser-sync`.

## License

[MIT license](LICENSE)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
