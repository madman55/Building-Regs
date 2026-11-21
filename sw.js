/* Building Regs Trainer offline support.
   App files: try the network first so lesson updates arrive, fall back to the saved copy offline.
   Fonts and the meaning-search engine (from cdn.jsdelivr.net): saved after first download.
   The meaning model itself is saved by its own library on the phone.
   GOV.UK update check: always live, never cached. */
const CACHE = 'regs-trainer-v2';
const APP = ['./', 'index.html', 'data.js', 'art.js', 'manifest.json', 'icon-192.png', 'icon-512.png', 'maskable-512.png', 'apple-touch-icon.png'];
const SAVE_AFTER_FIRST_USE = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdn.jsdelivr.net'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(APP)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  // Only clear this app's older caches, never the meaning model's own cache.
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('regs-trainer-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.hostname === 'www.gov.uk') return;

  if (url.origin === location.origin) {
    e.respondWith(
      fetch(req).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
    );
    return;
  }

  if (SAVE_AFTER_FIRST_USE.includes(url.hostname)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    })));
  }
});
