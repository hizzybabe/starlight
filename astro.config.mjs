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
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'ETF 101 to Pro Wiki', slug: 'guides/example' },
						{ label: 'ประเภทของสินทรัพย์และการลงทุน', slug: 'guides/asset-types' },
						{ label: 'U.S. Dividend Investing Handbook', slug: 'guides/div-etf-101-reddit' },
						{ label: '(LITE) U.S. Dividend Investing Handbook', slug: 'guides/div-etf-101-reddit-lite' },
						{ label: 'ลงทุน U.S. ETF ผ่าน Dime!', slug: 'guides/dime' },
						{ label: 'ลงทุน U.S. ETF ผ่าน InnovestX', slug: 'guides/innovestx' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
