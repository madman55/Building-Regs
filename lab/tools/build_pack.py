"""Turn extract_ad.py output into a document pack the app loads (adb1.json etc.).

Usage:
    python3 build_pack.py RAW.json CODE OUT_DIR

RAW.json  output of extract_ad.py (blocks + pagemap, images as file paths)
CODE      the document's key in documents.json (K, B1, B2 ...)
OUT_DIR   folder to write the pack into (normally the app folder)

What it does:
  1. Copies the document details (title, edition, PDF name, GOV.UK links, licence line) from documents.json.
  2. Embeds each table/diagram image as WebP data so search works offline with no extra files.
  3. Drops working fields the app doesn't use (image width/height).
"""
import base64, json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))


def build(raw_path, code, out_dir):
    docs = json.load(open(os.path.join(HERE, 'documents.json'), encoding='utf-8'))
    if code not in docs:
        sys.exit(f'{code} is not in documents.json. Add its details there first.')
    head = dict(docs[code])
    out_name = head.pop('out')
    raw = json.load(open(raw_path, encoding='utf-8'))
    blocks = []
    for b in raw['blocks']:
        b = dict(b)
        b.pop('iw', None)
        b.pop('ih', None)
        img = b.get('img')
        if img and not img.startswith('data:'):
            path = img if os.path.isabs(img) else os.path.join(os.path.dirname(raw_path), img)
            with open(path, 'rb') as f:
                b['img'] = 'data:image/webp;base64,' + base64.b64encode(f.read()).decode()
        blocks.append(b)
    pack = dict(head)
    if raw.get('pagemap'):
        pack['pagemap'] = raw['pagemap']
    pack['blocks'] = blocks
    out = os.path.join(out_dir, out_name)
    with open(out, 'w', encoding='utf-8') as f:
        json.dump(pack, f, ensure_ascii=False, separators=(',', ':'))
    kinds = {}
    for b in blocks:
        kinds[b['k']] = kinds.get(b['k'], 0) + 1
    print(f'{out}: {len(blocks)} blocks {kinds}, {os.path.getsize(out) / 1e6:.1f} MB')


if __name__ == '__main__':
    if len(sys.argv) != 4:
        sys.exit(__doc__)
    build(*sys.argv[1:])
