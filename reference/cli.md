# Command Line Options

## Launching AppleBlox

The main executable is located at:

```bash
/Applications/AppleBlox.app/Contents/MacOS/bootstrap
```

## Testing Only: Data Directory Override

::: warning For Developers/Testing Only
These options are for testing and development. Regular users don't need to use them.
:::

For automated tests and development, you can override the data directory:

### Via Environment Variable

```bash
export APPLEBLOX_DATA_DIR="/path/to/test/data"
```

### Via CLI Argument

```bash
--data-dir=/path/to/test/data
```

This isolates test data from your main AppleBlox installation. The custom directory will contain the same structure (mods, config, cache, logs) but completely separate from your normal data.

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
