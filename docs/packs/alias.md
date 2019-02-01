# Alias Pack
> Configure [module aliases](https://webpack.js.org/configuration/resolve/#resolve-alias) for webpack.

## API
```ts
AliasPack(name: string, target: string)
```

## Usage

**Example**

Set an alias for a directory.

```ts
import Packmule, { AliasPack } from '@packmule/packmule';

const packmule = new Packmule();
packmule.register(new AliasPack('Utility', 'src/common/utility/'));
return packmule.generate();
```
