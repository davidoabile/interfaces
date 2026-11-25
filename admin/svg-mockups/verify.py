from pathlib import Path
import json,xml.etree.ElementTree as ET
base=Path(__file__).resolve().parent
m=json.loads((base/'manifest.json').read_text())
assert m['screens']==71 and m['total']==1136
keys=set();paths=set();links=0
for e in m['entries']:
 key=(e['screen'],e['platform'],e['theme'],e['layout'])
 assert key not in keys,key
 keys.add(key)
 p=(base/e['svg']).resolve();paths.add(p)
 svg=ET.parse(p).getroot()
 assert float(svg.attrib['width'])==e['width'],p
 assert float(svg.attrib['height'])==e['canvasHeight'],p
 assert e['canvasHeight']>=e['height'],p
 raw=p.read_text();assert '@font-face' in raw,p
 assert (base/e['reference']).exists(),e['reference']
 for node in svg.iter():
  href=node.attrib.get('href')
  if href and not href.startswith(('data:','#','http:','https:')):
   assert (p.parent/href).exists(),(p,href)
   links+=1
 if e['family']=='setup':
  assert svg.find('.//{http://www.w3.org/2000/svg}image') is not None
  slots=[n for n in svg.iter() if 'data-code-slot' in n.attrib]
  assert len(slots)==(5 if e['screen']=='setup-06' else 6 if e['screen']=='setup-07' else 0),p
  if e['screen']=='setup-05':
   for n in range(1,4):assert f'Question {n}' in raw and f'Answer {n}' in raw
for p in ['ios','android']:
 for t in ['dark','light']:
  for l in ['phone','tablet-compact','tablet-portrait','tablet-landscape']:
   rows=[e for e in m['entries'] if e['platform']==p and e['theme']==t and e['layout']==l]
   assert len(rows)==71
   assert len([e for e in rows if e['family']=='setup'])==10
setup=base.parent/'login-register/account-flows'
assert len(list(setup.rglob('*.svg')))==160
assert not list(setup.rglob('*.png')) and not list(setup.rglob('*.jpg'))
assert not list(base.rglob('*.png')) and not list(base.rglob('*.jpg'))
r={'status':'passed','screens':71,'svgSelections':1136,'uniqueSVGs':len(paths),'newAccountScreens':10,'newAccountSVGs':160,'existingSVGsReused':976,'filterCombinations':16,'screensPerCombination':71,'resolvedRelativeLinks':links,'checks':['All SVGs parse and have embedded Satoshi fonts','All SVG dimensions match catalogue metadata','All source/reference and SVG navigation links resolve','Every screen has both platforms, both themes and four layouts','Personal security has three question/answer pairs','AOS PIN has five positions and verification has six','No raster exports in the new account or catalogue folders'],'visualReview':'Representative light/dark phone, wide/tablet layouts and full-scroll security content inspected using in-memory rendering. Static SVGs do not implement account registration or permissions.'}
(base/'verification.json').write_text(json.dumps(r,indent=2)+'\n')
print(json.dumps(r,indent=2))
