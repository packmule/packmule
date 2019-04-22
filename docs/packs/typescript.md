# TypeScript Pack
> Compile `TypeScript` to `JavaScript` including `Babel` transpiling.

Internally the `TypeScript Pack` uses `Babel` to transpile the code if needed.
To configure `Babel` settings in your project, a `.babelrc.json` file can be used.
Linting code via `ESLint` can be utilized by creating an `.eslintrc` file.

## API
```ts
TypeScriptPack()
    .include(glob: string)
```

## Options
* **cache** - *Controls cache utilization of the `babel-loader`.*
* **lint** - *Controls source-code linting via `eslint-loader`.*
* **fix** - *Controls source-code fixing via `eslint-loader`.*
* **debug** - *Controls generation of source maps for the generated JS.*

## Usage

**Example**

Configure TS to JS transpiling.

```ts
import Packmule, { TypeScriptPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.register(new TypeScriptPack());
return packmule.generate();
```
