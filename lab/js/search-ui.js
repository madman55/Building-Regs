/* Building Regs Lab · Search screen: recent searches, result lists and opening results.
   Part of the main app script, split by area. Files are loaded in order by index.html and share one global scope:
   core, screens, quiz, beginner, search, official, semantic, search-ui, boot. */
let sQ = '',
  fromSearch = false,
  lastRes = [];
const RKEY = 'regs-lab-recent';
let RECENT = [];
try {
  RECENT = JSON.parse(localStorage.getItem(RKEY)) || [];
} catch (e) {
  RECENT = [];
}
const TRY = [
  'banister height',
  'fire door',
  'wheelchair turning space',
  'escape window size',
  'stair pitch',
  'travel distance in flats',
  'lift size',
  'toilet door width'
];
function srCard(r, i) {
  const d = r.d,
    u = UNITS[d.ui],
    l = LES[d.li],
    m = l.meta,
    where = esc(unitLabel(u, d.ui)) + (m ? ' · ' + esc(m.sec.split(' · ')[0]) + ' · p.' + m.page : '');
  let main,
    sub,
    kd = '';
  if (d.k === 's') {
    main = m.sec + ' · ' + m.name;
    sub = clip(m.intro);
    kd = 'Section';
  } else if (d.k === 'w') {
    main = d.w;
    sub = m ? m.name : '';
    kd = 'Watch out';
  } else if (d.k === 'p') {
    main = d.p[0] + ' — ' + d.p[1];
    sub = m ? m.name : u.name;
  } else {
    const q = d.q;
    main = answerOf(q);
    sub = (q.t === 'mc' ? q.q + ' ' : '') + clip(q.x || '', 140) + (q.r ? ' (' + q.r + ')' : '');
  }
  return `<button class="sr" data-go="${i}" style="${tv(d.ui)}"><span class="pi">${partIc(u.k)}</span><span class="srt"><small>${where}${kd ? `<span class="kd">${kd}</span>` : ''}${RF('lessonBadge')}${r.sem ? '<span class="kd rel">Related</span>' : ''}</small><b>${hl(main, r.hits)}</b><em>${hl(sub, r.hits)}</em></span></button>`;
}
function drawResults() {
  const box = $('#sres');
  if (!box) return;
  const r = runSearch(sQ);
  lastRes = r.res;
  const q = sQ.trim();
  let qm = q;
  for (const k of sEx)
    if (k.startsWith('t:') || k.startsWith('p:'))
      qm = qm.replace(new RegExp('\\b' + k.slice(2).replace(/[^a-z0-9 ]/gi, '') + '\\w*', 'gi'), ' ');
  if (SEM.state === 'on' && /[a-z]{3}/i.test(q)) {
    semQuery(qm)
      .then(qv => {
        if (sQ.trim() !== q || !$('#sres')) return;
        lastRes = hybrid(r, qv);
        paint(r, lastRes);
      })
      .catch(() => {});
  }
  paint(r, lastRes);
}
function paint(r, list) {
  const box = $('#sres'),
    note = $('#snote');
  if (!box) return;
  const lk = $('#slook');
  if (lk) {
    const L = r.look || [];
    const main = L.filter(x => x.main || x.ctx),
      rest = L.filter(x => !x.main && !x.ctx && !/^t:\d/.test(x.key));
    lk.innerHTML =
      sQ.trim() && L.length && sQ.trim().split(/\s+/).length >= 3
        ? `<span class="lkt">Looking for</span>${main.map(x => `<button class="lk${x.ctx ? ' ctx' : ''}" data-lk="${esc(x.key)}" aria-label="Remove ${esc(x.label)}">${esc(x.label)}<i>×</i></button>`).join('')}${rest.length ? `<span class="lkr">also: ${rest.map(x => `<button class="lk sm" data-lk="${esc(x.key)}" aria-label="Remove ${esc(x.label)}">${esc(x.label)}<i>×</i></button>`).join('')}</span>` : ''}${sEx.size ? '<button class="lkreset" id="lkreset">Undo removals</button>' : ''}`
        : '';
  }
  const bits = [];
  if (r.part) bits.push(`Only Part <b>${esc(r.part)}</b>`);
  if (r.fix.length) bits.push(`Did you mean <b>${r.fix.map(esc).join(', ')}</b>?`);
  if (r.syn.length) bits.push(`Also matching ${r.syn.map(esc).join(', ')}`);
  note.innerHTML = sQ.trim()
    ? (list.length ? `${list.length === 40 ? 'Top 40' : list.length} result${list.length === 1 ? '' : 's'}` : '') +
      (bits.length ? (list.length ? ' · ' : '') + bits.join(' · ') : '')
    : '';
  if (!sQ.trim()) {
    box.innerHTML = `${RF('home')}${RECENT.length ? `<p class="small" style="margin:4px 4px 0">Recent</p><div class="chips2">${RECENT.map(t => `<button class="chip2" data-try="${esc(t)}">${esc(t)}</button>`).join('')}</div>` : ''}<p class="small" style="margin:16px 4px 0">Try something like</p><div class="chips2">${TRY.map(t => `<button class="chip2" data-try="${esc(t)}">${esc(t)}</button>`).join('')}</div><p class="small" style="margin:16px 4px 0">Type it however you'd say it. Add "part B" to search one Part. Figures work in mm or m.</p>`;
    return;
  }
  const off = list.filter(r => isOfficial(r.d)),
    les = list.filter(r => !isOfficial(r.d));
  lastRes = off.concat(les);
  box.innerHTML = list.length
    ? (off.length
        ? `<h3 class="rh">In the official text <span>${esc([...new Set(off.slice(0, 12).map(r => docOf(r.d.b).short))].join(', '))}</span></h3><p class="chk"><b>Check before you rely on it.</b> Search can miss or misrank things. Open the result and read the full paragraph, including any conditions and cross-references.${RF('legend')}</p>${off
            .slice(0, 12)
            .map((r, i) => adkCard(r, i))
            .join(
              ''
            )}<p class="ogl">Contains public sector information licensed under the Open Government Licence v3.0, © Crown copyright. Always check the current document before relying on it.</p>`
        : '') +
      (les.length
        ? `<h3 class="rh">In the lessons <span>summaries, for learning</span></h3>${les.map((r, i) => srCard(r, off.length + i)).join('')}`
        : '')
    : `<div class="sempty"><div style="width:90px;margin:0 auto">${mascot('sad')}</div><p>Nothing in the app matches that yet${r.miss.length ? ` (no match for “${esc(r.miss.join(' '))}”)` : ''}. Try a different word, or open the Approved Document on GOV.UK from the Library.</p></div>`;
}
function searchView() {
  view = 'search';
  fromSearch = false;
  if (!ADK)
    ADK_READY.then(d => {
      if (d && view === 'search' && $('#sres')) drawResults();
    });
  app.innerHTML = shell(
    `<div class="card shead"><h2>Search the regs</h2><div class="sbox">${SEARCHIC}<input id="sq" type="search" placeholder="e.g. how high should a banister be" value="${esc(sQ)}" aria-label="Search the regulations" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search"></div><p class="snote" id="snote" aria-live="polite"></p><div class="slook" id="slook"></div><p class="snote" id="semst"></p></div><div id="sres"></div>`
  );
  bindTabs();
  const inp = $('#sq');
  let tm;
  inp.addEventListener('input', () => {
    clearTimeout(tm);
    tm = setTimeout(() => {
      sQ = inp.value;
      sEx = new Set();
      drawResults();
    }, 120);
  });
  $('#slook').addEventListener('click', e => {
    const b = e.target.closest('[data-lk]');
    if (b) {
      SFX.tap();
      sEx.add(b.dataset.lk);
      drawResults();
      return;
    }
    if (e.target.closest('#lkreset')) {
      sEx = new Set();
      drawResults();
    }
  });
  inp.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      inp.blur();
    }
  });
  $('#sres').addEventListener('click', e => {
    const c = e.target.closest('[data-try]');
    if (c) {
      sQ = c.dataset.try;
      inp.value = sQ;
      sEx = new Set();
      drawResults();
      return;
    }
    const g = e.target.closest('[data-go]');
    if (g) {
      const r = lastRes[+g.dataset.go];
      if (r && isOfficial(r.d)) openOfficial(r.d.b);
      else goResult(r);
    }
  });
  drawResults();
  semStatus();
  if (SEM.state === 'off') startSemantic();
  if (!sQ)
    setTimeout(() => {
      try {
        inp.focus();
      } catch (e) {}
    }, 60);
}
function goResult(r) {
  if (!r) return;
  SFX.tap();
  const q = sQ.trim();
  if (q) {
    RECENT = [q, ...RECENT.filter(x => x !== q)].slice(0, 6);
    try {
      localStorage.setItem(RKEY, JSON.stringify(RECENT));
    } catch (e) {}
  }
  const d = r.d;
  libOpen = {};
  libOpen[d.ui] = true;
  libQ = '';
  view = 'library';
  render();
  fromSearch = true;
  library();
  const el =
    (d.id && document.getElementById(d.id)) ||
    document.getElementById('s' + d.li) ||
    app.querySelector(`.lpart[data-ui="${d.ui}"]`);
  if (el) {
    el.scrollIntoView({ block: 'center' });
    el.classList.remove('flash');
    void el.offsetWidth;
    el.classList.add('flash');
  }
}
function openSearch() {
  SFX.tap();
  openPop = -1;
  DK = null;
  searchView();
  scrollTo(0, 0);
  enter();
}
document.addEventListener('click', e => {
  const b = e.target.closest && e.target.closest('[data-search]');
  if (b) {
    e.preventDefault();
    openSearch();
  }
});
/* ---------- opening animation ---------- */
