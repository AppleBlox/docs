# AppleBlox Documentation

Official documentation for AppleBlox - Lightweight and fast Roblox launcher for macOS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/AppleBlox/appleblox.git
cd appleblox/docs

# Install dependencies
bun install

# Start development server
bun run docs:dev
```

### Available Scripts

- `bun run docs:dev` - Start development server
- `bun run docs:build` - Build for production
- `bun run docs:preview` - Preview production build

## 📚 Documentation Structure

```
docs/
├── .vitepress/
│   ├── config.ts          # VitePress configuration
│   └── theme/             # Custom theme
│       ├── index.ts
│       └── custom.css
├── guide/                 # User guides
│   ├── introduction.md
│   ├── quick-start.md
│   ├── installation.md
│   └── features/          # Feature documentation
├── mods/                  # Mods guide
│   ├── introduction.md
│   ├── finding.md
│   ├── installing.md
│   ├── managing.md
│   ├── creating.md
│   └── troubleshooting.md
├── reference/             # Technical reference
│   ├── file-locations.md
│   ├── settings.md
│   └── cli.md
├── community/             # Community resources
│   ├── credits.md
│   ├── contributing.md
│   └── resources.md
└── index.md              # Homepage
```

## 🎨 Customization

### Theme

The documentation uses a custom VitePress theme with AppleBlox branding:

- Primary color: Blue (`#3b82f6`)
- Custom CSS variables in `.vitepress/theme/custom.css`
- Responsive design optimized for all devices

### Adding Pages

1. Create a new `.md` file in the appropriate directory
2. Add frontmatter if needed
3. Update `.vitepress/config.ts` sidebar configuration
4. Write content using Markdown

## 🤝 Contributing

We welcome contributions to the documentation!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `bun run docs:dev`
5. Submit a pull request

### Writing Guidelines

- Use clear, concise language
- Include code examples where appropriate
- Add screenshots for UI-related documentation
- Use proper Markdown formatting
- Test all links before submitting

## 📝 Markdown Features

VitePress supports enhanced Markdown features:

### Custom Containers

```md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: info
This is an info box
:::
```

### Code Blocks

````md
```bash
# Commands with syntax highlighting
bun install
```

```typescript
// TypeScript with line numbers
const greeting: string = "Hello, AppleBlox!";
```
````

### Tables

```md
| Feature | Support |
|---------|---------|
| Mods | ✅ |
| Icons | ✅ |
```

## 🔗 Links

- [AppleBlox Main Site](https://appleblox.com)
- [GitHub Repository](https://github.com/AppleBlox/appleblox)
- [Discord Community](https://appleblox.com/discord)
- [VitePress Documentation](https://vitepress.dev)

## 📄 License

GPL-3.0 - See [LICENSE](https://github.com/AppleBlox/appleblox/blob/main/LICENSE) for details.

## 🙏 Acknowledgments

Built with:
- [VitePress](https://vitepress.dev)
- [Vue.js](https://vuejs.org)
- [Vite](https://vitejs.dev)

---

**Documentation Version:** 1.0

**Last Updated:** January 2024

**AppleBlox Version:** 0.9.0-dev.27
