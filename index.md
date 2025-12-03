---
layout: home

hero:
  name: "AppleBlox"
  text: "Roblox Launcher for macOS"
  tagline: Lightweight, fast, and feature-rich Roblox enhancement for macOS
  image:
    src: /logo.svg
    alt: AppleBlox
  actions:
    - theme: brand
      text: Get Started
      link: /guide/quick-start
    - theme: alt
      text: View on GitHub
      link: https://github.com/AppleBlox/appleblox
    - theme: alt
      text: Join Discord
      link: https://appleblox.com/discord

features:
  - icon: 🎨
    title: Custom Mods
    details: Install texture packs and UI modifications to personalize your Roblox experience
  - icon: 🖼️
    title: Icon Customization
    details: Change your app icon with built-in library or custom .icns files
  - icon: 💬
    title: Discord Rich Presence
    details: Show your Roblox activity on Discord with real-time game information
  - icon: ⚡
    title: Multi-Instance Support
    details: Run multiple Roblox instances simultaneously for multi-accounting or testing
  - icon: 🔧
    title: FastFlags Editor
    details: Advanced performance and graphics configuration through Roblox internal flags
  - icon: 🎭
    title: Custom Themes
    details: Personalize the AppleBlox UI with custom CSS themes
  - icon: 📊
    title: Performance Options
    details: Graphics API selection, FPS unlock, and quality control for optimal performance
  - icon: 🔄
    title: Background Updates
    details: Automatically keep Roblox up-to-date without manual intervention
---

## Quick Links

<div class="quick-links">
  <a href="https://github.com/AppleBlox/appleblox/releases/latest" target="_blank" rel="noopener">📥 Download Latest Release</a>
  <a href="https://nightly.link/AppleBlox/appleblox/workflows/build/main" target="_blank" rel="noopener">🌙 Nightly Builds</a>
  <a href="https://gamebanana.com/games/2879" target="_blank" rel="noopener">🎨 GameBanana Mods</a>
</div>

## System Requirements

- **macOS** 11 (Big Sur) or later
- **4GB RAM** minimum
- **2GB** free disk space
- **Apple Silicon** (M1/M2/M3/M4) or **Intel** processors

## What's New in v0.9.0

- Icon manager with 3D preview effects
- Mod manager with visual grid and previews
- Bundled icon system
- Improved download progress tracking
- Enhanced mod preview system
- Custom font support

<style>
.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.quick-links a {
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid var(--vp-c-divider);
}

.quick-links a:hover {
  background: var(--vp-c-bg-mute);
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
