# File Locations

Complete reference of AppleBlox file locations.

## Application Files

| Path | Description |
|------|-------------|
| `/Applications/AppleBlox.app` | Main application bundle |
| `/Applications/Roblox.app` | Roblox installation |

## Data Directory

**Base Location:**
```
~/Library/Application Support/AppleBlox/
```

### Subdirectories

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

## Roblox Files

| Path | Description |
|------|-------------|
| `/Applications/Roblox.app/Contents/Resources/` | Where mods are applied |
| `~/Library/Preferences/com.roblox.Roblox/ClientAppSettings.json` | FastFlags configuration |
| `/Applications/Roblox.app/Contents/MacOS/RobloxPlayer` | Roblox executable |

## Temporary Files

| Path | Description |
|------|-------------|
| `/tmp/appleblox_bootstrapper.pid` | Bootstrap PID file |

## Environment Variables

### APPLEBLOX_DATA_DIR

Override the default data directory location:

```bash
export APPLEBLOX_DATA_DIR="/custom/path"
```

## Quick Access Commands

### Open Data Directory

```bash
open ~/Library/Application\ Support/AppleBlox/
```

### Open Mods Folder

```bash
open ~/Library/Application\ Support/AppleBlox/mods/
```

### View Logs

```bash
open ~/Library/Application\ Support/AppleBlox/logs/
```

### Reset Settings

```bash
rm -rf ~/Library/Application\ Support/AppleBlox/config/
```

### Complete Reset

::: danger Warning
This deletes all your mods, settings, and customizations!
:::

```bash
rm -rf ~/Library/Application\ Support/AppleBlox/
```

## Related Pages

- [Settings Reference](/reference/settings)
- [Command Line Options](/reference/cli)
- [System Tools](/guide/features/misc)
