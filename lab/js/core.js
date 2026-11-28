/* Building Regs Lab · Core: icons, lesson data wiring, GOV.UK update check, saved progress, XP and streaks, sounds, small helpers, and the app shell (top bar, tabs, render).
   Part of the main app script, split by area. Files are loaded in order by index.html and share one global scope:
   core, screens, quiz, beginner, search, official, semantic, search-ui, boot. */
const I = {
  fire: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1 3.5 5 6 5 11a5 5 0 0 1-10 0c0-2.2 1-3.8 2.3-5 .2 1.6 1 2.7 2.2 3.2C11 8.6 11.3 5 12 2z"/></svg>',
  heart:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-8-5.2-8-11a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 5.8-8 11-8 11z"/></svg>',
  gem: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 3h10l4 6-9 12L3 9z" opacity=".9"/><path d="M7 3l5 6 5-6M3 9h18M12 9v12" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.3"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
  cross:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 10V7a5 5 0 0 1 10 0v3h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm2 0h6V7a3 3 0 0 0-6 0z"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3 6.6 7 .7-5.3 4.8 1.6 7L12 17.5 5.7 21l1.6-7L2 9.3l7-.7z"/></svg>',
  quiz: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="3.5"/><path d="m8 10 2.4 2.4L16 7M8 17h8"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M8 7h7"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 2 11h3v9h5v-6h4v6h5v-9h3z"/></svg>',
  target:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4.2"/><path d="M3.5 21a8.5 7 0 0 1 17 0z"/></svg>',
  chest:
    '<svg viewBox="0 0 64 64"><rect x="8" y="26" width="48" height="28" rx="5" fill="#b86b1d"/><path d="M8 30a24 14 0 0 1 48 0z" fill="#d98a2b"/><rect x="8" y="28" width="48" height="6" fill="#ffd400"/><rect x="28" y="30" width="8" height="12" rx="2" fill="#ffd400" stroke="#8a4f12" stroke-width="2"/><rect x="8" y="50" width="48" height="4" fill="#8a4f12"/></svg>',
  chestOpen:
    '<svg viewBox="0 0 64 64"><rect x="8" y="30" width="48" height="24" rx="5" fill="#b86b1d"/><path d="M10 26 14 8h36l4 18z" fill="#d98a2b" opacity=".55"/><rect x="8" y="30" width="48" height="6" fill="#ffd400"/><rect x="8" y="50" width="48" height="4" fill="#8a4f12"/></svg>',
  chestLock:
    '<svg viewBox="0 0 64 64" opacity=".45"><rect x="8" y="26" width="48" height="28" rx="5" fill="#8b9098"/><path d="M8 30a24 14 0 0 1 48 0z" fill="#a9aeb5"/><rect x="8" y="28" width="48" height="6" fill="#c9cdd2"/><rect x="28" y="30" width="8" height="12" rx="2" fill="#c9cdd2"/></svg>',
  flameBig:
    '<svg viewBox="0 0 100 100"><path d="M50 4c5 16 26 28 26 52a26 26 0 0 1-52 0c0-11 5-19 11-25 1 8 5 13 11 16C44 34 46 18 50 4z" fill="#ff8a00"/><path d="M50 46c3 9 14 14 14 26a14 14 0 0 1-28 0c0-6 3-10 6-13 1 4 3 6 6 7-1-8 0-14 2-20z" fill="#ffd400"/></svg>'
};

const A = window.REG_ART;
if (A) Object.assign(I, A.ui, { target: A.ui.quest, user: A.ui.hat });
const mascot = m => (A ? A.mascot(m) : ''),
  sceneArt = k => (A && A.scene ? A.scene(k) : ''),
  partIc = k => (A ? A.part(k) : ''),
  diagram = (k, l) => (A ? A.diagram(k, l) : '');
const UNITS = window.REG_UNITS || [];
/* stable ids from question text, so progress survives edits to the bank */
const h = s => {
  let x = 5381;
  for (const c of s) x = (x * 33 + c.charCodeAt(0)) >>> 0;
  return x.toString(36);
};
const LES = [];
UNITS.forEach((u, ui) =>
  u.lessons.forEach((les, li) => {
    const meta = Array.isArray(les) ? null : les,
      qs = meta ? meta.qs : les;
    qs.forEach(q => (q.id = u.k + ':' + h(q.q + (q.p ? JSON.stringify(q.p) : ''))));
    LES.push({ ui, li, key: ui + '-' + (meta ? meta.id : li), qs, meta });
  })
);
const QBY = {},
  QU = {};
LES.forEach(l =>
  l.qs.forEach(q => {
    QBY[q.id] = q;
    QU[q.id] = l.ui;
  })
);
const ARROW =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>';
const govLink = (d, cls = 'gov') =>
  `<a class="${cls}" href="${esc(d.url)}" target="_blank" rel="noopener">${esc(d.t)} on GOV.UK ${ARROW}</a>`;
const docsOf = ui => (UNITS[ui] && UNITS[ui].docs) || [];

/* ---------- GOV.UK update check ----------
   Content in this app was checked against GOV.UK in November 2026.
   On open we ask GOV.UK's public content API for each Approved Document page's
   public_updated_at. Anything updated after 21 Nov 2026 gets a "May be out of date" badge.
   If the request is blocked (offline, or the page's security policy), we stay quiet. */
const CHECKED = 'November 2026',
  CUTOFF = Date.parse('2026-11-22T00:00:00Z'),
  GKEY = 'regs-lab-govuk';
const govPages = ui =>
  docsOf(ui).filter(d => /^https:\/\/www\.gov\.uk\/government\/(publications|collections)\//.test(d.url));
const apiPath = u => u.replace('https://www.gov.uk/', '').split(/[?#]/)[0];
let GOV = {};
try {
  GOV = JSON.parse(localStorage.getItem(GKEY)) || {};
} catch (e) {
  GOV = {};
}
const staleOf = ui =>
  govPages(ui)
    .map(d => ({ d, g: GOV[apiPath(d.url)] }))
    .filter(o => o.g && o.g.t >= CUTOFF);
function govCheck(ui, inl) {
  const pg = govPages(ui);
  if (!pg.length) return '';
  const st = staleOf(ui);
  return `<div class="gchk${inl ? ' inl' : ''}"><span>Checked against GOV.UK, ${CHECKED}</span>${pg.map(d => `<a class="glive" href="${esc(d.url)}" target="_blank" rel="noopener">${pg.length > 1 ? esc(d.t.replace(/^Approved Document /, 'AD ')) : 'Live GOV.UK page'} ${ARROW}</a>`).join('')}${st.length ? `<button class="gstale" data-gstale="${ui}">${WARN}May be out of date</button>` : ''}</div>`;
}
function staleSheet(ui) {
  const u = UNITS[ui],
    fmt = t => new Date(t).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  sheet(
    `<h2>${esc(u.name)} may be out of date</h2><p class="small">GOV.UK has updated ${staleOf(ui).length > 1 ? 'these pages' : 'this page'} since the app was checked in ${CHECKED}. Lessons here may not reflect the change yet.</p>${staleOf(
      ui
    )
      .map(
        ({ d, g }) =>
          `<p style="margin:12px 0 6px"><b>${esc(d.t)}</b> · updated ${fmt(g.t)}</p>${(g.n || []).map(n => `<div class="gnote"><b>${fmt(n.t)}</b>${esc(n.note)}</div>`).join('') || '<p class="small">No change note was given.</p>'}<div class="govs"><a class="gov" href="${esc(d.url)}" target="_blank" rel="noopener">Read the change notes on GOV.UK ${ARROW}</a></div>`
      )
      .join('')}<button class="btn" data-close>Got it</button>`
  );
}
document.addEventListener(
  'click',
  e => {
    const b = e.target.closest && e.target.closest('[data-gstale]');
    if (b) {
      e.preventDefault();
      e.stopPropagation();
      staleSheet(+b.dataset.gstale);
    }
  },
  true
);
async function govFetch() {
  const paths = [...new Set(UNITS.flatMap((u, ui) => govPages(ui).map(d => apiPath(d.url))))];
  if (!paths.length || !window.fetch) return;
  const before = JSON.stringify(GOV),
    out = { ...GOV };
  await Promise.allSettled(
    paths.map(async p => {
      const c = new AbortController(),
        tm = setTimeout(() => c.abort(), 8000);
      try {
        const r = await fetch('https://www.gov.uk/api/' + p.replace(/^government\//, 'content/government/'), {
          signal: c.signal
        });
        if (!r.ok) return;
        const j = await r.json(),
          t = Date.parse(j.public_updated_at);
        if (!t) return;
        const n = ((j.details && j.details.change_history) || [])
          .map(h => ({ t: Date.parse(h.public_timestamp), note: String(h.note || '') }))
          .filter(h => h.t >= CUTOFF)
          .slice(0, 5);
        out[p] = { t, n };
        try {
          localStorage.setItem(GKEY + '-at', Date.now());
        } catch (e) {}
      } catch (e) {
      } finally {
        clearTimeout(tm);
      }
    })
  );
  GOV = out;
  const now = JSON.stringify(GOV);
  if (now === before) return;
  try {
    localStorage.setItem(GKEY, now);
  } catch (e) {}
  if (view !== 'lesson') {
    const y = scrollY;
    render();
    scrollTo(0, y);
  }
}

/* ---------- state ---------- */
const KEY = 'regs-lab-v1',
  GOAL = 20,
  MAXH = 5,
  REFILL = 30;
const QUESTS = [
  { id: 'xp', name: 'Earn 20 XP', n: 20, get: () => S.todayXp },
  { id: 'combo', name: 'Get 5 in a row', n: 5, get: () => S.bestCombo },
  { id: 'les', name: 'Finish 2 lessons', n: 2, get: () => S.lessonsToday }
];
const dstr = d =>
  d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const dayOff = n => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return dstr(d);
};
const today = () => dayOff(0),
  yday = () => dayOff(-1);
const blank = () => ({
  xp: 0,
  gems: 0,
  streak: 0,
  lastDay: '',
  todayDay: '',
  todayXp: 0,
  bestCombo: 0,
  lessonsToday: 0,
  claimed: {},
  hearts: MAXH,
  heartsDay: '',
  done: {},
  chests: {},
  mistakes: {},
  read: {},
  taught: {},
  hist: {},
  sound: true,
  updated: 0,
  qbest: {},
  last: -1,
  qseen: {},
  finals: {},
  level: '',
  mxq: {}
});
const easy = () => S.level === 'new';
const mistakeQ = id => QBY[id] || S.mxq[id];
function norm(o) {
  const b = blank();
  o = o && typeof o === 'object' ? o : {};
  for (const k in b) if (o[k] === undefined || o[k] === null || typeof o[k] !== typeof b[k]) o[k] = b[k];
  return o;
}
let S = blank();
try {
  S = norm(JSON.parse(localStorage.getItem(KEY)));
} catch (e) {
  S = blank();
}
let ref = null,
  chain = Promise.resolve();
function roll() {
  const t = today();
  if (S.todayDay !== t) {
    S.todayDay = t;
    S.todayXp = 0;
    S.bestCombo = 0;
    S.lessonsToday = 0;
    S.claimed = {};
  }
  if (S.heartsDay !== t) {
    S.heartsDay = t;
    S.hearts = MAXH;
  }
}
function save() {
  S.updated = Date.now();
  const ks = Object.keys(S.hist).sort();
  while (ks.length > 60) delete S.hist[ks.shift()];
  const snap = JSON.parse(JSON.stringify(S));
  try {
    localStorage.setItem(KEY, JSON.stringify(snap));
  } catch (e) {}
  if (ref) chain = chain.then(() => ref.set(snap)).catch(() => {});
}
function addXp(n) {
  roll();
  let up = false;
  if (S.lastDay !== today()) {
    S.streak = S.lastDay === yday() ? S.streak + 1 : 1;
    S.lastDay = today();
    up = true;
  }
  S.todayXp += n;
  S.xp += n;
  S.hist[today()] = (S.hist[today()] || 0) + n;
  return up;
}
const streak = () => (S.lastDay === today() || S.lastDay === yday() ? S.streak : 0);
function newQuests() {
  const out = [];
  QUESTS.forEach(q => {
    if (!S.claimed[q.id] && q.get() >= q.n) {
      S.claimed[q.id] = 1;
      S.gems += 10;
      out.push(q);
    }
  });
  return out;
}
async function cloud() {
  try {
    if (!window.claude || !claude.use) return;
    const [db, user] = await Promise.all([claude.use('db'), claude.use('user')]);
    if (!db || !user) return;
    const id = await user.id();
    if (!id) return;
    const r = db.doc('data/users/' + id + '/progress');
    const sn = await r.get();
    ref = r;
    if (sn.exists) {
      const d = sn.data();
      if (d && (d.updated || 0) > (S.updated || 0)) {
        S = norm(JSON.parse(JSON.stringify(d)));
        try {
          localStorage.setItem(KEY, JSON.stringify(S));
        } catch (e) {}
        if (view !== 'lesson') render();
      } else if (S.updated > ((d && d.updated) || 0)) save();
    } else if (S.updated) save();
  } catch (e) {
    ref = null;
  }
}

/* ---------- sound + haptics ---------- */
let AC = null;
function tone(seq) {
  if (!S.sound) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    if (AC.state === 'suspended') AC.resume();
    let t = AC.currentTime;
    seq.forEach(([f, d, type = 'sine', v = 0.18]) => {
      const o = AC.createOscillator(),
        g = AC.createGain();
      o.type = type;
      o.frequency.value = f;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(v, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.001, t + d);
      o.connect(g).connect(AC.destination);
      o.start(t);
      o.stop(t + d + 0.02);
      t += d * 0.75;
    });
  } catch (e) {}
}
const SFX = {
  tap: () => tone([[660, 0.05, 'triangle', 0.08]]),
  good: () =>
    tone([
      [784, 0.12],
      [1175, 0.22]
    ]),
  bad: () =>
    tone([
      [220, 0.18, 'square', 0.07],
      [180, 0.25, 'square', 0.06]
    ]),
  done: () =>
    tone([
      [523, 0.12],
      [659, 0.12],
      [784, 0.12],
      [1047, 0.35]
    ]),
  gem: () =>
    tone([
      [1319, 0.08, 'triangle'],
      [1760, 0.18, 'triangle']
    ]),
  fire: () =>
    tone([
      [392, 0.1],
      [523, 0.1],
      [659, 0.1],
      [784, 0.3]
    ])
};
const buzz = ms => {
  try {
    navigator.vibrate && navigator.vibrate(ms);
  } catch (e) {}
};

/* ---------- confetti ---------- */
function confetti() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const c = document.getElementById('fx'),
    x = c.getContext('2d');
  c.width = innerWidth;
  c.height = innerHeight;
  const cols = ['#ffd400', '#2b45ff', '#14894f', '#ff8a00', '#0a9fb8', '#d2302a'];
  const P = Array.from({ length: 140 }, () => ({
    x: c.width / 2 + (Math.random() - 0.5) * 80,
    y: c.height * 0.35,
    vx: (Math.random() - 0.5) * 12,
    vy: -Math.random() * 13 - 4,
    r: Math.random() * 6 + 4,
    c: cols[(Math.random() * cols.length) | 0],
    a: Math.random() * 6,
    va: (Math.random() - 0.5) * 0.4
  }));
  let f = 0;
  (function tick() {
    x.clearRect(0, 0, c.width, c.height);
    P.forEach(p => {
      p.vy += 0.35;
      p.vx *= 0.99;
      p.x += p.vx;
      p.y += p.vy;
      p.a += p.va;
      x.save();
      x.translate(p.x, p.y);
      x.rotate(p.a);
      x.fillStyle = p.c;
      x.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2);
      x.restore();
    });
    if (++f < 150) requestAnimationFrame(tick);
    else x.clearRect(0, 0, c.width, c.height);
  })();
}

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s),
  app = $('#app');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const shuf = a => {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
/* A Part opens once the first lesson of the Part before it is done; lessons inside a Part go in order. */
const unitOpen = ui => !!UNITS[ui];
const unlocked = i => !!LES[i];
const nextIdx = () => {
  const N = LES.length,
    from = S.last >= 0 && LES[S.last] ? LES.findIndex(l => l.ui === LES[S.last].ui) : 0;
  for (let k = 0; k < N; k++) {
    const i = (from + k) % N;
    if (!S.done[LES[i].key]) return i;
  }
  return -1;
};
const unitDone = ui => LES.filter(l => l.ui === ui).every(l => S.done[l.key]);
function toast(t) {
  const d = document.createElement('div');
  d.className = 'toast';
  d.textContent = t;
  document.body.appendChild(d);
  setTimeout(() => d.remove(), 1800);
}
function sheet(html, bind) {
  const v = document.createElement('div');
  v.className = 'veil';
  v.innerHTML = `<div class="sheet" role="dialog" aria-modal="true">${html}</div>`;
  document.body.appendChild(v);
  const close = () => v.remove();
  v.addEventListener('click', e => {
    if (e.target === v) close();
  });
  v.querySelectorAll('[data-close]').forEach(b => (b.onclick = close));
  if (bind) bind(v, close);
  return close;
}
function countUp(el, to, ms = 700) {
  const t0 = performance.now();
  (function f(t) {
    const k = Math.min(1, (t - t0) / ms);
    el.textContent = (el.dataset.p || '') + Math.round(to * k) + (el.dataset.s || '');
    if (k < 1) requestAnimationFrame(f);
  })(t0);
}
let view = 'learn',
  openPop = -1;

function statsBar() {
  const s = streak();
  return `<div class="stat fl${s ? '' : ' off'}" title="Day streak">${s ? I.fire : I.fireOff || I.fire}${s}</div><div class="stat gm" title="Gems">${I.gem}${S.gems}</div><div class="stat ht" title="${easy() ? 'Beginner mode: hearts are never lost' : 'Hearts'}">${I.heart}${easy() ? '∞' : S.hearts}</div>`;
}
function shell(inner) {
  return `<header class="bar"><div class="in"><h1>Building Regs<span class="labtag">LAB</span></h1>${statsBar()}</div></header><main class="wrap">${inner}</main>
<nav class="tabs"><div class="in">${[
    ['learn', 'Learn', I.home],
    ['library', 'Library', LIBIC],
    ['quests', 'Quests', I.target],
    ['profile', 'Profile', I.user]
  ]
    .map(
      ([v, n, ic]) =>
        `<button class="tab${view === v ? ' on' : ''}" data-v="${v}" aria-current="${view === v ? 'page' : 'false'}">${ic}${n}</button>`
    )
    .join('')}</div></nav>`;
}
function enter() {
  const m = app.querySelector('main');
  if (m) {
    m.classList.remove('enter');
    void m.offsetWidth;
    m.classList.add('enter');
  }
}
function bindTabs() {
  app.querySelectorAll('.tab').forEach(
    b =>
      (b.onclick = () => {
        SFX.tap();
        fromSearch = false;
        view = b.dataset.v;
        openPop = -1;
        DK = null;
        render();
        scrollTo(0, 0);
        enter();
      })
  );
}
function render() {
  roll();
  if (!S.level && view !== 'lesson') return welcome();
  if (view === 'search') return searchView();
  if (view === 'library') return library();
  if (view === 'quests') return quests();
  if (view === 'profile') return profile();
  return learn();
}

/* ---------- learn (path) ---------- */
