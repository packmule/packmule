# Cache Pack [![npm-latest]][npm]

> Configure the Webpack [cache](https://webpack.js.org/configuration/other-options/#cache).

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Cache Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/cache-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/cache-pack@nightly
```

## API

```typescript
CachePack();
```

## Usage

**Example**

```typescript
import Packmule from '@packmule/core';
import CachePack from '@packmule/cache-pack';

const packmule = new Packmule();
packmule.add(new CachePack());
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://avatars.githubusercontent.com/u/4364197?s=64">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/cache-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/cache-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
