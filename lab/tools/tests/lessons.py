"""T1 gate: the lesson player and the two prototype lessons, run start to finish, plus preview mode and the switch."""
import os, json, threading, http.server, functools
from playwright.sync_api import sync_playwright
APP = os.environ.get('APP_DIR', '.')
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 8801), functools.partial(Q, directory=APP))
threading.Thread(target=srv.serve_forever, daemon=True).start()
ok = True
def check(name, cond, extra=''):
    global ok
    ok &= bool(cond); print(('PASS ' if cond else 'FAIL ') + name + (('   ' + str(extra)) if extra != '' and not cond else ''))
LES = {i: json.load(open(os.path.join(APP, 'lessons', i + '.json'))) for i in ['regs-101', 'k-stairs-1']}
EXPECT = {'intro': 'Explanation', 'explain': 'Explanation', 'tap': 'Illustration', 'sim': 'Illustration', 'predict': 'Explanation', 'sort': 'Explanation', 'check': 'Explanation', 'find': 'Statutory guidance'}
def cont(pg): pg.click('#lxnext'); pg.wait_for_timeout(250)
def play(pg, L, hunt_query, pick_text):
    labels_ok = True
    for i, st in enumerate(L['steps']):
        lab = pg.inner_text('.lxlab')
        want = EXPECT.get(st['type']) or ('Law' if st['type'] == 'quote' and 'Requirement' in st.get('ref', '') else 'Statutory guidance' if st['type'] == 'quote' else '')
        if want and want not in lab: labels_ok = False; print('   label', i, st['type'], repr(lab))
        t = st['type']
        if t == 'tap':
            check('tap: Continue waits until terms are tapped', pg.locator('#lxnext').is_disabled())
            for k in st['terms']: pg.click(f'.lxt[data-t="{k}"]'); pg.wait_for_timeout(60)
            pg.locator('[data-hot="nosing"]').click(); pg.wait_for_timeout(100)
            check('tap: tapping the drawing shows the term', 'Nosing' in pg.inner_text('#lxdef'))
        elif t in ('predict',):
            pg.locator('#lxstep .opt').nth(st['a']).click(); pg.wait_for_timeout(150)
        elif t == 'check':
            for k, q in enumerate(st['qs']):
                pg.locator('#lxstep .opts').last.locator('.opt').nth(q['a']).click(); pg.wait_for_timeout(150)
                if k < len(st['qs']) - 1: pg.click('.lxmore'); pg.wait_for_timeout(150)
        elif t == 'sort':
            for k, it in enumerate(st['items']):
                pg.locator('[data-b]').nth(it['a']).click(); pg.wait_for_timeout(120)
                if k < len(st['items']) - 1: pg.click('.lxmore'); pg.wait_for_timeout(120)
            check('sort: all cards placed correctly', f"{len(st['items'])} of {len(st['items'])} right" in pg.inner_text('#lxstep'))
        elif t == 'quote':
            check(f'quote "{st["ref"]}" shows the official text with edition', pg.locator('.lxq img, .lxq blockquote').count() == 1 and 'England' in pg.inner_text('.lxq figcaption'))
        elif t == 'sim':
            before = pg.inner_text('#lxout'); pg.locator('#lxR').fill('220'); pg.locator('#lxR').dispatch_event('input'); pg.wait_for_timeout(150)
            after = pg.inner_text('#lxout')
            check('experiment: changing the rise changes the readings', before != after and '°' in after, after[:120])
            check('experiment: no verdict words', not any(w in after.lower() for w in ['complies', 'compliant', 'pass', 'fail', 'not ok']))
        elif t == 'explain' and st.get('action') == 'status':
            pg.click('#lxdoc'); pg.wait_for_timeout(300)
            check('status page opens above the lesson', pg.locator('.sheet').count() == 1 and pg.locator('.sheet').is_visible())
            pg.click('.sheet [data-close]'); pg.wait_for_timeout(200)
        elif t == 'find':
            pg.click('#lxgo'); pg.wait_for_timeout(700)
            pg.fill('#hq', hunt_query); pg.wait_for_timeout(700)
            cards = [pg.locator('.hcard').nth(j).inner_text() for j in range(pg.locator('.hcard').count())]
            j = next((j for j, c in enumerate(cards) if pick_text in c), None)
            check(f'find: search finds {pick_text}', j is not None, cards[:3])
            if j is None: pg.click('#hx'); pg.click('#lxskip')
            else:
                pg.locator('.hpick').nth(j).click(); pg.wait_for_timeout(300)
                if pg.locator('.hfq').count(): pg.locator('#hbody .opt').first.click(); pg.wait_for_timeout(150); pg.click('#hnext'); pg.wait_for_timeout(200)
                pg.click('#hdone'); pg.wait_for_timeout(400)
                check('find: result shown in the lesson', 'Found it' in pg.inner_text('#lxres') or 'Now you know' in pg.inner_text('#lxres'))
        if t != 'end':
            check(f'step {i + 1} ({t}) lets you continue', not pg.locator('#lxnext').is_disabled())
            cont(pg)
    check(f'every step in "{L["title"]}" carries the right label', labels_ok)
with sync_playwright() as p:
    b = p.chromium.launch(); ctx = b.new_context(viewport={'width': 390, 'height': 820}); pg = ctx.new_page()
    errs = []; pg.on('pageerror', lambda e: errs.append(str(e)[:200])); ctx.route('https://**', lambda r: r.abort())
    pg.goto('http://localhost:8801/'); pg.wait_for_timeout(700)
    pg.evaluate("document.getElementById('splash')&&document.getElementById('splash').click()"); pg.wait_for_timeout(400)
    pg.click('[data-lv="std"]'); pg.wait_for_timeout(1800)
    check('Lessons card on Learn with both lessons', pg.locator('.lxli').count() == 2)
    xp0 = pg.evaluate("APPX.S.xp")
    pg.click('[data-labl="regs-101"]'); pg.wait_for_timeout(900)
    check('lesson opens with title, objectives and draft status', 'Understanding the Building Regulations' in pg.inner_text('#lx') and 'not yet independently reviewed' in pg.inner_text('#lx'))
    play(pg, LES['regs-101'], 'requirement B1 warning escape', 'Requirement B1')
    cont(pg)
    check('finishing gives XP and ticks the lesson', pg.evaluate("APPX.S.xp") > xp0 and pg.locator('.lxli.y').count() == 1, (xp0, pg.evaluate("APPX.S.xp")))
    pg.click('[data-labl="k-stairs-1"]'); pg.wait_for_timeout(900)
    play(pg, LES['k-stairs-1'], 'loft conversion headroom stair', 'Diagram 1.4')
    pg.click('.lxnx'); pg.wait_for_timeout(800)
    check('end step links into the Part K lessons', pg.locator('#lx').count() == 0 and pg.locator('.kind, .intro, .ch, .kick').count() > 0)
    pg.goto('http://localhost:8801/?lesson=k-stairs-1&preview'); pg.wait_for_timeout(1800)
    check('preview mode opens the lesson with a banner', pg.locator('#lx .lxprev').count() == 1)
    pg.click('#lxx'); pg.wait_for_timeout(300)
    pg.locator('nav.tabs button').last.click(); pg.wait_for_timeout(400)
    pg.click('[data-labf="lessons"]'); pg.wait_for_timeout(200)
    pg.locator('nav.tabs button').first.click(); pg.wait_for_timeout(500)
    check('switched off: no Lessons card', pg.locator('.lxli').count() == 0)
    check('no page errors', not errs, errs)
    b.close()
srv.shutdown()
print('GATE PASSED' if ok else 'GATE FAILED')
