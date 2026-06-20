# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.3] - 2026-06-20

### Added

- `typecheck` script (`tsc --noEmit`) for type-checking without emitting output
- Test file included in `tsconfig.json` so it is type-checked alongside the source

## [1.0.2] - 2026-06-20

### Added

- Initial npm publish

## [1.0.1] - 2026-06-19

### Added

- `repository`, `homepage`, `bugs`, and `engines` fields to `package.json`
- ESLint with TypeScript support and `lint` script
- Prettier config with `format` and `format:check` scripts
- Format check and lint steps in CI workflow
- `dist/` folder tracked in repo

### Fixed

- Repository URL format normalized to `git+https`

## [1.0.0] - 2026-06-19

### Added

- `trim`, `trimStart`, `trimEnd` — remove whitespace or custom characters from strings
- `pad` — pad a string to a fixed width with alignment support (`start`, `end`, `both`)
- `truncate` — truncate a string from the end with a configurable ellipsis
- `truncateMiddle` — truncate the middle of a string, preserving start and end
- Vitest test suite with 27 tests covering all functions and edge cases
- `vitest.config.ts` for test configuration
- `tsconfig.json` targeting ES2020 with strict mode
- GitHub Actions CI workflow running tests and build on push and PRs
- MIT license

### Fixed

- `truncate` now clips the ellipsis itself when `maxLength` is shorter than the ellipsis length
