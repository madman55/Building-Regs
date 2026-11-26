import os
from playwright.sync_api import sync_playwright
for level in ['new','std']:
  with sync_playwright() as p:
    b=p.chromium.launch();pg=b.new_page(viewport={'width':360,'height':740});errs=[];pg.on('pageerror',lambda e:errs.append(str(e)));pg.route('https://**',lambda r:r.abort())
    pg.goto('file://'+os.path.abspath(os.environ.get('APP_DIR','.'))+'/index.html');pg.wait_for_timeout(300);pg.evaluate("document.getElementById('splash').click()");pg.wait_for_timeout(600)
    pg.click(f'[data-lv="{level}"]');pg.wait_for_timeout(300)
    pg.click('[data-sh]');pg.wait_for_timeout(300)
    print(f'== {level}: first card links ->','small link' if pg.locator('.govsmall').count() else f'{pg.locator(".gov").count()} big buttons')
    if level=='new':pg.screenshot(path='/tmp/c1.png')
    pg.click('#nk');pg.wait_for_timeout(300);print('   second card:',pg.inner_text('.kick'),'|',pg.inner_text('.ch'))
    if level=='new':pg.screenshot(path='/tmp/c2.png')
    # Part K: open via search a fact with a why line -> section lesson deck facts
    pg.evaluate("document.getElementById('dq').click()");pg.wait_for_timeout(300)
    pg.click('.sbtn');pg.fill('#sq','pitch of a private stair');pg.wait_for_timeout(300)
    pg.locator('.sr').first.click();pg.wait_for_timeout(400)
    # open that section's reading (Read button in section)
    ok=pg.evaluate("(()=>{const el=document.querySelector('.flash');const sec=el.closest('.lsec')||el;const b=[...sec.querySelectorAll('button')].find(x=>/Read|Learn|Guide/i.test(x.textContent));if(b){b.click();return b.textContent}return null})()")
    pg.wait_for_timeout(300);found=False
    for i in range(30):
        if pg.locator('.why').count():found=True;break
        if pg.locator('#nk').count()==0:break
        pg.click('#nk');pg.wait_for_timeout(120)
    print('   section reading via',repr(ok),'| why line shown:',found, '|', pg.locator('.why').first.inner_text()[:80] if found else '')
    if level=='new' and found:pg.screenshot(path='/tmp/c3.png')
    print('   errors',errs);b.close()
