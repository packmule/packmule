# Hot Module Replacement Pack [![npm-latest]][npm]

> Include the `hot module replacement` plugin for development.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Hot Module Replacement Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/hmr-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/hmr-pack@nightly
```

## API

```typescript
HotModuleReplacementPack(options?: {})
```

## Usage

**Example**

Enable the HMR functionality for development.

```typescript
import Packmule from '@packmule/core';
import HotModuleReplacementPack from '@packmule/hmr-pack';

const packmule = new Packmule();

if (env.development && env.server) {
    packmule.add(new HotModuleReplacementPack());
}

return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/hmr-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/hmr-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
