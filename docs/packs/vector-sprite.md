# Vector Sprite Pack
> Generate a SVG-based vector-sprite.

## API
```ts
VectorSpritePack(name: string)
    .include(glob: string)
    .to(path: string)
```

## Usage

**Example**

Generate a vector sprite.

```ts
import Packmule, { VectorSpritePack } from '@packmule/packmule';

const packmule = new Packmule();
packmule.register(new VectorSpritePack('common').to('sprites/').include('**/assets/base/icons/common/*.svg'));
return packmule.generate();
```
