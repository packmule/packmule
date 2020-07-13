# Output Pack [![npm-latest]][npm]

> Define the [output options](https://webpack.js.org/configuration/output/) for `webpack`.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Output Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/output-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/output-pack@nightly
```

## API

```typescript
OutputPack(path: string, web: string = '/')
```

## Options

-   **root** - _Used to build an absolute path of the configured output path._

### Hints

-   **hash** - _Configures whether file name hashing is enabled or not._

## Usage

**Example**

Configure the output options for the bundle.

```typescript
import Packmule from '@packmule/core';
import OutputPack from '@packmule/output-pack';

const packmule = new Packmule();
packmule.add(new OutputPack('public/', '/'));
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://avatars.githubusercontent.com/u/4364197?s=64">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/output-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/output-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
