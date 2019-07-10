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
* **root** - *Used to build an absolute path of the configured output path.*
* **hash** - *Configures whether file name hashing is enabled or not.*

## Usage

**Example**

Configure the output options for the bundle.

```ts
import Packmule from '@packmule/core';
import OutputPack from '@packmule/output-pack';

const packmule = new Packmule();
packmule.register(new OutputPack('public/', '/'));
return packmule.generate();
```
