# Alias Pack
> Packmule pack to configure Webpack [module aliases](https://webpack.js.org/configuration/resolve/#resolve-alias).

## Setup
```bash
npm install --save-dev @packmule/alias-pack
```

## API
```ts
AliasPack(name: string, target: string)
```

## Usage

**Example**

Set an alias for a directory.

```ts
import Packmule from '@packmule/core';
import AliasPack from '@packmule/alias-pack';

const packmule = new Packmule();
packmule.register(new AliasPack('Utility', 'src/common/utility/'));
return packmule.generate();
```
