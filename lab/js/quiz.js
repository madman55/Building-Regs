/* Building Regs Lab · Quiz engine: building question lists, question formats, marking, hearts, results, review and streak screens.
   Part of the main app script, split by area. Files are loaded in order by index.html and share one global scope:
   core, screens, quiz, beginner, search, official, semantic, search-ui, boot. */
let L = null;
function begin(qs, o) {
  DK = null;
  if (o && o.idx >= 0) S.last = o.idx;
  qs = spreadKinds(qs);
  if (window.LABQ) qs = LABQ.prepare(qs, o);
  L = Object.assign(
    {
      qs,
      fast: 0,
      queue: qs.map((_, k) => k),
      total: qs.length,
      right: 0,
      wrong: 0,
      seen: new Set(),
      missed: new Set(),
      combo: 0,
      best: 0,
      t0: Date.now(),
      practice: false,
      idx: -1
    },
    o
  );
  view = 'lesson';
  ask();
}

/* ---------- new formats: Spot the mistake, Which is bigger? ---------- */
/* Spot the mistake: a real rule from the lesson with one figure swapped for a believable wrong one,
   or (about a third of the time) left correct, so "All correct" is sometimes the right answer. */
function spotItems(l, ui) {
  const u = UNITS[ui],
    m = l ? l.meta : null,
    doc = m && m.doc ? m.doc : (docsOf(ui)[0] || {}).url,
    ref = m
      ? 'AD ' + u.k + (m.vol ? ' Vol ' + m.vol : '') + ' · ' + m.sec.split(' · ')[0] + ', p.' + m.page
      : unitLabel(u, ui);
  const out = [],
    src = textsOf(l, ui).concat(l ? l.qs.map(q => q.x || '') : []);
  src.forEach(t =>
    String(t)
      .split(/(?<=[.!?])\s+(?=[A-Z])/)
      .forEach(sen => {
        sen = sen.trim();
        const ms = [...sen.matchAll(TOKRE)];
        if (
          !ms.length ||
          sen.length > 200 ||
          sen.split(/\s+/).length < 8 ||
          sen.includes('___') ||
          !/^[A-Z]/.test(sen) ||
          /^(It|Its|It’s|It's|This|That|These|Those|They|Them|There|Both|Also|And|But|Or|So|Then|Here|Each|Either|Neither|Such|Same|Otherwise|Unlike|Only)\b/.test(
            sen
          ) ||
          /^\d/.test(sen) ||
          !/[.!?]$/.test(sen)
        )
          return;
        out.push({
          key: 's:' + h(sen),
          make: () => {
            const P = unitPools(ui),
              chips = txt =>
                txt
                  .split(/\s+/)
                  .filter(Boolean)
                  .map(w => ({ t: w, n: /\d/.test(w) }));
            const base = { t: 'spot', id: 's:' + h(sen), fix: sen, r: ref, doc, from: m ? m.name : u.name };
            if (Math.random() < 0.33) {
              const c = chips(sen);
              return Object.assign(base, { q: sen, c, wrong: -1, x: 'There was no mistake here.' });
            }
            const c = shuf(ms).find(
              mm =>
                sen.split(mm[0]).length === 2 &&
                /(^|\s)$/.test(sen.slice(0, mm.index)) &&
                /^($|[\s,.;:)])/.test(sen.slice(mm.index + mm[0].length))
            );
            if (!c) return null;
            const k = tokKind(c),
              v = tokVal(c),
              ds = nearest(v, P.tok[k] || [], k).slice(0, 2);
            if (!ds.length) return null;
            const w = fmtTok(ds[(Math.random() * ds.length) | 0], k);
            if (w === c[0]) return null;
            const before = chips(sen.slice(0, c.index)),
              after = sen.slice(c.index + c[0].length),
              tail = after.match(/^[,.;:)]*/)[0],
              rest = chips(after.slice(tail.length));
            const cs = before.concat([{ t: w + tail, n: true }], rest);
            return Object.assign(base, {
              q: sen.slice(0, c.index) + w + after,
              c: cs,
              wrong: before.length,
              w,
              a: c[0],
              x: `It should say ${c[0]}, not ${w}.`
            });
          }
        });
      })
  );
  return out;
}
/* Which is bigger? Two figure questions with the same unit from the same Part. */
const CMPU = new Set(['mm', 'm', 'm²', '°', 'dB', '°C', 'l/s', 'kW']);
function cmpItems(l, ui) {
  const mine = l.qs.filter(q => q.t === 'num' && CMPU.has(q.u));
  if (!mine.length) return [];
  const all = LES.filter(x => x.ui === ui)
    .flatMap(x => x.qs)
    .filter(q => q.t === 'num' && CMPU.has(q.u));
  const lab = q =>
    q.q
      .replace(/\s*\?$/, '')
      .replace(
        /\b(?:how (?:many|much|far|high|wide|long|deep|steep|big)(?: [a-zA-Z²³/]+)?|what (?:temperature|width|height|size|distance|area|rate|level|depth))(?=[\s?,.;:]|$)/gi,
        '…'
      )
      .replace(/\s+/g, ' ')
      .trim();
  return mine.map(q => ({
    key: 'c:' + q.id,
    make: () => {
      const v = parseFloat(q.a[0]),
        cands = all
          .filter(o => o !== q && o.u === q.u && !o.q.startsWith('…') && !q.q.startsWith('…'))
          .filter(o => {
            const r = parseFloat(o.a[0]) / v;
            return r > 0 && (r >= 1.15 || r <= 1 / 1.15);
          });
      if (!cands.length) return null;
      const near = cands.filter(o => l.qs.includes(o)),
        from = near.length ? near : cands,
        p = from[(Math.random() * from.length) | 0],
        pv = parseFloat(p.a[0]),
        big = v > pv ? q : p,
        small = big === q ? p : q;
      return {
        t: 'mc',
        cmp: true,
        id: 'c:' + q.id + '|' + p.id,
        q: 'Which of these has the bigger figure?',
        o: [lab(big), lab(small)],
        x: `${lab(big)}: ${fmtNum(big.a[0], big.u)}. ${lab(small)}: ${fmtNum(small.a[0], small.u)}.`,
        r: [big.r, small.r]
          .filter(Boolean)
          .filter((r, i, a) => a.indexOf(r) === i)
          .join(' · '),
        doc: q.doc
      };
    }
  }));
}
/* Keep formats mixed: never the same kind twice in a row when it can be avoided. */
const kindOf = q => (q.cmp ? 'cmp' : q.t);
function spreadKinds(qs) {
  const pool = qs.slice(),
    out = [];
  while (pool.length) {
    const last = out.length ? kindOf(out[out.length - 1]) : null;
    let i = pool.findIndex(q => kindOf(q) !== last);
    if (i < 0) i = 0;
    out.push(pool.splice(i, 1)[0]);
  }
  return out;
}
/* Spot the mistake: tap a word, or All correct. */
function pickSpot(k) {
  if (L.locked) return;
  const b = app.querySelector(`[data-sp="${k}"]`);
  if (!b || b.classList.contains('out')) return;
  SFX.tap();
  app.querySelectorAll('[data-sp]').forEach(x => x.classList.remove('sel'));
  b.classList.add('sel');
  L.sel = k;
  $('#ck').disabled = false;
}
function checkSpot() {
  const q = L.cur,
    ok = L.sel === q.wrong;
  app.querySelectorAll('[data-sp]').forEach(b => {
    const k = +b.dataset.sp;
    if (k === q.wrong) b.classList.add(ok ? 'good' : 'fixme');
    else if (k === L.sel && !ok) b.classList.add('wrong');
  });
  if (q.wrong >= 0) {
    const b = app.querySelector(`[data-sp="${q.wrong}"]`);
    if (b) b.innerHTML = `<s>${esc(q.w)}</s> ${esc(q.a)}`;
  }
  verdict(ok, q.wrong >= 0 ? q.fix : 'All correct, there was no mistake');
}
/* ---------- quiz generator: a fresh mix from the whole unit every time ---------- */
const TOKRE =
  /(?<![\w.:\-–\/])(\d+(?:\.\d+)?)(mm|m²|m³|m|°C|°|kN\/m²|N|%|dB|kW)(?![A-Za-z0-9²³\/])|(?<![\w.:\/])1:(\d+)(?!\d)/g;
const tokKind = m => (m[3] ? ':' : m[2]),
  tokVal = m => parseFloat(m[3] || m[1]);
const fmtTok = (v, k) => (k === ':' ? '1:' + v : String(+v.toFixed(2)) + k);
const fmtNum = (a, u) => a + (/^[a-z]{2,}/i.test(u) && u !== 'mm' && u !== 'dB' && u !== 'kW' ? ' ' : '') + u;
function tweak(v, k) {
  const st =
    k === ':'
      ? v >= 20
        ? 5
        : v >= 10
          ? 3
          : 1
      : k === 'mm'
        ? v >= 1000
          ? 100
          : v >= 200
            ? 50
            : v >= 50
              ? 10
              : 5
        : k === 'm' || k === 'm²'
          ? v >= 10
            ? v >= 100
              ? 50
              : 5
            : 0.5
          : k === '°' || k === '°C'
            ? v >= 20
              ? 5
              : 2
            : k === '%'
              ? 10
              : Math.max(1, Math.round(v * 0.2));
  return [v + st, v - st, v + 2 * st, v - 2 * st, v + 3 * st].filter(x => x > 0 && x !== v);
}
function nearest(v, vals, k) {
  const seen = new Set([v]),
    out = [];
  vals
    .filter(x => x > 0)
    .sort((a, b) => Math.abs(Math.log(a / v)) - Math.abs(Math.log(b / v)))
    .forEach(x => {
      if (!seen.has(x) && out.length < 6) {
        seen.add(x);
        out.push(x);
      }
    });
  tweak(v, k).forEach(x => {
    if (!seen.has(x) && out.length < 6) {
      seen.add(x);
      out.push(x);
    }
  });
  return shuf(out.slice(0, 4)).slice(0, 3);
}
function stmt(stem, ans) {
  const s = stem.trim();
  return /(…|\.\.\.)$/.test(s) ? s.replace(/(…|\.\.\.)$/, '') + ' ' + ans : s.replace(/\?$/, '') + ': ' + ans;
}
function textsOf(l, ui) {
  const m = l ? l.meta : null;
  if (m) return [m.intro].concat(m.watch || []);
  return l === null ? [UNITS[ui].intro || ''] : [];
}
function unitPools(ui) {
  if (!unitPools.c) unitPools.c = {};
  if (unitPools.c[ui]) return unitPools.c[ui];
  const tok = {},
    num = {};
  const ls = LES.filter(l => l.ui === ui),
    texts = [UNITS[ui].intro || ''];
  ls.forEach(l => {
    texts.push(...textsOf(l, ui));
    l.qs.forEach(q => {
      if (q.x) texts.push(q.x);
      if (q.t === 'mc') texts.push(q.o[0]);
      if (q.t === 'num') (num[q.u] = num[q.u] || []).push(parseFloat(q.a[0]));
    });
  });
  texts.forEach(t => {
    for (const m of String(t).matchAll(TOKRE)) {
      const k = tokKind(m);
      (tok[k] = tok[k] || new Set()).add(tokVal(m));
    }
  });
  const P = { tok: Object.fromEntries(Object.entries(tok).map(([k, s]) => [k, [...s]])), num };
  return (unitPools.c[ui] = P);
}
function varyQ(q, ui) {
  const P = unitPools(ui),
    forms = [() => q],
    plain = !/\b(how many|how far|how long|what|which|who|why|where|when)\b/i.test(q.q);
  if (q.t === 'mc' && q.o.length > 1 && plain)
    forms.push(() => {
      const ok = Math.random() < 0.5,
        opt = ok ? q.o[0] : q.o[1 + ((Math.random() * (q.o.length - 1)) | 0)];
      return Object.assign({}, q, { t: 'tf', q: stmt(q.q, opt), a: ok, x: 'Answer: ' + q.o[0] + '. ' + (q.x || '') });
    });
  if (q.t === 'num') {
    const v = parseFloat(q.a[0]),
      ds = nearest(v, P.num[q.u] || [], q.u === '°C' ? '°C' : q.u);
    if (ds.length >= 3)
      forms.push(() =>
        Object.assign({}, q, {
          t: 'mc',
          o: [fmtNum(q.a[0], q.u)].concat(ds.map(d => fmtNum(String(+d.toFixed(2)), q.u)))
        })
      );
    if (ds.length && plain)
      forms.push(() => {
        const ok = Math.random() < 0.5;
        return Object.assign({}, q, {
          t: 'tf',
          q: stmt(q.q, fmtNum(ok ? q.a[0] : String(+ds[0].toFixed(2)), q.u)),
          a: ok,
          x: 'Answer: ' + fmtNum(q.a[0], q.u) + '. ' + (q.x || '')
        });
      });
  }
  return forms[(Math.random() * forms.length) | 0]();
}
function gapItems(l, ui) {
  const u = UNITS[ui],
    m = l ? l.meta : null,
    doc = m && m.doc ? m.doc : (docsOf(ui)[0] || {}).url,
    ref = m
      ? 'AD ' + u.k + (m.vol ? ' Vol ' + m.vol : '') + ' · ' + m.sec.split(' · ')[0] + ', p.' + m.page
      : unitLabel(u, ui);
  const out = [],
    src = textsOf(l, ui)
      .map(t => [t, 7])
      .concat(l ? l.qs.map(q => [q.x || '', 10]) : []);
  src.forEach(([t, minW]) =>
    String(t)
      .split(/(?<=[.!?])\s+(?=[A-Z])/)
      .forEach(sen => {
        const ms = [...sen.matchAll(TOKRE)].filter(mm => mm.index > 0);
        if (!ms.length || sen.length > 230 || sen.split(/\s+/).length < minW || sen.includes('___')) return;
        out.push({
          key: 'g:' + h(sen),
          make: () => {
            const P = unitPools(ui),
              c = shuf(ms).find(mm => sen.split(mm[0]).length === 2);
            if (!c) return null;
            const k = tokKind(c),
              v = tokVal(c),
              ds = nearest(v, P.tok[k] || [], k);
            if (ds.length < 3) return null;
            return {
              t: 'build',
              id: 'g:' + h(sen),
              q: sen.slice(0, c.index) + '___' + sen.slice(c.index + c[0].length),
              a: [c[0]],
              d: ds.map(d => fmtTok(d, k)),
              r: ref,
              doc
            };
          }
        });
      })
  );
  return out;
}
function quizItems(l, ui) {
  const li = LES.indexOf(l),
    its = l.qs
      .map(q => ({ key: q.id, make: () => varyQ(q, ui) }))
      .concat(gapItems(l, ui), shuf(spotItems(l, ui)).slice(0, 3), shuf(cmpItems(l, ui)).slice(0, 2));
  return its.map(it => ({
    key: it.key,
    make: () => {
      const q = it.make();
      return q ? Object.assign({}, q, { _l: li }) : null;
    }
  }));
}
function buildQuiz(groups, n) {
  const pick = [],
    now = Date.now(),
    age = k => (S.qseen[k] || 0) - Math.random() * 864e5 * 2;
  groups = shuf(groups.filter(g => g.length)).map(g => g.slice().sort((a, b) => age(a.key) - age(b.key)));
  let gi = 0,
    guard = 0;
  while (pick.length < n && groups.some(g => g.length) && guard++ < 500) {
    const g = groups[gi++ % groups.length];
    if (!g.length) continue;
    const it = g.shift(),
      q = it.make();
    if (q) {
      pick.push(q);
      S.qseen[it.key] = now;
    }
  }
  save();
  return shuf(pick);
}
function unitQuiz(ui, back) {
  SFX.tap();
  const ls = LES.filter(l => l.ui === ui),
    groups = ls.map(l => quizItems(l, ui));
  if (!ls.some(l => l.meta)) groups.push(gapItems(null, ui));
  const qs = buildQuiz(groups, 10);
  if (!qs.length) return toast('No questions here yet');
  S.last = LES.findIndex(l => l.ui === ui);
  begin(qs, { practice: true, quiz: ui, sec: -1, back });
}
function finalTest(ui) {
  SFX.tap();
  const ls = LES.filter(l => l.ui === ui),
    groups = ls.map(l => quizItems(l, ui));
  if (!ls.some(l => l.meta)) groups.push(gapItems(null, ui));
  const qs = buildQuiz(groups, 10);
  if (!qs.length) return toast('No questions here yet');
  S.last = LES.findIndex(l => l.ui === ui);
  begin(qs, { practice: true, quiz: ui, sec: -1, final: true });
}
function secQuiz(i, back) {
  SFX.tap();
  const l = LES[i];
  S.last = i;
  const its = quizItems(l, l.ui),
    n = Math.min(10, its.length);
  begin(buildQuiz([its], n), { practice: true, quiz: l.ui, sec: i, back });
}
const qbestOf = k => (S.qbest[k] >= 0 ? S.qbest[k] : null);
function start(i) {
  const l = LES[i];
  if (l && l.meta && !S.taught[l.key] && !S.done[l.key]) return lessonDeck(i);
  startQuiz(i);
}
function startQuiz(i) {
  roll();
  if (S.hearts <= 0 && !easy()) return outHearts();
  const l = LES[i],
    extra = [];
  for (const g of [spotItems(l, l.ui), cmpItems(l, l.ui)]) {
    for (const it of shuf(g)) {
      const q = it.make();
      if (q) {
        extra.push(q);
        break;
      }
    }
  }
  begin(l.qs.slice().concat(extra), { idx: i, redo: !!S.done[l.key] });
}
function practice(only, mixed) {
  roll();
  let ids = mixed ? [] : Object.keys(S.mistakes).filter(id => mistakeQ(id));
  const fromMistakes = ids.length > 0;
  if (!ids.length && !only) ids = LES.filter(l => S.done[l.key]).flatMap(l => l.qs.map(q => q.id));
  if (!ids.length) return toast('Nothing to practise yet');
  begin(
    shuf(ids)
      .slice(0, 8)
      .map(id => mistakeQ(id))
      .filter(Boolean),
    { practice: true, review: fromMistakes }
  );
}

function ask() {
  if (!L.queue.length) return finish();
  const qi = L.queue[0],
    q = L.qs[qi];
  L.cur = q;
  L.tAsk = Date.now();
  L.sel = null;
  L.again = L.seen.has(qi);
  L.seen.add(qi);
  L.numMc = q.t === 'num' && easy();
  L.mWrong = [];
  const kind =
    q.kind ||
    (q.cmp
      ? 'Which is bigger?'
      : L.numMc
        ? 'Choose the right figure'
        : {
            spot: 'Spot the mistake',
            mc: 'Choose the right answer',
            tf: 'True or false?',
            num: 'Type the figure',
            match: 'Tap the matching pairs',
            build: 'Fill the gaps'
          }[q.t]);
  let body = '';
  if (q.t === 'hunt') {
    body = window.LABQ ? LABQ.huntBody(q) : '';
  } else if (q.t === 'mc') {
    L.opts = shuf(q.o.map((t, k) => ({ t, ok: k === 0 })));
    body = `<div class="opts">${L.opts.map((o, k) => `<button class="opt" data-k="${k}"><span class="k">${k + 1}</span>${esc(o.t)}</button>`).join('')}</div>`;
  } else if (q.t === 'tf') {
    L.opts = [
      { t: 'True', ok: q.a === true },
      { t: 'False', ok: q.a === false }
    ];
    body = `<div class="opts tf">${L.opts.map((o, k) => `<button class="opt" data-k="${k}"><span class="k">${k + 1}</span>${o.t}</button>`).join('')}</div>`;
  } else if (q.t === 'spot') {
    body = `<div class="spot">${q.c.map((c, k) => `<button class="spw${c.n ? ' n' : ''}" data-sp="${k}">${esc(c.t)}</button>`).join(' ')}</div><button class="opt allok" data-sp="-1">${I.check}All correct</button>`;
  } else if (L.numMc) {
    L.opts = numChoices(q);
    body = `<div class="opts">${L.opts.map((o, k) => `<button class="opt" data-k="${k}"><span class="k">${k + 1}</span>${esc(o.t)}</button>`).join('')}</div>`;
  } else if (q.t === 'num') {
    body = `<div class="num"><input id="ni" inputmode="decimal" autocomplete="off" placeholder="Your answer" aria-label="Your answer"><span>${esc(q.u)}</span></div>`;
  } else if (q.t === 'build') {
    L.bank = shuf(q.a.concat(q.d).map((t, k) => ({ t, k })));
    L.fill = q.a.map(() => null);
    body = `<div class="sentence" id="sen"></div><div class="bank" id="bank"></div>`;
  } else {
    L.left = shuf(q.p.map((p, k) => ({ t: p[0], k })));
    L.right = shuf(q.p.map((p, k) => ({ t: p[1], k })));
    L.matched = 0;
    L.pick = null;
    body = `<div class="mgrid"><div class="col">${L.left.map(o => `<button class="opt" data-s="l" data-k="${o.k}">${esc(o.t)}</button>`).join('')}</div><div class="col">${L.right.map(o => `<button class="opt" data-s="r" data-k="${o.k}">${esc(o.t)}</button>`).join('')}</div></div>`;
  }
  app.innerHTML = `<div class="ls" style="${tv(L.quiz !== undefined ? L.quiz : L.practice ? (QU[q.id] ?? q._ui ?? 0) : LES[L.idx].ui)}"><div class="lt2"><button class="x" id="q" aria-label="Quit lesson">${I.cross}</button><div class="prog${L.combo >= 3 ? ' hot' : ''}" id="pg">${L.combo >= 3 ? `<div class="combo">${L.combo} in a row</div>` : ''}<i style="width:${Math.max(4, Math.round(((L.final ? L.total - L.queue.length : L.right) / L.total) * 100))}%"></i></div>${L.practice ? `<div class="stat bo">${I.bolt}</div>` : `<div class="stat ht lhearts" id="hh">${I.heart}${easy() ? '∞' : S.hearts}</div>`}</div>
<div class="lb qin"><div class="kind">${kind}${L.again ? '<span class="tag">Previous mistake</span>' : ''}${easy() && q.t !== 'tf' && q.t !== 'hunt' && !q.cmp ? `<button class="hintb" id="hint">${BULB}Hint</button>` : ''}</div><div class="ask"><div class="mas" id="mas">${mascot(L.again ? 'think' : 'idle')}</div><div class="say"><h2>${q.t === 'build' ? 'Complete the sentence' : q.t === 'spot' ? 'One figure might be wrong. Tap it, or tap All correct.' : esc(q.q)}</h2>${q.t === 'spot' && q.from ? `<small class="spfrom">From: ${esc(q.from)}</small>` : ''}</div></div>${q.art ? `<div class="fig2">${diagram(q.art)}</div>` : ''}${body}</div>
<div class="foot" id="ft"><div class="in">${q.t === 'match' ? '<div class="hint">Tap one on the left, then its match on the right</div>' : '<button class="btn" id="ck" disabled>Check</button>'}</div></div></div>`;
  $('#q').onclick = quit;
  if (q.t === 'mc' || q.t === 'tf' || L.numMc) {
    app.querySelectorAll('.opt').forEach(b => (b.onclick = () => pickOpt(+b.dataset.k)));
    $('#ck').onclick = checkChoice;
  } else if (q.t === 'num') {
    const ni = $('#ni');
    ni.oninput = () => ($('#ck').disabled = !ni.value.trim());
    $('#ck').onclick = checkNum;
    setTimeout(() => ni.focus(), 60);
  } else if (q.t === 'build') {
    drawBuild();
    $('#ck').onclick = checkBuild;
  } else if (q.t === 'spot') {
    app.querySelectorAll('[data-sp]').forEach(b => (b.onclick = () => pickSpot(+b.dataset.sp)));
    $('#ck').onclick = checkSpot;
  } else if (q.t === 'hunt') {
    if (window.LABQ) LABQ.bindHunt(q);
  } else app.querySelectorAll('.opt').forEach(b => (b.onclick = () => tapMatch(b)));
  const hb = $('#hint');
  if (hb) hb.onclick = useHint;
  if (window.LABQ) LABQ.afterAsk(q);
}

function pickOpt(k) {
  if (L.locked) return;
  if (app.querySelector(`.opt[data-k="${k}"]`).classList.contains('out')) return;
  SFX.tap();
  app.querySelectorAll('.opt').forEach(x => x.classList.remove('sel'));
  app.querySelector(`.opt[data-k="${k}"]`).classList.add('sel');
  L.sel = k;
  $('#ck').disabled = false;
}
function drawBuild() {
  const q = L.cur;
  let k = 0;
  $('#sen').innerHTML = esc(q.q).replace(/___/g, () => {
    const i = k++,
      f = L.fill[i];
    return `<span class="slot">${f ? `<button class="tile" data-f="${i}">${esc(f.t)}</button>` : ''}</span>`;
  });
  $('#bank').innerHTML = L.bank
    .map((b, i) =>
      L.fill.includes(b)
        ? `<span class="ghostt">${esc(b.t)}</span>`
        : `<button class="tile" data-b="${i}">${esc(b.t)}</button>`
    )
    .join('');
  app.querySelectorAll('[data-b]').forEach(
    t =>
      (t.onclick = () => {
        if (L.locked) return;
        const s = L.fill.indexOf(null);
        if (s < 0) return;
        SFX.tap();
        L.fill[s] = L.bank[+t.dataset.b];
        drawBuild();
      })
  );
  app.querySelectorAll('[data-f]').forEach(
    t =>
      (t.onclick = () => {
        if (L.locked) return;
        SFX.tap();
        L.fill[+t.dataset.f] = null;
        drawBuild();
      })
  );
  $('#ck').disabled = L.fill.includes(null);
}
function checkChoice() {
  if (L.sel === null) return;
  const ok = L.opts[L.sel].ok;
  app.querySelectorAll('.opt').forEach((b, k) => {
    if (L.opts[k].ok && ok) b.classList.add('good');
    else if (k === L.sel && !ok) b.classList.add('wrong');
  });
  verdict(ok, L.opts.find(o => o.ok).t);
}
function checkNum() {
  const q = L.cur,
    raw = $('#ni')
      .value.trim()
      .toLowerCase()
      .replace(/,/g, '')
      .replace(/[^\d.\-]/g, '');
  const ok = q.a.some(a => a === raw || (raw !== '' && parseFloat(a) === parseFloat(raw)));
  $('#ni').readOnly = true;
  verdict(ok, q.a[0] + ' ' + q.u);
}
function checkBuild() {
  const q = L.cur,
    got = L.fill.map(f => f.t);
  const ok = q.any ? got.slice().sort().join('|') === q.a.slice().sort().join('|') : got.join('|') === q.a.join('|');
  let k = 0;
  verdict(
    ok,
    q.q.replace(/___/g, () => q.a[k++])
  );
}
function tapMatch(b) {
  if (L.locked) return;
  const side = b.dataset.s,
    k = +b.dataset.k;
  if (side === 'l') {
    SFX.tap();
    app.querySelectorAll('.opt[data-s=l]').forEach(x => x.classList.remove('sel'));
    b.classList.add('sel');
    L.pick = k;
    return;
  }
  if (L.pick === null) {
    b.classList.add('shake');
    setTimeout(() => b.classList.remove('shake'), 350);
    return;
  }
  const lb = app.querySelector(`.opt[data-s=l][data-k="${L.pick}"]`);
  if (k === L.pick) {
    SFX.good();
    lb.classList.remove('sel');
    [lb, b].forEach(x => {
      x.classList.add('good');
      setTimeout(() => {
        x.classList.remove('good');
        x.classList.add('gone');
      }, 380);
    });
    L.pick = null;
    if (++L.matched === L.cur.p.length)
      setTimeout(() => {
        const q = L.cur,
          mixed = [...new Set(L.mWrong)];
        if (!mixed.length) return verdict(true, '');
        (L.mix = L.mix || new Map()).set(q, new Set(mixed));
        verdict(false, mixed.map(i => q.p[i][0] + ' = ' + q.p[i][1]).join(' · '));
      }, 450);
  } else {
    SFX.bad();
    buzz(40);
    L.mWrong.push(L.pick);
    b.classList.add('wrong', 'shake');
    setTimeout(() => b.classList.remove('wrong', 'shake'), 450);
  }
}

function verdict(ok, answer) {
  L.locked = true;
  {
    const hb = $('#hint');
    if (hb) hb.disabled = true;
  }
  const q = L.cur,
    qi = L.queue.shift();
  const quick = Date.now() - (L.tAsk || 0) < 2000 && q.t !== 'match';
  L.fast = quick ? (L.fast || 0) + 1 : 0;
  const nudge = L.fast >= 3;
  if (nudge) L.fast = 0;
  if (ok) {
    L.right++;
    if (!L.again) {
      L.combo++;
      L.best = Math.max(L.best, L.combo);
      if ([3, 5, 8, 12].includes(L.combo)) burst(L.combo);
    }
    if (L.review && !L.again) {
      delete S.mistakes[q.id];
      delete S.mxq[q.id];
    }
    if (q.t !== 'match') SFX.good();
  } else {
    L.wrong++;
    L.combo = 0;
    if (!q.soft) {
      L.missed.add(qi);
      saveMistake(q);
      if (!L.final) L.queue.push(qi);
    }
    SFX.bad();
    buzz([60, 40, 60]);
    if (!L.practice && !easy() && !q.soft && L.conf !== 'check') {
      S.hearts = Math.max(0, S.hearts - 1);
      const hh = $('#hh');
      if (hh) {
        hh.innerHTML = I.heart + S.hearts;
        hh.classList.add('hit');
      }
    }
    save();
  }
  const pg = $('#pg');
  pg.querySelector('i').style.width =
    Math.max(4, Math.round(((L.final ? L.total - L.queue.length : L.right) / L.total) * 100)) + '%';
  pg.classList.toggle('hot', L.combo >= 3);
  const old = pg.querySelector('.combo');
  if (old) old.remove();
  if (L.combo >= 3) pg.insertAdjacentHTML('afterbegin', `<div class="combo">${L.combo} in a row</div>`);
  app.querySelectorAll('.opt,.tile').forEach(b => (b.disabled = true));
  const praise = ok
    ? L.combo >= 5
      ? 'On fire!'
      : L.combo >= 3
        ? 'Amazing!'
        : ['Nice!', 'Spot on!', 'Correct!', 'Great job!', 'Brilliant!'][(Math.random() * 5) | 0]
    : q.t === 'match'
      ? 'Got there, with some mix-ups'
      : 'Not quite';
  const ms = $('#mas');
  if (ms) {
    ms.innerHTML = mascot(ok ? 'happy' : 'sad');
    ms.className = 'mas ' + (ok ? 'hop' : 'shake');
  }
  const ft = $('#ft');
  ft.className = 'foot ' + (ok ? 'ok' : 'no');
  ft.innerHTML = `<div class="in"><div class="vrow"><div class="vic">${ok ? I.check : I.cross}</div><div class="verdict">${praise}</div></div>${!ok && answer ? `<p>${q.t === 'match' ? 'You mixed up' : 'Correct answer'}: <span class="ans">${esc(answer)}</span></p>` : ''}${q.x ? `<p>${esc(q.x)}</p>` : ''}${q.why ? `<p class="why"><b>Why it matters:</b> ${esc(q.why)}</p>` : ''}${q.r && refDoc(q.r) && (/p\.(\d+)/.test(q.r) || RF('blk', q.r)) ? `<button class="linkb adp" data-doc="${refDoc(q.r).code}" data-adp="${(q.r.match(/p\.(\d+)/) || [])[1] || ''}"${RF('blk', q.r)}>Open the official page</button>` : ''}${q.r ? `<div class="ref">${esc(q.r)}${q.doc || (docsOf(QU[q.id])[0] || {}).url ? ` · <a href="${esc(q.doc || docsOf(QU[q.id])[0].url)}" target="_blank" rel="noopener">read it on GOV.UK ${ARROW}</a>` : ''}</div>` : ''}${window.LABQ ? LABQ.extra(ok, q) : ''}${RF('qreport', q)}${nudge ? `<p class="nudge">${BULB}Whoa, that was quick! Slow down and read each one properly, it sticks better.</p>` : ''}<button class="btn" id="nx">Continue</button></div>`;
  const out = !ok && !L.practice && !easy() && S.hearts <= 0;
  $('#nx').onclick = () => {
    L.locked = false;
    SFX.tap();
    out ? outHearts() : ask();
  };
  $('#nx').focus({ preventScroll: true });
}

function burst(n) {
  const b = document.createElement('div');
  b.className = 'burst';
  b.innerHTML = `${I.fire}<b>${n} in a row!</b>`;
  document.body.appendChild(b);
  if (n >= 5) SFX.fire();
  setTimeout(() => b.remove(), 1500);
}
function quit() {
  sheet(
    `<div style="text-align:center"><div class="big" style="width:110px;height:110px">${mascot('sad')}</div><h2>Wait, don’t go!</h2><p class="small">You’ll lose your progress in this lesson if you quit now.</p><button class="btn" data-close>Keep learning</button><button class="btn ghost" id="qq" style="color:var(--bad)">End session</button></div>`,
    (v, close) => {
      v.querySelector('#qq').onclick = () => {
        close();
        const b = L && L.back;
        L = null;
        view = b || 'learn';
        render();
      };
    }
  );
}

function finish() {
  const back = L.back,
    qz = L.quiz !== undefined,
    fin = L.final ? collate() : null,
    secs = Math.round((Date.now() - L.t0) / 1000),
    acc = Math.round((L.total / (L.total + L.wrong)) * 100),
    perfect = L.missed.size === 0;
  let xp;
  S.bestCombo = Math.max(S.bestCombo, L.best);
  if (fin) {
    xp = 10 + (fin.score >= 8 ? 5 : 0);
    const f = S.finals[L.quiz] || { best: 0 };
    S.finals[L.quiz] = {
      best: Math.max(f.best || 0, fin.score),
      last: fin.score,
      at: Date.now(),
      weak: fin.rows.filter(r => r.miss.length && r.li >= 0).map(r => LES[r.li].key)
    };
  } else if (qz) {
    xp = 5 + (perfect ? 5 : 0);
    const pct = Math.round(((L.total - L.missed.size) / L.total) * 100),
      k = L.sec >= 0 ? 's' + LES[L.sec].key : 'u' + L.quiz;
    S.qbest[k] = Math.max(S.qbest[k] || 0, pct);
    if (L.sec >= 0 && !S.done[LES[L.sec].key]) {
      S.done[LES[L.sec].key] = 1;
      S.lessonsToday++;
    }
  } else if (L.practice) {
    xp = 5;
    S.hearts = Math.min(MAXH, S.hearts + 1);
  } else {
    xp = L.redo ? 5 : 10 + (perfect ? 5 : 0);
    if (perfect && !L.redo) S.gems += 5;
    S.done[LES[L.idx].key] = 1;
    S.lessonsToday++;
  }
  xp += L.bonus || 0;
  const streakUp = addXp(xp),
    qs = newQuests();
  save();
  const steps = [() => (fin ? finalScreen(fin, xp) : done(xp, acc, secs, perfect))];
  if (streakUp) steps.push(streakScreen);
  qs.forEach(q => steps.push(() => questScreen(q)));
  let s = 0;
  const next = () => {
    if (s < steps.length) {
      steps[s++]();
      const b = $('#nx2');
      b.onclick = () => {
        SFX.tap();
        next();
      };
      b.focus();
    } else {
      L = null;
      view = back || 'learn';
      learn.scrolled = 0;
      render();
      enter();
    }
  };
  next();
}
function collate() {
  const by = {};
  L.qs.forEach((q, qi) => {
    const k = q._l >= 0 ? q._l : -1,
      b = (by[k] = by[k] || { li: k, n: 0, ok: 0, miss: [] });
    b.n++;
    if (L.missed.has(qi)) b.miss.push(q);
    else b.ok++;
  });
  const rows = Object.values(by).sort((a, b) => a.ok / a.n - b.ok / b.n || b.n - a.n);
  return { ui: L.quiz, score: L.total - L.missed.size, total: L.total, rows };
}
const secName = li => {
  if (li < 0) return 'Unit introduction';
  const l = LES[li];
  return l.meta ? l.meta.name : 'Lesson ' + (l.li + 1);
};
const secSub = li => {
  if (li < 0) return 'The unit overview';
  const l = LES[li];
  return l.meta ? l.meta.sec.split(' · ')[0] : UNITS[l.ui].name;
};
function missLine(q) {
  if (q.t === 'spot') return `<div class="fmiss"><b>${esc(q.fix)}</b>${q.r ? `<span>${esc(q.r)}</span>` : ''}</div>`;
  let a;
  if (q.t === 'build') {
    let k = 0;
    a = q.q.replace(/___/g, () => q.a[k++]);
  } else if (q.t === 'mc') a = q.o[0];
  else if (q.t === 'num') a = fmtNum(q.a[0], q.u);
  else if (q.t === 'tf')
    a = /^Answer: /.test(q.x || '')
      ? (q.a ? 'True' : 'False') + ' — ' + q.x.slice(8).split('. ')[0]
      : q.a
        ? 'True'
        : 'False';
  else a = '';
  return `<div class="fmiss">${q.t !== 'build' ? `<p>${esc(q.q)}</p>` : ''}<b>${esc(a)}</b>${q.r ? `<span>${esc(q.r)}</span>` : ''}</div>`;
}
function finalScreen(f, xp) {
  SFX.done();
  if (f.score >= 8) confetti();
  const u = UNITS[f.ui],
    weak = f.rows.filter(r => r.miss.length),
    strong = f.rows.filter(r => !r.miss.length);
  const msg =
    f.score === f.total
      ? 'Flawless. You know this unit inside out.'
      : f.score >= 8
        ? 'Strong result. Just a couple of things to polish.'
        : f.score >= 5
          ? 'Good base. Revise the sections below, then try again.'
          : 'This unit needs another read. Start with the sections below.';
  const row =
    r => `<div class="frow${r.miss.length ? ' weak' : ''}"><div class="fr1"><div class="frt"><b>${esc(secName(r.li))}</b><small>${esc(secSub(r.li))}</small></div><span class="frs">${r.ok}/${r.n}</span></div><div class="fbar"><i style="width:${Math.round((r.ok / r.n) * 100)}%"></i></div>
${r.miss.length ? `${r.miss.map(missLine).join('')}<div class="fbtns"><button class="btn ghost" data-frd="${r.li}">${I.book}Read again</button><button class="btn" data-fqz="${r.li}">${I.quiz}Quiz this</button></div>` : ''}</div>`;
  app.innerHTML = `<div class="end fin" style="${tv(f.ui)}"><div class="grow"><div class="big">${mascot(f.score >= 8 ? 'cheer' : f.score >= 5 ? 'happy' : 'think')}</div><div class="fkick">Final revision · ${esc(u.name)}</div><h1>${f.score} / ${f.total}</h1><p>${msg}</p>
<div class="tiles"><div class="st y"><span>Total XP</span><b data-p="+" id="c1">+0</b></div><div class="st g"><span>Right</span><b>${f.score}/${f.total}</b></div><div class="st b"><span>Best</span><b>${(S.finals[f.ui] || {}).best || f.score}/${f.total}</b></div></div>
${weak.length ? `<h2 class="fh">Revise these</h2>${weak.map(row).join('')}` : ''}${strong.length ? `<h2 class="fh">${weak.length ? 'Solid' : 'Every section solid'}</h2>${strong.map(row).join('')}` : ''}</div><button class="btn" id="nx2">Continue</button></div>`;
  countUp($('#c1'), xp);
  scrollTo(0, 0);
  const leave = fn => {
    L = null;
    view = 'learn';
    fn();
  };
  app.querySelectorAll('[data-frd]').forEach(
    b =>
      (b.onclick = () => {
        SFX.tap();
        const li = +b.dataset.frd;
        leave(() => (li >= 0 && LES[li].meta ? lessonDeck(li) : deck(f.ui, -1)));
      })
  );
  app.querySelectorAll('[data-fqz]').forEach(
    b =>
      (b.onclick = () => {
        const li = +b.dataset.fqz;
        leave(() => (li >= 0 ? secQuiz(li) : unitQuiz(f.ui)));
      })
  );
}
function done(xp, acc, secs, perfect) {
  SFX.done();
  confetti();
  const missed = [...L.missed]
      .sort((a, b) => a - b)
      .map(i => L.qs[i])
      .filter(Boolean),
    qz = L.quiz !== undefined,
    u = qz ? UNITS[L.quiz] : L.practice ? null : UNITS[LES[L.idx].ui],
    first = L.total - L.missed.size;
  app.innerHTML = `<div class="end" style="${tv(qz ? L.quiz : L.practice ? 0 : LES[L.idx].ui)}"><div class="grow"><div class="big">${mascot('cheer')}</div><h1>${qz ? (perfect ? 'Perfect quiz!' : 'Quiz complete!') : L.practice ? 'Practice complete!' : perfect ? 'Perfect lesson!' : 'Lesson complete!'}</h1><p>${qz ? esc(u.name + (L.sec >= 0 && LES[L.sec].meta ? ' · ' + LES[L.sec].meta.name : '')) + ` · ${first} of ${L.total} right first time.` + (perfect ? ' +5 bonus XP.' : ' Anything you missed is saved in Mistakes.') : L.practice ? 'Mistakes you got right are cleared, and you earned a heart back.' : esc(u.name) + (perfect ? (L.redo ? ' · nice refresher.' : ' · no mistakes, +5 bonus XP and 5 gems.') : ' · anything you missed is saved in Mistakes.')}</p>
<div class="tiles"><div class="st y"><span>Total XP</span><b data-p="+" id="c1">+0</b></div><div class="st g"><span>${acc === 100 ? 'Amazing' : acc >= 80 ? 'Great' : 'Good'}</span><b data-s="%" id="c2">0%</b></div><div class="st b"><span>Time</span><b>${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}</b></div></div>${missed.length ? `<div class="rev"><h2>What you got wrong <span>${missed.length}</span></h2><p class="small">Here are the right answers. You got ${missed.length === 1 ? 'it' : 'these'} right in the end, and ${missed.length === 1 ? 'it’s' : 'they’re'} saved in Mistakes to practise again.</p>${missed.map(reviewLine).join('')}<button class="btn ghost" id="rvp">${I.quiz}Practise ${missed.length === 1 ? 'it' : 'these'} again</button></div>` : ''}</div><button class="btn" id="nx2">Continue</button></div>`;
  countUp($('#c1'), xp);
  countUp($('#c2'), acc);
  const rv = $('#rvp');
  if (rv)
    rv.onclick = () => {
      SFX.tap();
      begin(missed.slice(), { practice: true, review: true });
      scrollTo(0, 0);
    };
}
function reviewLine(q) {
  if (q.t === 'spot')
    return `<div class="rline"><p class="rq">Spot the mistake</p><div class="ra">${I.check}<span>${esc(q.fix)}</span></div><p class="rx">${q.wrong >= 0 ? `It said ${esc(q.w)}. It should be ${esc(q.a)}.` : 'There was no mistake in this one.'}</p>${q.r ? `<span class="rr">${esc(q.r)}</span>` : ''}</div>`;
  let a = '',
    extra = '';
  if (q.t === 'build') {
    let k = 0;
    a = q.q.replace(/___/g, () => q.a[k++]);
  } else if (q.t === 'mc') a = q.o[0];
  else if (q.t === 'num') a = fmtNum(q.a[0], q.u);
  else if (q.t === 'tf') a = q.a ? 'True' : 'False';
  else if (q.t === 'match') {
    const mx = (L && L.mix && L.mix.get(q)) || new Set();
    extra = `<ul class="rpairs">${q.p.map((p, i) => `<li${mx.has(i) ? ' class="mx"' : ''}><b>${esc(p[0])}</b>${esc(p[1])}${mx.has(i) ? '<em>mixed up</em>' : ''}</li>`).join('')}</ul>`;
  }
  const x = String(q.x || '').replace(/^Answer: /, '');
  return `<div class="rline">${q.t !== 'build' ? `<p class="rq">${esc(q.q)}</p>` : ''}${a ? `<div class="ra">${I.check}<span>${esc(a)}</span></div>` : ''}${extra}${x && q.t !== 'build' ? `<p class="rx">${esc(x)}</p>` : ''}${q.r ? `<span class="rr">${esc(q.r)}</span>` : ''}</div>`;
}
function streakScreen() {
  SFX.fire();
  const s = streak();
  const wk = [...Array(7)].map((_, k) => {
    const d = new Date();
    d.setDate(d.getDate() - 6 + k);
    return { l: 'MTWTFSS'[(d.getDay() + 6) % 7], on: !!S.hist[dstr(d)] };
  });
  app.innerHTML = `<div class="end"><div class="grow"><div class="big">${I.flameBig}<b>${s}</b></div><h1 class="fire">${s} day streak!</h1><p>${s === 1 ? 'You’ve started a streak. Do a lesson every day to keep it going.' : 'You’re on a roll. Come back tomorrow to keep it alive.'}</p>
<div class="week">${wk.map(d => `<div><i class="${d.on ? 'on' : ''}">${d.on ? I.fire : ''}</i>${d.l}</div>`).join('')}</div></div><button class="btn" id="nx2" style="background:var(--fire);box-shadow:0 4px 0 #b86200">Continue</button></div>`;
}
function questScreen(q) {
  SFX.gem();
  confetti();
  app.innerHTML = `<div class="end"><div class="grow"><div class="big">${I.chestOpen}</div><h1 class="gemh">Quest complete!</h1><p>${esc(q.name)} — you earned 10 gems. Gems refill your hearts.</p><div class="stat gm" style="justify-content:center;font-size:28px">${I.gem}${S.gems}</div></div><button class="btn gemb" id="nx2">Continue</button></div>`;
}
function outHearts() {
  view = 'lesson';
  const mc = Object.keys(S.mistakes).filter(id => mistakeQ(id)).length;
  app.innerHTML = `<div class="end"><div class="grow"><div class="big">${mascot('sad')}</div><h1 class="badh">Out of hearts</h1><p>Hearts refill tomorrow. Spend gems to refill now, or practise your mistakes to earn one back.</p></div>
<button class="btn gemb" id="rf2" ${S.gems >= REFILL ? '' : 'disabled'}>Refill hearts · ${REFILL} gems (you have ${S.gems})</button><button class="btn" id="p" ${mc ? '' : 'disabled'}>Practise mistakes</button><button class="btn ghost" id="h">Back to the course</button></div>`;
  $('#rf2').onclick = () => {
    refill();
    view = 'learn';
    render();
  };
  $('#p').onclick = () => practice(true);
  $('#h').onclick = () => {
    view = 'learn';
    render();
  };
}

/* keyboard: number keys pick options, Enter checks / continues */
addEventListener('keydown', e => {
  if (view === 'lesson' && DK && !document.querySelector('.veil')) {
    if (e.key === 'ArrowRight' || e.key === 'Enter') {
      e.preventDefault();
      const b = $('#nk') || $('#gs') || $('#gh');
      if (b) b.click();
    } else if (e.key === 'ArrowLeft') deckGo(-1);
    return;
  }
  if (view !== 'lesson' || !L) return;
  if (document.querySelector('.veil')) return;
  const nx = $('#nx') || $('#nx2');
  if (e.key === 'Enter') {
    e.preventDefault();
    if (nx) {
      nx.click();
      return;
    }
    const ck = $('#ck');
    if (ck && !ck.disabled) ck.click();
    return;
  }
  if (/^[1-4]$/.test(e.key) && L.opts && !L.locked && (L.cur.t === 'mc' || L.cur.t === 'tf')) {
    const k = +e.key - 1;
    if (k < L.opts.length) pickOpt(k);
  }
});

/* Android back button (used by the phone app): close sheets, leave lessons, return to the path */
window.__back = () => {
  const v = document.querySelector('.veil');
  if (v) {
    v.remove();
    return true;
  }
  if (view === 'lesson') {
    if (DK) {
      DK = null;
      view = 'learn';
      render();
      return true;
    }
    if (document.querySelector('.end') || !L) {
      L = null;
      view = 'learn';
      render();
      return true;
    }
    quit();
    return true;
  }
  if ($('#dv')) {
    closeOfficial();
    return true;
  }
  if (view === 'library' && fromSearch) {
    searchView();
    scrollTo(0, 0);
    return true;
  }
  if (view !== 'learn') {
    view = 'learn';
    render();
    scrollTo(0, 0);
    return true;
  }
  return false;
};

/* ---------- plain-English intros for each Part (reviewed by Joseph, Nov 2026) ---------- */
