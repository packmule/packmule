# Compression Pack
> Generate `gzip` and `brotli` versions of configured assets.

## API
```ts
CompressionPack({
    extensions: ['html', 'json', 'xml', 'js', 'css', 'svg', 'ttf', 'otf'],
    gzip: true,
    brotli: true,
})
```

## Usage

**Example**

Generate compressed files.

```ts
import Packmule, { CompressionPack } from '@pixelart/packmule';

const packmule = new Packmule();

if (env.production) {
    packmule.register(new CompressionPack());
}

return packmule.generate();
```
