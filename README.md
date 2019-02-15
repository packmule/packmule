# packmule 📦 🐴
> Stubborn configuration generator for webpack.

`packmule` is an opinionated, plugin-based configuration-generator for [`webpack`](https://webpack.js.org/).

## Usage

```ts
import Packmule, {
    EntryPack,
    OutputPack,
    SassPack,
    TypeScriptPack,
    CompressionPack,
} from '@pixelart/packmule';

const packmule = new Packmule(env.mode);
packmule.register(new EntryPack('main.ts'));
packmule.register(new OutputPack('public/', '/'));
packmule.register(new SassPack());
packmule.register(new TypeScriptPack());

if (env.mode === 'production') {
    packmule.register(new CompressionPack());
}

return packmule.generate();
```

[**Documentation**](docs/index.md)

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">
