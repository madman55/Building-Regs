import os
import threading,http.server,functools,sys
from playwright.sync_api import sync_playwright
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a):pass
srv=http.server.ThreadingHTTPServer(('127.0.0.1',8772),functools.partial(Q,directory=os.environ.get('APP_DIR','.')));threading.Thread(target=srv.serve_forever,daemon=True).start()
QS=["do I need a second staircase in a block of flats","sprinklers in flats","fire door in a house","escape window size","fire resistance of a compartment wall","protected stairway loft conversion three storey house","minimum width of escape stairs in an office","rise and going","balcony guarding height"]
with sync_playwright() as p:
    b=p.chromium.launch();ctx=b.new_context(viewport={'width':390,'height':820});pg=ctx.new_page();errs=[];pg.on('pageerror',lambda e:errs.append(str(e)));pg.on('console',lambda m:errs.append('console '+m.text[:150]) if 'Viewer' in m.text else None)
    ctx.route('https://**',lambda r:r.abort())
    pg.goto('http://localhost:8772/');pg.wait_for_timeout(500);pg.evaluate("document.getElementById('splash').click()");pg.wait_for_timeout(500)
    pg.click('[data-lv="std"]');pg.wait_for_timeout(300);pg.click('.sbtn');pg.wait_for_timeout(1500)
    for q in QS:
        pg.fill('#sq',q);pg.wait_for_timeout(600)
        offs=pg.locator('.sr.off');n=offs.count()
        print(f'\n[{q}]  {pg.inner_text("#slook").replace(chr(10)," ")[:110]}')
        for i in range(min(3,n)):
            t=offs.nth(i).inner_text().split('\n');print('   ',t[0][:42],'|',' / '.join(x for x in t[1:3])[:95])
    pg.fill('#sq','do I need a second staircase in a block of flats');pg.wait_for_timeout(600);pg.screenshot(path='/tmp/b1.png')
    pg.locator('.sr.off').first.click();pg.wait_for_timeout(4000)
    print('\nviewer:',pg.inner_text('.dvt b')[:70],'|',pg.inner_text('#dvp'),'| marks',pg.locator('.dvmark').count(),'| status',pg.inner_text('#dvst'))
    pg.screenshot(path='/tmp/b2.png');print('errors',errs);b.close()
srv.shutdown()
