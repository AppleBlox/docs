# Contributing

Want to help make AppleBlox better? We'd love your contribution!

## Ways to Contribute

1. **Report Bugs** - Found an issue? Let us know!
2. **Suggest Features** - Have ideas? We want to hear them!
3. **Write Code** - Submit pull requests
4. **Improve Docs** - Help make documentation better
5. **Share Mods** - Create and share custom mods
6. **Help Others** - Answer questions in Discord

## Reporting Bugs

### Before Reporting

1. Check if already reported: [GitHub Issues](https://github.com/AppleBlox/appleblox/issues)
2. Try latest version - bug may be fixed
3. Search Discord - may be known issue

### How to Report

1. Go to [GitHub Issues](https://github.com/AppleBlox/appleblox/issues)
2. Click "New Issue"
3. Choose "Bug Report" template
4. Fill out the template completely

### Good Bug Report Example

```markdown
## Bug Description
Discord RPC doesn't update when switching games

## Steps to Reproduce
1. Enable Discord RPC in Integrations panel
2. Launch Roblox through AppleBlox
3. Join Game A
4. Discord shows "Playing Game A" ✓
5. Leave and join Game B
6. Discord still shows "Playing Game A" ✗

## Expected Behavior
Discord should update to "Playing Game B"

## Environment
- AppleBlox: v0.9.0-dev.27
- macOS: 13.2 (Ventura)
- Mac: MacBook Pro M1 2021

## Logs
Attached: abloxconfig-0.9.0-dev.27-20240115.zip
```

## Feature Requests

### Before Requesting

1. Check existing requests
2. Discuss in Discord first
3. Consider if it fits AppleBlox's scope

### How to Request

1. New Issue > Feature Request
2. Describe the feature clearly
3. Explain why it's useful
4. Provide examples or mockups

## Code Contributions

### Getting Started

1. **Fork Repository** on GitHub
2. **Clone Your Fork:**
   ```bash
   git clone https://github.com/YourUsername/appleblox.git
   cd appleblox
   ```

3. **Install Dependencies:**
   ```bash
   bun install
   ```

4. **Create Branch:**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

### Development

1. **Run Dev Server:**
   ```bash
   bun run dev
   ```

2. **Make Changes:**
   - Write clean, documented code
   - Follow existing code style
   - Add comments where needed

3. **Test Changes:**
   ```bash
   bun test                # Run unit tests
   bun run build:arm64     # Test build
   ```

4. **Commit:**
   ```bash
   git add .
   git commit -m "feat: add icon pack support"
   ```

   **Commit format:** `type: description`
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation
   - `style:` Code formatting
   - `refactor:` Code restructuring
   - `test:` Tests
   - `chore:` Maintenance

### Submitting Pull Request

1. **Push to Your Fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open Pull Request** on GitHub
3. Fill out PR template
4. Wait for review

### Code Guidelines

- **TypeScript:** Use types, avoid `any`
- **Comments:** Explain complex logic
- **Formatting:** Run `bun run format` before committing
- **Testing:** Add tests for new features
- **Documentation:** Update docs if needed

## Documentation Improvements

### How to Help

1. **Fix Typos/Errors** - Edit docs directly on GitHub
2. **Add Examples** - Code snippets, configurations
3. **Write Tutorials** - Beginner guides, advanced techniques
4. **Translate** - Help translate docs to other languages

### Documentation Files

- Located in `docs/` directory
- Written in Markdown
- Built with VitePress

## Community Support

### Help Others

- Answer questions in Discord
- Share your knowledge
- Create tutorials or videos
- Share mods and configurations

### Community Guidelines

- Be respectful and kind
- Help others learn
- Share knowledge freely
- Give credit where due

## Recognition

Contributors are recognized in:
- [Credits Page](/community/credits)
- GitHub contributors list
- Release notes (for significant contributions)

## Questions?

- [Discord Community](https://appleblox.com/discord)
- [GitHub Discussions](https://github.com/AppleBlox/appleblox/discussions)
- [Community Resources](/community/resources)

Thank you for contributing to AppleBlox! 🎉
