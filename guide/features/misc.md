# System Tools

System settings, notifications, and utility tools.

## System Settings

### Notification Sounds

**Notification Sounds** (default: OFF)
- Enables sound effects for AppleBlox notifications
- Uses system notification sounds
- Applies to server location, updates, etc.

### Alternative Notifications

**Alternative Notifications** (default: OFF)
- Uses AppleScript for notifications instead of native alerts
- More compatible with older macOS versions
- Less detailed but more reliable
- Try this if native notifications don't work

### Fixed Loading Times

**Fixed Loading Times** (default: ON)
- Sets minimum display time for launch progress steps
- Makes the launch process more visible
- Each step shows for at least 100-200ms
- Disable for faster launches (steps may flash too quick to see)

## System Tools

### View Logs

**View Logs** button
- Opens the logs folder in Finder
- Location: `~/Library/Application Support/AppleBlox/logs/`
- Useful for troubleshooting errors

### Export Settings

Create a ZIP archive of configuration and logs for support purposes.

**What's Included:**
- Last 10 log files
- All configuration files
- System information
- Roblox installation details

**How to use:**

1. Click **"Export Settings"** button
2. Warning dialog appears
3. Click **"Export"** to confirm
4. ZIP file is created and folder opens automatically
5. Share with support team if requested

**File Format:**
- Saved to Desktop or Downloads folder
- Filename: `abloxconfig-VERSION-DATE.zip`
- Example: `abloxconfig-0.9.0-dev.27-20240115.zip`

::: warning Privacy Note
The ZIP contains your settings and logs. Don't share publicly - only with trusted support members.
:::

### AppleBlox Folder

**AppleBlox Folder** button
- Opens the main data directory
- Location: `~/Library/Application Support/AppleBlox/`
- Contains mods, config, cache, logs

### Roblox Folder

**Roblox Folder** button
- Opens Roblox installation location
- Location: `/Applications/Roblox.app/`
- Shows Contents > Resources where mods are applied
- Useful for advanced troubleshooting

## Data Management

### Backing Up Settings

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
- Use "Export Settings" button (creates ZIP with everything)

### Reset to Defaults

To reset AppleBlox to default settings:

```bash
# Remove all configuration
rm -rf ~/Library/Application\ Support/AppleBlox/config/

# Remove all data (mods, cache, everything)
rm -rf ~/Library/Application\ Support/AppleBlox/
```

::: danger Warning
This will delete all your mods, settings, and customizations!
:::

## Logs

### Log File Location

```
~/Library/Application Support/AppleBlox/logs/
```

### What's in Logs

- App startup and initialization
- Feature activations
- Errors and warnings
- Roblox launch process
- Mod application steps
- Network requests
- System information

### Reading Logs

```
[2024-01-15 10:30:45] [INFO] AppleBlox started (v0.9.0-dev.27)
[2024-01-15 10:30:46] [DEBUG] Data directory: /Users/username/Library/Application Support/AppleBlox
[2024-01-15 10:30:47] [INFO] Loaded 3 mods from mods directory
[2024-01-15 10:30:50] [ERROR] Failed to apply mod: ModName - File not found
```

**Log Levels:**
- **[INFO]** - Normal operations
- **[DEBUG]** - Detailed debugging info
- **[WARN]** - Warnings (non-critical issues)
- **[ERROR]** - Errors (critical problems)

### Using Logs for Troubleshooting

1. **Reproduce the Issue** - Trigger the problem
2. **Open Latest Log** - Misc panel > View Logs
3. **Search for Errors** - Look for [ERROR] or [WARN]
4. **Copy Relevant Lines** - Share with support
5. **Or Export All** - Use Export Settings button

## Related Guides

- [Troubleshooting](/guide/troubleshooting) - Common issues
- [Getting Help](/guide/troubleshooting#getting-help) - How to get support
- [File Locations Reference](/reference/file-locations) - All file paths
