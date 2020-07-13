# Service Worker Pack [![npm-latest]][npm]

> Configure simple service-worker generation.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Service Worker Pack` is included in the [`complete`][edition-complete] edition.

**Current Release**

```bash
npm install --save-dev @packmule/service-worker-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/service-worker-pack@nightly
```

## API

```typescript
ServiceWorkerPack()
    .include(glob: string)
    .to(path: string)
```

## Usage

**Example**

Generate a simple service-worker and pre-cache common files.

```typescript
import Packmule from '@packmule/core';
import ServiceWorkerPack from '@packmule/service-worker-pack';

const packmule = new Packmule();
packmule.add(new ServiceWorkerPack());
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://avatars.githubusercontent.com/u/4364197?s=64">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/service-worker-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/service-worker-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
