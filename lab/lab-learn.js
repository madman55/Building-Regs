/* Building Regs Lab · learning experiments.
   Switches (features.js):
     hunter     – Regulation Hunter: find the answer in the real documents (lab-hunts.js). In lessons and on a Learn card.
     reframe    – "Where would you check?": most type-the-figure questions ask where the figure lives instead.
     confidence – on about one question in three: Sure / Think so / Not sure: let me check. Checking never costs a heart.
   Talks to the app only through window.APPX (see index.html) and the hooks that call LABQ.*. */
window.LABQ = (function () {
  const X = window.APPX, on = id => !!(window.LAB && LAB.on(id));
  const HKEY = 'regs-lab-hunts', CKEY = 'regs-lab-confidence';
  const load = (k, d) => { try { return Object.assign(d, JSON.parse(localStorage.getItem(k) || '{}')); } catch (e) { return d; } };
  const store = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  const HS = load(HKEY, {}), CS = load(CKEY, { sure: 0, sureOk: 0, think: 0, thinkOk: 0, check: 0, checkOk: 0 });
  const HUNTS = window.LAB_HUNTS || [];
  const hash = s => { let h = 7; for (const c of String(s)) h = (h * 31 + c.charCodeAt(0)) | 0; return Math.abs(h); };
  const $ = s => document.querySelector(s), esc = s => X.esc(s);
  const docBy = code => X.OFF.find(d => d.code === code);
  const block = (code, ref) => { const D = docBy(code); return D && window.LABREF ? LABREF.refBlock(`${D.short}, ${ref}`) : null; };
  const subName = b => { const p = String(b.sub || '').split(' · ').map(x => x.trim()).filter(Boolean); const last = p[p.length - 1];
    return (p.length > 1 && !/^For /.test(last) ? last : p[0]) || String(b.sec || '').replace(/^Section \d+:\s*/, ''); };
  // a distractor must not itself contain the answer figure (e.g. "Ladders a maximum of 9m long" when the answer is 9 m)
  const hasFig = (o, q) => { const f = String(q.a[0] || '').replace(/[.]/g, '\\.'), u = String(q.u || '').trim(); if (!f) return false;
    const uu = u === 'm²' ? '(m²|m2)' : u ? u.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : '';
    return new RegExp(`(^|[^\\d.])${f}\\s?${uu}`, 'i').test(o.text + ' ' + (o.title || '')); };
  const cites = (o, b) => new RegExp(`(paragraphs?|para|${b.k})[^.]{0,30}\\b${String(b.num).replace(/\./g, '\\.')}\\b`, 'i').test(o.text);
  const optLabel = b => b.k === 'para' ? `Para ${b.num} · ${subName(b)}` : `${X.adkLabel(b)} · ${b.title || subName(b)}`;
  const snip = t => { const w = String(t || '').split(/\s+/); return w.slice(0, 18).join(' ') + (w.length > 18 ? '…' : ''); };

  /* =============== "Where would you check?" (reframe) =============== */
  function reframe(q) {
    if (q.t !== 'num' || !q.r || !window.LABREF) return q;
    const b = LABREF.refBlock(q.r);
    if (!b || hash(q.id) % 3 === 0) return q; // keep about a third as figure questions
    const D = X.docOf(b), lab = X.adkLabel(b);
    const pool = D.blocks.filter(o => ['table', 'diagram', 'para'].includes(o.k) && o.id !== b.id && o.pg !== b.pg && o.num !== b.num &&
      !o.text.includes(lab) && !cites(o, b) && !hasFig(o, q) && (o.k !== 'para' || subName(o) !== subName(b)));
    const same = X.shuf(pool.filter(o => o.sec === b.sec)), other = X.shuf(pool.filter(o => o.sec !== b.sec));
    const picks = [], seen = new Set([optLabel(b)]);
    const nums = new Set([b.k + b.num]);
    for (const o of same.slice(0, 6).concat(other)) { const t = optLabel(o); if (!seen.has(t) && !nums.has(o.k + o.num)) { seen.add(t); nums.add(o.k + o.num); picks.push(t); } if (picks.length === 3) break; }
    if (picks.length < 3) return q;
    return Object.assign({}, q, {
      t: 'mc', src: true, kind: 'Where would you check?', o: [optLabel(b)].concat(picks),
      x: `${D.short}, ${lab}. The figure is ${q.a[0]}${q.u ? ' ' + q.u : ''}.${q.x ? ' ' + q.x : ''} Open it to read the conditions that come with it.`
    });
  }

  /* =============== Regulation Hunter =============== */
  const huntFor = (o) => {
    const l = X.LES[o.idx]; if (!l) return null;
    const unit = (X.UNITS[l.ui] || {}).k;
    const doc = unit === 'K' ? 'K' : unit === 'B' && (!l.meta || l.meta.vol === 1) ? 'B1' : null;
    if (!doc) return null;
    const list = HUNTS.filter(h => h.doc === doc && !(HS[h.id] && HS[h.id].found));
    return list.length ? list[hash(l.key) % list.length] : null;
  };
  function huntQ(h) {
    const D = docBy(h.doc);
    return { t: 'hunt', id: 'hunt:' + h.id, hunt: h.id, soft: true, kind: 'Regulation Hunter', q: h.brief,
      r: D ? `${D.short}, ${h.accept[0]}` : '', doc: D ? D.pageUrl : '', x: h.follow.why };
  }
  const huntBody = q => `<div class="hqcard"><p>Find the paragraph, table or diagram that answers this, in the real document. Searching is part of the game, and there's no timer.</p></div>`;
  function bindHunt(q) {
    const ck = $('#ck'); if (!ck) return;
    ck.disabled = false; ck.textContent = 'Start the hunt';
    ck.onclick = () => { X.SFX.tap(); openHunt(HUNTS.find(h => h.id === q.hunt), res => { const L = X.L; if (!L) return; L.bonus = (L.bonus || 0) + res.xp; X.verdict(res.found, res.label); }); };
  }

  let H = null; // the open hunt or look-up overlay
  function overlay(inner) {
    closeOverlay();
    const v = document.createElement('div'); v.className = 'hunt'; v.id = 'hunt'; v.setAttribute('role', 'dialog'); v.setAttribute('aria-modal', 'true');
    v.innerHTML = inner; document.body.appendChild(v); document.documentElement.classList.add('huntopen'); return v;
  }
  function closeOverlay() { const v = $('#hunt'); if (v) v.remove(); document.documentElement.classList.remove('huntopen'); }
  const foundCount = () => HUNTS.filter(h => HS[h.id] && HS[h.id].found).length;

  function openHunt(h, done) {
    if (!h) return;
    const acc = new Set(), near = new Set(), accB = [];
    const ready = () => { acc.clear(); near.clear(); accB.length = 0;
      h.accept.forEach(r => { const b = block(h.doc, r); if (b) { acc.add(b.id); accB.push(b); } });
      (h.near || []).forEach(r => { const b = block(h.doc, r); if (b) near.add(b.id); }); };
    H = { h, done, tries: 0, hint: false, opened: new Set(), list: [], stage: 'search' };
    const v = overlay(`<div class="lhbar"><button class="hx" id="hx" aria-label="Close the hunt">${X.I.cross}</button><b>${esc(h.bar || 'Regulation Hunter')}</b><span class="hcount">${h.bar ? '' : `${foundCount()} of ${HUNTS.length} found`}</span></div>
      <div class="hbody" id="hbody"><div class="hbrief"><div class="lhm">${X.mascot('think')}</div><div><small>${esc(h.title)}</small><p>${esc(h.brief)}</p></div></div>
      <p class="hst" id="hst">Search the documents. Open a result to read it, then tap <b>This answers it</b>.</p>
      <div class="sbox hsbox">${X.SEARCHIC}<input id="hq" type="search" placeholder="Search the documents" aria-label="Search the documents" autocomplete="off"></div>
      <div id="hres"></div></div>
      <div class="hfoot" id="hfoot"><button class="btn ghost" id="hhint">Hint</button></div>`);
    v.querySelector('#hx').onclick = () => { closeOverlay(); H = null; };
    v.querySelector('#hhint').onclick = () => { H.hint = true; status(`<b>Hint:</b> ${esc(h.hint)}`, 'tip'); };
    const inp = v.querySelector('#hq'); let t = 0;
    inp.oninput = () => { clearTimeout(t); t = setTimeout(() => results(inp.value), 220); };
    X.OFF_READY.then(() => { ready(); setTimeout(() => inp.focus(), 80); });
    function status(html, cls) { const s = $('#hst'); if (s) { s.className = 'hst ' + (cls || ''); s.innerHTML = html; } }
    function results(q) {
      const box = $('#hres'); if (!box) return;
      if (!q.trim()) { box.innerHTML = ''; return; }
      const r = X.runSearch(q); H.list = r.res.filter(x => X.isOfficial(x.d)).slice(0, 12);
      box.innerHTML = H.list.length ? H.list.map((x, i) => { const b = x.d.b, D = X.docOf(b);
        return `<div class="hcard"><button class="hopen" data-i="${i}"><small>${esc(D.short)} · ${esc(X.adkLabel(b))}${b.pp ? ' · page ' + esc(b.pp) : ''}</small><b>${X.hl(b.title || snip(b.text), x.hits)}</b></button><button class="hpick" data-i="${i}">This answers it</button></div>`; }).join('')
        : '<p class="small" style="margin:12px 4px">Nothing found. Try other words, the way the document might say it.</p>';
      box.querySelectorAll('.hopen').forEach(el => el.onclick = () => { const b = H.list[+el.dataset.i].d.b; H.opened.add(b.id); X.openOfficial(b); });
      box.querySelectorAll('.hpick').forEach(el => el.onclick = () => pick(H.list[+el.dataset.i].d.b));
    }
    function pick(b) {
      if (acc.has(b.id)) { X.SFX.good(); return follow(true, b); }
      H.tries++; X.SFX.bad();
      const sameDoc = X.docOf(b).code === h.doc, samePage = accB.some(a => a.pg === b.pg);
      if (H.tries >= 3) return reveal();
      if (near.has(b.id) || (sameDoc && samePage)) status(`<b>Close.</b> You're in the right area, but this isn't quite it. Look at the ${accB[0] && accB[0].k !== 'para' ? accB[0].k : 'paragraph'} near this one.`, 'close');
      else if (!sameDoc) status(`<b>Not this one.</b> The answer is in a different document.${H.tries >= 2 ? ' Try ' + esc(docBy(h.doc).short) + '.' : ''}`, 'no');
      else status(`<b>Not quite.</b> Right document, wrong part.${H.tries >= 2 ? ' <b>Hint:</b> ' + esc(h.hint) : ''}`, 'no');
      if (H.tries >= 2) H.hint = true;
    }
    function reveal() {
      const b = accB[0]; if (!b) return finish(false, false);
      const body = $('#hbody');
      body.innerHTML = `<div class="hbrief"><div class="lhm">${X.mascot('think')}</div><div><small>Here it is</small><p>The answer is <b>${esc(docBy(h.doc).short)}, ${esc(X.adkLabel(b))}</b>. Open it and read it, then answer one question about it.</p></div></div>
        <div class="hcard"><button class="hopen" id="hshow"><small>${esc(docBy(h.doc).short)} · ${esc(X.adkLabel(b))}${b.pp ? ' · page ' + esc(b.pp) : ''}</small><b>${esc(b.title || snip(b.text))}</b></button></div>`;
      $('#hfoot').innerHTML = `<button class="btn" id="hgo">I've read it</button>`;
      $('#hshow').onclick = () => { H.opened.add(b.id); X.openOfficial(b); };
      $('#hgo').onclick = () => follow(false, b);
    }
    function follow(found, b) {
      H.found = found; H.b = b; H.stage = 'follow';
      if (!h.follow) return finish(found, null);
      const f = h.follow, opts = X.shuf(f.o.map((t, k) => ({ t, ok: k === 0 })));
      $('#hbody').innerHTML = `<div class="hbrief"><div class="lhm">${X.mascot(found ? 'happy' : 'idle')}</div><div><small>${found ? (H.tries ? 'Found it' : 'Found it first time') : 'One question'}</small><p>${found ? `That's it: <b>${esc(docBy(h.doc).short)}, ${esc(X.adkLabel(b))}</b>. Now read it properly.` : 'Answer from what you just read.'}</p></div></div>
        <button class="linkb" id="hread">Open ${esc(X.adkLabel(b))}</button>
        <h3 class="hfq">${esc(f.q)}</h3><div class="opts">${opts.map((o, k) => `<button class="opt" data-k="${k}"><span class="k">${k + 1}</span>${esc(o.t)}</button>`).join('')}</div><div id="hwhy"></div>`;
      $('#hfoot').innerHTML = '';
      $('#hread').onclick = () => { H.opened.add(b.id); X.openOfficial(b); };
      document.querySelectorAll('#hbody .opt').forEach(el => el.onclick = () => {
        const o = opts[+el.dataset.k]; document.querySelectorAll('#hbody .opt').forEach((x, k) => { x.disabled = true; if (opts[k].ok) x.classList.add('good'); else if (x === el) x.classList.add('wrong'); });
        o.ok ? X.SFX.good() : X.SFX.bad();
        $('#hwhy').innerHTML = `<p class="hwhy"><b>${o.ok ? 'Right.' : 'Not quite.'}</b> ${esc(f.why)}</p>`;
        $('#hfoot').innerHTML = `<button class="btn" id="hnext">Continue</button>`;
        $('#hnext').onclick = () => finish(found, o.ok);
      });
    }
    const tick = (ok, t) => `<li class="${ok ? 'y' : 'n'}">${ok ? X.I.check : X.I.cross}<span>${t}</span></li>`;
    function finish(found, followOk) {
      const read = accB.some(a => H.opened.has(a.id));
      const xp = (found ? (H.tries ? 6 : 10) : 2) + (read ? 3 : 0) + (followOk ? 3 : 0);
      const followLine = followOk === null ? '' : tick(followOk, followOk ? 'Answered the follow-up' : 'Missed the follow-up');
      const prev = HS[h.id] || {};
      HS[h.id] = { found: !!(prev.found || found), tries: H.tries, at: Date.now(), best: Math.max(prev.best || 0, xp) }; store(HKEY, HS);
      $('#hbody').innerHTML = `<div class="hbrief"><div class="lhm">${X.mascot(found && followOk !== false ? 'cheer' : 'idle')}</div><div><small>Hunt complete</small><p><b>+${xp} XP.</b> ${found ? 'You found it yourself.' : 'Next time, try the hint sooner.'}</p></div></div>
        <ul class="hdeb">${tick(found, found ? (H.tries ? `Found after ${H.tries + 1} tries` : 'Found it first time') : 'Shown the answer')}${tick(read, read ? 'Opened the page and read it' : 'Didn\'t open the page')}${followLine}</ul>
        <p class="small">Always read the whole paragraph, including its conditions and anything it refers to.</p>`;
      $('#hfoot').innerHTML = `<button class="btn" id="hdone">Done</button>`;
      $('#hdone').onclick = () => { closeOverlay(); const label = `${docBy(h.doc).short}, ${X.adkLabel(H.b || accB[0])}`; const d = H.done; H = null; d && d({ found, xp, label }); };
    }
  }
  function playStandalone(h) {
    openHunt(h, res => { X.addXp(res.xp); X.save(); if (X.view === 'learn') X.render(); X.toast(`+${res.xp} XP`); });
  }
  function nextHunt() { return HUNTS.find(h => !(HS[h.id] && HS[h.id].found)) || HUNTS[0]; }
  function learnCard() {
    if (!on('hunter') || !HUNTS.length) return '';
    const n = foundCount();
    return `<div class="card hunter"><div class="hh"><div class="lhm">${X.mascot('think')}</div><div><b>Regulation Hunter</b><span>Find answers in the real documents. ${n} of ${HUNTS.length} found.</span></div></div>
      <div class="row2"><button class="btn" data-labh="next">${n ? 'Next hunt' : 'Start a hunt'}</button><button class="btn ghost" data-labh="list">All hunts</button></div></div>`;
  }
  function listSheet() {
    X.sheet(`<h2>Regulation Hunter</h2><p class="small">Each hunt is a real question. Find the paragraph, table or diagram that answers it.</p>
      <div class="hlist">${HUNTS.map(h => { const s = HS[h.id]; const D = docBy(h.doc);
        return `<button class="hli${s && s.found ? ' y' : ''}" data-labh="${esc(h.id)}"><span>${s && s.found ? X.I.check : X.I.star}</span><b>${esc(h.title)}</b><small>${esc(D ? D.short : h.doc)}</small></button>`; }).join('')}</div>
      <button class="btn ghost" data-close>Close</button>`);
  }

  /* =============== confidence check =============== */
  function afterAsk(q) {
    const L = X.L; if (!L) return;
    L.conf = null;
    if (!on('confidence') || X.easy() || !['mc', 'tf', 'num'].includes(q.t) || q.src || q.cmp || q.soft) return;
    if (hash(q.id + ':' + L.t0) % 3 !== 0) return;
    const ck = $('#ck'); if (!ck) return;
    const orig = ck.onclick;
    ck.onclick = () => { if (L.conf) return orig(); askConf(orig, q); };
  }
  function askConf(orig, q) {
    const L = X.L, ft = $('#ft .in'); if (!ft) return;
    const keep = ft.innerHTML;
    ft.innerHTML = `<p class="cq">How sure are you?</p><div class="crow"><button class="cb" data-c="sure">Sure</button><button class="cb" data-c="think">Think so</button><button class="cb chk" data-c="check">Not sure: check</button></div>`;
    ft.querySelectorAll('.cb').forEach(b => b.onclick = () => {
      X.SFX.tap(); const c = b.dataset.c; L.conf = c;
      if (c !== 'check') return orig();
      lookUp(q, () => { ft.innerHTML = keep; const ck = $('#ck'); if (ck) { ck.textContent = 'Check'; ck.disabled = q.t === 'num' ? !($('#ni') || {}).value : L.sel === null; ck.onclick = orig; } });
    });
  }
  function lookUp(q, back) {
    const v = overlay(`<div class="lhbar"><button class="hx" id="hx" aria-label="Back to the question">${X.I.cross}</button><b>Check it</b><span class="hcount">No heart at risk</span></div>
      <div class="hbody"><div class="hbrief"><div class="lhm">${X.mascot('think')}</div><div><small>The question</small><p>${esc(q.q)}</p></div></div>
      <div class="sbox hsbox">${X.SEARCHIC}<input id="hq" type="search" aria-label="Search the documents" autocomplete="off"></div><div id="hres"></div></div>
      <div class="hfoot"><button class="btn" id="hback">Back to the question</button></div>`);
    const inp = v.querySelector('#hq'), box = v.querySelector('#hres');
    const run = () => { const r = X.runSearch(inp.value); const list = r.res.filter(x => X.isOfficial(x.d)).slice(0, 10);
      box.innerHTML = list.map((x, i) => { const b = x.d.b, D = X.docOf(b); return `<div class="hcard"><button class="hopen" data-i="${i}"><small>${esc(D.short)} · ${esc(X.adkLabel(b))}${b.pp ? ' · page ' + esc(b.pp) : ''}</small><b>${X.hl(b.title || snip(b.text), x.hits)}</b></button></div>`; }).join('') || '<p class="small" style="margin:12px 4px">Nothing found. Try other words.</p>';
      box.querySelectorAll('.hopen').forEach(el => el.onclick = () => X.openOfficial(list[+el.dataset.i].d.b)); };
    let t = 0; inp.oninput = () => { clearTimeout(t); t = setTimeout(run, 220); };
    inp.value = String(q.q || '').replace(/[?.,]/g, ' ').replace(/\s+/g, ' ').trim();
    X.OFF_READY.then(run);
    const close = () => { closeOverlay(); back(); };
    v.querySelector('#hx').onclick = close; v.querySelector('#hback').onclick = close;
  }

  /* =============== verdict extras and stats =============== */
  function extra(ok, q) {
    const L = X.L; if (!L || !L.conf) return '';
    const c = L.conf; L.conf = null;
    CS[c]++; if (ok) CS[c + 'Ok']++; store(CKEY, CS);
    if (c === 'sure' && !ok) return `<div class="labnote warn"><b>This is why we check.</b> You were sure, and the source says something else. Open it and read the conditions that go with it.</div>`;
    if (c === 'check') return ok ? `<div class="labnote ok"><b>Checked, and right.</b> That's the habit. No heart was at risk.</div>`
      : `<div class="labnote ok"><b>You checked, so no heart lost.</b> Compare what you read with the answer above.</div>`;
    return '';
  }
  function profileLine() {
    const bits = [];
    if (on('hunter') && HUNTS.length) bits.push(`Regulation Hunter: ${foundCount()} of ${HUNTS.length} found.`);
    if (on('confidence')) bits.push(CS.sure ? `When you said Sure, you were right ${CS.sureOk} of ${CS.sure} times.` : 'Your sure-and-right score appears here after a few confidence checks.');
    if (on('confidence') && CS.check) bits.push(`You stopped to check ${CS.check} time${CS.check === 1 ? '' : 's'}.`);
    return bits.length ? `<p class="small labstats">${bits.map(esc).join('<br>')}</p>` : '';
  }

  /* =============== lesson preparation =============== */
  function prepare(qs, o) {
    if (on('reframe')) qs = qs.map(reframe);
    if (on('hunter') && o && o.idx >= 0 && !o.practice && !o.final) {
      const h = huntFor(o);
      if (h && docBy(h.doc)) { qs = qs.slice(); qs.splice(Math.max(1, Math.ceil(qs.length / 2)), 0, huntQ(h)); }
    }
    return qs;
  }

  document.addEventListener('click', e => {
    const t = e.target.closest && e.target.closest('[data-labh]'); if (!t) return;
    const a = t.dataset.labh; e.preventDefault(); X.SFX.tap();
    if (a === 'next') playStandalone(nextHunt());
    else if (a === 'list') listSheet();
    else { const v = document.querySelector('.veil'); if (v) v.remove(); playStandalone(HUNTS.find(h => h.id === a)); }
  });
  if (X.view === 'learn' && on('hunter')) setTimeout(() => X.render(), 0);

  return { prepare, huntBody, bindHunt, afterAsk, extra, learnCard, profileLine, openHunt, listSheet, hunts: HUNTS, _state: () => ({ HS, CS }), _reframe: reframe };
})();
