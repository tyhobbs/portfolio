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
app/globals.css     all styling (the colour palette is at the top, in :root)
app/layout.tsx      fonts and page metadata
app/fonts/          Archivo + JetBrains Mono (SIL Open Font License)
components/         one file per section
data/icon-sprite.ts inlined brand icons (Simple Icons)
public/finrl.png    FinRL logo, used as a chip icon
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

1. **Resume.** Put the PDF in `public/` and set `links.resume` to
   `/your-file.pdf`.
2. **Favicon.** Drop a `favicon.ico` or `icon.png` into `app/`.
3. **Social image.** Add `public/og.png` at 1200x630, then set `metadataBase`
   and `openGraph.images` in `app/layout.tsx` once you have a domain.
4. **Check the placeholder content.** The stat boxes, the CU Boulder dates and
   some skill chips are my guesses. The achievements entries are stubs.

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
`{ name: "Thing", img: "/thing.png" }` instead — that's how FinRL works.

Only use a logo when it's genuinely that tool's mark. A wrong logo reads as a
false claim to anyone who knows the tool.

## Deploying

Push to GitHub, import the repo at vercel.com, accept the defaults. It's a
static site, so Vercel's free tier is plenty.
