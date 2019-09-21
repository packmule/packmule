# Compression Pack
> Generate `gzip` and `brotli` versions of configured assets.

`Compression Pack` uses `compression-webpack-plugin` and libraries
like `iltorb` to create compressed `gzip` and `brotli` files.

## API
```ts
CompressionPack({
    extensions: ['html', 'json', 'xml', 'js', 'css', 'svg', 'ttf', 'otf'],
    gzip: true,
    brotli: true,
})
```

## Options
* **optimize** - *Controls whether the pack is actually enabled or not.*
* **cache** - *Controls cache utilization for the compression libraries.*

## Usage

**Example**

Generate compressed files.

```ts
import Packmule, { CompressionPack } from '@packmule/packmule';

const packmule = new Packmule();

if (env.production) {
    packmule.register(new CompressionPack());
}

return packmule.generate();
```
