import test from 'ava';
import webpack from 'webpack';
import Pack from '../../src/packs/base';

test('pack instantiation', (t) => {
    const pack = new Pack();

    t.truthy(pack);
});

test('directory context is not set by default', (t) => {
    const pack = new Pack();
    const configuration = pack.generate({}, {});

    t.falsy(configuration.context);
});

test('webpack cache is false by default', (t) => {
    const pack = new Pack();
    const configuration = pack.generate({}, {});

    t.falsy(configuration.cache);
});

test('default webpack mode is not set by default', (t) => {
    const pack = new Pack();
    const configuration = pack.generate({}, {});

    t.falsy(configuration.mode);
});

test('hashed module plugin is set for the optimize option', (t) => {
    const pack = new Pack();
    const configuration = pack.generate(
        {},
        {
            optimize: true,
        },
    );

    const result = configuration.plugins!.some((plugin) => plugin instanceof webpack.HashedModuleIdsPlugin);

    t.true(result);
});
