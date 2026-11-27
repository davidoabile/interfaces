from pathlib import Path
from collections import Counter,deque
import json,xml.etree.ElementTree as ET
home=Path(__file__).resolve().parent
m=json.loads((home/'manifest.json').read_text());global_m=json.loads((home/'../global-mockups/manifest.json').read_text());ns='{http://www.w3.org/2000/svg}'
by_path={(home/e['svg']).resolve():e for e in m['entries']};global_paths={(home/'../global-mockups'/e['svg']).resolve():e for e in global_m['entries']};errors=[];edge_count=0;role_count=0;graphs={}
for e in m['entries']:
 p=(home/e['svg']).resolve();r=ET.parse(p).getroot();parent={c:n for n in r.iter() for c in n};key=(e['platform'],e['theme']);graphs.setdefault(key,{})[e['screen']]=[]
 if len(r.findall(ns+'metadata'))!=1:errors.append([e['svg'],'metadata count'])
 for role in r.iter(ns+'g'):
  if role.attrib.get('role') not in ('button','switch'):continue
  role_count+=1;cur=parent.get(role)
  while cur is not None and cur.tag!=ns+'a':cur=parent.get(cur)
  if cur is None and role.attrib.get('aria-disabled')!='true':errors.append([e['svg'],'unlinked control',role.attrib.get('aria-label')])
 for a in r.iter(ns+'a'):
  edge_count+=1;href=a.attrib.get('href','');target=(p.parent/href).resolve();te=global_paths.get(target)
  if not target.exists():errors.append([e['svg'],'missing target',href]);continue
  if te is None:errors.append([e['svg'],'target outside current inventory',href]);continue
  if te['platform']!=e['platform']:errors.append([e['svg'],'cross-platform target',href])
  if te['theme']!=e['theme'] and not a.attrib.get('data-theme-switch'):errors.append([e['svg'],'unintended cross-theme link',href])
  if target in by_path:graphs[key][e['screen']].append(te['screen'])
 for rel in e['relatedStates']:
  target=(p.parent/rel['href']).resolve();te=by_path.get(target)
  if not te:errors.append([e['svg'],'missing related review state',rel]);continue
  if (te['platform'],te['theme'])!=key:errors.append([e['svg'],'related state scope',rel])
  graphs[key][e['screen']].append(te['screen'])

reach={}
for key,g in graphs.items():
 seen=set();todo=deque(['flow-home'])
 while todo:
  n=todo.popleft()
  if n in seen:continue
  seen.add(n);todo.extend(g.get(n,[]))
 missing=set(g)-seen
 if missing:errors.append([list(key),'unreachable review states',sorted(missing)])
 reach['/'.join(key)]={'reachable':len(seen),'total':len(g)}
counts=Counter((e['platform'],e['theme']) for e in m['entries']);assert len(counts)==14 and all(c==m['screens'] for c in counts.values())
report={'flowStates':m['screens'],'flowSVGs':m['total'],'linksChecked':edge_count,'interactiveControlsChecked':role_count,'reachability':reach,'errors':errors,'nativeChrome':'OS window controls and read-only illustrative fields excluded from app-link test'}
(home/'link-verification.json').write_text(json.dumps(report,indent=2));print(json.dumps({**{k:v for k,v in report.items() if k not in ['reachability','errors']},'errors':errors[:20]},indent=2));raise SystemExit(bool(errors))
