/* One returning-user review sample. Editable SVG source; illustrative state only. */
const fs=require('node:fs');
const path=require('node:path');
process.env.FONTCONFIG_FILE=path.resolve(__dirname,'../../login-register/samples/fontconfig.xml');
const sharp=require('/Users/doabile/workspace/hedgetech/workers/sigmar-aos-site/node_modules/sharp');
sharp.concurrency(2);
const root=path.resolve(__dirname,'../../..');
const samples=path.resolve(__dirname,'../../login-register/samples');
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const tokens={dark:{canvas:'#201C18',deep:'#171411',panel:'#2B2520',raised:'#332D27',selected:'#3B2B20',heading:'#E8DCCB',body:'#BFB5A9',secondary:'#A69B8E',border:'#494037',control:'#918171',accent:'#E87832',link:'#F08D4C',onAccent:'#1F1A16',success:'#83B89A',warning:'#E4C078'},light:{canvas:'#F7F4EE',deep:'#E9E2D8',panel:'#E9E2D8',raised:'#FFFAF4',selected:'#F4E2D3',heading:'#29231F',body:'#514940',secondary:'#665C52',border:'#CFC2B4',control:'#8F8072',accent:'#E87832',link:'#9C450C',onAccent:'#1F1A16',success:'#326146',warning:'#785417'}};
for(const [theme,t] of Object.entries(tokens))t.indicator=theme==='light'?t.link:t.accent;
function text(x,y,s,size=16,weight=400,color='#E8DCCB',anchor='start'){return `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${color}" text-anchor="${anchor}">${esc(s)}</text>`;}
const center=(x,y,s,size=16,weight=400,color='#E8DCCB')=>text(x,y,s,size,weight,color,'middle');
function vector(file,x,y,width,height,matte=false){let s=fs.readFileSync(path.join(root,file),'utf8').replace(/<\?xml[^>]*>/g,'').replace(/<!--[\s\S]*?-->/g,'');if(matte)s=s.replace('<rect width="221.2" height="50"/>','');return s.replace(/<svg\b[^>]*>/,m=>m.replace(/\s(?:x|y|width|height)="[^"]*"/g,'').replace('<svg',`<svg x="${x}" y="${y}" width="${width}" height="${height}"`));}
// All icons use one line vocabulary. Brand artwork is always imported from original SVGs.
function icon(name,x,y,size,color){const paths={back:'<path d="m14 5-7 7 7 7M7 12h14"/>',check:'<path d="m5 12 4 4L19 6"/>',chevron:'<path d="m9 5 7 7-7 7"/>',down:'<path d="m6 9 6 6 6-6"/>',user:'<circle cx="12" cy="7" r="4"/><path d="M4 22v-4q0-6 8-6t8 6v4"/>',business:'<rect x="5" y="3" width="14" height="19" rx="2"/><path d="M9 7h1m4 0h1M9 11h1m4 0h1M9 15h1m4 0h1M10 22v-4h4v4"/>',camera:'<path d="M4 7h4l2-3h4l2 3h4v14H4Z"/><circle cx="12" cy="13" r="4"/>',lock:'<rect x="5" y="10" width="14" height="12" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4M12 15v3"/>',terminal:'<rect x="2" y="3" width="20" height="18" rx="3"/><path d="m6 8 4 4-4 4m7 0h5"/>',warning:'<path d="M10 3q2-3 4 0l9 17q1 2-2 2H3q-3 0-2-2Z"/><path d="M12 8v6m0 4v.2"/>'};return `<g transform="translate(${x},${y}) scale(${size/24})" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${paths[name]||paths.user}</g>`;}
function estimatedWidth(s,size){return [...s].reduce((n,c)=>n+("ilI.,:;!|' ".includes(c)?.25:'MW@%'.includes(c)?.85:.5)*size,0);}
function wrap(s,width,size=16){let result=[],line='';for(const word of String(s).split(' ')){const candidate=line?line+' '+word:word;if(line&&estimatedWidth(candidate,size)>width){result.push(line);line=word;}else line=candidate;}if(line)result.push(line);return result;}
function uiIcon(name,x,y,size,color){const ps={home:'<path d="m3 11 9-8 9 8v10h-6v-7H9v7H3Z"/>',guild:'<circle cx="12" cy="4" r="3"/><circle cx="4" cy="20" r="3"/><circle cx="20" cy="20" r="3"/><path d="M12 7v5M4 17v-5h16v5"/>',layers:'<path d="m2 7 10-5 10 5-10 5ZM2 12l10 5 10-5M2 17l10 5 10-5"/>',expert:'<circle cx="12" cy="9" r="6"/><path d="m8 14-3 9 7-4 7 4-3-9m-6-6 2 2 3-4"/>',dna:'<path d="M6 2c0 10 12 10 12 20M18 2C18 12 6 12 6 22M7 5h10M8 9h8M8 15h8M7 19h10"/>',bell:'<path d="M5 17h14l-2-4V8a5 5 0 0 0-10 0v5Zm5 3h4"/>',search:'<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/>',close:'<path d="m5 5 14 14M19 5 5 19"/>',board:'<rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 8h20M8 8v13"/>',shop:'<path d="M3 9h18l-2-6H5Zm0 0v13h18V9M8 22v-8h8v8"/>',graduate:'<path d="m1 8 11-6 11 6-11 6ZM5 11v7q7 5 14 0v-7M23 8v12"/>',licence:'<rect x="2" y="4" width="20" height="16" rx="3"/><path d="M2 10h20M6 15h5"/>',chat:'<path d="M3 3h18v14H9l-6 5Z"/>',tasks:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="m7 12 3 3 7-8"/>',briefcase:'<rect x="3" y="7" width="18" height="14" rx="3"/><path d="M8 7V3h8v4M3 12h18"/>',book:'<path d="M12 4Q6 0 2 3v17q5-3 10 1 5-4 10-1V3q-4-3-10 1Zm0 0v17"/>',attach:'<path d="m8 13 7-8a3 3 0 0 1 4 4L9 20a5 5 0 0 1-7-7L13 2"/>',send:'<path d="m2 3 21 9L2 21l4-9ZM6 12h17"/>',plus:'<path d="M12 3v18M3 12h18"/>',more:'<circle cx="4" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="20" cy="12" r="1"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',arrow:'<path d="M3 12h18m-6-6 6 6-6 6"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 0v3m0 18v3M0 12h3m18 0h3M3 3l2 2m14 14 2 2M3 21l2-2M19 5l2-2"/>',changes:'<path d="M5 3v13a4 4 0 0 0 4 4h10M13 3v8a4 4 0 0 1-4 4H5"/><circle cx="5" cy="3" r="2"/><circle cx="13" cy="3" r="2"/><circle cx="19" cy="20" r="2"/>'};if(!ps[name])return icon(name,x,y,size,color);return `<g transform="translate(${x},${y}) scale(${size/24})" fill="none" stroke="${color}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ps[name]}</g>`;}
function box(x,y,w,h,t,selected=false,rx=10){return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${selected?t.selected:t.panel}" stroke="${selected?t.indicator:t.border}"/>`;}
function pill(x,y,label,t,color=t.secondary){const w=estimatedWidth(label,11)+18;return `<rect x="${x}" y="${y}" width="${w}" height="22" rx="5" fill="${t.raised}"/>`+text(x+9,y+15,label,11,500,color);}
function primary(x,y,w,label,p,t){return `<rect x="${x}" y="${y}" width="${w}" height="44" rx="${p==='android'?22:10}" fill="${t.accent}"/>`+center(x+w/2,y+28,label,14,500,t.onAccent);}
function composer(x,y,w,p,t){let s=box(x,y,w,108,t,false,p==='android'?24:18);s+=`<rect x="${x+14}" y="${y+12}" width="126" height="30" rx="${p==='android'?15:8}" fill="${t.raised}" stroke="${t.control}"/>`+uiIcon('user',x+23,y+19,16,t.body)+text(x+47,y+32,'My Persona',13,500,t.heading)+uiIcon('down',x+116,y+20,14,t.secondary);s+=`<g role="button" aria-label="Add attachment"><title>Add attachment</title><rect x="${x+w-58}" y="${y+5}" width="44" height="44" fill="transparent"/>`+uiIcon('attach',x+w-47,y+16,22,t.body)+`</g>`;s+=text(x+18,y+77,'Type or talk to Sigmar',16,400,t.secondary)+`<g role="button" aria-label="Talk to Sigmar"><title>Talk to Sigmar</title><rect x="${x+w-58}" y="${y+48}" width="44" height="44" rx="${p==='android'?22:12}" fill="${t.accent}"/><g transform="translate(${x+w-47},${y+59})" fill="none" stroke="${t.onAccent}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="1" width="8" height="13" rx="4"/><path d="M3 10v2a8 8 0 0 0 16 0v-2M11 20v3M7 23h8"/></g></g>`;return s;}
const assert=require('node:assert/strict');
const fixture=JSON.parse(fs.readFileSync(path.join(__dirname,'example-day.json'),'utf8'));
const moved=fixture.proposedMoves.reduce((n,v)=>n+v.minutes,0);
const fixed=Object.values(fixture.commitments).reduce((n,v)=>n+v,0);
assert.equal(fixed+moved,fixture.expected.plannedBeforeMinutes);
assert.equal(fixed+moved-fixture.availableMinutesToday,60);
assert.equal(fixture.availableMinutesToday-fixed,30);
assert.equal(moved,90);
assert.equal(fixture.expected.effortSavedMinutes,0);
function returning(){const t=tokens.dark;
let s=`<svg xmlns="http://www.w3.org/2000/svg" width="393" height="852" viewBox="0 0 393 852" font-family="Satoshi, sans-serif"><title>Returning to personal AOS: your state and a proposed plan</title><desc>Illustrative day for design review. Seven hours planned in six available. Two flexible tasks totalling ninety minutes move to tomorrow only after approval, leaving thirty minutes free today. No live account information or executed changes.</desc><defs><clipPath id="frame"><rect width="393" height="852" rx="26"/></clipPath><filter id="soft"><feGaussianBlur stdDeviation="8"/></filter></defs><g clip-path="url(#frame)"><rect width="393" height="852" fill="${t.canvas}"/><image href="../../login-register/samples/sigmar-dna-dark-background.png" width="393" height="852" preserveAspectRatio="xMidYMid slice" opacity="0.06" filter="url(#soft)"/>`;
s+=text(28,27,'9:41',12,500,t.heading)+text(365,27,'Wi-Fi  100%',11,400,t.secondary,'end');
s+=uiIcon('menu',20,59,24,t.body)+vector('logos/Black BG Main Logo.svg',64,56,124,28,true)+text(204,78,'AOS',13,500,t.secondary)+uiIcon('plus',344,59,24,t.body);
s+=text(24,123,'Personal workspace',13,400,t.secondary)+`<circle cx="352" cy="118" r="16" fill="${t.selected}"/>`+center(352,123,'D',11,500,t.heading);
s+=vector('sigmar-ia-icons/idle.svg',24,150,28,28)+text(63,169,'Your day, in focus',13,500,t.body);
s+=text(24,208,`Hi ${fixture.name},`,22,500,t.heading);
['Two deadlines and a Flow review','make today look tight: 7 hours','planned, with 6 hours available.'].forEach((v,i)=>s+=text(24,239+i*23,v,16,400,t.heading));
s+=box(24,312,345,326,t,false,12)+text(40,340,'I can make room today',16,500,t.heading)+text(40,363,'Move two flexible tasks to tomorrow:',13,400,t.body);
fixture.proposedMoves.forEach((v,i)=>{const yy=397+i*65;s+=uiIcon(i?'book':'briefcase',40,yy-16,18,t.indicator)+text(68,yy,v.task,14,500,t.heading)+text(353,yy,`${v.minutes} min`,13,400,t.body,'end');s+=text(68,yy+21,`${v.persona} · ${i?'2:45–3:30 pm':'2:00–2:45 pm'}`,12,400,t.secondary);});
s+=`<path d="M40 504h313" stroke="${t.border}"/>`;
s+=text(40,530,'60 min over',17,500,t.warning)+uiIcon('arrow',190,515,20,t.secondary)+text(353,530,'30 min free',17,500,t.success,'end');
s+=text(40,552,'Today, if approved · 90 min moved',12,400,t.body);
s+=`<rect x="40" y="574" width="201" height="44" rx="10" fill="${t.accent}"/>`+center(140.5,602,'Approve 2 changes',15,500,t.onAccent);
s+=`<rect x="253" y="574" width="100" height="44" rx="10" fill="none" stroke="${t.control}"/>`+center(303,602,'Edit plan',15,500,t.heading);
s+=text(24,659,'School pickup at 4 pm stays protected.',13,400,t.body)+text(24,681,'View the tasks and Flows behind this plan',13,400,t.link);
s+=composer(24,698,345,'ios',t)+`<rect x="136.5" y="831" width="120" height="4" rx="2" fill="${t.heading}"/>`;
return s+`<rect x=".5" y=".5" width="392" height="851" rx="26" fill="none" stroke="${t.border}"/></g></svg>`;
}
async function build(){const svg=returning();fs.writeFileSync(path.join(__dirname,'returning-user-v4.svg'),svg);
const inline=svg.replace('href="../../login-register/samples/sigmar-dna-dark-background.png"',`href="data:image/png;base64,${fs.readFileSync(path.join(samples,'sigmar-dna-dark-background.png')).toString('base64')}"`);
await sharp(Buffer.from(inline),{density:144}).png().toFile(path.join(__dirname,'returning-user-v4.png'));
console.log('One returning-user sample rendered at 786 × 1704. Fixture verified: 420 − 90 = 330; 360 − 330 = 30 minutes free.');}
build().catch(e=>{console.error(e.stack);process.exitCode=1});
