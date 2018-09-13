# Output Pack
> Define the output options for Webpack.

## API
```ts
OutputPack(path: string, web: string = '/')
```

## Usage

**Example**

Configure the output options for the bundle.

```ts
import Packmule, { OutputPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.use(new OutputPack('public/', '/'));
return packmule.generate();
```
