# Entry Pack
> Define an [entry point](https://webpack.js.org/configuration/entry-context/#entry) for webpack.

The `Entry Pack` configures the actual [entry points](https://webpack.js.org/concepts/#entry)
for the bundle and can be used multiple times to define multiple entry points.

## API
```ts
EntryPack(path: string, name?: string)
```

## Usage

**Example**

Set single entry point and generate an `app` bundle.

```ts
import Packmule, { EntryPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.register(new EntryPack('assets/entry.ts', 'app'));
return packmule.generate();
```

**Example**

Set multiple entrypoints and generate a `one` and a `two` bundle.

```ts
import Packmule, { EntryPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.register(new EntryPack('assets/one.ts'));
packmule.register(new EntryPack('assets/two.ts'));
return packmule.generate();
```
