# Frequently Asked Questions

Common questions about AppleBlox.

## General Questions

### Is AppleBlox free?

Yes! AppleBlox is completely free and open-source under GPL-3.0 license.

### Is AppleBlox safe?

Yes. The source code is public on GitHub. You can review it yourself or build from source.

### Will I get banned for using AppleBlox?

AppleBlox doesn't modify game files or provide unfair advantages. Mods are client-side visual changes only. Many users have used it safely for months.

### Does AppleBlox work on Windows or Linux?

No, AppleBlox is macOS-only. For Windows, check out [Bloxstrap](https://github.com/pizzaboxer/bloxstrap).

### Can I use AppleBlox and official Roblox together?

Yes! You can have both installed. Use AppleBlox to launch for extra features, or launch Roblox directly for vanilla experience.

### Does AppleBlox collect my data?

No. AppleBlox doesn't collect, transmit, or store any personal data. Everything stays on your Mac.

## Installation & Setup

### Which version should I download?

- **Apple Silicon (M1/M2/M3/M4)**: Download arm64
- **Intel Mac**: Download x64
- **Not sure**: Download universal (works on both)

### AppleBlox says "damaged and can't be opened"

macOS security is blocking downloaded apps. Remove quarantine:

```bash
xattr -cr /Applications/AppleBlox.app
```

### Do I need to install Roblox separately?

No! AppleBlox can download and install Roblox for you. Just click the Install button.

### Can I move AppleBlox after installing?

Keep it in `/Applications/` for best compatibility. Some features (like icon changing) require it to be in Applications folder.

### How do I update AppleBlox?

Download the latest version and replace the old app in Applications folder. Your settings and mods are preserved (stored in Library).

## Features

### How do I enable multi-instance?

Behavior panel > Enable "Multi-Instance" toggle > Click "New Instance" button to open additional windows.

### Can I use custom FastFlags?

Yes! Engine panel > FastFlags Editor. But be careful - wrong flags can break Roblox.

### How do I add custom fonts to Roblox?

Mods panel > Built-in Modifications > Choose Font File > Select your .ttf/.otf/.ttc file.

### Can I create my own icon?

Yes! Create or convert an icon to .icns format, then Appearance panel > Upload Icon.

### Does Discord RPC work with all games?

Yes, but it shows generic "Playing Roblox" for most games. Some games with Bloxstrap SDK support can customize the presence.

## Mods

### Are Bloxstrap mods compatible?

Yes! Bloxstrap and AppleBlox use the same mod system. Any Bloxstrap mod works in AppleBlox.

### Can mods get me banned?

Client-side visual mods are generally safe. They don't modify game files or provide advantages. Use at your own discretion.

### Why aren't my mods showing in-game?

Check:
1. "Enable Mods" is ON
2. Individual mod toggle is ON
3. Roblox has been restarted after enabling
4. Mod file structure is correct

### Can I use multiple mods at once?

Yes! Enable as many as you want. If they conflict (modify same file), later mods (alphabetically) override earlier ones.

### How do I remove a mod?

Either disable the toggle, or delete the folder from `~/Library/Application Support/AppleBlox/mods/`

### Do mods affect performance?

Usually no, but extremely high-resolution textures might. Monitor with Activity Monitor if concerned.

## Technical

### Where are my settings stored?

`~/Library/Application Support/AppleBlox/config/` (JSON files)

### How do I reset AppleBlox to default?

Delete: `~/Library/Application Support/AppleBlox/` and restart app.

### Can I use custom data directory?

Yes, for advanced use cases:

```bash
export APPLEBLOX_DATA_DIR="/custom/path"
```

### How do I view logs?

Misc panel > View Logs, or navigate to: `~/Library/Application Support/AppleBlox/logs/`

### How do I backup my settings?

Misc panel > Export Settings (creates ZIP), or manually copy the AppleBlox folder.

## Troubleshooting

### Roblox crashes on launch

Try:
1. Disable mods
2. Reset FastFlags (delete ClientAppSettings.json)
3. Reinstall Roblox
4. Check logs for errors

### Discord RPC not showing

Ensure:
1. Discord is running before Roblox
2. RPC enabled in Integrations panel
3. Discord activity privacy enabled
4. Restart both apps

### Mods not applying

Verify:
1. Mods enabled in panel
2. Folder structure mirrors Roblox's structure
3. Roblox restarted after enabling
4. Check logs for mod errors

### Multi-instance not working

1. Make sure toggle is enabled
2. "New Instance" button appears when enabled
3. Each instance needs time to start
4. Check system resources (RAM/CPU)

## Community

### How do I report a bug?

GitHub Issues with bug report template, or Discord #bug-reports channel.

### Can I request features?

Yes! GitHub Issues with feature request template, or discuss in Discord #suggestions.

### How can I contribute?

Fork on GitHub, make changes, submit pull request. See [Contributing](/community/contributing) section.

### Where can I get help?

Discord server (fastest), GitHub issues, or check this documentation.

### Can I donate to support development?

AppleBlox is free and doesn't accept donations. Best support is using it, reporting bugs, and spreading the word!

## Still Have Questions?

- [Discord Community](https://appleblox.com/discord)
- [GitHub Issues](https://github.com/AppleBlox/appleblox/issues)
- [Full Documentation](/guide/introduction)
