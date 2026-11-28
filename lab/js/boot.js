/* Building Regs Lab · Start-up: the opening animation, first render, the bridge for Lab modules (window.APPX) and offline support.
   Part of the main app script, split by area. Files are loaded in order by index.html and share one global scope:
   core, screens, quiz, beginner, search, official, semantic, search-ui, boot. */
function splash() {
  if (!A) return;
  const books = [
    [
      0,
      [
        ['#ff4b4b', 16, 62],
        ['#2b45ff', 20, 70],
        ['#58cc02', 14, 56],
        ['#ff9600', 18, 66],
        ['#ce82ff', 16, 60]
      ]
    ],
    [
      1,
      [
        ['#1cb0f6', 18, 68],
        ['#ffc800', 14, 58],
        ['#ff4b4b', 20, 72],
        ['#58cc02', 16, 62],
        ['#2b45ff', 14, 54]
      ]
    ],
    [
      2,
      [
        ['#ff9600', 20, 64],
        ['#ce82ff', 16, 70],
        ['#1cb0f6', 18, 60],
        ['#ff4b4b', 14, 56],
        ['#58cc02', 18, 66]
      ]
    ],
    [
      3,
      [
        ['#2b45ff', 16, 58],
        ['#ff9600', 18, 70],
        ['#ffc800', 14, 62],
        ['#1cb0f6', 20, 66],
        ['#ce82ff', 16, 60]
      ]
    ]
  ];
  const shelf = books
    .map(([r, row]) => {
      let x = r === 0 ? 232 : 200;
      const fy = 180 + r * 90;
      return row
        .map(([c, w, hh]) => {
          const g = `<rect x="${x}" y="${fy - hh}" width="${w}" height="${hh}" rx="3" fill="${c}"/><rect x="${x + 3}" y="${fy - hh + 10}" width="${w - 6}" height="4" rx="2" fill="#ffffff55"/>`;
          x += w + 3;
          return g;
        })
        .join('');
    })
    .join('');
  const rungs = Array.from(
    { length: 9 },
    (_, i) => `<rect x="146" y="${142 + i * 40}" width="38" height="6" rx="3" fill="#8a5426"/>`
  ).join('');
  const sp = (x, y, d) =>
    `<path class="spark" style="animation-delay:${d}s" d="M${x} ${y - 9}l2.5 6.5 6.5 2.5-6.5 2.5-2.5 6.5-2.5-6.5-6.5-2.5 6.5-2.5z" fill="#fff"/>`;
  const el = document.createElement('div');
  el.id = 'splash';
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', 'Building Regs Trainer');
  el.innerHTML = `<div class="sicon"><div class="tile"></div><div class="im">${A.mascot('happy')}</div></div><div class="sbody"><svg class="scene0" viewBox="0 0 360 500" aria-hidden="true">
<ellipse cx="190" cy="486" rx="170" ry="12" fill="#00000018"/>
<rect x="186" y="80" width="150" height="406" rx="10" fill="#8a5426"/><rect x="196" y="90" width="130" height="390" rx="5" fill="#5e3818"/>
${[180, 270, 360, 450].map(y => `<rect x="190" y="${y}" width="142" height="10" rx="3" fill="#a8693a"/>`).join('')}
${shelf}
<circle class="glow" cx="214" cy="146" r="46" fill="url(#sg)"/>
<rect x="140" y="110" width="8" height="378" rx="4" fill="#a8693a"/><rect x="182" y="110" width="8" height="378" rx="4" fill="#a8693a"/>${rungs}
<g class="climber"><g class="wiggle"><svg class="tgt" x="128" y="400" width="74" height="83" viewBox="0 0 100 112">${A.mascot(
    'happy'
  )
    .replace(/^<svg[^>]*>/, '')
    .replace(/<\/svg>$/, '')}</svg></g></g>
<g class="gbook"><rect x="202" y="108" width="24" height="72" rx="3" fill="#ffc800" stroke="#d9a300" stroke-width="2"/><rect x="206" y="120" width="16" height="4" rx="2" fill="#fff"/><rect x="206" y="160" width="16" height="4" rx="2" fill="#fff"/><path d="M209 140l4 4 7-8" stroke="#15171a" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
${sp(250, 100, 2.3)}${sp(180, 96, 2.45)}${sp(232, 72, 2.6)}
<defs><radialGradient id="sg"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset=".5" stop-color="#fff6b0" stop-opacity=".6"/><stop offset="1" stop-color="#fff6b0" stop-opacity="0"/></radialGradient></defs>
</svg><div class="stitle">Building Regs</div><div class="ssub">Approved Documents trainer</div></div><div class="skip">Tap to skip</div>`;
  document.body.appendChild(el);
  let gone = false;
  const end = () => {
    if (gone) return;
    gone = true;
    el.classList.add('out');
    setTimeout(() => el.remove(), 480);
  };
  el.addEventListener('click', end);
  const rm = matchMedia('(prefers-reduced-motion: reduce)').matches,
    im = el.querySelector('.im'),
    ic = el.querySelector('.sicon');
  if (rm) {
    el.classList.add('shown', 'go');
    ic.remove();
    setTimeout(end, 900);
    return;
  }
  /* 1: the app icon pops in. 2: the icon's mascot glides down to the foot of the ladder as the scene appears. 3: the climb. */
  setTimeout(() => {
    if (gone) return;
    el.classList.add('shown');
    try {
      const a = im.getBoundingClientRect(),
        b = el.querySelector('.tgt').getBoundingClientRect(),
        k = b.width / a.width;
      im.animate(
        [
          { transform: 'none' },
          {
            transform: `translate(${b.left + b.width / 2 - (a.left + a.width / 2)}px,${b.top + b.height / 2 - (a.top + a.height / 2)}px) scale(${k})`
          }
        ],
        { duration: 520, easing: 'cubic-bezier(.5,0,.3,1)', fill: 'forwards' }
      );
    } catch (e) {}
    setTimeout(() => {
      if (gone) return;
      el.classList.add('go');
      ic.remove();
    }, 540);
  }, 1000);
  setTimeout(end, 5300);
}
splash();
render();
cloud();
govFetch();
setTimeout(() => {
  if (SEM.state === 'off') startSemantic();
}, 7000); /* Bridge for the Lab's separate modules (lab-*.js): read-only access to the app's helpers and live state. */
window.APPX = {
  get OFF() {
    return OFF;
  },
  get DV() {
    return DV;
  },
  get GOV() {
    return GOV;
  },
  get L() {
    return L;
  },
  get S() {
    return S;
  },
  get view() {
    return view;
  },
  OFF_READY,
  runSearch,
  isOfficial,
  hl,
  mascot,
  addXp,
  save,
  easy,
  verdict,
  render,
  shuf,
  SFX,
  SEARCHIC,
  LES,
  UNITS,
  GKEY,
  docOf,
  adkLabel,
  ppOf,
  sheet,
  openOfficial,
  toast,
  drawResults,
  answerOf,
  refDoc,
  apiPath,
  esc,
  ARROW,
  I
};
if ('serviceWorker' in navigator && location.protocol === 'https:')
  navigator.serviceWorker
    .register('sw.js')
    .then(() => navigator.serviceWorker.ready)
    .then(r =>
      setTimeout(() => {
        const c = navigator.connection;
        if (!(c && c.saveData) && r.active) r.active.postMessage('keep-docs');
      }, 5000)
    )
    .catch(() => {});
