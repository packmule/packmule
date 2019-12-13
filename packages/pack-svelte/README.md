# Svelte Pack [![npm-latest]][npm]

> Handle `svelte` single-file-component files.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Svelte Pack` is included in the [`complete`][edition-complete] edition.

**Current Release**

```bash
npm install --save-dev @packmule/svelte-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/svelte-pack@nightly
```

## API

```typescript
SveltePack();
```

### Hints

-   **extract** - _Used to determine if actual CSS files are being created._

## Usage

**Example**

Compile `svelte` files and embedded languages like TypeScript and Sass.

```typescript
import Packmule from '@packmule/core';
import SveltePack from '@packmule/svelte-pack';
import SassPack from '@packmule/sass-pack';
import TypescriptPack from '@packmule/typescript-pack';

const packmule = new Packmule();
packmule.add(new SveltePack());
packmule.add(new SassPack());
packmule.add(new TypeScriptPack());
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/svelte-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/svelte-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
