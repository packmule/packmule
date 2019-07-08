# Hot Module Replacement Pack
> Include the `hot module replacement` plugin for development.

## API
```ts
HotModuleReplacementPack(options?: {})
```

## Usage

**Example**

Enable the HMR functionality for development.

```ts
import Packmule from '@packmule/core';
import HotModuleReplacementPack from '@packmule/hmr-pack';

const packmule = new Packmule();

if (env.development && env.server) {
    packmule.register(new HotModuleReplacementPack());
}

return packmule.generate();
```
