# Change Log

## [next]

### added
* Add `fix` option for linter configuration in the sass, javascript and typescript packs.
* Add `resolve-url-loader` in the sass pack to resolve relative URLs.
* Add `cache` method to the service-worker pack to configure runtime caching.
* Add `modules` method to the sass pack to be able to use CSS modules.
* Add `svelte` pack.

### changed
* Change the package namespace from `@pixelart` to `@packmule`.
* Convert project to a monorepo structure and move packs to separate packages.
* Accept multiple configurations on the development server.
* Disable verbose output on the `clean-webpack-plugin` used by the clean pack.
* Disable the overlay on the `HMR` client by default.
* Disable the default `vendors` chunk configuration on webpack.

### removed
* Remove constructor on the clean pack.

### fixed
* Disable `webpackbar` when webpack is run with the `--json` option.

## [1.0.0]

* Initial release.

[next]: https://github.com/packmule/packmule/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/packmule/packmule/releases/tag/v1.0.0

