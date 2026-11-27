from pathlib import Path
from collections import Counter
import json,re,os,xml.etree.ElementTree as ET
from fontTools.ttLib import TTFont
home=Path(__file__).resolve().parent
m=json.loads((home/'manifest.json').read_text())
review_filter=os.environ.get('REVIEW_SCREEN_CONTAINS')
if review_filter:
    m['entries']=[e for e in m['entries'] if review_filter in e['screen']]
    m['screens']=len(set(e['screen'] for e in m['entries']))
    m['total']=len(m['entries'])
font=TTFont('/Users/doabile/workspace/hedgetech/workers/sigmar-aos-site/public/fonts/satoshi/Satoshi-Regular.otf')
cmap=font.getBestCmap();metrics=font['hmtx'].metrics;upem=font['head'].unitsPerEm
errors=[];warnings=[];ns='{http://www.w3.org/2000/svg}'
def width(s,z):return sum(metrics.get(cmap.get(ord(c),''),(upem*.57,0))[0] for c in s)*z/upem
def walk(e,xx=0,yy=0,sx=1,sy=1):
    tr=e.attrib.get('transform','')
    for name,args in re.findall(r'(translate|scale)\(([^)]+)\)',tr):
        a=[float(v) for v in re.split(r'[ ,]+',args.strip())]
        if name=='translate':xx+=a[0]*sx;yy+=(a[1] if len(a)>1 else 0)*sy
        else:sx*=a[0];sy*=a[1] if len(a)>1 else a[0]
    if e.tag==ns+'svg' and 'x' in e.attrib:
        # Decorative nested SVGs have their own viewBox, independent of page coordinates.
        return
    if e.tag==ns+'text':
        s=''.join(e.itertext());z=float(e.attrib.get('font-size',16));x=float(e.attrib.get('x',0));y=float(e.attrib.get('y',0));w=width(s,z);anchor=e.attrib.get('text-anchor','start');x-=w/2 if anchor=='middle' else w if anchor=='end' else 0
        yield s,xx+x*sx,yy+y*sy,w*sx,z*sy
    for c in e:yield from walk(c,xx,yy,sx,sy)
for e in m['entries']:
    p=home/e['svg']
    try:r=ET.parse(p).getroot()
    except Exception as ex:errors.append([e['svg'],'XML',str(ex)]);continue
    raw=p.read_text();txt=' '.join(r.itertext())
    if '__BRAND_ARTWORK_' in raw:errors.append([e['svg'],'unrestored artwork'])
    meta=json.loads(r.find(ns+'metadata').text)
    if meta['theme']!=e['theme']:errors.append([e['svg'],'theme metadata'])
    if e['theme']=='dark' and e['screen']=='settings' and '>Light</text>' in raw:errors.append([e['svg'],'settings theme'])
    if not (home/e['source'].split('#')[0]).exists():errors.append([e['svg'],'missing content reference'])
    if e['screen'].startswith('aos-') and e['screen'] not in ('aos-01','aos-48','aos-49'):
        source=json.loads((home/'source-content.json').read_text())[e['screen']]
        normal=' '.join(txt.split())
        for panel in source.get('panels',[]):
            for row in panel.get('rows',[]) or []:
                if isinstance(row,dict):
                    for k in ('title','detail','status'):
                        if row.get(k) and ' '.join(row[k].split()) not in normal:errors.append([e['svg'],'missing source content',row[k]])
    if raw.count('@font-face')!=2:errors.append([e['svg'],'fonts'])
    for a in r.iter(ns+'a'):
        href=a.attrib.get('href','')
        if href and not (p.parent/href.split('#')[0]).exists():errors.append([e['svg'],'missing link',href])
        if href and href.endswith('.svg') and not a.attrib.get('data-theme-switch') and e['theme']=='dark' and '/dark/' not in str((p.parent/href).resolve()):errors.append([e['svg'],'cross-theme link',href])
    for s,x,y,w,z in walk(r):
        if e['screen']!='aos-49' and (x < -2 or x+w>e['width']+2 or y-z < -2 or y>e['canvasHeight']+2):errors.append([e['svg'],'text outside canvas',s,round(x,1),round(x+w,1),round(y,1)])
    if not e['screen'].startswith(('setup','auth')) and e.get('composition') not in ('settings-window','persona-management','own-ai-window','flow-management'):
        if 'Talk to Sigmar' not in raw or 'Add attachment' not in raw:errors.append([e['svg'],'composer'])
    if e.get('consentRequired',False) and 'aria-disabled="true"' not in raw:errors.append([e['svg'],'consent gate'])
    if e['screen']=='auth-02' and len(r.findall('.//*[@data-code-slot]'))!=6:errors.append([e['svg'],'OTP count'])
    if e['screen']=='auth-09' and len(r.findall('.//*[@data-code-slot]'))!=5:errors.append([e['svg'],'PIN count'])
    if e['screen']=='auth-04' and '5 MB' not in txt:errors.append([e['svg'],'organisation upload'])
    if e['screen']=='auth-05' and '2 MB' not in txt:errors.append([e['svg'],'entity upload'])
    if e['screen']=='aos-40' and 'Paid but not yet activated' not in txt:errors.append([e['svg'],'activation'])
    if e['screen']=='aos-33' and 'publication blocked' not in txt:errors.append([e['svg'],'failed publication'])
    if e['screen']=='aos-49' and not (txt.find('Discover')<txt.find('Projects')<txt.find('Recent conversations')):errors.append([e['svg'],'navigation order'])
counts=Counter(e['platform'] for e in m['entries'])
light_counts=Counter(e['platform'] for e in m['entries'] if e['theme']=='light')
assert len(light_counts)==7 and all(v==m['screens'] for v in light_counts.values())
dark_counts=Counter(e['platform'] for e in m['entries'] if e['theme']=='dark')
assert dark_counts==light_counts
assert len(m['entries'])==m['screens']*14
report={'screens':m['screens'],'totalSVGs':len(m['entries']),'platformCounts':dict(counts),'errors':errors,'warnings':warnings,'checks':['XML','embedded fonts','all SVG review links','text within canvas using Satoshi glyph metrics','voice and attachment controls','OTP/PIN digit counts','upload limits','consent gates','payment activation and failed publication','navigation order']}
(home/('verification-filtered.json' if review_filter else 'verification.json')).write_text(json.dumps(report,indent=2))
print(json.dumps({'screens':m['screens'],'SVGs':m['total'],'errors':len(errors),'firstErrors':errors[:16]},indent=2))
raise SystemExit(bool(errors))
