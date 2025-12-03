# Engine Settings

Fine-tune graphics, performance, and advanced Roblox settings.

## Graphics API Selection

Choose the rendering backend for Roblox:

### Available Options

| API | Best For | Notes |
|-----|----------|-------|
| **Default** | Automatic selection | Let Roblox choose |
| **Metal** | Apple Silicon | Apple's native graphics API |
| **Vulkan** | Cross-platform | Good compatibility |
| **OpenGL** | FPS unlock | Required for FPS unlock |

### Recommendations

::: tip Recommended Settings
- **Apple Silicon Macs**: Use **Metal** for best performance
- **Intel Macs**: Try **Metal** first, use **Vulkan** if issues occur
- **FPS Unlock**: Must use **OpenGL**
:::

## Graphics Settings

### Remove Frame Rate Limit

**Remove frame rate limit** (default: OFF)
- Unlocks the 60 FPS cap on macOS Roblox
- ⚠️ **Requires OpenGL graphics API**
- ⚠️ **May cause stability issues in some games**
- Can significantly increase GPU usage and heat

### Separate Quality & Distance

**Separate Quality & Distance** (default: OFF)
- Splits graphics quality from render distance
- Adds a quality slider (1-10) when enabled
- Allows high quality at lower render distances
- ⚠️ **May not work in all games** (e.g., Apocalypse Rising 2)

### Graphics Quality Slider

**Graphics Quality Slider** (when separation enabled)
- Control visual quality independent of distance
- Range: 1 (lowest) to 10 (highest)
- Lower values improve performance

### Level-of-Detail

**Level-of-detail** (default: ON)
- Reduces detail for distant objects
- Improves performance with minimal visual impact
- Recommended: Keep enabled

### Fractional Scaling Fix

**Fractional Scaling Fix** (default: ON)
- Renders at full resolution when using fractional display scaling
- Prevents blurry text and UI elements
- Essential for Retina displays

### Debug Skybox

**Debug Skybox** (default: OFF)
- Replaces the sky with a simple gray color
- Useful for testing and troubleshooting graphics issues

## FastFlags Editor

Access Roblox's internal configuration flags for advanced customization.

### What are FastFlags?

FastFlags (Feature Flags) are Roblox's internal configuration system. They control:

- Graphics rendering options
- Performance optimizations
- Experimental features
- Debug settings
- Network behavior

### How to Use

1. Click **"FastFlags Editor"** button in Engine panel
2. The editor opens showing current flags
3. Add new flags with the "Add Flag" button
4. Edit values in the table
5. Changes are saved to `ClientAppSettings.json`
6. Restart Roblox for changes to take effect

### Editor Features

- **Flag Table** - View all active flags
- **Add Flag** - Add custom flags by name and value
- **Edit Values** - Click cells to modify
- **Delete Flags** - Remove flags you don't need
- **Documentation Link** - Links to Roblox FFlag Tracker

::: warning Important Warnings
- Incorrect flags can break Roblox or cause crashes
- Roblox maintains an allowlist - not all flags work
- Some flags are experimental and may change
- Back up your settings before experimenting
:::

### Resources

- [Roblox FFlag Tracker](https://github.com/MaximumADHD/Roblox-FFlag-Tracker) - Comprehensive flag documentation
- Test flags in small increments
- Join AppleBlox Discord for flag recommendations

### Common Useful Flags

For detailed FastFlag examples and configurations, see the [FastFlags Deep Dive](/guide/advanced/fastflags) guide.

## Performance Optimization

### For Best Performance

1. **Choose Metal API** (Apple Silicon) or **Vulkan** (Intel)
2. **Enable Level-of-Detail** for distant object optimization
3. **Separate Quality & Distance** and lower quality slider
4. **Disable FPS Unlock** unless needed (reduces GPU load)
5. **Use FastFlags** to fine-tune specific optimizations

### For Best Quality

1. **Use Metal API** for native macOS rendering
2. **Separate Quality & Distance** and set quality to 10
3. **Keep Fractional Scaling Fix** enabled for crisp visuals
4. **Test Different FastFlags** for visual enhancements

## Troubleshooting

### Roblox Won't Launch After Flag Changes

If Roblox crashes after adding FastFlags:

1. Delete `~/Library/Preferences/com.roblox.Roblox/ClientAppSettings.json`
2. Restart Roblox
3. Re-add flags one at a time
4. Test after each addition

### Graphics Issues

If you experience:

- **Black screen**: Try different graphics API
- **Crashes**: Remove recent FastFlags
- **Poor performance**: Lower quality settings
- **Blurry UI**: Enable Fractional Scaling Fix

### FPS Unlock Not Working

If FPS unlock doesn't work:

1. **Check Graphics API** - Must be set to OpenGL
2. **Restart Roblox** - Changes require restart
3. **Check Game** - Some games enforce FPS limits
4. **Monitor GPU** - May thermal throttle if too hot

## Related Guides

- [FastFlags Deep Dive](/guide/advanced/fastflags) - Advanced FastFlags guide
- [Troubleshooting](/guide/troubleshooting) - Common issues and solutions
