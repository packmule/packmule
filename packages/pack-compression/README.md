# Compression Pack

> Generate `gzip` and `brotli` versions of configured assets.

`Compression Pack` uses `compression-webpack-plugin` and libraries
like `iltorb` to create compressed `gzip` and `brotli` files.

## Setup

```bash
npm install --save-dev @packmule/compression-pack
```

## API

```ts
CompressionPack({
    extensions: ['html', 'json', 'xml', 'js', 'css', 'svg', 'ttf', 'otf'],
    gzip: true,
    brotli: true,
});
```

## Options

-   **optimize** - _Controls whether the pack is actually enabled or not._
-   **cache** - _Controls cache utilization for the compression libraries._

## Usage

**Example**

Generate compressed files.

```ts
import Packmule from '@packmule/core';
import CompressionPack from '@packmule/compression-pack';

const packmule = new Packmule();

if (env.production) {
    packmule.register(new CompressionPack());
}

return packmule.generate();
```
