# Sass Pack

> Compile `Sass` to `CSS`.

`Sass Pack` uses `PostCSS` to transform code as needed.
To configure `PostCSS` settings in your project, a `.postcssrc.json`
file can be used. `stylelint` is used to lint Sass code, which can
be configured via a `stylelint.json` file.

## Setup

```bash
npm install --save-dev @packmule/sass-pack sass stylelint
```

## API

```ts
SassPack()
    .include(glob: string)
    .importer(importer: Function)
    .modules()
```

## Hints

-   **optimize** - _Enables or disables minification of the generated CSS._
-   **debug** - _Controls generation of source maps for the generated CSS._
-   **lint** - _Defines whether code linting via `stylelint` is enabled or not._
-   **fix** - _Defines whether code fixing via `stylelint` is enabled or not._
-   **extract** - _Used to determine if actual CSS files are being created._
-   **hash** - _Configures whether file name hashing is enabled or not._

## Usage

**Example**

Configure compiling SCSS to CSS.

```ts
import Packmule from '@packmule/core';
import SassPack from '@packmule/sass-pack';
import MagicImporter from 'node-sass-magic-importer';

const packmule = new Packmule();
packmule.register(new SassPack().importer(MagicImporter()));
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
