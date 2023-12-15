import {defineConfig} from 'vite';
// import { resolve } from 'path';
import checker from 'vite-plugin-checker';

export default defineConfig({
  base: './',
  server: {port: 3000},
  plugins: [
    checker({
      typescript: true,
    }),
  ],

  // plugins: [
  //   checker({
  //     typescript: true,
  //   }),
  // ],
  // server: {port: 3000},
  // optimizeDeps: {},
  // base: './',
  //
  // build: {
  //     rollupOptions: {
  //         input: {
  //             main: resolve(__dirname, 'entry.html'),
  //             login: resolve(__dirname, 'src/pages/login.pug'),
  //             register: resolve(__dirname, 'src/pages/registration.pug'),
  //             error_404: resolve(__dirname, 'src/pages/error_404.pug'),
  //             error_500: resolve(__dirname, 'src/pages/error_500.pug'),
  //             chats: resolve(__dirname, 'src/pages/chats.pug'),
  //             settings: resolve(__dirname, 'src/pages/settings.pug'),
  //         },
  //     },
  //     outDir: 'dist',
  //     emptyOutDir: true,
  //     base: '/',
  //     minify: 'terser',
  // },
});
