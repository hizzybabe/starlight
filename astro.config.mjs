import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ETF Wiki',
			social: {
				github: 'https://github.com/hizzybabe/starlight',
			},
			sidebar: [
				{
					label: 'ETF',

						autogenerate: { directory: 'guides' },

				},
				{
					label: 'Gold and Bitcoin',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
