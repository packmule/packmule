# Target Pack

> Set the [target environment](https://webpack.js.org/configuration/target/).

`Target Pack` configures the target environment in which the bundle runs.

## Setup

```bash
npm install --save-dev @packmule/target-pack
```

## API

```ts
TargetPack(target: string)
```

## Options

-   **target** - _Defines the target environment in which the bundle runs._

## Usage

**Example**

Set the target environment.

```ts
import Packmule from '@packmule/core';
import TargetPack from '@packmule/target-pack';

const packmule = new Packmule();
packmule.add(new TargetPack('node'));

return packmule.generate();
```

**Example**

Set the target environment dynamically.

```ts
import Packmule from '@packmule/core';
import TargetPack from '@packmule/target-pack';

const packmule = new Packmule();
packmule.add(
    new TargetPack((compiler) => {
        compiler.apply(new webpack.JsonpTemplatePlugin(options.output), new webpack.LoaderTargetPlugin('web'));
    }),
);

return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
