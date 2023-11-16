import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';
import { resolve } from 'path';

const options = { pretty: true };
const locals_pug = { pagesUrl: './pages/' };

export default defineConfig({
    plugins: [pugPlugin(options, locals_pug)],
    server: { port: 3000 },
    optimizeDeps: {},
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'src/pages/login.html'),
                register: resolve(__dirname, 'src/pages/registration.html'),
                error_404: resolve(__dirname, 'src/pages/error_404.html'),
                error_500: resolve(__dirname, 'src/pages/error_500.html'),
                chats: resolve(__dirname, 'src/pages/chats.html'),
                settings: resolve(__dirname, 'src/pages/settings.html'),
            },
        },
        outDir: 'dist',
        emptyOutDir: true,
        base: '/',
        minify: 'terser',
    },
});
