# ServiceWorker Pack

> Configure simple service-worker generation.

## Setup

```bash
npm install --save-dev @packmule/service-worker-pack
```

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
packmule.add(new ServiceWorkerPack());
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
