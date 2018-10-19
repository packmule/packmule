# TypeScript Pack
> Compile `TypeScript` to `JavaScript` including `Babel` transpiling.

Internally the `TypeScript Pack` uses `Babel` to transpile the code if needed.
To configure `Babel` settings in your project, a `.babelrc.json` file can be used.
`tslint` is used to lint TypeScript code, which can be configured via a `tslint.json` file.

## API
```ts
TypeScriptPack()
    .include(glob: string)
```

## Options
* **cache** - *Controls cache utilization of the `babel-loader`.*
* **debug** - *Controls generation of source maps for the generated JS.*
* **lint** - *Defines whether code linting via `tslint` is enabled or not.*

## Usage

**Example**

Configure TS to JS transpiling.

```ts
import Packmule, { TypeScriptPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.register(new TypeScriptPack());
return packmule.generate();
```
