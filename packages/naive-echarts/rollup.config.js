import path from 'node:path'
import { readFileSync } from 'node:fs'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import vue from 'rollup-plugin-vue'
import { babel } from '@rollup/plugin-babel'

const packageJson = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url)),
)

const options = [
  {
    input: 'src/index.js',
    plugins: [
      resolve(),
      commonjs(),
      vue({ css: false }),
      postcss({
        plugins: [autoprefixer(), cssnano()],
        extract: path.resolve('dist/style.css'),
      }),
      // `es6+ => es6` for vuepress
      babel({ babelHelpers: 'bundled', extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'] }),
    ],
    external: ['vue', 'echarts/core'],
    output: [
      {
        file: packageJson.module,
        format: 'es',
        sourcemap: true,
      },
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
    ],
  },
]

export default options
