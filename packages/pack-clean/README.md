# Clean Pack
> Clear a directory prior to building the bundle.

`Clean Pack` uses [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin)
to clear a directory before building. It is advised to clear the
webpack output directory prior building to get rid of old files.

## Setup
```bash
npm install --save-dev @packmule/clean-pack
```

## API
`CleanPack()`

## Options
* **root** - *Defines the `root` option of `clean-webpack-plugin`.*
* **debug** - *Controls the `verbose` option of `clean-webpack-plugin`.*

## Usage

**Example** 

Clears the contents of the webpack `output` directory prior building.

```ts
import Packmule from '@packmule/core';
import CleanPack from '@packmule/clean-pack';

const packmule = new Packmule();
packmule.register(new CleanPack());
return packmule.generate();
```
