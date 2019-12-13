# Alias Pack [![npm-latest]][npm]

> Configure Webpack [module aliases](https://webpack.js.org/configuration/resolve/#resolve-alias).

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Alias Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/alias-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/alias-pack@nightly
```

## API

```typescript
AliasPack(name: string, target: string)
```

## Usage

**Example**

Set an alias for a directory.

```typescript
import Packmule from '@packmule/core';
import AliasPack from '@packmule/alias-pack';

const packmule = new Packmule();
packmule.add(new AliasPack('Utility', 'src/common/utility/'));
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/alias-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/alias-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
