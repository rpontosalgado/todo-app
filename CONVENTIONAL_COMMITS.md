# Conventional Commits Setup

This project is now configured with conventional commits using:

- **husky** - Git hooks for linting
- **commitlint** - Validates commit messages against Conventional Commits standard

## Setup Steps Completed

1. ✅ Installed dependencies (`husky`, `@commitlint/cli`, `@commitlint/config-conventional`)
2. ✅ Configured husky to run `prepare` script
3. ✅ Added commit-msg hook that runs `commitlint`
4. ✅ Created `commitlint.config.js` with conventional config

## Commit Message Format

```
<type>[optional scope]: [optional gitmoji] <description>

[optional body]

[optional footer(s)]
```

## Supported Types

- `feat` - New features (✨)
- `fix` - Bug fixes (🐛)
- `docs` - Documentation (📝)
- `style` - Code style changes (🎨)
- `refactor` - Code refactoring (♻️)
- `perf` - Performance improvements (⚡)
- `test` - Tests (✅)
- `build` - Build system changes (📦️)
- `ci` - CI/CD changes (👷)
- `chore` - Other changes (🔧)

## Example Commits

```
feat: ✨ add login button
fix(auth): 🐛 token validation
refactor: optimize data fetching
docs: update README
```

## VSCode Extension (Optional)

Install the [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) extension for better IDE support.
