# Watch Pack

> Packmule pack to bundle file watching.

## Setup

```bash
npm install --save-dev @packmule/watch-pack
```

## API

```ts
WatchPack()
    .exclude(glob: string);
```

## Usage

**Example**

```ts
import Packmule from '@packmule/core';
import WatchPack from '@packmule/watch-pack';

const packmule = new Packmule();
packmule.register(new WatchPack());
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
