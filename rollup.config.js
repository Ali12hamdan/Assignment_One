// import typescript from '@rollup/plugin-typescript';
import typescript  from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';


export default {

    input: './ts/main.ts',
    output: { file: './dist/bundle.js' },

  plugins: [
    
    typescript(), nodeResolve({ browser: true }),
    terser(),],
};