# Manifest Pack
> Generate a [web app manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest).

## API
```ts
ManifestPack(options: ManifestPlugin.ManifestOptions)
```

## Usage

**Example**

Generate a basic web app manifest.

```ts
import Packmule, { ManifestPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.register(new ManifestPack({
    name: 'Web Application',
    short_name: 'App',
}));
return packmule.generate();
```
