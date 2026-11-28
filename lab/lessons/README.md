# Lessons

One JSON file per lesson, listed in `index.json`. The player is `../lab-lessons.js`.

To review a draft on your phone without saving progress, open the Lab with `?lesson=<id>&preview`, for example `.../lab/?lesson=k-stairs-1&preview`.

## Lesson fields

| Field | What it holds |
| --- | --- |
| `id`, `title` | Unique ID (also the file name) and title |
| `level`, `minutes` | `beginner` or `intermediate`, and estimated time |
| `parts`, `elements` | Parts it belongs to, and building-element pathways (e.g. `stairs`) |
| `prereqs` | Lessons worth doing first. A suggestion, never a lock |
| `objectives` | Two or three "by the end you'll be able to…" lines |
| `status` | `{ "state": "draft" \| "self-checked" \| "reviewed", "by": "...", "date": "...", "note": "..." }` |
| `revisions` | Dated list of changes |
| `rewards` | `{ "xp": 20 }` |
| `related` | Hunts, the unit's lessons, other lessons |
| `sigs` | Written by `node tools/check_refs.js --sign`: a fingerprint of each quoted official text. If the wording changes in a document update, the lesson shows "Needs re-review" |
| `steps` | The lesson (below) |

## Step types

Every step shows a label automatically: Explanation, Illustration, Law, Statutory guidance or Fictional. Any step can have `"beginner": true` (shown only in Beginner mode).

| Type | Fields |
| --- | --- |
| `intro` | `text` |
| `explain`, `why` | `title`, `text` (string or list of paragraphs), optional `art` (a drawing name in lab-lessons.js), optional `action: "status"` with `doc` to open a document's status page |
| `tap` | `art`, `terms: { key: [name, meaning] }`, `min` (how many to tap before Continue), `prompt` |
| `predict` | `q`, `o` (options), `a` (index of the answer), `why` |
| `sim` | `name` (an experiment in lab-lessons.js), its settings, `text` |
| `sort` | `buckets`, `items: [{ t, a, why }]` |
| `quote` | `ref` (e.g. `"AD K, Table 1.1"`), `before`, `after` |
| `find` | `hunt` (an id from lab-hunts.js), or an inline `doc`, `title`, `brief`, `accept`, `near`, `hint` |
| `check` | `qs: [{ q, o, a, why }]` |
| `scenario` | `brief`, `q`, `o`, `a`, `why` (labelled Fictional) |
| `end` | `points`, `next: [{ label, lesson \| unit \| hunts \| parts }]` |

## Rules

- **No official figures typed into lesson text.** Quote them with a `quote` step, so they update with the document.
- **Experiments show measurements, never "this complies".**
- **Explanations of principles need an independent reviewer** before the status becomes `reviewed`.
- Run `node tools/check_refs.js` after any change. Every `quote` and `find` must resolve.
