# Integrations

The Integrations panel manages how AppleBlox connects with external services like Discord.

## Discord Rich Presence

Discord Rich Presence displays your Roblox activity on your Discord profile in real-time. Your friends can see what game you're playing and, with the join button enabled, can join your game directly.

Make sure Discord is running before you launch Roblox through AppleBlox. The integration updates automatically without manual configuration.

### Customizing Your Presence

Control what information appears on your Discord profile:

**Rich Presence** displays that you're playing Roblox.

**Game Activity** shows the specific game you're playing (for example, "Playing Adopt Me!").

**Play Time** adds a timer showing how long you've been playing.

**Join Button** lets friends join your current game directly. This only works for public servers. AppleBlox respects your Roblox privacy settings, so friends can't join private servers even with this enabled.

::: tip Privacy Settings
Your Roblox privacy settings are respected. Friends can't use the join button to enter private servers or if your join settings are restricted.
:::

### Setup

1. Launch Discord
2. Open AppleBlox and enable Rich Presence in the Integrations panel
3. Launch Roblox through AppleBlox
4. Join a game

Your Discord status will update automatically.

### Troubleshooting

If Discord RPC isn't working:

1. **Check Discord is Running** - Must be running before launching Roblox
2. **Enable Settings** - All RPC toggles should be ON
3. **Discord Privacy Settings**:
   - Discord > Settings > Activity Privacy
   - Enable "Display current activity as a status message"
4. **Restart Apps**:
   ```
   1. Quit Discord
   2. Quit Roblox
   3. Quit AppleBlox
   4. Launch Discord first
   5. Launch AppleBlox
   6. Launch Roblox
   ```

## Bloxstrap SDK Integration

AppleBlox supports the Bloxstrap SDK for enhanced game integration.

### Settings

**Enable SDK** (default: OFF)
- Enables Bloxstrap SDK compatibility features
- Allows games to communicate with AppleBlox

**Discord RPC Control** (default: OFF)
- Lets SDK-compatible games customize your Discord presence
- Games can set custom status messages and images
- Requires "Enable SDK" to be ON

### What Games Can Do with SDK

- Customize Discord presence text
- Change activity images
- Update status in real-time based on game events
- Send notifications to AppleBlox

::: warning Security
Only enable SDK for games you trust, as they can control your Discord presence.
:::

## Notifications

### Server Location Notification

**Server Location Notification** (default: ON)
- Shows the geographic location of the game server when you join
- Example: "Connected to server in United States (Virginia)"
- Helps identify server regions for latency optimization

### Notification Settings

AppleBlox uses macOS native notifications. You can configure these in:

**System Preferences:**
1. System Preferences > Notifications
2. Find AppleBlox in the list
3. Configure notification style and behavior

**In AppleBlox:**
- Misc panel > Notification Sounds
- Misc panel > Alternative Notifications (for compatibility)

## Related Settings

- [Notification Sounds](/guide/features/misc#notification-sounds) - Enable sound effects
- [Alternative Notifications](/guide/features/misc#alternative-notifications) - Compatibility mode
