import { defineConfig } from 'vitest/config';
import { sharedConfig } from './vite.config.base';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        coverage: {
            reporter: ['text', 'html']
        }
    },
    ...sharedConfig
});
