# Vue Pack
> Packmule pack to bundle Vue single-file-components.

## API
```ts
VuePack()
```

## Usage

**Example**

Compile `vue` files and embedded languages like TypeScript and Sass.

```ts
import Packmule from '@packmule/core';
import VuePack from '@packmule/vue-pack';
import SassPack from '@packmule/sass-pack';
import TypeScriptPack from '@packmule/typescript-pack';

const packmule = new Packmule();
packmule.register(new VuePack());
packmule.register(new SassPack());
packmule.register(new TypeScriptPack());
return packmule.generate();
```
