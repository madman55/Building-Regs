() => {
  window.__K = window.__K || {};
  const K = window.__K,
    $ = s => document.querySelector(s),
    A = s => [...document.querySelectorAll(s)];
  const qt = () =>
    (($('.say h2') || {}).textContent || '') +
    '|' +
    (($('#sen') || {}).textContent || '').replace(/\s+/g, ' ').slice(0, 40);
  if (!$('.ls')) return 'left';
  if ($('.cb')) {
    $('.cb[data-c="sure"]').click();
    return 'confidence';
  }
  if ($('.hqcard')) {
    window.LAB && LAB.on && 0;
    return 'hunt';
  }
  const foot = A('.foot .btn').pop();
  if (foot && foot.id !== 'ck' && !foot.disabled && foot.offsetParent) {
    const m = document.body.innerText.match(/Correct answer: ([^\n]+)/);
    if (m && window.__q) K[window.__q] = m[1].trim();
    foot.click();
    return 'continue';
  }
  window.__q = qt();
  const ans = K[window.__q];
  if ($('.spot')) {
    const key = 'spot:' + $('.spot').textContent;
    const tried = K[key] || [];
    let cand = [-1].concat(A('.spw.n').map(b => +b.dataset.sp)).find(k => !tried.includes(k));
    if (cand === undefined) cand = tried[tried.length - 1];
    K[key] = tried.concat([cand]);
    const b = $(`[data-sp="${cand}"]`);
    b.click();
    $('#ck').click();
    return 'spot';
  }
  if ($('.mgrid')) {
    const l = A('.opt[data-s=l]').find(
      b => !b.disabled && !b.classList.contains('gone') && !b.classList.contains('good')
    );
    if (!l) return 'match-wait';
    l.click();
    const r = A('.opt[data-s=r]').find(b => b.dataset.k === l.dataset.k);
    r && r.click();
    return 'match';
  }
  if ($('#ni') && !$('#ni').readOnly) {
    $('#ni').value = ans ? (ans.match(/[\d.]+/) || ['1'])[0] : '1';
    $('#ni').dispatchEvent(new Event('input'));
    $('#ck').click();
    return 'num';
  }
  if ($('#bank') && $('#ck') && $('#ck').disabled) {
    let t = $('[data-b]');
    if (ans) {
      const filled = A('#sen .tile').map(x => x.textContent);
      let pos = 0;
      for (const f of filled) {
        const i = ans.indexOf(f, pos);
        if (i >= 0) pos = i + f.length;
      }
      const c = A('[data-b]')
        .map(x => ({ x, i: ans.indexOf(x.textContent, pos) }))
        .filter(o => o.i >= 0)
        .sort((a, b) => a.i - b.i)[0];
      if (c) t = c.x;
    }
    if (t) {
      t.click();
      return 'build-tile';
    }
  }
  if ($('#bank') && $('#ck') && !$('#ck').disabled) {
    $('#ck').click();
    return 'build-check';
  }
  let o = $('.opt[data-k]');
  if (ans) {
    const f = A('.opt[data-k]').find(b => b.textContent.replace(/^\d/, '').trim() === ans);
    if (f) o = f;
  }
  if (o && $('#ck')) {
    o.click();
    $('#ck').click();
    return 'choice';
  }
  return 'idle';
};
