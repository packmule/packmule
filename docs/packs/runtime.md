# Runtime Pack
> Configures the [webpack runtime](https://webpack.js.org/configuration/optimization/#optimization-runtimechunk).

## API
```ts
RuntimePack('runtime');
```

## Usage

**Example**

Enables the webpack runtime with a custom name.

```ts
import Packmule, { RuntimePack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.use(new RuntimePack('bootstrap'));
return packmule.generate();
```