# Manifest Pack [![npm-latest]][npm]

> Generate a [web app manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest).

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Manifest Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/manifest-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/manifest-pack@nightly
```

## API

```typescript
ManifestPack(options: ManifestPlugin.ManifestOptions)
```

## Usage

**Example**

Generate a basic web app manifest using the [`webpack-pwa-manifest`](https://www.npmjs.com/package/webpack-pwa-manifest) plugin internally.

```typescript
import Packmule from '@packmule/core';
import ManifestPack from '@packmule/manifest-pack';

const packmule = new Packmule();
packmule.add(
    new ManifestPack({
        name: 'Web Application',
        short_name: 'App',
    }),
);
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/manifest-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/manifest-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
