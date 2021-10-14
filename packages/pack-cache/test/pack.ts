import test from 'ava';
import Pack from '../src/index.js';

test('pack instantiation', (t) => {
    const pack = new Pack();

    t.truthy(pack);
});

test('cache is false by default', (t) => {
    const pack = new Pack();
    const configuration = pack.generate({}, {});

    t.false(configuration.cache);
});

test('cache type is filesystem', (t) => {
    const pack = new Pack();
    const configuration = pack.generate(
        {},
        {
            cache: true,
        },
    );

    // @ts-ignore
    t.true(configuration.cache.type === 'filesystem');
});
