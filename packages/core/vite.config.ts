// vite.config.ts (shared template for all packages)
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig(({ mode }) => {
    return {
        build: {
            lib: {
                entry: path.resolve(__dirname, 'src/index.ts'),
                name: 'RandomFixturesModule',
                formats: ['es'],
                fileName: () => 'index.js'
            },
            outDir: 'dist',
            emptyOutDir: true,
            rollupOptions: {
                external: [
                    '@random-fixtures/core',
                    '@random-fixtures/ancient',
                    '@random-fixtures/address',
                    '@random-fixtures/chuck-norris'
                ]
            }
        },
        resolve: {
            alias: {
                '@random-fixtures/core': path.resolve(__dirname, '../core/src'),
                '@random-fixtures/ancient': path.resolve(__dirname, '../ancient/src'),
                '@random-fixtures/address': path.resolve(__dirname, '../address/src'),
                '@random-fixtures/chuck-norris': path.resolve(__dirname, '../chuck-norris/src')
            }
        },
        plugins: [dts()]
    };
});
