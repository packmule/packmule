# Output Pack
> Define the [output options](https://webpack.js.org/configuration/output/) for `webpack`.

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
import Packmule, { OutputPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.register(new OutputPack('public/', '/'));
return packmule.generate();
```
