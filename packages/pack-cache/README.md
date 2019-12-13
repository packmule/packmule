# Cache Pack

> Packmule pack to configure the Webpack [cache](https://webpack.js.org/configuration/other-options/#cache).

## Setup

```bash
npm install --save-dev @packmule/cache-pack
```

## API

```ts
CachePack();
```

## Usage

**Example**

```ts
import Packmule from '@packmule/core';
import CachePack from '@packmule/cache-pack';

const packmule = new Packmule();
packmule.add(new CachePack());
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
