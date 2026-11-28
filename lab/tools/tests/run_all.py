"""Runs the reliable browser tests, as GitHub Actions does on every pull request.
Each test gets one retry, because a busy machine can make a timing-sensitive step miss once.
Usage (from the Lab folder):  APP_DIR=. SITE_DIR=/path/with/Building-Regs python3 tools/tests/run_all.py
Not included: fmt, mist, match, quiz2, which drive the quiz through an older helper and are run by hand."""
import os, subprocess, sys
HERE = os.path.dirname(os.path.abspath(__file__))
GATES = ['lessons', 'learn_lab', 'reference', 'side_by_side']
SMOKE = ['offline', 'adk', 'adb']
def run(name):
    p = subprocess.run([sys.executable, os.path.join(HERE, name + '.py')], capture_output=True, text=True, timeout=600)
    out = p.stdout + p.stderr
    if name in GATES: ok = 'GATE PASSED' in out
    else: ok = p.returncode == 0 and 'errors []' in out
    return ok, out
failed = []
for name in GATES + SMOKE:
    ok, out = run(name)
    if not ok:
        print(f'{name}: failed once, retrying'); ok, out = run(name)
    print(f'{"PASS" if ok else "FAIL"} {name}')
    if not ok: failed.append(name); print('\n'.join(l for l in out.splitlines() if l.startswith('FAIL') or 'Error' in l)[:3000])
sys.exit(1 if failed else 0)
