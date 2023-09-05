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
                login: resolve(__dirname, 'src/pages/login/login.html'),
                register: resolve(__dirname, 'src/pages/registration/registration.html'),
                error_404: resolve(__dirname, 'src/pages/errors/error_404/error_404.html'),
                error_500: resolve(__dirname, 'src/pages/errors/error_500/error_500.html'),
                chats: resolve(__dirname, 'src/pages/chats/chats.html'),
                settings: resolve(__dirname, 'src/pages/settings/settings.html'),
            },
        },
        outDir: 'dist',
        emptyOutDir: true,
        base: '/',
        minify: 'terser',
    },
});
