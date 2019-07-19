import test from 'ava';
import Packmule from '../src/';

test('packmule instantiation', (t) => {
    const packmule = new Packmule();

    t.truthy(packmule);
});

test('directory context is set', (t) => {
    const packmule = new Packmule();
    const configuration = packmule.generate();

    t.assert(typeof configuration.context === 'string');
});

test('webpack watch is false by default', (t) => {
    const packmule = new Packmule();
    const configuration = packmule.generate();

    t.false(configuration.watch);
});

test('webpack cache is false by default', (t) => {
    const packmule = new Packmule();
    const configuration = packmule.generate();

    t.false(configuration.cache);
});

test('default webpack mode is none', (t) => {
    const packmule = new Packmule();
    const configuration = packmule.generate();

    t.assert(configuration.mode === 'none');
});

test('default resolvable file extensions are set', (t) => {
    const packmule = new Packmule();
    const configuration = packmule.generate();

    t.assert(configuration.resolve!.extensions!.includes('.js'));
    t.assert(configuration.resolve!.extensions!.includes('.json'));
});
