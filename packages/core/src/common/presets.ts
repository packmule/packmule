import Hints from './hints.js';

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
    },
};

export default presets;
