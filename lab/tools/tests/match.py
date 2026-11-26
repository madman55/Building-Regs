import os
from playwright.sync_api import sync_playwright
STEP=open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'step.js')).read()
for level in ['std','new']:
  with sync_playwright() as p:
    b=p.chromium.launch();pg=b.new_page(viewport={'width':360,'height':740});errs=[];pg.on('pageerror',lambda e:errs.append(str(e)))
    pg.route('https://**',lambda r:r.abort())
    pg.goto('file://'+os.path.abspath(os.environ.get('APP_DIR','.'))+'/index.html');pg.wait_for_timeout(300);pg.evaluate("document.getElementById('splash').click()");pg.wait_for_timeout(600)
    pg.click(f'[data-lv="{level}"]');pg.wait_for_timeout(300)
    pg.locator('.node').first.click();pg.wait_for_timeout(200);pg.locator('.pop button').first.click();pg.wait_for_timeout(250)
    for i in range(40):
        if pg.locator('#gs').count():break
        pg.click('#nk');pg.wait_for_timeout(50)
    pg.click('#gs');pg.wait_for_timeout(300)
    mixed_done=False;fb=None
    for i in range(250):
        if pg.locator('.mgrid').count() and not mixed_done and pg.locator('#nx').count()==0:
            pg.evaluate("""(()=>{const l=document.querySelector('.opt[data-s=l]');l.click();const r=[...document.querySelectorAll('.opt[data-s=r]')].find(x=>x.dataset.k!==l.dataset.k);r.click()})()""")
            mixed_done=True;pg.wait_for_timeout(500);continue
        if pg.locator('#nx').count() and fb is None and pg.locator('.mgrid').count():
            fb=pg.inner_text('#ft').replace('\n',' | ')[:200]
        r=pg.evaluate(STEP);pg.wait_for_timeout(150)
        if r=='left' or pg.locator('.ls').count()==0:break
    print(f'== {level}: match feedback ->',fb)
    print('   review rows:',pg.locator('.rline').count(),'| mixed-up tags:',pg.locator('.rpairs li.mx').count(),'| hearts:',pg.evaluate("document.body.innerText.includes('Out of hearts')"))
    if level=='std':pg.screenshot(path='/tmp/mx.png',full_page=True)
    print('   errors',errs);b.close()
