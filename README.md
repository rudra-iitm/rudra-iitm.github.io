# Portfolio

A modern, cinematic portfolio built with React 19, TanStack Start, and Tailwind CSS v4.

## Code Style
This repository enforces a strict **"No comments"** policy.
- No block comments.
- No inline comments.
- Code must be entirely self-documenting. If logic is difficult to read without a comment, refactor the code into smaller, well-named functions or variables.

## Prerequisites

- Node.js >= 22
- Yarn

## Local Development

```bash
yarn install
yarn dev
```

## Production Build

To test the production build locally:

```bash
yarn build
```

The static site will be generated in `dist/client`.

## GitHub Pages Deployment

This project is configured for **Static Site Generation (SSG)** via TanStack Start, and it is automatically deployed to GitHub Pages using GitHub Actions.

### Repository Settings Required

Before the workflow can deploy successfully, ensure the following settings are configured in your GitHub repository:

1. Go to **Settings > Pages**.
2. Under **Build and deployment**, set the **Source** to **GitHub Actions**.

### How it works

1. When you push to the `main` branch, the `.github/workflows/deploy.yml` workflow triggers.
2. It installs dependencies, lints, typechecks, and builds the project (`yarn build`).
3. The build process (powered by Vite and TanStack Start) prerenders all routes and outputs them to `dist/client`.
4. The workflow uploads `dist/client` as an artifact and deploys it directly to GitHub Pages.
