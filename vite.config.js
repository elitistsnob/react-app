import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [react(), svgr()],
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'assets/js/[name]-[hash].js',
                chunkFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: (assetInfo) => {
                    // Check if the asset name matches common font extensions
                    if (/\.(woff2?|ttf|eot|svg)$/.test(assetInfo.name ?? '')) {
                        return 'assets/fonts/[name][extname]'; // Custom path for fonts
                    }

                    // Default behavior for other assets like CSS or images
                    if (/\.css$/.test(assetInfo.name ?? '')) {
                        return 'assets/css/[name]-[hash][extname]';
                    }

                    return 'assets/[name]-[hash][extname]';
                },
            },
        },
    },
});
