import test from 'ava';
import Pack from '../src/';

test('pack instantiation', (t) => {
    const pack = new Pack();

    t.truthy(pack);
});

test('resolvable file extension is set', (t) => {
    const pack = new Pack();
    const configuration = pack.generate({});

    t.true(configuration.resolve!.extensions!.includes('.less'));
});
