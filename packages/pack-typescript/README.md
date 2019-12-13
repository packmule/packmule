# TypeScript Pack [![npm-latest]][npm]

> Compile `TypeScript` to `JavaScript`.

-   `typescript` compiles `ts` and `tsx` files to `js` files.
-   `babel` transpiles generated `js` files via `babel.config.js`.
-   `eslint` lints `ts` and `tsx` files via `.eslintrc`.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [Internals](#internals)
-   [License](#license)

## Setup

`TypeScript Pack` is included in the [`complete`][edition-complete] edition.

**Current Release**

```bash
npm install --save-dev @packmule/typescript-pack typescript @babel/core
```

**Nightly Build**

```bash
npm install --save-dev @packmule/typescript-pack@nightly typescript @babel/core
```

## API

### Methods

**include(glob: string)**  
_Configure files to be processed. If not used, all files will be processed._

### Hints

> View the `packmule` [hints documentation][packmule-hints] for more information.

-   **cache** - _Controls cache utilization of the `babel-loader`._
-   **lint** - _Controls source-code linting via `eslint-webpack-plugin`._
-   **fix** - _Controls source-code fixing via `eslint-webpack-plugin`._
-   **map** - _Controls source map creation._
-   **watch** - _If enabled, only changed files are linted via `eslint-webpack-plugin`._

## Usage

> View the `packmule` [API documentation][packmule-api] for general usage patterns.

**Basic Usage**

Configure `TypeScript` to `JavaScript` compilation.

```ts
import Packmule from '@packmule/core';
import TypeScriptPack from '@packmule/typescript-pack';

const packmule = new Packmule();
packmule.register(new TypeScriptPack());
return packmule.generate();
```

## Internals

<details>
  <summary>Dependencies</summary>
  
  This dependencies are used primarily by the pack internally.
  
  * `ts-loader`
  * `babel-loader`
  * `eslint-webpack-plugin`
  
  These peer dependencies are needed to use the pack.
  
  * `typescript`
  * `@babel/core`
  * `eslint`
</details>

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/typescript-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/typescript-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
