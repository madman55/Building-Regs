/* Building Regs Lab offline support (separate from Building Regs Trainer: own cache names, own folder scope).
   App files: try the network first so lesson updates arrive, fall back to the saved copy offline.
   Official text data and the PDF viewer: saved on install, served from the phone, refreshed in the background.
   Official PDFs (AD K, AD B Vol 1 and 2): fetched quietly in the background a few seconds after the app opens
   (skipped if the phone is in data saver mode), or the first time one is opened. Then they work offline.
   Fonts and the meaning-search engine (cdn.jsdelivr.net): saved after first download.
   GOV.UK update check: always live, never cached. */
const CACHE = 'regs-lab-v3';
const APP = ['./', 'index.html', 'features.js', 'lab-reference.js', 'lab-hunts.js', 'lab-learn.js', 'data.js', 'art.js', 'manifest.json', 'icon-192.png', 'icon-512.png', 'maskable-512.png', 'apple-touch-icon.png'];
const OFFICIAL = ['adk.json', 'adb1.json', 'adb2.json', 'pdfjs.js', 'pdfjs-worker.js'];
const PDFS = ['Approved_Document_K.pdf', 'AD_B1_2026.pdf', 'AD_B2_2026.pdf'];
const SAVE_AFTER_FIRST_USE = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdn.jsdelivr.net'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE)
    .then(c => c.addAll(APP).then(() => c.addAll(OFFICIAL).catch(() => {})))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  // Only clear the Lab's own older caches. Never touch Building Regs Trainer ('regs-trainer-') or the meaning model's cache.
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('regs-lab-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// The page asks for this once it has finished loading, so the app never waits on the documents.
self.addEventListener('message', e => {
  if (e.data !== 'keep-docs') return;
  e.waitUntil(caches.open(CACHE).then(c => Promise.all([...OFFICIAL, ...PDFS].map(f =>
    c.match(f).then(hit => hit || fetch(f).then(res => { if (res.ok) return c.put(f, res); }).catch(() => {}))))));
});

const named = (url, list) => list.some(f => url.pathname.endsWith('/' + f));
const save = (req, res) => { if (res.ok && res.status === 200) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; };

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.hostname === 'www.gov.uk') return;

  // Official data + viewer: answer from the phone straight away, refresh in the background.
  if (url.origin === location.origin && named(url, OFFICIAL)) {
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => {
      const fresh = fetch(req).then(res => save(req, res)).catch(() => hit);
      return hit || fresh;
    }));
    return;
  }

  // Official PDFs: saved once opened. Range requests go straight to the network.
  if (url.origin === location.origin && named(url, PDFS)) {
    if (req.headers.has('range')) return;
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => save(req, res))));
    return;
  }

  if (url.origin === location.origin) {
    e.respondWith(
      fetch(req).then(res => save(req, res))
        .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
    );
    return;
  }

  if (SAVE_AFTER_FIRST_USE.includes(url.hostname)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => save(req, res))));
  }
});
