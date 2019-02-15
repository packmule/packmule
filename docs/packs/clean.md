# Clean Pack
> Clear a directory prior to building the bundle.

`Clean Pack` uses [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin)
to clear a directory before building. It is advised to clear the
webpack output directory prior building to get rid of old files.

## API
`CleanPack(path: string)`

## Options
* **root** - *Defines the `root` option of `clean-webpack-plugin`.*
* **debug** - *Controls the `verbose` option of `clean-webpack-plugin`.*

## Usage

**Example** 

Clears the contents of the `web/static/` directory before building.

```ts
import Packmule, { CleanPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.register(new CleanPack('web/static/'));
return packmule.generate();
```
