# Development Server

> Simple development server.

`packmule` comes with a development-server which wraps the `browser-sync` server
and uses the `webpack-dev-middleware` and `webpack-hot-middleware` to watch and
reload the web application on demand.

## Setup

```bash
npm install --save-dev @packmule/server
```

## API

```ts
Server(
  webpackConfiguration: webpack.Configuration;
  browsersyncOptions: browsersync.Options | browsersync.Options[];
)
.launch()
```

## Usage

**Example**

```ts
import Server from '@packmule/server';
import configuration from './webpack.config.ts';
import options from './.browsersyncrc.json';

const server = new Server(
    configuration({
        development: true,
        server: true,
    }),
    options,
);

server.launch();
```

`options` can be a `browser-sync` configuration object or an
array of configuration objects, to launch multiple servers.

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

[<img src="https://www.pixelart.at/fileadmin/images/logo-new/logo.svg" width="150">](https://www.pixelart.at/)
