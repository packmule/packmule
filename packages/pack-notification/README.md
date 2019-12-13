# Notification Pack [![npm-latest]][npm]

> Enable desktop notifications for build messages.

`Notification Pack` uses `webpack-notifier` to
show desktop notification for build errors.

## Overview

-   [Setup](#setup)
-   [API](#api)
-   [Usage](#usage)
-   [License](#license)

## Setup

`Notification Pack` is included in the [`complete`][edition-complete] and [`default`][edition-default] editions.

**Current Release**

```bash
npm install --save-dev @packmule/notification-pack
```

**Nightly Build**

```bash
npm install --save-dev @packmule/notification-pack@nightly
```

## API

```typescript
NotifyPack();
```

### Hints

-   **notify** - _Controls whether the pack is actually enabled or not._

## Usage

**Example**

Enable desktop notifications.

```typescript
import Packmule from '@packmule/core';
import NotificationPack from '@packmule/notifiction-pack';

const packmule = new Packmule();

if (env.server) {
    packmule.add(new NotificationPack());
}

return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)

[packmule-hints]: https://www.npmjs.com/package/@packmule/core#hints
[packmule-api]: https://www.npmjs.com/package/@packmule/core#api
[npm]: https://www.npmjs.com/package/@packmule/notification-pack
[npm-latest]: https://img.shields.io/npm/v/@packmule/notification-pack/latest?color=%230AC2FF&label=release&style=for-the-badge
[edition-default]: https://www.npmjs.com/package/@packmule/default
[edition-complete]: https://www.npmjs.com/package/@packmule/complete
