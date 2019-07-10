# Copy Pack
> Simply copy files.

## Setup
```bash
npm install --save-dev @packmule/copy-pack
```

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
import Packmule from '@packmule/core';
import CopyPack from '@packmule/copy-pack';

const packmule = new Packmule();
packmule.register(new CopyPack().include('**/data/*.json').to('data/'));
return packmule.generate();
```
