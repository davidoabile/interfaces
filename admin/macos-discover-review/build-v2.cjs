/* Single macOS proposal. Do not extend before explicit first-sample approval. */
const fs=require('node:fs'),path=require('node:path');
const {tokens,vector,uiIcon,esc}=require('../aos-native-mockups/components.cjs');
// Cool neutral proposal scoped to this review; original shared palette stays intact.
const t={...tokens.light,canvas:'#F8F9FB',panel:'#F0F2F5',raised:'#FFFFFF',selected:'#E4E8EF',heading:'#202630',body:'#424C5B',secondary:'#5B6573',border:'#D6DBE3',control:'#8C96A5',link:'#98450F'},W=1440,H=1000;
const fonts='/Users/doabile/workspace/hedgetech/workers/sigmar-aos-site/public/fonts/satoshi';
const fontCSS=['Regular','Medium'].map((n,i)=>`@font-face{font-family:Satoshi;font-weight:${i?500:400};src:url(data:font/otf;base64,${fs.readFileSync(path.join(fonts,`Satoshi-${n}.otf`)).toString('base64')}) format('opentype');}`).join('');
const text=(x,y,s,z=14,c=t.heading,w=400)=>`<text x="${x}" y="${y}" font-size="${z}" font-weight="${w}" fill="${c}">${esc(s)}</text>`;
const rect=(x,y,w,h,fill,stroke='none',r=10)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}"/>`;
const line=(x,y,x2,y2)=>`<path d="M${x} ${y}H${x2}" stroke="${t.border}"/>`;
const icon=(n,x,y,z=20,c=t.secondary)=>uiIcon(n,x,y,z,c);
const chevron=(x,y)=>icon('chevron',x,y,14);
function tile(x,y,title,desc,ic){return `<g role="button" aria-label="${esc(title)}"><title>${esc(title)}</title>${rect(x,y,252,96,t.raised,t.border,12)}${rect(x+16,y+16,32,32,'#F0F2F6','none',9)}${icon(ic,x+23,y+23,18,t.body)}${text(x+61,y+37,title,15,t.heading,500)}${chevron(x+222,y+26)}${text(x+16,y+74,desc,13,t.secondary)}</g>`;}
const sections=[
 {label:'Your space',y:236,rows:[['My Personas','Choose a part of your life.','user'],['My.Career','Experience and opportunities.','briefcase'],['Knowledge','Your sources and permissions.','layers'],['My Tasks','Review what needs your attention.','tasks'],['Flows','Manage work within agreed limits.','changes'],['Workers','Assignments and activity.','guild'],['Blackboard','Shared work and context.','board']]},
 {label:'Explore',y:514,rows:[['Opportunities','Find a match for your capabilities.','chat'],['Marketplace','Browse DNA and licence scopes.','shop']]},
 {label:'DNA',y:682,rows:[['My DNA','Your own and licensed capabilities.','dna'],['Training Hub','Evidence, training and evaluation.','graduate'],['Publishing','Review an offering before release.','layers']]}
];
let s=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc"><title id="title">Sigmar AOS · macOS Discover · cool neutral proposal</title><desc id="desc">A conversation-first macOS window. A short sidebar holds New conversation, Search conversations, Discover, recent chats and the profile. Twelve tiles preserve all AOS destinations. The composer visibly supports typing, attachments and speaking.</desc><defs><style>${fontCSS}text{font-family:Satoshi,sans-serif}a{cursor:pointer}</style><clipPath id="window"><rect x=".5" y=".5" width="1439" height="999" rx="14"/></clipPath></defs><g clip-path="url(#window)">`;
s+=rect(0,0,W,H,t.canvas,'none',0)+rect(0,0,264,H,t.panel,'none',0);
// Unified macOS title bar; system controls use native geometry rather than mobile chrome.
s+=rect(264,0,1176,64,'#F4F5F7','none',0)+line(264,64,1440,64);
for(const [i,c] of ['#FF5F57','#FEBC2E','#28C840'].entries())s+=`<circle cx="${24+20*i}" cy="30" r="6" fill="${c}" stroke="#000" stroke-opacity=".12"/>`;
s+=`<g aria-label="Toggle sidebar">${rect(216,16,32,28,'transparent')}${icon('board',223,21,18)}</g>`;
s+=text(296,39,'Discover',14,t.heading,500)+text(1260,39,'Personal account',12,t.secondary);
s+=`<path d="M264 0V1000" stroke="${t.border}"/>`;
s+=vector('logos/Main Logo.svg',24,88,132,30)+text(24,145,'Personal AOS',12,t.secondary);
s+=rect(16,172,232,42,t.heading,'none',9)+icon('plus',29,183,20,'#FFFFFF')+text(59,199,'New conversation',14,'#FFFFFF',500)+text(211,198,'⌘N',12,'#FFFFFF');
s+=icon('search',29,237,19)+text(59,252,'Search conversations',13,t.body);
s+=rect(16,273,232,42,t.selected,'none',9)+`<path d="M30 284h7v7h-7zm11 0h7v7h-7zm-11 11h7v7h-7zm11 0h7v7h-7z" fill="none" stroke="${t.link}" stroke-width="1.5"/>`+text(59,300,'Discover',14,t.heading,500);
s+=text(24,359,'Recent conversations',12,t.secondary,500);
const chats=[['Planning my week','Today'],['Preparing for my next role',''],['Notes from the course',''],['Family plans for Friday',''],['Review my priorities','Yesterday'],['Learning goals','']];
let cy=391;for(const [label,day]of chats){if(day){s+=text(24,cy,day,11,t.secondary);cy+=24;}s+=text(24,cy,label,13,t.body);cy+=38;}
s+=line(16,918,248,918)+`<circle cx="38" cy="955" r="18" fill="${t.selected}"/>`+text(28,960,'DW',11,t.heading,500)+text(66,950,'David W.',14,t.heading,500)+text(66,969,'Personal account',11,t.secondary)+icon('down',220,945,17);
// The profile entry contains account switching, licences, settings and add-business routes.
s+=text(312,124,'Discover',26,t.heading,500)+text(312,154,'Your spaces and tools, whenever you need them.',15,t.body);
s+=rect(1052,99,340,42,t.raised,t.control,9)+icon('search',1066,111,18)+text(1094,126,'Find a space or tool',13,t.secondary);
s+=rect(312,177,1080,35,'#EEF1F5','none',8)+icon('chat',324,186,17,t.link)+text(351,200,'You can also ask Sigmar to open a space or help with a task.',13,t.body);
for(const sec of sections){s+=text(312,sec.y,sec.label,14,t.heading,500);for(const [i,r]of sec.rows.entries())s+=tile(312+(i%4)*276,sec.y+18+Math.floor(i/4)*112,...r);}
// Chat is always within reach. Mic target is explicitly 44 by 44 logical units.
s+=rect(312,846,1080,116,t.raised,t.control,16);
s+=rect(328,860,136,30,t.canvas,t.border,7)+icon('user',338,867,15)+text(362,881,'My Persona',12,t.heading,500)+icon('down',442,868,13);
s+=text(328,930,'Type or talk to Sigmar',16,t.secondary);
s+=`<g role="button" aria-label="Add attachment"><title>Add attachment</title>${rect(1276,904,44,44,'transparent')}${icon('attach',1288,916,20)}</g>`;
s+=`<g role="button" aria-label="Talk to Sigmar"><title>Talk to Sigmar</title>${rect(1332,904,44,44,t.accent,'none',12)}<g transform="translate(1343,914)" fill="none" stroke="${t.onAccent}" stroke-width="1.8" stroke-linecap="round"><rect x="7" y="1" width="8" height="13" rx="4"/><path d="M3 10v2a8 8 0 0 0 16 0v-2M11 20v3M7 23h8"/></g></g>`;
s+=text(312,986,'Example workspace',11,t.secondary)+text(1155,986,'macOS · colour refinement',11,t.secondary);
s+=`</g><rect x=".5" y=".5" width="1439" height="999" rx="14" fill="none" stroke="${t.border}"/></svg>`;
fs.writeFileSync(path.join(__dirname,'01-discover-macos-light-v2.svg'),s);
console.log('One SVG written: 1440 × 1000; 12 tiles; embedded Satoshi Regular and Medium; original vector logo.');
