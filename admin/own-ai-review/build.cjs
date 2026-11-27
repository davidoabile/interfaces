if(require('node:fs').existsSync(require('node:path').join(__dirname,'../own-ai-mockups/manifest.json'))){console.log('Approved source retained; use admin/own-ai-mockups/build.cjs.');process.exit(0);}
/* First own-AI review: one macOS sample with its Persona-selection navigation state. */
const fs=require('node:fs'),path=require('node:path');
const {vector,uiIcon,esc}=require('../aos-native-mockups/components.cjs');
const {categories}=require('../settings-mockups/catalogue.cjs');
const fonts=require('../persona-management/fonts.json'),home=__dirname,W=1200,H=920;
const t={canvas:'#F8F9FB',side:'#F0F2F5',card:'#FFFFFF',selected:'#E4E8EF',ink:'#202630',body:'#424C5B',secondary:'#5B6573',border:'#DCE1E8',control:'#8B95A4',copper:'#98450F',green:'#326146'};
const routes=[];
const text=(x,y,s,z=14,c=t.ink,w=400)=>`<text x="${x}" y="${y}" font-size="${z}" fill="${c}" font-weight="${w}">${esc(s)}</text>`;
const rect=(x,y,w,h,fill=t.card,stroke='none',r=10)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}"/>`;
const icon=(name,x,y,c=t.secondary,z=20)=>uiIcon(name,x,y,z,c);
const rule=(x,y,w)=>`<path d="M${x} ${y}h${w}" stroke="${t.border}"/>`;
function control(screen,label,route,x,y,w,h,body,href){routes.push({screen,label,route,href:href||null,status:href?'Linked review state':'Next batch after visual approval'});const g=`<g role="button" aria-label="${esc(label)}" data-route="${route}">${rect(x,y,w,h,'transparent')}<title>${esc(label)}</title>${body}</g>`;return href?`<a href="${href}">${g}</a>`:g;}
function button(screen,label,route,x,y,w=130,primary=false,href){return control(screen,label,route,x,y,w,44,rect(x,y,w,44,primary?t.ink:t.card,primary?'none':t.control,8)+text(x+16,y+27,label,13,primary?'#FFFFFF':t.ink,500),href);}
function card(x,y,w,h,body){return `<g filter="url(#lift)">${rect(x,y,w,h,t.card,t.border,12)}</g>`+body;}
function start(id,title,settings=true){let s=`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc"><title id="title">${esc(title)} · macOS first review</title><desc id="desc">Proposed own-AI design. Settings manages accounts. Each Persona chooses an account; Sigmar AI is the default. Illustrative metadata only, no keys or live operations. Unlinked controls are planned for the batch following approval.</desc><metadata>${esc(JSON.stringify({screen:id,platform:'macos',theme:'light',firstSample:true,approval:'Pending visual approval',viewport:[W,H],source:'PR #382 GOV-415 plus user per-Persona refinement'}))}</metadata><defs><style>${['Regular','Medium'].map((n,i)=>`@font-face{font-family:Satoshi;font-weight:${i?500:400};src:url(data:font/woff;base64,${fonts[n]}) format('woff');}`).join('')}text{font-family:Satoshi,sans-serif}</style><linearGradient id="canvas" x2="0" y2="1"><stop stop-color="#FCFDFE"/><stop offset="1" stop-color="#F6F8FA"/></linearGradient><linearGradient id="side" x2="0" y2="1"><stop stop-color="#F3F5F7"/><stop offset="1" stop-color="#EBEFF3"/></linearGradient><filter id="lift" x="-5%" y="-15%" width="110%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#26354A" flood-opacity=".035"/></filter></defs>`;
s+=rect(0,0,W,H,'url(#canvas)','none',14)+rect(0,0,260,H,'url(#side)','none',0)+rect(260,0,940,56,'#F4F5F7','none',0)+rule(260,56,940)+`<path d="M260 0V920" stroke="${t.border}"/>`;
for(const [i,c]of ['#FF5F57','#FEBC2E','#28C840'].entries())s+=`<circle cx="${24+i*20}" cy="28" r="6" fill="${c}"/>`;
s+=text(700,34,settings?'Settings':'Personas',13,t.ink,500)+vector('logos/Main Logo.svg',28,84,118,30)+text(28,135,settings?'Settings':'Personal account',12,t.secondary);
s+=rect(20,157,220,38,t.card,t.control,8)+icon('search',32,167)+text(61,181,settings?'Search settings':'Search Personas',13,t.secondary);
const items=settings?categories:[['New conversation','plus','@aos-01'],['Search conversations','search','@search'],['Discover','board','@discover'],['Projects','layers','@projects']];
items.forEach(([name,ic,to],i)=>{const y=220+i*49,active=settings?name==='Privacy & AI access':name==='Discover';const href=settings?'../settings-mockups/macos/light/'+to+'.svg':'../global-mockups/'+JSON.parse(fs.readFileSync(path.resolve(home,'../global-mockups/manifest.json'))).entries.find(e=>e.screen===to.slice(1)&&e.platform==='macos'&&e.theme==='light').svg;
s+=control(id,name,to,16,y,228,44,rect(16,y,228,44,active?t.selected:'transparent','none',8)+icon(ic,30,y+12,active?t.copper:t.secondary)+text(60,y+28,name,13,t.ink,active?500:400),href);});
s+=rule(24,824,212)+rect(28,847,34,34,t.selected,'none',17)+text(37,869,'DW',11,t.secondary,500)+text(75,860,'David W.',13,t.ink,500)+text(75,880,'Personal account',11,t.secondary);
return s;}
function finish(s){return s+text(300,892,'Illustrative accounts · design review',11,t.secondary)+`<rect x=".5" y=".5" width="1199" height="919" rx="14" fill="none" stroke="${t.border}"/></svg>`;}
const settings='01-ai-accounts-macos-light-v1.svg',persona='02-persona-ai-selector-macos-light-v1.svg';
let s=start('own-ai-accounts','AI accounts');
s+=text(300,96,'Privacy & AI access  /  AI accounts',12,t.secondary)+rect(300,112,24,2,t.copper,'none',1)+text(300,151,'AI accounts',26,t.ink,500)+text(300,178,'Add your own AI account, then choose it for each Persona.',15,t.body);
s+=card(300,204,860,104,rect(320,224,42,42,'#F4F5F7','none',10)+icon('chat',331,235,t.copper)+text(378,235,'Sigmar AI',16,t.ink,500)+text(378,261,'Default for every Persona until you choose another account.',14,t.body)+rect(1044,225,94,26,t.selected,'none',6)+text(1057,243,'Built-in',12,t.ink,500));
s+=text(300,347,'Your AI accounts',16,t.ink,500)+text(300,372,'Adding an account leaves your Persona choices unchanged.',13,t.secondary);
s+=card(300,392,860,188,rect(320,413,38,38,'#F4F5F7','none',9)+icon('lock',329,422,t.copper)+text(374,425,'Anthropic',15,t.ink,500)+text(374,450,'Personal account · API key ending 7Q2M',13,t.secondary)+text(374,473,'Connected · ready to choose in a Persona',12,t.green,500)+button('own-ai-accounts','Manage','own-ai-manage-anthropic',1010,420,128)+rule(320,491,820)+text(374,520,'OpenAI',15,t.ink,500)+text(374,545,'Connect with an API key.',13,t.secondary)+button('own-ai-accounts','Add API key','own-ai-add-openai',1010,510,128));
s+=card(300,600,860,78,icon('user',320,621,t.copper)+text(355,627,'Choose AI in each Persona',15,t.ink,500)+text(355,652,'My.Career is currently using Sigmar AI.',13,t.secondary)+button('own-ai-accounts','View selection','own-ai-persona-selector',990,617,148,false,persona));
s+=card(300,698,860,104,text(320,727,'When your own AI is selected',14,t.ink,500)+text(320,754,'Requests use that provider and are billed to your provider account.',13,t.body)+text(320,779,'If it fails, the run stops and shows an error. No automatic switch to Sigmar AI.',13,t.body));
s+=control('own-ai-accounts','Usage & daily limits','own-ai-usage',300,818,860,44,text(320,845,'Usage & daily limits',13,t.copper,500)+text(545,845,'Review usage and your daily cap.',13,t.secondary)+icon('chevron',1118,830,t.copper));
fs.writeFileSync(path.join(home,settings),finish(s));
s=start('own-ai-persona-selector','My.Career · AI account',false);
s+=text(300,96,'My Personas  /  My.Career',12,t.secondary)+rect(300,112,24,2,t.copper,'none',1)+text(300,151,'AI account',26,t.ink,500)+text(300,178,'Choose which account My.Career uses for its AI requests.',15,t.body);
s+=card(300,204,860,92,icon('briefcase',320,227,t.copper)+text(356,236,'My.Career',16,t.ink,500)+text(356,263,'This choice applies only to this Persona.',14,t.body));
function option(y,name,detail,route,selected=false,disabled=false){return control('own-ai-persona-selector',name,route,320,y,820,98,rect(320,y,820,98,selected?'#F4F6F9':t.card,selected?t.control:t.border,10)+`<circle cx="346" cy="${y+31}" r="9" fill="none" stroke="${disabled?t.border:t.control}"/>`+(selected?`<circle cx="346" cy="${y+31}" r="4.5" fill="${t.ink}"/>`:'')+text(372,y+35,name,15,disabled?t.secondary:t.ink,500)+text(372,y+62,detail,13,t.secondary)+(selected?text(1025,y+35,'Current',12,t.copper,500):''));}
s+=card(300,320,860,370,text(320,351,'Available accounts',16,t.ink,500));
s+=option(371,'Sigmar AI','Built-in · the default for this Persona.','own-ai-select-sigmar',true)+option(481,'Anthropic · Personal account','Your API account · key ending 7Q2M.','own-ai-review-anthropic');
s+=text(330,612,'OpenAI',14,t.secondary,500)+text(330,637,'Add an API key in Settings to make it available here.',13,t.secondary)+button('own-ai-persona-selector','Manage accounts','own-ai-accounts',968,609,172,false,settings);
s+=rect(300,711,860,66,'#F0F2F5','none',10)+icon('lock',320,732,t.copper)+text(356,737,'Only the AI account changes.',14,t.ink,500)+text(356,759,'Persona permissions and source access still apply.',13,t.secondary);
s+=button('own-ai-persona-selector','Keep Sigmar AI','persona-home',300,803,160,true,'../persona-management/macos/light/persona-home.svg')+button('own-ai-persona-selector','Cancel','persona-home',472,803,100,false,'../persona-management/macos/light/persona-home.svg');
fs.writeFileSync(path.join(home,persona),finish(s));
fs.writeFileSync(path.join(home,'route-plan.json'),JSON.stringify({scope:'First macOS sample with linked Persona-selector state; not a full flow batch',approval:'Pending visual approval',routes},null,2));
console.log('Two SVG navigation states for first-sample approval.');
