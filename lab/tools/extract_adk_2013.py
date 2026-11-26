"""Extract Approved Document K into searchable blocks with page positions.
Blocks: requirement, para (numbered or unnumbered text under a heading), table, diagram, term.
Every block keeps boxes [pdfPage, x0, top, x1, bottom] so the app can highlight it on the official page."""
import pdfplumber, re, json, sys, collections
SRC=sys.argv[1]; OUT=sys.argv[2]
pdf=pdfplumber.open(SRC)
OFFSET=10                       # printed page = PDF page - 10
FIRST,LAST=13,63                # Requirement K1 .. Appendix B (PDF pages, 1-based)
CAP=re.compile(r'^(Diagram|Table)\s+(\d+\.\d+)\s+(.+)$')
NUM=re.compile(r'^(\d+\.\d+)\s+(.*)$')
blocks=[];sec='';sub='';cur=None
def size(l):return collections.Counter(round(c['size']) for c in l['chars']).most_common(1)[0][0]
def font(l):return l['chars'][0]['fontname'].split('+')[-1]
def box(pg,l):return [pg,round(l['x0'],1),round(l['top'],1),round(l['x1'],1),round(l['bottom'],1)]
def new(kind,**kw):
    global cur
    b=dict(k=kind,sec=sec,sub=sub,text='',boxes=[],**kw);blocks.append(b);cur=b;return b
def add(b,pg,l,txt=None):
    t=(txt if txt is not None else l['text']).strip()
    if not t:return
    if b['text'] and b['text'].endswith('-') and not b['text'].endswith(' -'):b['text']=b['text'][:-1]+t
    else:b['text']=(b['text']+' '+t).strip()
    b['boxes'].append(box(pg,l))
    b.setdefault('pg',pg)

for pg in range(FIRST,LAST+1):
    page=pdf.pages[pg-1].dedupe_chars()
    H=page.height
    lines=[l for l in page.extract_text_lines() if 60<l['top']<790]
    # --- key terms (two columns, blocks separated by bigger gaps)
    if pg in (61,62):
        sec='Appendix A: Key terms';sub=''
        for (x0,x1) in ((50,312),(312,570)):
            col=[l for l in page.crop((x0,60,x1,790)).extract_text_lines() if 60<l['top']<790 and size(l)==12 and not l['text'].startswith('The following are key terms')]
            prev=None
            for l in col:
                gap=l['top']-prev['bottom'] if prev else 99
                if gap>4.5 and not (cur and cur['k']=='term' and cur['text']=='' ):
                    b=new('term',title=l['text'].strip());b['pg']=pg;b['boxes'].append(box(pg,l))
                else:add(cur,pg,l)
                prev=l
        sec='Appendix A: Key terms';continue
    # --- requirement pages: two-column legal text between "Requirements" and "Performance"
    rq=[l for l in lines if size(l)>=20 and l['text'].startswith('Requirement')]
    skip=(0,0)
    if rq:
        sec=' '.join(l['text'] for l in lines if size(l)>=20).strip();sub=''
        r0=next((l for l in lines if size(l) in (15,) and l['text'].strip()=='Requirements'),None)
        p0=next((l for l in lines if size(l) in (15,) and l['text'].strip()=='Performance'),None)
        if r0 and p0:
            top,bot=r0['bottom']+2,p0['top']-2;skip=(r0['top']-1,p0['top']-1)
            lim=[w for w in page.extract_words() if w['text']=='Limits' and r0['bottom']<w['top']<p0['top']]
            split=(lim[0]['x0']-4) if lim else 310
            for name,(x0,x1) in (('Requirement',(30,split)),('Limits on application',(split,570))):
                col=[l for l in page.crop((x0,top,x1,bot)).extract_text_lines() if size(l) in (10,11,12) and 'Times' not in l['chars'][0]['fontname']]
                if not col:continue
                b=new('req',title=f"{sec.split(':')[0]} · {name}")
                for l in col:add(b,pg,l)
            cur=None
    # captions and regions
    caps=[l for l in lines if CAP.match(l['text'].strip()) and size(l)==12 and ('Medium' in font(l) or 'Bold' in font(l))]
    prevBottom=60
    i=0
    while i<len(lines):
        l=lines[i];t=l['text'].strip();s=size(l);f=font(l)
        if skip[0]<=l['top']<skip[1] or (rq and s>=20):
            prevBottom=l['bottom'];i+=1;continue
        if s>=20:  # section title (may wrap)
            parts=[t]
            while i+1<len(lines) and size(lines[i+1])>=20:i+=1;parts.append(lines[i]['text'].strip())
            sec=' '.join(parts);sub='';cur=None;prevBottom=lines[i]['bottom'];i+=1;continue
        if s in (14,15,16) and ('Bold' in f or 'Semibold' in f):
            sub=t;cur=None;prevBottom=l['bottom'];i+=1;continue
        m=CAP.match(t)
        if m and s==12 and ('Medium' in f or 'Bold' in f) and 'Semibold' not in f:
            kind,num,title=m.group(1),m.group(2),m.group(3)
            if kind=='Table':
                # table: caption then following smaller lines until next body line or heading
                j=i+1;rows=[]
                while j<len(lines) and size(lines[j])<12:rows.append(lines[j]);j+=1
                b=new('table',num=num,title=title);b['pg']=pg
                b['text']=' '.join(r['text'].strip() for r in rows)
                b['boxes']=[box(pg,l)]+[box(pg,r) for r in rows]
                b['crop']=[pg,30,l['top']-6,568,(rows[-1]['bottom'] if rows else l['bottom'])+8]
                cur=None;prevBottom=b['crop'][4];i=j;continue
            # diagram: everything since the last body/heading line, plus the caption
            inner=[x for x in lines[:i] if x['top']>=prevBottom-1 and not (size(x)==12 and 'Light' not in font(x) and NUM.match(x['text']))]
            objs=[o for o in page.curves+page.rects+page.lines+page.images if o['top']>=prevBottom-1 and o['bottom']<=l['top']+1]
            ys=[o['top'] for o in objs]+[x['top'] for x in inner]
            y0=min(ys) if ys else prevBottom
            b=new('diagram',num=num,title=title);b['pg']=pg
            b['text']=' '.join(x['text'].strip() for x in inner if size(x)<12 or x['text'].startswith('See para'))
            b['boxes']=[box(pg,l)]
            b['crop']=[pg,28,max(60,y0-6),570,l['bottom']+6]
            cur=None;prevBottom=l['bottom'];i+=1;continue
        if s==12 and f.endswith('Bold') and not NUM.match(t) and len(t)<70:
            base=sub.split(' · ')[0];sub=base+' · '+t;cur=None;prevBottom=l['bottom'];i+=1;continue
        if s==12 and not t.startswith('See para'):
            # body text — skip if it sits inside a diagram region that ends in a caption below
            nextcap=next((c for c in caps if c['top']>l['top']),None)
            inDiagram=False
            if nextcap and size(l)==12 and 'Light' in f and l['x0']>70:
                # body lines in K start at x≈34/57 (para) or ≈79/96 (lists); diagram tags are elsewhere
                pass
            m=NUM.match(t)
            firstFont=l['chars'][0]['fontname']
            if m and ('Semibold' in firstFont or 'Bold' in firstFont):
                b=new('para',num=m.group(1));add(b,pg,l,m.group(2))
            else:
                if cur is None or cur['k'] not in ('para','text'):
                    new('text')
                add(cur,pg,l)
            prevBottom=l['bottom'];i+=1;continue
        # small text not in a captioned region: diagram label (handled when the caption arrives) or footnote
        i+=1
    # body continues to next page only if the next page doesn't open with a heading (handled naturally: cur persists)

# tidy
out=[];n=0
for b in blocks:
    b['text']=re.sub(r'\s+',' ',b['text']).strip()
    if b['k'] in ('text','para') and len(b['text'])<3:continue
    if b['k']=='term' and not b['text']:continue
    n+=1;b['id']=f"k{n}";b['pp']=b['pg']-OFFSET
    out.append(b)
json.dump(out,open(OUT,'w'),ensure_ascii=False,indent=0)
c=collections.Counter(b['k'] for b in out);print(dict(c),'blocks',len(out))
