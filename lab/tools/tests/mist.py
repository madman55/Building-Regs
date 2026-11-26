import os
from playwright.sync_api import sync_playwright
STEP=open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'step.js')).read()
with sync_playwright() as p:
    b=p.chromium.launch();pg=b.new_page(viewport={'width':360,'height':740});errs=[];pg.on('pageerror',lambda e:errs.append(str(e)))
    pg.route('https://**',lambda r:r.abort())
    pg.goto('file://'+os.path.abspath(os.environ.get('APP_DIR','.'))+'/index.html');pg.wait_for_timeout(300);pg.evaluate("document.getElementById('splash').click()");pg.wait_for_timeout(600)
    pg.click('[data-lv="std"]');pg.wait_for_timeout(300)
    # Part K section quiz via search
    pg.click('.sbtn');pg.fill('#sq','stair pitch');pg.wait_for_timeout(300);pg.locator('.sr').first.click();pg.wait_for_timeout(400)
    pg.evaluate("(()=>{const el=document.querySelector('.flash');const sec=el.closest('.lsec')||el;[...sec.querySelectorAll('button')].find(x=>/Quiz/.test(x.textContent)).click()})()");pg.wait_for_timeout(300)
    print('in quiz:',pg.locator('.ls').count()>0, '| screen:',pg.inner_text('body')[:80].replace('\n',' '))
    combos=set()
    for i in range(300):
        c=pg.locator('.combo');
        if c.count():combos.add(c.first.inner_text())
        r=pg.evaluate(STEP);pg.wait_for_timeout(120)
        if r=='left' or pg.locator('.ls').count()==0:break
    missed=pg.locator('.rline').count()
    print('quiz done | wrong first time:',missed,'| streak banners seen:',sorted(combos))
    for _ in range(12):
        if pg.locator('#nx2').count():pg.click('#nx2');pg.wait_for_timeout(300)
    pg.evaluate("[...document.querySelectorAll('.tab')].find(t=>/Learn/.test(t.textContent)).click()");pg.wait_for_timeout(300)
    mt=pg.locator('button',has_text='MISTAKES').first.inner_text() if pg.locator('button',has_text='MISTAKES').count() else pg.locator('button',has_text='Mistakes').first.inner_text()
    print('Mistakes button now:',mt.replace('\n',' '))
    # practise mistakes, answering correctly (step.js remembers answers)
    pg.locator('button',has_text='istakes').first.click();pg.wait_for_timeout(400)
    for i in range(300):
        r=pg.evaluate(STEP);pg.wait_for_timeout(120)
        if r=='left' or pg.locator('.ls').count()==0:break
    for _ in range(12):
        if pg.locator('#nx2').count():pg.click('#nx2');pg.wait_for_timeout(300)
    pg.evaluate("[...document.querySelectorAll('.tab')].find(t=>/Learn/.test(t.textContent)).click()");pg.wait_for_timeout(300)
    print('after practising them:',pg.locator('button',has_text='istakes').first.inner_text().replace('\n',' '))
    print('errors',errs);b.close()
