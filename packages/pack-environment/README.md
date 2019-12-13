# Environment Pack

> Populate `process.env` via `.env` files and at runtime.

## Setup

```bash
npm install --save-dev @packmule/environment-pack
```

## API

```ts
EnvironmentPack(path?: string)
  .set(key: string, value: any)
```

## Usage

**Example**

Use a `.env` file per environment and set the build timestamp at build time.

```ts
import Packmule from '@packmule/core';
import EnvironmentPack from '@packmule/environment-pack';

const pack = new EnvironmentPack(`.env.${environment}`).set('TIMESTAMP', +new Date());

const packmule = new Packmule();
packmule.add(pack);
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
