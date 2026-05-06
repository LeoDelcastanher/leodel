# Leodel — Leonardo Delcastanher's Portfolio

[![Deploy to GitHub Pages](https://github.com/LeoDelcastanher/leodel/actions/workflows/ops.yaml/badge.svg)](https://github.com/LeoDelcastanher/leodel/actions/workflows/ops.yaml)

Live at [leodel.com.br](https://leodel.com.br)

Built with **Angular 20** · **TypeScript** · **SCSS**

---

## Getting started

```bash
npm install
ng serve
```

Navigate to `http://localhost:4200/`. The app reloads automatically on file changes.

## Build

```bash
ng build
```

Output is stored in `dist/leodel/browser/`.

For GitHub Pages (sets the correct base href):

```bash
ng build --base-href /leodel/
```

## Project structure

```
src/app
├── footer/
├── modules/
│   └── main/
│       └── components/
├── services/
├── shared/
└── Interfaces/
src/assets
├── data/         # JSON data files
├── images/
└── _variables.scss
```

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via the workflow at `.github/workflows/ops.yaml`.
