# Runtime Pack
> Configure the [`webpack` runtime](https://webpack.js.org/configuration/optimization/#optimization-runtimechunk).

## API
```ts
RuntimePack();
```

## Usage

**Example**

Enables the `webpack` runtime with a custom name.

```ts
import Packmule, { RuntimePack } from '@packmule/packmule';

const packmule = new Packmule();
packmule.register(new RuntimePack('bootstrap'));
return packmule.generate();
```
