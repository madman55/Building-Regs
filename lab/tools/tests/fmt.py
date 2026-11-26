import os
from playwright.sync_api import sync_playwright
STEP=open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'step.js')).read()
def play(pg,tag):
    seq=[];nudges=0;shots=set();last=None
    for i in range(300):
        if pg.locator('.kind').count() and pg.locator('#nx').count()==0:
            k=pg.locator('.kind').inner_text().split('\n')[0].upper().replace('PREVIOUS MISTAKE','').strip()
            txt=pg.locator('.lb').inner_text()[:40]
            if txt!=last:seq.append(k);last=txt
            for name in ['SPOT THE MISTAKE','WHICH IS BIGGER?']:
                if k.startswith(name) and name not in shots:pg.screenshot(path=f'/tmp/{tag}_{name[:4]}.png');shots.add(name)
        if pg.locator('.nudge').count():nudges+=1
        r=pg.evaluate(STEP);pg.wait_for_timeout(120)
        if r=='spot' and f'{tag}_ans' not in shots:pg.wait_for_timeout(200);pg.screenshot(path=f'/tmp/{tag}_spotans.png');shots.add(f'{tag}_ans')
        if r=='left' or pg.locator('.ls').count()==0:break
    rep=sum(1 for a,b in zip(seq,seq[1:]) if a==b)
    return seq,rep,nudges
for level in ['std','new']:
  with sync_playwright() as p:
    b=p.chromium.launch();pg=b.new_page(viewport={'width':360,'height':740});errs=[];pg.on('pageerror',lambda e:errs.append(str(e)))
    pg.route('https://**',lambda r:r.abort())
    pg.goto('file://'+os.path.abspath(os.environ.get('APP_DIR','.'))+'/index.html');pg.wait_for_timeout(300);pg.evaluate("document.getElementById('splash').click()");pg.wait_for_timeout(600)
    pg.click(f'[data-lv="{level}"]');pg.wait_for_timeout(300)
    pg.click('.sbtn');pg.fill('#sq','stair pitch');pg.wait_for_timeout(300);pg.locator('.sr').first.click();pg.wait_for_timeout(400)
    pg.evaluate("(()=>{const el=document.querySelector('.flash');const sec=el.closest('.lsec')||el;[...sec.querySelectorAll('button')].find(x=>/Quiz/.test(x.textContent)).click()})()")
    pg.wait_for_timeout(300)
    seq,rep,n=play(pg,level)
    print(f'== {level} section quiz: {len(seq)} questions | same format back-to-back: {rep} | speed nudges shown: {n}')
    print('   ',' > '.join(x[:12] for x in seq))
    print('   end:',pg.inner_text('h1') if pg.locator('h1').count() else '?','| review rows:',pg.locator('.rline').count())
    print('   errors',errs[:3]);b.close()
