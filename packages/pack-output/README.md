# Output Pack

> Define the [output options](https://webpack.js.org/configuration/output/) for `webpack`.

## Setup

```bash
npm install --save-dev @packmule/output-pack
```

## API

```ts
OutputPack(path: string, web: string = '/')
```

## Options

-   **root** - _Used to build an absolute path of the configured output path._

## Hints

-   **hash** - _Configures whether file name hashing is enabled or not._

## Usage

**Example**

Configure the output options for the bundle.

```ts
import Packmule from '@packmule/core';
import OutputPack from '@packmule/output-pack';

const packmule = new Packmule();
packmule.add(new OutputPack('public/', '/'));
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
