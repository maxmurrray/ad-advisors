# AD Advisors — Circle of Support

Static site. No build step: open `index.html`, or serve the folder
(`python3 -m http.server 8080`) and visit http://localhost:8080.

```
index.html          landing page + full-screen menu
css/styles.css      all styles
js/main.js          menu toggle + search toggle
assets/logos/
  emblem-nav.svg    outlined emblem — nav bar
  emblem-gold.svg   flat gold emblem — hero lockup
```

## Built from

`../Guiding Images For Ai/Landing Example.png` and `Hamburger Drop Down.png`.
Layout values (nav height, column positions, lockup proportions, type sizes)
were measured off those mockups and written as ratios, so the design holds its
proportions as the viewport changes.

The `AD ADVISORS / CIRCLE OF SUPPORT` wordmark is set in **Chivo Mono 700**
(Google Fonts) — the closest metric match to the mockup. Everything else is
Helvetica Neue / Arial. Brand gold is `#CEB479`.

## Still to wire up

- **Page links.** Nav links and every menu item are `href="#"`. Point them at
  the real pages once they exist (`services.html`, `our-work.html`,
  `about.html`, `as-seen-in.html`, `contact.html`).
- **Search.** The magnifier expands an input, but the form has
  `action="#"` and `onsubmit="return false;"`. Set a real `action` and drop the
  `onsubmit` when there's somewhere to search.
- **Hero video.** `../Video Content/*.mp4` (stadium/confetti) is unused — the
  mockup shows a solid black hero, so that's what's built.
