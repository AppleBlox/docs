# Creating Custom Mods

Learn how to create your own Roblox mods for AppleBlox.

## Mod Structure

### Basic Requirements

1. **Folder** - Create a folder with your mod name
2. **Subdirectories** - Match Roblox's structure
3. **Files** - Add your custom files in correct locations

### Example Mod Structure

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

## Finding Files to Replace

### Locate Roblox Resources

```
/Applications/Roblox.app/Contents/Resources/
```

### Explore with Finder

1. Open Finder
2. Navigate to Applications
3. Right-click Roblox.app
4. Select "Show Package Contents"
5. Open Contents > Resources
6. Browse directories to find files to replace

### Common Locations

| Type | Location | Examples |
|------|----------|----------|
| **UI Icons** | `assets/` | Close button, menu icons |
| **Textures** | `content/textures/` | Materials, terrain, particles |
| **Sounds** | `content/sounds/` | Click, hover, notification sounds |
| **Fonts** | `content/fonts/` | UI fonts |

### Tips

- Look for image files (.png) for visual mods
- Sound files (.mp3, .ogg) for audio mods
- Maintain same file format as original
- Match dimensions for images (or use higher res)

## File Formats

### Supported Formats

| Type | Formats | Notes |
|------|---------|-------|
| **Images** | PNG, JPG, JPEG | PNG recommended for transparency |
| **Sounds** | MP3, OGG, WAV | Match original format when possible |
| **Fonts** | TTF, OTF | Use Custom Font feature instead |

### Image Guidelines

- **PNG** for images with transparency (icons, UI)
- **JPG** for photos/textures without transparency
- Higher resolution is better (scales down nicely)
- **Retina displays**: Use 2x dimensions
  - Original 32x32 → Use 64x64 for Retina
  - Original 512x512 → Use 1024x1024 for Retina

## Testing Your Mod

### Testing Process

1. **Create Mod Folder**
   - Make folder in `~/Library/Application Support/AppleBlox/mods/`
   - Name it descriptively

2. **Add Files**
   - Copy your custom files into correct subdirectories
   - Match Roblox's folder structure exactly

3. **Enable in AppleBlox**
   - Open AppleBlox > Mods panel
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

### Troubleshooting

- If changes don't appear, check file paths match exactly
- Verify file formats are supported
- Try refreshing mods list
- Check logs for errors

6. **Iterate**
   - Make adjustments to your files
   - Restart Roblox to see changes
   - No need to disable/enable each time

## Sharing Your Mod

Once your mod works:

1. **Create ZIP** - Compress your mod folder
2. **Write Description** - Features, compatibility
3. **Include Screenshots** - Preview images or video
4. **Upload** - GameBanana or share in Discord
5. **Credit Assets** - If you used any

## Quick Reference

**Roblox Resources:**
```
/Applications/Roblox.app/Contents/Resources/
```

**Mods Directory:**
```
~/Library/Application Support/AppleBlox/mods/
```

**Structure Must Match:**
Your mod's folder structure must exactly match Roblox's Resources structure for files to be replaced correctly.
