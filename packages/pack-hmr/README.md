# Hot Module Replacement Pack

> Include the `hot module replacement` plugin for development.

## Setup

```bash
npm install --save-dev @packmule/hmr-pack
```

## API

```ts
HotModuleReplacementPack(options?: {})
```

## Usage

**Example**

Enable the HMR functionality for development.

```ts
import Packmule from '@packmule/core';
import HotModuleReplacementPack from '@packmule/hmr-pack';

const packmule = new Packmule();

if (env.development && env.server) {
    packmule.register(new HotModuleReplacementPack());
}

return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
