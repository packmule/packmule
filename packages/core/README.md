# packmule core

> Stubborn configuration generator for Webpack.

## Installation

```sh
npm install --save-dev @packmule/core
```

## API

```ts
Packmule(mode?: 'development' | 'production' | 'none', options?: Options)
    .register(pack: Pack)
    .generate();
```

### Options

Options are shared with and used by packs. Packs can choose which options to use.

| Option       | Type      | Default                   | Description                      |
| ------------ | --------- | ------------------------- | -------------------------------- |
| **mode**     | `string`  | `'none'`                  | Sets the mode for webpack.       |
| **root**     | `string`  | `dir.sync(process.cwd())` | Sets the project root directory. |
| **optimize** | `boolean` | `false`                   | Enables optimization steps.      |
| **extract**  | `boolean` | `false`                   | Enables file extraction.         |
| **notify**   | `boolean` | `false`                   | Enables desktop notifications.   |
| **watch**    | `boolean` | `false`                   | Enables file watching.           |
| **lint**     | `boolean` | `false`                   | Enables code linting.            |
| **fix**      | `boolean` | `false`                   | Enables code fixing.             |
| **debug**    | `boolean` | `false`                   | Enables debugging.               |
| **cache**    | `boolean` | `true`                    | Enables caching.                 |
| **hash**     | `boolean` | `false`                   | Enable filename hashing.         |
