# Raw Pack
> Merge raw Webpack configuration directly.

## API
```ts
RawPack(configuration: webpack.Configuration)
```

## Usage

**Example**

Merge in custom Webpack configuration.

```ts
import Packmule, { RawPack } from '@pixelart/packmule';

const packmule = new Packmule();

packmule.use(new RawPack({
    cache: false,
));

return packmule.generate();
```
