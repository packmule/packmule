import test from 'ava';
import webpack from 'webpack';
import BarPlugin from 'webpackbar';
import Pack from '../../src/packs/base';

test('pack instantiation', (t) => {
    const pack = new Pack();

    t.truthy(pack);
});

test('directory context is not set by default', (t) => {
    const pack = new Pack();
    const configuration = pack.generate({});

    t.falsy(configuration.context);
});

test('webpack cache is false by default', (t) => {
    const pack = new Pack();
    const configuration = pack.generate({});

    t.falsy(configuration.cache);
});

test('default webpack mode is not set by default', (t) => {
    const pack = new Pack();
    const configuration = pack.generate({});

    t.falsy(configuration.mode);
});

test('resolvable file extensions are set by default', (t) => {
    const pack = new Pack();
    const configuration = pack.generate({});

    t.assert(configuration.resolve!.extensions!.includes('.js'));
    t.assert(configuration.resolve!.extensions!.includes('.json'));
});

test('webpackbar plugin is enabled by default', (t) => {
    const pack = new Pack();
    const configuration = pack.generate({});

    const result = configuration.plugins!.some((plugin) => plugin instanceof BarPlugin);

    t.true(result);
});

test('webpackbar plugin is disabled for json output', (t) => {
    process.argv.push('--json');

    const pack = new Pack();
    const configuration = pack.generate({});

    const result = configuration.plugins!.some((plugin) => plugin instanceof BarPlugin);

    t.false(result);
});

test('hashed module plugin is set for the optimize option', (t) => {
    const pack = new Pack();
    const configuration = pack.generate({
        optimize: true,
    });

    const result = configuration.plugins!.some((plugin) => plugin instanceof webpack.HashedModuleIdsPlugin);

    t.true(result);
});
