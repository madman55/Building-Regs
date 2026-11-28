/* Building Regs Lab · Phase 1: reference upgrades (switch id: 'reference').
   - Content labels: Law / Statutory guidance / Explanation (Fictional comes with case files).
   - Edition on every official result, and a status sheet for each document.
   - Bookmarks for paragraphs, tables, diagrams or pages, flagged if the text later moves or changes.
   - "Report a problem" links with the item's details filled in (hidden unless LAB.reports is true).
   - Lesson references ("AD B Vol 1, Table 3.1") open the exact table or paragraph.
   Uses the app's own helpers (OFF, docOf, adkLabel, ppOf, sheet, openOfficial, esc, GOV, apiPath).
   Every entry point is called through RF() in index.html, which returns '' when the switch is off. */
window.LABREF = (function () {
  const X = window.APPX;
  const BKEY = 'regs-lab-bookmarks',
    VERSION = 'Lab 0.2';
  let BM = [];
  try {
    BM = JSON.parse(localStorage.getItem(BKEY) || '[]') || [];
  } catch (e) {
    BM = [];
  }
  const saveBM = () => {
    try {
      localStorage.setItem(BKEY, JSON.stringify(BM));
    } catch (e) {}
  };

  /* ---------- labels ---------- */
  const KIND = {
    law: ['Law', 'lab-law'],
    guide: ['Statutory guidance', 'lab-guide'],
    expl: ['Explanation', 'lab-expl'],
    fict: ['Fictional', 'lab-fict']
  };
  const chip = k => `<span class="kd ${KIND[k][1]}">${KIND[k][0]}</span>`;
  const kindOf = b => (b && b.k === 'req' ? 'law' : 'guide');
  const badge = b => chip(kindOf(b));
  const lessonBadge = () => chip('expl');
  const ed = b => {
    const D = X.docOf(b);
    return D && D.edShort ? ` · ${X.esc(D.edShort)}` : '';
  };
  const legend = () => `<button class="lablink" data-lab="legend">What do these labels mean?</button>`;
  function legendSheet() {
    X.sheet(`<h2>What the labels mean</h2>
      <div class="labkey">${chip('law')}<p>The Building Regulations requirement itself, as quoted in the Approved Document. Building work has to meet it.</p></div>
      <div class="labkey">${chip('guide')}<p>Approved Document text, word for word. It shows common ways of meeting the requirements. You don't have to follow it, but under section 7 of the Building Act 1984, following it can be relied on as tending to show you've met the requirement, and not following it as tending to show you haven't.</p></div>
      <div class="labkey">${chip('expl')}<p>Written for this app to help you learn: lesson intros, quiz wording, "why it matters" lines. Not official. Check the source before relying on it.</p></div>
      <div class="labkey">${chip('fict')}<p>Made-up projects and people used in exercises. Coming with case files.</p></div>
      <button class="btn" data-close>Got it</button>`);
  }

  /* ---------- document status ---------- */
  const day = t => new Date(t).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  function govLine(D) {
    let path = '';
    try {
      path = X.apiPath(D.pageUrl);
    } catch (e) {}
    const g = path && typeof X.GOV === 'object' ? X.GOV[path] : null,
      copy = Date.parse(D.checked || '');
    let at = 0;
    try {
      at = +localStorage.getItem(X.GKEY + '-at') || 0;
    } catch (e) {}
    const when = at
      ? `Last checked from this phone: ${day(at)}.`
      : 'Not checked from this phone yet (it checks when online).';
    if (g && copy && g.t > copy + 864e5)
      return `<p class="labwarn"><b>GOV.UK has updated this page since this copy was made</b> (updated ${day(g.t)}). Check GOV.UK for a newer version before relying on this one. ${when}</p>`;
    if (g)
      return `<p class="labok">No newer version on GOV.UK. The GOV.UK page was last updated on ${day(g.t)}. ${when}</p>`;
    return `<p class="labok">${when}</p>`;
  }
  function docSheet(D) {
    const first = D.pagemap ? Math.min(...Object.keys(D.pagemap).map(Number)) : D.offset + 1;
    const row = (k, v) => (v ? `<div class="labrow"><span>${k}</span><p>${X.esc(v)}</p></div>` : '');
    X.sheet(
      `<h2>${X.esc(D.title)}</h2>
      ${row('Edition', D.edition)}${row('Applies in', (D.jurisdiction || 'England') + ' only. Wales, Scotland and Northern Ireland have their own rules.')}
      ${row('Latest changes', D.inForce)}${row('Not yet in force', D.notYet || 'Nothing announced in this copy.')}
      ${row('Earlier rules still apply when', D.transition)}${row('Copy in this app made', D.checked ? day(Date.parse(D.checked)) : '')}
      ${govLine(D)}
      <p class="small">Which edition applies to a real project depends on when it was notified and started. Check with the project's building control body.</p>
      <button class="btn" id="labopen">Open the document</button>
      <a class="btn ghost labgov" href="${X.esc(D.pageUrl)}" target="_blank" rel="noopener">Open on GOV.UK ${X.ARROW}</a>
      <button class="btn ghost" data-close>Close</button>`,
      (v, close) => {
        v.querySelector('#labopen').onclick = () => {
          close();
          X.openOfficial(null, first, D);
        };
      }
    );
  }

  /* ---------- bookmarks ---------- */
  const sig = t => {
    let h = 5381;
    for (let i = 0; i < t.length; i++) h = (h * 33 + t.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  };
  const snip = t => {
    const w = String(t || '').split(/\s+/);
    return w.slice(0, 14).join(' ') + (w.length > 14 ? '…' : '');
  };
  function current() {
    if (!X.DV) return null;
    const D = X.DV.D,
      b = X.DV.b && X.DV.b.pg === X.DV.pg ? X.DV.b : null;
    return b ? { doc: D.code, id: b.id } : { doc: D.code, id: null, pg: X.DV.pg };
  }
  const same = (m, c) => m.doc === c.doc && (c.id ? m.id === c.id : !m.id && m.pg === c.pg);
  const isSaved = c => !!c && BM.some(m => same(m, c));
  function toggle() {
    const c = current();
    if (!c) return;
    const i = BM.findIndex(m => same(m, c));
    if (i >= 0) {
      BM.splice(i, 1);
      X.toast('Removed from Saved');
    } else {
      const D = X.DV.D,
        b = c.id ? X.DV.b : null;
      BM.unshift({
        doc: D.code,
        short: D.short,
        ed: D.edition,
        id: c.id,
        sig: b ? sig(b.text) : null,
        label: b ? (b.k === 'term' ? 'Key term' : X.adkLabel(b)) : 'Page ' + (X.ppOf(D, X.DV.pg) || X.DV.pg),
        title: b ? b.title || snip(b.text) : '',
        pp: b ? b.pp : X.ppOf(D, X.DV.pg),
        pg: b ? b.pg : X.DV.pg,
        at: Date.now()
      });
      X.toast('Saved. Find it on the search screen');
    }
    saveBM();
    vsync();
  }
  function resolve(m) {
    const D = X.OFF.find(d => d.code === m.doc),
      b = D && m.id ? D.blocks.find(x => x.id === m.id) : null;
    return { D, b, changed: !!m.id && (!b || sig(b.text) !== m.sig), older: !!D && m.ed !== D.edition };
  }
  function bmCard(m, i) {
    const r = resolve(m);
    const flag = !r.D
      ? '<span class="kd st2">Document no longer in the app</span>'
      : r.changed
        ? '<span class="kd st2">Moved or changed since you saved it</span>'
        : r.older
          ? '<span class="kd st1">Saved from an earlier edition</span>'
          : '';
    return `<div class="labbm"><button class="labbm-open" data-lab="bm" data-i="${i}"><small>${X.esc(m.short)} · ${X.esc(m.label)}${m.pp ? ' · page ' + X.esc(m.pp) : ''}</small>${m.title ? `<b>${X.esc(m.title)}</b>` : ''}${flag}</button><button class="labbm-x" data-lab="unbm" data-i="${i}" aria-label="Remove ${X.esc(m.label)} from Saved">${X.I.cross}</button></div>`;
  }
  function openBM(i) {
    const m = BM[i];
    if (!m) return;
    const r = resolve(m);
    if (!r.D) return;
    if (r.b && !r.changed) X.openOfficial(r.b);
    else {
      X.openOfficial(null, r.b ? r.b.pg : m.pg, r.D);
      if (r.changed) X.toast('This may have moved. Check the page, or search for it again');
    }
  }
  function home() {
    const saved = BM.length ? `<p class="small" style="margin:4px 4px 6px">Saved</p>${BM.map(bmCard).join('')}` : '';
    const docs = X.OFF.map(
      D =>
        `<button class="labdoc" data-lab="doc" data-code="${X.esc(D.code)}"><b>${X.esc(D.short)}</b><small>${X.esc(D.edShort || D.edition)}</small>${D.notYet ? '<span class="kd st2">Changes coming 2029</span>' : ''}</button>`
    ).join('');
    return (
      saved +
      (docs
        ? `<p class="small" style="margin:${saved ? 16 : 4}px 4px 6px">Documents in the search: tap one for its edition and status</p><div class="labdocs">${docs}</div>`
        : '')
    );
  }

  /* ---------- report a problem ---------- */
  function reportUrl(title, lines) {
    const body =
      "What's wrong (and what it should say, if you know):\n\n\n---\n" +
      lines.filter(Boolean).join('\n') +
      '\nApp: Building Regs ' +
      VERSION;
    const to = (window.LAB && LAB.reportTo) || '';
    return to
      ? `mailto:${to}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`
      : `https://github.com/madman55/Building-Regs/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  }
  function viewerReport() {
    if (!X.DV) return '#';
    const D = X.DV.D,
      b = X.DV.b && X.DV.b.pg === X.DV.pg ? X.DV.b : null,
      where = b ? X.adkLabel(b) : 'page ' + (X.ppOf(D, X.DV.pg) || X.DV.pg);
    return reportUrl(`Problem: ${D.short}, ${where}`, [
      `Item: ${D.short} · ${where}${b ? ' (' + b.id + ')' : ''}`,
      `Edition: ${D.edition}`,
      `PDF page: ${X.DV.pg}`
    ]);
  }
  const reportsOn = () => !!(window.LAB && LAB.reports);
  const qreport = q =>
    !reportsOn()
      ? ''
      : `<a class="lablink labrep" href="${X.esc(reportUrl('Problem with a question', [`Question: ${q.q || ''}`, `Answer shown: ${typeof X.answerOf === 'function' ? X.answerOf(q) : ''}`, `Reference: ${q.r || ''}`, `Question ID: ${q.id || ''}`]))}" target="_blank" rel="noopener">Report a problem with this question</a>`;

  /* ---------- viewer ---------- */
  const STAR =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" fill="currentColor"/></svg>';
  const vbtns = () =>
    `<button class="dvi" id="labstar" data-lab="star" aria-pressed="false" aria-label="Save this">${STAR}</button><button class="dvi labi" data-lab="info" aria-label="About this document">i</button>`;
  const vfoot = () =>
    `<span class="labvf" id="labvf"></span>${reportsOn() ? '<a class="lablink labrep" id="labrep" href="#" target="_blank" rel="noopener">Report a problem</a>' : ''}`;
  function vsync() {
    if (!X.DV) return;
    const s = document.getElementById('labstar'),
      c = current();
    if (s) {
      const on = isSaved(c);
      s.setAttribute('aria-pressed', on);
      s.setAttribute('aria-label', on ? 'Remove from Saved' : 'Save this');
    }
    const f = document.getElementById('labvf'),
      b = X.DV.b && X.DV.b.pg === X.DV.pg ? X.DV.b : null;
    if (f)
      f.innerHTML = `${X.esc(X.DV.D.short)} · ${X.esc(X.DV.D.edShort || X.DV.D.edition)}${b ? ' · ' + badge(b) : ''}`;
    const a = document.getElementById('labrep');
    if (a) a.href = viewerReport();
  }

  /* ---------- lesson references → exact block ---------- */
  function refBlock(r) {
    const D = typeof X.refDoc === 'function' ? X.refDoc(r) : null;
    if (!D) return null;
    let m = /\b(Table|Diagram)\s+([A-Z]?\d+(?:\.\d+)?[a-z]?)/.exec(r);
    if (m) return D.blocks.find(b => b.k === m[1].toLowerCase() && b.num === m[2]) || null;
    m = /\bpara(?:graph)?s?\s+([A-Z]?\d+\.\d+[a-z]?)/i.exec(r);
    if (m) return D.blocks.find(b => b.k === 'para' && b.num === m[1]) || null;
    m = /\bRequirement\s+([A-Z]\d+)/.exec(r);
    if (m) return D.blocks.find(b => b.k === 'req' && String(b.title || '').startsWith('Requirement ' + m[1])) || null;
    return null;
  }
  const blk = r => {
    const b = refBlock(r);
    return b ? ` data-blk="${X.esc(b.id)}"` : '';
  };

  /* ---------- clicks ---------- */
  document.addEventListener('click', e => {
    const t = e.target.closest && e.target.closest('[data-lab]');
    if (!t) return;
    const a = t.dataset.lab;
    if (a === 'legend') {
      e.preventDefault();
      legendSheet();
    } else if (a === 'doc') {
      e.preventDefault();
      const D = X.OFF.find(d => d.code === t.dataset.code);
      if (D) docSheet(D);
    } else if (a === 'info') {
      e.preventDefault();
      if (X.DV) docSheet(X.DV.D);
    } else if (a === 'star') {
      e.preventDefault();
      toggle();
    } else if (a === 'bm') {
      e.preventDefault();
      openBM(+t.dataset.i);
    } else if (a === 'unbm') {
      e.preventDefault();
      BM.splice(+t.dataset.i, 1);
      saveBM();
      const box = document.getElementById('sres');
      if (box && typeof X.drawResults === 'function') X.drawResults();
    }
  });

  return {
    badge,
    lessonBadge,
    ed,
    legend,
    home,
    vbtns,
    vfoot,
    vsync,
    blk,
    qreport,
    refBlock,
    docSheet,
    _bookmarks: () => BM
  };
})();
