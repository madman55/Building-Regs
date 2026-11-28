/* Building Regs Trainer: fills in newer browser features the PDF viewer relies on, for phones whose browser hasn't caught up yet. */
(() => {
  const d = (o, k, v) => {
    if (o && !(k in o)) Object.defineProperty(o, k, { value: v, writable: true, configurable: true });
  };
  for (const M of [typeof Map !== 'undefined' && Map, typeof WeakMap !== 'undefined' && WeakMap]) {
    if (!M) continue;
    const P = M.prototype;
    d(P, 'getOrInsert', function (k, v) {
      if (!this.has(k)) this.set(k, v);
      return this.get(k);
    });
    d(P, 'getOrInsertComputed', function (k, f) {
      if (!this.has(k)) this.set(k, f(k));
      return this.get(k);
    });
  }
  d(Math, 'sumPrecise', function (it) {
    let s = 0,
      c = 0;
    for (const x of it) {
      const t = s + x;
      c += Math.abs(s) >= Math.abs(x) ? s - t + x : x - t + s;
      s = t;
    }
    return s + c;
  });
  d(Promise, 'withResolvers', function () {
    let resolve, reject;
    const promise = new this((a, b) => {
      resolve = a;
      reject = b;
    });
    return { promise, resolve, reject };
  });
  d(Promise, 'try', function (f, ...a) {
    return new this(r => r(f(...a)));
  });
  const U = Uint8Array;
  d(U.prototype, 'toHex', function () {
    let s = '';
    for (let i = 0; i < this.length; i++) s += this[i].toString(16).padStart(2, '0');
    return s;
  });
  d(U, 'fromHex', function (h) {
    const a = new U(h.length >> 1);
    for (let i = 0; i < a.length; i++) a[i] = parseInt(h.substr(i * 2, 2), 16);
    return a;
  });
  d(U.prototype, 'toBase64', function () {
    let s = '';
    for (let i = 0; i < this.length; i += 32768) s += String.fromCharCode.apply(null, this.subarray(i, i + 32768));
    return btoa(s);
  });
  d(U, 'fromBase64', function (b) {
    const s = atob(String(b).replace(/[\s]/g, ''));
    const a = new U(s.length);
    for (let i = 0; i < s.length; i++) a[i] = s.charCodeAt(i);
    return a;
  });
  if (typeof Response !== 'undefined')
    d(Response.prototype, 'bytes', async function () {
      return new U(await this.arrayBuffer());
    });
  if (typeof Blob !== 'undefined')
    d(Blob.prototype, 'bytes', async function () {
      return new U(await this.arrayBuffer());
    });
})();
