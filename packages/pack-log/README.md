# Log Pack
> Configure sane logging for `webpack`.

## Setup
```bash
npm install --save-dev @packmule/log-pack
```

## API
```ts
LogPack()
```

## Usage

**Example**

Set sane logging settings for webpack, printing only the most useful information.

```ts
import Packmule from '@packmule/core';
import LogPack from '@packmule/log-pack';

const packmule = new Packmule();
packmule.register(new LogPack());
return packmule.generate();
```
