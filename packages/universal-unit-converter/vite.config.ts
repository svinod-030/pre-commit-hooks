import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'universal-unit-converter',
            fileName: (format) => `index.${format}.js`,
            formats: ['es', 'cjs', 'umd'],
        }
    },
    plugins: [dts()],
});