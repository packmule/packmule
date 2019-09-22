# Image Optimization Pack

> Optimize images using `imagemin`.

`Image Optimization Pack` uses `image-webpack-loader` to optimize images.

## Setup

```bash
npm install --save-dev @packmule/image-optimization-pack
```

## API

```ts
ImageOptimizationPack()
    .include(glob: string)
    .to(path: string)
```

## Hints

-   **optimize** - _Controls whether `image-webpack-loader` optimizes images or not._

## Usage

**Example**

Optimize images.

```ts
import Packmule from '@packmule/core';
import ImageOptimizationPack from '@packmule/image-optimization-pack';

const packmule = new Packmule();
packmule.register(new ImageOptimizationPack().include('assets/images/**').to('images/'));
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
