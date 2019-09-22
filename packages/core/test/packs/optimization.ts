import test from 'ava';
import Pack from '../../src/packs/optimization';

test('pack instantiation', (t) => {
    const pack = new Pack();

    t.truthy(pack);
});

test('default split chunk options are set by default', (t) => {
    const pack = new Pack();
    const configuration = pack.generate();

    t.truthy(configuration.optimization!.splitChunks);
});
