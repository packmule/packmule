# Copy Pack
> Simply copies files.

## API
```ts
CopyPack()
    .to(path: string)
    .include(glob: string)
```

## Usage

**Example**

Copy JSON files.

```ts
import Packmule, { CopyPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.use(new CopyPack().to('data/').include('**/data/*.json'));
return packmule.generate();
```
