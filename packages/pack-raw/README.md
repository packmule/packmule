# Raw Pack

> Merge raw `webpack` configuration.

## Setup

```bash
npm install --save-dev @packmule/raw-pack
```

## API

```ts
RawPack(configuration: webpack.Configuration)
```

## Usage

**Example**

Merge custom Webpack configuration.

```ts
import Packmule from '@packmule/core';
import RawPack from '@packmule/raw-pack';

const packmule = new Packmule();

packmule.register(new RawPack({
    cache: false,
));

return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
