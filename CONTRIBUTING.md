# Contributing

## Getting started

```bash
git clone https://github.com/celticblast/string-utils.git
cd string-utils
npm install
```

## Development

Run the tests in watch mode while developing:

```bash
npm run test:watch
```

## Adding a new function

1. Add the function to `stringUtils.ts` with a named export
2. Add tests in `stringUtils.test.ts` covering the happy path and edge cases
3. Document it in the `README.md` functions table and usage example
4. Add an entry under `### Added` in `CHANGELOG.md`

## Submitting a pull request

1. Fork the repo and create a branch from `master`
2. Make your changes and ensure all tests pass: `npm test`
3. Open a pull request — CI will run tests and build automatically

## Code style

- No comments unless the reason is non-obvious
- Strict TypeScript — no `any`
- Keep functions pure and side-effect free
