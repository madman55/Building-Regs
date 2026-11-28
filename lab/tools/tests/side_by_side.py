"""Phase 0 gate: the original app and the Lab on one web address (as on GitHub Pages) stay independent.
Serves SITE_DIR with the original at /Building-Regs/ and the Lab at /Building-Regs/lab/."""
import os, threading, http.server, functools
from playwright.sync_api import sync_playwright
SITE = os.environ.get('SITE_DIR', '/tmp/site')
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 8780), functools.partial(Q, directory=SITE))
threading.Thread(target=srv.serve_forever, daemon=True).start()
O, L = 'http://localhost:8780/Building-Regs/', 'http://localhost:8780/Building-Regs/lab/'
ok = True
def check(name, cond, extra=''):
    global ok
    ok &= bool(cond); print(('PASS ' if cond else 'FAIL ') + name + (('   ' + str(extra)) if extra != '' and not cond else ''))
def start(pg, url, level):
    pg.goto(url); pg.wait_for_timeout(600)
    pg.evaluate("navigator.serviceWorker.register('sw.js').then(()=>navigator.serviceWorker.ready)"); pg.wait_for_timeout(1500)
    pg.evaluate("navigator.serviceWorker.ready.then(r=>r.active.postMessage('keep-docs'))"); pg.wait_for_timeout(5000)
    pg.reload(); pg.wait_for_timeout(800)
    pg.evaluate("document.getElementById('splash')&&document.getElementById('splash').click()"); pg.wait_for_timeout(500)
    n = pg.locator('[data-lv]').count()
    if n: pg.click(f'[data-lv="{level}"]'); pg.wait_for_timeout(400)
    print('   ', url, 'welcome shown:', bool(n), 'saved:', pg.evaluate('Object.keys(localStorage).join(" ")'))
keys = "caches.keys().then(k=>k.sort().join(' '))"
pdfs = "c=>caches.open(c).then(x=>x.keys()).then(k=>k.filter(r=>/pdf$/.test(r.url)).length)"
with sync_playwright() as p:
    b = p.chromium.launch(); ctx = b.new_context(viewport={'width': 390, 'height': 820}); pg = ctx.new_page()
    errs = []; pg.on('pageerror', lambda e: errs.append(str(e)[:150])); ctx.route('https://**', lambda r: r.abort())
    start(pg, O, 'std')
    start(pg, L, 'new')
    pg.goto(O); pg.wait_for_timeout(1200); pg.goto(L); pg.wait_for_timeout(1200)
    k = pg.evaluate(keys); print('   caches:', k)
    check('both offline caches exist after both apps updated', 'regs-trainer-v6' in k and 'regs-lab-v4' in k)
    check('original keeps its 3 PDFs', pg.evaluate(f"({pdfs})('regs-trainer-v6')") == 3)
    check('Lab keeps its own 3 PDFs', pg.evaluate(f"({pdfs})('regs-lab-v4')") == 3)
    ls = pg.evaluate("Object.fromEntries(Object.keys(localStorage).map(k=>[k,localStorage.getItem(k)]))")
    check('separate progress records', 'regs-trainer-v1' in ls and 'regs-lab-v1' in ls, list(ls))
    check('original kept Standard level', '"level":"std"' in ls.get('regs-trainer-v1', ''))
    check('Lab has Beginner level', '"level":"new"' in ls.get('regs-lab-v1', ''))
    check('Lab page controlled by Lab service worker', pg.evaluate("navigator.serviceWorker.controller&&navigator.serviceWorker.controller.scriptURL").endswith('/lab/sw.js'))
    ctx.set_offline(True)
    pg.goto(L); pg.wait_for_timeout(1200)
    check('Lab opens offline as the Lab', pg.title() == 'Building Regs Lab' and pg.locator('.labtag').count() == 1)
    pg.evaluate("document.getElementById('splash')&&document.getElementById('splash').click()"); pg.wait_for_timeout(400)
    pg.click('.sbtn'); pg.wait_for_timeout(800); pg.fill('#sq', 'second staircase block of flats'); pg.wait_for_timeout(800)
    check('Lab search works offline', pg.locator('.sr.off').count() > 0)
    pg.locator('.sr.off').first.click(); pg.wait_for_timeout(3500)
    check('Lab viewer opens a page offline', pg.locator('.dvmark').count() == 1)
    pg.goto(O); pg.wait_for_timeout(1200)
    check('original opens offline as the original', pg.title() == 'Building Regs Trainer' and pg.locator('.labtag').count() == 0)
    ctx.set_offline(False); pg.goto(L); pg.wait_for_timeout(1000)
    pg.evaluate("document.getElementById('splash')&&document.getElementById('splash').click()"); pg.wait_for_timeout(400)
    pg.locator('nav.tabs button').last.click(); pg.wait_for_timeout(600)
    check('Lab experiments card on Profile', 'Lab experiments' in pg.inner_text('main'))
    check('no page errors', not errs); errs and print('   ', errs)
    b.close()
srv.shutdown()
print('GATE PASSED' if ok else 'GATE FAILED')
