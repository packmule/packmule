# Less Pack
> Compile `less` to `CSS`.

`Less Pack` uses `PostCSS` to transform code as needed.
To configure `PostCSS` settings in your project, a `.postcssrc.json`
file can be used. `stylelint` is used to lint less code, which can
be configured via a `stylelint.json` file.

## API
```ts
LessPack()
```

## Options
* **optimize** - *Enables or disables minification of the generated CSS.*
* **debug** - *Controls generation of source maps for the generated CSS.*
* **lint** - *Defines whether code linting via `stylelint` is enabled or not.*
* **extract** - *Used to determine if actual CSS files are being created.*
* **hash** - *Configures whether file name hashing is enabled or not.*

## Usage

**Example**

Configure compiling less to CSS.

```ts
import Packmule, { LessPack } from '@packmule/packmule';

const packmule = new Packmule();
packmule.register(new LessPack());
return packmule.generate();
```
