# Changelog

Newest first.

## Lab 0.4 · 28 November 2026 · Teaching T1: lesson player and two lessons

New switch: **Lessons** (on by default). Player in `lab-lessons.js`, lessons in `lessons/`.

- **Lesson player.** Lessons are JSON files (format in `lessons/README.md`).
  - 11 step types: intro, explain, why, tap a drawing, experiment, predict, sort, official quote, guided find, check, end. Scenario is ready for later.
  - Every step shows its label (Explanation, Illustration, Law, Statutory guidance, Fictional). The intro shows the lesson's review status.
  - Official text appears only as live quotes from the document packs, with edition and jurisdiction, one tap from the page.
  - XP on first completion. Progress is saved as `regs-lab-lessons`.
  - `?lesson=<id>&preview` opens any lesson without saving progress, for reviewing drafts.
- **Lesson 1: Understanding the Building Regulations** (6 min).
  - The four layers (Act, Regulations, Approved Documents, standards), with Requirement K1 next to Table 1.1.
  - A law / guidance / planning sort, section 7 of the Building Act, and who checks and who's responsible.
  - Editions and transitional arrangements, using AD B's 2029 changes, and a guided find of Requirement B1.
- **Lesson 2: Understanding staircases** (7 min).
  - A tappable stair section (9 terms), a prediction, and a stair experiment: floor height, rise and going, drawn to scale, showing risers, length on plan, pitch and 2R+G, with no verdicts.
  - Why steps are equal, then AD K Table 1.1 quoted. A check shows its note 1 changes the answer for a 220/220 stair.
  - Ends with the loft headroom hunt.
- **Learn card** listing the lessons, with draft status and ticks when done.
- **`tools/check_refs.js` checks lessons too.** Every quote and find must resolve. `--sign` stores a fingerprint of each quoted text, so a lesson shows **Needs re-review** if a document update changes the wording.
- Regulation Hunter screens can now run without a follow-up question (used by lesson finds).
- Sheets now open above lessons and hunts. The offline cache is now `regs-lab-v4`.
- **Both lessons are drafts:** not yet independently reviewed.
- **Known issue found:** some AD K key-term definitions in the search pack are cut off at the left (an extraction fault from before AD B). Not used by lessons. To fix when AD K is rebuilt.

## Lab 0.3 · 27 November 2026 · Phases 2 and 3: learning to look things up

Three new switches, all on by default (Profile → Lab experiments). Code in `lab-learn.js`, hunts in `lab-hunts.js`.

- **Regulation Hunter** (`hunter`). 15 hunts: 8 from AD K and 7 from AD B Vol 1. Each is a real question answered by finding the right paragraph, table or diagram with the app's own search, then tapping **This answers it**.
  - Marked by the block picked. A near miss says "close" rather than giving the answer. After three misses the answer is shown and opened.
  - Then a follow-up question that's answered by reading the found text. Every answer is quoted from the document.
  - XP: 10 for a first-time find (6 after misses, 2 if shown), plus 3 for opening the page and 3 for the follow-up. No timer. A missed hunt never costs a heart.
  - One hunt is slotted into each AD K lesson and each AD B Volume 1 lesson until all are found. There's also a Regulation Hunter card on Learn, with a list of all 15.
- **Where would you check?** (`reframe`). 64 of the 159 type-the-figure questions now ask which table, diagram or paragraph holds the figure. The figure is then shown, with its source and a link that opens it. About a third of eligible questions stay as figure questions on purpose.
  - Wrong options come from the same document and never contain the answer figure, refer to the answer, or sit on the same page.
- **Confidence check** (`confidence`). On about one question in three outside Beginner mode, Check first asks: Sure / Think so / Not sure: check.
  - "Check" opens the documents with the question already searched. A wrong answer after checking costs no heart.
  - Sure and wrong gets a "This is why we check" note.
  - Profile shows how often you're right when you say you're sure, and how often you stopped to check.
- `tools/check_refs.js` now also checks every hunt answer and near-miss reference (all resolve).
- New gate test `tools/tests/learn_lab.py`. The offline cache is now `regs-lab-v3`.
- **Not yet independently reviewed:** the 15 hunts and their follow-up answers.

## Lab 0.2 · 26 November 2026 · Phase 1: reference foundations

Switch: **Reference upgrades** (on by default; Profile → Lab experiments). Code in `lab-reference.js`.

- **Content labels** on every result: *Statutory guidance* for Approved Document text, *Law* for requirements, *Explanation* for lesson content. A "What do these labels mean?" sheet explains them, including section 7 of the Building Act 1984.
- **Edition on every official result** ("2019 ed., amended to 2026"), and in the viewer footer.
- **Document status sheet** (the "i" button in the viewer, or tap a document on the search screen): edition, England only, latest changes, what's not yet in force, when earlier rules still apply, when this copy was made, and whether GOV.UK has changed the page since.
- **Saved items**: the star in the viewer saves a paragraph, table, diagram or page. They're listed on the search screen. If the wording changes in a later update, the saved item is flagged "Moved or changed".
- **Report a problem** links are built (viewer and quiz answers, with the item, edition and question filled in) but **hidden**: feedback is informal for now. Set `reports: true` in `features.js` to show them.
- **Lesson references open the exact item**: 284 lesson references now open the right table, diagram, paragraph or requirement, highlighted. Before, only references with a page number had a button.
- New `tools/check_refs.js` checks every lesson reference against the current document packs: 298 point at documents in the app, 284 resolve exactly, and none are broken.
- The offline cache is now `regs-lab-v2`. Sheets now open above the document viewer.

## Lab 0.1 · 26 November 2026 · Phase 0: safe copy

- Copied from Building Regs Trainer as it stood on 26 November 2026: 21 units, 89 lessons, 530 questions, AD K and AD B Vols 1 and 2 in the official-text search.
- New identity: name "Building Regs Lab", short name "Regs Lab", purple icon, `LAB` badge in the header, manifest `id` `/Building-Regs/lab/`.
- Own storage names: progress `regs-lab-v1`, recent searches `regs-lab-recent`, GOV.UK check `regs-lab-govuk`, meaning-search database `regs-lab`, offline cache `regs-lab-v1`. The offline clean-up only deletes `regs-lab-` caches.
- Added `features.js` and a **Lab experiments** card on the Profile screen. No experiments are switched on yet.
- Added `tools/`: the document extraction scripts, a pack builder (checked: it rebuilds `adb1.json` exactly), the PDF viewer polyfills and the browser tests.
- Gate test `tools/tests/side_by_side.py` passes: both apps on one address keep separate caches and progress, and both work offline.
