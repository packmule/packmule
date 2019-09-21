# Raw Pack
> Merge raw `webpack` configuration.

## API
```ts
RawPack(configuration: webpack.Configuration)
```

## Usage

**Example**

Merge custom Webpack configuration.

```ts
import Packmule, { RawPack } from '@packmule/packmule';

const packmule = new Packmule();

packmule.register(new RawPack({
    cache: false,
));

return packmule.generate();
```
