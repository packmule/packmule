# Uglify Pack
> Use a [custom `uglify`](https://webpack.js.org/configuration/optimization/#optimization-minimizer) version for code minification.

## API
```ts
UglifyPack()
```

## Usage

**Example**

Minify `JavaScript` code using `uglify`.

```ts
import Packmule, { UglifyPack } from '@pixelart/packmule';

const packmule = new Packmule();

if (env.production) {
    packmule.register(new UglifyPack());
}

return packmule.generate();
```
