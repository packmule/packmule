export default {
    files: ['test/**/*.ts'],
    extensions: {
        ts: 'module',
    },
    nodeArguments: ['--loader=@esbuild-kit/esm-loader'],
    timeout: '30s',
};
