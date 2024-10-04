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
					items: [
						{ slug: 'guides/example' },
						{ slug: 'guides/asset-types' },
						{ slug: 'whats-etf-lemon8' },
						{ slug: 'div-etf-101-reddit' },
						{ slug: 'div-etf-101-reddit-lite' },
						{ slug: 'dime' },
						{ slug: 'innovestx' },
					  ],
					},
				{
					label: 'Gold and Bitcoin',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
