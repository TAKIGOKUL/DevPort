# Gokul G K — Portfolio

Personal developer portfolio for Gokul G K, built as a single-page React app: hero, about, projects, experience, certifications, achievements, a YouTube/vlogs section, and contact.

**Live structure:** `App.jsx` renders a preloader, then mounts the section components in order — `Navbar → Hero → About → Projects → Experience → Certifications → Achievements → Youtube → Contact`.

## Stack

- **React 19** (functional components, hooks)
- **Vite 7** — dev server and build
- **GSAP** — preloader timeline animation
- **Framer Motion** — component-level animation
- **Lenis** — smooth scrolling
- **React Icons** / **Remix Icon** classes — iconography
- **ESLint 9** with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`

No CSS framework — every component ships its own plain CSS file, styled with CSS custom properties defined in `src/index.css`.

## Getting started

```bash
npm install
npm run dev       # start the dev server
```

```bash
npm run build      # production build to dist/
npm run preview    # preview the production build locally
npm run lint        # run ESLint
```

## Project structure

```
src/
  components/       # one .jsx + .css pair per section
  hooks/            # shared hooks (e.g. useScrollActivate for scroll-triggered hover states)
  data.js           # all portfolio content — personal details, projects, experience,
                     # certifications, achievements, YouTube channel info
  App.jsx           # section order + preloader gate
  index.css         # design tokens (colors, fonts) and global reset
```

## Editing content

Almost all text content (bio, project list, experience, certifications, achievements, social links, YouTube channel) lives in `src/data.js` — update it there rather than in the components.

## Design notes

- Dark, monochrome-plus-green palette with `Archivo` for display type and `Space Mono` for mono/label text (see `index.css` and `index.html` font links).
- The hero uses a bordered two-panel "poster" layout that fits within one screen on desktop/tablet and switches to natural scrolling on mobile — see `Hero.css` for the responsive breakpoints.
- Card hover effects across Projects/Achievements/Certifications also trigger on scroll via `useScrollActivate`, so the same affordance works on touch devices.
