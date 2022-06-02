export default {
    files: ['test/**/*.ts'],
    extensions: {
        ts: 'module',
    },
    nodeArguments: ['--no-warnings', '--loader=@esbuild-kit/esm-loader'],
    timeout: '30s',
};
