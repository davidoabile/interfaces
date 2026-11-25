/* Link the current authentication SVGs to matching platform/theme account steps. */
const fs=require('node:fs'),path=require('node:path');
const root=__dirname,native=path.resolve(root,'../native-mockups-v2');
const auth=JSON.parse(fs.readFileSync(path.join(native,'manifest.json'),'utf8')).entries;
const setup=JSON.parse(fs.readFileSync(path.join(root,'manifest.json'),'utf8')).entries;
const authEntry=(id,e)=>auth.find(v=>v.screen.startsWith(id)&&v.platform===e.platform&&v.theme===e.theme&&v.layout===e.layout);
const setupFile=(id,e)=>path.resolve(root,setup.find(v=>v.screen.startsWith(id)&&v.platform===e.platform&&v.theme===e.theme&&v.layout===e.layout).svg);
let n=0;
for(const e of auth){if(!['01','02','03','04','05','06','07'].includes(e.screen.slice(0,2)))continue;const file=path.resolve(native,e.fullSvg||e.svg),id=e.screen.slice(0,2),b=e.contentBounds;let svg=fs.readFileSync(file,'utf8').replace(/<a data-account-flow-entry="true"[\s\S]*?<\/a>/g,'');let target,label,area;
if(id==='01'){target=setupFile('01',e);label='Create personal account';area={x:b.x+b.width/2+2,y:b.y+414,w:b.width/2-2,h:44};}
else {const labels={'02':'Log in','03':'Add a business account','04':'Continue','05':'Continue','06':'Continue','07':'Add Entity'};label=labels[id];const r=e.records.find(v=>v.type==='button'&&v.label===label);if(!r)throw Error(e.screen+' button missing');area={x:b.x,y:b.y+r.y,w:b.width,h:r.height};if(id==='03')target=setupFile('02',e);else if(id==='04')target=setupFile('04',e);else{const next=authEntry({'02':'03','05':'06','06':'07','07':'08'}[id],e);target=path.resolve(native,next.fullSvg||next.svg);}}
const href=path.relative(path.dirname(file),target).split(path.sep).join('/');if(!fs.existsSync(target))throw Error(target);svg=svg.replace(/<\/g><\/svg>$/,`<a data-account-flow-entry="true" href="${href}" aria-label="${label}"><rect x="${area.x}" y="${area.y}" width="${area.w}" height="${area.h}" fill="transparent"/></a></g></svg>`);fs.writeFileSync(file,svg);n++;}
console.log(`Linked ${n} authentication SVG entry/continuation actions to matching context.`);
