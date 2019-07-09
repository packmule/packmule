# Svelte Pack
> Handle `svelte` single-file-component files.

## API
```ts
SveltePack()
```

## Usage

**Example**

Compile `svelte` files and embedded languages like TypeScript and Sass.

```ts
import Packmule, { SveltePack, SassPack, TypeScriptPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.register(new SveltePack());
packmule.register(new SassPack());
packmule.register(new TypeScriptPack());
return packmule.generate();
```
