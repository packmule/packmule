export default {
    extensions: [
        'ts',
    ],
    require: [
        'ts-node/register/transpile-only',
    ],
    files: [
        'packages/*/test/**',
    ],
}
