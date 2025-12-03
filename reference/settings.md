# Settings Reference

Technical reference for AppleBlox settings files.

## Settings File Format

Settings are stored as JSON files in:
```
~/Library/Application Support/AppleBlox/config/
```

### File per Panel

- `integrations.json` - Discord RPC, notifications
- `roblox.json` - Launch behavior, multi-instance
- `engine.json` - Graphics, FastFlags
- `mods.json` - Mod settings
- `appearance.json` - Icon, theme settings
- `misc.json` - System tools settings

### Hierarchical Structure

Format: `panel.category.setting`

## Configuration Files

### integrations.json

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

### roblox.json

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

### engine.json

```json
{
  "graphics": {
    "api": "default",
    "fps_unlock": false,
    "separate_quality": false,
    "quality_level": 10,
    "lod": true,
    "fractional_fix": true,
    "debug_skybox": false
  },
  "fastflags": {}
}
```

### mods.json

```json
{
  "builtin": {
    "custom_font": null
  },
  "general": {
    "enabled": false,
    "fix_res": false
  }
}
```

## Manual Editing

Advanced users can edit settings files directly:

### Process

1. **Quit AppleBlox** - Settings are loaded on startup
2. **Navigate to config folder**
3. **Edit JSON files** with text editor
4. **Ensure valid JSON** - Use validator if needed
5. **Save and launch AppleBlox**

::: warning Important
Invalid JSON will reset to defaults. Always backup before editing.
:::

### JSON Validation

- [JSONLint](https://jsonlint.com)
- VS Code with JSON extension
- Most text editors have JSON validation

## Backup and Restore

### Backup Settings

```bash
# Backup entire config folder
cp -r ~/Library/Application\ Support/AppleBlox/config/ ~/Desktop/appleblox-config-backup/
```

### Restore Settings

```bash
# Restore from backup
cp -r ~/Desktop/appleblox-config-backup/* ~/Library/Application\ Support/AppleBlox/config/
```

### Via AppleBlox

- Use "Export Settings" in Misc panel
- Creates ZIP with all configs and logs
- Extract to restore

## Related Pages

- [File Locations](/reference/file-locations)
- [Command Line Options](/reference/cli)
- [System Tools](/guide/features/misc)
