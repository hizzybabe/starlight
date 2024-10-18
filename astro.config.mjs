import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    
    starlight({
      title: 'ETF Wiki',
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
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
            { slug: 'guides/lazy-port' },
          ],
        },
        {
          label: 'Gold and Bitcoin',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
    [tailwind()],
  ],
  vite: {
    resolve: {
      alias: {
        '@assets': '/src/assets',  // Add this line
      },
    },
  },
});
