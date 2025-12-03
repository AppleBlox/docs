# Installing Mods

Learn how to install Roblox mods in AppleBlox.

## Method 1: Drag and Drop (Recommended)

The easiest way to install mods!

### Steps

#### 1. Open Mods Directory

1. Open AppleBlox
2. Go to **Mods** panel
3. Click **"Open Folder"** button
4. Finder opens to: `~/Library/Application Support/AppleBlox/mods/`

#### 2. Download Mod

1. Visit GameBanana or other source
2. Download mod (usually a .zip file)
3. Save to your Downloads folder

#### 3. Extract Mod

1. Double-click the .zip file to extract
2. You should get a folder with the mod's name
3. The folder contains subdirectories (assets/, content/, etc.)

#### 4. Install Mod

1. Drag the extracted mod folder into the mods directory
2. The folder should be directly in the mods folder
3. Not in a subdirectory!

**Correct:**
```
~/Library/Application Support/AppleBlox/mods/
└── MyAwesomeMod/
    ├── assets/
    └── content/
```

**Incorrect:**
```
~/Library/Application Support/AppleBlox/mods/
└── MyAwesomeMod/
    └── MyAwesomeMod/  ← Extra nested folder
        ├── assets/
        └── content/
```

#### 5. Verify Installation

1. Return to AppleBlox
2. Click **"Refresh"** in Mods panel
3. Your mod appears in the grid!

#### 6. Enable and Launch

1. Toggle on **"Enable Mods"** master switch
2. Toggle on your specific mod
3. Click **"Play"** to launch Roblox
4. Join a game to see your mod in action!

## Method 2: Manual Installation

For users comfortable with Finder:

### Navigate to Mods Folder

1. Open Finder
2. Click "Go" menu
3. Select "Go to Folder..."
4. Enter: `~/Library/Application Support/AppleBlox/mods/`
5. Press Enter

### Copy Mod

1. Download and extract mod as usual
2. Copy the mod folder
3. Paste into the mods directory

### Refresh AppleBlox

1. Open AppleBlox Mods panel
2. Click Refresh button
3. Mod appears automatically

## Common Installation Issues

### Mod Not Appearing

**Possible causes:**

1. **Incorrect Location**
   - ✅ Verify mod is in `~/Library/Application Support/AppleBlox/mods/`
   - ❌ Not in subdirectory or wrong location

2. **Not a Directory**
   - ✅ Mod must be a folder, not a file
   - ❌ Don't put .zip files in mods folder (extract first)

3. **Needs Refresh**
   - Click **Refresh** button in Mods panel

### Double-Nested Folders

Some mods come with an extra folder layer:

**Downloaded:**
```
ModName.zip
└── ModName/
    └── ModName/
        ├── assets/
        └── content/
```

**Solution:**
1. Extract the ZIP
2. Open the first folder
3. Drag the **inner** folder to mods directory
4. Skip the outer wrapper folder

### Wrong File Structure

If mod files are loose:

**Wrong:**
```
MyMod/
├── xbutton_32.png
├── menu.png
└── click.mp3
```

**Needs to be:**
```
MyMod/
├── assets/
│   └── xbutton_32.png
└── content/
    ├── textures/
    │   └── ui/
    │       └── menu.png
    └── sounds/
        └── click.mp3
```

::: tip
Check the mod's README or description for proper structure. Most good mods include installation instructions.
:::

## Testing Your Installation

### Quick Test

1. **Enable Mods** - Turn ON "Enable Mods" toggle
2. **Enable Specific Mod** - Turn ON the mod's toggle
3. **Launch Roblox** - Click Play button
4. **Join Game** - Join any game
5. **Look for Changes** - Check if textures/sounds changed

### Verify Mod Applied

**Check Common Files:**
- **UI Elements** - Look at close buttons, menus
- **Textures** - Check terrain, materials
- **Sounds** - Listen for click sounds

### If Changes Don't Appear

1. **Master Toggle** - Verify "Enable Mods" is ON
2. **Mod Toggle** - Verify specific mod is ON
3. **Restart Roblox** - Close and relaunch Roblox
4. **Check Logs** - Misc panel > View Logs for errors
5. **File Structure** - Verify mod structure is correct

## Multiple Mods

### Installing Multiple Mods

You can install as many mods as you want:

1. Install each mod in its own folder
2. Each folder goes in the mods directory
3. Enable/disable individually

**Example:**
```
~/Library/Application Support/AppleBlox/mods/
├── DarkTheme/
├── HDTextures/
├── CustomSounds/
└── MinimalUI/
```

### Load Order

Mods load alphabetically by folder name:

```
AAA_FirstMod/     ← Loads first
BBB_SecondMod/    ← Overrides AAA if conflicts
ZZZ_LastMod/      ← Has final say
```

**Control Order:**
- Prefix with numbers: `01_Base`, `02_Theme`, `03_Icons`
- Later mods override earlier ones

## Next Steps

After installing:

1. [Managing Mods](/mods/managing) - Enable, disable, organize
2. [Troubleshooting](/mods/troubleshooting) - Fix issues
3. [Creating Mods](/mods/creating) - Make your own

## Quick Reference

**Mods Location:**
```
~/Library/Application Support/AppleBlox/mods/
```

**Quick Install:**
1. Download mod ZIP
2. Extract ZIP
3. Drag folder to mods directory
4. Refresh in AppleBlox
5. Enable mod and launch Roblox
