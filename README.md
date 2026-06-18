# Vite React Template

## Overview

A modern React starter template powered by Vite and React. It comes with a clean development setup, code formatting, linting, and Tailwind CSS out of the box so you can start building immediately.

## Requirements

- **Node.js 18+** (recommended 20+)
- **npm** (or pnpm/yarn if you support them)

## What's Included

### Developer Experience
- Type-safe React setup with TypeScript
- Fast development with Vite HMR
- ESLint + TypeScript ESLint for code quality
- Prettier for consistent formatting

### Styling
- Tailwind CSS 4 configured out of the box
- Prettier Tailwind plugin for class sorting

### Deployment
- GitHub Pages support via `gh-pages`

## Project Structure
```bash
.
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
└── package.json
```

## Getting Started

### Option 1: Use This Template (Recommended)

Create a new repository using GitHub’s **"Use this template"** button.

Then install dependencies and start the development server:

```bash
npm install
npm run dev
```

### Option 2: Use `degit`

Create a new project from the template without copying Git history.

```bash
npx degit krig6/vite-react-template my-app

cd my-app

npm install
npm run dev
```

Note: If `degit` is not installed, `npx` will automatically download and run it temporarily.

Then initialize Git

```bash
git init
git add .
git commit -m "chore: initial commit from vite template"
```

Connect to GitHub (optional now or later)

```bash
git remote add origin git@github.com:<github-username>/<new-repository-name>.git
```

Push when ready

```bash
git push -u origin main
```

### Option 3: Manual Clone

Clone the repository and create a fresh Git history.

```bash
# Clone the repository
git clone git@github.com:krig6/vite-react-template.git

cd vite-react-template

# Remove existing git history
rm -rf .git

# Initialize new git repository
git init
git add .
git commit -m "init"

# Connect to your own repository
git remote add origin git@github.com:<github-username>/<new-repository-name>.git
git push -u origin main
```

Then install dependencies and start the development server:

```bash
npm install
npm run dev
```

### Build for Production

```bash
npm run build
```

This will generate the production-ready files in the dist directory.

### Preview the Production Build

```bash
npm run preview
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

Before deploying, update the base option in `vite.config.ts` to match your repository name.

This script will deploy the contents of the dist directory to the gh-pages branch of your repository, making it available at https://&lt;username&gt;.github.io/&lt;repository-name&gt;.

Note: Replace &lt;username&gt; with your GitHub username and &lt;repository-name&gt; with the name of your repository.

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format files with Prettier |
| `npm run deploy` | Deploy dist/ to GitHub Pages |

## Customization

Feel free to modify the configuration files and project structure to fit your specific needs. Whether you're adding new loaders, plugins, or custom scripts, this template is designed to be flexible and easy to extend.

## Contributing

This is a template repository. Contributions, improvements, and suggestions are welcome via pull requests.

## License

This template is licensed under the MIT License.
