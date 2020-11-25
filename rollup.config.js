import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import minify from 'rollup-plugin-babel-minify';
import banner from 'rollup-plugin-banner'
import pkg from './package.json';

export default [{
  input: 'lib/index.js',
  output: {
    name: "_pix",
    file: pkg.browser,
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    minify({ comments: false }),
    banner('<%= pkg.name %>\nv<%= pkg.version %>\nby <%= pkg.author %>')
  ],
}];
