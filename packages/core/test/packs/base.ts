import test from 'ava';
import Pack from '../../src/packs/base.js';

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
