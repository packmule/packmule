# Assets Pack [![npm-latest]][npm]

> Create an asset map file for use with hashed file names.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Assets Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/assets-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/assets-pack@nightly
```

## API

`AssetsPack()`

## Usage

The `AssetsPack` is best used in combination with the packmule `hash` option.

**Example**

```typescript
import Packmule from '@packmule/core';
import AssetsPack from '@packmule/assets-pack';

const packmule = new Packmule();
packmule.add(new AssetsPack());
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/assets-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/assets-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
