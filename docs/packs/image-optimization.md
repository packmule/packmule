# Image Optimization Pack
> Optimize images using `imagemin`.

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
packmule.register(new ImageOptimizationPack().include('assets/images/**').to('images/'));
return packmule.generate();
```
