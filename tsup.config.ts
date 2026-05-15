import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [ 'src/index.ts' ],
  format: ['esm'],
  dts: {
    compilerOptions: {
      ignoreDeprecations: '6.0',
    },
  },
  outExtension({ format }) {
    return format === 'esm' ? { js: '.mjs' } : { js: '.cjs' };
  },
  splitting: false,
  sourcemap: true,
  clean: true,
})