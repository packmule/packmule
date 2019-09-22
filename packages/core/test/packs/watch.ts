import test from 'ava';
import Pack from '../../src/packs/watch';

test('pack instantiation', (t) => {
    const pack = new Pack();

    t.truthy(pack);
});

test('watch is disabled by default', (t) => {
    const pack = new Pack();
    const configuration = pack.generate({}, {});

    t.falsy(configuration.watch);
});
