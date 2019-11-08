# packmule core

> Stubborn configuration generator for Webpack.

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

| Hint         | Type      | Default | Description                    |
| ------------ | --------- | ------- | ------------------------------ |
| **optimize** | `boolean` | `false` | Enables optimization steps.    |
| **extract**  | `boolean` | `false` | Enables file extraction.       |
| **notify**   | `boolean` | `false` | Enables desktop notifications. |
| **lint**     | `boolean` | `false` | Enables code linting.          |
| **fix**      | `boolean` | `false` | Enables code fixing.           |
| **map**      | `boolean` | `false` | Enables source maps.           |
| **cache**    | `boolean` | `true`  | Enables caching.               |
| **hash**     | `boolean` | `false` | Enables filename hashing.      |
| **watch**    | `boolean` | `false` | Enables file watching.         |

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
