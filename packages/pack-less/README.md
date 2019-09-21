# Less Pack

> Compile `less` to `CSS`.

## Setup

```bash
npm install --save-dev @packmule/less-pack less
```

## API

```ts
LessPack()
    .include(glob: string)
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

Configure compiling `less` to `CSS`.

```ts
import Packmule from '@packmule/core';
import LessPack from '@packmule/less-pack';

const packmule = new Packmule();
packmule.register(new LessPack());
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
