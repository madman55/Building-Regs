/* Building Regs Lab · Screens: Learn path, teaching decks (lesson cards), Library, Quests and Profile.
   Part of the main app script, split by area. Files are loaded in order by index.html and share one global scope:
   core, screens, quiz, beginner, search, official, semantic, search-ui, boot. */
const OFFS = [16, 50, 64, 42, 10];
const unitLabel = (u, ui) =>
  ui
    ? 'Unit ' + ui + ' · ' + (u.k === '7' ? 'Regulation 7' : u.k === 'HR' ? 'Building Safety Act' : 'Part ' + u.k)
    : 'Start here';
const nextReadUnit = n => (n >= 0 && LES[n].li === 0 && !S.read[LES[n].ui] ? LES[n].ui : -1);
const LIBIC =
  '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="5" height="16" rx="1.5" fill="#ff6b3d"/><rect x="9" y="3" width="5" height="17" rx="1.5" fill="#2b45ff"/><rect x="15.5" y="5" width="5" height="15" rx="1.5" fill="#3cb371" transform="rotate(-12 18 12)"/><rect x="2" y="19.5" width="20" height="2" rx="1" fill="#8b9199"/></svg>';
const TROPHY =
  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 3h10v2h3.2c.5 0 .8.4.8.8 0 3.3-2.1 5.7-5.1 6.1A5 5 0 0 1 13 14.8V17h3v4H8v-4h3v-2.2a5 5 0 0 1-2.9-2.9C5.1 11.5 3 9.1 3 5.8c0-.4.3-.8.8-.8H7zm0 4H5.1c.3 1.8 1.4 3.1 2.9 3.6A6 6 0 0 1 7 8zm10 0v1a6 6 0 0 1-1 2.6c1.5-.5 2.6-1.8 2.9-3.6z"/></svg>';
const BOOKN =
  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 5c3-1.6 6.5-1.4 9 .6v15c-2.5-1.8-6-2-9-.6zM22 5c-3-1.6-6.5-1.4-9 .6v15c2.5-1.8 6-2 9-.6z"/></svg>';
const THEMES = {
  '?': ['#58b83a', '#3f8f25', '#eaf8e1'],
  A: ['#4a7dff', '#2f57c9', '#e8efff'],
  B: ['#ff6b3d', '#d1451c', '#fff0e8'],
  C: ['#1cb5c9', '#11899a', '#e3f8fb'],
  D: ['#9b5de5', '#7337b8', '#f3ebfc'],
  E: ['#6c63ff', '#4b42d6', '#eeedff'],
  F: ['#2bb0ed', '#1784b5', '#e4f5fd'],
  G: ['#1e88e5', '#135ea3', '#e5f1fc'],
  H: ['#00a6a6', '#007878', '#e0f6f6'],
  J: ['#ff9f1c', '#cc7400', '#fff3e0'],
  K: ['#ffc400', '#c99a00', '#fff8db', '#3d2c00'],
  L: ['#3cb371', '#26864f', '#e6f6ec'],
  M: ['#e0479e', '#b02a77', '#fde9f4'],
  O: ['#ff7a59', '#d4533a', '#fff0eb'],
  P: ['#ffb800', '#c78c00', '#fff6dc', '#3d2c00'],
  Q: ['#3f51b5', '#2c3a8c', '#eceefa'],
  R: ['#00b8d4', '#008ba1', '#e0f8fb'],
  S: ['#20c997', '#149e75', '#e3f9f2'],
  T: ['#3d8bfd', '#2364c9', '#e9f2ff'],
  7: ['#e0663a', '#b14a24', '#fcebe3'],
  HR: ['#2b45ff', '#1c2fc0', '#e9ecff']
};
const tv = ui => {
  const t = THEMES[(UNITS[ui] || {}).k] || THEMES['?'];
  return `--c:${t[0]};--d:${t[1]};--l:${t[2]};--on:${t[3] || '#fff'}`;
};
function heroHtml(ui) {
  const u = UNITS[ui],
    ls = LES.filter(l => l.ui === ui),
    d = ls.filter(l => S.done[l.key]).length;
  return `<div class="hin"><div class="hl"><span>${esc(unitLabel(u, ui))}</span><strong>${esc(u.name)}</strong><div class="hbar"><i style="width:${Math.round((d / ls.length) * 100)}%"></i></div><small>${d} of ${ls.length} lessons${S.read[ui] ? '' : ' · not read yet'}</small><div class="hbtns"><button class="gb" data-g="${ui}" aria-label="Guidebook for ${esc(u.name)}">${I.book}Guide</button><button class="gb" data-qz="${ui}" aria-label="Quiz on ${esc(u.name)}">${I.quiz}Quiz</button></div></div>
<div class="hmas">${mascot(d === ls.length ? 'cheer' : 'happy')}</div></div>`;
}
let heroUi = -1,
  heroTick = 0;
function syncHero(force) {
  if (view !== 'learn') return;
  const hero = $('#hero');
  if (!hero) return;
  const lim = hero.getBoundingClientRect().bottom + 8;
  let ui = 0;
  document.querySelectorAll('.world').forEach(w => {
    if (w.getBoundingClientRect().top <= lim) ui = +w.dataset.ui;
  });
  if (ui !== heroUi || force) {
    heroUi = ui;
    hero.setAttribute('style', tv(ui));
    hero.innerHTML = heroHtml(ui);
    hero.classList.remove('swap');
    void hero.offsetWidth;
    hero.classList.add('swap');
  }
}
addEventListener(
  'scroll',
  () => {
    if (heroTick) return;
    heroTick = requestAnimationFrame(() => {
      heroTick = 0;
      syncHero();
    });
  },
  { passive: true }
);
function learn() {
  view = 'learn';
  const n = nextIdx(),
    nr = nextReadUnit(n),
    mc = Object.keys(S.mistakes).filter(id => mistakeQ(id)).length;
  let path = '';
  UNITS.forEach((u, ui) => {
    const ls = LES.map((l, i) => ({ l, i })).filter(o => o.l.ui === ui),
      open = unlocked(ls[0].i),
      dir = ui % 2 ? -1 : 1;
    let j = 0;
    const o = () => OFFS[j++ % 5] * dir;
    path += `<section class="world${open ? '' : ' locked'}" data-ui="${ui}" style="${tv(ui)}"><div class="divider"><span>${esc(unitLabel(u, ui))} · ${esc(u.name)}</span></div>${govCheck(ui)}
<div class="cloud c1"></div><div class="cloud c2"></div><div class="cloud c3"></div><div class="hills"></div>
<div class="nodes"><div class="scene ${dir > 0 ? 'l' : 'r'}">${sceneArt(u.k)}</div>`;
    const rd = !!S.read[ui],
      rid = 'R' + ui,
      rnext = nr === ui;
    path += `<div class="nwrap" style="transform:translateX(${o()}px)">${rnext && openPop !== rid ? '<div class="bub">Start</div>' : ''}${rnext ? '<div class="pulse"></div>' : ''}<button class="node learnn ${rd ? 'done' : open ? '' : 'lock'}${rnext ? ' next' : ''}" data-r="${ui}" aria-label="Learn ${esc(u.name)}">${open ? BOOKN : I.lock}</button>${openPop === rid ? readPop(ui, open, rd) : ''}</div>`;
    let lastVol = 0;
    ls.forEach(({ l, i }) => {
      const d = !!S.done[l.key],
        ok = unlocked(i),
        isN = i === n && nr < 0,
        lid = 'L' + i,
        cls = d ? 'done' : ok ? '' : 'lock',
        ic = d ? I.check : ok ? I.star : I.lock;
      if (l.meta && l.meta.vol && l.meta.vol !== lastVol) {
        lastVol = l.meta.vol;
        path += `<div class="voldiv"><span>Volume ${l.meta.vol}</span><b>${l.meta.vol === 1 ? 'Dwellings' : 'Buildings other than dwellings'}</b></div>`;
      }
      if (l.meta)
        path += `<div class="secpill${ok ? '' : ' off'}">${esc(l.meta.sec.split(' · ')[0])} · ${esc(l.meta.name)}</div>`;
      path += `<div class="nwrap" style="transform:translateX(${o()}px)">${isN && openPop !== lid ? '<div class="bub">Start</div>' : ''}${isN ? '<div class="pulse"></div>' : ''}<button class="node ${cls}${isN ? ' next' : ''}" data-l="${i}" aria-label="${esc(u.name)} lesson ${l.li + 1}">${ic}</button>${openPop === lid ? popHtml(i) : ''}</div>`;
    });
    const fb = S.finals[ui],
      fid = 'F' + ui;
    path += `<div class="secpill">Final revision · the whole unit</div><div class="nwrap" style="transform:translateX(${o()}px)"><button class="node final${fb ? ' done' : ''}" data-f="${ui}" aria-label="Final revision for ${esc(u.name)}">${TROPHY}</button>${openPop === fid ? `<div class="pop${fb ? ' done' : ''}"><strong>Final revision</strong><p>${Math.min(10, unitQs(ui).length)} questions from all over ${esc(u.name)}. Afterwards you’ll see which sections to revise or read again.${fb ? ` Best so far: ${fb.best}/10.` : ''}</p><button class="btn" data-fs="${ui}">${fb ? 'Take it again +10 XP' : 'Start +10 XP'}</button></div>` : ''}</div>`;
    const cd = unitDone(ui),
      co = !!S.chests[ui];
    path += `<div class="nwrap" style="transform:translateX(${o()}px)"><button class="node chest${cd && !co ? ' ready' : ''}" data-c="${ui}" aria-label="Reward chest${co ? ' (opened)' : cd ? ' (ready)' : ' (locked)'}">${co ? I.chestOpen : cd ? I.chest : I.chestLock}</button></div></div></section>`;
  });
  const pct = Math.min(100, Math.round((S.todayXp / GOAL) * 100));
  const say =
    n < 0
      ? 'You’ve finished every lesson. Keep practising to stay sharp!'
      : S.todayXp >= GOAL
        ? 'Daily goal smashed! Come back tomorrow for your streak.'
        : S.hearts <= 0 && !easy()
          ? 'Out of hearts. Practise mistakes to earn one back.'
          : n === 0 && nr === 0
            ? 'Hi, I’m Purl! Let’s start by learning the Parts.'
            : nr >= 0
              ? 'Next up: learn ' + UNITS[nr].name + ', then try the lesson.'
              : 'Next up: ' + UNITS[LES[n].ui].name + '. You’ve got this.';
  app.innerHTML =
    shell(`<button class="sbtn" data-search>${SEARCHIC}<span>Search the regs, e.g. “banister height”</span></button>${unitDone(0) ? '' : startHere()}<div class="card hello-card"><div class="hello">${mascot(S.todayXp >= GOAL || n < 0 ? 'cheer' : 'idle')}<div class="say">${esc(say)}</div></div><div class="goalrow"><div class="ring" style="--p:${pct}"><span>${S.todayXp}</span></div><div class="gtx"><b>${S.todayXp >= GOAL ? 'Daily goal done!' : 'Daily goal'}</b><span>${S.todayXp} of ${GOAL} XP today</span></div></div>
<div class="row2"><button class="btn" id="go">${n < 0 ? 'Practise' : Object.keys(S.done).length ? 'Continue' : 'Start'}</button><button class="btn ghost" id="pr" ${mc ? '' : 'disabled'}>Mistakes · ${mc}</button></div></div>
${window.LABL ? LABL.learnCard() : ''}${window.LABQ ? LABQ.learnCard() : ''}<div class="card jumpc"><div class="jh"><b>Jump to any Part</b><span>Every lesson is open. Start wherever you like.</span></div><div class="jump">${UNITS.map(
      (u, ui) => {
        const ls = LES.filter(l => l.ui === ui),
          d = ls.filter(l => S.done[l.key]).length;
        return `<button class="jp${d === ls.length ? ' done' : ''}" data-j="${ui}" style="${tv(ui)}" aria-label="Jump to ${esc(u.name)}"><span class="pi">${partIc(u.k)}</span><b>${esc(u.k === '?' ? 'Start' : u.k === '7' ? 'Reg 7' : u.k)}</b><i><em style="width:${Math.round((d / ls.length) * 100)}%"></em></i></button>`;
      }
    ).join('')}</div></div>
<div class="hero" id="hero"></div>${path}
<p class="note">Based on the Approved Documents for England, checked November 2026. Guidance changes often — check the current document before using a figure on a real project: <a href="https://www.planningportal.co.uk/applications/building-control-applications/building-control/approved-documents" target="_blank" rel="noopener">current Approved Documents</a>.</p>`);
  bindTabs();
  $('#go').onclick = () => {
    SFX.tap();
    n < 0 ? practice() : nr >= 0 ? deck(nr, n) : start(n);
  };
  $('#pr').onclick = () => {
    SFX.tap();
    practice(true);
  };
  const reopen = id => {
    SFX.tap();
    openPop = openPop === id ? -1 : id;
    const y = scrollY;
    learn();
    scrollTo(0, y);
    syncHero(true);
  };
  app.querySelectorAll('.node[data-l]').forEach(b => (b.onclick = () => reopen('L' + b.dataset.l)));
  app.querySelectorAll('.node[data-r]').forEach(b => (b.onclick = () => reopen('R' + b.dataset.r)));
  app.querySelectorAll('.node[data-c]').forEach(b => (b.onclick = () => chest(+b.dataset.c)));
  app.querySelectorAll('.node[data-f]').forEach(b => (b.onclick = () => reopen('F' + b.dataset.f)));
  app.querySelectorAll('.pop [data-fs]').forEach(
    b =>
      (b.onclick = () => {
        openPop = -1;
        finalTest(+b.dataset.fs);
      })
  );
  $('#hero').addEventListener('click', e => {
    const g = e.target.closest('[data-g]');
    if (g) return guide(+g.dataset.g);
    const z = e.target.closest('[data-qz]');
    if (z) unitQuiz(+z.dataset.qz);
  });
  app.querySelectorAll('.jp').forEach(
    b =>
      (b.onclick = () => {
        SFX.tap();
        const w = app.querySelector(`.world[data-ui="${b.dataset.j}"]`),
          h = $('#hero');
        if (!w) return;
        scrollTo({
          top: scrollY + w.getBoundingClientRect().top - 62 - (h ? h.offsetHeight : 0) - 4,
          behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
        });
      })
  );
  app.querySelectorAll('.pop [data-s]').forEach(
    b =>
      (b.onclick = () => {
        SFX.tap();
        const i = +b.dataset.s;
        openPop = -1;
        if (unlocked(i)) start(i);
      })
  );
  app.querySelectorAll('.pop [data-t]').forEach(
    b =>
      (b.onclick = () => {
        SFX.tap();
        openPop = -1;
        lessonDeck(+b.dataset.t);
      })
  );
  app.querySelectorAll('.pop [data-rd]').forEach(
    b =>
      (b.onclick = () => {
        SFX.tap();
        openPop = -1;
        const ui = +b.dataset.rd,
          first = LES.findIndex(l => l.ui === ui);
        deck(ui, S.done[LES[first].key] ? -1 : first);
      })
  );
  heroUi = -1;
  syncHero(true);
  if (!learn.scrolled) {
    learn.scrolled = 1;
    const nx = app.querySelector('.node.next');
    if (nx && Object.keys(S.done).length)
      setTimeout(() => {
        nx.scrollIntoView({ block: 'center' });
        syncHero(true);
      }, 60);
  }
}
function readPop(ui, open, rd) {
  const n = cardsFor(ui).length - 2;
  return `<div class="pop ${rd ? 'done' : open ? 'rd' : 'lock'}"><strong>Learn: ${esc(UNITS[ui].name)}</strong><p>${open ? n + ' cards · the key facts, with drawings' : 'Finish the unit above to unlock'}</p>${open ? `<button class="btn" data-rd="${ui}">${rd ? 'Read again' : 'Start reading +5 XP'}</button>` : ''}</div>`;
}

/* ---------- learn decks ---------- */
let DK = null;
const unitQs = ui => LES.filter(l => l.ui === ui).flatMap(l => l.qs);
const sectioned = ui => LES.some(l => l.ui === ui && l.meta);
function cardsFor(ui) {
  const cs = [{ t: 'intro' }];
  if (PLAIN[UNITS[ui].k]) cs.push({ t: 'plain' });
  if (sectioned(ui)) {
    cs.push({ t: 'sections' });
    cs.push({ t: 'end' });
    return cs;
  }
  const all = unitQs(ui),
    pairs = all.filter(q => q.t === 'match').flatMap(q => q.p);
  if (pairs.length) cs.push({ t: 'pairs', p: pairs });
  all.filter(q => q.t !== 'match' && q.t !== 'build').forEach(q => cs.push({ t: 'fact', q }));
  cs.push({ t: 'end' });
  return cs;
}
function cardsForLesson(i) {
  const l = LES[i],
    m = l.meta,
    cs = [{ t: 'sec' }];
  if (easy() && !S.read[l.ui] && PLAIN[UNITS[l.ui].k] && LES.findIndex(x => x.ui === l.ui) === i)
    cs.unshift({ t: 'plain' });
  if (m.watch && m.watch.length) cs.push({ t: 'watch' });
  const pairs = l.qs.filter(q => q.t === 'match').flatMap(q => q.p);
  if (pairs.length) cs.push({ t: 'pairs', p: pairs });
  l.qs.filter(q => q.t !== 'match' && q.t !== 'build').forEach(q => cs.push({ t: 'fact', q }));
  cs.push({ t: 'end' });
  return cs;
}
function labelFor(q) {
  if (q.t === 'num') return q.a[0] + (q.u.length <= 3 ? q.u : '');
  if (q.t === 'mc') return q.o[0].length <= 9 ? q.o[0] : '✓';
  return '✓';
}
function deck(ui, then) {
  S.last = LES.findIndex(l => l.ui === ui);
  roll();
  L = null;
  DK = { ui, then: then ?? -1, cs: cardsFor(ui), i: 0, lesson: -1 };
  view = 'lesson';
  drawCard();
}
function lessonDeck(i) {
  S.last = i;
  roll();
  L = null;
  DK = { ui: LES[i].ui, then: i, cs: cardsForLesson(i), i: 0, lesson: i };
  view = 'lesson';
  drawCard();
}
const WARN =
  '<svg viewBox="0 0 24 24"><path d="M12 3 22 20H2z" fill="#ffc800" stroke="#ffc800" stroke-width="3" stroke-linejoin="round"/><rect x="11" y="9" width="2.4" height="6" rx="1.2" fill="#15171a"/><circle cx="12.2" cy="17.4" r="1.3" fill="#15171a"/></svg>';
function drawCard() {
  const c = DK.cs[DK.i],
    u = UNITS[DK.ui],
    N = DK.cs.length,
    facts = DK.cs.filter(x => x.t === 'fact'),
    m = DK.lesson >= 0 ? LES[DK.lesson].meta : null;
  let body = '';
  const src =
    m && m.doc
      ? { t: 'Approved Document ' + u.k + (m.vol ? ' Vol ' + m.vol : '') + ' (PDF)', url: m.doc }
      : docsOf(DK.ui)[0];
  if (c.t === 'intro')
    body = `<div class="intro"><div class="pi pbig">${partIc(u.k)}</div><div class="kick">${unitLabel(u, DK.ui)}</div><h1>${esc(u.name)}</h1><p class="lead">${esc(u.intro || '')}</p>${govBlock(docsOf(DK.ui))}<div class="ask"><div class="mas">${mascot('happy')}</div><div class="say">${sectioned(DK.ui) ? 'Each section has its own lesson. I’ll teach you the key points before every one.' : 'Let’s go through the key facts. Tap Next, or swipe.'}</div></div></div>`;
  else if (c.t === 'sections')
    body = `<div class="kick">What’s in this Part</div><h2 class="ch">${LES.filter(l => l.ui === DK.ui).length} section lessons</h2><div class="secs">${LES.filter(
      l => l.ui === DK.ui
    )
      .map(
        (l, k) =>
          `<div class="${S.done[l.key] ? 'dn' : ''}"><b>${k + 1}</b><span><strong>${esc(l.meta ? l.meta.name : 'Lesson ' + (k + 1))}</strong>${l.meta ? `<small>${l.meta.vol ? 'Volume ' + l.meta.vol + ' · ' : ''}${esc(l.meta.sec.replace(/^Vol \d /, ''))}</small>` : ''}</span>${S.done[l.key] ? I.check : ''}</div>`
      )
      .join('')}</div>`;
  else if (c.t === 'sec')
    body = `<div class="intro"><div class="kick">${esc(m.sec)}</div><h1>${esc(m.name)}</h1><p class="lead">${esc(m.intro)}</p><div class="pagechip">${BOOKN}<span>In the Approved Document: <b>${esc(m.sec.split(' · ')[0])}</b>, from printed page ${m.page}</span></div>${govBlock([src])}<div class="ask"><div class="mas">${mascot('happy')}</div><div class="say">I’ll show you the key points, then you’ll answer ${LES[DK.lesson].qs.length} questions.</div></div></div>`;
  else if (c.t === 'plain') {
    const pl = PLAIN[u.k];
    body = `<div class="kick">In plain English</div><h2 class="ch">${esc(u.k === '?' ? 'What are the Building Regulations?' : unitLabel(u, DK.ui) + ' · ' + u.name)}</h2><div class="plain"><div><b>What it’s about</b><p>${esc(pl[0])}</p></div><div><b>Why it exists</b><p>${esc(pl[1])}</p></div><div><b>You’ll see it in</b><p>${esc(pl[2])}</p></div></div>`;
  } else if (c.t === 'watch')
    body = `<div class="kick">Watch out</div><h2 class="ch">Easy to miss in this section</h2><div class="watch">${m.watch.map(w => `<div>${WARN}<p>${esc(w)}</p></div>`).join('')}</div>`;
  else if (c.t === 'pairs') {
    c.rev = c.rev || c.p.map(() => false);
    const nr = c.rev.filter(Boolean).length,
      all = nr === c.p.length;
    body = `<div class="kick">Know the pairs</div><h2 class="ch">Test yourself first</h2><p class="phint">Say each answer in your head, then tap to check it.</p><div class="pairs reveal">${c.p.map(([a, b], k) => `<button class="prv${c.rev[k] ? ' on' : ''}" data-pr="${k}" aria-expanded="${c.rev[k]}"><b>${esc(a)}</b><span class="pans">${c.rev[k] ? esc(b) : '<i>Tap to reveal</i>'}</span></button>`).join('')}</div><div class="pbar"><span id="pcount">${nr} of ${c.p.length} revealed</span><button class="btn ghost small" id="pall">${all ? 'Hide all' : 'Show all'}</button></div>`;
  } else if (c.t === 'fact') {
    const q = c.q,
      k = facts.indexOf(c) + 1;
    const ans =
      q.t === 'mc' ? q.o[0] : q.t === 'tf' ? (q.a ? 'True' : 'False') : q.a[0] + (q.u[0] === '°' ? '' : ' ') + q.u;
    body = `<div class="kick">Key fact ${k} of ${facts.length}</div><p class="fq">${esc(q.q)}</p><div class="fa${q.t === 'tf' ? (q.a ? ' t' : ' f') : ''}">${esc(ans)}</div>${q.art ? `<div class="fig2">${diagram(q.art, labelFor(q))}</div>` : ''}<p class="fx">${esc(q.x || '')}</p>${q.why ? `<p class="why"><b>Why it matters:</b> ${esc(q.why)}</p>` : ''}<div class="ref">${esc(q.r || '')}${src ? ` · <a href="${esc(src.url)}" target="_blank" rel="noopener">check the source ${ARROW}</a>` : ''}</div>${q.r && refDoc(q.r) && (/p\.(\d+)/.test(q.r) || RF('blk', q.r)) ? `<button class="linkb adp" data-doc="${refDoc(q.r).code}" data-adp="${(q.r.match(/p\.(\d+)/) || [])[1] || ''}"${RF('blk', q.r)}>Open the official page</button>` : ''}`;
  } else {
    let first = false;
    if (DK.lesson >= 0) {
      const key = LES[DK.lesson].key;
      if (!S.taught[key]) {
        S.taught[key] = 1;
        addXp(5);
        newQuests();
        save();
        first = true;
        SFX.done();
        confetti();
      }
    } else if (!S.read[DK.ui]) {
      S.read[DK.ui] = 1;
      addXp(5);
      newQuests();
      save();
      first = true;
      SFX.done();
      confetti();
    }
    const li = DK.then >= 0 ? DK.then : LES.findIndex(l => l.ui === DK.ui);
    const can = li >= 0 && unlocked(li);
    body = `<div class="intro" style="text-align:center"><div class="big">${mascot('cheer')}</div><h1>You’re ready!</h1><p class="lead">${first ? '+5 XP for reading. ' : ''}Now put ${esc(m ? m.name : u.name)} into practice.</p>${can ? `<button class="btn" id="gs">${DK.lesson >= 0 ? 'Start the questions' : 'Start the lesson'}</button>` : ''}<button class="btn ghost" id="gh">Back to the path</button></div>`;
  }
  app.innerHTML = `<div class="ls" style="${tv(DK.ui)}"><div class="lt2"><button class="x" id="dq" aria-label="Close">${I.cross}</button><div class="prog"><i style="width:${Math.max(4, Math.round((DK.i / (N - 1)) * 100))}%;background:var(--c)"></i></div><div class="stat gm">${BOOKN}</div></div>
<div class="lb deckb ${DK.dir < 0 ? 'qback' : 'qin'}" id="dk">${body}</div>${c.t === 'end' ? '' : `<div class="foot"><div class="in row2"><button class="btn ghost" id="bk" ${DK.i ? '' : 'disabled'}>Back</button><button class="btn" id="nk">Next</button></div></div>`}</div>`;
  $('#dq').onclick = () => {
    DK = null;
    view = 'learn';
    render();
  };
  if ($('#nk')) {
    $('#nk').onclick = () => deckGo(1);
    $('#bk').onclick = () => deckGo(-1);
  }
  if (c.t === 'pairs') {
    const upd = () => {
      const nr = c.rev.filter(Boolean).length;
      $('#pcount').textContent = nr + ' of ' + c.p.length + ' revealed';
      $('#pall').textContent = nr === c.p.length ? 'Hide all' : 'Show all';
    };
    const show = (k, on) => {
      c.rev[k] = on;
      const b = app.querySelector(`[data-pr="${k}"]`);
      b.classList.toggle('on', on);
      b.setAttribute('aria-expanded', on);
      b.querySelector('.pans').innerHTML = on ? esc(c.p[k][1]) : '<i>Tap to reveal</i>';
    };
    app.querySelectorAll('[data-pr]').forEach(
      b =>
        (b.onclick = e => {
          e.stopPropagation();
          const k = +b.dataset.pr;
          if (c.rev[k]) return;
          SFX.tap();
          show(k, true);
          upd();
        })
    );
    $('#pall').onclick = e => {
      e.stopPropagation();
      SFX.tap();
      const on = c.rev.some(r => !r);
      c.p.forEach((_, k) => show(k, on));
      upd();
    };
  }
  if ($('#gs'))
    $('#gs').onclick = () => {
      const li = DK.then >= 0 ? DK.then : LES.findIndex(l => l.ui === DK.ui);
      DK = null;
      startQuiz(li);
    };
  if ($('#gh'))
    $('#gh').onclick = () => {
      DK = null;
      view = 'learn';
      render();
    };
  const el = $('#dk');
  let x0 = null;
  el.addEventListener(
    'touchstart',
    e => {
      x0 = e.touches[0].clientX;
    },
    { passive: true }
  );
  el.addEventListener(
    'touchend',
    e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 60 && c.t !== 'end') deckGo(dx < 0 ? 1 : -1);
    },
    { passive: true }
  );
  scrollTo(0, 0);
}
function deckGo(d) {
  const k = DK.i + d;
  if (k < 0 || k >= DK.cs.length) return;
  SFX.tap();
  DK.i = k;
  DK.dir = d;
  drawCard();
}
function popHtml(i) {
  const l = LES[i],
    u = UNITS[l.ui],
    cnt = LES.filter(x => x.ui === l.ui).length,
    d = !!S.done[l.key],
    ok = unlocked(i),
    m = l.meta,
    t = !!S.taught[l.key];
  return `<div class="pop ${d ? 'done' : ok ? '' : 'lock'}"><strong>${esc(m ? m.name : u.name + ' · lesson')}</strong><p>${ok ? (m ? `${esc(m.sec)} · ${l.qs.length} questions` : `Lesson ${l.li + 1} of ${cnt} · ${l.qs.length} questions`) : 'Finish the lesson above to unlock this one'}</p>${ok ? `<button class="btn" data-s="${i}">${d ? 'Practise again +5 XP' : m && !t ? 'Learn and practise +15 XP' : 'Start +10 XP'}</button>${m && t ? `<button class="btn ghost relearn" data-t="${i}">Read the cards again</button>` : ''}` : ''}</div>`;
}
function guide(ui) {
  SFX.tap();
  const u = UNITS[ui],
    qs = unitQs(ui).filter(q => q.t !== 'match');
  const pairs = unitQs(ui)
    .filter(q => q.t === 'match')
    .flatMap(q => q.p);
  sheet(`<div class="ghd"><span class="pi">${partIc(u.k)}</span><h2>${esc(u.name)} guidebook</h2></div><p class="small">Key facts from this unit. Read them before a lesson or after a mistake.</p>${govCheck(ui, 1)}<div class="govs">${docsOf(
    ui
  )
    .map(d => govLink(d))
    .join('')}</div>
${pairs.length ? `<div class="fact"><b>Know the pairs</b><p>${pairs.map(p => esc(p[0]) + ' — ' + esc(p[1])).join('<br>')}</p></div>` : ''}
${qs.map(q => `<div class="fact">${q.t === 'mc' ? `<p style="margin:0 0 2px">${esc(q.q)}</p>` : ''}<b>${esc(answerOf(q))}</b><p>${esc(q.x || '')} <span style="opacity:.75">(${esc(q.r || '')})</span></p></div>`).join('')}<button class="btn" data-close>Got it</button>`);
}
function answerOf(q) {
  if (q.t === 'mc') return q.o[0];
  if (q.t === 'tf') return (q.a ? 'True: ' : 'False: ') + q.q;
  if (q.t === 'num') return q.q.replace(/\?$/, '') + ' — ' + q.a[0] + ' ' + q.u;
  if (q.t === 'build') {
    let k = 0;
    return q.q.replace(/___/g, () => q.a[k++]);
  }
  return '';
}
function chest(ui) {
  SFX.tap();
  if (S.chests[ui]) return toast('Already opened');
  if (!unitDone(ui)) return toast('Finish this unit to open the chest');
  S.chests[ui] = 1;
  S.gems += 15;
  save();
  SFX.gem();
  confetti();
  sheet(
    `<div style="text-align:center"><div class="big" style="width:120px;height:120px">${I.chestOpen}</div><h2 style="margin-top:10px">+15 gems</h2><p class="small">Unit complete. Spend gems to refill hearts.</p><button class="btn gemb" data-close>Nice</button></div>`
  );
  const y = scrollY;
  learn();
  scrollTo(0, y);
}

/* ---------- library: browse every Part like a reference book ---------- */
let libOpen = {},
  libQ = '';
function factLine(q) {
  const a = answerOf(q);
  return `<div class="lfact" id="${fid(q)}" data-s="${esc((q.q + ' ' + a + ' ' + (q.x || '')).toLowerCase())}"><b>${esc(a)}</b><p>${esc(q.x || '')} <span class="lref">${esc(q.r || '')}</span></p></div>`;
}
function library() {
  view = 'library';
  const parts = UNITS.map((u, ui) => {
    const ls = LES.filter(l => l.ui === ui),
      src = docsOf(ui);
    const inner = ls.some(l => l.meta)
      ? ls
          .map(l => {
            const li = LES.indexOf(l),
              b = qbestOf('s' + l.key);
            return `<div class="lsec" id="s${li}"><div class="lsh"><h3>${esc(l.meta.sec)}</h3><button class="qzb sm" data-sq="${li}" aria-label="Quiz on ${esc(l.meta.name)}">${S.done[l.key] ? I.check : I.quiz}${b !== null ? b + '%' : 'Quiz'}</button></div><div class="lname">${esc(l.meta.name)} · from printed page ${l.meta.page}${l.meta.doc ? ` · <a href="${esc(l.meta.doc)}" target="_blank" rel="noopener">open the PDF</a>` : ''}</div><p class="lintro">${esc(l.meta.intro)}</p>${l.meta.watch.map((w, wi) => `<div class="lwatch" id="w${li}_${wi}" data-s="${esc(w.toLowerCase())}">${WARN}<span>${esc(w)}</span></div>`).join('')}${l.qs
              .filter(q => q.t !== 'match')
              .map(factLine)
              .join('')}</div>`;
          })
          .join('')
      : `<p class="lintro">${esc(u.intro || '')}</p>${unitQs(ui)
          .filter(q => q.t !== 'match')
          .map(factLine)
          .join('')}`;
    return `<details class="lpart" data-ui="${ui}" style="${tv(ui)}" ${libOpen[ui] ? 'open' : ''}><summary><span class="pi">${partIc(u.k)}</span><span class="lt"><small>${esc(unitLabel(u, ui))}</small><b>${esc(u.name)}</b><em>${unitQs(ui).length} questions${qbestOf('u' + ui) !== null ? ' · quiz best ' + qbestOf('u' + ui) + '%' : ''}</em></span><button class="qzb" data-uq="${ui}" aria-label="Quiz on ${esc(u.name)}">${I.quiz}Quiz</button></summary><div class="lbody">${govCheck(ui, 1)}<div class="govs">${src.map(d => govLink(d)).join('')}</div>${inner}</div></details>`;
  }).join('');
  app.innerHTML = shell(
    `<div class="card libhead"><h2>Library</h2><p class="small" style="margin:2px 0 10px">Every fact in the app, organised like the Approved Documents. Search for a figure or topic, e.g. "escape window" or "1100".</p><button class="sbtn" data-search style="margin:0">${SEARCHIC}<span>Search the regs, e.g. “escape window”</span></button>${fromSearch ? '<button class="backres" data-search>← Back to results</button>' : ''}</div><div id="lres" class="small" style="margin:0 4px 8px"></div>${parts}`
  );
  bindTabs();
  app.querySelectorAll('.lpart').forEach(d =>
    d.addEventListener('toggle', () => {
      libOpen[d.dataset.ui] = d.open;
    })
  );
  app.querySelectorAll('[data-uq]').forEach(
    b =>
      (b.onclick = e => {
        e.preventDefault();
        e.stopPropagation();
        unitQuiz(+b.dataset.uq, 'library');
      })
  );
  app.querySelectorAll('[data-sq]').forEach(
    b =>
      (b.onclick = e => {
        e.preventDefault();
        secQuiz(+b.dataset.sq, 'library');
      })
  );
  const run = () => {
    libQ = $('#lq').value.trim().toLowerCase();
    let hits = 0;
    app.querySelectorAll('.lpart').forEach(d => {
      let any = false;
      d.querySelectorAll('.lfact,.lwatch').forEach(f => {
        const ok = !libQ || f.dataset.s.includes(libQ);
        f.style.display = ok ? '' : 'none';
        if (ok && libQ) {
          any = true;
          hits++;
        }
      });
      d.querySelectorAll('.lsec').forEach(sec => {
        sec.style.display =
          !libQ || [...sec.querySelectorAll('.lfact,.lwatch')].some(f => f.style.display !== 'none') ? '' : 'none';
      });
      d.style.display = !libQ || any ? '' : 'none';
      if (libQ) d.open = any;
    });
    $('#lres').textContent = libQ ? (hits ? hits + ' matching facts' : 'No matches — try another word or figure') : '';
  };
  void run;
}

/* ---------- quests ---------- */
function quests() {
  const mc = Object.keys(S.mistakes).filter(id => mistakeQ(id)).length;
  app.innerHTML =
    shell(`<div class="card"><h2>Daily quests</h2><p class="small" style="margin:0 0 6px">New quests every day. Each one is worth 10 gems.</p>
${QUESTS.map(q => {
  const v = Math.min(q.n, q.get()),
    f = v >= q.n;
  return `<div class="quest${f ? ' fin' : ''}"><div class="qi">${f ? I.chestOpen : I.chest}</div><div class="qb"><strong>${q.name}</strong><div class="meter"><i style="width:${(v / q.n) * 100}%"></i></div><div class="small" style="margin-top:4px">${v} / ${q.n}${f ? ' · done' : ''}</div></div><div class="rw">${I.gem}10</div></div>`;
}).join('')}</div>
<div class="card"><h2>Practice</h2><p class="small" style="margin:0 0 4px">Practice never costs hearts and earns one back.</p>
<button class="btn" id="pm" ${mc ? '' : 'disabled'}>Fix ${mc} mistake${mc === 1 ? '' : 's'}</button><button class="btn ghost" id="pa" ${Object.keys(S.done).length ? '' : 'disabled'}>Mixed review</button></div>`);
  bindTabs();
  $('#pm').onclick = () => practice(true);
  $('#pa').onclick = () => practice(false, true);
}

/* ---------- profile ---------- */
function profile() {
  const days = [...Array(7)].map((_, k) => {
    const d = new Date();
    d.setDate(d.getDate() - 6 + k);
    const s = dstr(d);
    return { l: 'MTWTFSS'[(d.getDay() + 6) % 7], v: S.hist[s] || 0, t: k === 6 };
  });
  const mx = Math.max(GOAL, ...days.map(d => d.v));
  const done = Object.keys(S.done).length;
  app.innerHTML = shell(`<div class="card"><h2>Your progress</h2><div class="grid4" style="margin-top:12px">
<div class="pst"><span class="fl">${I.fire}</span><div><b>${streak()}</b><span>day streak</span></div></div><div class="pst"><span class="bo">${I.bolt}</span><div><b>${S.xp}</b><span>total XP</span></div></div>
<div class="pst"><span class="gm">${I.gem}</span><div><b>${S.gems}</b><span>gems</span></div></div><div class="pst"><span style="color:var(--ok)">${I.check}</span><div><b>${done}/${LES.length}</b><span>lessons</span></div></div></div></div>
<div class="card"><h2>Last 7 days</h2><div class="bars">${days.map(d => `<div class="${d.t ? 'today' : ''}"><span>${d.v || ''}</span><i style="height:${Math.round((d.v / mx) * 90)}%"></i>${d.l}</div>`).join('')}</div></div>
<div class="card"><h2>Official documents</h2><p class="small" style="margin:0 0 10px">The current Approved Documents for England, straight from GOV.UK. Links open in your browser.</p><div class="lib">${UNITS.map(
    (u, ui) =>
      docsOf(ui)
        .map(
          d =>
            `<a href="${esc(d.url)}" target="_blank" rel="noopener"><span class="pi">${partIc(u.k)}</span><span><b>${esc(d.t)}</b><small>${esc(unitLabel(u, ui))}</small></span>${ARROW}</a>`
        )
        .join('')
  ).join('')}</div></div>
<div class="card"><h2>Settings</h2><div class="set" style="border:0"><span>Sound effects</span><button class="sw" id="snd" role="switch" aria-checked="${S.sound}" aria-label="Sound effects"></button></div>
<div class="set"><span class="setl">Beginner mode<small>No hearts lost, figures as multiple choice, hints</small></span><button class="sw" id="beg" role="switch" aria-checked="${easy()}" aria-label="Beginner mode"></button></div>
<div class="set"><span>${easy() ? 'Hearts: not used in Beginner mode' : `Hearts: ${S.hearts} / ${MAXH}`}</span><button class="btn gemb" id="rf" style="width:auto;margin:0;padding:0 14px;min-height:44px;font-size:13px" ${S.hearts >= MAXH || S.gems < REFILL ? 'disabled' : ''}>Refill · ${REFILL} gems</button></div>
<div class="set"><span>Start again from scratch</span><button class="btn ghost" id="rs" style="width:auto;margin:0;padding:0 14px;min-height:44px;font-size:13px;color:var(--bad)">Reset</button></div></div>
<div class="card"><h2>Lab experiments</h2><p class="small" style="margin:0 0 6px">This is the experimental copy of Building Regs Trainer. Progress here is kept separately from the original app.</p>${LAB.list.map((f, i) => `<div class="set"${i ? '' : ' style="border:0"'}><span class="setl">${esc(f.name)}<small>${esc(f.about)}</small></span>${f.ready ? `<button class="sw" data-labf="${f.id}" role="switch" aria-checked="${LAB.on(f.id)}" aria-label="${esc(f.name)}"></button>` : `<span class="labsoon">Phase ${f.phase}</span>`}</div>`).join('')}${window.LABQ ? LABQ.profileLine() : ''}</div>`);
  bindTabs();
  document.querySelectorAll('[data-labf]').forEach(
    b =>
      (b.onclick = () => {
        LAB.set(b.dataset.labf, b.getAttribute('aria-checked') !== 'true');
        SFX.tap();
        profile();
      })
  );
  $('#snd').onclick = () => {
    S.sound = !S.sound;
    save();
    SFX.tap();
    profile();
  };
  $('#beg').onclick = () => {
    S.level = easy() ? 'std' : 'new';
    save();
    SFX.tap();
    toast(easy() ? 'Beginner mode on' : 'Standard mode on');
    profile();
  };
  $('#rf').onclick = refill;
  $('#rs').onclick = () =>
    sheet(
      `<h2>Reset all progress?</h2><p class="small">Your XP, streak, gems and completed lessons will be cleared. This can’t be undone.</p><button class="btn" style="background:var(--bad);box-shadow:0 4px 0 var(--badDk)" id="yes">Reset everything</button><button class="btn ghost" data-close>Keep my progress</button>`,
      (v, close) => {
        v.querySelector('#yes').onclick = () => {
          const snd = S.sound;
          S = blank();
          S.sound = snd;
          save();
          close();
          view = 'learn';
          render();
        };
      }
    );
}
function refill() {
  if (S.gems < REFILL || S.hearts >= MAXH) return;
  S.gems -= REFILL;
  S.hearts = MAXH;
  save();
  SFX.gem();
  toast('Hearts refilled');
  render();
}

/* ---------- lesson engine ---------- */
