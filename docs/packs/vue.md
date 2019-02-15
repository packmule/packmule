# Vue Pack
> Handle `vue` single-file-component files.

## API
```ts
VuePack()
```

## Usage

**Example**

Compile `vue` files and embedded languages like TypeScript and Sass.

```ts
import Packmule, { VuePack, SassPack, TypeScriptPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.register(new VuePack());
packmule.register(new SassPack());
packmule.register(new TypeScriptPack());
return packmule.generate();
```
