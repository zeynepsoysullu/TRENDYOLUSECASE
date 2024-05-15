import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [
        resolve(), // Node modüllerini çözümler
        commonjs() // CommonJS modüllerini ES6'ya dönüştürür
    ]
};