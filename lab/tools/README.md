# Tools

These are run on a computer, not in the app. They need Python 3 with `pdfplumber` and `Pillow`, plus `pdftoppm` (from poppler) for the diagram and table images. The tests also need `playwright`.

## Rebuilding a document pack

Use this when GOV.UK publishes a new version of an Approved Document.

1. Download the new PDF from GOV.UK. Shrink it without changing anything inside:
   `qpdf --object-streams=generate --recompress-flate --compression-level=9 IN.pdf OUT.pdf`
2. Extract the text, tables and diagrams:
   `python3 extract_ad.py OUT.pdf raw.json FIRST_PAGE LAST_PAGE CTX PREFIX`
   - `FIRST_PAGE` and `LAST_PAGE` are the PDF page numbers of the first requirement and the last appendix page.
   - `CTX` is `D` for dwellings or `O` for other buildings.
   - `PREFIX` is a short ID prefix such as `b1_`.

   For AD B Vol 1 this was `13 183 D b1_`, and for Vol 2 `13 198 O b2_`.
3. Check nothing is missing: `python3 check.py raw.json OUT.pdf FIRST_PAGE LAST_PAGE`. It reports gaps in paragraph numbering, plus any diagram or table captions in the PDF that weren't extracted.
4. Update the document's details (edition, PDF name, GOV.UK links) in `documents.json`.
5. Build the pack the app loads: `python3 build_pack.py raw.json B1 ..`
6. From the Lab folder, run `node tools/check_refs.js` (every lesson reference and every hunt answer must still resolve), run the tests, then bump the cache name in `../sw.js` (for example `regs-lab-v2` to `regs-lab-v3`) so phones pick up the change.

`extract_adk_2013.py` is the older single-purpose script used for AD K (2013).

`pdf-viewer-polyfill.js` is the code added to the top of `pdfjs.js` and `pdfjs-worker.js` so the viewer works on phones with older browsers. Add it again if pdf.js is ever replaced.

## Tests

Run them from the Lab folder with `APP_DIR=. python3 tools/tests/<name>.py`.

| Test | Checks |
| --- | --- |
| `learn_lab.py` | Phase 2–3 gate: a hunt played properly and one missed (no heart lost), "Where would you check?" and confidence checks in a lesson, the checking path, Profile stats, and the switches turning them off |
| `reference.py` | Phase 1 gate: labels and edition on every result, status sheet, saved items, report links, lesson references, and the switch turning it off |
| `side_by_side.py` | Phase 0 gate: the original and the Lab on one address stay independent. Set `SITE_DIR` to a folder with the original in `Building-Regs/` and the Lab in `Building-Regs/lab/` |
| `adk.py`, `adb.py` | Official-text search results and the page viewer |
| `offline.py` | Documents saved in the background; search and viewer work offline |
| `fmt.py`, `quiz2.py`, `match.py`, `mist.py` | Question formats, quiz flow, matching, the Mistakes tracker |
| `plain.py`, `why.py` | Plain-English intros and "why it matters" lines |
