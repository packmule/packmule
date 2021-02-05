# Image Optimization Pack [![npm-latest]][npm]

> Optimize images using `imagemin`.

`Image Optimization Pack` uses `image-webpack-loader` to optimize images.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Image Optimization Pack` is included in the [`complete`][edition-complete] edition.

**Current Release**

```bash
npm install --save-dev @packmule/image-optimization-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/image-optimization-pack@nightly
```

## API

```typescript
ImageOptimizationPack()
    .include(glob: string)
    .to(path: string)
```

### Hints

-   **optimize** - _Controls whether `image-minimizer-webpack-plugin` optimizes images or not._

## Usage

**Example**

Optimize images.

```typescript
import Packmule from '@packmule/core';
import ImageOptimizationPack from '@packmule/image-optimization-pack';

const packmule = new Packmule();
packmule.add(new ImageOptimizationPack().include('assets/images/**').to('images/'));
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://avatars.githubusercontent.com/u/4364197?s=64">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/image-optimization-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/image-optimization-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
