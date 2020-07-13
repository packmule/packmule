# Watch Pack [![npm-latest]][npm]

> Packmule pack to handle file watching.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Watch Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/watch-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/watch-pack@nightly
```

## API

```typescript
WatchPack()
    .exclude(glob: string);
```

## Usage

**Example**

```typescript
import Packmule from '@packmule/core';
import WatchPack from '@packmule/watch-pack';

const packmule = new Packmule();
packmule.add(new WatchPack());
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://avatars.githubusercontent.com/u/4364197?s=64">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/watch-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/watch-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
