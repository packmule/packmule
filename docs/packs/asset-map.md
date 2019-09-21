# Asset Map Pack
> Create an asset map file for use with hashed file names.

## API
`AssetMapPack()`

## Usage

The `AssetMapPack` is best used in combination with the packmule `hash` option.

**Example**

```ts
import Packmule, { AssetMapPack } from '@packmule/packmule';

const packmule = new Packmule();
packmule.register(new AssetMapPack());
return packmule.generate();
```
