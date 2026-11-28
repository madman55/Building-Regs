/* Building Regs Lab · Meaning search: the on-phone language model (downloaded once), its fingerprints and blending with word search.
   Part of the main app script, split by area. Files are loaded in order by index.html and share one global scope:
   core, screens, quiz, beginner, search, official, semantic, search-ui, boot. */
const SEM_LIB = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1/dist/transformers.min.js',
  SEM_MODEL = 'Xenova/all-MiniLM-L6-v2',
  DIM = 384;
const SEM = { state: 'off', pct: 0, vecs: null, w: null, seq: 0, wait: {} };
function semStatus() {
  const el = $('#semst');
  if (!el) return;
  const st = SEM.state;
  el.innerHTML =
    st === 'on'
      ? '✓ Understands meaning, not just exact words'
      : st === 'loading'
        ? `Meaning search is setting up in the background${SEM.pct ? ` (${SEM.pct}%)` : ''}. Word search works now.`
        : st === 'wait'
          ? `Meaning search sets itself up on Wi-Fi (about 45MB, once). <button class="linkb" id="semgo">Set up now</button>`
          : '';
  const b = $('#semgo');
  if (b) b.onclick = () => startSemantic(true);
}
const idbKV = (mode, fn) =>
  new Promise((res, rej) => {
    const r = indexedDB.open('regs-lab', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('kv');
    r.onerror = () => rej(r.error);
    r.onsuccess = () => {
      const db = r.result,
        tx = db.transaction('kv', mode),
        q = fn(tx.objectStore('kv'));
      tx.oncomplete = () => {
        db.close();
        res(q && q.result);
      };
      tx.onerror = () => {
        db.close();
        rej(tx.error);
      };
    };
  });
function semText(d) {
  if (isOfficial(d)) {
    const b = d.b;
    return (docOf(b).short + '. ' + (b.sub || '') + '. ' + (b.title ? b.title + '. ' : '') + b.text).slice(0, 600);
  }
  const u = UNITS[d.ui],
    m = LES[d.li].meta,
    nm = u.name + ': ';
  if (d.k === 's') return nm + m.sec + '. ' + m.name + '. ' + m.intro;
  if (d.k === 'w') return nm + d.w + (m ? ' (' + m.name + ')' : '');
  if (d.k === 'p') return nm + d.p.join(' — ');
  const q = d.q;
  return (nm + (q.t === 'mc' ? q.q + ' ' : '') + answerOf(q) + '. ' + (q.x || '')).slice(0, 600);
}
function semCall(msg, transfer) {
  return new Promise((res, rej) => {
    const id = ++SEM.seq;
    SEM.wait[id] = { res, rej };
    SEM.w.postMessage({ ...msg, id }, transfer || []);
  });
}
function semFail() {
  SEM.state = 'failed';
  try {
    SEM.w && SEM.w.terminate();
  } catch (e) {}
  SEM.w = null;
  for (const k in SEM.wait) {
    SEM.wait[k].rej(new Error('off'));
  }
  SEM.wait = {};
  semStatus();
}
async function startSemantic(force) {
  if (SEM.state === 'loading' || SEM.state === 'on') return;
  await ADK_READY;
  if (!window.Worker || !window.indexedDB || !/^https:|^http:\/\/localhost/.test(location.href)) {
    SEM.state = 'failed';
    return;
  }
  const c = navigator.connection;
  if (!force && c && (c.saveData || c.type === 'cellular' || /2g/.test(c.effectiveType || ''))) {
    SEM.state = 'wait';
    semStatus();
    return;
  }
  SEM.state = 'loading';
  SEM.pct = 0;
  semStatus();
  try {
    const ix = SIX || (SIX = buildIndex()),
      texts = ix.docs.map(semText),
      key = 'v1|' + SEM_MODEL + '|' + h(texts.join('\n'));
    const src = `import{pipeline,env}from'${SEM_LIB}';env.allowLocalModels=false;let ex;
self.onmessage=async e=>{const m=e.data;try{if(m.t==='init'){ex=await pipeline('feature-extraction','${SEM_MODEL}',{dtype:'q8',progress_callback:p=>{if(p.status==='progress'&&/onnx$/.test(p.file||''))self.postMessage({t:'dl',p:p.progress})}});self.postMessage({t:'ok',id:m.id})}
else if(m.t==='embed'){const o=await ex(m.texts,{pooling:'mean',normalize:true});const d=new Float32Array(o.data);self.postMessage({t:'ok',id:m.id,data:d},[d.buffer])}}catch(err){self.postMessage({t:'err',id:m.id,msg:String(err&&err.message||err)})}};`;
    SEM.w = new Worker(URL.createObjectURL(new Blob([src], { type: 'text/javascript' })), { type: 'module' });
    SEM.w.onerror = () => semFail();
    SEM.w.onmessage = e => {
      const m = e.data;
      if (m.t === 'dl') {
        SEM.pct = Math.min(60, Math.round(m.p * 0.6));
        semStatus();
        return;
      }
      const w = SEM.wait[m.id];
      if (!w) return;
      delete SEM.wait[m.id];
      m.t === 'ok' ? w.res(m.data) : w.rej(new Error(m.msg));
    };
    await semCall({ t: 'init' });
    SEM.pct = Math.max(SEM.pct, 60);
    semStatus();
    let saved = null;
    try {
      saved = await idbKV('readonly', st => st.get('sem'));
    } catch (e) {}
    if (saved && saved.key === key && saved.vecs && saved.vecs.length === texts.length * DIM) SEM.vecs = saved.vecs;
    else {
      const V = new Float32Array(texts.length * DIM);
      for (let i = 0; i < texts.length; i += 16) {
        const d = await semCall({ t: 'embed', texts: texts.slice(i, i + 16) });
        V.set(d, i * DIM);
        SEM.pct = 60 + Math.round(40 * Math.min(1, (i + 16) / texts.length));
        semStatus();
      }
      SEM.vecs = V;
      try {
        await idbKV('readwrite', st => st.put({ key, vecs: V }, 'sem'));
      } catch (e) {}
    }
    SEM.state = 'on';
    semStatus();
    if (view === 'search' && sQ.trim()) drawResults();
  } catch (e) {
    semFail();
  }
}
async function semQuery(q) {
  const d = await semCall({ t: 'embed', texts: [q] });
  return d;
}
function hybrid(r, qv) {
  const ix = SIX,
    V = SEM.vecs,
    N = ix.docs.length,
    sims = new Float32Array(N);
  let mx = 0;
  for (let i = 0; i < N; i++) {
    let s = 0;
    const o = i * DIM;
    for (let j = 0; j < DIM; j++) s += V[o + j] * qv[j];
    sims[i] = s;
    if (s > mx) mx = s;
  }
  const all = r.all || [],
    lexMax = all.length ? all[0].sc : 0,
    lex = new Map(all.map(x => [x.d.i, x])),
    floor = Math.max(0.3, mx - 0.2),
    out = [];
  for (let i = 0; i < N; i++) {
    const d = ix.docs[i];
    if (r.part && UNITS[d.ui].k !== r.part) continue;
    const L = lex.get(i);
    if (!L && sims[i] < floor) continue;
    const ln = L && lexMax ? L.sc / lexMax : 0,
      sn = Math.max(0, (sims[i] - 0.2) / Math.max(0.05, mx - 0.2));
    out.push({
      d,
      sc:
        (0.5 * ln + 0.5 * sn) *
        (L ? 1 : KB[d.k]) *
        (L ? 1 : ctxMul(d, r.ctx, r.flats)) *
        (d.st === 'from2029' ? 0.55 : 1),
      hits: L ? L.hits : new Set(),
      sem: !L
    });
  }
  return rankUnique(out).slice(0, 40);
}
