export default {
    files: [
        'packages/*/test/**/*.ts',
    ],
    extensions: {
        ts: 'module',
    },
    nodeArguments: [
        '--loader=esbuild-node-loader',
    ],
}
