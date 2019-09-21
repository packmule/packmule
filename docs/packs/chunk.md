# Chunk Pack
> Split code into chunks using the [split-chunks plugin](https://webpack.js.org/plugins/split-chunks-plugin/).

## API
`ChunkPack(name: string)`

## Usage

**Example**

Generate a chunk file for all node dependencies.

```ts
import Packmule, { ChunkPack } from '@packmule/packmule';

const packmule = new Packmule();
packmule.register(new ChunkPack('vendor').include('**/node_modules/**'));
return packmule.generate();
```
