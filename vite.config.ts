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
	envPrefix: 'BREADS_',
	server: {
		host: true,
	},
});
