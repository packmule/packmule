import Hints from './hints';

const presets: {
    [index: string]: Hints;
} = {
    none: {
        optimize: false,
        extract: false,
        notify: false,
        lint: false,
        fix: false,
        map: false,
        cache: false,
        hash: false,
        watch: false,
        target: undefined,
    },
    production: {
        optimize: true,
        extract: true,
        notify: false,
        lint: false,
        fix: false,
        map: false,
        cache: true,
        hash: true,
        watch: false,
        target: 'production',
    },
    development: {
        optimize: false,
        extract: false,
        notify: true,
        lint: true,
        fix: true,
        map: true,
        cache: true,
        hash: false,
        watch: false,
        target: 'development',
    },
};

export default presets;
