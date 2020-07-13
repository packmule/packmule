# Runtime Pack [![npm-latest]][npm]

> Configure the [`webpack` runtime](https://webpack.js.org/configuration/optimization/#optimization-runtimechunk).

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Runtime Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/runtime-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/runtime-pack@nightly
```

## API

```typescript
RuntimePack();
```

## Usage

**Example**

Enables the `webpack` runtime with a custom name.

```typescript
import Packmule from '@packmule/core';
import RuntimePack from '@packmule/runtime-pack';

const packmule = new Packmule();
packmule.add(new RuntimePack('bootstrap'));
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://avatars.githubusercontent.com/u/4364197?s=64">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/runtime-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/runtime-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
