# Analyzer Pack

> Analyze the generated bundle size.

## Setup

```bash
npm install --save-dev @packmule/analyzer-pack
```

## API

`AnalyzerPack()`

## Usage

**Example**

```ts
import Packmule from '@packmule/core';
import AssetsPack from '@packmule/analyzer-pack';

const packmule = new Packmule();
packmule.register(new AnalyzerPack());
return packmule.generate();
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
