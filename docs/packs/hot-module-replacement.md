# Hot Module Replacement Pack
> Includes the `hot module replacement` plugin for development.

## API
```ts
HotModuleReplacementPack(options?: {})
```

## Usage

**Example**

Enable the HMR functionality for development.

```ts
import Packmule, { HotModuleReplacementPack } from '@pixelart/packmule';

const packmule = new Packmule();

if (env.development && env.server) {
    packmule.use(new HotModuleReplacementPack());
}

return packmule.generate();
```
