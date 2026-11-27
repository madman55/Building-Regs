"""Phase 2-3 gate: Regulation Hunter (standalone and inside a lesson), "Where would you check?" questions,
the confidence check (checking never costs a heart), and the switches turning each off."""
import os, re, threading, http.server, functools
from playwright.sync_api import sync_playwright
APP = os.environ.get('APP_DIR', '.')
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 8790), functools.partial(Q, directory=APP))
threading.Thread(target=srv.serve_forever, daemon=True).start()
ok = True
def check(name, cond, extra=''):
    global ok
    ok &= bool(cond); print(('PASS ' if cond else 'FAIL ') + name + (('   ' + str(extra)) if extra != '' and not cond else ''))
seen = {'hunt': 0, 'where': 0, 'conf': 0, 'checked': 0, 'num': 0}
def hearts(pg):
    t = pg.inner_text('#hh') if pg.locator('#hh').count() else ''
    m = re.search(r'\d+', t); return int(m.group()) if m else None
def play_hunt_badly(pg):
    # three wrong picks -> answer shown -> read -> follow-up -> done
    pg.fill('#hq', 'window cleaning ladders'); pg.wait_for_timeout(500)
    for _ in range(3):
        if pg.locator('.hpick').count(): pg.locator('.hpick').last.click(); pg.wait_for_timeout(250)
    pg.click('#hgo'); pg.wait_for_timeout(300)
    pg.locator('#hbody .opt').first.click(); pg.wait_for_timeout(300)
    pg.click('#hnext'); pg.wait_for_timeout(300); pg.click('#hdone'); pg.wait_for_timeout(500)
def answer(pg, conf_choice):
    kind = pg.inner_text('.kind').lower()
    if pg.locator('.mgrid').count():
        for k in pg.evaluate("APPX.L.cur.p.map((_,k)=>k)"):
            pg.click(f'.mgrid .opt[data-s="l"][data-k="{k}"]'); pg.wait_for_timeout(60)
            pg.click(f'.mgrid .opt[data-s="r"][data-k="{k}"]'); pg.wait_for_timeout(120)
        return
    if 'regulation hunter' in kind:
        seen['hunt'] += 1; before = hearts(pg)
        pg.click('#ck'); pg.wait_for_timeout(600); play_hunt_badly(pg)
        check('a missed hunt in a lesson costs no heart', hearts(pg) == before, (before, hearts(pg)))
        return
    if 'where would you check' in kind: seen['where'] += 1
    if pg.locator('#ni').count(): seen['num'] += 1; pg.fill('#ni', pg.evaluate("APPX.L.cur.a[0]"))
    elif pg.locator('.opt[data-k]').count(): pg.click(f'.opt[data-k="{pg.evaluate("APPX.L.opts.findIndex(o=>o.ok)")}"]')
    elif pg.locator('[data-sp]').count():
        i = pg.evaluate("APPX.L.cur.wrong")
        pg.click(f'[data-sp="{i}"]')
    elif pg.locator('#bank button').count():
        for w in pg.evaluate("APPX.L.cur.a"):
            pg.locator('#bank button:not([disabled])', has_text=w).first.click(); pg.wait_for_timeout(60)
    if pg.locator('#ck').count() and not pg.locator('#ck').is_disabled():
        pg.click('#ck'); pg.wait_for_timeout(250)
        if pg.locator('.cq').count():
            seen['conf'] += 1
            if conf_choice == 'check' and not seen['checked']:
                before = hearts(pg)
                pg.click('.cb.chk'); pg.wait_for_timeout(1200)
                check('"let me check" opens the documents with results', pg.locator('#hunt .hcard').count() > 0)
                pg.click('#hback'); pg.wait_for_timeout(300)
                pg.click('#ck'); pg.wait_for_timeout(400)
                seen['checked'] += 1
                check('after checking, a wrong answer costs no heart', hearts(pg) == before or pg.locator('.foot.ok').count() == 1, (before, hearts(pg)))
                check('a note follows a checked answer', pg.locator('.labnote').count() == 1)
            else:
                pg.click('.cb[data-c="sure"]'); pg.wait_for_timeout(250)
def run_lesson(pg, conf_choice='check', max_steps=160):
    for _ in range(max_steps):
        if pg.locator('#nx2').count(): return True
        if pg.locator('#nx').count(): pg.click('#nx'); pg.wait_for_timeout(250); continue
        if pg.locator('.kind').count(): answer(pg, conf_choice); pg.wait_for_timeout(200); continue
        pg.wait_for_timeout(300)
    return False
with sync_playwright() as p:
    b = p.chromium.launch(); ctx = b.new_context(viewport={'width': 390, 'height': 820}); pg = ctx.new_page()
    errs = []; pg.on('pageerror', lambda e: errs.append(str(e)[:200])); ctx.route('https://**', lambda r: r.abort())
    pg.goto('http://localhost:8790/'); pg.wait_for_timeout(700)
    pg.evaluate("document.getElementById('splash')&&document.getElementById('splash').click()"); pg.wait_for_timeout(400)
    pg.click('[data-lv="std"]'); pg.wait_for_timeout(1500)
    check('Regulation Hunter card on Learn', pg.locator('.card.hunter').count() == 1 and '0 of 15' in pg.inner_text('.card.hunter'))
    # --- standalone hunt, played properly ---
    pg.click('[data-labh="next"]'); pg.wait_for_timeout(800)
    check('hunt opens with its brief', 'loft' in pg.inner_text('.hbrief').lower())
    pg.fill('#hq', 'loft conversion headroom stair'); pg.wait_for_timeout(600)
    cards = [pg.locator('.hcard').nth(i).inner_text() for i in range(pg.locator('.hcard').count())]
    ans = next((i for i, t in enumerate(cards) if 'Diagram 1.4' in t), None)
    wrong = next((i for i, t in enumerate(cards) if 'Diagram 1.4' not in t and 'Para 1.13' not in t), None)
    check('search inside the hunt finds the answer', ans is not None, cards[:4])
    pg.locator('.hopen').nth(ans).click(); pg.wait_for_timeout(2500)
    check('opening a result shows the page in the viewer', pg.locator('.dvmark').count() == 1)
    pg.click('#dvx'); pg.wait_for_timeout(300)
    pg.locator('.hpick').nth(wrong).click(); pg.wait_for_timeout(300)
    check('a wrong pick gives feedback, not the answer', pg.locator('#hst.close, #hst.no').count() == 1, pg.inner_text('#hst'))
    pg.locator('.hpick').nth(ans).click(); pg.wait_for_timeout(400)
    check('the right pick moves to the follow-up question', pg.locator('.hfq').count() == 1)
    pg.locator('#hbody .opt', has_text='1.9m').click(); pg.wait_for_timeout(300)
    check('follow-up explains from the text', 'Diagram 1.4' in pg.inner_text('#hwhy'))
    pg.click('#hnext'); pg.wait_for_timeout(300)
    deb = pg.inner_text('#hbody')
    check('debrief: found, read, follow-up, XP', 'Found after 2 tries' in deb and 'Opened the page' in deb and 'Answered the follow-up' in deb and '+12 XP' in deb, deb[:200])
    pg.click('#hdone'); pg.wait_for_timeout(600)
    check('Learn card counts the find', '1 of 15' in pg.inner_text('.card.hunter'))
    # --- a K lesson: hunt inside, where-would-you-check, confidence ---
    pg.evaluate("APPX.S.hearts=5"); pg.evaluate("startQuiz(APPX.LES.findIndex(l=>APPX.UNITS[l.ui].k==='K'&&l.qs.some(q=>LABQ._reframe(q).src)))"); pg.wait_for_timeout(800)
    if pg.locator('.deck, #nx2').count() and not pg.locator('.kind').count():
        for _ in range(12):
            nb = pg.locator('#dnext, .dnext, #nx2, button:has-text("Start the quiz"), button:has-text("Continue")')
            if pg.locator('.kind').count() or not nb.count(): break
            nb.first.click(); pg.wait_for_timeout(300)
    finished = run_lesson(pg)
    check('K lesson runs to the end', finished, pg.inner_text('#app')[:300].replace(chr(10),' | '))
    check('a Regulation Hunter question appeared in the lesson', seen['hunt'] == 1, seen)
    check('a "Where would you check?" question appeared', seen['where'] >= 1, seen)
    check('the confidence check appeared', seen['conf'] >= 1, seen)
    check('"let me check" path tested', seen['checked'] == 1, seen)
    while pg.locator('#nx2').count(): pg.click('#nx2'); pg.wait_for_timeout(300)
    # --- profile stats + switches off ---
    pg.locator('nav.tabs button').last.click(); pg.wait_for_timeout(500)
    t = pg.inner_text('main')
    check('Profile shows hunts found and checking stats', 'of 15 found' in t and 'stopped to check' in t, t[-400:])
    for f in ['hunter', 'reframe', 'confidence']: pg.click(f'[data-labf="{f}"]'); pg.wait_for_timeout(250)
    pg.locator('nav.tabs button').first.click(); pg.wait_for_timeout(500)
    check('switched off: no Hunter card', pg.locator('.card.hunter').count() == 0)
    seen.update({'hunt': 0, 'where': 0, 'conf': 0})
    pg.evaluate("startQuiz(APPX.LES.findIndex(l=>APPX.UNITS[l.ui].k==='K'&&l.qs.some(q=>LABQ._reframe(q).src)))"); pg.wait_for_timeout(600)
    run_lesson(pg, conf_choice='sure')
    check('switched off: lesson is back to the original formats', seen['hunt'] == 0 and seen['where'] == 0 and seen['conf'] == 0, seen)
    check('no page errors', not errs, errs)
    b.close()
srv.shutdown()
print('GATE PASSED' if ok else 'GATE FAILED')
