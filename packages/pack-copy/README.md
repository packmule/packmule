# Copy Pack [![npm-latest]][npm]

> Simply copy files.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Copy Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/copy-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/copy-pack@nightly
```

## API

```typescript
CopyPack()
    .include(glob: string)
    .to(path: string)
```

### Hints

-   **hash** - _Configures whether file name hashing is enabled or not._

## Usage

**Example**

Copy JSON files.

```typescript
import Packmule from '@packmule/core';
import CopyPack from '@packmule/copy-pack';

const packmule = new Packmule();
packmule.add(new CopyPack().include('**/data/*.json').to('data/'));
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://avatars.githubusercontent.com/u/4364197?s=64">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/copy-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/copy-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
