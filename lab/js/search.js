/* Building Regs Lab · Search engine: word matching with typo tolerance, synonyms, question understanding and ranking.
   Part of the main app script, split by area. Files are loaded in order by index.html and share one global scope:
   core, screens, quiz, beginner, search, official, semantic, search-ui, boot. */
const SEARCHIC =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg>';
const STOP = new Set(
  'a an the is are was be been being do does did i im my me we our you your it its of to in on at for by with and or what whats which who how when where why can could should would need needs needed have has must there this that these those any some about into than then if so just please tell find show look looking up rule rules reg regs regulation regulations requirement requirements require required approved document documents doc guidance say says said allowed allow give get got know want wanted thing things much too very really quite feel feels felt seem seems like make makes made put use used using way still also enough okay ok any anything something someone somebody people person bit lot lots should shall will one ones thats theres mine ours'.split(
    ' '
  )
);
const stemW = w => {
  if (/^\d/.test(w) || w.length < 4) return w;
  if (w.endsWith('ies') && w.length > 4) return w.slice(0, -3) + 'y';
  if (w.endsWith('sses')) return w.slice(0, -2);
  if (/(ches|shes|xes|zes)$/.test(w)) return w.slice(0, -2);
  if (/(ss|us|is)$/.test(w)) return w;
  if (w.endsWith('s')) return w.slice(0, -1);
  if (w.endsWith('ing') && w.length > 5) return w.slice(0, -3);
  if (w.endsWith('ed') && w.length > 4) return w.slice(0, -2);
  return w;
};
function toks(str, sur) {
  let s = String(str || '')
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/m²|\bsq\.? ?m\b|\bsquare met(?:re|er)s?\b/g, ' m2 ');
  const out = [];
  s = s.replace(/(\d+(?:\.\d+)?)\s*(mm|millimet(?:re|er)s?|m|met(?:re|er)s?)(?![a-z0-9])/g, (x, n, u) => {
    const v = /^m(?:et|$)/.test(u) && u !== 'mm' ? Math.round(parseFloat(n) * 1000) : parseFloat(n);
    out.push(n, String(v));
    return ' ';
  });
  s = s.replace(/\d+\.\d+/g, x => {
    out.push(x);
    return ' ';
  });
  for (const w of s.split(/[^a-z0-9]+/)) {
    if (!w) continue;
    const t = stemW(w);
    out.push(t);
    if (sur) {
      if (!sur[t]) sur[t] = w;
      if (sur._all) sur._all[w] = t;
    }
  }
  return out;
}
const SYN0 = {
  door: 'door doorset',
  doors: 'door doorset',
  marking: 'manifestation',
  markings: 'manifestation',
  stickers: 'manifestation',
  dots: 'manifestation',
  firedoor: 'fire door',
  fireexit: 'fire escape exit',
  smokealarm: 'smoke alarm',
  stairwell: 'stair stairway',
  stairlift: 'stair lift',
  banister: 'guarding handrail',
  bannister: 'guarding handrail',
  balustrade: 'guarding handrail',
  railing: 'guarding handrail',
  rail: 'handrail guarding',
  parapet: 'guarding',
  balcony: 'guarding balcony',
  fall: 'guarding',
  drop: 'guarding',
  step: 'stair rise going',
  staircase: 'stair',
  stairway: 'stair',
  steps: 'stair',
  riser: 'rise riser',
  tread: 'going tread',
  steep: 'pitch gradient',
  angle: 'pitch',
  slope: 'gradient ramp pitch',
  gradient: 'gradient ramp',
  head: 'headroom',
  ceiling: 'headroom',
  spiral: 'spiral helical',
  helical: 'spiral helical',
  loft: 'loft roof',
  attic: 'loft roof',
  exit: 'escape exit',
  fireescape: 'escape',
  alarm: 'alarm smoke detection',
  detector: 'alarm detection',
  detection: 'alarm detection',
  sprinkler: 'sprinkler',
  disabled: 'wheelchair accessible',
  disability: 'wheelchair accessible',
  accessible: 'wheelchair accessible access',
  wheelchair: 'wheelchair',
  toilet: 'wc sanitary toilet',
  loo: 'wc toilet',
  lavatory: 'wc',
  washroom: 'wc sanitary',
  bathroom: 'bathroom wc',
  elevator: 'lift',
  hallway: 'corridor',
  hall: 'corridor',
  passage: 'corridor passageway',
  doorway: 'door clear opening',
  high: 'height',
  tall: 'height storey',
  height: 'height',
  wide: 'width clear',
  narrow: 'width',
  far: 'distance travel',
  long: 'length distance',
  car: 'parking vehicle',
  parking: 'parking',
  ev: 'charging vehicle',
  charger: 'charging',
  broadband: 'broadband',
  wifi: 'broadband',
  internet: 'broadband',
  fibre: 'broadband',
  burglar: 'security lock',
  intruder: 'security',
  lock: 'lock security',
  noise: 'sound',
  soundproof: 'sound',
  acoustic: 'sound',
  damp: 'damp moisture',
  wet: 'moisture',
  condensation: 'condensation',
  mould: 'condensation ventilation',
  fan: 'extract ventilation',
  extractor: 'extract ventilation',
  vent: 'ventilation',
  insulation: 'insulation energy',
  thermal: 'insulation energy',
  uvalue: 'u-value insulation',
  hot: 'overheating',
  solar: 'overheating',
  boiler: 'combustion boiler',
  chimney: 'flue combustion',
  fireplace: 'hearth combustion',
  stove: 'combustion appliance',
  woodburner: 'combustion appliance',
  drain: 'drainage drain',
  sewer: 'drainage',
  gutter: 'rainwater drainage',
  septic: 'septic drainage',
  electric: 'electrical',
  electrics: 'electrical',
  wiring: 'electrical',
  plug: 'socket',
  socket: 'socket outlet',
  glass: 'glazing',
  kerb: 'kerb',
  curb: 'kerb',
  house: 'dwelling dwellinghouse',
  home: 'dwelling',
  apartment: 'flat',
  office: 'building',
  shop: 'building',
  commercial: 'building',
  cladding: 'external wall cladding',
  facade: 'external wall',
  cellar: 'basement',
  floor: 'storey floor',
  level: 'level storey',
  highrise: 'higher-risk storey',
  tower: 'higher-risk storey',
  rating: 'resistance minutes',
  rated: 'resistance minutes',
  firefighter: 'firefighting fire service',
  brigade: 'fire service firefighting',
  engine: 'fire service vehicle access',
  child: 'child climb',
  kid: 'child climb',
  toddler: 'child climb',
  climb: 'climb',
  gap: 'gap opening',
  hole: 'opening gap',
  turn: 'turning',
  space: 'space area',
  size: 'size dimension',
  big: 'size',
  small: 'size'
};
let SIX = null,
  SYN = {};
const KB = { s: 1.15, f: 1, w: 0.95, p: 0.8 };
const VAGUE = new Set(['high', 'tall', 'wide', 'narrow', 'far', 'long', 'big', 'small', 'size', 'space', 'level']);
function buildIndex() {
  const docs = [],
    df = {},
    sur = { _all: {} };
  for (const k in SYN0) {
    const t = toks(k)[0];
    SYN[t] = SYN0[k];
  }
  const HV = new Set(),
    PH = new Set(),
    heads = [];
  const add = (o, fields) => {
    o.i = docs.length;
    const tf = {},
      seq = [];
    for (const [txt, w] of fields)
      for (const t of toks(txt, sur)) {
        seq.push(t);
        if (STOP.has(t)) continue;
        if (!tf[t] || tf[t] < w) tf[t] = w;
      }
    o.tf = tf;
    o.st = ' ' + seq.join(' ') + ' ';
    docs.push(o);
    for (const t in tf) df[t] = (df[t] || 0) + 1;
  };
  const ctxOf = t =>
    /buildings other than dwellings|non-domestic/i.test(t)
      ? 'O'
      : /common access areas|contain flats/i.test(t)
        ? 'F'
        : /\bfor dwellings\b|\bin dwellings\b|\bdwellinghouses?\b/i.test(t)
          ? 'D'
          : /\bfor all buildings\b/i.test(t)
            ? 'A'
            : null;
  LES.forEach((l, li) => {
    const u = UNITS[l.ui],
      uf = [u.name, 0.6],
      m = l.meta,
      sn = m ? m.sec + ' ' + m.name : '';
    const lctx = m && m.vol ? (m.vol == 1 ? 'D' : 'O') : null;
    if (m) heads.push(sn);
    if (m) {
      add({ k: 's', li, ui: l.ui, id: 's' + li, ctx: lctx }, [[sn, 3], [m.intro, 1], uf]);
      m.watch.forEach((w, wi) =>
        add({ k: 'w', li, ui: l.ui, id: 'w' + li + '_' + wi, w, ctx: lctx || ctxOf(w) }, [[w, 2], [sn, 0.8], uf])
      );
    }
    l.qs.forEach(q => {
      if (q.t === 'match') {
        q.p.forEach(pp => add({ k: 'p', li, ui: l.ui, id: m ? 's' + li : '', p: pp }, [[pp.join(' '), 2.2], uf]));
        return;
      }
      add(
        {
          k: 'f',
          li,
          ui: l.ui,
          id: fid(q),
          q,
          ctx:
            lctx ||
            ctxOf(q.q) ||
            (/\b(house|home|dwelling)\b/i.test(q.q)
              ? 'D'
              : /\b(office|school|shop|hospital|assembly|retail|factory)\b/i.test(q.q)
                ? 'O'
                : null)
        },
        [[answerOf(q), 2.2], [q.t === 'mc' ? q.q : '', 1.4], [q.x || '', 1], [q.r || '', 1.2], [sn, 0.8], uf]
      );
    });
  });
  for (const D of OFF) {
    const kui = UNITS.findIndex(u => u.k === D.unit);
    D.blocks.forEach(b => {
      if (b.title) heads.push(b.title);
      if (b.sub) heads.push(b.sub);
    });
    D.blocks.forEach(b =>
      add({ k: OK_KIND[b.k] || 'oX', ui: kui, li: -1, b, st: b.st, ctx: ctxOf(b.sub || '') || b.ctx || null }, [
        [b.title || '', 2.6],
        [b.num ? (b.k === 'para' ? 'paragraph ' + b.num : b.k + ' ' + b.num) : '', 2],
        [b.text, b.k === 'diagram' ? 1.2 : 1.6],
        [b.sub || '', 1.8],
        [b.sec || '', 0.9],
        [
          'approved document ' +
            D.code[0] +
            ' part ' +
            D.code[0] +
            (D.code === 'B1'
              ? ' volume 1 dwellings'
              : D.code === 'B2'
                ? ' volume 2 buildings other than dwellings'
                : ''),
          0.3
        ]
      ])
    );
  }
  heads.forEach(hd => {
    const ts = toks(hd).filter(t => !STOP.has(t) && !/^\d/.test(t));
    ts.forEach(t => HV.add(t));
    for (let i = 0; i + 1 < ts.length; i++) PH.add(ts[i] + ' ' + ts[i + 1]);
  });
  const all = sur._all;
  delete sur._all;
  return {
    HV,
    PH,
    docs,
    df,
    sur,
    vocab: Object.keys(df),
    surf: Object.entries(all).filter(([w, t]) => df[t] && !/^\d/.test(w))
  };
}
const fid = q => 'f' + q.id.replace(/[^a-zA-Z0-9]/g, '_');
function edit1(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let pp = null,
    prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let mn = i;
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (pp && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) cur[j] = Math.min(cur[j], pp[j - 2] + 1);
      if (cur[j] < mn) mn = cur[j];
    }
    if (mn > max) return max + 1;
    pp = prev;
    prev = cur;
  }
  return prev[b.length];
}

/* ---------- understanding a longer question ----------
   Nothing is thrown away: key phrases and regs terms count most, building-type words become context
   (dwellings / other buildings), every other word still counts a little, and the meaning model reads
   the whole question. The search shows what it understood, and any part can be removed with a tap. */
const CTXW = {
  D: /\b(block of flats|blocks of flats|house|houses|home|homes|dwelling|dwellings|dwellinghouse|bungalow|maisonette|flat|flats|apartment|apartments|domestic)\b/,
  O: /\b(office|offices|school|schools|shop|shops|retail|hospital|hospitals|factory|warehouse|hotel|hotels|restaurant|cafe|café|theatre|cinema|stadium|commercial|non-domestic|workplace|assembly|public building)\b/
};
const CONCEPTS = [
  [/\bloft\b[\s\S]*\bconver|\bconver\w*\b[\s\S]*\bloft\b/, 'loft conversion'],
  [/\bopen[- ]?risers?\b|\brisers?\b[\s\S]{0,24}\bopen\b/, 'open riser'],
  [/\broof terrace\b|\bterrace\b[\s\S]{0,20}\broof\b/, 'roof terrace'],
  [/\bjuliet\b/, 'juliet balcony'],
  [/\b(head ?room|head height)\b/, 'headroom'],
  [/\bglass doors?\b|\bglazed doors?\b/, 'glass door'],
  [/\bspiral\b|\bhelical\b/, 'helical stair'],
  [
    /\b(second|2nd|two|additional|extra|another) (common )?(stair|staircase|stairway)s?\b|\bmore than one (common )?stair/,
    'more than one common stair'
  ],
  [/\bfire ?doors?\b/, 'fire doorset'],
  [/\bwinders?\b|\btapered\b/, 'tapered tread'],
  [/\bcar ?park\b/, 'vehicle barrier'],
  [/\bloading bays?\b/, 'loading bay']
];
let sEx = new Set();
function understand(raw, ix) {
  const u = { ctx: null, flats: false, phrases: [], words: {}, drop: new Set() };
  const low = ' ' + raw.toLowerCase() + ' ';
  if (!/\bflat roofs?\b/.test(low)) {
    const d = CTXW.D.test(low),
      o = CTXW.O.test(low);
    if (d !== o) u.ctx = d ? 'D' : 'O';
    u.flats = /\b(flat|flats|apartment|apartments)\b/.test(low) && !/\bflat roofs?\b/.test(low);
  }
  if (u.ctx && sEx.has('c')) u.ctx = null;
  if (u.ctx || sEx.has('c'))
    for (const m of low.matchAll(new RegExp(CTXW.D.source + '|' + CTXW.O.source, 'g')))
      toks(m[0]).forEach(t => u.drop.add(t));
  const qsur = { _all: {} };
  const seq = toks(raw, qsur).filter(t => !STOP.has(t));
  u.words = qsur;
  for (const [re, ph] of CONCEPTS) if (re.test(low) && !sEx.has('p:' + ph)) u.phrases.push(ph);
  for (let i = 0; i + 1 < seq.length; i++) {
    const pp = seq[i] + ' ' + seq[i + 1];
    if (ix.PH.has(pp) && !u.drop.has(seq[i]) && !u.drop.has(seq[i + 1])) {
      const label = (qsur[seq[i]] || seq[i]) + ' ' + (qsur[seq[i + 1]] || seq[i + 1]);
      if (!sEx.has('p:' + label) && !u.phrases.includes(label)) u.phrases.push(label);
    }
  }
  u.ptoks = new Set(u.phrases.flatMap(ph => toks(ph)).filter(t => !STOP.has(t) && !['more', 'than'].includes(t)));
  u.pstems = u.phrases.map(ph => toks(ph));
  return u;
}
function runSearch(raw) {
  const ix = SIX || (SIX = buildIndex());
  raw = String(raw || '')
    .toLowerCase()
    .trim();
  const out = { res: [], syn: [], fix: [], part: null, miss: [] };
  if (!raw) return out;
  const pm = raw.match(/\b(?:part|ad|approved document)\s+(hr|[a-z7])\b/);
  if (pm) {
    const k = pm[1].toUpperCase();
    if (UNITS.some(u => u.k === k)) {
      out.part = k;
      raw = raw.replace(pm[0], ' ');
    }
  }
  const U = understand(raw, ix);
  out.u = U;
  const qt = [
      ...new Set(
        toks(raw)
          .filter(t => !STOP.has(t))
          .concat([...U.ptoks])
      )
    ].filter(t => !U.drop.has(t) && !sEx.has('t:' + t) && !(U.phrases.length === 0 && false)),
    endsTyping = /[a-z0-9]$/.test(raw),
    groups = [],
    syn = new Set(),
    fix = new Set();
  qt.forEach((t, i) => {
    const g = new Map(),
      put = (k, w) => {
        if (ix.df[k] && (g.get(k) || 0) < w) g.set(k, w);
      };
    put(t, VAGUE.has(t) ? 0.45 : 1);
    (SYN[t] || '').split(' ').forEach(x =>
      toks(x).forEach(y => {
        if (y === t || !ix.df[y]) return;
        put(y, 0.85);
        syn.add(ix.sur[y] || y);
      })
    );
    if (!g.size && !/^\d/.test(t) && t.length >= 3 && !U.ptoks.has(t)) {
      const mx = t.length >= 8 ? 2 : 1;
      let best = mx + 1,
        cands = [];
      for (const [w, v] of ix.surf) {
        if (w.length < 4 || STOP.has(w) || STOP.has(v)) continue;
        const d = Math.min(edit1(t, w, mx), edit1(t, v, mx));
        if (d < best) {
          best = d;
          cands = [v];
        } else if (d === best && !cands.includes(v)) cands.push(v);
      }
      cands.sort(
        (x, y) =>
          ((ix.sur[x] || x).slice(0, 2) === t.slice(0, 2) ? 0 : 1) -
            ((ix.sur[y] || y).slice(0, 2) === t.slice(0, 2) ? 0 : 1) || ix.df[y] - ix.df[x]
      );
      if (best <= mx)
        cands.slice(0, t.length <= 4 ? 1 : 2).forEach(v => {
          put(v, 0.75);
          fix.add(ix.sur[v] || v);
          (SYN[v] || '').split(' ').forEach(x => toks(x).forEach(y => put(y, 0.65)));
        });
    }
    if (i === qt.length - 1 && endsTyping && t.length >= 3 && !/^\d/.test(t)) {
      let n = 0;
      for (const v of ix.vocab)
        if (v !== t && v.startsWith(t) && n < 12) {
          put(v, 0.7);
          n++;
        }
    }
    if (g.size) {
      g.imp = U.ptoks.has(t) ? 1.6 : ix.HV.has(t) ? 1.2 : 0.7;
      g.t = t;
      groups.push(g);
    } else out.miss.push(t);
  });
  out.syn = [...syn].slice(0, 5);
  out.fix = [...fix].slice(0, 3);
  const N = ix.docs.length,
    idf = t => Math.log(1 + N / ix.df[t]),
    res = [];
  out.groups = groups.length;
  out.ctx = U.ctx;
  out.flats = U.flats;
  out.look = U.phrases
    .map(ph => ({ key: 'p:' + ph, label: ph, main: 1 }))
    .concat(
      groups
        .filter(g => !U.ptoks.has(g.t))
        .sort((a, b) => b.imp - a.imp)
        .map(g => ({ key: 't:' + g.t, label: U.words[g.t] || ix.sur[g.t] || g.t, main: g.imp > 1 }))
    );
  if (U.ctx)
    out.look.push({ key: 'c', label: U.ctx === 'D' ? 'in dwellings' : 'in buildings other than dwellings', ctx: 1 });
  const totImp = groups.reduce((a, g) => a + g.imp, 0);
  if (!groups.length && !out.part) return out;
  for (const d of ix.docs) {
    const uk = UNITS[d.ui].k;
    if (out.part && uk !== out.part) continue;
    let sc = 0,
      hit = 0,
      hits = new Set();
    let hitImp = 0;
    for (const g of groups) {
      let b = 0;
      for (const [t, w] of g) {
        const f = d.tf[t];
        if (f) {
          const v = f * w * idf(t);
          if (v > b) b = v;
          hits.add(t);
        }
      }
      if (b) {
        sc += b * g.imp;
        hit++;
        hitImp += g.imp;
      }
    }
    if (groups.length && !hit) continue;
    sc = groups.length ? sc * Math.pow(hitImp / totImp, 2) * KB[d.k] : d.k === 's' ? 2 : 1;
    for (const ps of U.pstems)
      if (
        ps.length > 1 &&
        (d.st.includes(' ' + ps.join(' ') + ' ') || d.st.includes(' ' + ps.slice().reverse().join(' ') + ' '))
      )
        sc *= 1.35;
    sc *= ctxMul(d, U.ctx, U.flats);
    if (d.st === 'from2029') sc *= 0.55;
    if (d.b) {
      const L = d.b.text.length;
      if (L > 700) sc /= 1 + Math.log(L / 700) * 0.6;
    }
    res.push({ d, sc, hits });
  }
  out.all = rankUnique(res);
  out.res = out.all.slice(0, 40);
  return out;
}
function ctxMul(d, ctx, flats) {
  if (!ctx || !d.ctx) return 1;
  if (d.ctx === ctx) return 1.35;
  if (d.ctx === 'A') return 1.1;
  if (d.ctx === 'F') return ctx === 'D' && flats ? 1.3 : ctx === 'D' ? 0.95 : 0.75;
  return 0.7;
}
function rankUnique(res) {
  res.sort((a, b) => b.sc - a.sc);
  const seen = new Set();
  return res.filter(r => {
    const key = r.d.k + (r.d.id || '') + (r.d.p ? r.d.p.join() : '');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
function hl(text, hits) {
  return String(text)
    .split(/([A-Za-z0-9².]+)/)
    .map((w, i) => {
      if (i % 2 === 0) return esc(w);
      const t = toks(w);
      return t.some(x => hits.has(x)) ? `<mark>${esc(w)}</mark>` : esc(w);
    })
    .join('');
}
const clip = (t, n = 170) => {
  t = String(t || '');
  return t.length > n ? t.slice(0, t.lastIndexOf(' ', n) > 60 ? t.lastIndexOf(' ', n) : n) + '…' : t;
};

/* ---------- Official text: Approved Documents (AD K, AD B Vol 1 and Vol 2) ----------
   Each JSON file holds one document's official wording block by block: requirements, numbered paragraphs,
   tables, diagrams (cropped from the official PDF) and key terms, each with its page and position, plus
   the page's 2029 status where AD B marks one. Search returns these first; tapping one opens the official
   PDF page in a built-in viewer with the matching part highlighted. Licensed under the OGL v3.0. */
