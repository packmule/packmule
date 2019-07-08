# Image Optimization Pack
> Optimize images using `imagemin`.

`Image Optimization Pack` uses `image-webpack-loader` to optimize images.

## API
```ts
ImageOptimizationPack()
    .include(glob: string)
    .to(path: string)
```

## Options
* **optimize** - *Controls whether `image-webpack-loader` optimizes images or not.*

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
