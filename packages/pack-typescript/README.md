# TypeScript Pack

> Compile `TypeScript` to `JavaScript` including `Babel` transpiling.

Internally the `TypeScript Pack` uses `Babel` to transpile the code if needed.
To configure `Babel` settings in your project, a `.babelrc.json` file can be used.
Linting code via `ESLint` can be utilized by creating an `.eslintrc` file.

## Setup

```bash
npm install --save-dev @packmule/typescript-pack typescript @babel/core eslint
```

## API

```ts
TypeScriptPack()
    .include(glob: string)
```

## Options

-   **debug** - _Controls generation of source maps for the generated JS._

## Hints

-   **cache** - _Controls cache utilization of the `babel-loader`._
-   **lint** - _Controls source-code linting via `eslint-loader`._
-   **fix** - _Controls source-code fixing via `eslint-loader`._

## Usage

**Example**

Configure TS to JS transpiling.

```ts
import Packmule from '@packmule/core';
import TypeScriptPack from '@packmule/typescript-pack';

const packmule = new Packmule();
packmule.register(new TypeScriptPack());
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
