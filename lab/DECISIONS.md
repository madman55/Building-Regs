# Decisions

Why things are the way they are. Newest first.

## 2026-11-28 · Teaching is built into the lesson path, driven by lesson files

The app already taught before testing (the lesson deck), so a separate Teach section would have meant two half-built teaching systems. Lessons are JSON files played by one player. A new lesson is mostly writing, and new code is only needed for a new drawing or experiment. For T1, lessons open from a Learn card. In T3 they move in front of the matching section quizzes.

## 2026-11-28 · Lessons never type official figures

Explanations of principles are written in the lesson. Figures only appear through `quote` steps, which show the live text from the document packs. `check_refs.js --sign` fingerprints the quoted text, so an amendment that changes it flags the lesson for re-review instead of leaving it silently out of date.

## 2026-11-28 · Experiments show measurements, not verdicts

The stair experiment reports risers, length, pitch and 2R+G, but never says acceptable or not. Judging against the guidance is the next step, done by reading Table 1.1 and its notes.

## 2026-11-27 · Phases 2 and 3 built together, ahead of the plan

In the Lab, the quizzes looked identical to the original's, so the Lab didn't feel different. The hunts, the question rework and the confidence check were built together so the difference shows from the first lesson.

## 2026-11-27 · "Where would you check?" is generated, not hand-written

Figure questions whose lesson reference resolves to an exact table, diagram or paragraph are turned into "which of these holds the figure?" questions. Generating them from the verified references avoids writing 100+ new questions by hand, where each would be a chance for error. The safeguards on wrong options are in `reframe()` in `lab-learn.js`. Roughly a third stay as figure questions, so the confidence check has something to work on.

## 2026-11-27 · Hunts are marked by the block picked

Typed answers can't be marked reliably offline. Picking the paragraph, table or diagram can be marked exactly, and it's the skill being taught. Accepted and near-miss references are checked by `tools/check_refs.js`, so a document update can't silently break a hunt.

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
