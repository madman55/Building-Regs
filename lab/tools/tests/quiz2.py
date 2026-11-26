import os
from playwright.sync_api import sync_playwright
import sys
src=sys.argv[1]
STEP=open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'step.js')).read()
with sync_playwright() as p:
    b=p.chromium.launch();pg=b.new_page(viewport={'width':360,'height':740},color_scheme='dark');errs=[];pg.on('pageerror',lambda e:errs.append(str(e)))
    pg.route('https://**',lambda r:r.abort())
    pg.goto('file://'+src);pg.wait_for_timeout(300);pg.evaluate("document.getElementById('splash')&&document.getElementById('splash').click()");pg.wait_for_timeout(600)
    pg.evaluate("document.querySelector('[data-lv=std]')&&document.querySelector('[data-lv=std]').click()");pg.wait_for_timeout(300)
    pg.evaluate("[...document.querySelectorAll('button')].find(b=>/Quiz/.test(b.textContent)).click()");pg.wait_for_timeout(400)
    cont=0;last=None;idle=0
    for i in range(200):
        r=pg.evaluate(STEP);pg.wait_for_timeout(200)
        if r=='continue':cont+=1
        if r=='left':break
        idle=idle+1 if r in('idle','match-wait') else 0
        if idle>15:break
    print('Continue presses:',cont,'| finished quiz:',r=='left' or pg.locator('.ls').count()==0,'| last step:',r)
    print('screen:',pg.inner_text('body')[:150].replace('\n',' | '))
    print('errors',errs);b.close()
