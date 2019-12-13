# Less Pack [![npm-latest]][npm]

> Compile `less` to `CSS`.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Less Pack` is included in the [`complete`][edition-complete] edition.

**Current Release**

```bash
npm install --save-dev @packmule/less-pack less
```

**Nightly Build**

```bash
npm install --save-dev @packmule/less-pack@nightly less
```

## API

```typescript
LessPack()
    .include(glob: string)
    .modules()
```

### Hints

-   **optimize** - _Enables or disables minification of the generated CSS._
-   **debug** - _Controls generation of source maps for the generated CSS._
-   **lint** - _Defines whether code linting via `stylelint` is enabled or not._
-   **fix** - _Defines whether code fixing via `stylelint` is enabled or not._
-   **extract** - _Used to determine if actual CSS files are being created._
-   **hash** - _Configures whether file name hashing is enabled or not._

## Usage

**Example**

Configure compiling `less` to `CSS`.

```typescript
import Packmule from '@packmule/core';
import LessPack from '@packmule/less-pack';

const packmule = new Packmule();
packmule.add(new LessPack());
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/less-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/less-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
