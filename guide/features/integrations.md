# Integrations

Connect AppleBlox with external services and enhance your gaming experience.

## Discord Rich Presence

Show your Roblox activity on your Discord profile!

### Settings

**Enable Rich Presence** (default: ON)
- Displays that you're playing Roblox on Discord
- Shows real-time updates of your activity

**Game Activity** (default: ON)
- Shows the name of the game you're currently playing
- Example: "Playing Adopt Me!"

**Play Time** (default: ON)
- Displays how long you've been playing
- Updates in real-time

**Join Button** (default: OFF)
- Adds a "Join Game" button to your Discord presence
- Allows friends to join your current game directly
- Only works for public servers

::: tip Privacy
The join button respects your Roblox privacy settings. If you're in a private server, friends won't be able to join.
:::

### How to Use

1. Ensure Discord is running on your Mac
2. Enable Rich Presence in Integrations panel
3. Launch Roblox through AppleBlox
4. Join any game
5. Your Discord status updates automatically!

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
