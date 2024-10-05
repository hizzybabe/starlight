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
            { slug: 'guides/whats-etf-lemon8' },
            { slug: 'guides/div-etf-101-reddit' },
            { slug: 'guides/div-etf-101-reddit-lite' },
            { slug: 'guides/dime' },
            { slug: 'guides/innovestx' },
          ],
        },
        {
          label: 'Gold and Bitcoin',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@assets': '/src/assets',  // Add this line
      },
    },
  },
});
