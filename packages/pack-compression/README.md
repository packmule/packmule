# Compression Pack [![npm-latest]][npm]

> Generate `gzip` and `brotli` versions of configured assets.

`Compression Pack` uses `compression-webpack-plugin` and libraries
like `iltorb` to create compressed `gzip` and `brotli` files.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Compression Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/compression-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/compression-pack@nightly
```

## API

```typescript
CompressionPack({
    extensions: ['html', 'json', 'xml', 'js', 'css', 'svg', 'ttf', 'otf'],
    gzip: true,
    brotli: true,
    ratio: 1,
});
```

### Hints

-   **optimize** - _Controls whether the pack is actually enabled or not._
-   **cache** - _Controls cache utilization for the compression libraries._

## Usage

**Example**

Generate compressed files.

```typescript
import Packmule from '@packmule/core';
import CompressionPack from '@packmule/compression-pack';

const packmule = new Packmule();

if (env.production) {
    packmule.add(new CompressionPack());
}

return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/compression-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/compression-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
