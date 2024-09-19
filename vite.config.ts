import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    react({
      plugins: [
        [
          '@swc/plugin-emotion',
          {
            labelFormat: '[filename]',
          },
        ],
      ],
    }),
    svgr({
      svgrOptions: {
        memo: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
  },
  envPrefix: 'BREADS_',
});
