# Notify Pack
> Enable desktop notifications for build messages.

## API
```ts
NotifyPack()
```

## Usage

**Example**

Enable desktop notifications.

```ts
import Packmule, { NotifyPack } from '@pixelart/packmule';

const packmule = new Packmule();

if (env.development && env.server) {
    packmule.register(new NotifyPack());
}

return packmule.generate();
```
