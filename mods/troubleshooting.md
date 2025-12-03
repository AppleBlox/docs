# Mods Troubleshooting

Solutions to common mod-related issues.

## Mod Not Appearing in Mods Manager

### Possible Causes

1. **Incorrect Location**
   - ✅ Verify mod is in `~/Library/Application Support/AppleBlox/mods/`
   - ❌ Not in subdirectory or wrong location

2. **Not a Directory**
   - ✅ Mod must be a folder, not a file
   - ❌ Don't put .zip files in mods folder (extract first)

3. **Needs Refresh**
   - Click **Refresh** button in Mods panel
   - Mods Manager re-scans directory

### Fix

1. Open Mods panel
2. Click "Open Folder"
3. Verify your mod folder is there
4. Return to AppleBlox
5. Click Refresh button
6. Mod should appear

## Mod Not Working In-Game

### Checklist

1. **Master Toggle Enabled?**
   - Check **"Enable Mods"** is ON in Mods panel

2. **Individual Mod Enabled?**
   - Check your mod's toggle is ON (green)
   - Disabled mods have gray toggle and `.disabled` suffix

3. **Roblox Restarted?**
   - Mods are applied during launch
   - Restart Roblox after enabling mods

4. **Correct File Structure?**
   - Files must be in correct subdirectories
   - Match Roblox's structure exactly

### Example Issue

**Wrong:**
```
MyMod/
└── xbutton_32.png
```

**Correct:**
```
MyMod/
└── assets/
    └── xbutton_32.png
```

5. **File Format Compatible?**
   - Use PNG for images with transparency
   - Match original file format

## Conflicts Between Mods

### Symptoms

- Only some mod changes appear
- Unexpected textures showing
- Missing elements

### Cause

Multiple mods modify the same file - later mods override earlier ones.

### Solutions

#### 1. Check Load Order

- Mods load alphabetically
- Rename folders to control order
- Example: `01_Base`, `02_Overlay`

#### 2. Disable Conflicting Mods

- Toggle off one mod at a time
- Identify which mod is causing conflict
- Decide which to keep enabled

#### 3. Merge Mods (Advanced)

- Manually combine mod files
- Copy files from both mods into one folder
- Choose which version of conflicting files to keep

## Restoring Original Files

### If Mods Break Roblox

#### Option 1: Disable Mods

1. Turn OFF **"Enable Mods"** toggle
2. Restart Roblox
3. Original files are restored automatically

#### Option 2: Manual Restoration

If toggle doesn't work:

1. Quit Roblox
2. Open Finder
3. Navigate to: `/Applications/Roblox.app/Contents/`
4. Delete "Resources" folder
5. Check if backup exists:
   ```
   ~/Library/Application Support/AppleBlox/cache/mods/Resources/
   ```
6. Copy backup to Roblox.app/Contents/Resources/
7. Restart Roblox

#### Option 3: Reinstall Roblox

Worst case scenario:
- Delete Roblox.app
- Use AppleBlox Install button to re-download

## Performance Issues

### Symptoms

- Roblox runs slower
- Longer launch times
- Frame rate drops

### Possible Causes

1. **Large Mods** - High-res textures use more VRAM
2. **Many Mods Active** - Each mod adds files to copy
3. **Legacy Resolution** - May impact performance if enabled unnecessarily

### Optimization Tips

- Keep only essential mods enabled
- Use optimized texture sizes (2048x2048 max)
- Disable **Legacy Resolution** unless required
- Monitor performance with Activity Monitor

## Getting Help

If you're still having issues:

1. **Check Logs** - Misc panel > View Logs
2. **Export Settings** - For sharing with support
3. **Ask Discord** - [AppleBlox Discord](https://appleblox.com/discord)
4. **Report Bug** - [GitHub Issues](https://github.com/AppleBlox/appleblox/issues)

### When Asking for Help

Provide:
- AppleBlox version
- macOS version
- Mod name/source
- Steps to reproduce
- Screenshots if applicable
- Log files (use Export Settings)
