# Clean Pack [![npm-latest]][npm]

> Clear the public directory prior to building the bundle.

`Clean Pack` uses [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin)
to clear a directory before building. It is advised to clear the
webpack output directory prior building to get rid of old files.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Clean Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/clean-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/clean-pack@nightly
```

## API

`CleanPack()`

## Options

-   **root** - _Defines the `root` option of `clean-webpack-plugin`._
-   **debug** - _Controls the `verbose` option of `clean-webpack-plugin`._

## Usage

**Example**

Clears the contents of the webpack `output` directory prior building.

```typescript
import Packmule from '@packmule/core';
import CleanPack from '@packmule/clean-pack';

const packmule = new Packmule();
packmule.add(new CleanPack());
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://avatars.githubusercontent.com/u/4364197?s=64">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/clean-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/clean-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
