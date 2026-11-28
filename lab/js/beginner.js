/* Building Regs Lab · Beginner support: plain-English intros, "why it matters" lines, Start here, Mistakes, hints and the welcome level picker.
   Part of the main app script, split by area. Files are loaded in order by index.html and share one global scope:
   core, screens, quiz, beginner, search, official, semantic, search-ui, boot. */
const PLAIN = {
  '?': [
    'The Building Regulations are the minimum rules for building work in England. They’re split into Parts, each named by a letter, and each Part covers one topic, like fire, stairs or energy.',
    'So every new building, extension or big alteration is safe, healthy, usable and not wasteful, whoever builds it. Each Part has an Approved Document showing one accepted way to meet its rules, and building control checks the work.',
    'Any extension, loft conversion or new build. If you’ve ever heard “you’ll need building regs approval for that”, this is what it means.'
  ],
  A: [
    'Buildings must stand up. Walls, floors, roofs and foundations have to carry their own weight, people and furniture, wind and snow, safely down into the ground.',
    'So buildings don’t crack, sag or collapse. In 1968 one corner of Ronan Point, a tower block in east London, collapsed after a gas explosion. That’s why there’s also a rule that one failure mustn’t bring down far more of the building than it should.',
    'Steel beams when a wall is knocked through, foundations being dug, roof timbers in a loft.'
  ],
  B: [
    'If there’s a fire, people must be warned, get out safely, and the fire must be slowed down long enough for that to happen. Firefighters also need to be able to get in and do their job.',
    'Fire spreads fast and smoke kills quickly. The Grenfell Tower fire in 2017 led to many of the most recent changes.',
    'Smoke alarms, fire doors that close by themselves, fire exit signs, escape stairs in blocks of flats, and windows big enough to climb out of.'
  ],
  C: [
    'Keep water and harmful ground gases out of the building, and deal with any contaminated land before building on it.',
    'Damp makes buildings rot and makes people ill. Some areas also have radon, a natural radioactive gas from the ground that can build up indoors.',
    'The damp-proof course line near the bottom of a brick wall, plastic sheeting under a new floor, and mould on cold walls when it goes wrong.'
  ],
  D: [
    'The shortest Part. Insulation foam pumped into cavity walls must not give off toxic fumes into the home.',
    'Some foams can release formaldehyde, an irritating gas, into the rooms if they’re installed in the wrong kind of wall.',
    'The small drilled holes, filled in afterwards, in the outside walls of houses that have had cavity wall insulation added.'
  ],
  E: [
    'Stop noise travelling between neighbours, and between rooms inside a home. It also covers good acoustics in schools.',
    'Hearing your neighbour’s TV or footsteps through the wall or ceiling is miserable, especially in flats and semi-detached homes.',
    'The party wall between two semis, the floor between flats, and the sound tests done on new homes before people move in.'
  ],
  F: [
    'Get fresh air in and stale, damp air out, without needing to leave windows wide open.',
    'Cooking, showers and breathing all add moisture and pollutants to the air. Without ventilation you get condensation, mould and poor air.',
    'Extractor fans in kitchens and bathrooms, and the thin trickle vents along the top of window frames.'
  ],
  G: [
    'Homes need a safe water supply, hot water that won’t scald you, toilets and washbasins, and fittings that don’t waste water.',
    'Very hot water can badly burn people, especially children and older people. Large hot water cylinders also need safety devices so they can’t overheat or burst.',
    'The temperature limiter on a new bath tap, dual-flush toilets, and the pipes and valves around a hot water cylinder.'
  ],
  H: [
    'Take dirty water and sewage away safely, deal with rainwater, and give bins a sensible place to live.',
    'Leaking or blocked drains spread disease and smells, and rainwater with nowhere to go floods buildings.',
    'Manhole covers in a driveway, gutters and downpipes, septic tanks on rural houses, and bin stores outside flats.'
  ],
  J: [
    'Anything that burns fuel, like a boiler, a wood burner or an open fire, must get enough air, send its fumes safely outside, and not set the building alight.',
    'Badly fitted appliances can leak carbon monoxide, a gas you can’t see or smell that can kill. Hot flues and stoves can also start fires.',
    'The boiler flue poking out of an outside wall, carbon monoxide alarms, the stone or tile hearth under a stove, and oil tanks in gardens.'
  ],
  K: [
    'Stop people falling, tripping, and walking into things: stairs, ramps, balconies, glass doors and windows.',
    'Falls are one of the most common causes of injury at home. Small details like step size, handrail height and gaps in railings make a big difference.',
    'Handrails on stairs, balcony railings, safety glass in doors, the stickers or dots on big glass doors so people don’t walk into them, and barriers at the edge of car parks.'
  ],
  L: [
    'Use less energy to heat and power buildings, and produce less carbon while doing it.',
    'Buildings use a big share of the country’s energy. Better insulation and cleaner heating cut bills and emissions, and the targets get tougher every few years.',
    'Loft insulation, double and triple glazing, heat pumps and solar panels, and the energy calculations done for every new home.'
  ],
  M: [
    'Buildings should work for everyone, including wheelchair users, older people, and parents with buggies.',
    'A single step or a narrow door can stop someone getting into a building at all. Some new homes are also built so they can be adapted as people’s needs change.',
    'Ramps and level entrances, wide doors, accessible toilets with grab rails, and light switches and sockets at easy-to-reach heights.'
  ],
  O: [
    'New homes mustn’t get uncomfortably hot in summer. That means limiting how much sun comes in and making sure heat can get out.',
    'Well-insulated new homes, especially flats with lots of glass, can trap heat and become too hot to sleep in. Hotter summers make it worse.',
    'Fewer or smaller windows on sunny sides of new flats, windows that open wide enough to cool a room, and external shading.'
  ],
  P: [
    'Electrical work in homes must be done safely, and bigger jobs must be checked or certified.',
    'Faulty wiring causes electric shocks and fires.',
    'The fuse box (consumer unit), and the certificate an electrician gives you after a rewire or a new circuit.'
  ],
  Q: [
    'Doors and windows in new homes must be hard to break into.',
    'Most burglaries happen through doors and windows, so they have to be made and fitted to a tested, secure standard.',
    'Multi-point locks on front doors, and window and door frames tested against forced entry.'
  ],
  R: [
    'New homes must be ready for very fast (gigabit) broadband, and connected to it where that’s possible at reasonable cost.',
    'Fast internet is now basic infrastructure, and it’s much easier and cheaper to plan it in than to dig it in later.',
    'Ducts for fibre cables, and the box on the wall where the fibre enters the home.'
  ],
  S: [
    'New buildings with parking, and some major renovations, need electric vehicle charge points or the cabling for them.',
    'To make it easy to switch to electric cars as the country moves away from petrol and diesel.',
    'A charge point by the driveway of a new house, and charging bays in new car parks.'
  ],
  T: [
    'Added in 2024, Part T covers toilets in new non-residential buildings like offices, shops and restaurants. It includes separate toilets for men and women, and self-contained “universal” toilets anyone can use.',
    'To make sure there are enough toilets, and toilets that suit everyone, in new public and work buildings.',
    'Fully enclosed single toilet rooms with their own washbasin in new cafés and offices.'
  ],
  7: [
    'Use suitable materials, and fit them properly. For taller residential buildings, the outside walls mustn’t contain combustible materials.',
    'Even a good design fails if the materials are wrong or badly fitted. The ban on combustible materials in the outside walls of taller blocks came in after the Grenfell Tower fire.',
    'The cladding and insulation on new tall blocks of flats, and product certificates on building sites.'
  ],
  HR: [
    'Tall residential buildings, at least 18 metres or 7 storeys with at least two homes, get a much stricter approval process with the Building Safety Regulator as building control.',
    'The Grenfell Tower fire showed serious failings in how tall buildings were designed, built and checked. The Building Safety Act 2022 introduced checkpoints, called gateways, before building work can start and before people can move in.',
    'New tall blocks of flats, and the news about the time new high-rise projects now take to get approved.'
  ]
};
/* "Why it matters" lines for key facts, matched by question wording. More to come for B, K and M. */
const WHY = [
  [
    /^Maximum pitch of a private stair\?/,
    'Steeper than that and stairs get hard to come down safely, especially carrying something.'
  ],
  [
    /^Guarding height for an external balcony on a house\?/,
    'Higher outside, because a fall from a balcony is usually further and worse.'
  ],
  [
    /^Guarding height on an internal landing in a house\?/,
    'Higher outside, because a fall from a balcony is usually further and worse.'
  ],
  [
    /^Emergency escape window: minimum unobstructed openable area/,
    'Big enough for an adult to climb out if smoke blocks the stairs.'
  ],
  [
    /^Escape window: minimum clear height and width/,
    'Big enough for an adult to climb out if smoke blocks the stairs.'
  ],
  [/^Escape window: the bottom of the openable area/, 'Low enough to climb over in a hurry, in the dark, in smoke.'],
  [/^An accessible threshold is no more than/, 'Small enough for a wheelchair or a buggy to roll over without a ramp.'],
  [/^M4\(3\): diameter of the turning circle/, 'About the space a wheelchair needs to turn all the way round.'],
  [/^M4\(3\): turning circle in the bathroom/, 'About the space a wheelchair needs to turn all the way round.']
];
LES.forEach(l =>
  l.qs.forEach(q => {
    const w = WHY.find(([r]) => r.test(q.q));
    if (w) q.why = w[1];
  })
);
/* Beginners get one small link instead of the big GOV.UK buttons. */
function govBlock(list) {
  list = list.filter(Boolean);
  if (!list.length) return '';
  if (easy())
    return `<p class="govsmall"><a href="${esc(list[0].url)}" target="_blank" rel="noopener">Read the official document ${ARROW}</a></p>`;
  return `<div class="govs">${list.map(d => govLink(d)).join('')}</div>`;
}
/* ---------- Start here: a big, obvious first step for newcomers until The Parts is done ---------- */
function startHere() {
  const ls = LES.filter(l => l.ui === 0),
    dn = ls.filter(l => S.done[l.key]).length,
    begun = S.read[0] || dn > 0;
  return `<button class="starthere" data-sh style="${tv(0)}"><span class="shm">${mascot('happy')}</span><span class="sht"><small>${begun ? 'Carry on where you left off' : 'New here? Start here'}</small><b>${esc(UNITS[0].name)}</b><em>${begun ? `${dn} of ${ls.length} lessons done.` : 'A quick tour of what each Part of the Building Regulations covers. About 5 minutes.'}</em></span><span class="shgo">${begun ? 'Continue' : 'Start'}</span></button>`;
}
document.addEventListener('click', e => {
  const b = e.target.closest && e.target.closest('[data-sh]');
  if (!b) return;
  SFX.tap();
  openPop = -1;
  const first = LES.findIndex(l => l.ui === 0),
    next = LES.findIndex(l => l.ui === 0 && !S.done[l.key]);
  if (!S.read[0]) deck(0, S.done[LES[first].key] ? -1 : first);
  else if (next >= 0) startQuiz(next);
});
/* ---------- Mistakes: keep every wrong answer, including generated quiz questions ---------- */
function saveMistake(q) {
  if (!q || !q.id) return;
  S.mistakes[q.id] = 1;
  if (!QBY[q.id] || q.t !== QBY[q.id].t || q.q !== QBY[q.id].q) {
    const c = Object.assign({}, q);
    delete c._l;
    c._ui = L.quiz !== undefined ? L.quiz : L.idx >= 0 && LES[L.idx] ? LES[L.idx].ui : QU[q.id];
    S.mxq[q.id] = c;
    const ks = Object.keys(S.mxq);
    if (ks.length > 80)
      ks.slice(0, ks.length - 80).forEach(k => {
        delete S.mxq[k];
        if (!QBY[k]) delete S.mistakes[k];
      });
  }
}
/* ---------- Beginner mode helpers ---------- */
const BULB =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/></svg>';
/* Four figures to pick from: the right one plus believable neighbours, preferring real figures
   from the same Part with the same unit, then rounded variations of the right answer. */
function numChoices(q) {
  const v = parseFloat(q.a[0]),
    dec = (String(q.a[0]).split('.')[1] || '').length,
    step = dec
      ? Math.pow(10, -dec)
      : v >= 1000 && v % 100 === 0
        ? 100
        : v >= 100 && v % 10 === 0
          ? 10
          : v >= 10 && v % 5 === 0
            ? 5
            : 1;
  const nice = x => {
      const r = Math.round(x / step) * step;
      return +r.toFixed(dec);
    },
    seen = new Set([v]),
    pick = [];
  const add = x => {
    if (!(x > 0) || seen.has(x) || x / v > 3 || v / x > 3) return;
    seen.add(x);
    pick.push(x);
  };
  const ui = L.quiz !== undefined ? L.quiz : L.practice ? QU[q.id] : LES[L.idx] ? LES[L.idx].ui : undefined;
  const pool = LES.filter(l => ui === undefined || l.ui === ui)
    .flatMap(l => l.qs)
    .filter(o => o.t === 'num' && o.u === q.u)
    .map(o => parseFloat(o.a[0]));
  shuf(pool).forEach(x => pick.length < 2 && add(x));
  shuf([0.5, 0.75, 0.8, 1.2, 1.25, 1.5, 2, 0.9, 1.1, 0.6, 1.4]).forEach(r => pick.length < 3 && add(nice(v * r)));
  for (let k = 1; pick.length < 3 && k < 20; k++) {
    add(nice(v + k * step));
    add(nice(v - k * step));
  }
  return shuf([
    { t: fmtNum(q.a[0], q.u), ok: true },
    ...pick.slice(0, 3).map(x => ({ t: fmtNum(String(x), q.u), ok: false }))
  ]);
}
/* Hint: takes away a wrong option, places the next right tile, or makes one pair. */
function useHint() {
  if (L.locked) return;
  const q = L.cur,
    hb = $('#hint');
  SFX.tap();
  L.hints = (L.hints || 0) + 1;
  if (q.t === 'mc' || L.numMc) {
    const left = [...app.querySelectorAll('.opt[data-k]')].filter(b => !b.classList.contains('out'));
    const wrong = left.filter(b => !L.opts[+b.dataset.k].ok);
    if (left.length <= 2 || !wrong.length) {
      toast('Down to two. You’ve got this!');
      hb.disabled = true;
      return;
    }
    const b = wrong[Math.floor(Math.random() * wrong.length)];
    b.classList.add('out');
    b.disabled = true;
    b.classList.remove('sel');
    if (L.sel === +b.dataset.k) {
      L.sel = null;
      $('#ck').disabled = true;
    }
    if (left.length - 1 <= 2) hb.disabled = true;
    return;
  }
  if (q.t === 'spot') {
    app.querySelectorAll('.spw:not(.n)').forEach(b => {
      b.classList.add('out');
      b.classList.remove('sel');
      if (L.sel === +b.dataset.sp) {
        L.sel = null;
        $('#ck').disabled = true;
      }
    });
    hb.disabled = true;
    toast('Only the figures are left to check');
    return;
  }
  if (q.t === 'build') {
    const i = L.fill.findIndex((f, k) => !f || f.t !== q.a[k]);
    if (i < 0) return;
    const t = L.bank.find(b => b.t === q.a[i] && L.fill.indexOf(b) < 0) || L.bank.find(b => b.t === q.a[i]);
    if (!t) return;
    const was = L.fill.indexOf(t);
    if (was >= 0) L.fill[was] = null;
    L.fill[i] = t;
    drawBuild();
    if (!L.fill.some((f, k) => !f || f.t !== q.a[k])) hb.disabled = true;
    return;
  }
  if (q.t === 'match') {
    const l = [...app.querySelectorAll('.opt[data-s=l]')].find(
      b => !b.classList.contains('good') && !b.classList.contains('gone')
    );
    if (!l) return;
    const r = app.querySelector(`.opt[data-s=r][data-k="${l.dataset.k}"]`);
    tapMatch(l);
    if (r) tapMatch(r);
  }
}
/* First open: ask how much they already know. */
function welcome() {
  view = 'welcome';
  app.innerHTML = `<div class="end wel"><div class="grow"><div class="big">${mascot('happy')}</div><h1>Welcome!</h1><p>How well do you know the Building Regulations already?</p>
<button class="lvl" data-lv="new"><b>I’m new to this</b><span>Gentle mode: you never lose hearts, figures are multiple choice, and there’s a hint button when you’re stuck.</span></button>
<button class="lvl" data-lv="std"><b>I know my way around</b><span>Standard mode: hearts, typed figures and no hints. A proper test.</span></button>
<p class="small" style="margin-top:14px">You can change this any time in Profile.</p></div></div>`;
  app.querySelectorAll('[data-lv]').forEach(
    b =>
      (b.onclick = () => {
        SFX.tap();
        S.level = b.dataset.lv;
        save();
        view = 'learn';
        render();
        scrollTo(0, 0);
        if (S.level === 'new') toast('Beginner mode on. Take your time!');
      })
  );
}
/* ---------- casual search ----------
   Type roughly what you're after ("how high does a banister need to be", "fire dor").
   Everyday words map to regs terms, typos are forgiven, metres and millimetres are treated
   as the same figure, and "part m" narrows to one Part. Results jump to the fact in the Library. */
