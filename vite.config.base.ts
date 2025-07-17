import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

const alias = {
    '@random-fixtures/core': path.resolve(__dirname, 'packages/core/src'),
    '@random-fixtures/ancient': path.resolve(__dirname, 'packages/ancient/src'),
    '@random-fixtures/address': path.resolve(__dirname, 'packages/address/src'),
    '@random-fixtures/chuck-norris': path.resolve(__dirname, 'packages/chuck-norris/src')
};

export const sharedConfig = {
    resolve: { alias },
    plugins: [dts()],
};

export function createViteConfig(entryFile: string) {
    return defineConfig({
        ...sharedConfig,
        build: {
            lib: {
                entry: path.resolve(__dirname, entryFile),
                name: 'RandomFixturesModule',
                formats: ['es'],
                fileName: () => 'index.js'
            },
            outDir: 'dist',
            emptyOutDir: true,
            rollupOptions: {
                external: Object.keys(alias)
            }
        }
    });
}
