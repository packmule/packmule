# JavaScript Pack
> Process JS including Babel support.

Internally the `JavaScript Pack` uses `Babel` to transpile the code if needed.
To configure `Babel` settings in your project, a `.babelrc.json` file can be used.

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
