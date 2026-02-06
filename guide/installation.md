# Installation

::: warning Missing Information
System requirements (macOS version, RAM, disk space) are not documented in the source code. This section needs to be filled in by the developers.
:::

## Download

### Stable Release

Download from [GitHub Releases](https://github.com/AppleBlox/appleblox/releases/latest).

### Development Builds

- **Main branch** (stable features): [Nightly Link](https://nightly.link/AppleBlox/appleblox/workflows/build/main)
- **Dev branch** (latest features, may be unstable): [Development Builds](https://nightly.link/AppleBlox/appleblox/workflows/build/dev)

### Architecture Versions

- `arm64` - Apple Silicon (M1, M2, M3, M4)
- `x64` - Intel processors
- `universal` - Works on both

## Installation

1. Download the DMG file for your architecture
2. Open the DMG and drag AppleBlox to Applications
3. Launch AppleBlox from Applications

If macOS shows a security warning, click **Open** to proceed.

::: tip If macOS Blocks the App
Run in Terminal:
```bash
xattr -cr /Applications/AppleBlox.app
```
:::

## Installing Roblox

If Roblox isn't installed, AppleBlox can install it automatically. Click the Install button in the sidebar.

## Data Directory

AppleBlox stores data in `~/Library/Application Support/AppleBlox/` with these subdirectories:

- `config/` - Settings (JSON files)
- `mods/` - Installed mods
- `cache/` - Mod backups, fonts, preview images
- `logs/` - Application logs

See [File Locations](/reference/file-locations) for details.
