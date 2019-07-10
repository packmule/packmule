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

## Options
* **optimize** - *Enables or disables minification of the generated CSS.*
* **debug** - *Controls generation of source maps for the generated CSS.*
* **lint** - *Defines whether code linting via `stylelint` is enabled or not.*
* **fix** - *Defines whether code fixing via `stylelint` is enabled or not.*
* **extract** - *Used to determine if actual CSS files are being created.*
* **hash** - *Configures whether file name hashing is enabled or not.*

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
