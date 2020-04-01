import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'index.cjs',
    output: {
        file: 'index.es.js',
        format: 'esm'
    },
    plugins: [commonjs()]
};
