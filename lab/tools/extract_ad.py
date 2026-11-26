"""General Approved Document extractor (built for AD B 2019 edition layout; also copes with AD K style).
Output blocks: req, para, text, table (incl. continued pages), diagram, term — each with page, printed page,
positions for highlighting, section/heading context, and the page's 2029 status banner if any."""
import pdfplumber, re, json, sys, collections
SRC,OUT,FIRST,LAST,CTX=sys.argv[1],sys.argv[2],int(sys.argv[3]),int(sys.argv[4]),sys.argv[5]
pdf=pdfplumber.open(SRC)
CAP=re.compile(r'^(Diagram|Table)\s+([A-Z]?\d+(?:\.\d+)?[a-z]?)\s+(\S.*)$')
NUM=re.compile(r'^([A-Z]?\d+\.\d+[a-z]?|[A-G]\d{1,2})\s+(.*)$')
blocks=[];sec='';grp='';sub='';cur=None;pagemap={}
def size(l):return collections.Counter(round(c['size']) for c in l['chars']).most_common(1)[0][0]
def font(l):return l['chars'][0]['fontname'].split('+')[-1]
def box(pg,l):return [pg,round(l['x0'],1),round(l['top'],1),round(l['x1'],1),round(l['bottom'],1)]
def subl():return ' · '.join(x for x in (grp,sub) if x)
def new(kind,pg,status,**kw):
    global cur
    b=dict(k=kind,sec=sec,sub=subl(),text='',boxes=[],pg=pg,st=status,**kw);blocks.append(b);cur=b;return b
def add(b,pg,l,txt=None):
    t=(txt if txt is not None else l['text']).strip()
    if not t:return
    if b['text'].endswith('-') and not b['text'].endswith(' -'):b['text']=b['text'][:-1]+t
    else:b['text']=(b['text']+' '+t).strip()
    b['boxes'].append(box(pg,l))
def fix(t):  # pdf ligature quirks: "F ire" / "W indows" / "T he" (drop-cap spacing) and missing 'fi' glyph
    t=re.sub(r'\b([B-HJ-Z]) (?=[a-z]{2,})',r'\1',t)
    return t
keyterms=False
for pg in range(FIRST,LAST+1):
    page=pdf.pages[pg-1].dedupe_chars()
    raw=page.extract_text_lines()
    for l in raw: l['text']=fix(l['text'])
    status='now'
    for l in raw:
        if 60<l['top']<95 and 'Effective until 1 September 2029' in l['text']:status='until2029'
        if 60<l['top']<95 and '2029 amendment' in l['text'] and 'effective from' in l['text']:status='from2029'
    foot=[l for l in raw if l['top']>795 and re.fullmatch(r'\d{1,3}',l['text'].strip())]
    pp=int(foot[0]['text']) if foot else None
    pagemap[pg]=pp
    lines=[l for l in raw if 60<l['top']<795 and not ('2029' in l['text'] and l['top']<95 and ('Effective until' in l['text'] or 'effective from' in l['text']))]
    fills=[r for r in page.rects if r.get('fill') and r['width']>150 and r['height']>35]
    # ---- major headings first: appendix A switches to key-term mode
    tops=[l for l in lines if size(l)>=24]
    if tops:
        t0=' '.join(x['text'].strip() for x in tops)
        keyterms=t0.startswith('Appendix A') and 'Key terms' in t0
    if keyterms:
        if tops: sec=' '.join(x['text'].strip() for x in tops);grp=sub=''
        top0=max([x['bottom'] for x in tops],default=60)
        occ=[0]*int(page.width+1)
        for c in page.chars:
            if c['top']>top0 and c['top']<795 and round(c['size'])==12:
                for x in range(int(c['x0']),int(c['x1'])+1):occ[min(x,len(occ)-1)]+=1
        cands=[x for x in range(250,350) if occ[x]==0]
        mid=min(cands,key=lambda x:abs(x-page.width/2)) if cands else page.width/2+8
        for (x0,x1) in ((0,mid),(mid,page.width)):
            col=[l for l in page.crop((x0,top0+2,x1,795)).extract_text_lines() if size(l)==12 and not CAP.match(fix(l['text']).strip()) and not any(r['top']-2<=l['top']<=r['bottom']+2 and r['x0']-5<=l['x0']<=r['x1'] for r in fills)]
            semi=any('Semibold' in c['fontname'] or c['fontname'].endswith('Bold') for l in col for c in l['chars'][:1])
            prev=None
            for l in col:
                l['text']=fix(l['text'])
                ch=l['chars'];nb=0
                for c in ch:
                    if 'Semibold' in c['fontname'] or c['fontname'].endswith('Bold'):nb+=1 if c['text'].strip() else 0
                    else:break
                lead='';k=0
                for c in l['text']:
                    if k>=nb:break
                    lead+=c;k+=1 if c.strip() else 0
                lead=lead.strip()
                gap=l['top']-prev['bottom'] if prev else 99
                if semi:
                    if lead and not lead.startswith('NOTE'):
                        b=new('term',pg,status,title=lead.lstrip('*').strip());add(b,pg,l,l['text'][len(lead):].strip() if l['text'].startswith(lead) else l['text'])
                        b['boxes'][-1:]=[box(pg,l)]
                    elif cur and cur['k']=='term':add(cur,pg,l)
                else:
                    if gap>4.5:b=new('term',pg,status,title=l['text'].strip());b['boxes'].append(box(pg,l))
                    elif cur and cur['k']=='term':add(cur,pg,l)
                prev=l
        for l in lines:
            m=CAP.match(l['text'].strip())
            fr=[r for r in fills if 0<=l['top']-r['bottom']<=45]
            if m and m.group(1)=='Diagram' and fr and size(l)==12:
                r=max(fr,key=lambda r:r['bottom']);inner=[x for x in raw if r['top']-2<=x['top']<=l['top'] and size(x)<12]
                b=new('diagram',pg,status,num=m.group(2),title=m.group(3));b['text']=' '.join(x['text'].strip() for x in inner);b['boxes']=[box(pg,l)]
                b['crop']=[pg,max(5,min(r['x0'],l['x0'])-6),max(60,r['top']-6),min(page.width-5,max(r['x1'],l['x1'])+6),l['bottom']+6]
        cur=None;continue
    # ---- requirement pages: two-column legal text
    skip=(0,0)
    if tops and tops[0]['text'].startswith('Requirement'):
        sec=' '.join(x['text'].strip() for x in tops);grp=sub=''
        r0=next((l for l in lines if size(l) in (14,15,16) and l['text'].strip() in ('Requirement','Requirements')),None)
        nxt=next((l for l in lines if r0 and l['top']>r0['bottom']+20 and size(l)>=14),None)
        if r0 and nxt:
            top,bot=r0['bottom']+2,nxt['top']-2;skip=(r0['top']-1,nxt['top']-1)
            lim=[w for w in page.extract_words() if w['text']=='Limits' and r0['bottom']<w['top']<nxt['top']]
            split=(lim[0]['x0']-4) if lim else page.width/2
            for name,(x0,x1) in (('Requirement',(25,split)),('Limits on application',(split,page.width-20))):
                col=[l for l in page.crop((x0,top,x1,bot)).extract_text_lines() if size(l) in (10,11,12) and 'Times' not in l['chars'][0]['fontname']]
                if not col:continue
                b=new('req',pg,status,title=f"{sec.split(':')[0]} · {name}")
                for l in col:l['text']=fix(l['text']);add(b,pg,l)
            cur=None
    # ---- captions
    def is_caption(i):
        l=lines[i];t=l['text'].strip();m=CAP.match(t)
        if not m or size(l)!=12:return None
        f=font(l);kind=m.group(1)
        if kind=='Table':return m if ('Bold' in f or 'Medium' in f) and 'Semibold' not in f else None
        if 'Medium' in f or ('Bold' in f and 'Semibold' not in f):return m
        if any(0<=l['top']-r['bottom']<=45 and r['x0']-30<l['x0']<r['x1'] for r in fills):return m
        prevs=[x for x in lines[:i] if x['top']<l['top']]
        if prevs and size(prevs[-1])<12:return m
        return None
    prevBottom=60;i=0
    # table continuing from previous page
    if cur and cur['k']=='table':
        cont=[]
        for l in lines:
            if size(l)<=11 and not any(r['x0']<=l['x0']<=r['x1'] and r['top']<=l['top']<=r['bottom'] for r in fills):cont.append(l)
            else:break
        if cont:
            t=cur;b=new('table',pg,status,num=t['num'],title=t['title'].replace(' (continued)','')+' (continued)')
            b['text']=' '.join(x['text'].strip() for x in cont);b['boxes']=[box(pg,x) for x in cont]
            b['crop']=[pg,min(x['x0'] for x in cont)-6,max(60,cont[0]['top']-6),max(x['x1'] for x in cont)+6,cont[-1]['bottom']+8]
            prevBottom=b['crop'][4];i=len(cont)
    cur=None if not (cur and cur['k'] in ('para','text')) else cur
    while i<len(lines):
        l=lines[i];t=l['text'].strip();s=size(l);f=font(l)
        if skip[0]<=l['top']<skip[1] or (tops and l in tops and tops[0]['text'].startswith('Requirement')):
            prevBottom=l['bottom'];i+=1;continue
        if s>=24:
            parts=[t]
            while i+1<len(lines) and size(lines[i+1])>=24:i+=1;parts.append(lines[i]['text'].strip())
            sec=' '.join(parts);grp=sub='';cur=None;prevBottom=lines[i]['bottom'];i+=1;continue
        if 18<=s<24 and 'Bold' in f:
            parts=[t]
            while i+1<len(lines) and 18<=size(lines[i+1])<24:i+=1;parts.append(lines[i]['text'].strip())
            grp=' '.join(parts);sub='';cur=None;prevBottom=lines[i]['bottom'];i+=1;continue
        if s in (14,15,16) and ('Bold' in f or 'Semibold' in f):
            sub=t;cur=None;prevBottom=l['bottom'];i+=1;continue
        m=is_caption(i)
        if m:
            kind,num,title=m.group(1),m.group(2),m.group(3)
            j=i+1
            while j<len(lines) and size(lines[j])==12 and 'Light' in font(lines[j]) and lines[j]['x0']>=l['x0']+15 and lines[j]['top']-lines[j-1]['bottom']<6 and not NUM.match(lines[j]['text']):
                title+=' '+lines[j]['text'].strip();j+=1
            capBottom=lines[j-1]['bottom']
            if re.match(r'(?i)^continued',title) and blocks and any(b['k']=='table' and b.get('num')==num for b in blocks):
                title=next(b['title'] for b in reversed(blocks) if b['k']=='table' and b.get('num')==num).replace(' (continued)','')+' (continued)'
            if kind=='Table':
                rows=[]
                while j<len(lines) and size(lines[j])<=11:rows.append(lines[j]);j+=1
                b=new('table',pg,status,num=num,title=title)
                b['text']=' '.join(r['text'].strip() for r in rows);b['boxes']=[box(pg,l)]+[box(pg,r) for r in rows]
                xs=[l['x0']]+[r['x0'] for r in rows];xe=[l['x1']]+[r['x1'] for r in rows]
                b['crop']=[pg,min(xs)-6,l['top']-6,max(max(xe)+6,min(page.width-20,min(xs)+460)),(rows[-1]['bottom'] if rows else capBottom)+8]
                prevBottom=b['crop'][4];i=j;continue
            fr=[r for r in fills if 0<=l['top']-r['bottom']<=45 and r['x0']-30<l['x0']<r['x1']]
            if fr:
                r=max(fr,key=lambda r:r['bottom']);x0,y0,x1=min(r['x0'],l['x0']),r['top'],max(r['x1'],l['x1'])
                objs=[o for o in page.curves+page.rects+page.lines+page.images if o['top']>=prevBottom+2 and o['bottom']<=l['top']+1 and o['bottom']>=r['top']-200]
                labs=[x for x in raw if prevBottom+2<=x['top']<l['top'] and size(x)<12]
                ys=[o['top'] for o in objs]+[x['top'] for x in labs]
                if ys:y0=min(y0,min(ys))
                xs0=[o['x0'] for o in objs]+[x['x0'] for x in labs];xs1=[o['x1'] for o in objs]+[x['x1'] for x in labs]
                if xs0:x0=min(x0,min(xs0));x1=max(x1,max(xs1))
            else:
                objs=[o for o in page.curves+page.rects+page.lines+page.images if o['top']>=prevBottom-1 and o['bottom']<=l['top']+1]
                inner=[x for x in lines[:i] if x['top']>=prevBottom-1]
                ys=[o['top'] for o in objs]+[x['top'] for x in inner];y0=min(ys) if ys else prevBottom;x0,x1=28,page.width-25
            inner=[x for x in raw if y0-2<=x['top']<=l['top']-1 and x0-10<=x['x0']<=x1 and (size(x)<12 or x['text'].startswith('See para'))]
            b=new('diagram',pg,status,num=num,title=title)
            b['text']=' '.join(x['text'].strip() for x in inner);b['boxes']=[box(pg,l)]
            b['crop']=[pg,max(5,x0-6),max(60,y0-6),min(page.width-5,x1+6),capBottom+6]
            cur=None;prevBottom=capBottom;i=j;continue
        # inside a captioned diagram's shaded area: skip
        if any(r['x0']<=l['x0']<=r['x1'] and r['top']<=l['top']<=r['bottom'] for r in fills) and s<12:
            i+=1;continue
        if s==12 and f.endswith('Bold') and not NUM.match(t) and len(t)<80 and not CAP.match(t):
            sub=(sub.split(' · ')[0]+' · '+t) if sub else t;cur=None;prevBottom=l['bottom'];i+=1;continue
        if s==12 and not t.startswith('See para'):
            if any(r['x0']<=l['x0']<=r['x1'] and r['top']<=l['top']<=r['bottom'] for r in fills) and any(0<=c['top']-r['bottom']<=45 for r in fills for c in lines if CAP.match(c['text'].strip()) and c['top']>l['top']):
                i+=1;continue
            m=NUM.match(t);ff=l['chars'][0]['fontname']
            if m and ('Semibold' in ff or 'Bold' in ff):
                b=new('para',pg,status,num=m.group(1));add(b,pg,l,m.group(2))
            else:
                if cur is None or cur['k'] not in ('para','text'):new('text',pg,status)
                add(cur,pg,l)
            prevBottom=l['bottom'];i+=1;continue
        i+=1
out=[];n=0;pre=sys.argv[6]
for b in blocks:
    b['text']=re.sub(r'\s+',' ',b['text']).strip()
    if b['k'] in ('text','para') and len(b['text'])<3:continue
    if b['k']=='term' and not b['text']:continue
    n+=1;b['id']=f"{pre}{n}";b['pp']=pagemap.get(b['pg']);b['ctx']=CTX
    out.append(b)
json.dump({'blocks':out,'pagemap':pagemap},open(OUT,'w'),ensure_ascii=False)
c=collections.Counter(b['k'] for b in out);print(dict(c),'blocks',len(out),'| status',dict(collections.Counter(b['st'] for b in out)))
