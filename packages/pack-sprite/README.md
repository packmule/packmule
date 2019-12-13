# Sprite Pack [![npm-latest]][npm]

> Generate a SVG-based vector-sprite.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Sprite Pack` is included in the [`complete`][edition-complete] edition.

**Current Release**

```bash
npm install --save-dev @packmule/sprite-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/sprite-pack@nightly
```

## API

```typescript
SpritePack(name: string)
    .include(glob: string)
    .to(path: string)
```

### Hints

-   **hash** - _Configures whether file name hashing is enabled or not._

## Usage

**Example**

Generate a vector sprite.

```typescript
import Packmule from '@packmule/core';
import SpritePack from '@packmule/sprite-pack';

const packmule = new Packmule();
packmule.add(new SpritePack('common').to('sprites/').include('**/assets/base/icons/common/*.svg'));
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/sprite-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/sprite-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
