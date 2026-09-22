# Planet IIT — Website

A 5-page React + Vite site for Planet IIT (Planet Institute and Information Technology).

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/` — upload that folder's contents to your hosting (Vercel, Netlify, cPanel, etc.).

## Project structure

```
src/
  components/   Header, Footer, BackToTop, Layout, SmoothScroll (Lenis), Reveal (scroll animation)
  data/         courses.js (all 4 tracks + enterprise services), team.js (leadership placeholders)
  pages/        Home.jsx, About.jsx, Courses.jsx, CourseDetail.jsx, Contact.jsx
  assets/       logo.png
  index.css     Global design system (colors, type, layout, all page styles)
```

## Things to finish before launch

- **Address & phone**: placeholders live in `src/data/team.js`, `src/pages/Contact.jsx`, and `src/components/Footer.jsx` — search for "to be added" / "0000000000".
- **Leadership**: `src/data/team.js` has CEO/CTO/Director placeholders (name, email, phone, bio, photo). Drop real photos into `src/assets/` and import them, or leave the initials avatars.
- **Contact form**: currently simulates a successful submission client-side (see the comment in `src/pages/Contact.jsx`). Wire it to a real endpoint or email service (e.g. Formspree, EmailJS, or your own API) before launch.
- **Domain**: no domain-specific config needed — just point DNS at wherever you deploy `dist/`.

## Stack

React 18 · Vite 5 · React Router 6 · Framer Motion · Lenis (smooth scroll)
