# packmule core [![npm-latest]][npm]

> Stubborn configuration generator for Webpack.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [License](#license)

## Setup

Either install `@packmule/core` and needed packs individually
or install one of the available packmule editions which bundle
various packages/packs for faster usage.

**Current Release**

```bash
npm install --save-dev @packmule/core
```

**Nightly Build**

```bash
npm install --save-dev @packmule/core@nightly
```

## API

### Methods

**Packmule(mode?: 'development' | 'production' | 'none', options?: `Options`, hints?: `Hints`)**  
_Instantiate a new packmule object._

**add(pack: `Pack`, hints?: `Hints`)**  
_Add a pack for configuration generation._

**remove(pack: `Pack`)**  
_Remove a pack from configuration generation._

**generate(pack?: `Pack`, hints?: `Hints`)**  
_Generate the final webpack configuration or optionally the configuration for a specific pack instance._

### Options

| Option    | Type      | Default  | Description                      |
| --------- | --------- | -------- | -------------------------------- |
| **mode**  | `string`  | `'none'` | Sets the mode for webpack.       |
| **root**  | `string`  | `cwd`    | Sets the project root directory. |
| **debug** | `boolean` | `false`  | Enables debugging.               |

### Hints

Hints are passed to and used by packs to indicate which internal tasks to run.
Packs can choose which hints to use i.e. packs often use a small subset of available hints.

| Hint         | Description                    |
| ------------ | ------------------------------ |
| **optimize** | Enables optimization steps.    |
| **extract**  | Enables file extraction.       |
| **notify**   | Enables desktop notifications. |
| **lint**     | Enables code linting.          |
| **fix**      | Enables code fixing.           |
| **map**      | Enables source maps.           |
| **cache**    | Enables caching.               |
| **hash**     | Enables filename hashing.      |
| **watch**    | Enables file watching.         |

### Presets

Each mode (none, development, production) has an internal hints preset, e.g.
for `production` mode the options `optimize`, `extract` and `hash` are enabled
while all other hints are disabled. Hints can be overridden by passing them
to the constructor directly.

| Hint         | none    | development | production |
| ------------ | ------- | ----------- | ---------- |
| **optimize** | `false` | `false`     | `true`     |
| **extract**  | `false` | `false`     | `true`     |
| **notify**   | `false` | `true`      | `false`    |
| **lint**     | `false` | `true`      | `false`    |
| **fix**      | `false` | `true`      | `false`    |
| **map**      | `false` | `true`      | `false`    |
| **cache**    | `false` | `true`      | `false`    |
| **hash**     | `false` | `false`     | `true`     |
| **watch**    | `false` | `false`     | `false`    |

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)

[npm]: https://www.npmjs.com/package/@packmule/core
[npm-latest]: https://img.shields.io/npm/v/@packmule/core/latest?color=%230AC2FF&label=release&style=for-the-badge
