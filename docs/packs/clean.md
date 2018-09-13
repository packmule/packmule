# Clean Pack
> Clears a directory prior to building the bundle.

## API
`CleanPack(path: string)`

## Usage

**Example** 

Clears the contents of the `web/static/` directory before building.

```ts
import Packmule, { CleanPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.use(new CleanPack('web/static/'));
return packmule.generate();
```
