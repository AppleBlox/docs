# Managing Mods

Learn how to enable, disable, and organize your installed mods.

## Enable/Disable Mods

### Master Toggle

**"Enable Mods"** switch in Mods panel
- Controls ALL mods at once
- When OFF: Original Roblox files used (mods not applied)
- When ON: All enabled mods are applied during launch

### Individual Mod Toggles

Each mod has its own enable/disable switch:

- Located on the mod card in Mods Manager
- Green (ON) = Mod will be applied
- Gray (OFF) = Mod is skipped during launch

### How it Works Internally

**Enabled mods:**
```
ModName/
```

**Disabled mods:**
```
ModName.disabled/
```

AppleBlox only loads folders without `.disabled` suffix. Toggling renames the folder automatically.

## Mod Information

Each mod card displays:

### Preview Images

- Up to 3 images from the mod
- Stacked in 3D effect with rotation
- Automatically detected from mod files
- Supported formats: PNG, JPG, JPEG, WEBP

### Asset Count

- Total number of files in the mod
- Excludes system files (.DS_Store)
- Indicator of mod size/complexity

### Folder Size

- Total mod size in MB
- Helps manage disk space
- Large mods (>100MB) may impact launch time

### Name

- Mod folder name
- Shown at top of mod card

## Organizing Mods

### Folder Naming

Use descriptive names for easy identification:

**Good Examples:**
- `DarkTheme_UI`
- `CartoonTextures_2023`
- `MinimalIcons_v2`
- `01_BaseMod`
- `02_ThemeMod`

**Avoid:**
- Special characters that might cause issues
- Extremely long names
- Names with spaces at start/end

### Load Order (Conflict Resolution)

When multiple mods modify the same file:

**Alphabetical Loading:**
1. `AAA_FirstMod/` - Loaded first
2. `BBB_SecondMod/` - Overrides AAA if conflicts
3. `ZZZ_LastMod/` - Has final say on any conflicts

**Later mods override earlier mods!**

### Best Practices

1. **Prefix with Numbers** - Explicit order:
   ```
   01_Base/
   02_Theme/
   03_Icons/
   ```

2. **Keep Related Mods Together** - Similar naming:
   ```
   Theme_Dark_UI/
   Theme_Dark_Icons/
   Theme_Dark_Sounds/
   ```

3. **Disable Instead of Delete** - Easy to re-enable:
   - Toggle OFF rather than removing
   - Mod stays installed but isn't applied
   - Can re-enable anytime

## Removing Mods

### To Delete a Mod

#### Via Finder:

1. Open mods folder (Mods panel > Open Folder)
2. Drag mod folder to Trash
3. Empty Trash

#### Clean Up:

1. Return to AppleBlox
2. Click **Refresh** in Mods panel
3. Mod disappears from grid

### To Temporarily Disable

**Better Option:**
- Use the toggle switch instead of deleting
- Mod stays installed but isn't applied
- Can re-enable anytime without re-downloading
- Doesn't lose preview images or metadata

## Mod Conflicts

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

## Refreshing Mods List

**When to Refresh:**
- After adding new mods manually
- After deleting mods via Finder
- If mod previews don't load
- To recalculate sizes and asset counts

**How to Refresh:**
1. Click **"Refresh"** button in Mods panel
2. AppleBlox re-scans the mods directory
3. Previews are regenerated
4. Sizes are recalculated

## Mod Actions

### Open Folder

**"Open Folder"** button
- Opens mods directory in Finder
- Location: `~/Library/Application Support/AppleBlox/mods/`
- Quick access to add/remove mods

### Refresh

**"Refresh"** button
- Reloads mod list
- Updates preview images
- Recalculates sizes and asset counts

## Performance Optimization

### Managing Large Mod Collections

If you have many mods:

1. **Disable Unused Mods** - Only enable what you need
2. **Remove Old Mods** - Delete mods you don't use
3. **Monitor Sizes** - Large mods take longer to apply
4. **Organize by Purpose** - Group related mods

### Launch Time Optimization

**Large mods slow launch:**
- Each mod adds files to copy
- High-res textures take longer
- Many small files slower than few large files

**Solutions:**
- Disable mods you don't actively use
- Choose optimized mod versions
- Combine related mods into one folder

## Backup and Restore

### Backup Mods

**Manual Backup:**
```bash
# Backup all mods
cp -r ~/Library/Application\ Support/AppleBlox/mods/ ~/Desktop/appleblox-mods-backup/
```

**Before Major Changes:**
- Before updating AppleBlox
- Before trying experimental mods
- Before merging mods

### Restore Mods

**From Backup:**
```bash
# Restore all mods
cp -r ~/Desktop/appleblox-mods-backup/* ~/Library/Application\ Support/AppleBlox/mods/
```

**In AppleBlox:**
- Click Refresh after restoring
- Re-enable mods as needed

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
6. Copy backup to `Roblox.app/Contents/Resources/`
7. Restart Roblox

#### Option 3: Reinstall Roblox

Worst case scenario:
1. Delete Roblox.app
2. Use AppleBlox Install button to re-download
3. Fresh Roblox installation

## Best Practices Summary

1. **Use Toggle Instead of Delete** - Easy to re-enable
2. **Name Mods Descriptively** - Know what each does
3. **Control Load Order** - Prefix with numbers
4. **Disable Unused Mods** - Better performance
5. **Backup Before Changes** - Safety net
6. **Regular Cleanup** - Remove old/unused mods

## Related Guides

- [Installing Mods](/mods/installing) - How to install
- [Creating Mods](/mods/creating) - Make your own
- [Troubleshooting](/mods/troubleshooting) - Fix issues
