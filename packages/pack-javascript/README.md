# JavaScript Pack [![npm-latest]][npm]

> Transpile JavaScript using Babel.

Internally the `JavaScript Pack` uses `esbuild` to transpile the code if needed.
To configure compilation targets in your project, a `browerslist` configuration can be used.
Linting code via `ESLint` can be utilized by creating an `.eslintrc` file.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`JavaScript Pack` is included in the [`complete`][edition-complete] edition.

**Current Release**

```bash
npm install --save-dev @packmule/javascript-pack @babel/core eslint
```

**Nightly Build**

```bash
npm install --save-dev @packmule/javascript-pack@nightly @babel/core eslint
```

## API

```typescript
JavaScriptPack()
    .include(glob: string)
```

### Hints

-   **cache** - _Controls cache utilization of the `babel-loader`._
-   **lint** - _Controls source-code linting via `eslint-webpack-plugin`._
-   **fix** - _Controls source-code fixing via `eslint-webpack-plugin`._

## Usage

**Example**

Process JavaScript code.

```typescript
import Packmule from '@packmule/core';
import JavascriptPack from '@packmule/javascript-pack';

const packmule = new Packmule();
packmule.add(new JavaScriptPack());
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://avatars.githubusercontent.com/u/4364197?s=64">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/javascript-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/javascript-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
