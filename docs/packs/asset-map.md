# Asset Map Pack
> Create an asset map file for use with hashed file names.

## API
`AssetMapPack()`

## Usage

**Example**

```ts
import Packmule, { AssetMapPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.register(new AssetMapPack());
return packmule.generate();
```
