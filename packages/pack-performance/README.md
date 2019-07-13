# Performance Pack

> Configure [entry size](https://webpack.js.org/configuration/performance/#performance-maxentrypointsize) and [asset sizes](https://webpack.js.org/configuration/performance/#performance-maxassetsize).

## Setup

```bash
npm install --save-dev @packmule/performance-pack
```

## API

```ts
PerformancePack({
   entrySize: number;
   assetSize: number;
})
```

## Usage

**Example**

Configure entry and asset sizes.

```ts
import Packmule from '@packmule/core';
import PerformancePack from '@packmule/performance-pack';

const packmule = new Packmule();

packmule.register(
    new PerformancePack({
        entrySize: 256000,
        assetSize: 102400,
    }),
);

return packmule.generate();
```
