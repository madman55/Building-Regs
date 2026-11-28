# Building Regs Lab

An experimental copy of **Building Regs Trainer**, for trying new ways to learn and work with the England Approved Documents. The aim is to move from "learning the regulations" to "learning how to work with the regulations": finding the right guidance, checking it, and spotting when there isn't enough information.

The original app lives in the folder above this one and is not changed by anything here.

|                   | Original                            | Lab                                     |
| ----------------- | ----------------------------------- | --------------------------------------- |
| Address           | `madman55.github.io/Building-Regs/` | `madman55.github.io/Building-Regs/lab/` |
| Name on the phone | Building Regs                       | Regs Lab (purple icon)                  |
| Saved progress    | `regs-trainer-v1`                   | `regs-lab-v1`                           |
| Offline files     | `regs-trainer-…`                    | `regs-lab-…`                            |

Both can be installed and used on the same phone. Progress is not shared.

## Experiments

Every experiment has its own on/off switch in `features.js`, shown on the Profile screen under **Lab experiments**. An experiment that is switched off changes nothing.

## Working on the code

- `index.html` is just the page shell. Styles are in `app.css`, and the app's code is in `js/`, split by area and loaded in order (see the comment at the top of each file).
- Format with `npx prettier --write .`, lint with `npx eslint .`, and check references with `node tools/check_refs.js`.
- Every pull request that touches `lab/` runs all of these plus the browser tests on GitHub (Actions tab).

## Files

- `index.html`, `app.css`, `js/*.js`: the app shell, styles and code.
- `art.js`, `data.js`: drawings and lesson content (questions, facts).
- `features.js`: experiment switches, and the `reportTo` address for problem reports.
- `lab-reference.js`: Phase 1 reference upgrades (labels, document status, saved items, report links).
- `lab-lessons.js` and `lessons/`: the lesson player and lesson files (see `lessons/README.md`).
- `lab-learn.js` and `lab-hunts.js`: Regulation Hunter, "Where would you check?" questions and the confidence check.
- `adk.json`, `adb1.json`, `adb2.json` and the three PDFs: the official text packs and documents.
- `sw.js`: offline support. It only ever touches caches whose names start with `regs-lab-`.
- `tools/`: how the document packs are built, plus the tests. See `tools/README.md`.
- `ROADMAP.md`, `CHANGELOG.md`, `DECISIONS.md`: plan, history and the reasons behind technical choices.

## Status

This is not official guidance and is not affiliated with or endorsed by government. Approved Document text is reproduced under the Open Government Licence v3.0, © Crown copyright. Always check the current official document before relying on anything here.
