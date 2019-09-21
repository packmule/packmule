# TypeScript Pack
> Compile `TypeScript` to `JavaScript` including `Babel` transpiling.

Internally the `TypeScript Pack` uses `Babel` to transpile the code if needed.
To configure `Babel` settings in your project, a `.babelrc.json` file can be used.

## API
```ts
TypeScriptPack()
    .include(glob: string)
```

## Options
* **cache** - *Controls cache utilization of the `babel-loader`.*
* **debug** - *Controls generation of source maps for the generated JS.*

## Usage

**Example**

Configure TS to JS transpiling.

```ts
import Packmule, { TypeScriptPack } from '@packmule/packmule';

const packmule = new Packmule();
packmule.register(new TypeScriptPack());
return packmule.generate();
```
