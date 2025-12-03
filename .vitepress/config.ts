import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AppleBlox',
  description: 'Lightweight and fast Roblox launcher for macOS',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'AppleBlox Documentation' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
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
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Quick Start', link: '/guide/quick-start' },
            { text: 'Installation', link: '/guide/installation' }
          ]
        },
        {
          text: 'User Interface',
          items: [
            { text: 'Overview', link: '/guide/user-interface' },
            { text: 'Sidebar Navigation', link: '/guide/sidebar' }
          ]
        },
        {
          text: 'Features',
          items: [
            { text: 'Integrations', link: '/guide/features/integrations' },
            { text: 'Roblox Behavior', link: '/guide/features/behavior' },
            { text: 'Engine Settings', link: '/guide/features/engine' },
            { text: 'Appearance', link: '/guide/features/appearance' },
            { text: 'System Tools', link: '/guide/features/misc' },
            { text: 'Information', link: '/guide/features/info' }
          ]
        },
        {
          text: 'Advanced',
          items: [
            { text: 'FastFlags Deep Dive', link: '/guide/advanced/fastflags' },
            { text: 'Multi-Instance Setup', link: '/guide/advanced/multi-instance' },
            { text: 'Custom Themes', link: '/guide/advanced/themes' }
          ]
        },
        {
          text: 'Help',
          items: [
            { text: 'Troubleshooting', link: '/guide/troubleshooting' },
            { text: 'FAQ', link: '/guide/faq' }
          ]
        }
      ],
      '/mods/': [
        {
          text: 'Mods Guide',
          items: [
            { text: 'Introduction', link: '/mods/introduction' },
            { text: 'Finding Mods', link: '/mods/finding' },
            { text: 'Installing Mods', link: '/mods/installing' },
            { text: 'Managing Mods', link: '/mods/managing' },
            { text: 'Creating Mods', link: '/mods/creating' },
            { text: 'Troubleshooting', link: '/mods/troubleshooting' }
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Technical Reference',
          items: [
            { text: 'File Locations', link: '/reference/file-locations' },
            { text: 'Settings Reference', link: '/reference/settings' },
            { text: 'Command Line Options', link: '/reference/cli' }
          ]
        }
      ],
      '/community/': [
        {
          text: 'Community',
          items: [
            { text: 'Credits', link: '/community/credits' },
            { text: 'Contributing', link: '/community/contributing' },
            { text: 'Resources', link: '/community/resources' }
          ]
        }
      ]
    },
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
  }
})
