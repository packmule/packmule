# Entry Pack [![npm-latest]][npm]

> Define an [entry point](https://webpack.js.org/configuration/entry-context/#entry) for webpack.

`Entry Pack` configures the actual [entry point](https://webpack.js.org/concepts/#entry)
for the bundle and can be used multiple times to define multiple entry points.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Entry Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/entry-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/entry-pack@nightly
```

## API

```typescript
EntryPack(path: string, name?: string)
```

## Options

-   **root** - _Used to build an absolute path of the configured entry file path._

## Usage

**Example**

Set single entry point and generate an `app` bundle.

```typescript
import Packmule from '@packmule/core';
import EntryPack from '@packmule/entry-pack';

const packmule = new Packmule();
packmule.add(new EntryPack('assets/entry.ts', 'app'));
return packmule.generate();
```

**Example**

Set multiple entrypoints and generate a `one` and a `two` bundle.

```typescript
import Packmule from '@packmule/core';
import EntryPack from '@packmule/entry-pack';

const packmule = new Packmule();
packmule.add(new EntryPack('assets/one.ts'));
packmule.add(new EntryPack('assets/two.ts'));
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://avatars.githubusercontent.com/u/4364197?s=64">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/entry-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/entry-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
