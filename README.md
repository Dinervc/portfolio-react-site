# Portfolio Website

Terminal-inspired portfolio website built with React + Vite.

## Highlights

- Content-driven architecture: profile, shell commands, projects, and contact data are defined in JSON.
- Built-in multilingual content support (`en` + `de`) with a top-right language switcher.
- Interactive section windows with terminal-style controls.
- Project cards with image overlays, hover effects, and optional action buttons.
- Sticky/docking hero section with custom AP atom logo and hidden easter egg interaction.

## Tech Stack

- React 19
- Vite 8
- Plain CSS (component-scoped class structure)
- ESLint 9

## Getting Started

Use a recent Node.js LTS version (recommended: Node 20+).

```bash
npm install
npm run dev
```

Available scripts:

```bash
npm run dev      # start local dev server
npm run build    # production build
npm run preview  # preview production build locally
npm run lint     # run eslint
```

## Content Management

Main content sources:

- `src/content/en.portfolio.json`
- `src/content/de.portfolio.json`

Important sections in each locale JSON:

- `profile`: top hero content
- `shell`: terminal window title + boot lines
- `commands`: command list and output blocks
- `projectsSection`: projects heading text
- `projects`: project cards and links
- `contactSection` / `contact`: contact panel
- `footer`: footer note

Language-specific UI strings are grouped under `ui` (labels, aria text, shell controls, and button text).

Project image paths are defined directly in each project object via `image`, for example:

```json
"/project-images/example.png"
```

Images should exist in:

- `public/project-images/`

### Project Sorting

Projects are sorted in `src/lib/getPortfolioContent.js` using `proudnessScore`:

- Ascending by score (smaller score appears first)
- Scores below `1` are normalized to the same top level (`0`)
- Projects with the same normalized score are sorted alphabetically by name

## Deployment

This app is Vercel-ready (standard Vite static build).

## License

This project is private and released under a restrictive, non-open license.
See `LICENSE` for full terms.
