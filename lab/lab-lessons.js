/* Building Regs Lab · teaching lessons (switch id: 'lessons').
   Lessons are JSON files in lessons/ (see lessons/README.md). This file is the player: it knows how to show each
   step type, and holds the drawings and experiments that lessons refer to by name.
   Rules it enforces: every step shows its label (Explanation, Illustration, Law, Statutory guidance, Fictional);
   official text only appears as live quotes from the document packs; experiments show measurements, never verdicts.
   Talks to the app through window.APPX, LABREF (labels, document status) and LABQ (the hunt screen). */
window.LABL = (function () {
  const X = window.APPX, on = () => !!(window.LAB && LAB.on('lessons'));
  const KEY = 'regs-lab-lessons';
  let DONE = {}; try { DONE = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) {}
  const store = () => { try { localStorage.setItem(KEY, JSON.stringify(DONE)); } catch (e) {} };
  const esc = s => X.esc(s), $ = s => document.querySelector(s);
  let INDEX = null; const FILES = {};
  const getIndex = () => INDEX ? Promise.resolve(INDEX) : fetch('lessons/index.json').then(r => r.json()).then(j => (INDEX = j));
  const getLesson = id => FILES[id] ? Promise.resolve(FILES[id]) : fetch(`lessons/${id}.json`).then(r => r.json()).then(j => (FILES[id] = j));
  const sig = t => { let h = 5381; for (let i = 0; i < t.length; i++) h = (h * 33 + t.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };

  /* ---------- labels ---------- */
  const LBL = { expl: ['Explanation', 'lab-expl'], illus: ['Illustration', 'lab-illus'], law: ['Law', 'lab-law'], guide: ['Statutory guidance', 'lab-guide'], fict: ['Fictional', 'lab-fict'] };
  const chip = k => `<span class="kd ${LBL[k][1]}">${LBL[k][0]}</span>`;
  const DEFAULT = { intro: 'expl', explain: 'expl', why: 'expl', predict: 'expl', sort: 'expl', check: 'expl', tap: 'illus', sim: 'illus', find: 'guide', scenario: 'fict', end: null };
  const refBlock = r => window.LABREF ? LABREF.refBlock(r) : null;
  function labelOf(st) {
    if (st.label) return st.label;
    if (st.type === 'quote') { const b = refBlock(st.ref); return b && b.k === 'req' ? 'law' : 'guide'; }
    return DEFAULT[st.type];
  }
  function statusChip(L) {
    const s = L.status || {}, changed = changedQuotes(L);
    if (changed.length) return `<span class="lxst warn">Needs re-review: the official wording it quotes has changed</span>`;
    if (s.state === 'reviewed') return `<span class="lxst ok">Reviewed by ${esc(s.by || '')}${s.date ? ', ' + esc(s.date) : ''}</span>`;
    if (s.state === 'self-checked') return `<span class="lxst">Self-checked · not yet independently reviewed</span>`;
    return `<span class="lxst">Draft · not yet independently reviewed</span>`;
  }
  function changedQuotes(L) {
    const out = []; Object.entries(L.sigs || {}).forEach(([ref, s]) => { const b = refBlock(ref); if (!b || sig(b.text) !== s) out.push(ref); }); return out;
  }

  /* ---------- drawings (original, in the app's flat style) ---------- */
  const INK = 'var(--ink)', MUTE = 'var(--mute)', Y = '#ffc800', YD = '#e0a800', BLUE = '#1d70b8', PURP = '#8a69f7';
  const ART = {
    'regs-stack': () => `<svg viewBox="0 0 340 300" class="lxart" role="img" aria-label="The Building Act, then the Building Regulations, then the Approved Documents, then standards">
      ${[['Building Act 1984', 'Gives the power to make building rules', '#eceaf7', '#5b3fc4'], ['Building Regulations 2010', 'The requirements. This is the law', '#efeafe', '#5b3fc4'], ['Approved Documents', 'One way of meeting them: statutory guidance', '#e8f1fa', BLUE], ['Standards they refer to', 'e.g. British Standards, for the detail', '#f2f4f6', '#5f6b76']].map(([t, s, bg, c], i) =>
        `<g transform="translate(${10 + i * 10} ${10 + i * 72})"><rect width="${320 - i * 20}" height="60" rx="12" fill="${bg}" stroke="${c}" stroke-width="2"/><text x="14" y="25" font-size="15" font-weight="800" fill="${c}">${t}</text><text x="14" y="45" font-size="12.5" fill="#33404d">${s}</text></g>${i < 3 ? `<path d="M${40 + i * 10} ${72 + i * 72}v8" stroke="${c}" stroke-width="2.5"/>` : ''}`).join('')}</svg>`,
    'stair-section': () => {
      // fixed geometry: 5 risers of 30, goings of 44, first nosing at (50,240); pitch line through the nosings
      const k = 30 / 44, py = x => 240 - (x - 50) * k;
      const stair = 'M10 270H50V240H94V210H138V180H182V150H226V120H350V270Z';
      const a = Math.atan(k);
      return `<svg viewBox="0 0 360 290" class="lxart lxtap" role="img" aria-label="A stair in section with its parts labelled">
        <path d="M130 22H352" stroke="#aab4be" stroke-width="3"/><text x="352" y="16" font-size="11" text-anchor="end" fill="${MUTE}">ceiling above</text>
        <path d="${stair}" fill="${Y}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
        <g data-hot="headroom"><path d="M258 ${py(258) - 6}V28" stroke="${PURP}" stroke-width="2.5"/><path d="M252 36l6-8 6 8M252 ${py(258) - 14}l6 8 6-8" fill="none" stroke="${PURP}" stroke-width="2.5"/><rect x="246" y="24" width="24" height="${py(258) - 26}" fill="transparent"/></g>
        <g data-hot="handrail"><path d="M24 ${py(24) - 62}L238 ${py(238) - 62}" stroke="#5b3fc4" stroke-width="5" stroke-linecap="round"/><path d="M24 ${py(24) - 62}L238 ${py(238) - 62}" stroke="transparent" stroke-width="14"/></g>
        <g data-hot="pitchline"><path d="M22 ${py(22)}L276 ${py(276)}" stroke="${BLUE}" stroke-width="2.5" stroke-dasharray="7 5"/><path d="M22 ${py(22)}L276 ${py(276)}" stroke="transparent" stroke-width="12"/></g>
        <g data-hot="tread"><path d="M96 210H136" stroke="${YD}" stroke-width="7" stroke-linecap="round"/><rect x="94" y="203" width="44" height="12" fill="transparent"/></g>
        <g data-hot="riser"><path d="M182 182V148" stroke="${YD}" stroke-width="7"/><rect x="176" y="150" width="12" height="30" fill="transparent"/></g>
        <g data-hot="rise"><path d="M214 150V120M209 150h10M209 120h10" stroke="${INK}" stroke-width="2"/><rect x="204" y="116" width="20" height="38" fill="transparent"/></g>
        <g data-hot="going"><path d="M138 192H182M138 187v10M182 187v10" stroke="${INK}" stroke-width="2"/><rect x="138" y="184" width="44" height="18" fill="transparent"/></g>
        <g data-hot="pitch"><path d="M50 240H104" stroke="${PURP}" stroke-width="1.5" stroke-dasharray="3 3"/><path d="M88 240A38 38 0 0 0 ${(50 + 38 * Math.cos(a)).toFixed(1)} ${(240 - 38 * Math.sin(a)).toFixed(1)}" fill="none" stroke="${PURP}" stroke-width="3"/><circle cx="82" cy="230" r="16" fill="transparent"/></g>
        <g data-hot="nosing"><circle cx="138" cy="180" r="6.5" fill="#fff" stroke="${INK}" stroke-width="2.5"/><circle cx="138" cy="180" r="14" fill="transparent"/></g>
      </svg>`;
    }
  };

  /* ---------- experiments ---------- */
  const SIMS = {
    stair(st, host, done) {
      const S = { H: st.floor || 2600, R: st.rise || 200, G: st.going || 240 };
      host.innerHTML = `<div class="lxsim"><div class="lxsvg" id="lxss"></div>
        <label>Floor to floor height <b id="lxvH"></b><input type="range" id="lxH" min="2200" max="3200" step="50" value="${S.H}"></label>
        <label>Rise you're aiming for <b id="lxvR"></b><input type="range" id="lxR" min="140" max="240" step="5" value="${S.R}"></label>
        <label>Going <b id="lxvG"></b><input type="range" id="lxG" min="180" max="340" step="5" value="${S.G}"></label>
        <div class="lxread" id="lxout"></div>
        <p class="lxnote">These are measurements, not a verdict. Whether they're acceptable depends on the kind of stair, and that's what the guidance is for.</p></div>`;
      const draw = () => {
        const n = Math.max(2, Math.round(S.H / S.R)), r = S.H / n, t = n - 1, L = t * S.G, ang = Math.atan(r / S.G) * 180 / Math.PI;
        const W = 320, Hh = 210, sc = Math.min((W - 40) / (L + 300), (Hh - 20) / S.H), ox = 14, oy = Hh - 8;
        let x = ox + 150 * sc, y = oy, d = `M${ox} ${oy}H${x}`;
        for (let i = 0; i < n; i++) { y -= r * sc; d += `V${y.toFixed(1)}`; if (i < n - 1) { x += S.G * sc; d += `H${x.toFixed(1)}`; } }
        d += `H${(x + 150 * sc).toFixed(1)}`;
        const fill = d + `V${oy}H${ox}Z`;
        $('#lxss').innerHTML = `<svg viewBox="0 0 ${W} ${Hh}" role="img" aria-label="The stair drawn to scale"><path d="${fill}" fill="${Y}" stroke="${INK}" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M${ox + 150 * sc} ${oy - r * sc}L${x} ${y}" stroke="${BLUE}" stroke-width="1.5" stroke-dasharray="5 4"/></svg>`;
        $('#lxvH').textContent = S.H + 'mm'; $('#lxvR').textContent = S.R + 'mm'; $('#lxvG').textContent = S.G + 'mm';
        $('#lxout').innerHTML = `<div><b>${n}</b><span>risers of ${r.toFixed(1)}mm (the height is split equally)</span></div>
          <div><b>${(L / 1000).toFixed(2)}m</b><span>on plan: ${t} goings of ${S.G}mm</span></div>
          <div><b>${ang.toFixed(1)}°</b><span>pitch</span></div>
          <div><b>${Math.round(2 * r + S.G)}mm</b><span>twice the rise plus the going</span></div>`;
      };
      [['H', 'lxH'], ['R', 'lxR'], ['G', 'lxG']].forEach(([k, id]) => { const el = host.querySelector('#' + id); el.oninput = () => { S[k] = +el.value; draw(); }; });
      draw(); done();
    }
  };

  /* ---------- player ---------- */
  let P = null;
  function open(id, opts = {}) {
    Promise.all([getLesson(id), X.OFF_READY]).then(([L]) => {
      const steps = L.steps.filter(st => !st.beginner || X.easy());
      P = { L, steps, i: 0, preview: !!opts.preview, xp: 0 };
      const v = document.createElement('div'); v.className = 'lx'; v.id = 'lx'; v.setAttribute('role', 'dialog'); v.setAttribute('aria-modal', 'true'); v.setAttribute('aria-label', L.title);
      document.body.appendChild(v); document.documentElement.classList.add('huntopen');
      draw();
    }).catch(() => X.toast("Couldn't open that lesson"));
  }
  function close() { const v = $('#lx'); if (v) v.remove(); if (!$('#hunt')) document.documentElement.classList.remove('huntopen'); P = null; if (X.view === 'learn') X.render(); }
  function draw() {
    const v = $('#lx'); if (!v || !P) return;
    const st = P.steps[P.i], N = P.steps.length, lab = labelOf(st);
    v.innerHTML = `<div class="lxbar"><button class="hx" id="lxx" aria-label="Close the lesson">${X.I.cross}</button><div class="lxprog"><i style="width:${Math.round(100 * (P.i + 1) / N)}%"></i></div><span class="lxn">${P.i + 1}/${N}</span></div>
      ${P.preview ? '<div class="lxprev">Preview: progress and XP aren\'t saved</div>' : ''}
      <div class="lxbody" id="lxbody"><div class="lxlab">${lab ? chip(lab) : ''}${st.type === 'intro' ? statusChip(P.L) : ''}</div><div id="lxstep"></div></div>
      <div class="lxfoot"><button class="btn" id="lxnext" disabled>${P.i === N - 1 ? 'Finish' : 'Continue'}</button></div>`;
    $('#lxx').onclick = () => { X.SFX.tap(); close(); };
    const next = $('#lxnext'), ready = () => { next.disabled = false; };
    next.onclick = () => { X.SFX.tap(); if (P.i < N - 1) { P.i++; draw(); $('#lxbody').scrollTop = 0; } else finish(); };
    (STEP[st.type] || STEP.explain)(st, $('#lxstep'), ready);
  }
  const paras = t => (Array.isArray(t) ? t : [t]).filter(Boolean).map(p => `<p>${esc(p)}</p>`).join('');
  const STEP = {
    intro(st, el, ready) {
      const L = P.L;
      el.innerHTML = `<div class="lxhero"><div class="lhm">${X.mascot('happy')}</div><div><small>${esc(L.minutes || 5)} min lesson</small><h2>${esc(L.title)}</h2></div></div>${paras(st.text)}
        ${L.objectives ? `<div class="lxobj"><b>By the end you'll be able to:</b><ul>${L.objectives.map(o => `<li>${esc(o)}</li>`).join('')}</ul></div>` : ''}`;
      ready();
    },
    explain(st, el, ready) { el.innerHTML = `${st.title ? `<h3 class="lxh">${esc(st.title)}</h3>` : ''}${st.art && ART[st.art] ? ART[st.art]() : ''}${paras(st.text)}${st.action === 'status' ? `<button class="linkb" id="lxdoc">${esc(st.actionLabel || 'Open the status page')}</button>` : ''}`;
      const b = el.querySelector('#lxdoc'); if (b) b.onclick = () => { const D = X.OFF.find(d => d.code === st.doc); if (D && window.LABREF) LABREF.docSheet(D); };
      ready(); },
    why(st, el, ready) { el.innerHTML = `<div class="lxwhy"><b>${esc(st.title || 'Why it matters')}</b>${paras(st.text)}</div>`; ready(); },
    tap(st, el, ready) {
      const seen = new Set(), terms = st.terms;
      el.innerHTML = `${st.title ? `<h3 class="lxh">${esc(st.title)}</h3>` : ''}<p class="lxhint">${esc(st.prompt || 'Tap each part of the drawing to see what it\'s called.')}</p>${ART[st.art] ? ART[st.art]() : ''}
        <div class="lxdef" id="lxdef" aria-live="polite"><span>Tap the drawing</span></div><div class="lxterms" id="lxterms"></div>`;
      const chips = () => { el.querySelector('#lxterms').innerHTML = Object.keys(terms).map(k => `<button class="lxt${seen.has(k) ? ' y' : ''}" data-t="${k}">${esc(terms[k][0])}</button>`).join(''); el.querySelectorAll('.lxt').forEach(b => b.onclick = () => show(b.dataset.t)); };
      const show = k => { if (!terms[k]) return; seen.add(k); X.SFX.tap();
        el.querySelectorAll('[data-hot]').forEach(g => g.classList.toggle('on', g.dataset.hot === k));
        el.querySelector('#lxdef').innerHTML = `<b>${esc(terms[k][0])}</b><span>${esc(terms[k][1])}</span>`; chips();
        if (seen.size >= Math.min(st.min || Object.keys(terms).length, Object.keys(terms).length)) ready(); };
      el.querySelectorAll('[data-hot]').forEach(g => { g.style.cursor = 'pointer'; g.onclick = () => show(g.dataset.hot); });
      chips();
    },
    predict(st, el, ready) { choice(st, el, ready, true); },
    check(st, el, ready) {
      const qs = st.qs || [st]; let k = 0;
      const one = () => { const q = qs[k]; const sub = document.createElement('div'); el.innerHTML = ''; el.appendChild(sub);
        choice(q, sub, () => { if (k < qs.length - 1) { const b = document.createElement('button'); b.className = 'btn ghost lxmore'; b.textContent = 'Next question'; b.onclick = () => { k++; one(); }; sub.appendChild(b); } else ready(); }); };
      one();
    },
    scenario(st, el, ready) { const sub = document.createElement('div'); el.innerHTML = `<div class="lxbrief"><small>${esc(st.kicker || 'Fictional project')}</small>${paras(st.brief)}</div>`; el.appendChild(sub); choice(st, sub, ready); },
    sort(st, el, ready) {
      let k = 0, right = 0;
      const one = () => { const it = st.items[k];
        el.innerHTML = `${st.title ? `<h3 class="lxh">${esc(st.title)}</h3>` : ''}<p class="lxhint">${esc(st.prompt || 'Which is it?')} <span class="lxcount">${k + 1} of ${st.items.length}</span></p>
          <div class="lxcard">${esc(it.t)}</div><div class="lxbk">${st.buckets.map((b, i) => `<button class="opt" data-b="${i}">${esc(b)}</button>`).join('')}</div><div id="lxwhy"></div>`;
        el.querySelectorAll('[data-b]').forEach(btn => btn.onclick = () => { const ok = +btn.dataset.b === it.a; if (ok) right++;
          el.querySelectorAll('[data-b]').forEach(x => { x.disabled = true; if (+x.dataset.b === it.a) x.classList.add('good'); else if (x === btn) x.classList.add('wrong'); });
          ok ? X.SFX.good() : X.SFX.bad();
          el.querySelector('#lxwhy').innerHTML = `<p class="lxexp"><b>${ok ? 'Right.' : `It's ${esc(st.buckets[it.a])}.`}</b> ${esc(it.why || '')}</p>`;
          if (k < st.items.length - 1) { const b = document.createElement('button'); b.className = 'btn ghost lxmore'; b.textContent = 'Next card'; b.onclick = () => { k++; one(); }; el.querySelector('#lxwhy').appendChild(b); }
          else { el.querySelector('#lxwhy').insertAdjacentHTML('beforeend', `<p class="lxscore">${right} of ${st.items.length} right.</p>`); ready(); } }); };
      one();
    },
    quote(st, el, ready) {
      const b = refBlock(st.ref); if (!b) { el.innerHTML = '<p>This quote is missing from the current document. It will be fixed in the next update.</p>'; return ready(); }
      const D = X.docOf(b), lab = X.adkLabel(b);
      el.innerHTML = `${st.title ? `<h3 class="lxh">${esc(st.title)}</h3>` : ''}${paras(st.before)}
        <figure class="lxq"><figcaption><b>${esc(D.short)} · ${esc(lab)}</b><span>${esc(D.edition)} · ${esc(D.jurisdiction || 'England')}</span></figcaption>
        ${b.img ? `<img src="${b.img}" alt="${esc(lab)}: ${esc(b.title || '')}">` : `<blockquote>${esc(b.text.length > 900 ? b.text.slice(0, 900) + '…' : b.text)}</blockquote>`}
        <button class="linkb" id="lxopen">Open it on the page</button></figure>${paras(st.after)}`;
      el.querySelector('#lxopen').onclick = () => X.openOfficial(b);
      ready();
    },
    find(st, el, ready) {
      const h = st.hunt ? (window.LABQ ? LABQ.hunts.find(x => x.id === st.hunt) : null) : Object.assign({ id: 'lesson:' + P.L.id + ':' + P.i, bar: 'Find it', title: st.title || 'Guided find' }, st);
      if (!h || !window.LABQ) { el.innerHTML = '<p>The hunt screen isn\'t available.</p>'; return ready(); }
      el.innerHTML = `<h3 class="lxh">${esc(st.heading || 'Now find it in the real document')}</h3><div class="lxbrief"><small>${esc(h.title)}</small>${paras(h.brief)}</div>
        <button class="btn lxgo" id="lxgo">Start</button><button class="linkb" id="lxskip">Skip this step</button><div id="lxres"></div>`;
      el.querySelector('#lxgo').onclick = () => { X.SFX.tap(); LABQ.openHunt(h, res => { P.xp += res.xp;
        el.querySelector('#lxres').innerHTML = `<p class="lxexp"><b>${res.found ? 'Found it.' : 'Now you know where it is.'}</b> ${esc(res.label)}. +${res.xp} XP.</p>`;
        el.querySelector('#lxgo').remove(); el.querySelector('#lxskip').remove(); ready(); }); };
      el.querySelector('#lxskip').onclick = () => ready();
    },
    sim(st, el, ready) { const host = document.createElement('div'); el.innerHTML = `${st.title ? `<h3 class="lxh">${esc(st.title)}</h3>` : ''}${paras(st.text)}`; el.appendChild(host); (SIMS[st.name] || ((a, h, d) => d()))(st, host, ready); },
    end(st, el, ready) {
      el.innerHTML = `<div class="lxhero"><div class="lhm">${X.mascot('cheer')}</div><div><small>Lesson complete</small><h2>${esc(P.L.title)}</h2></div></div>
        ${st.points ? `<ul class="lxpts">${st.points.map(p => `<li>${X.I.check}<span>${esc(p)}</span></li>`).join('')}</ul>` : ''}
        ${(st.next || []).map((n, i) => `<button class="btn ghost lxnx" data-n="${i}">${esc(n.label)}</button>`).join('')}`;
      el.querySelectorAll('.lxnx').forEach(b => b.onclick = () => { const n = st.next[+b.dataset.n]; finish(true); go(n); });
      ready();
    }
  };
  function choice(q, el, ready, predict) {
    const opts = q.o.map((t, k) => ({ t, k })), a = q.a ?? 0;
    el.insertAdjacentHTML('beforeend', `${q.q ? `<h3 class="lxh">${esc(q.q)}</h3>` : ''}${q.t === 'tf' ? '' : ''}<div class="opts">${opts.map(o => `<button class="opt" data-k="${o.k}"><span class="k">${o.k + 1}</span>${esc(o.t)}</button>`).join('')}</div><div class="lxwhy2"></div>`);
    const box = el.querySelectorAll('.opts')[el.querySelectorAll('.opts').length - 1], why = el.querySelectorAll('.lxwhy2')[el.querySelectorAll('.lxwhy2').length - 1];
    box.querySelectorAll('.opt').forEach(b => b.onclick = () => {
      const ok = +b.dataset.k === a;
      box.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (+x.dataset.k === a) x.classList.add('good'); else if (x === b) x.classList.add('wrong'); });
      predict ? X.SFX.tap() : (ok ? X.SFX.good() : X.SFX.bad());
      why.innerHTML = `<p class="lxexp"><b>${predict ? (ok ? 'Good prediction.' : 'Not quite, but now you know.') : ok ? 'Right.' : 'Not quite.'}</b> ${esc(q.why || '')}</p>`;
      ready();
    });
  }
  function finish(quiet) {
    if (!P) return;
    const L = P.L, xp = (L.rewards && L.rewards.xp || 15) + P.xp;
    if (!P.preview) { const first = !DONE[L.id]; DONE[L.id] = { at: Date.now(), xp }; store(); if (first) { X.addXp(xp); X.save(); } if (!quiet) X.toast(first ? `Lesson complete: +${xp} XP` : 'Lesson complete'); }
    close();
  }
  function go(n) {
    if (!n) return;
    if (n.lesson) setTimeout(() => open(n.lesson), 50);
    else if (n.hunts && window.LABQ) LABQ.listSheet();
    else if (n.parts && typeof window.deck === 'function') window.deck(0);
    else if (n.unit && typeof window.lessonDeck === 'function') { const i = X.LES.findIndex(l => (X.UNITS[l.ui] || {}).k === n.unit && l.meta); if (i >= 0) window.lessonDeck(i); }
  }

  /* ---------- Learn card ---------- */
  function learnCard() {
    if (!on()) return '';
    if (!INDEX) { getIndex().then(() => { if (X.view === 'learn') X.render(); }).catch(() => {}); return ''; }
    return `<div class="card lxcardl"><div class="hh"><div class="lhm">${X.mascot('happy')}</div><div><b>Lessons</b><span>Learn it first: short lessons with drawings, an experiment and the real document.</span></div></div>
      <div class="lxlist">${INDEX.lessons.map(l => `<button class="lxli${DONE[l.id] ? ' y' : ''}" data-labl="${esc(l.id)}"><span class="lxic">${DONE[l.id] ? X.I.check : X.I.star}</span><span class="lxtx"><b>${esc(l.title)}</b><small>${esc(l.minutes)} min · ${esc(l.level)}${l.status && l.status !== 'reviewed' ? ' · draft' : ''}</small></span></button>`).join('')}</div></div>`;
  }
  document.addEventListener('click', e => { const t = e.target.closest && e.target.closest('[data-labl]'); if (!t) return; e.preventDefault(); X.SFX.tap(); open(t.dataset.labl); });

  // ?lesson=<id>&preview opens a lesson straight away without saving progress (for reviewing drafts)
  try { const q = new URLSearchParams(location.search); if (q.get('lesson')) setTimeout(() => open(q.get('lesson'), { preview: q.has('preview') }), 400); } catch (e) {}
  if (on()) getIndex().then(() => { if (X.view === 'learn') X.render(); }).catch(() => {});

  return { open, learnCard, _done: () => DONE, _sig: sig };
})();
