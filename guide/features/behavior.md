# Roblox Behavior

Configure how Roblox launches and behaves.

## Background Updates

**Background Updates** (default: OFF)
- Automatically keeps Roblox up-to-date without manual intervention
- Downloads and installs updates in the background
- ⚠️ **Requires administrator permissions**

### How it Works

1. Enable the toggle
2. Grant admin access when prompted
3. AppleBlox checks for updates periodically
4. Updates download and install automatically
5. No need to open AppleBlox or Roblox manually

## Launch Behavior

### Delegate Launching to AppleBlox

**Delegate launching to AppleBlox** (default: ON)
- Makes AppleBlox the default handler for `roblox://` URLs
- Allows AppleBlox to configure settings before Roblox launches
- Essential for mods, FastFlags, and other features to work

::: warning Important
This setting must be ON for most AppleBlox features to function properly!
:::

### Return to Website

**Return to website** (default: OFF)
- Automatically opens roblox.com when you close Roblox
- Convenient for browsing games after playing

### Exit AppleBlox When Roblox is Closed

**Exit AppleBlox when Roblox is closed** (default: OFF)
- Automatically quits AppleBlox when Roblox exits
- Useful if you only use AppleBlox as a launcher

### Disable Desktop App

**Disable Desktop app** (default: OFF)
- Automatically closes Roblox when you leave a game
- Prevents Roblox from staying open in the background
- Saves system resources

### Create Launch Shortcut

**Create Launch Shortcut** button
- Creates a desktop shortcut for quick Roblox launching
- Shortcut includes AppleBlox features automatically

## Multi-Instance Support

Run multiple Roblox instances simultaneously!

### Enable Multi-Instance

**Enable Multi-Instance** (default: OFF)
- Patches Roblox to allow multiple instances
- Each instance runs independently
- Perfect for multi-accounting or testing

### How to Use

1. Enable multi-instance toggle
2. Click the **"New Instance"** button (appears when enabled)
3. Each click opens a new Roblox window
4. Each instance can join different games

### Close All Instances

**Close All Instances** button
- Red destructive button to force-close all Roblox windows
- Shows confirmation dialog before proceeding
- Useful for quickly cleaning up multiple instances

::: warning Resource Usage
Each Roblox instance uses ~500MB-2GB of RAM. Running multiple instances can impact performance on lower-end Macs.
:::

### Best Practices

- Close instances you're not using
- Monitor system performance with Activity Monitor
- Consider lowering graphics settings for multiple instances
- Ensure adequate RAM (8GB minimum for 2-3 instances)

### Performance Impact

| Mac Type | 8GB RAM | 16GB RAM | 32GB RAM |
|----------|---------|----------|----------|
| **Apple Silicon** | 2-3 instances | 4-6 instances | 8+ instances |
| **Intel** | 1-2 instances | 2-4 instances | 4-6 instances |

### Use Cases

1. **Multi-Accounting** - Play on multiple accounts simultaneously
2. **Testing** - Test games as developer with multiple clients
3. **Trading** - Trade items between accounts
4. **Recording** - Stream one account, control camera from another

## Troubleshooting

### Deeplinks Not Working

If clicking roblox:// links doesn't work:

1. **Check Delegation** - Ensure "Delegate launching to AppleBlox" is ON
2. **Restart AppleBlox** - Close and reopen the app
3. **Reset Launch Services**:
   ```bash
   /System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -kill -r -domain local -domain system -domain user
   ```
4. Restart your Mac

### Multi-Instance Issues

If multi-instance isn't working:

1. **Toggle is Enabled** - Verify the setting is ON
2. **Use New Instance Button** - Don't manually launch Roblox
3. **Check Resources** - Monitor RAM and CPU usage
4. **Restart AppleBlox** - Close all instances and restart

## Related Features

- [Multi-Instance Setup Guide](/guide/advanced/multi-instance) - Detailed guide
- [Performance Options](/guide/features/engine) - Optimize for multiple instances
