# Mods Introduction

AppleBlox's mod system lets you customize Roblox's appearance by replacing textures, sounds, and UI elements.

## What Are Mods

Mods (modifications) are custom files that replace Roblox's original assets. You can install darker UI themes, high-definition texture packs, custom sound effects, or complete visual overhauls. All changes are reversible - disable a mod to restore the original files.

The mod system is flexible. Install texture packs to change visuals, UI mods to redesign interfaces, sound packs to replace audio, or themed collections for specific games. Each mod can be enabled or disabled independently.

### Safety and Compatibility

Mods only modify your local Roblox installation. They don't affect game files on Roblox's servers, don't provide gameplay advantages, and don't interfere with anti-cheat systems. Changes are purely cosmetic and only visible to you.

AppleBlox automatically backs up original Roblox files before applying mods. You can restore them with one click if needed. Each mod can be toggled on or off individually for easy troubleshooting.

AppleBlox is compatible with Bloxstrap mods from Windows, giving you access to the existing mod library. Note that some high-resolution texture packs may impact performance. Download mods only from trusted sources like GameBanana.

## How Mods Work

Mods use a directory structure that mirrors Roblox's internal file organization:

**Roblox Resources:**
```
Roblox.app/Contents/Resources/
├── assets/
├── content/
│   ├── fonts/
│   ├── textures/
│   └── sounds/
└── [other directories]
```

**Your Mod Folder:**
```
MyAwesomeMod/
├── assets/
│   └── xbutton_32.png     # Replaces close button
├── content/
│   └── textures/
│       └── ui/
│           └── menu.png   # Replaces menu background
```

### Launch Process

1. **User enables mods** in Mods panel
2. **AppleBlox creates backup** of `Roblox.app/Contents/Resources/`
3. **Backup stored** in `~/Library/Application Support/AppleBlox/cache/mods/Resources/`
4. **Mods are merged** into Roblox's Resources folder
5. **Later mods override** earlier mods if files conflict
6. **Roblox launches** with modified files

### Restoration

When mods are disabled:
1. Current (modded) Resources folder is deleted
2. Original backup is copied back
3. Backup is removed
4. Roblox returns to original state

::: tip Important
Mods are applied **during launch**. Changes require restarting Roblox to take effect.
:::

## Custom Font

AppleBlox includes built-in custom font support:

### How to Use

1. Mods panel > Built-in Modifications
2. Click **"Choose Font File"** button
3. Select your font file (.ttf, .otf, or .ttc)
4. Font is automatically cached and applied
5. Launch Roblox to see changes

### Supported Formats

- TTF (TrueType Font)
- OTF (OpenType Font)
- TTC (TrueType Collection)

### To Remove

- Click the **X** button next to the font picker
- Original Roblox fonts are restored automatically

## Mods Panel Overview

### Built-in Modifications

- **Custom Font** - Replace Roblox's default font with your own

### Custom Mods Settings

**Enable Mods** (default: OFF)
- Master toggle to enable/disable all mods
- When OFF, original Roblox files are used
- When ON, installed mods are applied during launch

**Legacy Resolution** (default: OFF)
- Reduces resolution for mods designed for non-Retina displays
- Some older mods look blurry on high-DPI displays
- Enable if mod textures appear too sharp/small

### Mods Manager

Visual interface for managing installed mods:

- **Grid View** - Each mod shown as a card
- **Preview Images** - Up to 3 images in stacked 3D effect
- **Asset Count** - Number of files in the mod
- **Size** - Total mod folder size in MB
- **Toggle** - Enable/disable individual mods
- **Actions** - Open folder, refresh list

## Getting Started

Ready to customize your Roblox? Here's where to go next:

1. **[Finding Mods](/mods/finding)** - Where to download mods
2. **[Installing Mods](/mods/installing)** - How to install mods
3. **[Managing Mods](/mods/managing)** - Enable, disable, organize
4. **[Creating Mods](/mods/creating)** - Make your own mods
5. **[Troubleshooting](/mods/troubleshooting)** - Fix common issues

## Quick Resources

- **[GameBanana](https://gamebanana.com/games/2879)** - Primary mod repository
- **[AppleBlox Discord](https://appleblox.com/discord)** - Community mods
- **[Bloxstrap Wiki](https://github.com/pizzaboxer/bloxstrap/wiki/Adding-custom-mods)** - Installation guide
