# Target Pack [![npm-latest]][npm]

> Set the [target environment](https://webpack.js.org/configuration/target/).

`Target Pack` configures the target environment in which the bundle runs.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Target Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/target-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/target-pack@nightly
```

## API

```typescript
TargetPack(target: string)
```

## Options

-   **target** - _Defines the target environment in which the bundle runs._

## Usage

**Example**

Set the target environment.

```typescript
import Packmule from '@packmule/core';
import TargetPack from '@packmule/target-pack';

const packmule = new Packmule();
packmule.add(new TargetPack('node'));

return packmule.generate();
```

**Example**

Set the target environment dynamically.

```typescript
import Packmule from '@packmule/core';
import TargetPack from '@packmule/target-pack';

const packmule = new Packmule();
packmule.add(
    new TargetPack((compiler) => {
        compiler.apply(new webpack.JsonpTemplatePlugin(options.output), new webpack.RuleSetRuleTargetPlugin('web'));
    }),
);

return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://avatars.githubusercontent.com/u/4364197?s=64">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/target-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/target-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
