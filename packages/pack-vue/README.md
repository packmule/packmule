# Vue Pack [![npm-latest]][npm]

> Packmule pack to bundle Vue single-file-components.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Vue Pack` is included in the [`complete`][edition-complete] edition.

**Current Release**

```bash
npm install --save-dev @packmule/vue-pack vue vue-template-compiler
```

**Nightly Build**

```bash
npm install --save-dev @packmule/vue-pack@nightly vue vue-template-compiler
```

## API

```typescript
VuePack();
```

## Usage

**Example**

Compile `vue` files and embedded languages like TypeScript and Sass.

```typescript
import Packmule from '@packmule/core';
import VuePack from '@packmule/vue-pack';
import SassPack from '@packmule/sass-pack';
import TypeScriptPack from '@packmule/typescript-pack';

const packmule = new Packmule();
packmule.add(new VuePack());
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
[npm]: https://www.npmjs.com/package/@packmule/vue-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/vue-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
