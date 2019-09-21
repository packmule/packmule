# Log Pack
> Configure sane logging for `webpack`.

## API
```ts
LogPack()
```

## Usage

**Example**

Set sane logging settings for webpack, printing only the most useful information.

```ts
import Packmule, { Logpack } from '@packmule/packmule';

const packmule = new Packmule();
packmule.register(new Logpack());
return packmule.generate();
```
