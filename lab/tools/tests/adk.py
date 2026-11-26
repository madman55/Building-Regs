import os
import threading,http.server,functools,time
from playwright.sync_api import sync_playwright
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a):pass
srv=http.server.ThreadingHTTPServer(('127.0.0.1',8767),functools.partial(Q,directory=os.environ.get('APP_DIR','.')));threading.Thread(target=srv.serve_forever,daemon=True).start()
QS=["rise and going"]
with sync_playwright() as p:
    b=p.chromium.launch();ctx=b.new_context(viewport={'width':390,'height':820});pg=ctx.new_page();errs=[];pg.on('pageerror',lambda e:errs.append(str(e)));pg.on('console',lambda m:errs.append('console '+m.text[:200]) if 'Viewer' in m.text else None)
    ctx.route('https://**',lambda r:r.abort())
    pg.goto('http://localhost:8767/');pg.wait_for_timeout(400);pg.evaluate("document.getElementById('splash').click()");pg.wait_for_timeout(500)
    pg.click('[data-lv="std"]');pg.wait_for_timeout(300);pg.click('.sbtn');pg.wait_for_timeout(500)
    for q in QS:
        pg.fill('#sq',q);pg.wait_for_timeout(350)
        offs=pg.locator('.sr.off');n=offs.count()
        tops=[offs.nth(i).locator('small').inner_text()[:40] for i in range(min(3,n))]
        print(f'[{q}] official results: {n} | top: {tops}')
    pg.fill('#sq','headroom loft conversion');pg.wait_for_timeout(350);pg.screenshot(path='/tmp/a1.png')
    pg.locator('.sr.off').first.click();pg.wait_for_timeout(2500)
    print('viewer open:',pg.locator('#dv').count(),'| title:',pg.inner_text('.dvt b'),'|',pg.inner_text('#dvp'),'| marks:',pg.locator('.dvmark').count(),'| load msg:',pg.inner_text('#dvload') if pg.locator('#dvload').is_visible() else 'hidden')
    pg.screenshot(path='/tmp/a2.png')
    pg.click('#dvzi');pg.wait_for_timeout(1200);pg.screenshot(path='/tmp/a3.png');print('zoomed marks:',pg.locator('.dvmark').count())
    pg.click('#dvnext');pg.wait_for_timeout(1200);print('next page:',pg.inner_text('#dvp'))
    pg.click('#dvx');pg.wait_for_timeout(300);print('closed, back on results:',pg.locator('.sr').count()>0)
    print('errors',errs);b.close()
srv.shutdown()
