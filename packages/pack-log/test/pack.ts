import test from 'ava';
import BarPlugin from 'webpackbar';
import Pack from '../src/';

test('webpackbar plugin is enabled by default', (t) => {
    const pack = new Pack();
    const configuration = pack.generate({}, {});

    const result = configuration.plugins!.some((plugin) => plugin instanceof BarPlugin);

    t.true(result);
});

test('webpackbar plugin is disabled for json output', (t) => {
    process.argv.push('--json');

    const pack = new Pack();
    const configuration = pack.generate({}, {});

    const result = configuration.plugins!.some((plugin) => plugin instanceof BarPlugin);

    t.false(result);
});
