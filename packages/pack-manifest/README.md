# Manifest Pack
> Generate a [web app manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest).

## Setup
```bash
npm install --save-dev @packmule/manifest-pack
```

## API
```ts
ManifestPack(options: ManifestPlugin.ManifestOptions)
```

## Usage

**Example**

Generate a basic web app manifest using the [`webpack-pwa-manifest`](https://www.npmjs.com/package/webpack-pwa-manifest) plugin internally.

```ts
import Packmule from '@packmule/core';
import ManifestPack from '@packmule/manifest-pack';

const packmule = new Packmule();
packmule.register(new ManifestPack({
    name: 'Web Application',
    short_name: 'App',
}));
return packmule.generate();
```
