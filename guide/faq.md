# FAQ

## General

### Does AppleBlox work on Windows or Linux?

No. AppleBlox is macOS-only. The application uses many OSX-only utilities that would be hard to adapt on other operating systems.

For Windows, check out [Bloxstrap](https://github.com/pizzaboxer/bloxstrap), the project that inspired AppleBlox. For Linux, you can use [Sober](https://sober.vinegarhq.org/).

### Which macOS versions does AppleBlox support?

AppleBlox requires macOS 10.13 (High Sierra), although macOS 13+ is recommended. If you're using a version older than macOS 11, you can access AppleBlox through your web browser using the dedicated button to avoid a critical bug affecting the desktop app.

### What is arm64, x64, and Universal?

- **arm64** is for Apple Silicon chips (M1, M2, M3, M4, etc.). These are the "M" series chips.
- **x64** is for older Intel-based Macs. These are the devices that don't use the "M" series chips.
- **Universal** contains both the x64 and arm64 binaries. It is recommended to always use the specific binary per version.

To find out which you have, click the Apple logo at the top left of your screen and choose "About This Mac."

### Is my Roblox cookie safe?

Your `.ROBLOSECURITY` cookie is:

- Stored in the **macOS Keychain** (encrypted, local to your device).
- Only sent to official `roblox.com` domains.
- Automatically **redacted from log files** to prevent accidental leaks.
- Never stored in plaintext anywhere on disk.

### Do I need a macOS admin account?

No. AppleBlox works with standard macOS user accounts. No admin privileges are required for normal usage.

### Can I get banned for using AppleBlox?

AppleBlox does not inject code into Roblox or modify game behavior at runtime. It replaces resource files (textures, fonts) and writes configuration flags, the same mechanisms Roblox itself uses.

### Why do I see a newer version available when I already have the latest?

The newer versions you're seeing are **development builds**, which are typically less stable than official releases. While they include the latest features, they may contain bugs. You can download development builds from the [nightly builds](https://appleblox.com/download/dev).

### Why are features removed from AppleBlox?

Features may be removed for two main reasons:

1. The feature doesn't work properly anymore.
2. Roblox has removed or changed something it depended on.

FastFlag presets are settings created by Roblox engineers for Roblox's internal use, not by AppleBlox. Roblox can remove or modify them at any time.

### How do I update AppleBlox?

Download the latest DMG from the [GitHub releases page](https://github.com/AppleBlox/appleblox/releases) and replace the existing app in your Applications folder. Your settings, mods, and account data are stored separately in `~/Library/Application Support/AppleBlox/` and won't be affected.

### How do I export my settings?

In AppleBlox, press `Commmand + P`. This will open a dialog prompting you to export your settings.

The exported `.zip` file contains all your configs and logs, which is also useful when reporting bugs.

### Where is my data stored?

All AppleBlox data lives in `~/Library/Application Support/AppleBlox/`:

| Path | Contents |
|------|----------|
| `mods/` | Your installed mods |
| `cache/` | Mod backups, font cache, game cache |
| `logs/` | Application log files |
| `config/` | Settings JSON files |
| `icons/` | Custom app icons |

See [File Locations](/reference/file-locations) for a full reference.

### How do I report a bug or suggest a feature?

Join the [AppleBlox Discord server](https://discord.gg/appleblox) or open an issue on the [GitHub repository](https://github.com/AppleBlox/appleblox/issues).

## Installation Issues

### I can't open the app

There are several macOS Gatekeeper errors you might encounter:

**"macOS cannot verify the developer of AppleBlox"**

1. Click the Apple menu and open **System Settings**.
2. Click **Privacy & Security** in the sidebar.
3. Scroll to the Security section and click **Open**.
4. Click **Open Anyway**.

::: tip
The "Open Anyway" button is only available for about an hour after you try to open the app. If you missed it, try opening the app again first.
:::

**"AppleBlox Not Opened"** or **"App Is Damaged"**

This is caused by macOS Gatekeeper placing the app in quarantine. To fix it:

1. Press **Cmd + Space**, type "terminal", and press **Enter**.
2. Copy and paste this command:
   ```bash
   curl https://appleblox.com/helper | bash
   ```
3. Press **Enter**.

AppleBlox should launch automatically after completing these steps. You can also read the `Install Guide.rtf` file inside the DMG if you continue having issues.

Alternatively, you can right-click on the app and select "Open" from the context menu.

## Performance

### Why is my game lagging when using AppleBlox?

There are three main reasons:

1. **Hardware limitations** - If your computer is older or has lower specs, you may experience lag. FastFlags are development features used by Roblox engineers. They're not magic FPS boosters.
2. **AppleBlox issue** - If you have a capable computer but still experience lag, please report the bug on the [Discord server](https://discord.gg/appleblox).

::: warning
Do not copy/paste flags you don't understand, especially massive lists of "FPS" flags that YouTubers often promote. Many of these are placebo effects at best, and might contain invalid flags that Roblox has deprecated.
:::

### Best graphics API for performance

**For Apple Silicon Macs (M1/M2/M3/M4):** The best Graphics API for performance is **Metal**. OpenGL allows you to go above the 240 fps limit, but will negatively impact your performance.

## FastFlags

### Why don't my FastFlags work?

Roblox introduced a server-side whitelist for FastFlags. Many previously working flags are now silently ignored. This is a Roblox-side change, not an AppleBlox bug.

### AppleBlox launches without my mods or flags

1. **Try relaunching Roblox** - This commonly happens if Roblox has an update and needs to be configured first.
2. If the above doesn't work, try toggling the flags/mods on and off.

## Mods

### Crash error with loading mods

If you're experiencing crashes when loading mods in the latest version, this is an issue with AppleBlox attempting to restore Roblox's Original Resources.

**Solution:** Simply reinstall Roblox by running the Roblox installer in the app again.

### How to install mods

Installing mods in AppleBlox works essentially the same as in Bloxstrap:

1. Extract the mod file (`.zip` or `.7z`).
2. If the extraction creates a `content` folder or any other folder from the compressed file, place it in another folder named after the mod (or any name you prefer).
3. Put this folder into the AppleBlox mods folder, which can be accessed by:
   - Going to "Mods" in the AppleBlox sidebar
   - Clicking "Open Folder"

## Other

### Region selection isn't finding servers in my preferred region

Not all games have servers in every region. Server availability depends on the game's popularity and Roblox's infrastructure. If no server is found in your preferred region, AppleBlox falls back to Roblox's default assignment.

### How can I join private servers / Roblox URLs with AppleBlox?

You need to enable the **Delegate Launching** setting inside the **Behavior** tab in AppleBlox. Without this, clicking Roblox links will open Roblox directly and bypass AppleBlox. See [Delegate Launching](/guide/launching#delegate-launching) for details.

### Multi-instance not working

Multi-instance is very buggy, unsupported, and no longer actively maintained. Roblox has been cracking down on multi-instance methods, so it may not work. Refer to the [AppleBlox Discord server](https://discord.gg/appleblox) for community-sourced alternatives. No official support is provided for these methods.

### Delegate launching isn't intercepting Roblox links

Make sure **Delegate launching to AppleBlox** is enabled under **Behavior**. If another app (like Roblox itself) re-registered as the URL handler, toggling the setting off and on again will re-register AppleBlox.
