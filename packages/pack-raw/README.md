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
import Packmule from '@packmule/core';
import RawPack from '@packmule/raw-pack';

const packmule = new Packmule();

packmule.register(new RawPack({
    cache: false,
));

return packmule.generate();
```
