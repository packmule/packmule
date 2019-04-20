# JavaScript Pack
> Transpile JavaScript using Babel.

Internally the `JavaScript Pack` uses `Babel` to transpile the code if needed.
To configure `Babel` settings in your project, a `.babelrc.json` file can be used.
Linting code via `ESLint` can be utilized by creating an `.eslintrc` file.

## API
```ts
JavaScriptPack()
    .include(glob: string)
```

## Options
* **cache** - *Controls cache utilization of the `babel-loader`.*
* **lint** - *Controls source-code linting via `eslint-loader`.*

## Usage

**Example**

Process JavaScript code.

```ts
import Packmule, { JavaScriptPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.register(new JavaScriptPack());
return packmule.generate();
```
