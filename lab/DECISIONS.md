# Decisions

Why things are the way they are. Newest first.

## 2026-11-26 · Lab modules reach the app through `window.APPX`

The main app script is wrapped in a block, so its variables aren't visible to other files. `index.html` exposes a small read-only bridge, `window.APPX` (documents, the viewer state, and helpers such as `sheet`, `openOfficial` and `esc`). Lab modules use only that. Hooks in `index.html` call modules through `RF()`, which returns nothing when the switch is off.

## 2026-11-26 · Feedback is informal for now; report links hidden

Testers will give feedback directly, so the "Report a problem" links are switched off (`reports: false` in `features.js`). The code stays in place. If they're switched back on, they open a GitHub issue (public, and reporters need a GitHub account) unless `reportTo` is set to an email address.

## 2026-11-26 · Labels describe the source, not the accuracy

*Law* and *Statutory guidance* mean the text is copied word for word from the Approved Document. They don't mean the app has checked that it applies to a project. *Explanation* marks anything written for the app.

## 2026-11-26 · Lab lives in a `lab/` folder of the existing repo

**Decision:** keep the Lab in the same GitHub repo (`madman55/Building-Regs`), in a `lab/` folder, served at `/Building-Regs/lab/`. It's also previewed privately as a Claude artifact.

**Consequences:**

- The Lab is public on GitHub Pages to anyone who knows the address. Nothing in the original links to it.
- Both apps share one web origin, so they share phone storage. Every storage name in the Lab is therefore different (`regs-lab-…`), and the Lab's offline clean-up only deletes `regs-lab-` caches. The original's clean-up only deletes `regs-trainer-` caches, so it never touches the Lab's.
- The original's service worker covers `/Building-Regs/`, including `/lab/`. Once the Lab's own service worker is installed, it takes over `/lab/` because its scope is more specific. Before that first install, the original may briefly cache a few Lab files in its own cache. That's harmless.
- The Lab keeps its own copies of the PDFs and document packs, so updating one app never changes the other.
- To move the Lab to its own repo or address later, copy the folder. Only the manifest `id` needs changing.

## 2026-11-26 · Experiments behind switches

Each experiment goes in its own file and checks `LAB.on('<id>')` first. This keeps `index.html` from growing further and lets any experiment be switched off or removed without touching the rest.

## 2026-11-26 · Document packs are rebuilt, not hand-edited

`tools/extract_ad.py` then `tools/build_pack.py` produce the packs from the official PDFs. Hand edits would be lost the next time a document is updated.
