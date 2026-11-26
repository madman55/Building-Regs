import json,collections,re,sys,subprocess
d=json.load(open(sys.argv[1]));B=d['blocks'];pdf=sys.argv[2];first,last=int(sys.argv[3]),int(sys.argv[4])
# paragraphs per section
by=collections.defaultdict(set)
for b in B:
    if b['k']=='para':
        p,q=b['num'].rstrip('abcdefgh').split('.');by[p].add(int(q))
gaps={k:sorted(set(range(1,max(v)+1))-v) for k,v in by.items()}
print('para sections:',{k:(len(v),max(v)) for k,v in by.items()})
print('gaps:',{k:g for k,g in gaps.items() if g})
# diagrams/tables mentioned as captions in raw text vs found
txt=subprocess.run(['pdftotext','-f',str(first),'-l',str(last),pdf,'-'],capture_output=True,text=True).stdout
capd=set(re.findall(r'^Diagram ([A-Z]?\d+(?:\.\d+)?[a-z]?)\s+[A-Z]',txt,re.M));capt=set(re.findall(r'^Table ([A-Z]?\d+(?:\.\d+)?[a-z]?)\s+[A-Z]',txt,re.M))
fd={b['num'] for b in B if b['k']=='diagram'};ft={b['num'] for b in B if b['k']=='table'}
print('diagrams found',len(fd),'| caption-like in text',len(capd),'| missing:',sorted(capd-fd)[:30])
print('tables found',len(ft),'| caption-like',len(capt),'| missing:',sorted(capt-ft)[:30])
print('terms sample:',[b['title'] for b in B if b['k']=='term'][:12])
print('pp missing:',sum(1 for b in B if b['pp'] is None))
