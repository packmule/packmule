# Entry Pack

> Define an [entry point](https://webpack.js.org/configuration/entry-context/#entry) for webpack.

`Entry Pack` configures the actual [entry point](https://webpack.js.org/concepts/#entry)
for the bundle and can be used multiple times to define multiple entry points.

## Setup

```bash
npm install --save-dev @packmule/entry-pack
```

## API

```ts
EntryPack(path: string, name?: string)
```

## Options

-   **root** - _Used to build an absolute path of the configured entry file path._

## Usage

**Example**

Set single entry point and generate an `app` bundle.

```ts
import Packmule from '@packmule/core';
import EntryPack from '@packmule/entry-pack';

const packmule = new Packmule();
packmule.register(new EntryPack('assets/entry.ts', 'app'));
return packmule.generate();
```

**Example**

Set multiple entrypoints and generate a `one` and a `two` bundle.

```ts
import Packmule from '@packmule/core';
import EntryPack from '@packmule/entry-pack';

const packmule = new Packmule();
packmule.register(new EntryPack('assets/one.ts'));
packmule.register(new EntryPack('assets/two.ts'));
return packmule.generate();
```
