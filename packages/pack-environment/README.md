# Environment Pack [![npm-latest]][npm]

> Populate `process.env` via `.env` files and at runtime.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Environment Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/environment-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/environment-pack@nightly
```

## API

```typescript
EnvironmentPack(path?: string)
  .set(key: string, value: any)
```

## Usage

**Example**

Use a `.env` file per environment and set the build timestamp at build time.

```typescript
import Packmule from '@packmule/core';
import EnvironmentPack from '@packmule/environment-pack';

const pack = new EnvironmentPack(`.env.${environment}`).set('TIMESTAMP', +new Date());

const packmule = new Packmule();
packmule.add(pack);
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://avatars.githubusercontent.com/u/4364197?s=64">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/environment-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/environment-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
