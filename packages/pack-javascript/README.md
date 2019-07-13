# JavaScript Pack

> Transpile JavaScript using Babel.

Internally the `JavaScript Pack` uses `Babel` to transpile the code if needed.
To configure `Babel` settings in your project, a `.babelrc.json` file can be used.
Linting code via `ESLint` can be utilized by creating an `.eslintrc` file.

## Setup

```bash
npm install --save-dev @packmule/javascript-pack @babel/core eslint
```

## API

```ts
JavaScriptPack()
    .include(glob: string)
```

## Options

-   **cache** - _Controls cache utilization of the `babel-loader`._
-   **lint** - _Controls source-code linting via `eslint-loader`._
-   **fix** - _Controls source-code fixing via `eslint-loader`._

## Usage

**Example**

Process JavaScript code.

```ts
import Packmule from '@packmule/core';
import JavascriptPack from '@packmule/javascript-pack';

const packmule = new Packmule();
packmule.register(new JavaScriptPack());
return packmule.generate();
```
