# JECOFX Academy Website

Premium marketing site for JECOFX Forex Academy, built with Astro + React + Tailwind.

## Tech Stack
- Astro 5
- React 19 (`@astrojs/react`)
- Tailwind CSS 4 (`@tailwindcss/vite`)
- TypeScript (strict Astro config)
- Lucide icons

## Features
- Full landing page flow:
  - Hero
  - About Us
  - Partners marquee
  - Services
  - Stages/Pricing
  - Contact Channels
  - FAQ
  - Footer
- Responsive navbar with mobile bottom-sheet menu
- Section-aware nav active state
- Optimized image pipeline via Astro assets
- Lightweight hydration strategy (`client:visible` where needed)

## Project Structure
```text
src/
  assets/                 # Local images (students, logos, hero)
  components/
    sections/             # Main page sections
    ui/                   # Navbar and shared UI logic
  data/                   # Static site data
  layouts/                # Base HTML layout
  pages/
    index.astro           # Homepage composition
  styles/
    global.css            # Global styles and tokens
```

## Local Development
```bash
npm install
npm run dev
```

Default dev URL: `http://localhost:4321`

## Build and Preview
```bash
npm run build
npm run preview
```

Output is generated in `dist/`.

## Scripts
- `npm run dev` — Start Astro dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build locally
- `npm run astro` — Astro CLI passthrough

## Performance Notes
- Hero and partner images are optimized through Astro image processing.
- Build config enables HTML compression and Rollup tree-shaking.
- React hydration is intentionally limited to interactive UI pieces.

## Deployment
This project builds to static output and can be deployed to:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages (with static hosting workflow)
- Any static host serving `dist/`

## License
Private project. Update this section if you want to open-source it.
