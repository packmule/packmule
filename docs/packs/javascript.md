# JavaScript Pack
> Transpile JavaScript using Babel.

Internally the `JavaScript Pack` uses `Babel` to transpile the code if needed.
To configure `Babel` settings in your project, a `.babelrc.json` file can be used.

## API
```ts
JavaScriptPack()
    .include(glob: string)
```

## Options
* **cache** - *Controls cache utilization of the `babel-loader`.*

## Usage

**Example**

Process JavaScript code.

```ts
import Packmule, { JavaScriptPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.register(new JavaScriptPack());
return packmule.generate();
```
