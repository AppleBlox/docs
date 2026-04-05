# Changelog

## 0.9.0

AppleBlox 0.9.0 is a massive update spanning 200+ commits. It brings multi-account management, a redesigned home page, game history tracking, Bloxstrap theme support, and hundreds of fixes and improvements across the entire app.

### New Features

**Multi-Account System**
- Add and manage multiple Roblox accounts within AppleBlox.
- Three ways to log in: auto-detect from the Roblox app, browser login, or manual cookie entry.
- One-click account switching with automatic login handling.
- Accounts are validated on startup — expired or invalid sessions are clearly indicated.
- Credentials are stored securely in the macOS Keychain with a consent prompt before first access.

**Quickplay Home Page**
- The Home page has been redesigned to show your recently played games and full game history.
- Launch games directly from the home page without going through Roblox.
- Rejoin your last server instantly using the sidebar Rejoin button.

**Game History Tracking**
- Every game session is automatically logged with play time, duration, and server region.
- Tracking can be toggled on or off in Integrations settings.

**Bloxstrap Bootstrapper Theme Support**
- Import and use Bloxstrap XAML themes for the bootstrapper loading screen.
- Themes render with full element hierarchy, scaling, and color support.
- See [Appearance](/guide/appearance#bootstrapper-theme) for setup.

**Custom Icon Colors**
- Change the colors of Roblox's in-game UI icons using a color picker.
- Original icons are backed up automatically before changes are applied.

**Redesigned Mods Manager**
- The mods interface now shows stacked preview images of files each mod changes.
- Mod size and file count statistics are visible at a glance.

**Roblox Installation Manager**
- Download Roblox directly from AppleBlox with real-time progress (speed + ETA).
- Automatic detection when Roblox is missing, with a prompt to install.
- Background updates so you're not interrupted mid-session.
- Custom installation path support.
- `Cmd+R` keyboard shortcut to open the install dialog from anywhere.

**Enhanced Region Selection**
- Region selection integrates with your active Roblox account.
- Server lookup through RoValra's datacenter database.
- Optional notifications showing which region you connected to.

**FastFlags Allowlist**
- Roblox now enforces a flag allowlist — AppleBlox validates flags against it.
- Flags not in the allowlist are clearly marked as blocked and will have no effect.
- Invalid presets and deprecated flags have been removed.

**Structured Debug Reports**
- Debug bundle export now includes a machine-readable `summary.txt` with system info, active settings, and recent errors.
- Copy debug report to clipboard directly from the Misc page.
- Documentation button added to the Misc page for quick access to docs.appleblox.com.

**Create Launch Shortcut**
- Create a Desktop `.app` shortcut that launches Roblox through AppleBlox with all settings applied.
- See [Launching Roblox](/guide/launching#create-launch-shortcut) for details.

**FPS Uncapping**
- New virtual display method to remove Roblox's 60 fps framerate limit.
- Enable under **Engine > Remove Frame Rate Limit**.

### Improvements

**Installation & Distribution**
- Switched from DMG to PKG installer for a smoother installation experience.
- Sidecar binaries are now built per-architecture (arm64/x64) for smaller downloads.

**User Interface**
- New settings panel design with cleaner card layouts.
- Sidebar now includes Home and Account navigation icons.
- Improved onboarding flow.
- Fixed alignment issues, pixel gaps, and hover transparency throughout the app.
- Bulk enable/disable switch for FastFlags.
- "Engine" tab replaces the old "FastFlags" name.

**Performance & Stability**
- Logging system completely rewritten with structured log buffer, file-level context, and automatic credential redaction.
- Fixed macOS incorrectly flagging AppleBlox as having crashed on quit.
- Deeplink launching is faster.
- WebView browser login freeze on newer macOS versions fixed.
- NeutralinoJS upgraded to 6.2.0.

**Quality of Life**
- `Cmd+P` to export debug bundle from anywhere in the app.
- `Cmd+R` to open Roblox installer.
- Full app reset option with two-step confirmation.
- Alternative notification system via AppleScript for users where standard notifications don't work.

### Bug Fixes

- Fix macOS crash-on-quit false detection.
- Fix double-launching when using deeplinks from the app.
- Fix transparency viewer hanging after closing AppleBlox.
- Fix FPS uncapping not working correctly.
- Fix mods and custom fonts persisting after removal.
- Fix Quality Distance toggle not applying.
- Fix Roblox path detection across different macOS configurations.
- Fix Discord RPC showing escaped characters in game names.
- Fix notification spam from game events.
- Fix WebView browser login freeze on newer macOS.
- Fix launch error related to mesh files in mods.
- Fix icon colors on macOS 11.
- Fix voice chat issues.

### Removals

- Lightning presets removed (Roblox removed the underlying FastFlags).
- Workshop mod browser temporarily removed.
- `.mesh` file support in mods removed (caused launch errors).
