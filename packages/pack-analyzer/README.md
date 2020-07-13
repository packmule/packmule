# Analyzer Pack [![npm-latest]][npm]

> Analyze the generated bundle size.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Analyzer Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/analyzer-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/analyzer-pack@nightly
```

## API

`AnalyzerPack()`

## Usage

**Example**

```typescript
import Packmule from '@packmule/core';
import AssetsPack from '@packmule/analyzer-pack';

const packmule = new Packmule();
packmule.add(new AnalyzerPack());
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://avatars.githubusercontent.com/u/4364197?s=64">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/analyzer-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/analyzer-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
