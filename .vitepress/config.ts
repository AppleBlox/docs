import { defineConfig } from "vitepress";

export default defineConfig({
  title: "AppleBlox",
  description: "Documentation for AppleBlox, the macOS Roblox launcher",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["meta", { name: "theme-color", content: "#f43f5e" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "AppleBlox Documentation" }],
    ["meta", { name: "og:image", content: "/appleblox.png" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "AppleBlox Docs",
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Reference", link: "/reference/file-locations" },
      { text: "Community", link: "/community/contributing" },
      {
        text: "Links",
        items: [
          { text: "Website", link: "https://appleblox.com" },
          {
            text: "Download",
            link: "https://github.com/AppleBlox/appleblox/releases",
          },
          { text: "Discord", link: "https://appleblox.com/discord" },
        ],
      },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "Homebrew", link: "/guide/homebrew" },
          { text: "Quickplay", link: "/guide/quickplay" },
          { text: "Account & Region", link: "/guide/account" },
          { text: "Launching Roblox", link: "/guide/launching" },
          { text: "Mods", link: "/guide/mods" },
          { text: "FastFlags", link: "/guide/fastflags" },
          { text: "Integrations", link: "/guide/integrations" },
          { text: "Multi-Instance", link: "/guide/multi-instance" },
          { text: "Appearance", link: "/guide/appearance" },
          { text: "Misc & System", link: "/guide/misc" },
          { text: "FAQ", link: "/guide/faq" },
        ],
      },
      {
        text: "Reference",
        items: [{ text: "File Locations", link: "/reference/file-locations" }],
      },
      {
        text: "Community",
        items: [
          { text: "Contributing", link: "/community/contributing" },
          { text: "Credits", link: "/community/credits" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/AppleBlox/appleblox" },
      { icon: "discord", link: "https://appleblox.com/discord" },
    ],
    footer: {
      message: "Released under the GPL-3.0 License.",
      copyright: "Copyright © 2024 AppleBlox Contributors",
    },
    search: {
      provider: "local",
    },
    editLink: {
      pattern: "https://github.com/AppleBlox/docs/edit/main/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
    lineNumbers: true,
  },
  srcExclude: ["**/DOCS.md", "**/DOCUMENTATION.md"],
  ignoreDeadLinks: true,
});
