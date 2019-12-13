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

## Hints

-   **cache** - _Controls cache utilization of the `babel-loader`._
-   **lint** - _Controls source-code linting via `eslint-webpack-plugin`._
-   **fix** - _Controls source-code fixing via `eslint-webpack-plugin`._

## Usage

**Example**

Process JavaScript code.

```ts
import Packmule from '@packmule/core';
import JavascriptPack from '@packmule/javascript-pack';

const packmule = new Packmule();
packmule.add(new JavaScriptPack());
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
