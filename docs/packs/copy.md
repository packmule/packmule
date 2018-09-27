# Copy Pack
> Simply copy files.

## API
```ts
CopyPack()
    .include(glob: string)
    .to(path: string)
```

## Usage

**Example**

Copy JSON files.

```ts
import Packmule, { CopyPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.register(new CopyPack().include('**/data/*.json').to('data/'));
return packmule.generate();
```
