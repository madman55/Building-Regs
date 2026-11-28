import os, re
LABCACHE = re.search(r"CACHE = '([^']+)'", open(os.path.join(os.environ.get('APP_DIR', '.'), 'sw.js')).read()).group(1)
import threading,http.server,functools
from playwright.sync_api import sync_playwright
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a):pass
srv=http.server.ThreadingHTTPServer(('127.0.0.1',8773),functools.partial(Q,directory=os.environ.get('APP_DIR','.')));threading.Thread(target=srv.serve_forever,daemon=True).start()
with sync_playwright() as p:
    b=p.chromium.launch();ctx=b.new_context(viewport={'width':390,'height':820});pg=ctx.new_page();errs=[];pg.on('pageerror',lambda e:errs.append(str(e)))
    ctx.route('https://**',lambda r:r.abort())
    pg.goto('http://localhost:8773/');pg.wait_for_timeout(400)
    print('sw:',pg.evaluate("navigator.serviceWorker.register('sw.js').then(()=>navigator.serviceWorker.ready).then(()=>'ok')"))
    pg.wait_for_timeout(2500);pg.evaluate("navigator.serviceWorker.ready.then(r=>r.active.postMessage('keep-docs'))");pg.wait_for_timeout(5000)
    print('saved:',pg.evaluate(f"caches.open('{LABCACHE}').then(c=>c.keys()).then(k=>k.map(r=>r.url.split('/').pop()).filter(n=>/pdf|json/.test(n)).sort().join(' '))"))
    pg.reload();pg.wait_for_timeout(800)
    ctx.set_offline(True);pg.reload();pg.wait_for_timeout(1000)
    pg.evaluate("document.getElementById('splash')&&document.getElementById('splash').click()");pg.wait_for_timeout(500)
    if pg.locator('[data-lv]').count():pg.click('[data-lv="std"]');pg.wait_for_timeout(300)
    pg.click('.sbtn');pg.wait_for_timeout(600);pg.fill('#sq','second staircase block of flats');pg.wait_for_timeout(500)
    print('offline official results:',pg.locator('.sr.off').count(),'| notice:',pg.locator('.chk').count())
    pg.locator('.sr.off').first.click();pg.wait_for_timeout(2500)
    print('offline viewer marks:',pg.locator('.dvmark').count(),'| failed msg visible:',pg.locator('#dvload').is_visible())
    print('errors',errs);b.close()
srv.shutdown()
