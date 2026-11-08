# Andy Huynh — Portfolio

# Personal Portfolio

A personal portfolio website showcasing my software development projects, experience, technical interests, and photography.

The site is designed to be minimal and straightforward, with an emphasis on typography, thoughtful spacing, and a consistent visual identity.

## Features

- **Personal introduction** — Background, current interests, and what I'm working on.
- **Projects** — Selected software projects with descriptions and links.
- **Resume** — Embedded resume preview and downloadable PDF.
- **Skills & Technologies** — Languages, frameworks, and tools.
- **Photography** — A dedicated gallery featuring selected photographs, with an expanded image viewer.
- **Responsive design** — Layouts designed for desktop and mobile screens.

## Built With

- React
- Vite
- JavaScript
- HTML
- CSS

No UI framework, icon library, or routing library is used.

## Design

The visual identity uses a small, consistent color palette:

| Color | Hex |
|---|---|
| Midnight Navy | `#002941` |
| Soft Blue | `#B6DFED` |
| Blue-Gray | `#7893A0` |
| Coral | `#FD6E6E` |
| Warm White | `#F8F7F2` |

## Running Locally

Requires Node.js 20.19+ or 22.12+.

```bash
git clone https://github.com/Andy5841/Web-Portfolio.git
cd Web-Portfolio
npm install
npm run dev
```

To create and preview a production build:

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
├── components/   # Reusable page components
├── data/         # Projects, skills, resume, and photography content
├── App.jsx       # Main application and page selection
└── index.css     # Global styles and design tokens

public/
├── images/       # Photography and project images
└── resume/       # Resume PDF and preview
```

## Deployment

The website is built with Vite and deployed through Netlify.

The production build is generated in `dist/`, which is used as the Netlify publish directory.

## Live Site

[andyhuynhportfolio.netlify.app](https://andyhuynhportfolio.netlify.app)

---

Built and maintained by [Andy Huynh](https://github.com/Andy5841).
