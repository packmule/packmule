# Log Pack [![npm-latest]][npm]

> Configure sane logging for `webpack`.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Log Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/log-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/log-pack@nightly
```

## API

```typescript
LogPack();
```

## Usage

**Example**

Set sane logging settings for webpack, printing only the most useful information.

```typescript
import Packmule from '@packmule/core';
import LogPack from '@packmule/log-pack';

const packmule = new Packmule();
packmule.add(new LogPack());
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/log-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/log-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
