# Assets Pack

> Create an asset map file for use with hashed file names.

## Setup

```bash
npm install --save-dev @packmule/alias-assets
```

## API

`AssetsPack()`

## Usage

The `AssetsPack` is best used in combination with the packmule `hash` option.

**Example**

```ts
import Packmule from '@packmule/core';
import AssetsPack from '@packmule/assets-pack';

const packmule = new Packmule();
packmule.add(new AssetsPack());
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
