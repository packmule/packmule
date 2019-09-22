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

## Hints

-   **hash** - _Configures whether file name hashing is enabled or not._

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

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
