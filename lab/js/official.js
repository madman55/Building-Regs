/* Building Regs Lab · Official documents: loading the Approved Document packs, result cards and the PDF page viewer with highlighting.
   Part of the main app script, split by area. Files are loaded in order by index.html and share one global scope:
   core, screens, quiz, beginner, search, official, semantic, search-ui, boot. */
const OFF_FILES = ['adk.json', 'adb1.json', 'adb2.json'];
let OFF = [],
  ADK = null;
const OFF_READY = Promise.all(
  OFF_FILES.map(f =>
    fetch(f)
      .then(r => (r.ok ? r.json() : null))
      .catch(() => null)
  )
).then(list => {
  OFF = list.filter(d => d && d.blocks);
  OFF.forEach((d, i) => {
    d.short = d.short || 'AD ' + d.code;
    d.unit = d.unit || d.code[0];
    d.blocks.forEach(b => (b.doc = i));
  });
  ADK = OFF.find(d => d.code === 'K') || null;
  SIX = null;
  return OFF;
});
const ADK_READY = OFF_READY;
const OK_KIND = { req: 'oR', para: 'oP', text: 'oX', table: 'oT', diagram: 'oD', term: 'oK' };
Object.assign(KB, { oT: 1.3, oD: 1.25, oP: 1.1, oK: 1.2, oR: 1, oX: 0.9 });
const isOfficial = d => d.k && d.k[0] === 'o';
const docOf = b => OFF[b.doc] || ADK;
function ppOf(D, pg) {
  return D.pagemap ? D.pagemap[pg] || null : pg - D.offset > 0 ? pg - D.offset : null;
}
function pgOf(D, pp) {
  if (!D.pagemap) return +pp + D.offset;
  for (const k in D.pagemap) if (D.pagemap[k] == pp) return +k;
  return null;
}
const RF = (f, ...a) => (window.LABREF && window.LAB && LAB.on('reference') ? LABREF[f](...a) : '');
function adkLabel(b) {
  return b.k === 'para'
    ? 'Para ' + b.num
    : b.k === 'table'
      ? 'Table ' + b.num
      : b.k === 'diagram'
        ? 'Diagram ' + b.num
        : b.k === 'term'
          ? 'Key term'
          : b.k === 'req'
            ? b.title.split(' · ')[0]
            : (b.sub || '').split(' · ')[0] || 'Text';
}
function adkWhere(b) {
  const sec = (b.sec || '')
    .replace(/^Section (\d+):.*/, 'Section $1')
    .replace(/^Requirement ([A-Z][\d.]+):.*/, 'Requirement $1')
    .replace(/^(Appendix [A-Z]):.*/, '$1');
  return [sec, (b.sub || '').split(' · ')[0]].filter(Boolean).join(' · ');
}
function stBadge(b) {
  return b.st === 'until2029'
    ? '<span class="kd st1">In force until 1 Sep 2029</span>'
    : b.st === 'from2029'
      ? '<span class="kd st2">From 2 Sep 2029 · not yet in force</span>'
      : '';
}
function adkSnippet(text, hits, n = 34) {
  const w = String(text).split(/\s+/);
  let i = w.findIndex(x => toks(x).some(t => hits.has(t)));
  if (i < 0) i = 0;
  const a = Math.max(0, i - 10),
    b = Math.min(w.length, a + n);
  return (a > 0 ? '… ' : '') + hl(w.slice(a, b).join(' '), hits) + (b < w.length ? ' …' : '');
}
function adkCard(r, i) {
  const b = r.d.b,
    D = docOf(b),
    lab = adkLabel(b);
  const head =
    b.k === 'table' || b.k === 'diagram'
      ? `<b>${esc(lab)}: ${hl(b.title, r.hits)}</b>`
      : b.k === 'term'
        ? `<b>${hl(b.title, r.hits)}</b>`
        : '';
  const body = b.img
    ? `<img class="oimg" src="${b.img}" alt="${esc(lab + ': ' + b.title)}" loading="lazy">`
    : `<em class="otext">${adkSnippet(b.text, r.hits)}</em>`;
  return `<button class="sr off" data-go="${i}"><span class="srt"><small>${esc(D.short)}${RF('ed', b)} · ${esc(b.k === 'term' ? 'Appendix A' : lab)}${b.pp ? ' · page ' + b.pp : ''}${RF('badge', b)}${r.sem ? '<span class="kd rel">Related</span>' : ''}</small>${stBadge(b) ? `<span class="stb">${stBadge(b)}</span>` : ''}${head}${body}<span class="owhere">${esc(adkWhere(b))}</span></span></button>`;
}
/* viewer */
let PDFJS = null,
  DV = null;
const PDFDOCS = {};
async function pdfDoc(D) {
  if (PDFDOCS[D.pdf]) return PDFDOCS[D.pdf];
  // resolved against the page, not this file (which lives in js/)
  PDFJS = PDFJS || (await import(new URL('pdfjs.js', document.baseURI).href));
  PDFJS.GlobalWorkerOptions.workerSrc = 'pdfjs-worker.js';
  const task = PDFJS.getDocument({ url: D.pdf, isEvalSupported: false, disableRange: true, disableStream: true });
  PDFDOCS[D.pdf] = await Promise.race([
    task.promise,
    new Promise((_, no) =>
      setTimeout(() => {
        try {
          task.destroy();
        } catch (_) {}
        no(new Error('The document took too long to open'));
      }, 25000)
    )
  ]);
  return PDFDOCS[D.pdf];
}
function openOfficial(b, pageOverride, Dx) {
  const D = b ? docOf(b) : Dx || ADK;
  if (!D) return;
  SFX.tap();
  const pg = pageOverride || (b && b.pg) || 1;
  DV = { b: b || null, pg, zoom: 1, D };
  let el = $('#dv');
  if (!el) {
    el = document.createElement('div');
    el.id = 'dv';
    document.body.appendChild(el);
  }
  el.innerHTML = `<div class="dvbar"><button class="dvx" id="dvx" aria-label="Close">${I.cross}</button><div class="dvt"><b>${esc(D.short + (b ? ' · ' + adkLabel(b) + (b.title && b.k !== 'req' ? ': ' + b.title : '') : ''))}</b><span id="dvp"></span></div>${RF('vbtns')}</div>
 <div class="dvtools"><button id="dvprev" aria-label="Previous page">‹</button><button id="dvnext" aria-label="Next page">›</button><span class="sp"></span><button id="dvzo" aria-label="Zoom out">−</button><button id="dvzi" aria-label="Zoom in">+</button></div>
 <div class="dvbody" id="dvbody"><div class="dvpage" id="dvpage"><canvas id="dvc"></canvas><div id="dvhl"></div></div><p class="dvload" id="dvload">Opening the official page…</p></div>
 <div class="dvfoot"><span id="dvst"></span>${RF('vfoot')}<a href="${esc(D.pdfUrl)}#page=${pg}" target="_blank" rel="noopener">Open on GOV.UK ${ARROW}</a><small>${esc(D.licence)}</small></div>`;
  document.documentElement.classList.add('dvopen');
  $('#dvx').onclick = closeOfficial;
  $('#dvprev').onclick = () => {
    if (DV.pg > 1) {
      DV.pg--;
      DV.b = null;
      drawPage(false);
    }
  };
  $('#dvnext').onclick = () => {
    if (DV.pg < DV.D.pages) {
      DV.pg++;
      DV.b = null;
      drawPage(false);
    }
  };
  $('#dvzi').onclick = () => {
    DV.zoom = Math.min(3, DV.zoom * 1.35);
    drawPage(true);
  };
  $('#dvzo').onclick = () => {
    DV.zoom = Math.max(0.8, DV.zoom / 1.35);
    drawPage(true);
  };
  drawPage(true);
}
function closeOfficial() {
  const el = $('#dv');
  if (el) el.remove();
  document.documentElement.classList.remove('dvopen');
  DV = null;
}
async function drawPage(scrollToHit) {
  const pgN = DV.pg,
    D = DV.D,
    pp = ppOf(D, pgN);
  $('#dvp').textContent = `${pp ? 'Page ' + pp + ' · ' : ''}PDF page ${pgN} of ${D.pages}`;
  const a = $('.dvfoot a:not(.lablink)');
  if (a) a.href = D.pdfUrl + '#page=' + pgN;
  RF('vsync');
  const onPage = D.blocks.find(x => x.pg === pgN && x.st && x.st !== 'now');
  const st = $('#dvst');
  if (st) st.innerHTML = onPage ? stBadge(onPage) : '';
  try {
    const doc = await pdfDoc(D);
    if (!DV || DV.pg !== pgN) return;
    const page = await doc.getPage(pgN);
    const body = $('#dvbody'),
      cw = body.clientWidth - 16;
    const base = page.getViewport({ scale: 1 }),
      scale = (cw / base.width) * DV.zoom,
      vp = page.getViewport({ scale }),
      dpr = Math.min(2.5, window.devicePixelRatio || 1);
    const c = $('#dvc');
    c.width = Math.floor(vp.width * dpr);
    c.height = Math.floor(vp.height * dpr);
    c.style.width = vp.width + 'px';
    c.style.height = vp.height + 'px';
    $('#dvpage').style.width = vp.width + 'px';
    await page.render({
      canvasContext: c.getContext('2d'),
      viewport: vp,
      transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null
    }).promise;
    $('#dvload').style.display = 'none';
    const hl = $('#dvhl');
    hl.innerHTML = '';
    let first = null;
    if (DV.b) {
      const rects = [];
      const b = DV.b;
      if (b.crop && b.crop[0] === pgN) rects.push(b.crop.slice(1));
      else {
        const on = b.boxes.filter(x => x[0] === pgN);
        if (on.length)
          rects.push([
            Math.min(...on.map(x => x[1])),
            Math.min(...on.map(x => x[2])),
            Math.max(...on.map(x => x[3])),
            Math.max(...on.map(x => x[4]))
          ]);
      }
      for (const [x0, y0, x1, y1] of rects) {
        const T6 = vp.transform,
          pt = (x, y) => [T6[0] * x + T6[2] * y + T6[4], T6[1] * x + T6[3] * y + T6[5]],
          p1 = pt(x0 - 4, D.ph - y1 - 3),
          p2 = pt(x1 + 4, D.ph - y0 + 3),
          r = [p1[0], p1[1], p2[0], p2[1]];
        const L = Math.min(r[0], r[2]),
          T = Math.min(r[1], r[3]);
        const d = document.createElement('div');
        d.className = 'dvmark';
        d.style.cssText = `left:${L}px;top:${T}px;width:${Math.abs(r[2] - r[0])}px;height:${Math.abs(r[3] - r[1])}px`;
        hl.appendChild(d);
        first = first || d;
      }
    }
    if (scrollToHit && first) first.scrollIntoView({ block: 'center', inline: 'center' });
    else if (!scrollToHit) body.scrollTop = 0;
  } catch (e) {
    try {
      console.warn('Viewer:', e && e.message);
    } catch (_) {}
    const l = $('#dvload');
    if (l) {
      l.style.display = 'block';
      const ex = DV && DV.b && DV.b.img && DV.b.pg === pgN ? `<img class="dvex" src="${DV.b.img}" alt=""><br>` : '';
      l.innerHTML = `${ex}Couldn’t open the full page here${ex ? ', so this is the extract from the search results' : ''}. <a href="${esc(D.pdfUrl)}#page=${pgN}" target="_blank" rel="noopener">Open it on GOV.UK ${ARROW}</a><small class="dverr">${esc(String((e && e.message) || e).slice(0, 120))}</small>`;
    }
  }
}
/* "Open the official page" from a lesson reference like "AD K, Table 1.1, p.5" or "AD B Vol 1, para 2.10, p.15" */
function refDoc(r) {
  const m = /^AD ([A-Z])(?:\s*Vol(?:ume)?\.?\s*(\d))?/.exec(r || '');
  if (!m) return null;
  const code = m[1] + (m[2] || '');
  return OFF.find(d => d.code === code) || null;
}
document.addEventListener('click', e => {
  const a = e.target.closest && e.target.closest('[data-adp]');
  if (!a) return;
  e.preventDefault();
  const D = OFF.find(d => d.code === a.dataset.doc) || ADK;
  if (!D) return;
  if (a.dataset.blk && window.LAB && LAB.on('reference')) {
    const b = D.blocks.find(x => x.id === a.dataset.blk);
    if (b) {
      openOfficial(b);
      return;
    }
  }
  const pg = a.dataset.adp ? pgOf(D, +a.dataset.adp) : null;
  if (pg) openOfficial(null, pg, D);
});
/* ---------- meaning search ----------
   A small sentence model (all-MiniLM-L6-v2, run on the phone by transformers.js) turns every fact
   into a "meaning fingerprint" once, in a background worker, and saves them on the device.
   Searches then match on meaning as well as words. It downloads about 45MB once, on Wi-Fi by default.
   If anything fails it switches itself off and word search carries on as normal. */
