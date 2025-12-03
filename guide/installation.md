# Installation

## System Requirements

### Minimum Requirements

- macOS 11.0 (Big Sur) or later
- 4GB RAM
- 2GB free disk space
- Internet connection for initial download

### Supported Architectures

- Apple Silicon (M1, M2, M3, M4) - arm64
- Intel processors - x64
- Universal binary - works on both

## Download Options

### Latest Stable Release

Visit [GitHub Releases](https://github.com/AppleBlox/appleblox/releases/latest) for the most recent stable version.

### Nightly Builds

Get the latest development features from [Nightly Link](https://nightly.link/AppleBlox/appleblox/workflows/build/main).

::: warning Nightly Builds
Nightly builds may contain bugs and are intended for testing purposes.
:::

## Detailed Installation Process

### 1. Download the DMG

Choose the correct architecture for your Mac:

- To check your architecture: Apple menu > About This Mac
- Apple Silicon Macs show "M1", "M2", "M3", etc.
- Intel Macs show "Intel Core i5", "Intel Core i7", etc.

### 2. Open and Install

1. Double-click the downloaded DMG file
2. Wait for the disk image to mount
3. Drag AppleBlox.app to the Applications folder shortcut
4. Close the DMG window
5. Eject the disk image (right-click > Eject)

### 3. First Launch

1. Navigate to Applications folder
2. Double-click AppleBlox.app
3. If you see "AppleBlox is an app downloaded from the internet", click **Open**
4. On first launch, macOS may show security warnings - this is normal

### 4. Permission Requests

AppleBlox may request accessibility permissions:

1. Click "Open System Preferences" if prompted
2. Enable AppleBlox in Security & Privacy > Accessibility
3. This is required for some system integrations

::: tip Removing Quarantine
If macOS blocks the app, open Terminal and run:
```bash
xattr -cr /Applications/AppleBlox.app
```
:::

## Roblox Installation via AppleBlox

AppleBlox can automatically download and install Roblox for you:

### 1. Automatic Detection

- AppleBlox checks if Roblox is installed on launch
- If not found, the sidebar shows the **Install** button

### 2. Download Process

When you click the Install button:

- AppleBlox downloads the latest Roblox version from official CDN
- Progress is shown with:
  - Download percentage (0-100%)
  - Download speed (MB/s)
  - Downloaded size / Total size

### 3. Architecture Selection

AppleBlox automatically selects the correct architecture:

- Intel Macs: Downloads x64 Roblox Player
- Apple Silicon: Downloads arm64 Roblox Player

### 4. Installation

- After download completes, Roblox is installed to Applications
- The Install button changes to Play
- You're ready to launch games!

## Data Directory

AppleBlox stores all its data in:

```
~/Library/Application Support/AppleBlox/
```

### Directory Structure

```
AppleBlox/
├── config/              # Settings files (JSON)
├── mods/                # User-installed mods
├── cache/
│   ├── mods/
│   │   └── Resources/   # Backup of original Roblox files
│   ├── fonts/           # Custom font cache
│   ├── mod-previews/    # Cached mod preview images
│   └── icon-previews/   # Cached icon previews
└── logs/                # Application logs
```

### Custom Data Directory

Advanced users can override the default location:

**Via Environment Variable:**
```bash
export APPLEBLOX_DATA_DIR="/path/to/custom/directory"
```

**Via Command Line:**
```bash
/Applications/AppleBlox.app/Contents/MacOS/AppleBlox --data-dir=/path/to/custom/directory
```

::: info Note
This is primarily useful for portable installations or testing environments.
:::

## Troubleshooting Installation

### App Won't Open

If AppleBlox won't launch:

1. **Check macOS Version** - Must be macOS 11 or later
2. **Remove Quarantine Flag**:
   ```bash
   xattr -cr /Applications/AppleBlox.app
   ```
3. **Check Permissions** - Right-click > Get Info > Sharing & Permissions
4. **Reinstall** - Delete and re-download from GitHub

### Permission Denied

If you get permission errors:

1. Ensure app is in `/Applications/` or `~/Applications/`
2. Don't run from Downloads or Desktop
3. DMG should be ejected after installation

## Next Steps

Once installed, check out:

- [User Interface Overview](/guide/user-interface) - Learn the UI
- [Quick Start Guide](/guide/quick-start) - Get started quickly
- [Features Overview](/guide/features/integrations) - Explore features
