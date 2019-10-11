# Change Log

## [next]

### added
* Add `hints` configuration options.
* Add minimum compression ratio `option` to the compression pack.
* Add `edition` packages to ease setup of basic packmule projects.
* Add `fix` option for linter configuration in the sass, javascript and typescript packs.
* Add `resolve-url-loader` in the sass pack to resolve relative URLs.
* Add `cache` method to the service-worker pack to configure runtime caching.
* Add `modules` method to the sass pack to be able to use CSS modules.
* Add `browserstack` support to the `server` utility.
* Add `svelte` pack.
* Add `environment` pack.
* Add `less` pack.
* Add `watch` pack.
* Add `cache` pack.

### changed
* Split packmule `options` into `options` and `hints`.
* Change the package namespace from `@pixelart` to `@packmule`.
* Convert project to a monorepo structure and move packs to separate packages.
* Accept multiple configurations on the development server.
* Disable verbose output on the `clean-webpack-plugin` used by the clean pack.
* Disable the overlay on the `HMR` client by default.
* Disable the default `vendors` chunk configuration on webpack.
* Remove `watch` configuration from the core and introduce a separate `watch` pack.

### removed
* Remove constructor on the clean pack.

### fixed
* Prepend polyfills to the entry array in the HMR pack to work properly.
* Disable `webpackbar` when webpack is run with the `--json` option.

### misc
* Add tests.
* Configure nightly builds.

## [1.0.0]

* Initial release.

[next]: https://github.com/packmule/packmule/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/packmule/packmule/releases/tag/v1.0.0

