# Appearance

Customize AppleBlox's look with custom icons and themes.

## Icon Customization

Change the AppleBlox app icon to personalize your experience!

### Icon Manager

The icon manager features:

- **Icon Library** - Pre-installed icons to choose from
- **Upload Custom** - Add your own .icns files
- **3D Preview** - Interactive card effects on hover
- **One-Click Apply** - Select and apply instantly
- **Bundled Icons** - Special icons (marked with 📌 pin)
- **Delete Custom** - Remove uploaded icons

### How to Use Icons

#### Select from Library

1. Browse the icon grid
2. Click an icon card to select it
3. Selected icon shows blue border
4. Hover to see 3D rotation effect

#### Upload Custom Icon

1. Click **"Upload Icon"** button
2. Select a .icns file from your Mac
3. Icon is cached and added to library
4. Select and apply like any other icon

#### Apply Icon

- Selected icon is marked with blue border
- Icon is automatically applied to AppleBlox.app
- Changes visible immediately in Dock and Finder
- Original icon is backed up automatically

#### Delete Custom Icons

- Click the 🗑️ trash icon on custom icons
- Bundled icons show 📌 pin instead (can't delete)
- Original icon can't be deleted
- Confirmation dialog before deletion

### Icon Types

| Type | Description | Can Delete? |
|------|-------------|-------------|
| **Original** | Default AppleBlox icon | ❌ No |
| **Bundled** | Pre-installed icons (with pin) | ❌ No |
| **Custom** | User-uploaded icons | ✅ Yes |

::: info Installation Location
Icon customization only works when AppleBlox is installed in `/Applications/` or `~/Applications/`.
:::

### Included Icon Sets

**Liquid Glass Icons** (designed by BakaTheSussy):
- clear_dark.icns
- clear_light.icns
- dark.icns
- tinted_dark.icns
- tinted_light.icns

### Creating Custom Icons

To create your own .icns file:

1. **Create PNG images** at various sizes:
   - 16x16, 32x32, 64x64, 128x128, 256x256, 512x512, 1024x1024
2. **Use Icon Composer** or online tools
3. **Export as .icns** format
4. **Upload** via AppleBlox icon manager

**Online Tools:**
- [CloudConvert](https://cloudconvert.com/png-to-icns)
- [iConvert Icons](https://iconverticons.com/online/)

## Theme System

Customize the AppleBlox UI with custom CSS!

### Theme Editor

Features:
- **CSS Editor** - Text area for custom CSS
- **Apply/Save** - Apply changes to UI immediately
- **Open in Editor** - Open theme.css in your default text editor
- **Refresh** - Reload theme from file

### How to Use Themes

#### Edit in AppleBlox

1. Paste or type CSS in the text area
2. Click **"Apply"** to see changes instantly
3. Changes are saved to `theme.css`

#### Edit Externally

1. Click **"Open CSS File"**
2. Edit in your favorite editor (VS Code, Sublime, etc.)
3. Save the file
4. Click **"Refresh"** in AppleBlox to reload

### Theme File Location

```
~/Library/Application Support/AppleBlox/theme.css
```

### Example Custom CSS

#### Change Primary Color

```css
:root {
  --primary: 200 100% 50%; /* HSL values */
  --primary-foreground: 0 0% 100%;
}
```

#### Custom Button Styles

```css
.button {
  border-radius: 12px;
  font-weight: 600;
}
```

#### Sidebar Background

```css
.sidebar {
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
}
```

### Available CSS Variables

```css
:root {
  /* Colors (HSL format) */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 221.2 83.2% 53.3%;

  /* Measurements */
  --radius: 0.5rem;
}
```

::: tip Discovering Variables
Inspect the app with browser dev tools to discover all available CSS variables!
:::

## Font Customization

For customizing fonts **inside Roblox** (not AppleBlox UI), see the [Mods Features](/mods/introduction#custom-font) section.

To customize **AppleBlox UI fonts**, use custom CSS:

```css
body {
  font-family: 'SF Pro Display', -apple-system, sans-serif;
}

h1, h2, h3 {
  font-family: 'SF Pro Display', -apple-system, sans-serif;
  font-weight: 700;
}
```

## Theme Examples

For complete theme examples and color schemes, visit the [Custom Themes](/guide/advanced/themes) guide.

## Related Guides

- [Custom Themes Deep Dive](/guide/advanced/themes) - Advanced theming guide
- [Mods Introduction](/mods/introduction) - For in-game customization
