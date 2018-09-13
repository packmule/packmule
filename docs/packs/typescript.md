# TypeScript Pack
> Compile TS to JS including Babel transpiling.

## API
```ts
TypeScriptPack()
    .include(glob: string)
```

## Usage

**Example**

Configure TS to JS transpiling.

```ts
import Packmule, { TypeScriptPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.use(new TypeScriptPack());
return packmule.generate();
```

## Configuration
