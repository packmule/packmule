# Svelte Pack

> Handle `svelte` single-file-component files.

## Setup

```bash
npm install --save-dev @packmule/svelte-pack svelte
```

## API

```ts
SveltePack();
```

## Usage

**Example**

Compile `svelte` files and embedded languages like TypeScript and Sass.

```ts
import Packmule from '@packmule/core';
import SveltePack from '@packmule/svelte-pack';
import SassPack from '@packmule/sass-pack';
import TypescriptPack from '@packmule/typescript-pack';

const packmule = new Packmule();
packmule.register(new SveltePack());
packmule.register(new SassPack());
packmule.register(new TypeScriptPack());
return packmule.generate();
```
