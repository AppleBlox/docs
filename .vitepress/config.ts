import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AppleBlox',
  description: 'Lightweight and fast Roblox launcher for macOS',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#f43f5e' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'AppleBlox Documentation' }],
    ['meta', { name: 'og:image', content: '/appleblox.png' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Mods', link: '/mods/introduction' },
      { text: 'Reference', link: '/reference/file-locations' },
      {
        text: 'v0.9.0',
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'Contributing', link: '/community/contributing' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'FAQ', link: '/guide/faq' }
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Discord Integration', link: '/guide/features/integrations' },
          { text: 'Roblox Behavior', link: '/guide/features/behavior' },
          { text: 'Engine & Graphics', link: '/guide/features/engine' },
          { text: 'Appearance', link: '/guide/features/appearance' }
        ]
      },
      {
        text: 'Mods',
        items: [
          { text: 'Introduction', link: '/mods/introduction' },
          { text: 'Installing Mods', link: '/mods/installing' },
          { text: 'Creating Mods', link: '/mods/creating' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'File Locations', link: '/reference/file-locations' },
          { text: 'Settings', link: '/reference/settings' }
        ]
      },
      {
        text: 'Community',
        items: [
          { text: 'Credits', link: '/community/credits' },
          { text: 'Contributing', link: '/community/contributing' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AppleBlox/appleblox' },
      { icon: 'discord', link: 'https://appleblox.com/discord' }
    ],
    footer: {
      message: 'Released under the GPL-3.0 License.',
      copyright: 'Copyright © 2024 AppleBlox Contributors'
    },
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/AppleBlox/appleblox/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  },
  srcExclude: ['**/DOCUMENTATION.md'],
  ignoreDeadLinks: true
})
