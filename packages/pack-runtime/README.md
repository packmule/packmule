# Runtime Pack

> Configure the [`webpack` runtime](https://webpack.js.org/configuration/optimization/#optimization-runtimechunk).

## Setup

```bash
npm install --save-dev @packmule/runtime-pack
```

## API

```ts
RuntimePack();
```

## Usage

**Example**

Enables the `webpack` runtime with a custom name.

```ts
import Packmule from '@packmule/core';
import RuntimePack from '@packmule/runtime-pack';

const packmule = new Packmule();
packmule.register(new RuntimePack('bootstrap'));
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
