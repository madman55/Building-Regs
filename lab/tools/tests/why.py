import os
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch();pg=b.new_page(viewport={'width':360,'height':740});errs=[];pg.on('pageerror',lambda e:errs.append(str(e)));pg.route('https://**',lambda r:r.abort())
    pg.goto('file://'+os.path.abspath(os.environ.get('APP_DIR','.'))+'/index.html');pg.wait_for_timeout(300);pg.evaluate("document.getElementById('splash').click()");pg.wait_for_timeout(600)
    pg.click('[data-lv="new"]');pg.wait_for_timeout(300)
    t=pg.evaluate("""(()=>{const pills=[...document.querySelectorAll('.secpill')];const p=pills.find(x=>/Section 1 · Rise, going|Rise, going and steps/.test(x.textContent));if(!p)return 'no pill: '+pills.slice(60,70).map(x=>x.textContent).join(' / ');let n=p.nextElementSibling;while(n&&!n.querySelector('.node'))n=n.nextElementSibling;n.querySelector('.node').click();return p.textContent})()""")
    print('lesson:',t);pg.wait_for_timeout(300)
    pg.locator('.pop button').first.click();pg.wait_for_timeout(300)
    seen=[]
    for i in range(30):
        seen.append(pg.inner_text('.kick') if pg.locator('.kick').count() else '?')
        if pg.locator('.why').count():break
        if pg.locator('#nk').count()==0:break
        pg.click('#nk');pg.wait_for_timeout(120)
    print('cards:',' > '.join(seen[:8]))
    print('why line:',pg.locator('.why').first.inner_text() if pg.locator('.why').count() else 'NOT FOUND')
    pg.screenshot(path='/tmp/c3.png');print('errors',errs);b.close()
