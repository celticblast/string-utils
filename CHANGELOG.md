# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
