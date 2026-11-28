/* Building Regs Lab: one on/off switch per experiment.
   Each experiment checks LAB.on('<id>') before doing anything, so switching it off returns the app to normal.
   ready:false = not built yet (shown as "coming" on the Profile screen). dflt:true = on until switched off.
   Switches are saved on the phone only.
   reports: show "Report a problem" links (off: feedback is gathered informally for now).
   reportTo: an email address for those links. Left empty, they open a GitHub issue instead. */
window.LAB = (function () {
  const KEY = 'regs-lab-features';
  const LIST = [
    {
      id: 'reference',
      name: 'Reference upgrades',
      about: 'Saved items, document status, content labels, report a problem',
      phase: 1,
      ready: true,
      dflt: true
    },
    {
      id: 'hunter',
      name: 'Regulation Hunter',
      about: 'Find the paragraph that answers a real question',
      phase: 2,
      ready: true,
      dflt: true
    },
    {
      id: 'reframe',
      name: 'Where would you check?',
      about: 'Most type-the-figure questions ask where the figure lives instead',
      phase: 3,
      ready: true,
      dflt: true
    },
    {
      id: 'confidence',
      name: 'Confidence check',
      about: 'Say how sure you are; checking never costs a heart',
      phase: 3,
      ready: true,
      dflt: true
    },
    {
      id: 'lessons',
      name: 'Lessons',
      about: 'Teaching lessons with drawings, an experiment and the real document',
      phase: 'T1',
      ready: true,
      dflt: true
    },
    { id: 'cases', name: 'Case files', about: 'Short fictional projects to investigate', phase: 4, ready: false }
  ];
  let st = {};
  try {
    st = JSON.parse(localStorage.getItem(KEY) || '{}') || {};
  } catch (e) {
    st = {};
  }
  const find = id => LIST.find(f => f.id === id);
  return {
    reports: false,
    reportTo: '',
    list: LIST,
    on(id) {
      const f = find(id);
      return !!(f && f.ready && (id in st ? st[id] : !!f.dflt));
    },
    set(id, v) {
      st[id] = !!v;
      try {
        localStorage.setItem(KEY, JSON.stringify(st));
      } catch (e) {}
    }
  };
})();
