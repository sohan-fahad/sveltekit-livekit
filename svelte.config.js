import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$src: 'src'
		}
	},
	preprocess: vitePreprocess({
		style: 'postcss'
	})
};
export default config;
