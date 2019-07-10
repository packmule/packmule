# Sprite Pack
> Generate a SVG-based vector-sprite.

## Setup
```bash
npm install --save-dev @packmule/sprite-pack
```

## API
```ts
SpritePack(name: string)
    .include(glob: string)
    .to(path: string)
```

## Usage

**Example**

Generate a vector sprite.

```ts
import Packmule from '@packmule/core';
import SpritePack from '@packmule/sprite-pack';

const packmule = new Packmule();
packmule.register(new SpritePack('common').to('sprites/').include('**/assets/base/icons/common/*.svg'));
return packmule.generate();
```
