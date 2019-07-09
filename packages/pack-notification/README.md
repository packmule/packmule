# Notify Pack
> Enable desktop notifications for build messages.

`Notify Pack` uses `webpack-notifier` to
show desktop notification for build errors.

## API
```ts
NotifyPack()
```

## Options
* **notify** - *Controls whether the pack is actually enabled or not.*

## Usage

**Example**

Enable desktop notifications.

```ts
import Packmule from '@packmule/core';
import NotificationPack from '@packmule/notifiction-pack';

const packmule = new Packmule();

if (env.server) {
    packmule.register(new NotificationPack());
}

return packmule.generate();
```
