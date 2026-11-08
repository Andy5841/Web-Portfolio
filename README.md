# Andy Huynh — Portfolio

A small React + Vite site with plain CSS. No UI framework, icon library, or router.

## Run locally

You need Node.js (version 20.19 or newer, or 22.12 or newer).

```bash
npm install
npm run dev
```

Open the local address Vite prints in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build     # outputs the site to dist/
npm run preview   # serves dist/ locally so you can check it
```

Upload the `dist/` folder to any static host. The site is set up for a root URL such as Netlify.

## How the site is organized

- **Home page** (one scroll): hero, Now, Work, Resume, Skills & Technologies, About, a Photography band, and Contact.
- **Photography page**: opens from the nav or the Photography band. Its address is `#photography`. Select a photo to see it larger; Escape or Close dismisses it.

`src/App.jsx` decides which of the two to show based on the address hash. There is nothing else to configure.

## Where to edit

| To change | Edit |
| --- | --- |
| "What I'm up to now" | `src/data/now.js` (also change the `updated` month) |
| Projects | `src/data/projects.js` |
| Resume file, preview, and "Quick overview" | `src/data/resume.js` and `public/resume/` |
| Skills & Technologies | `src/data/skills.js` |
| Photography page photos and groups | `src/data/photos.js` and `public/images/` |
| Hero, About, Contact text | `src/components/Hero.jsx`, `About.jsx`, `Contact.jsx` |
| Nav links | `src/components/Navbar.jsx` |
| Colors, fonts, spacing | `src/index.css` (colors are variables at the top) |

### Update the resume

1. Replace `public/resume/Andy-Huynh-Resume.pdf` with the new PDF (keep the file name).
2. Replace `public/resume/resume-preview.png` with a picture of its first page. Any of these works:
   - macOS: open the PDF in Preview, then File > Export, and choose PNG.
   - Command line (needs poppler, `brew install poppler`):
     `pdftoppm -png -r 130 -singlefile -f 1 -l 1 public/resume/Andy-Huynh-Resume.pdf public/resume/resume-preview`
3. If the picture's pixel size changed, update `previewWidth` and `previewHeight` in `src/data/resume.js`.
4. Edit the "Quick overview" text in the same file.

### Add a project

Add an object to the array in `src/data/projects.js`. `liveUrl`, `sourceUrl`, and `image` are optional. Without an image, the card shows the project name on a color block. To use a screenshot, put it in `public/images/projects/` and set `image: "/images/projects/your-file.png"`.

The "This portfolio" card has no links yet. Add `sourceUrl` (and `liveUrl` once it's deployed).

### Add a photo

1. Put the file in `public/images/`.
2. Add it to a block in `src/data/photos.js` with `src`, `alt`, `caption`, `width`, and `height` (the photo's pixel size as it appears). Optional: `details` (a second caption line, such as camera settings). Captions show in the enlarged view.

The Photography page is built from groups (each with a heading) made of blocks. Block layouts:

- `row`: photos side by side at one height. Add `rowHeight` (pixels) to keep a row of only a few photos from stretching across the page.
- `trio`: three photos, in the order `[tall, wide, wide]`: the tall photo beside the two wide ones stacked. Add `flip: true` to put the tall photo on the right.

Photos are never cropped; the layout works out each size from the `width` and `height` you give. Browsers can't show HEIC files, so export iPhone photos as JPEG first.

### Change the hero or Photography band photo

Both are `<img>` tags in `src/components/Hero.jsx` and `PhotographyTeaser.jsx`. The photo is scaled to fill the band, so its edges may be trimmed on some screen shapes. Adjust `object-position` in `src/index.css` (`.hero-image`, `.teaser-image`) to change which part stays in view.

## Colors

| Name | Hex | Use |
| --- | --- | --- |
| Soft Blue | `#B6DFED` | Now strip, tags, buttons, text on navy |
| Midnight Navy | `#002941` | Text, text panels, Contact, Photography page |
| Coral | `#FD6E6E` | Link underlines |
| Warm White | `#F8F7F2` | Page background |
| Blue-Gray | `#7893A0` | Small decorative marks |

Small secondary text (dates, locations) uses `--muted` (`#557282`), a darker blue-gray. `#7893A0` on warm white has about 3:1 contrast, which is too low for small text.

## Notes

- The photos in `public/images/` are the originals and are large (the biggest is about 8 MB). If the site loads slowly, make smaller copies for the web and keep the originals elsewhere.
- The resume PDF is public once the site is live, and it includes your phone number. Remove it from the PDF if you don't want it posted.
- Keep proprietary Phoenix Electric details (drawings, source code, internal project specifics) off the public site. The Quick overview describes the work at a high level only.
