# Sumit Limbu — Portfolio

Personal portfolio website built with **React + Vite**.

## Tech Stack

- React 19
- Vite 7
- lucide-react (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

## Deployment

### GitHub Pages (automatic)
Push to the `main` branch — the GitHub Actions workflow at `.github/workflows/static.yml` will build and deploy automatically.

> **Important:** In your repo settings go to **Settings → Pages → Source** and set it to **GitHub Actions**.

### Other Static Hosts (Netlify, Vercel, etc.)
- Build command: `npm run build`
- Publish directory: `dist`

## Project Structure

```
src/
├── components/
│   ├── Contact.jsx / .css
│   ├── Footer.jsx / .css
│   ├── Hero.jsx / .css
│   ├── Navbar.jsx / .css
│   ├── PixelButton.jsx / .css
│   ├── PixelCard.jsx / .css
│   ├── Projects.jsx / .css
│   ├── StarWarp.jsx
│   └── TechStack.jsx / .css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```
