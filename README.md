# Packmule 📦 🐴
> Stubborn configuration generator for webpack.

`Packmule` is an opinionated, plugin-based configuration-generator for [`webpack`](https://webpack.js.org/).

## Usage

```ts
import Packmule, {
    EntryPack,
    OutputPack,
    SassPack,
    TypeScriptPack,
    CompressionPack,
} from '@packmule/packmule';

const packmule = new Packmule();
packmule.register(new EntryPack('main.ts'));
packmule.register(new OutputPack('public/', '/'));
packmule.register(new SassPack());
packmule.register(new TypeScriptPack());

if (env.production) {
    packmule.register(new CompressionPack());
}

return packmule.generate();
```

[**Documentation**](docs/index.md)

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">
