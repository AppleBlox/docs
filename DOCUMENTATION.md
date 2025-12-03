# AppleBlox Documentation

> **Lightweight and fast Roblox launcher for macOS**

![AppleBlox Logo](assets/logo.png)

**Version:** 0.9.0-dev.27
**License:** GPL-3.0-only
**Author:** OrigamingWasTaken

---

## Table of Contents

1. [Introduction](#introduction)
2. [Quick Start Guide](#quick-start-guide)
3. [Installation](#installation)
4. [User Interface](#user-interface)
5. [Features](#features)
   - [Integrations](#integrations-panel)
   - [Roblox Behavior](#roblox-behavior-panel)
   - [Engine Settings](#engine-panel)
   - [Mods](#mods-panel)
   - [Appearance](#appearance-panel)
   - [System Tools](#misc-panel)
   - [Information](#info-panel)
   - [Development](#dev-panel)
6. [Mods Guide](#mods-guide)
7. [Advanced Features](#advanced-features)
8. [Troubleshooting](#troubleshooting)
9. [Technical Reference](#technical-reference)
10. [Community & Contributing](#community--contributing)
11. [FAQ](#faq)

---

## Introduction

AppleBlox is a feature-rich, native macOS launcher for Roblox that enhances your gaming experience with powerful customization options, performance tweaks, and quality-of-life improvements.

### Key Features

✨ **Custom Mods** - Install texture packs and UI modifications
🎨 **Icon Customization** - Change your app icon with built-in library or custom .icns files
🎮 **Discord Rich Presence** - Show your Roblox activity on Discord
⚡ **Multi-Instance** - Run multiple Roblox instances simultaneously
🔧 **FastFlags Editor** - Advanced performance and graphics configuration
🎭 **Custom Themes** - Personalize the UI with custom CSS
📊 **Performance Options** - Graphics API selection, FPS unlock, quality control

### Quick Links

- 📥 **[Download Latest Release](https://github.com/AppleBlox/appleblox/releases/latest)**
- 🌙 **[Nightly Builds](https://nightly.link/AppleBlox/appleblox/workflows/build/main)**
- 💬 **[Discord Community](https://appleblox.com/discord)**
- 🐙 **[GitHub Repository](https://github.com/AppleBlox/appleblox)**
- 🎨 **[GameBanana Mods](https://gamebanana.com/games/2879)**

---

## Quick Start Guide

Get up and running with AppleBlox in 5 minutes!

### Prerequisites

- macOS 11 (Big Sur) or later
- Internet connection
- Roblox account

### Installation Steps

1. **Download AppleBlox**
   - Visit the [releases page](https://github.com/AppleBlox/appleblox/releases/latest)
   - Download the appropriate version:
     - `AppleBlox-arm64.dmg` for Apple Silicon (M1/M2/M3)
     - `AppleBlox-x64.dmg` for Intel Macs
     - `AppleBlox-universal.dmg` for either architecture

2. **Install the App**
   - Open the downloaded DMG file
   - Drag **AppleBlox.app** to your Applications folder
   - [Screenshot: DMG installation window]

3. **First Launch**
   - Open AppleBlox from Applications
   - Grant any permission requests (accessibility, etc.)
   - The app will initialize its data directory automatically

4. **Install Roblox (if needed)**
   - If Roblox isn't installed, the sidebar button will show **"Install"**
   - Click the Install button
   - AppleBlox will download and install Roblox for you
   - [Screenshot: Roblox download dialog with progress]

5. **Launch Your First Game**
   - Once Roblox is installed, the button changes to **"Play"**
   - Click Play to launch Roblox
   - Visit roblox.com and join any game
   - AppleBlox handles the deeplink automatically!

> **💡 Tip:** The sidebar button shows different states:
> - **Install** (blue) - Roblox not installed
> - **Play** (green) - Ready to launch
> - **Active** (teal) - Roblox is running
> - **Kill** (red, on hover) - Force close Roblox

---

## Installation

### System Requirements

**Minimum Requirements:**
- macOS 11.0 (Big Sur) or later
- 4GB RAM
- 2GB free disk space
- Internet connection for initial download

**Supported Architectures:**
- Apple Silicon (M1, M2, M3, M4) - arm64
- Intel processors - x64
- Universal binary - works on both

### Download Options

#### Latest Stable Release
Visit [GitHub Releases](https://github.com/AppleBlox/appleblox/releases/latest) for the most recent stable version.

#### Nightly Builds
Get the latest development features from [Nightly Link](https://nightly.link/AppleBlox/appleblox/workflows/build/main).

> **⚠️ Warning:** Nightly builds may contain bugs and are intended for testing purposes.

### Detailed Installation Process

1. **Download the DMG**
   - Choose the correct architecture for your Mac
   - To check your architecture: Apple menu > About This Mac
   - Apple Silicon Macs show "M1", "M2", "M3", etc.
   - Intel Macs show "Intel Core i5", "Intel Core i7", etc.

2. **Open and Install**
   ```
   1. Double-click the downloaded DMG file
   2. Wait for the disk image to mount
   3. Drag AppleBlox.app to the Applications folder shortcut
   4. Close the DMG window
   5. Eject the disk image (right-click > Eject)
   ```

3. **First Launch**
   - Navigate to Applications folder
   - Double-click AppleBlox.app
   - If you see "AppleBlox is an app downloaded from the internet", click **Open**
   - On first launch, macOS may show security warnings - this is normal

4. **Permission Requests**
   - **Accessibility**: Required for some system integrations
   - Click "Open System Preferences" if prompted
   - Enable AppleBlox in Security & Privacy > Accessibility
   - [Screenshot: macOS accessibility permission dialog]

### Roblox Installation via AppleBlox

AppleBlox can automatically download and install Roblox for you:

1. **Automatic Detection**
   - AppleBlox checks if Roblox is installed on launch
   - If not found, the sidebar shows the **Install** button

2. **Download Process**
   - Click the Install button
   - AppleBlox downloads the latest Roblox version from official CDN
   - Progress is shown with:
     - Download percentage (0-100%)
     - Download speed (MB/s)
     - Downloaded size / Total size
     - [Screenshot: Download dialog showing progress]

3. **Architecture Selection**
   - AppleBlox automatically selects the correct architecture
   - Intel Macs: Downloads x64 Roblox Player
   - Apple Silicon: Downloads arm64 Roblox Player

4. **Installation**
   - After download completes, Roblox is installed to Applications
   - The Install button changes to Play
   - You're ready to launch games!

### Data Directory

AppleBlox stores all its data in:
```
~/Library/Application Support/AppleBlox/
```

**Directory Structure:**
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

#### Custom Data Directory

Advanced users can override the default location:

**Via Environment Variable:**
```bash
export APPLEBLOX_DATA_DIR="/path/to/custom/directory"
```

**Via Command Line:**
```bash
/Applications/AppleBlox.app/Contents/MacOS/AppleBlox --data-dir=/path/to/custom/directory
```

> **💡 Note:** This is primarily useful for portable installations or testing environments.

---

## User Interface

### Sidebar Navigation

The left sidebar is your command center in AppleBlox:

[Screenshot: AppleBlox main window with sidebar highlighted]

#### Sidebar Buttons

- **Integrations** - Discord RPC, notifications, game activity
- **Behavior** - Roblox launch settings, multi-instance
- **Engine** - Graphics settings, FastFlags
- **Mods** - Mod management and custom modifications
- **Appearance** - Icon and theme customization
- **Misc** - System tools and settings
- **Info** - About, contributors, community links
- **Dev** - Development tools (dev mode only)

#### Play Button States

Located at the bottom of the sidebar:

| State | Color | Description |
|-------|-------|-------------|
| **Install** | Blue | Roblox not installed, click to download |
| **Play** | Green | Ready to launch Roblox |
| **Active** | Teal | Roblox is currently running |
| **Kill** | Red (hover) | Force close Roblox instances |

#### Version Display

The current AppleBlox version is shown above the Play button.

### Main Content Area

The right side displays the selected panel's content:
- Settings widgets (toggles, sliders, inputs)
- Action buttons
- Information cards
- Grid views (mods, icons)

---

## Features

### Integrations Panel

Connect AppleBlox with external services and enhance your gaming experience.

[Screenshot: Integrations panel with all options visible]

#### Discord Rich Presence

Show your Roblox activity on your Discord profile!

**Settings:**

- **Enable Rich Presence** (default: ON)
  - Displays that you're playing Roblox on Discord
  - Shows real-time updates of your activity

- **Game Activity** (default: ON)
  - Shows the name of the game you're currently playing
  - Example: "Playing Adopt Me!"

- **Play Time** (default: ON)
  - Displays how long you've been playing
  - Updates in real-time

- **Join Button** (default: OFF)
  - Adds a "Join Game" button to your Discord presence
  - Allows friends to join your current game directly
  - Only works for public servers

[Screenshot: Discord profile showing Roblox activity with AppleBlox]

**How to Use:**
1. Ensure Discord is running on your Mac
2. Enable Rich Presence in Integrations panel
3. Launch Roblox through AppleBlox
4. Join any game
5. Your Discord status updates automatically!

> **💡 Tip:** The join button respects your Roblox privacy settings. If you're in a private server, friends won't be able to join.

#### Bloxstrap SDK Integration

AppleBlox supports the Bloxstrap SDK for enhanced game integration.

**Settings:**

- **Enable SDK** (default: OFF)
  - Enables Bloxstrap SDK compatibility features
  - Allows games to communicate with AppleBlox

- **Discord RPC Control** (default: OFF)
  - Lets SDK-compatible games customize your Discord presence
  - Games can set custom status messages and images
  - Requires "Enable SDK" to be ON

**What games can do with SDK:**
- Customize Discord presence text
- Change activity images
- Update status in real-time based on game events
- Send notifications to AppleBlox

> **⚠️ Note:** Only enable SDK for games you trust, as they can control your Discord presence.

#### Notifications

**Server Location Notification** (default: ON)
- Shows the geographic location of the game server when you join
- Example: "Connected to server in United States (Virginia)"
- Helps identify server regions for latency optimization

---

### Roblox (Behavior) Panel

Configure how Roblox launches and behaves.

[Screenshot: Roblox Behavior panel]

#### Background Updates

**Background Updates** (default: OFF)
- Automatically keeps Roblox up-to-date without manual intervention
- Downloads and installs updates in the background
- ⚠️ **Requires administrator permissions**

**How it works:**
1. Enable the toggle
2. Grant admin access when prompted
3. AppleBlox checks for updates periodically
4. Updates download and install automatically
5. No need to open AppleBlox or Roblox manually

#### Launch Behavior

**Delegate launching to AppleBlox** (default: ON)
- Makes AppleBlox the default handler for `roblox://` URLs
- Allows AppleBlox to configure settings before Roblox launches
- Essential for mods, FastFlags, and other features to work

**Return to website** (default: OFF)
- Automatically opens roblox.com when you close Roblox
- Convenient for browsing games after playing

**Exit AppleBlox when Roblox is closed** (default: OFF)
- Automatically quits AppleBlox when Roblox exits
- Useful if you only use AppleBlox as a launcher

**Disable Desktop app** (default: OFF)
- Automatically closes Roblox when you leave a game
- Prevents Roblox from staying open in the background
- Saves system resources

**Create Launch Shortcut**
- Creates a desktop shortcut for quick Roblox launching
- Shortcut includes AppleBlox features automatically

#### Multi-Instance Support

Run multiple Roblox instances simultaneously!

[Screenshot: Multi-instance warning dialog and multiple Roblox windows]

**Enable Multi-Instance** (default: OFF)
- Patches Roblox to allow multiple instances
- Each instance runs independently
- Perfect for multi-accounting or testing

**How to use:**
1. Enable multi-instance toggle
2. Click the **"New Instance"** button (appears when enabled)
3. Each click opens a new Roblox window
4. Each instance can join different games

**Close All Instances**
- Red destructive button to force-close all Roblox windows
- Shows confirmation dialog before proceeding
- Useful for quickly cleaning up multiple instances

> **⚠️ Resource Warning:** Each Roblox instance uses ~500MB-2GB of RAM. Running multiple instances can impact performance on lower-end Macs.

> **💡 Best Practices:**
> - Close instances you're not using
> - Monitor system performance with Activity Monitor
> - Consider lowering graphics settings for multiple instances

---

### Engine Panel

Fine-tune graphics, performance, and advanced Roblox settings.

[Screenshot: Engine panel showing graphics options and FastFlags editor button]

#### Graphics API Selection

Choose the rendering backend for Roblox:

**Options:**
- **Default** - Let Roblox choose automatically
- **Metal** - Apple's native graphics API (recommended for Apple Silicon)
- **Vulkan** - Cross-platform graphics API (good compatibility)
- **OpenGL** - Legacy graphics API (required for FPS unlock)

> **💡 Recommendation:**
> - Apple Silicon Macs: Use **Metal** for best performance
> - Intel Macs: Try **Metal** first, use **Vulkan** if issues occur
> - FPS Unlock: Must use **OpenGL**

#### Graphics Settings

**Remove frame rate limit** (default: OFF)
- Unlocks the 60 FPS cap on macOS Roblox
- ⚠️ **Requires OpenGL graphics API**
- ⚠️ **May cause stability issues in some games**
- Can significantly increase GPU usage and heat

**Separate Quality & Distance** (default: OFF)
- Splits graphics quality from render distance
- Adds a quality slider (1-10) when enabled
- Allows high quality at lower render distances
- ⚠️ **May not work in all games** (e.g., Apocalypse Rising 2)

**Graphics Quality Slider** (when separation enabled)
- Control visual quality independent of distance
- Range: 1 (lowest) to 10 (highest)
- Lower values improve performance

**Level-of-detail** (default: ON)
- Reduces detail for distant objects
- Improves performance with minimal visual impact
- Recommended: Keep enabled

**Fractional Scaling Fix** (default: ON)
- Renders at full resolution when using fractional display scaling
- Prevents blurry text and UI elements
- Essential for Retina displays

**Debug Skybox** (default: OFF)
- Replaces the sky with a simple gray color
- Useful for testing and troubleshooting graphics issues

#### FastFlags Editor

Access Roblox's internal configuration flags for advanced customization.

[Screenshot: FastFlags editor showing flag table with examples]

**What are FastFlags?**

FastFlags (Feature Flags) are Roblox's internal configuration system. They control:
- Graphics rendering options
- Performance optimizations
- Experimental features
- Debug settings
- Network behavior

**How to use:**

1. Click **"FastFlags Editor"** button in Engine panel
2. The editor opens showing current flags
3. Add new flags with the "Add Flag" button
4. Edit values in the table
5. Changes are saved to `ClientAppSettings.json`
6. Restart Roblox for changes to take effect

**Editor Features:**
- **Flag Table** - View all active flags
- **Add Flag** - Add custom flags by name and value
- **Edit Values** - Click cells to modify
- **Delete Flags** - Remove flags you don't need
- **Documentation Link** - Links to Roblox FFlag Tracker

> **⚠️ Important Warnings:**
> - Incorrect flags can break Roblox or cause crashes
> - Roblox maintains an allowlist - not all flags work
> - Some flags are experimental and may change
> - Back up your settings before experimenting

> **📚 Resources:**
> - [Roblox FFlag Tracker](https://github.com/MaximumADHD/Roblox-FFlag-Tracker) - Comprehensive flag documentation
> - Test flags in small increments
> - Join AppleBlox Discord for flag recommendations

**Common Useful Flags:**

See [Advanced Features: FastFlags Deep Dive](#fastflags-deep-dive) for detailed examples.

---

### Mods Panel

Install and manage custom textures, fonts, and UI modifications.

[Screenshot: Mods panel showing both sections]

#### Built-in Modifications

**Custom Font**
- Replace Roblox's default font with your own
- Supported formats: TTF, OTF, TTC
- Applied globally across all Roblox UI

**How to use:**
1. Click **"Choose Font File"** button
2. Select your font file (.ttf, .otf, or .ttc)
3. Font is automatically cached and applied
4. Launch Roblox to see changes

**To remove:**
- Click the **X** button next to the font picker
- Original Roblox fonts are restored automatically

[Screenshot: Font picker with custom font selected]

#### Custom Mods

Manage community-created texture packs and modifications.

**Settings:**

**Enable Mods** (default: OFF)
- Master toggle to enable/disable all mods
- When OFF, original Roblox files are used
- When ON, installed mods are applied during launch

**Legacy Resolution** (default: OFF)
- Reduces resolution for mods designed for non-Retina displays
- Some older mods look blurry on high-DPI displays
- Enable if mod textures appear too sharp/small

**Getting Mods:**
- **Installation Guide:** Links to Bloxstrap wiki
- **Discord Server:** Community mod sharing
- **GameBanana:** Browse and download from mod repository

#### Mods Manager UI

Visual interface for managing installed mods.

[Screenshot: Mods manager grid showing multiple mods with previews]

**Features:**

- **Grid View**
  - Each mod shown as a card
  - Preview images displayed in stacked 3D effect
  - Asset count and folder size visible
  - Enable/disable toggle per mod

- **Mod Information**
  - **Name** - Mod folder name
  - **Preview** - Up to 3 images from the mod
  - **Assets** - Number of files in the mod
  - **Size** - Total mod folder size in MB
  - **Toggle** - Enable/disable this specific mod

- **Actions**
  - **Open Folder** - Opens mods directory in Finder
  - **Refresh** - Reload mod list and recalculate sizes

**How the grid works:**
- Mods are loaded from `~/Library/Application Support/AppleBlox/mods/`
- Preview images are automatically detected
- Hover over mod cards for 3D effect
- Click toggle to enable/disable individual mods

**Mod States:**
- Enabled mods: Regular folder name
- Disabled mods: Folder name ends in `.disabled`
- Toggling renames the folder automatically

> **💡 Tip:** Disable mods individually to troubleshoot conflicts without removing them.

---

### Appearance Panel

Customize AppleBlox's look with custom icons and themes.

[Screenshot: Appearance panel showing icon manager and theme editor]

#### Icon Customization

Change the AppleBlox app icon to personalize your experience!

**Icon Manager:**

[Screenshot: Icon manager grid showing various icons with 3D effects]

**Features:**
- **Icon Library** - Pre-installed icons to choose from
- **Upload Custom** - Add your own .icns files
- **3D Preview** - Interactive card effects on hover
- **One-Click Apply** - Select and apply instantly
- **Bundled Icons** - Special icons (marked with 📌 pin)
- **Delete Custom** - Remove uploaded icons (can't delete bundled/original)

**How to use:**

1. **Select from Library:**
   - Browse the icon grid
   - Click an icon card to select it
   - Selected icon shows blue border
   - Hover to see 3D rotation effect

2. **Upload Custom Icon:**
   - Click **"Upload Icon"** button
   - Select a .icns file from your Mac
   - Icon is cached and added to library
   - Select and apply like any other icon

3. **Apply Icon:**
   - Selected icon is marked with blue border
   - Icon is automatically applied to AppleBlox.app
   - Changes visible immediately in Dock and Finder
   - Original icon is backed up automatically

4. **Delete Custom Icons:**
   - Click the 🗑️ trash icon on custom icons
   - Bundled icons show 📌 pin instead (can't delete)
   - Original icon can't be deleted
   - Confirmation dialog before deletion

**Icon Types:**
- **Original** - Default AppleBlox icon (can't delete)
- **Bundled** - Pre-installed icons (can't delete, marked with pin)
- **Custom** - User-uploaded icons (can delete)

> **💡 Note:** Icon customization only works when AppleBlox is installed in `/Applications/` or `~/Applications/`.

**Included Icon Sets:**
- **Liquid Glass** icons (designed by BakaTheSussy)
  - clear_dark.icns
  - clear_light.icns
  - dark.icns
  - tinted_dark.icns
  - tinted_light.icns

#### Theme System

Customize the AppleBlox UI with custom CSS!

**Theme Editor:**

[Screenshot: Theme editor showing CSS textarea and buttons]

**Features:**
- **CSS Editor** - Text area for custom CSS
- **Apply/Save** - Apply changes to UI immediately
- **Open in Editor** - Open theme.css in your default text editor
- **Refresh** - Reload theme from file

**How to use:**

1. **Edit in AppleBlox:**
   - Paste or type CSS in the text area
   - Click **"Apply"** to see changes instantly
   - Changes are saved to `theme.css`

2. **Edit Externally:**
   - Click **"Open CSS File"**
   - Edit in your favorite editor (VS Code, Sublime, etc.)
   - Save the file
   - Click **"Refresh"** in AppleBlox to reload

**Theme File Location:**
```
~/Library/Application Support/AppleBlox/theme.css
```

**Example Custom CSS:**

```css
/* Change primary color */
:root {
  --primary: 200 100% 50%; /* HSL values */
  --primary-foreground: 0 0% 100%;
}

/* Custom button styles */
.button {
  border-radius: 12px;
  font-weight: 600;
}

/* Sidebar background */
.sidebar {
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
}
```

> **📚 CSS Variables Available:**
> - `--background` - Main background
> - `--foreground` - Text color
> - `--primary` - Accent color
> - `--secondary` - Secondary elements
> - `--muted` - Muted elements
> - `--border` - Border color
> - And many more! Inspect the app to discover all variables.

---

### Misc Panel

System settings, notifications, and utility tools.

[Screenshot: Misc panel showing system settings and tools]

#### System Settings

**Notification Sounds** (default: OFF)
- Enables sound effects for AppleBlox notifications
- Uses system notification sounds
- Applies to server location, updates, etc.

**Alternative Notifications** (default: OFF)
- Uses AppleScript for notifications instead of native alerts
- More compatible with older macOS versions
- Less detailed but more reliable
- Try this if native notifications don't work

**Fixed Loading Times** (default: ON)
- Sets minimum display time for launch progress steps
- Makes the launch process more visible
- Each step shows for at least 100-200ms
- Disable for faster launches (steps may flash too quick to see)

#### System Tools

**View Logs**
- Opens the logs folder in Finder
- Location: `~/Library/Application Support/AppleBlox/logs/`
- Useful for troubleshooting errors
- [Screenshot: Logs folder in Finder]

**Export Settings**
- Creates a ZIP archive of configuration and logs
- Includes:
  - Last 10 log files
  - All configuration files
  - System information
- Saved to Desktop or Downloads folder
- Filename format: `abloxconfig-VERSION-DATE.zip`
- ⚠️ **For support purposes only** - don't share publicly

**How to use:**
1. Click **"Export Settings"** button
2. Warning dialog appears
3. Click **"Export"** to confirm
4. ZIP file is created and folder opens automatically
5. Share with support team if requested

**AppleBlox Folder**
- Opens the main data directory
- Location: `~/Library/Application Support/AppleBlox/`
- Contains mods, config, cache, logs
- [Screenshot: AppleBlox data folder structure]

**Roblox Folder**
- Opens Roblox installation location
- Location: `/Applications/Roblox.app/`
- Shows Contents > Resources where mods are applied
- Useful for advanced troubleshooting

---

### Info Panel

Learn about AppleBlox, its contributors, and community.

[Screenshot: Info panel showing contributors and links]

#### Contributors

**Developers:**
- **OrigamingWasTaken** - Maintainer & Main Developer
- **Satalights** - Moderator & Tester
- **allFiction** - Moderator & Tester
- **TrisecTroop** - Moderator & Tester
- **n.u.g** - Moderator & Tester
- **atomic** - Tester & Support

**Artists & Designers:**
- **BakaTheSussy** - Designer of Liquid Glass icon set
- **typeofnull** - Designer of main AppleBlox logo
- **abyzal.** - Designer of first AppleBlox logo

**Technologies Used:**
- **NeutralinoJS** - Lightweight C++ framework for native apps
- **Svelte** - Modern component-based UI framework
- **TypeScript** - Type-safe JavaScript for robust code
- **Icons8** - Icon library for UI elements

#### Community Links

**Discord Server**
- Get help from the community
- Share mods and configurations
- Report bugs and request features
- Chat with other AppleBlox users
- Link: [appleblox.com/discord](https://appleblox.com/discord)

**GitHub Repository**
- View source code
- Report issues
- Submit pull requests
- Track development progress
- Link: [github.com/AppleBlox/appleblox](https://github.com/AppleBlox/appleblox)

---

### Dev Panel

Development tools and testing utilities (dev mode only).

[Screenshot: Dev panel showing various testing components]

> **💡 Note:** The Dev panel only appears when AppleBlox is running in development mode.

**How to enable dev mode:**
1. Run AppleBlox from source with `bun run dev`
2. Or create file: `~/adevmode`
3. Restart AppleBlox
4. Dev panel appears in sidebar

#### Features

**Launch Arguments**
- Read-only display of command-line arguments
- Shows `window.NL_ARGS` from Neutralino
- Useful for debugging startup parameters

**UI Component Testing**
- Test all AppleBlox UI components
- Components available:
  - Standard buttons
  - Icon buttons (with Lucide icons)
  - Text inputs (with character blacklist)
  - Dropdowns with predefined options
  - Value sliders (0-100 range)
  - Toggle switches
  - File pickers (PNG, JPG, JPEG)

**Notification Testing**
- Test all notification types:
  - **Standard** - Basic notification with title, content, image
  - **Reply** - Notification with text reply field
  - **Action** - Notification with action buttons (Approve, Reject, Review)
  - **Timeout** - Auto-dismissing notification (5 seconds)
- Each test shows toast feedback on interaction

**System Operations**
- **Create Backup** - Generate Roblox Resources backup manually
- **Roblox Download** - Access download dialog for testing
- Useful for testing launch and mod systems

---

## Mods Guide

Comprehensive guide to installing, managing, and creating custom Roblox modifications.

### Introduction to Mods

#### What are Mods?

Mods (modifications) are custom files that replace Roblox's original textures, sounds, and UI elements. They allow you to:

- **Customize Visuals** - Change textures, icons, UI elements
- **Modify Sounds** - Replace audio files with custom sounds
- **Enhance UI** - Redesign menus, buttons, and interfaces
- **Theme Games** - Apply texture packs to specific games

**Key Points:**
- ✅ Completely reversible - original files are backed up
- ✅ Easy to enable/disable individual mods
- ✅ No game files are modified - only local Roblox app
- ✅ Compatible with Bloxstrap mods
- ⚠️ Some mods may affect game performance
- ⚠️ Use trusted sources only

#### How Mods Work Technically

**File Structure Mirroring:**

Mods use a directory structure that mirrors Roblox's internal organization:

```
Roblox.app/Contents/Resources/
├── assets/
├── content/
│   ├── fonts/
│   ├── textures/
│   └── sounds/
└── [other directories]
```

Your mod folder should match this structure:

```
MyAwesomeMod/
├── assets/
│   └── xbutton_32.png     # Replaces close button
├── content/
│   └── textures/
│       └── ui/
│           └── menu.png   # Replaces menu background
```

**Launch Process:**

1. **User enables mods** in Mods panel
2. **AppleBlox creates backup** of `Roblox.app/Contents/Resources/`
3. **Backup stored** in `~/Library/Application Support/AppleBlox/cache/mods/Resources/`
4. **Mods are merged** into Roblox's Resources folder
5. **Later mods override** earlier mods if files conflict
6. **Roblox launches** with modified files

**Restoration:**

When mods are disabled:
1. Current (modded) Resources folder is deleted
2. Original backup is copied back
3. Backup is removed
4. Roblox returns to original state

> **💡 Important:** Mods are applied **during launch**. Changes require restarting Roblox to take effect.

---

### Finding Mods

#### Official Sources

**GameBanana**
- Primary mod repository for Roblox
- Hundreds of texture packs and themes
- User ratings and reviews
- Download link: [gamebanana.com/games/2879](https://gamebanana.com/games/2879)

**AppleBlox Discord**
- Community-shared mods
- Get recommendations
- Share your own creations
- Link: [appleblox.com/discord](https://appleblox.com/discord)

**Bloxstrap Community**
- Bloxstrap mods work with AppleBlox!
- Large existing mod library
- Installation guide: [Bloxstrap Wiki](https://github.com/pizzaboxer/bloxstrap/wiki/Adding-custom-mods)

#### Mod Compatibility

**Bloxstrap Mods:**
- ✅ Fully compatible with AppleBlox
- Same file structure and system
- Can use Bloxstrap mods without changes

**Retina vs Non-Retina:**
- Some mods are designed for lower resolutions
- May appear blurry or too sharp on Retina displays
- Enable **"Legacy Resolution"** in Mods panel if needed
- Modern mods usually support high-DPI displays

**Game-Specific Mods:**
- Some mods are designed for specific games
- Universal mods work across all games
- Check mod description for compatibility info

---

### Installing Mods

#### Method 1: Drag and Drop (Recommended)

The easiest way to install mods!

**Steps:**

1. **Open Mods Directory**
   - Open AppleBlox
   - Go to **Mods** panel
   - Click **"Open Folder"** button
   - Finder opens to: `~/Library/Application Support/AppleBlox/mods/`
   - [Screenshot: Mods panel with "Open Folder" button highlighted]

2. **Download Mod**
   - Visit GameBanana or other source
   - Download mod (usually a .zip file)
   - [Screenshot: GameBanana mod download page]

3. **Extract Mod**
   - Double-click the .zip file to extract
   - You should get a folder with the mod's name
   - The folder contains subdirectories (assets/, content/, etc.)

4. **Install Mod**
   - Drag the extracted mod folder into the mods directory
   - [Screenshot: Dragging mod folder into mods directory]

5. **Verify Installation**
   - Return to AppleBlox
   - Click **"Refresh"** in Mods panel
   - Your mod appears in the grid!
   - [Screenshot: New mod appearing in Mods Manager]

6. **Enable and Launch**
   - Toggle on **"Enable Mods"** master switch
   - Toggle on your specific mod
   - Click **"Play"** to launch Roblox
   - Join a game to see your mod in action!

#### Method 2: Manual Installation

For users comfortable with Finder:

1. **Navigate to Mods Folder**
   ```
   1. Open Finder
   2. Click "Go" menu
   3. Select "Go to Folder..."
   4. Enter: ~/Library/Application Support/AppleBlox/mods/
   5. Press Enter
   ```

2. **Copy Mod**
   - Download and extract mod as usual
   - Copy the mod folder
   - Paste into the mods directory

3. **Refresh AppleBlox**
   - Open AppleBlox Mods panel
   - Click Refresh button
   - Mod appears automatically

---

### Managing Mods

#### Enable/Disable Mods

**Master Toggle:**
- **"Enable Mods"** switch in Mods panel
- Controls ALL mods at once
- When OFF: Original Roblox files used (mods not applied)
- When ON: All enabled mods are applied during launch

**Individual Mod Toggles:**
- Each mod has its own enable/disable switch
- Located on the mod card in Mods Manager
- Green (ON) = Mod will be applied
- Gray (OFF) = Mod is skipped during launch

**How it works internally:**
- Enabled mods: Folder named `ModName/`
- Disabled mods: Folder renamed to `ModName.disabled/`
- AppleBlox only loads folders without `.disabled` suffix
- Toggling renames the folder automatically

[Screenshot: Mod card showing toggle switch in both states]

#### Mod Information

Each mod card displays:

**Preview Images**
- Up to 3 images from the mod
- Stacked in 3D effect with rotation
- Automatically detected from mod files
- Supported formats: PNG, JPG, JPEG, WEBP
- [Screenshot: Mod card with stacked preview images]

**Asset Count**
- Total number of files in the mod
- Excludes system files (.DS_Store)
- Indicator of mod size/complexity

**Folder Size**
- Total mod size in MB
- Helps manage disk space
- Large mods (>100MB) may impact launch time

**Name**
- Mod folder name
- Shown at top of mod card

#### Organizing Mods

**Folder Naming:**
- Use descriptive names for easy identification
- Examples:
  - `DarkTheme_UI`
  - `CartoonTextures_2023`
  - `MinimalIcons_v2`
- Avoid special characters that might cause issues

**Load Order (Conflict Resolution):**

When multiple mods modify the same file:
- Mods are loaded alphabetically by folder name
- **Later mods override earlier mods**
- Example:
  ```
  1. AAA_FirstMod/     # Loaded first
  2. BBB_SecondMod/    # Overrides AAA if conflicts
  3. ZZZ_LastMod/      # Has final say on any conflicts
  ```

**Best Practices:**
- Prefix with numbers for explicit order: `01_Base`, `02_Theme`, `03_Icons`
- Keep related mods in similar naming groups
- Disable conflicting mods rather than deleting

#### Removing Mods

**To Delete a Mod:**

1. **Via Finder:**
   - Open mods folder (Mods panel > Open Folder)
   - Drag mod folder to Trash
   - Empty Trash

2. **Clean Up:**
   - Return to AppleBlox
   - Click **Refresh** in Mods panel
   - Mod disappears from grid

**To Temporarily Disable:**
- Use the toggle switch instead of deleting
- Mod stays installed but isn't applied
- Can re-enable anytime without re-downloading

---

### Creating Custom Mods

Want to create your own mod? Here's how!

#### Mod Structure

**Basic Requirements:**

1. **Folder** - Create a folder with your mod name
2. **Subdirectories** - Match Roblox's structure
3. **Files** - Add your custom files in correct locations

**Example Mod Structure:**

```
MyCustomMod/
├── assets/
│   ├── xbutton_16.png          # 16x16 close button
│   ├── xbutton_24.png          # 24x24 close button
│   └── xbutton_32.png          # 32x32 close button
├── content/
│   ├── textures/
│   │   └── ui/
│   │       ├── MaterialIcons/
│   │       │   └── menu.png    # Menu icon
│   │       └── TopBar/
│   │           └── robux.png   # Robux icon
│   └── sounds/
│       └── click.mp3           # Button click sound
└── README.txt                  # Optional: Mod description
```

#### Finding Files to Replace

**Locate Roblox Resources:**

```
/Applications/Roblox.app/Contents/Resources/
```

**Explore with Finder:**

1. Open Finder
2. Navigate to Applications
3. Right-click Roblox.app
4. Select "Show Package Contents"
5. Open Contents > Resources
6. Browse directories to find files to replace
7. [Screenshot: Roblox.app package contents explorer]

**Common Locations:**

| Type | Location | Examples |
|------|----------|----------|
| **UI Icons** | `assets/` | Close button, menu icons |
| **Textures** | `content/textures/` | Materials, terrain, particles |
| **Sounds** | `content/sounds/` | Click, hover, notification sounds |
| **Fonts** | `content/fonts/` | UI fonts (handled by Custom Font feature) |

**Tips:**
- Look for image files (.png) for visual mods
- Sound files (.mp3, .ogg) for audio mods
- Maintain same file format as original
- Match dimensions for images (or use higher res)

#### File Formats

**Supported Formats:**

| Type | Formats | Notes |
|------|---------|-------|
| **Images** | PNG, JPG, JPEG | PNG recommended for transparency |
| **Sounds** | MP3, OGG, WAV | Match original format when possible |
| **Fonts** | TTF, OTF | Use Custom Font feature instead |

**Image Guidelines:**
- PNG for images with transparency (icons, UI)
- JPG for photos/textures without transparency
- Higher resolution is better (scales down nicely)
- Retina displays: Use 2x dimensions
  - Original 32x32 → Use 64x64 for Retina
  - Original 512x512 → Use 1024x1024 for Retina

#### Testing Your Mod

**Testing Process:**

1. **Create Mod Folder**
   - Make folder in `~/Library/Application Support/AppleBlox/mods/`
   - Name it descriptively

2. **Add Files**
   - Copy your custom files into correct subdirectories
   - Match Roblox's folder structure exactly

3. **Enable in AppleBlox**
   - Open AppleBlox
   - Go to Mods panel
   - Click Refresh
   - Find your mod in grid
   - Toggle it ON
   - Toggle **"Enable Mods"** ON

4. **Launch Roblox**
   - Click Play button
   - Join any game

5. **Verify Changes**
   - Look for your modified elements
   - Check if textures/sounds loaded correctly
   - Test in different games if applicable

**Troubleshooting:**
- If changes don't appear, check file paths match exactly
- Verify file formats are supported
- Try refreshing mods list
- Check logs for errors: Misc panel > View Logs

6. **Iterate**
   - Make adjustments to your files
   - No need to disable/enable each time
   - Just restart Roblox to see changes

**Sharing Your Mod:**

Once your mod works:
1. Create a .zip of your mod folder
2. Write a description (features, compatibility)
3. Include screenshots or preview video
4. Upload to GameBanana or share in Discord
5. Credit assets if you used any

---

### Troubleshooting Mods

#### Mod Not Appearing in Mods Manager

**Possible Causes:**

1. **Incorrect Location**
   - ✅ Verify mod is in `~/Library/Application Support/AppleBlox/mods/`
   - ❌ Not in subdirectory or wrong location

2. **Not a Directory**
   - ✅ Mod must be a folder, not a file
   - ❌ Don't put .zip files in mods folder (extract first)

3. **Needs Refresh**
   - Click **Refresh** button in Mods panel
   - Mods Manager re-scans directory

**Fix:**
```
1. Open Mods panel
2. Click "Open Folder"
3. Verify your mod folder is there
4. Return to AppleBlox
5. Click Refresh button
6. Mod should appear
```

#### Mod Not Working In-Game

**Checklist:**

1. **Master Toggle Enabled?**
   - Check **"Enable Mods"** is ON in Mods panel
   - [Screenshot: Enable Mods toggle highlighted]

2. **Individual Mod Enabled?**
   - Check your mod's toggle is ON (green)
   - Disabled mods have gray toggle and `.disabled` suffix

3. **Roblox Restarted?**
   - Mods are applied during launch
   - Restart Roblox after enabling mods

4. **Correct File Structure?**
   - Files must be in correct subdirectories
   - Match Roblox's structure exactly

**Example Issue:**
```
❌ Wrong:
MyMod/
└── xbutton_32.png

✅ Correct:
MyMod/
└── assets/
    └── xbutton_32.png
```

5. **File Format Compatible?**
   - Use PNG for images with transparency
   - Match original file format

#### Conflicts Between Mods

**Symptoms:**
- Only some mod changes appear
- Unexpected textures showing
- Missing elements

**Cause:**
Multiple mods modify the same file - later mods override earlier ones.

**Solutions:**

1. **Check Load Order**
   - Mods load alphabetically
   - Rename folders to control order
   - Example: `01_Base`, `02_Overlay`

2. **Disable Conflicting Mods**
   - Toggle off one mod at a time
   - Identify which mod is causing conflict
   - Decide which to keep enabled

3. **Merge Mods**
   - Advanced: Manually combine mod files
   - Copy files from both mods into one folder
   - Choose which version of conflicting files to keep

#### Restoring Original Files

**If Mods Break Roblox:**

1. **Disable Mods**
   - Turn OFF **"Enable Mods"** toggle
   - Restart Roblox
   - Original files are restored automatically

2. **Manual Restoration**
   - If toggle doesn't work:
   ```
   1. Quit Roblox
   2. Open Finder
   3. Navigate to: /Applications/Roblox.app/Contents/
   4. Delete "Resources" folder
   5. Check if backup exists:
      ~/Library/Application Support/AppleBlox/cache/mods/Resources/
   6. Copy backup to Roblox.app/Contents/Resources/
   7. Restart Roblox
   ```

3. **Reinstall Roblox**
   - Worst case scenario
   - Delete Roblox.app
   - Use AppleBlox Install button to re-download

#### Performance Issues

**Symptoms:**
- Roblox runs slower
- Longer launch times
- Frame rate drops

**Possible Causes:**

1. **Large Mods**
   - Mods with high-res textures use more VRAM
   - Solution: Use lower resolution versions

2. **Many Mods Active**
   - Each mod adds files to copy during launch
   - Solution: Disable mods you're not using

3. **Legacy Resolution**
   - May impact performance if enabled unnecessarily
   - Solution: Disable if not needed

**Optimization Tips:**
- Keep only essential mods enabled
- Use optimized texture sizes (2048x2048 max)
- Disable **Legacy Resolution** unless required
- Monitor performance with Activity Monitor

---

## Advanced Features

### FastFlags Deep Dive

#### Understanding FastFlags

**What Are FastFlags?**

FastFlags are Roblox's internal feature flags - configuration variables that control engine behavior. They're used by Roblox developers to:

- Enable/disable experimental features
- Configure graphics rendering
- Tune network behavior
- Adjust performance parameters
- Debug issues

**How They Work:**

FastFlags are stored in:
```
~/Library/Preferences/com.roblox.Roblox/ClientAppSettings.json
```

Format:
```json
{
  "FlagName": value,
  "AnotherFlag": "string value",
  "BooleanFlag": true
}
```

**Important Notes:**
- ⚠️ Roblox maintains an **allowlist** of usable flags
- ⚠️ Most flags won't work due to security restrictions
- ⚠️ Incorrect values can crash Roblox
- ⚠️ Flags can change or be removed anytime

#### Common Useful Flags

> **Disclaimer:** These flags worked at time of writing but may change. Always test carefully and back up your settings.

**Performance Flags:**

```json
{
  "DFIntTaskSchedulerTargetFps": 144,
  "FFlagDebugGraphicsPreferVulkan": true,
  "FFlagDebugGraphicsDisableDirect3D11": true,
  "DFIntMaxFrameBufferSize": 4
}
```

- `DFIntTaskSchedulerTargetFps`: Target frame rate (if FPS unlocked)
- Graphics API selection flags
- Frame buffer size control

**Visual Quality Flags:**

```json
{
  "FIntRenderLocalLightUpdatesMax": 8,
  "FIntRenderLocalLightUpdatesMin": 4,
  "DFIntDebugFRMQualityLevelOverride": 21,
  "DFFlagTextureQualityOverrideEnabled": true,
  "DFIntTextureQualityOverride": 3
}
```

- Lighting quality control
- Override quality settings
- Texture resolution control

**UI/UX Flags:**

```json
{
  "FFlagEnableInGameMenuV3": false,
  "FFlagDisableNewIGMinDUA": true,
  "FFlagEnableInGameMenuChromeABTest2": false
}
```

- Control UI versions
- Disable experimental menus
- Classic interface options

#### Safety Considerations

**Before Changing Flags:**

1. **Backup Settings**
   - Export settings via Misc panel
   - Keep a copy of working configuration

2. **Research Flags**
   - Check [Roblox FFlag Tracker](https://github.com/MaximumADHD/Roblox-FFlag-Tracker)
   - Ask in AppleBlox Discord
   - Test one flag at a time

3. **Test Incrementally**
   - Add one flag
   - Launch Roblox
   - Verify it works
   - Then add next flag

**If Roblox Won't Launch:**

1. Delete `ClientAppSettings.json`
2. Location:
   ```
   ~/Library/Preferences/com.roblox.Roblox/ClientAppSettings.json
   ```
3. Restart Roblox
4. Re-add flags one at a time

**Signs of Bad Flags:**
- Roblox crashes on launch
- Black screen
- Graphics glitches
- Can't join games
- Performance degradation

**Recovery:**
- Remove last added flags
- Start fresh with known-good config
- Check logs: Misc panel > View Logs

---

### Multi-Instance Setup

#### Use Cases

**Why Use Multi-Instance?**

1. **Multi-Accounting**
   - Play on multiple accounts simultaneously
   - Trade items between accounts
   - Run a shop while playing

2. **Testing**
   - Test games as developer
   - Multiple testers from one Mac
   - Quality assurance work

3. **AFK Farming**
   - AFK farm on one account
   - Play actively on another
   - ⚠️ Follow game rules - some prohibit this

4. **Recording/Streaming**
   - Stream one account
   - Control camera from another
   - Create cinematic content

#### Performance Impact

**Resource Usage Per Instance:**

| Resource | Usage per Instance | Example (3 instances) |
|----------|-------------------|----------------------|
| RAM | 500MB - 2GB | 1.5GB - 6GB |
| CPU | 10-40% | 30-120% |
| GPU | Varies by game | High |
| Disk | Minimal | Minimal |

**Recommendations by Mac:**

**Apple Silicon (M1/M2/M3):**
- ✅ 8GB RAM: 2-3 instances
- ✅ 16GB RAM: 4-6 instances
- ✅ 32GB RAM: 8+ instances

**Intel Macs:**
- ✅ 8GB RAM: 1-2 instances
- ✅ 16GB RAM: 2-4 instances
- ✅ 32GB RAM: 4-6 instances

**Monitor Performance:**
- Use Activity Monitor (Applications > Utilities)
- Watch CPU and Memory tabs
- If system slows down, close instances

#### Best Practices

**Before Enabling Multi-Instance:**

1. **Close Other Apps**
   - Quit memory-heavy apps (Chrome, Photoshop, etc.)
   - Free up RAM for Roblox instances

2. **Lower Graphics Settings**
   - Reduce quality in each instance
   - Use lower resolution
   - Disable shadows/effects

3. **Enable Ventilation**
   - Ensure good airflow
   - Use cooling pad for laptops
   - Monitor temperatures

**Managing Multiple Instances:**

1. **Window Management**
   - Use Mission Control (F3) to see all windows
   - Assign each instance to different desktops
   - Swipe between desktops for easy switching

2. **Audio Control**
   - Mute all but one instance to avoid audio overlap
   - Use headphones for active instance

3. **Network Consideration**
   - Each instance uses bandwidth
   - May increase ping
   - Avoid on slow connections

#### Closing Instances

**Normal Close:**
- Quit each instance normally (Cmd+Q)
- Leave games before quitting

**Force Close:**
- Use **"Close All"** button in Behavior panel
- ⚠️ **Destructive action** - shows warning
- Instantly terminates all Roblox processes
- Use if instances are frozen or unresponsive

**Activity Monitor Method:**
1. Open Activity Monitor
2. Search for "Roblox"
3. Select processes
4. Click X to quit

---

### Custom Themes

#### CSS Structure

AppleBlox uses CSS variables for theming. Understanding the structure helps create better themes.

**CSS Variables Available:**

```css
:root {
  /* Colors (HSL format) */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 221.2 83.2% 53.3%;

  /* Measurements */
  --radius: 0.5rem;
}
```

**Color Format:**
- HSL (Hue, Saturation, Lightness)
- Example: `221.2 83.2% 53.3%`
  - Hue: 221.2 (blue)
  - Saturation: 83.2%
  - Lightness: 53.3%

#### Theme Examples

**Dark Theme:**

```css
:root {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 47.4% 11.2%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
}
```

**Purple Theme:**

```css
:root {
  --primary: 271 91% 65%;
  --primary-foreground: 0 0% 100%;
  --accent: 271 81% 56%;
  --accent-foreground: 0 0% 100%;
  --secondary: 270 60% 40%;
  --ring: 271 91% 65%;
}
```

**Minimalist Theme:**

```css
:root {
  --background: 0 0% 98%;
  --foreground: 0 0% 10%;
  --primary: 0 0% 20%;
  --border: 0 0% 90%;
  --radius: 0.25rem; /* Sharper corners */
}

/* Simplify buttons */
.button {
  border-radius: var(--radius);
  box-shadow: none;
  font-weight: 500;
}

/* Minimal sidebar */
.sidebar {
  background: white;
  border-right: 1px solid hsl(var(--border));
}
```

#### Color Schemes

**Creating Harmonious Colors:**

1. **Choose Base Hue** (0-360)
   - Red: 0
   - Orange: 30
   - Yellow: 60
   - Green: 120
   - Cyan: 180
   - Blue: 240
   - Purple: 270
   - Pink: 330

2. **Adjust Saturation**
   - Vibrant: 80-100%
   - Moderate: 40-70%
   - Muted: 10-30%

3. **Control Lightness**
   - Dark elements: 10-30%
   - Medium: 40-60%
   - Light: 70-90%

**Tools:**
- [Coolors.co](https://coolors.co) - Color scheme generator
- [HSL Color Picker](https://hslpicker.com) - Visual HSL selector

#### Font Customization

**Change UI Fonts:**

```css
/* Apply custom font to all text */
body {
  font-family: 'SF Pro Display', -apple-system, sans-serif;
}

/* Specific elements */
h1, h2, h3 {
  font-family: 'SF Pro Display', -apple-system, sans-serif;
  font-weight: 700;
}

/* Monospace for code */
code, .code {
  font-family: 'SF Mono', 'Monaco', monospace;
}

/* Buttons */
button {
  font-family: 'SF Pro Text', -apple-system, sans-serif;
  font-weight: 600;
}
```

**Available System Fonts (macOS):**
- SF Pro Display (rounded, modern)
- SF Pro Text (UI elements)
- SF Mono (monospace)
- Helvetica Neue (classic)
- Arial
- Courier (monospace)

> **💡 Note:** Don't confuse UI fonts with in-game Roblox fonts. Use the Custom Font feature in Mods panel for Roblox fonts.

---

## Troubleshooting

### Common Issues

#### App Won't Open

**Symptoms:**
- Double-click AppleBlox, nothing happens
- App bounces in Dock then closes
- Error message on launch

**Solutions:**

1. **Check macOS Version**
   - Apple menu > About This Mac
   - Must be macOS 11 (Big Sur) or later
   - If older: Upgrade macOS or use Roblox directly

2. **Verify Installation**
   ```
   ✅ App is in /Applications/ or ~/Applications/
   ✅ App isn't in Downloads or Desktop
   ✅ DMG has been ejected
   ```

3. **Remove Quarantine Flag**
   - macOS may block downloaded apps
   - Open Terminal
   - Run:
   ```bash
   xattr -cr /Applications/AppleBlox.app
   ```
   - Try launching again

4. **Check Permissions**
   - Right-click AppleBlox.app
   - Get Info
   - Sharing & Permissions section
   - Ensure you have Read & Write

5. **Reinstall AppleBlox**
   ```
   1. Quit AppleBlox if running
   2. Drag AppleBlox.app to Trash
   3. Empty Trash
   4. Re-download from GitHub
   5. Reinstall to Applications
   ```

6. **Check Logs**
   - Even if app won't open, logs may exist
   - Navigate to: `~/Library/Application Support/AppleBlox/logs/`
   - Open latest log file
   - Look for errors

**Still Not Working?**
- Join Discord for support
- Export system info: About This Mac > System Report
- Share macOS version and Mac model

#### Roblox Won't Launch

**Symptoms:**
- Click Play, nothing happens
- Roblox starts then immediately quits
- Deeplinks don't work

**Solutions:**

1. **Check URL Scheme Delegation**
   - Behavior panel
   - Ensure **"Delegate launching to AppleBlox"** is ON
   - If OFF, turn it ON
   - Restart AppleBlox
   - [Screenshot: Delegation toggle highlighted]

2. **Verify Roblox Installation**
   - Check if Roblox.app exists in /Applications/
   - If missing, use Install button in AppleBlox
   - If corrupt, delete and reinstall

3. **Check Roblox Permissions**
   - Open Roblox.app manually first
   - Grant any permission requests
   - Close Roblox
   - Try launching via AppleBlox again

4. **Disable Mods Temporarily**
   - Mods can sometimes cause launch issues
   - Turn OFF "Enable Mods"
   - Try launching
   - If works, one mod is causing problems
   - Enable mods one by one to identify culprit

5. **Reset FastFlags**
   - Bad FastFlags can prevent launching
   - Delete: `~/Library/Preferences/com.roblox.Roblox/ClientAppSettings.json`
   - Try launching

6. **Check for Roblox Updates**
   - Roblox updates weekly
   - Old version may not launch
   - Enable Background Updates in Behavior panel
   - Or download latest Roblox manually

**Deeplink Issues:**

If clicking roblox:// links doesn't work:

1. **Check Default Handler**
   - Links should open AppleBlox
   - If they open Roblox directly:
   - Behavior panel > Enable delegation
   - Restart AppleBlox

2. **Reset Launch Services**
   - Open Terminal
   - Run:
   ```bash
   /System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -kill -r -domain local -domain system -domain user
   ```
   - Restart Mac
   - Try deeplinks again

#### Mods Not Working

See [Mods Guide: Troubleshooting](#troubleshooting-mods) section above for detailed mod troubleshooting.

**Quick Checklist:**
- ✅ "Enable Mods" toggle is ON
- ✅ Individual mod toggle is ON
- ✅ Roblox has been restarted after enabling mods
- ✅ Mod files are in correct structure
- ✅ No conflicts with other mods

#### Discord RPC Not Showing

**Symptoms:**
- Discord doesn't show Roblox activity
- Presence shows "Playing Roblox" but no details
- Join button doesn't appear

**Solutions:**

1. **Check Discord**
   - Discord must be running before launching Roblox
   - Ensure you're logged in
   - Discord desktop app (not web browser)

2. **Enable All RPC Settings**
   - Integrations panel
   - Turn ON "Enable Rich Presence"
   - Turn ON "Game Activity"
   - Turn ON "Play Time"
   - Turn ON "Join Button" (if wanted)

3. **Check Discord Settings**
   - Discord > Settings > Activity Privacy
   - Enable "Display current activity as a status message"
   - [Screenshot: Discord activity privacy setting]

4. **Restart Both Apps**
   ```
   1. Quit Discord completely
   2. Quit Roblox
   3. Quit AppleBlox
   4. Launch Discord first
   5. Launch AppleBlox
   6. Launch Roblox
   7. Join a game
   ```

5. **Firewall Issues**
   - Check macOS Firewall settings
   - System Preferences > Security & Privacy > Firewall
   - If enabled, allow AppleBlox and Discord

6. **Network Issues**
   - RPC uses local connection
   - Some VPNs may interfere
   - Try disabling VPN temporarily

**Still Not Working?**
- Check AppleBlox logs for RPC errors
- Verify Discord API is accessible
- Ask in Discord for help

---

### Getting Help

#### Log Files

**Location:**
```
~/Library/Application Support/AppleBlox/logs/
```

**What's in Logs:**
- App startup and initialization
- Feature activations
- Errors and warnings
- Roblox launch process
- Mod application steps
- Network requests
- System information

**How to View:**
1. Misc panel > Click "View Logs"
2. Opens logs folder in Finder
3. Open latest log file (highest number or newest date)
4. Use Console.app or TextEdit to view

**Reading Logs:**
```
[2024-01-15 10:30:45] [INFO] AppleBlox started (v0.9.0-dev.27)
[2024-01-15 10:30:46] [DEBUG] Data directory: /Users/username/Library/Application Support/AppleBlox
[2024-01-15 10:30:47] [INFO] Loaded 3 mods from mods directory
[2024-01-15 10:30:50] [ERROR] Failed to apply mod: ModName - File not found
```

- **[INFO]** - Normal operations
- **[DEBUG]** - Detailed debugging info
- **[WARN]** - Warnings (non-critical issues)
- **[ERROR]** - Errors (critical problems)

#### Export Settings/Logs

For support requests, export your configuration:

1. **Create Export**
   - Misc panel
   - Click "Export Settings"
   - Warning dialog appears
   - Click "Export"

2. **What's Included:**
   - Last 10 log files
   - All configuration JSON files
   - System information
   - Roblox installation details

3. **File Location:**
   - Saved to Desktop or Downloads
   - Format: `abloxconfig-VERSION-DATE.zip`
   - Example: `abloxconfig-0.9.0-dev.27-20240115.zip`

4. **When to Use:**
   - Asking for support in Discord
   - Reporting GitHub issues
   - Troubleshooting complex problems

> **⚠️ Privacy:** The ZIP contains your settings and logs. Don't share publicly - only with trusted support members.

#### Discord Support

**AppleBlox Discord Server:**
- Link: [appleblox.com/discord](https://appleblox.com/discord)
- Active community
- Moderators and developers available
- Mod sharing and discussions

**Before Asking for Help:**

1. **Check FAQ** (below)
2. **Search Discord** - Your question may be answered
3. **Try Troubleshooting** section first
4. **Gather Information:**
   - AppleBlox version
   - macOS version
   - What you were doing when issue occurred
   - Error messages (if any)
   - Screenshots if relevant

**How to Ask:**

```
❌ Bad: "It doesn't work help"

✅ Good:
"I'm using AppleBlox v0.9.0-dev.27 on macOS 13.2 (M1 Mac).
When I click Play, Roblox doesn't launch. I have delegation enabled.
I checked logs and see this error: [paste error].
I've tried reinstalling Roblox. Any ideas?"
```

**Support Channels:**
- #help - General help
- #mods - Mod-related questions
- #bug-reports - Report bugs
- #suggestions - Feature requests

#### GitHub Issues

**When to Use GitHub:**
- You found a bug
- You have a feature request
- You want to contribute code

**Creating an Issue:**

1. Visit: [github.com/AppleBlox/appleblox/issues](https://github.com/AppleBlox/appleblox/issues)
2. Click "New Issue"
3. Choose template:
   - Bug Report
   - Feature Request
4. Fill out template completely
5. Attach logs/screenshots if relevant

**Good Bug Report:**
- Describe what you expected
- Describe what actually happened
- Steps to reproduce
- System information
- Logs/errors

---

## Technical Reference

### File Locations

Complete reference of AppleBlox file locations:

#### Application Files

| Path | Description |
|------|-------------|
| `/Applications/AppleBlox.app` | Main application bundle |
| `/Applications/Roblox.app` | Roblox installation |

#### Data Directory

**Base:** `~/Library/Application Support/AppleBlox/`

| Subdirectory | Purpose |
|--------------|---------|
| `config/` | Settings files (JSON) |
| `mods/` | User-installed mods |
| `cache/mods/Resources/` | Backup of original Roblox files |
| `cache/fonts/` | Custom font storage |
| `cache/mod-previews/` | Cached mod preview images |
| `cache/icon-previews/` | Cached icon previews |
| `cache/original-icon/` | Original app icon backup |
| `logs/` | Application logs (up to 10) |
| `theme.css` | Custom CSS theme file |

#### Roblox Files

| Path | Description |
|------|-------------|
| `/Applications/Roblox.app/Contents/Resources/` | Where mods are applied |
| `~/Library/Preferences/com.roblox.Roblox/ClientAppSettings.json` | FastFlags |
| `/Applications/Roblox.app/Contents/MacOS/RobloxPlayer` | Roblox executable |

#### Temporary Files

| Path | Description |
|------|-------------|
| `/tmp/appleblox_bootstrapper.pid` | Bootstrap PID file |

---

### Settings Reference

#### Settings File Format

Settings are stored as JSON files in:
```
~/Library/Application Support/AppleBlox/config/
```

**File per Panel:**
- `integrations.json` - Discord RPC, notifications
- `roblox.json` - Launch behavior, multi-instance
- `engine.json` - Graphics, FastFlags
- `mods.json` - Mod settings
- `appearance.json` - Icon, theme settings
- `misc.json` - System tools settings

**Hierarchical Structure:**

Format: `panel.category.setting`

Example `mods.json`:
```json
{
  "builtin": {
    "custom_font": "/path/to/font.ttf"
  },
  "general": {
    "enabled": false,
    "fix_res": false
  }
}
```

#### Panel-Based Organization

Each panel's settings are self-contained:

**Integrations Panel:**
```json
{
  "rpc": {
    "enabled": true,
    "show_game": true,
    "show_time": true,
    "join_button": false
  },
  "sdk": {
    "enabled": false,
    "rpc_control": false
  },
  "notifications": {
    "server_location": true
  }
}
```

**Roblox Panel:**
```json
{
  "behavior": {
    "delegate": true,
    "return_website": false,
    "exit_on_close": false,
    "disable_desktop": false
  },
  "updates": {
    "background": false
  },
  "multi": {
    "enabled": false
  }
}
```

#### Manual Editing

Advanced users can edit settings files directly:

1. **Quit AppleBlox** - Settings are loaded on startup
2. **Navigate to config folder**
3. **Edit JSON files** with text editor
4. **Ensure valid JSON** - Use validator if needed
5. **Save and launch AppleBlox**

> **⚠️ Warning:** Invalid JSON will reset to defaults. Always backup before editing.

**JSON Validator:**
- [JSONLint](https://jsonlint.com)
- VS Code with JSON extension
- Most text editors have JSON validation

#### Backup Settings

**Manual Backup:**
```bash
# Backup entire config folder
cp -r ~/Library/Application\ Support/AppleBlox/config/ ~/Desktop/appleblox-config-backup/
```

**Restore:**
```bash
# Restore from backup
cp -r ~/Desktop/appleblox-config-backup/* ~/Library/Application\ Support/AppleBlox/config/
```

**Via AppleBlox:**
- Use "Export Settings" in Misc panel
- Creates ZIP with all configs and logs
- Extract to restore

---

### Command Line Options

Advanced users can launch AppleBlox with custom options:

#### Data Directory Override

**Via CLI Argument:**
```bash
/Applications/AppleBlox.app/Contents/MacOS/AppleBlox --data-dir=/custom/path
```

**Via Environment Variable:**
```bash
export APPLEBLOX_DATA_DIR="/custom/path"
/Applications/AppleBlox.app/Contents/MacOS/AppleBlox
```

**Use Cases:**
- Portable installations
- Testing without affecting main config
- Multiple isolated environments
- Network/shared storage

**Directory Will Contain:**
- Same structure as default data directory
- Independent mods, config, cache
- Separate logs

#### Development Mode

**Enable Dev Panel:**

**Option 1 - Environment:**
```bash
# Run from source
cd /path/to/appleblox
bun run dev
```

**Option 2 - File Marker:**
```bash
# Create marker file
touch ~/adevmode

# Restart AppleBlox
# Dev panel appears in sidebar
```

**What You Get:**
- Dev panel in sidebar
- UI component testing
- Notification testing
- System operation testing
- Debug information

---

## Community & Contributing

### Credits

AppleBlox is made possible by amazing contributors!

#### Core Team

**Developers:**

- **OrigamingWasTaken**
  - Maintainer and main developer
  - GitHub: [@OrigamingWasTaken](https://github.com/OrigamingWasTaken)
  - Creator of AppleBlox

- **Satalights** - Moderator & Tester
- **allFiction** - Moderator & Tester
- **TrisecTroop** - Moderator & Tester
- **n.u.g** - Moderator & Tester
- **atomic** - Tester & Support

#### Artists & Designers

- **BakaTheSussy**
  - Designer of Liquid Glass icon set
  - Created beautiful icon variants

- **typeofnull**
  - Designer of current AppleBlox logo
  - Brand identity

- **abyzal.**
  - Designer of original AppleBlox logo
  - Early branding

#### Technologies

**Core Stack:**
- **[NeutralinoJS](https://neutralino.js.org)** - Lightweight C++ framework
- **[Svelte](https://svelte.dev)** - Reactive UI framework
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript
- **[Bun](https://bun.sh)** - Fast JavaScript runtime

**UI Components:**
- **[shadcn-svelte](https://shadcn-svelte.com)** - Component library
- **[TailwindCSS](https://tailwindcss.com)** - Utility-first CSS
- **[Lucide](https://lucide.dev)** - Icon library
- **[Icons8](https://icons8.com)** - Additional icons

---

### Community Resources

#### Discord Server

Join our active community!

**Link:** [appleblox.com/discord](https://appleblox.com/discord)

**What We Offer:**
- 💬 General chat and discussion
- 🎮 Gaming together
- 🎨 Mod showcase and sharing
- ❓ Help and support
- 🐛 Bug reports
- 💡 Feature suggestions
- 📢 Update announcements

**Channels:**
- `#welcome` - Introduce yourself
- `#general` - General chat
- `#help` - Get assistance
- `#mods` - Share and discuss mods
- `#showcase` - Show off your customizations
- `#bug-reports` - Report issues
- `#suggestions` - Propose features
- `#announcements` - Updates and news

**Rules:**
- Be respectful and kind
- No spam or self-promotion
- Stay on-topic in channels
- Follow Discord ToS
- Help others when you can

#### GitHub Repository

**Link:** [github.com/AppleBlox/appleblox](https://github.com/AppleBlox/appleblox)

**What's There:**
- 📦 Source code
- 📥 Releases and downloads
- 🐛 Issue tracker
- 📝 Documentation
- 🔀 Pull requests
- ⭐ Star to show support!

**Repository Structure:**
```
appleblox/
├── frontend/           # Svelte UI code
│   └── src/
│       └── windows/
│           ├── main/   # Main window
│           └── bootstrapper/
├── scripts/            # Build scripts
│   └── build/
│       ├── ts/         # TypeScript builders
│       └── sidecar/    # Native binaries
├── tests/              # Unit tests
└── docs/               # Documentation
```

#### GameBanana

**Link:** [gamebanana.com/games/2879](https://gamebanana.com/games/2879)

**Browse Mods:**
- Texture packs
- UI themes
- Sound replacements
- Skin collections

**Popular Categories:**
- Visual mods
- Audio mods
- Complete overhauls
- Themed collections

**Using GameBanana:**
1. Browse or search for mods
2. Read descriptions and requirements
3. Check ratings and comments
4. Download mod ZIP
5. Extract and install in AppleBlox

---

### Contributing

Want to help make AppleBlox better? We'd love your contribution!

#### Reporting Bugs

**Before Reporting:**
1. Check if it's already reported: [GitHub Issues](https://github.com/AppleBlox/appleblox/issues)
2. Try latest version - bug may be fixed
3. Search Discord - may be known issue

**How to Report:**

1. **Go to Issues:** github.com/AppleBlox/appleblox/issues
2. **Click "New Issue"**
3. **Choose "Bug Report" template**
4. **Fill Out Template:**
   - **Describe the bug**: What happened vs. what you expected
   - **Steps to reproduce**: Numbered list of exact steps
   - **Environment**: macOS version, AppleBlox version, Mac model
   - **Logs**: Export and attach (Misc panel > Export Settings)
   - **Screenshots**: If visual bug

**Example Bug Report:**

```markdown
## Bug Description
Discord RPC doesn't update when switching games

## Steps to Reproduce
1. Enable Discord RPC in Integrations panel
2. Launch Roblox through AppleBlox
3. Join Game A
4. Discord shows "Playing Game A" ✓
5. Leave and join Game B
6. Discord still shows "Playing Game A" ✗

## Expected Behavior
Discord should update to "Playing Game B"

## Environment
- AppleBlox: v0.9.0-dev.27
- macOS: 13.2 (Ventura)
- Mac: MacBook Pro M1 2021

## Logs
Attached: abloxconfig-0.9.0-dev.27-20240115.zip
```

#### Feature Requests

**Before Requesting:**
1. Check existing requests
2. Discuss in Discord first
3. Consider if it fits AppleBlox's scope

**How to Request:**

1. **New Issue** > **Feature Request**
2. **Describe Feature:**
   - What it does
   - Why it's useful
   - How you envision it working
3. **Provide Examples:**
   - Screenshots from other apps
   - Mockups (if you can make them)
4. **Explain Use Case:**
   - When would you use it?
   - Who else would benefit?

**Good Feature Request:**

```markdown
## Feature Name
Icon Pack Support

## Description
Allow users to install icon packs (folders with multiple .icns files)
instead of uploading one icon at a time.

## Use Case
I have a collection of 20+ icons. Currently I need to:
1. Upload each one individually
2. Takes 5+ minutes
3. Clutters the icon manager

With icon packs:
1. Download pack ZIP
2. Import entire pack at once
3. Icons appear in a group/category

## Examples
- Similar to how mods work (folder-based)
- Could have /icons/PackName/ structure
- Preview all icons in pack before applying

## Who Benefits
- Users with large icon collections
- Icon designers sharing multiple variants
- Anyone who likes to switch icons frequently
```

#### Code Contributions

**Getting Started:**

1. **Fork Repository** on GitHub
2. **Clone Your Fork:**
   ```bash
   git clone https://github.com/YourUsername/appleblox.git
   cd appleblox
   ```

3. **Install Dependencies:**
   ```bash
   bun install
   ```

4. **Create Branch:**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

**Development:**

1. **Run Dev Server:**
   ```bash
   bun run dev
   ```

2. **Make Changes:**
   - Write clean, documented code
   - Follow existing code style
   - Add comments where needed

3. **Test Changes:**
   ```bash
   bun test                # Run unit tests
   bun run build:arm64     # Test build
   ```

4. **Commit:**
   ```bash
   git add .
   git commit -m "feat: add icon pack support"
   # or
   git commit -m "fix: Discord RPC not updating"
   ```

   Commit format: `type: description`
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation
   - `style:` Code formatting
   - `refactor:` Code restructuring
   - `test:` Tests
   - `chore:` Maintenance

**Submitting Pull Request:**

1. **Push to Your Fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open Pull Request:**
   - Go to original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill out PR template

3. **PR Template:**
   ```markdown
   ## Description
   Brief description of changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Testing
   How you tested the changes

   ## Screenshots
   If UI changes
   ```

**Code Guidelines:**

- **TypeScript:** Use types, avoid `any`
- **Comments:** Explain complex logic
- **Formatting:** Run `bun run format` before committing
- **Testing:** Add tests for new features
- **Documentation:** Update docs if needed

**Review Process:**

1. Maintainers review PR
2. May request changes
3. Make requested changes
4. Push updates to same branch
5. Once approved, PR is merged!

#### Documentation Improvements

**How to Help:**

1. **Fix Typos/Errors:**
   - Edit docs directly on GitHub
   - Submit PR with corrections

2. **Add Examples:**
   - Code snippets
   - Configuration examples
   - Step-by-step guides

3. **Write Tutorials:**
   - Beginner guides
   - Advanced techniques
   - Video tutorials (link in docs)

4. **Translate:**
   - Help translate docs to other languages
   - Contact maintainers for coordination

**Documentation Files:**
- `DOCUMENTATION.md` - This file!
- `CLAUDE.md` - Project instructions
- Code comments
- GitHub wiki

---

## FAQ

### General Questions

**Q: Is AppleBlox free?**
A: Yes! AppleBlox is completely free and open-source under GPL-3.0 license.

**Q: Is AppleBlox safe?**
A: Yes. The source code is public on GitHub. You can review it yourself or build from source.

**Q: Will I get banned for using AppleBlox?**
A: AppleBlox doesn't modify game files or provide unfair advantages. Mods are client-side visual changes only. Many users have used it safely for months.

**Q: Does AppleBlox work on Windows or Linux?**
A: No, AppleBlox is macOS-only. For Windows, check out [Bloxstrap](https://github.com/pizzaboxer/bloxstrap).

**Q: Can I use AppleBlox and official Roblox together?**
A: Yes! You can have both installed. Use AppleBlox to launch for extra features, or launch Roblox directly for vanilla experience.

**Q: Does AppleBlox collect my data?**
A: No. AppleBlox doesn't collect, transmit, or store any personal data. Everything stays on your Mac.

### Installation & Setup

**Q: Which version should I download?**
A:
- Apple Silicon (M1/M2/M3): Download arm64
- Intel Mac: Download x64
- Not sure: Download universal (works on both)

**Q: AppleBlox says "damaged and can't be opened"**
A: macOS security blocking downloaded apps. Remove quarantine:
```bash
xattr -cr /Applications/AppleBlox.app
```

**Q: Do I need to install Roblox separately?**
A: No! AppleBlox can download and install Roblox for you. Just click the Install button.

**Q: Can I move AppleBlox after installing?**
A: Keep it in `/Applications/` for best compatibility. Some features (like icon changing) require it to be in Applications folder.

**Q: How do I update AppleBlox?**
A: Download the latest version and replace the old app in Applications folder. Your settings and mods are preserved (stored in Library).

### Features

**Q: How do I enable multi-instance?**
A: Behavior panel > Enable "Multi-Instance" toggle > Click "New Instance" button to open additional windows.

**Q: Can I use custom FastFlags?**
A: Yes! Engine panel > FastFlags Editor. But be careful - wrong flags can break Roblox.

**Q: How do I add custom fonts to Roblox?**
A: Mods panel > Built-in Modifications > Choose Font File > Select your .ttf/.otf/.ttc file.

**Q: Can I create my own icon?**
A: Yes! Create or convert an icon to .icns format, then Appearance panel > Upload Icon.

**Q: Does Discord RPC work with all games?**
A: Yes, but it shows generic "Playing Roblox" for most games. Some games with Bloxstrap SDK support can customize the presence.

### Mods

**Q: Are Bloxstrap mods compatible?**
A: Yes! Bloxstrap and AppleBlox use the same mod system. Any Bloxstrap mod works in AppleBlox.

**Q: Can mods get me banned?**
A: Client-side visual mods are generally safe. They don't modify game files or provide advantages. Use at your own discretion.

**Q: Why aren't my mods showing in-game?**
A:
1. Check "Enable Mods" is ON
2. Check individual mod toggle is ON
3. Restart Roblox after enabling
4. Verify mod file structure is correct

**Q: Can I use multiple mods at once?**
A: Yes! Enable as many as you want. If they conflict (modify same file), later mods (alphabetically) override earlier ones.

**Q: How do I remove a mod?**
A: Either disable the toggle, or delete the folder from ~/Library/Application Support/AppleBlox/mods/

**Q: Do mods affect performance?**
A: Usually no, but extremely high-resolution textures might. Monitor with Activity Monitor if concerned.

### Technical

**Q: Where are my settings stored?**
A: `~/Library/Application Support/AppleBlox/config/` (JSON files)

**Q: How do I reset AppleBlox to default?**
A: Delete: `~/Library/Application Support/AppleBlox/` and restart app.

**Q: Can I use custom data directory?**
A: Yes, for advanced use cases:
```bash
export APPLEBLOX_DATA_DIR="/custom/path"
```

**Q: How do I view logs?**
A: Misc panel > View Logs, or navigate to: `~/Library/Application Support/AppleBlox/logs/`

**Q: How do I backup my settings?**
A: Misc panel > Export Settings (creates ZIP), or manually copy the AppleBlox folder.

### Troubleshooting

**Q: Roblox crashes on launch**
A: Try:
1. Disable mods
2. Reset FastFlags (delete ClientAppSettings.json)
3. Reinstall Roblox
4. Check logs for errors

**Q: Discord RPC not showing**
A: Ensure:
1. Discord is running before Roblox
2. RPC enabled in Integrations panel
3. Discord activity privacy enabled
4. Restart both apps

**Q: Mods not applying**
A: Verify:
1. Mods enabled in panel
2. Folder structure mirrors Roblox's structure
3. Roblox restarted after enabling
4. Check logs for mod errors

**Q: Multi-instance not working**
A:
1. Make sure toggle is enabled
2. "New Instance" button appears when enabled
3. Each instance needs time to start
4. Check system resources (RAM/CPU)

**Q: App running slow after adding mods**
A:
1. Disable unused mods
2. Use lower resolution textures
3. Close other apps
4. Monitor with Activity Monitor

### Community

**Q: How do I report a bug?**
A: GitHub Issues with bug report template, or Discord #bug-reports channel.

**Q: Can I request features?**
A: Yes! GitHub Issues with feature request template, or discuss in Discord #suggestions.

**Q: How can I contribute?**
A: Fork on GitHub, make changes, submit pull request. See Contributing section above.

**Q: Where can I get help?**
A: Discord server (fastest), GitHub issues, or check this documentation.

**Q: Can I donate to support development?**
A: AppleBlox is free and doesn't accept donations. Best support is using it, reporting bugs, and spreading the word!

---

## Quick Reference

### Essential Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Launch Roblox | Click Play button (sidebar) |
| Force Close | Hover Play > Click Kill |
| Open Settings Panel | Click panel name (sidebar) |
| Refresh Mods | Mods panel > Refresh button |

### Important Paths

| Location | Path |
|----------|------|
| AppleBlox App | `/Applications/AppleBlox.app` |
| Data Directory | `~/Library/Application Support/AppleBlox/` |
| Mods Folder | `~/Library/Application Support/AppleBlox/mods/` |
| Config Files | `~/Library/Application Support/AppleBlox/config/` |
| Logs | `~/Library/Application Support/AppleBlox/logs/` |
| Roblox App | `/Applications/Roblox.app` |
| Roblox Resources | `/Applications/Roblox.app/Contents/Resources/` |
| FastFlags | `~/Library/Preferences/com.roblox.Roblox/ClientAppSettings.json` |

### Quick Commands

**Remove quarantine:**
```bash
xattr -cr /Applications/AppleBlox.app
```

**Open data directory:**
```bash
open ~/Library/Application\ Support/AppleBlox/
```

**View logs:**
```bash
open ~/Library/Application\ Support/AppleBlox/logs/
```

**Reset settings:**
```bash
rm -rf ~/Library/Application\ Support/AppleBlox/config/
```

---

## Changelog

### Version 0.9.0-dev.27 (Current)

**Features:**
- Icon manager with 3D preview effects
- Mod manager with visual grid and previews
- Bundled icon system
- Install button when Roblox not detected
- Staged download progress (0-20% prep, 20-100% download)
- Custom font support
- Discord Rich Presence
- Multi-instance support
- FastFlags editor
- Custom theme CSS editor

**Improvements:**
- Improved download progress tracking
- Better shell command escaping
- Enhanced mod preview system
- 3D card hover effects

**Bug Fixes:**
- Fixed app portability issues
- Improved file-size polling for downloads
- Fixed mod preview image caching

---

## License

AppleBlox is licensed under the **GNU General Public License v3.0**.

**What this means:**
- ✅ Free to use
- ✅ Free to modify
- ✅ Free to distribute
- ✅ Source code is public
- ⚠️ Modifications must also be GPL-3.0
- ⚠️ No warranty provided

Full license: [github.com/AppleBlox/appleblox/blob/main/LICENSE](https://github.com/AppleBlox/appleblox/blob/main/LICENSE)

---

## Final Notes

Thank you for using AppleBlox! 🎉

This launcher is made with ❤️ by the community, for the community. Whether you're customizing your Roblox experience with mods, showing off your activity on Discord, or pushing your Mac's limits with multi-instance gaming, AppleBlox has you covered.

**Remember:**
- Join our [Discord](https://appleblox.com/discord) for support and community
- Star us on [GitHub](https://github.com/AppleBlox/appleblox) to show support
- Share AppleBlox with friends who play Roblox on Mac
- Report bugs to help us improve
- Have fun gaming! 🎮

---

**Documentation Version:** 1.0
**Last Updated:** January 2024
**AppleBlox Version:** 0.9.0-dev.27

*This documentation covers all features available in AppleBlox as of version 0.9.0-dev.27. Features may change in future updates.*
