/* First macOS Settings visual sample. Approved IA; pane design awaits review. */
const fs=require('node:fs'),path=require('node:path');
const {vector,uiIcon,esc}=require('../aos-native-mockups/components.cjs');
if(JSON.parse(fs.readFileSync(path.resolve(__dirname,'../global-mockups/manifest.json'))).settingsScreens)throw Error('This approved sample is history. Rebuild admin/settings-mockups/build.cjs instead.');
const home=__dirname,W=1200,H=920,SW=260;
const t={canvas:'#F8F9FB',panel:'#F0F2F5',raised:'#FFFFFF',selected:'#E4E8EF',heading:'#202630',body:'#424C5B',secondary:'#5B6573',border:'#DCE1E8',control:'#8C96A5',copper:'#98450F',icon:'#78543E',success:'#326146'};
const dir='/Users/doabile/workspace/hedgetech/workers/sigmar-aos-site/public/fonts/satoshi';
const fontCSS=['Regular','Medium'].map((n,i)=>`@font-face{font-family:Satoshi;font-weight:${i?500:400};src:url(data:font/otf;base64,${fs.readFileSync(path.join(dir,`Satoshi-${n}.otf`)).toString('base64')}) format('opentype');}`).join('');
const txt=(x,y,s,z=14,c=t.heading,w=400,anchor='start')=>`<text x="${x}" y="${y}" font-size="${z}" font-weight="${w}" fill="${c}" text-anchor="${anchor}">${esc(s)}</text>`;
const rect=(x,y,w,h,fill=t.raised,stroke='none',r=10)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}"/>`;
function ico(n,x,y,z=20,c=t.secondary){if(n==='info')return `<g transform="translate(${x},${y}) scale(${z/24})" fill="none" stroke="${c}" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.2"/></g>`;return uiIcon(n,x,y,z,c);}
const rule=(x,y,w)=>`<path d="M${x} ${y}h${w}" stroke="${t.border}"/>`;
const target=(label,x,y,w,h,s,role='button',extra='')=>`<g role="${role}" aria-label="${esc(label)}" ${extra}><title>${esc(label)}</title>${rect(x,y,w,h,'transparent')}${s}</g>`;
function button(label,x,y,w=112,accessible=label){return target(accessible,x,y,w,44,rect(x,y+5,w,34,t.raised,t.control,7)+txt(x+w/2,y+27,label,13,t.heading,500,'middle'));}
function toggle(label,x,y,on){return target(label,x,y,56,44,rect(x+6,y+9,44,26,on?t.heading:'#D8DDE5',on?'none':t.control,13)+`<circle cx="${x+(on?37:19)}" cy="${y+22}" r="10" fill="#FFFFFF"/>`+(on?`<path d="m${x+12} ${y+22} 3 3 5-6" fill="none" stroke="#FFFFFF" stroke-width="1.3" stroke-linecap="round"/>`:''),'switch',`aria-checked="${on}"`);}
function card(x,y,w,h,s){return `<g filter="url(#lift)">${rect(x,y,w,h,t.raised,t.border,12)}</g>${s}`;}
function pill(x,y,label,color=t.secondary){const w=label.length*6.3+20;return rect(x,y,w,24,'#F2F4F7','none',6)+txt(x+10,y+16,label,11,color,500);}
const x=300,w=860;
let s=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title description"><title id="title">Sigmar Settings · Privacy &amp; AI access · macOS first sample</title><desc id="description">First proposed native macOS Settings window. Eight approved settings sections and search. The selected pane shows member-scoped AI access rules, client grants, safeguards and learning/source links. All names and policy states are illustrative. Controls do not change real access.</desc><metadata>${esc(JSON.stringify({screen:'settings',platform:'macos',theme:'light',viewport:[W,H],canvasHeight:H,illustrative:true,approval:'Settings IA approved; first visual sample pending',source:'../../reports/Sigmar AOS settings review.md'}))}</metadata><defs><style>${fontCSS}text{font-family:Satoshi,sans-serif}</style><linearGradient id="canvas" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#FCFDFE"/><stop offset="1" stop-color="#F6F8FA"/></linearGradient><linearGradient id="side" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#F3F5F7"/><stop offset="1" stop-color="#EBEFF3"/></linearGradient><filter id="lift" x="-5%" y="-20%" width="110%" height="150%" color-interpolation-filters="sRGB"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#26354A" flood-opacity=".035"/></filter><clipPath id="window"><rect x=".5" y=".5" width="1199" height="919" rx="14"/></clipPath></defs><g clip-path="url(#window)">`;
s+=rect(0,0,W,H,'url(#canvas)','none',0)+rect(0,0,SW,H,'url(#side)','none',0)+rect(SW,0,W-SW,56,'#F4F5F7','none',0)+rule(SW,56,W-SW)+`<path d="M${SW} 0V${H}" stroke="${t.border}"/>`;
for(const [i,c]of ['#FF5F57','#FEBC2E','#28C840'].entries())s+=`<circle cx="${24+i*20}" cy="28" r="6" fill="${c}" stroke="#000000" stroke-opacity=".10"/>`;
s+=txt(SW+(W-SW)/2,34,'Settings',13,t.heading,500,'middle');
s+=vector('logos/Main Logo.svg',24,83,124,28)+txt(24,135,'Settings',13,t.secondary,500);
s+=target('Search settings',16,153,228,44,rect(16,158,228,34,t.raised,t.control,8)+ico('search',28,167,17)+txt(55,180,'Search settings',13,t.secondary));
const categories=[['General','sun'],['Conversation & voice','chat'],['Notifications','bell'],['Privacy & AI access','lock'],['Personalisation & learning','sprout'],['Data & sync','changes'],['Account & security','user'],['About & support','info']];
categories.forEach(([label,ic],i)=>{const yy=216+i*50,selected=i===3;s+=target(label,16,yy,228,44,(selected?rect(16,yy,228,44,t.selected,'none',9):'')+ico(ic,29,yy+13,18,selected?t.copper:t.secondary)+txt(59,yy+28,label,13,selected?t.heading:t.body,selected?500:400),'button',selected?'aria-current="page"':'');});
s+=rule(20,822,220)+`<circle cx="40" cy="861" r="19" fill="${t.selected}"/>`+txt(40,865,'DW',11,t.heading,500,'middle')+txt(72,855,'David W.',14,t.heading,500)+txt(72,876,'Personal account',12,t.secondary);
// The independent utility window has no conversation composer or global app navigation.
s+=rect(x,86,24,2,'#9F6B49','none',1)+txt(x,120,'Privacy & AI access',26,t.heading,500)+txt(x,151,'Choose which AI clients can use your Personas.',15,t.body)+txt(x+w,110,'Illustrative settings',11,t.secondary,400,'end');
s+=card(x,174,w,64,ico('user',x+18,195,20)+txt(x+51,199,'Your member account',14,t.heading,500)+txt(x+51,220,'These rules apply to your AI clients across accounts.',12,t.secondary)+pill(x+w-143,193,'Member scope'));
// Existing member policy concepts, presented as understandable rules with explicit confirmations.
let a=txt(x+20,279,'AI access rules',16,t.heading,500)+txt(x+w-20,278,'Access changes ask for confirmation',12,t.secondary,400,'end');
a+=txt(x+20,321,'Allow reading of granted Personas',14,t.heading,500)+txt(x+20,343,'An active client still needs permission for each Persona.',13,t.secondary)+toggle('Allow reading of granted Personas',x+w-76,307,true);
a+=rule(x+20,360,w-40)+txt(x+20,393,'Allow proposed changes',14,t.heading,500)+txt(x+20,415,'Applying changes remains controlled by the relevant Flow.',13,t.secondary)+toggle('Allow proposed changes',x+w-76,379,false);
s+=card(x,254,w,182,a);
// Protected safeguards are presented for review, not as weakening switches.
s+=target('Review required safeguards',x,450,w,50,ico('lock',x+2,464,18,t.copper)+txt(x+30,470,'Verified clients · Persona-specific grants · Flow-controlled changes',13,t.body)+txt(x+w-21,470,'Review safeguards',12,t.copper,500,'end')+ico('chevron',x+w-14,458,14,t.copper));
s+=txt(x,532,'Connected AI clients',16,t.heading,500)+txt(x,555,'Permissions are limited to the Personas shown.',13,t.secondary)+button('Manage clients',x+w-130,514,130);
let clients='';
clients+=rect(x+18,595,36,36,'#F4F5F7','none',9)+ico('book',x+26,603,20,t.icon)+txt(x+68,608,'Research assistant',14,t.heading,500)+txt(x+68,631,'Active client',12,t.success)+txt(x+342,608,'My.Career',13,t.heading)+txt(x+342,631,'Can read',12,t.secondary)+button('Review access',x+w-140,590,120,'Review access for Research assistant');
clients+=rule(x+20,652,w-40)+rect(x+18,675,36,36,'#F4F5F7','none',9)+ico('tasks',x+26,683,20,t.icon)+txt(x+68,688,'Planning assistant',14,t.heading,500)+txt(x+68,711,'Suspended client',12,t.secondary)+txt(x+342,688,'My.Work · My.Learning',13,t.heading)+txt(x+342,711,'No access while suspended',12,t.secondary)+button('Review access',x+w-140,670,120,'Review access for Planning assistant');
s+=card(x,574,w,162,clients);
let learning=ico('sprout',x+18,774,20,t.icon)+txt(x+51,786,'Reading does not grant permission to learn or publish.',14,t.heading,500)+txt(x+51,809,'Review learning and source permissions within the relevant Persona.',13,t.secondary);
learning+=target('Review learning permissions',x+51,822,240,44,txt(x+51,849,'Learning permissions',13,t.copper,500)+ico('chevron',x+192,837,14,t.copper));
learning+=target('Manage source access',x+300,822,230,44,txt(x+300,849,'Source access',13,t.copper,500)+ico('chevron',x+395,837,14,t.copper));
s+=card(x,758,w,114,learning)+txt(x,899,'Example clients and permissions for design review.',11,t.secondary);
s+=`</g><rect x=".5" y=".5" width="1199" height="919" rx="14" fill="none" stroke="${t.border}"/></svg>`;
const name='01-settings-macos-light-v1.svg';fs.writeFileSync(path.join(home,name),s);
// Replace only this selected first-review composition in the gallery; retain previous SVG as history.
const mp=path.resolve(home,'../global-mockups/manifest.json'),m=JSON.parse(fs.readFileSync(mp));const e=m.entries.find(e=>e.screen==='settings'&&e.platform==='macos'&&e.theme==='light');
if(!e)throw Error('macOS Settings entry missing');Object.assign(e,{title:'Settings · Privacy & AI access',width:W,height:H,canvasHeight:H,svg:'../settings-review/'+name,source:'../settings-review/README.md',notice:'New macOS Settings design · first visual sample for approval',controls:[],composition:'settings-window'});for(const other of m.entries.filter(v=>v.screen==='settings'&&v!==e))other.notice='Earlier settings layout · redesigned macOS first sample is available in Light';fs.writeFileSync(mp,JSON.stringify(m,null,2));
console.log('One macOS Settings SVG written; current macOS/light gallery entry updated.');
