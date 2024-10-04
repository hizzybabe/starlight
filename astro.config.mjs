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
					items: ['example', 'asset-types', 'whats-etf-lemon8', 'div-etf-101-reddit', 'div-etf-101-reddit-lite', 'dime', 'innovestx'],
					},
				{
					label: 'Gold and Bitcoin',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
