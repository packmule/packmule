export default {
    nonSemVerExperiments: {
        configurableModuleFormat: true,
    },
    nodeArguments: [
        '--loader=ts-node/esm',
        '--experimental-specifier-resolution=node',
    ],
    extensions: {
        ts: 'module',
    },
    files: [
        'packages/*/test/**/*.ts',
    ],
}
