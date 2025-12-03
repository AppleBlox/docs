# Mods Introduction

Comprehensive guide to installing, managing, and creating custom Roblox modifications.

## What are Mods?

Mods (modifications) are custom files that replace Roblox's original textures, sounds, and UI elements. They allow you to:

- **Customize Visuals** - Change textures, icons, UI elements
- **Modify Sounds** - Replace audio files with custom sounds
- **Enhance UI** - Redesign menus, buttons, and interfaces
- **Theme Games** - Apply texture packs to specific games

### Key Points

- ✅ Completely reversible - original files are backed up
- ✅ Easy to enable/disable individual mods
- ✅ No game files are modified - only local Roblox app
- ✅ Compatible with Bloxstrap mods
- ⚠️ Some mods may affect game performance
- ⚠️ Use trusted sources only

## How Mods Work

### File Structure Mirroring

Mods use a directory structure that mirrors Roblox's internal organization:

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
