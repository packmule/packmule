# Chunk Pack
> Wraps the Webpack chunk-plugin and splits code into chunks.

## API
`ChunkPack(name: string, runtime: boolean = false)`

## Usage

**Example**

Generates the webpack manifest/bootstrap file.

```ts
import Packmule, { ChunkPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.use(new ChunkPack('manifest', true));
return packmule.generate();
```

**Example**

Generates a chunk file for all node dependencies.

```ts
import Packmule, { ChunkPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.use(new ChunkPack('vendors').include('**/node_modules/**'));
return packmule.generate();
```