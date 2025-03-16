import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'und3rd0gz',
  description: 'Powerful and free AI utilities for entertainment and predictions',

  theme: defaultTheme({
    logo: '/images/favicon.svg',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' },
    ],
    sidebar: {
      '/docs': [
        {
          text: 'Docs',
          collapsible: false,
          children: [
            '/docs/',
            '/docs/products',
            '/docs/research-meme',
            '/docs/tech-meme'
          ],
        },
      ],
    }
  }),

  bundler: viteBundler(),
})