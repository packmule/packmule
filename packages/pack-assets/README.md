# Assets Pack
> Create an asset map file for use with hashed file names.

## API
`AssetsPack()`

## Usage

The `AssetsPack` is best used in combination with the packmule `hash` option.

**Example**

```ts
import Packmule from '@packmule/core';
import AssetsPack from '@packmule/assets-pack';

const packmule = new Packmule();
packmule.register(new AssetsPack());
return packmule.generate();
```
