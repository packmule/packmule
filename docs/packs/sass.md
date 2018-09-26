# Sass Pack
> Compile Sass to CSS.

Internally the `Sass Pack` uses `PostCSS` to transform code as needed.
To configure `PostCSS` settings in your project, a `.postcssrc.json` file can be used.
`stylelint` is used to lint Sass code, which can be configured via a `stylelint.json` file.

## API
```ts
TypeScriptPack()
    .include(glob: string)
```

## Usage

**Example**

Configure TS to JS transpiling.

```ts
import Packmule, { TypeScriptPack } from '@pixelart/packmule';

const packmule = new Packmule();
packmule.use(new TypeScriptPack());
return packmule.generate();
```

## Configuration
