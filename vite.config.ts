import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({
			svgrOptions: {
				memo: true,
			},
		}),
	],
	css: {
		preprocessorOptions: {
			less: {
				math: 'always',
				relativeUrls: true,
				javascriptEnabled: true,
			},
		},
		modules: {
			generateScopedName: '[hash:base64:10]',
			hashPrefix: 'breads',
			localsConvention: 'camelCaseOnly',
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
