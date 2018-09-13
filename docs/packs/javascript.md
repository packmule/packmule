# JavaScript Pack
> Process JS including Babel support.

## API
```ts
JavaScriptPack()
    .include(glob: string)
```

## Usage

**Example**

Process JavaScript code.

```ts
import Packmule, { JavaScriptPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.use(new JavaScriptPack());
return packmule.generate();
```
