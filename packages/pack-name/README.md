# Name Pack [![npm-latest]][npm]

> Configure the Webpack [configuration name](https://webpack.js.org/configuration/other-options/#name).

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Name Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/name-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/name-pack@nightly
```

## API

```typescript
NamePack(name: string)
```

## Usage

**Example**

Set the Webpack configuration name.

```typescript
import Packmule from '@packmule/core';
import NamePack from '@packmule/name-pack';

const packmule = new Packmule();
packmule.add(new NamePack('main'));
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://avatars.githubusercontent.com/u/4364197?s=64">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/name-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/name-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
