/* Answer checker: every lesson reference that names a table, diagram, paragraph or requirement in a
   document the app holds must point at real text in the current document packs.
   Run from the Lab folder:  node tools/check_refs.js
   Exits with code 1 if anything doesn't resolve, so it can gate a document update.
   The matching rules are the same as refBlock() in lab-reference.js. Change both together. */
const fs = require('fs'),
  path = require('path');
const APP = process.env.APP_DIR || path.join(__dirname, '..');
global.window = {};
require(path.join(APP, 'data.js'));
const docs = ['adk.json', 'adb1.json', 'adb2.json'].map(f => JSON.parse(fs.readFileSync(path.join(APP, f), 'utf8')));
const byCode = Object.fromEntries(docs.map(d => [d.code, d]));

function refDoc(r) {
  const m = /^AD ([A-Z])(?:\s*Vol(?:ume)?\.?\s*(\d))?/.exec(r || '');
  return m ? byCode[m[1] + (m[2] || '')] || null : null;
}
function wants(r) {
  let m = /\b(Table|Diagram)\s+([A-Z]?\d+(?:\.\d+)?[a-z]?)/.exec(r);
  if (m) return { k: m[1].toLowerCase(), num: m[2] };
  m = /\bpara(?:graph)?s?\s+([A-Z]?\d+\.\d+[a-z]?)/i.exec(r);
  if (m) return { k: 'para', num: m[1] };
  m = /\bRequirement\s+([A-Z]\d+)/.exec(r);
  if (m) return { k: 'req', req: m[1] };
  return null;
}
function find(D, w) {
  return w.k === 'req'
    ? D.blocks.find(b => b.k === 'req' && String(b.title || '').startsWith('Requirement ' + w.req))
    : D.blocks.find(b => b.k === w.k && b.num === w.num);
}

const qs = [];
window.REG_UNITS.forEach((u, ui) =>
  u.lessons.forEach((l, li) =>
    (Array.isArray(l) ? l : l.qs || []).forEach(
      (q, qi) => q.r && qs.push({ q, where: `${u.k} lesson ${li + 1} q${qi + 1}` })
    )
  )
);
let inApp = 0,
  exact = 0,
  pageOnly = 0;
const bad = [];
for (const { q, where } of qs) {
  const D = refDoc(q.r);
  if (!D) continue;
  inApp++;
  const w = wants(q.r),
    p = /p\.(\d+)/.exec(q.r);
  if (w) {
    const b = find(D, w);
    if (b) exact++;
    else bad.push(`${where}: "${q.r}": ${w.k} ${w.num || w.req} not found in ${D.short}`);
  } else if (p) {
    pageOnly++;
    const ok = D.pagemap ? Object.values(D.pagemap).includes(+p[1]) : +p[1] + D.offset <= D.pages;
    if (!ok) bad.push(`${where}: "${q.r}": page ${p[1]} is not in ${D.short}`);
  }
}
// Regulation Hunter answers: every accept/near reference must resolve in its document.
try {
  require(path.join(APP, 'lab-hunts.js'));
} catch (e) {}
for (const h of window.LAB_HUNTS || []) {
  const D = byCode[h.doc];
  if (!D) {
    bad.push(`hunt ${h.id}: document ${h.doc} not in the app`);
    continue;
  }
  for (const [kind, refs] of [
    ['accept', h.accept],
    ['near', h.near || []]
  ])
    for (const r of refs) {
      const w = wants(r);
      if (!w || !find(D, w)) bad.push(`hunt ${h.id}: ${kind} "${r}" not found in ${D.short}`);
    }
}
console.log(`${(window.LAB_HUNTS || []).length} hunts checked.`);
// Lessons: every quote and find must resolve; --sign stores a fingerprint of each quoted text so the app can
// flag "Needs re-review" if a document update changes the wording.
const sig = t => {
  let h = 5381;
  for (let i = 0; i < t.length; i++) h = (h * 33 + t.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
};
const SIGN = process.argv.includes('--sign');
const resolveRef = r => {
  const D = refDoc(r),
    w = wants(r || '');
  return D && w ? find(D, w) : null;
};
const lessonDir = path.join(APP, 'lessons');
let lessonCount = 0;
if (fs.existsSync(path.join(lessonDir, 'index.json'))) {
  const idx = JSON.parse(fs.readFileSync(path.join(lessonDir, 'index.json'), 'utf8'));
  for (const item of idx.lessons) {
    const file = path.join(lessonDir, item.id + '.json');
    if (!fs.existsSync(file)) {
      bad.push(`lesson ${item.id}: file missing`);
      continue;
    }
    const L = JSON.parse(fs.readFileSync(file, 'utf8'));
    lessonCount++;
    const quoted = {};
    L.steps.forEach((st, i) => {
      if (st.type === 'quote') {
        const b = resolveRef(st.ref);
        if (!b) bad.push(`lesson ${L.id} step ${i + 1}: quote "${st.ref}" not found`);
        else quoted[st.ref] = sig(b.text);
      }
      if (st.type === 'find') {
        if (st.hunt) {
          if (!(window.LAB_HUNTS || []).some(h => h.id === st.hunt))
            bad.push(`lesson ${L.id} step ${i + 1}: hunt "${st.hunt}" doesn't exist`);
        } else {
          const D = byCode[st.doc];
          if (!D) bad.push(`lesson ${L.id} step ${i + 1}: document ${st.doc} not in the app`);
          else
            (st.accept || []).concat(st.near || []).forEach(r => {
              const w = wants(r);
              if (!w || !find(D, w)) bad.push(`lesson ${L.id} step ${i + 1}: find "${r}" not found in ${D.short}`);
            });
        }
      }
    });
    const changed = Object.entries(L.sigs || {})
      .filter(([r, s0]) => quoted[r] !== s0)
      .map(([r]) => r);
    if (SIGN) {
      L.sigs = quoted;
      fs.writeFileSync(file, JSON.stringify(L, null, 2) + '\n');
      console.log(`signed ${L.id}: ${Object.keys(quoted).length} quotes`);
    } else if (changed.length) console.log(`NEEDS RE-REVIEW ${L.id}: quoted wording changed for ${changed.join(', ')}`);
    else if (!L.sigs) console.log(`note: ${L.id} isn't signed yet (run with --sign)`);
  }
}
console.log(`${lessonCount} lessons checked.`);
console.log(`${qs.length} questions with references; ${inApp} point at documents in the app.`);
console.log(
  `${exact} open the exact table, diagram, paragraph or requirement; ${pageOnly} open a page; ${inApp - exact - pageOnly - bad.length} name the document only.`
);
if (bad.length) {
  console.log(`\n${bad.length} don't resolve:`);
  bad.forEach(b => console.log('  ' + b));
  process.exit(1);
}
console.log('All references resolve.');
