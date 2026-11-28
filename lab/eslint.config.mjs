/* ESLint for the Lab. Catches real mistakes (undefined names, unreachable code, duplicate keys and the like).
   Style is left to Prettier. The main app is split into js/*.js files that share one global scope, so their
   top-level names are read from the files and declared as globals here. */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const req = createRequire(import.meta.url);
let espree;
try {
  espree = req('espree');
} catch {
  espree = createRequire(req.resolve('eslint'))('espree');
}
const here = path.dirname(new URL(import.meta.url).pathname);
// top-level names declared in each js/ file; each file sees the other files' names as globals
const declaredIn = {};
for (const f of fs.readdirSync(path.join(here, 'js'))) {
  const ast = espree.parse(fs.readFileSync(path.join(here, 'js', f), 'utf8'), { ecmaVersion: 'latest' });
  const own = (declaredIn[f] = {});
  for (const n of ast.body) {
    if (n.type === 'FunctionDeclaration') own[n.id.name] = 'writable';
    if (n.type === 'VariableDeclaration')
      for (const d of n.declarations) if (d.id.type === 'Identifier') own[d.id.name] = 'writable';
  }
}
const othersOf = f =>
  Object.assign(
    {},
    ...Object.entries(declaredIn)
      .filter(([g]) => g !== f)
      .map(([, v]) => v)
  );
const appGlobals = othersOf(null);
const names = list => Object.fromEntries(list.map(n => [n, 'readonly']));
const browser = names(
  'window document navigator location history screen localStorage sessionStorage indexedDB IDBKeyRange caches console fetch Request Response Headers URL URLSearchParams Blob File FileReader Worker AbortController setTimeout clearTimeout setInterval clearInterval requestAnimationFrame cancelAnimationFrame queueMicrotask performance Image Audio AudioContext webkitAudioContext HTMLElement Element Node Event CustomEvent KeyboardEvent getComputedStyle matchMedia innerWidth innerHeight devicePixelRatio scrollTo IntersectionObserver ResizeObserver MutationObserver DOMParser TextEncoder TextDecoder crypto structuredClone alert confirm btoa atob self scrollY scrollX addEventListener removeEventListener'.split(
    ' '
  )
);
const lab = names('LAB LABREF LABQ LABL LAB_HUNTS APPX REG_UNITS REG_ART claude'.split(' '));
const rules = {
  'no-undef': 'error',
  'no-unused-vars': ['warn', { vars: 'local', args: 'none', caughtErrors: 'none' }],
  'no-redeclare': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-dupe-args': 'error',
  'no-unreachable': 'error',
  'no-const-assign': 'error',
  'no-func-assign': 'error',
  'no-self-assign': 'error',
  'no-unsafe-negation': 'error',
  'use-isnan': 'error',
  'valid-typeof': 'error',
  'no-sparse-arrays': 'error',
  'no-unsafe-finally': 'error',
  'no-obj-calls': 'error',
  'no-invalid-regexp': 'error',
  'no-loss-of-precision': 'error',
  'no-debugger': 'error',
  'getter-return': 'error',
  'no-cond-assign': ['warn', 'except-parens']
};
export default [
  { ignores: ['pdfjs.js', 'pdfjs-worker.js', 'node_modules/**', 'eslint.config.mjs'] },
  ...Object.keys(declaredIn).map(f => ({
    files: ['js/' + f],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'script', globals: { ...browser, ...lab, ...othersOf(f) } },
    rules
  })),
  {
    files: ['art.js', 'data.js', 'features.js', 'lab-*.js', 'tools/tests/step.js', 'tools/pdf-viewer-polyfill.js'],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'script', globals: { ...browser, ...lab, ...appGlobals } },
    rules
  },
  {
    files: ['sw.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: names('self caches clients fetch location console URL Promise'.split(' '))
    },
    rules
  },
  {
    files: ['tools/check_refs.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: names('require module process console __dirname global window'.split(' '))
    },
    rules
  }
];
