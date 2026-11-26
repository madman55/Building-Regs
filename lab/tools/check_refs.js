/* Answer checker: every lesson reference that names a table, diagram, paragraph or requirement in a
   document the app holds must point at real text in the current document packs.
   Run from the Lab folder:  node tools/check_refs.js
   Exits with code 1 if anything doesn't resolve, so it can gate a document update.
   The matching rules are the same as refBlock() in lab-reference.js. Change both together. */
const fs = require('fs'), path = require('path');
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
window.REG_UNITS.forEach((u, ui) => u.lessons.forEach((l, li) => (Array.isArray(l) ? l : l.qs || []).forEach((q, qi) => q.r && qs.push({ q, where: `${u.k} lesson ${li + 1} q${qi + 1}` }))));
let inApp = 0, exact = 0, pageOnly = 0;
const bad = [];
for (const { q, where } of qs) {
  const D = refDoc(q.r); if (!D) continue;
  inApp++;
  const w = wants(q.r), p = /p\.(\d+)/.exec(q.r);
  if (w) {
    const b = find(D, w);
    if (b) exact++; else bad.push(`${where}: "${q.r}": ${w.k} ${w.num || w.req} not found in ${D.short}`);
  } else if (p) {
    pageOnly++;
    const ok = D.pagemap ? Object.values(D.pagemap).includes(+p[1]) : +p[1] + D.offset <= D.pages;
    if (!ok) bad.push(`${where}: "${q.r}": page ${p[1]} is not in ${D.short}`);
  }
}
console.log(`${qs.length} questions with references; ${inApp} point at documents in the app.`);
console.log(`${exact} open the exact table, diagram, paragraph or requirement; ${pageOnly} open a page; ${inApp - exact - pageOnly - bad.length} name the document only.`);
if (bad.length) { console.log(`\n${bad.length} don't resolve:`); bad.forEach(b => console.log('  ' + b)); process.exit(1); }
console.log('All references resolve.');
