# Chunk Pack [![npm-latest]][npm]

> Split code into chunks using the [split-chunks plugin](https://webpack.js.org/plugins/split-chunks-plugin/).

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Chunk Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/chunk-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/chunk-pack@nightly
```

## API

`ChunkPack(name: string)`

## Usage

**Example**

Generate a chunk file for all node dependencies.

```typescript
import Packmule from '@packmule/core';
import ChunkPack from '@packmule/chunk-pack';

const packmule = new Packmule();
packmule.add(new ChunkPack('vendor').include('**/node_modules/**'));
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/chunk-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/chunk-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
