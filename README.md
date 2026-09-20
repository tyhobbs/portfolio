# tyhobbs portfolio

Next.js App Router, TypeScript, plain CSS. No UI framework, no external
requests at runtime — fonts and brand icons are bundled with the site.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Node 18.17 or newer.

## Where to edit things

**`data/content.ts` holds everything you'll change.** Text, jobs, degrees,
stack cards, projects, metrics, achievements and links all live there as plain
arrays. You shouldn't need to touch the components for normal edits.

| What | Where in `content.ts` |
| --- | --- |
| Name, headline, lead paragraph | `person` |
| Resume / GitHub / LinkedIn / HF / email | `links` |
| The four stat boxes under the hero | `stats` |
| About → Experience tab | `experience` |
| About → Education tab | `education` |
| Stack cards | `stack` |
| Project cards, tags, links, bar charts | `projects` |
| Achievements cards | `achievements` |
| Nav items | `sections` |

Other files:

```
app/globals.css      all styling (the colour palette is at the top, in :root)
app/layout.tsx       fonts and page metadata
app/manifest.ts      web app manifest (name, icons, theme colour)
app/favicon.ico      tab icon — Next picks these up by filename
app/icon.png         512px app icon
app/apple-icon.png   iOS home-screen icon
app/fonts/           Archivo + JetBrains Mono (SIL Open Font License)
components/          one file per section
data/icon-sprite.ts  inlined brand icons (Simple Icons)
public/Resume_DS.pdf the resume the nav button links to
public/*.png         logos used as chip icons, plus the Android app icons
```

## Case studies

`/work` lists the long write-ups; each one lives at `/work/<slug>`. The content
is in **`data/case-studies.ts`** — one object per study, with a `lede`, a list
of links and a `sections` array.

Each section holds blocks, and a block is one of three shapes:

```ts
{ p: "A paragraph." }
{ list: [{ strong: "Lead-in.", text: " the rest of the point." }] }
{ table: { head: ["A", "B"], rows: [["1", "2"]] } }
```

Add a new study by appending to the array. The index page, the routes and the
previous/next links all pick it up automatically — just add a matching
`Case study` link in `data/content.ts` if you want it on the home page too.

## Still to do

1. **Social image.** Add `public/og.png` at 1200x630, then set `metadataBase`
   and `openGraph.images` in `app/layout.tsx` once the site has a URL. This is
   the preview card shown when the link is pasted into LinkedIn, Slack or
   iMessage. Without it, those show an empty box.
2. **Glaucoma case study.** It credits the whole team but doesn't say which
   parts were mine — worth a short "My role" section.

Done: resume (`public/Resume_DS.pdf`), favicons and app icons, all project and
paper links.

## Adding a colour

The palette is six CSS variables at the top of `globals.css`: `--accent`,
`--violet`, `--teal`, `--amber`, `--rose`, `--lime`. Anywhere `content.ts` takes
a `color`, use one of those names without the `--`.

## Adding a brand icon

Icons come from Simple Icons, inlined into `data/icon-sprite.ts`. To add one,
find its slug at simpleicons.org, then:

1. Get the SVG path and add a `<symbol id="i-SLUG" viewBox="0 0 24 24">…</symbol>`
   to the sprite string.
2. Add `.chip.b-SLUG svg{color:#HEX}` to `globals.css` for its brand colour.
3. Use `{ name: "Thing", icon: "SLUG" }` in `content.ts`.

For a logo that isn't in Simple Icons, put a PNG in `public/` and use
`{ name: "Thing", img: "/thing.png" }` instead — that's how FinRL, matplotlib
and tidymodels work.

For a wide wordmark rather than a square mark, use `wordmark: "/thing.png"`.
It renders at its natural width instead of being squeezed into a 16px square —
that's how Massive works. Recolour a dark wordmark to near-white first, or it
disappears against the dark chip.

Only use a logo when it's genuinely that tool's mark. A wrong logo reads as a
false claim to anyone who knows the tool.

## Deploying

Push to GitHub, import the repo at vercel.com, accept the defaults — it detects
Next.js on its own. Every push to `main` redeploys automatically.

```bash
git add .
git commit -m "What changed"
git push
```
