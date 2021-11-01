import test from 'ava';
import webpack from 'webpack';
import DotenvPlugin from 'dotenv-webpack';
import Pack from '../src/index.js';

test('pack instantiation', (t) => {
    const pack = new Pack();

    t.truthy(pack);
});

test('plugins are set by default', (t) => {
    const pack = new Pack();
    const configuration = pack.generate({});

    [
        configuration.plugins!.some((plugin) => plugin instanceof DotenvPlugin),
        configuration.plugins!.some((plugin) => plugin instanceof webpack.EnvironmentPlugin),
    ].forEach((result) => t.true(result));
});
