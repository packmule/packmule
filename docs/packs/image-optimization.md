# Image Optimization Pack
> Optimizes images using `imagemin`.

## API
```ts
ImageOptimizationPack()
    .include(glob: string)
    .to(path: string)
```

## Usage

**Example**

Optimize images.

```ts
import Packmule, { ImageOptimizationPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.use(new ImageOptimizationPack().include('assets/images/**').to('images/'));
return packmule.generate();
```
