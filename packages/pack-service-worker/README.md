# ServiceWorker Pack
> Configure simple service-worker generation.

## API
```ts
ServiceWorkerPack()
    .include(glob: string)
    .to(path: string)
```

## Usage

**Example**

Generate a simple service-worker and pre-cache common files.

```ts
import Packmule from '@packmule/core';
import ServiceWorkerPack from '@packmule/service-worker-pack';

const packmule = new Packmule();
packmule.register(new ServiceWorkerPack());
return packmule.generate();
```
