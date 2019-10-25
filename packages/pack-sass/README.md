# Sass Pack [![npm-latest]][npm] [![npm-nightly]][npm]

> Compile `Sass` to `CSS`.

`Sass Pack` compiles Sass and SCSS to CSS. To configure `PostCSS` settings
in your project, a `.postcssrc.json` file can be used. `stylelint` is used
to lint styles, which can be configured via a `stylelint.json` file.

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [Internals](#internals)
-   [License](#license)

## Setup

`Sass Pack` is included in the [`complete`][edition-complete] edition.

**Current Release**

```bash
npm install --save-dev @packmule/sass-pack sass stylelint
```

**Nightly Build**

```bash
npm install --save-dev @packmule/sass-pack@nightly sass stylelint
```

## API

### Methods

**include(glob: string)**  
_Configure files to be processed. If not used, all files will be compiled._

**importer(importer: Function)**  
_Register a custom [Sass importer][sass-importer]._

**modules()**  
_Enable [CSS modules][css-modules] to be used. By default modules are disabled._

### Hints

> View the `packmule` [hints documentation][packmule-hints] for more information.

-   **optimize** - _Enable or disable minification of the generated CSS._
-   **map** - _Control generation of source maps for the generated CSS._
-   **lint** - _Define whether code linting via `stylelint` is enabled or not._
-   **fix** - _Define whether code fixing via `stylelint` is enabled or not._
-   **extract** - _Use to determine if actual CSS files are being created._
-   **hash** - _Configure whether file name hashing is enabled or not._

## Usage

> View the `packmule` [API documentation][packmule-api] for general usage patterns.

**Basic Usage**

Add the pack to be used by `packmule` to compile Sass to CSS.

```ts
import Packmule from '@packmule/core';
import SassPack from '@packmule/sass-pack';

const packmule = new Packmule();
const pack = new SassPack();

packmule.add(pack);

return packmule.generate();
```

**Sass Importer**

Register a custom [Sass importer][sass-importer].

```ts
import Packmule from '@packmule/core';
import SassPack from '@packmule/sass-pack';
import MagicImporter from 'node-sass-magic-importer';

const packmule = new Packmule();
const pack = new SassPack().importer(MagicImporter());

packmule.add(pack);

return packmule.generate();
```

**CSS Modules**

Enable [CSS modules][css-modules].

```ts
import Packmule from '@packmule/core';
import SassPack from '@packmule/sass-pack';

const packmule = new Packmule();
const pack = new SassPack().modules();

packmule.add(pack);

return packmule.generate();
```

**Direct Generation**

Use `packmule.generate()` to directly generate the pack configuration.
This is useful for debugging and manipulating the configuration.

```ts
import Packmule from '@packmule/core';
import SassPack from '@packmule/sass-pack';

const packmule = new Packmule();
const pack = new SassPack();

const configuration = packmule.generate(pack);
```

**Specific Hints**

Set different/explicit `hints` for the Sass pack.

```ts
import Packmule from '@packmule/core';
import SassPack from '@packmule/sass-pack';

const packmule = new Packmule();
const pack = new SassPack();

packmule.add(pack, {
    map: false,
    fix: false,
});

return packmule.generate();
```

## Internals

<details>
  <summary>Dependencies</summary>
  
  This dependencies are used primarily by the pack internally.
  
  * `sass-loader`
  * `css-loader`
  * `style-loader`
  * `postcss-loader`
  * `resolve-url-loader`
  * `mini-css-extract-plugin`
  * `optimize-css-assets-webpack-plugin`
  * `stylelint-webpack-plugin`
  
  These peer dependencies are needed to use the pack.
  
  * `sass`
  * `stylelint`
</details>

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/sass-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/sass-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[npm-nightly]: https://img.shields.io/npm/v/@packmule/sass-pack/nightly?color=%23111111&label=nightly&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
[sass-importer]: https://sass-lang.com/documentation/js-api#importer
[css-modules]: https://github.com/css-modules/css-modules
