# Chunk Pack

> Split code into chunks using the [split-chunks plugin](https://webpack.js.org/plugins/split-chunks-plugin/).

## Setup

```bash
npm install --save-dev @packmule/chunk-pack
```

## API

`ChunkPack(name: string)`

## Usage

**Example**

Generate a chunk file for all node dependencies.

```ts
import Packmule from '@packmule/core';
import ChunkPack from '@packmule/chunk-pack';

const packmule = new Packmule();
packmule.register(new ChunkPack('vendor').include('**/node_modules/**'));
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
