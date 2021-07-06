import { mdsvex } from 'mdsvex';

const extensions = ['.svelte', '.svx'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
  extensions,
  preprocess: [
    mdsvex({
      extensions,
      layout: './src/components/layout.svelte',
    })
  ]
};

export default config;
