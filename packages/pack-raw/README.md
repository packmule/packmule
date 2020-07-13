# Raw Pack [![npm-latest]][npm]

> Merge raw `webpack` configuration.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [Internals](#internals)
-   [License](#license)

## Setup

`Raw Pack` is included in the [`default`][edition-default] and [`complete`][edition-complete] editions.

**Current Release**

```bash
npm install --save-dev @packmule/raw-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/raw-pack@nightly
```

## API

### Methods

**RawPack(generate, process?)**  
_Instantiate a new raw pack._

**plugin(plugin: webpack.Plugin)**  
_Add a `webpack` plugin._

### Hints

> View the `packmule` [hints documentation][packmule-hints] for more information.

Raw pack doesn't use any hints directly but they're passed to the functions given to the constructor.

## Usage

> View the `packmule` [API documentation][packmule-api] for general usage patterns.

**Basic Usage**

Merge custom `webpack` configuration.

```typescript
import Packmule from '@packmule/core';
import RawPack from '@packmule/raw-pack';

const packmule = new Packmule();
const pack = new RawPack((options, hints) => {
    return {
        cache: hints.cache,
    };
});

packmule.add(pack);

return packmule.generate();
```

**Specific Hints**

Set different/explicit `hints` for the raw pack.

```typescript
import Packmule from '@packmule/core';
import RawPack from '@packmule/raw-pack';

const packmule = new Packmule();
const pack = new RawPack((options, hints) => {
    return {
        cache: hints.cache,
    };
});

packmule.add(pack, {
    cache: false,
});

return packmule.generate();
```

**Register Plugin**

Register a `webpack` plugin.

```typescript
import webpack from 'webpack';
import Packmule from '@packmule/core';
import RawPack from '@packmule/raw-pack';

const plugin = new webpack.ProvidePlugin({
    $: 'jquery',
});

const packmule = new Packmule();
const pack = new RawPack().plugin(plugin);

packmule.add(pack);

return packmule.generate();
```

**Process Configuration**

Process the final `webpack` configuration.

```typescript
import Packmule from '@packmule/core';
import RawPack from '@packmule/raw-pack';

const packmule = new Packmule();
const pack = new RawPack(
    () => {},
    (configuration, options, hints) => {
        configuration.cache = hints.cache;
        return configuration;
    },
);

packmule.add(pack);

return packmule.generate();
```

## Internals

<details>
  <summary>Dependencies</summary>
  
  This dependencies are used primarily by the pack internally.
  
  * `webpack-merge`
</details>

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://avatars.githubusercontent.com/u/4364197?s=64">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/raw-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/raw-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
