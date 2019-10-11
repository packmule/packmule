import test from 'ava';
import Pack from '../../src/packs/optimization';

test('pack instantiation', (t) => {
    const pack = new Pack();

    t.truthy(pack);
});
