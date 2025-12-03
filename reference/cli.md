# Command Line Options

Advanced command-line options for AppleBlox.

## Data Directory Override

### Via CLI Argument

```bash
/Applications/AppleBlox.app/Contents/MacOS/AppleBlox --data-dir=/custom/path
```

### Via Environment Variable

```bash
export APPLEBLOX_DATA_DIR="/custom/path"
/Applications/AppleBlox.app/Contents/MacOS/AppleBlox
```

### Use Cases

- Portable installations
- Testing without affecting main config
- Multiple isolated environments
- Network/shared storage

### Directory Structure

The custom directory will contain the same structure as the default data directory:
- Independent mods, config, cache
- Separate logs
- Isolated from main installation

## Development Mode

### Enable Dev Panel

**Option 1 - Run from Source:**

```bash
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

### What You Get

- Dev panel in sidebar
- UI component testing
- Notification testing
- System operation testing
- Debug information

## Quick Commands

### Remove Quarantine

```bash
xattr -cr /Applications/AppleBlox.app
```

### Open Data Directory

```bash
open ~/Library/Application\ Support/AppleBlox/
```

### View Logs

```bash
open ~/Library/Application\ Support/AppleBlox/logs/
```

### Reset Settings

```bash
rm -rf ~/Library/Application\ Support/AppleBlox/config/
```

## Environment Variables

### APPLEBLOX_DATA_DIR

Override default data directory location.

**Example:**
```bash
export APPLEBLOX_DATA_DIR="$HOME/CustomAppleBlox"
```

## Related Pages

- [File Locations](/reference/file-locations)
- [Settings Reference](/reference/settings)
- [System Tools](/guide/features/misc)
