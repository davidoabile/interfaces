const fs=require('node:fs');
const path=require('node:path');
process.env.FONTCONFIG_FILE=path.join(__dirname,'fontconfig.xml');
const sharp=require('/Users/doabile/workspace/hedgetech/workers/sigmar-aos-site/node_modules/sharp');
const root=path.resolve(__dirname,'../../..');
const theme=process.argv[2]==='light'?'light':'dark';
const art='data:image/png;base64,'+fs.readFileSync(path.join(__dirname,`sigmar-dna-${theme}-background.png`)).toString('base64');
function vector(file,x,y,w,h,matte=false){let s=fs.readFileSync(path.join(root,file),'utf8').replace(/<\?xml[^>]*>/g,'').replace(/<!--[\s\S]*?-->/g,'');if(matte)s=s.replace('<rect width="221.2" height="50"/>','');return s.replace(/<svg\b[^>]*>/,m=>m.replace(/\s(?:x|y|width|height)="[^"]*"/g,'').replace('<svg',`<svg x="${x}" y="${y}" width="${w}" height="${h}"`));}
const text=(x,y,s,size=16,weight=400,color='#E8DCCB',extra='')=>`<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${color}" ${extra}>${s}</text>`;
const center=(x,y,s,size=16,weight=400,color='#E8DCCB')=>text(x,y,s,size,weight,color,'text-anchor="middle"');
function form(x,y,w,android){let s=`<g transform="translate(${x},${y})">`;
s+=text(0,0,'Log in to Sigmar',22,500)+text(0,34,'Use your email address or mobile number.',16,400,'#BFB5A9');
if(android){s+=`<rect y="72" width="${w}" height="48" rx="24" fill="#201C18" stroke="#918171"/><path d="M24 72H${w/2}v48H24a24 24 0 0 1 0-48Z" fill="#3B2B20"/><path d="M${w/2} 72v48" stroke="#918171"/><path d="m${w/4-38} 96 4 4 8-9" fill="none" stroke="#E8DCCB" stroke-width="1.7" stroke-linecap="round"/>`+center(w/4+9,102,'Email',14,500)+center(w*0.75,102,'Mobile number',14,500);
s+=`<rect y="160" width="${w}" height="56" rx="4" fill="#201C18" stroke="#918171"/><rect x="12" y="150" width="100" height="20" fill="#201C18"/>`+text(16,165,'Email address',14,500,'#A69B8E')+text(16,195,'Enter your email address',16,400,'#A69B8E');
}else{s+=`<rect y="78" width="${w}" height="36" rx="9" fill="#2B2520"/><rect x="2" y="80" width="${w/2-3}" height="32" rx="7" fill="#332D27" stroke="#918171" stroke-width="0.5"/>`+center(w/4,102,'Email',14,500)+center(w*.75,102,'Mobile number',14);
s+=text(0,151,'Email address',14,500,'#A69B8E')+`<rect y="162" width="${w}" height="52" rx="10" fill="#332D27" stroke="#918171"/>`+text(16,195,'Enter your email address',16,400,'#A69B8E');}
s+=`<rect y="240" width="${w}" height="48" rx="${android?24:12}" fill="#E87832"/>`+center(w/2,270,'Send passcode',15,500,'#1F1A16')+center(w/2,314,'We’ll send you a one-time code.',13,400,'#A69B8E');
s+=center(w/2-62,380,'New to Sigmar?',14,400,'#A69B8E')+text(w/2-8,380,'Create account',14,500,'#F08D4C');return s+'</g>';}
function workflowPreview(x,y,width,id){
 const height=width*450/947;
 const arrow=`url(#workflow-arrow-${id})`;
 const node=(nx,ny,nw,label,sub,success=false)=>`<rect x="${nx}" y="${ny}" width="${nw}" height="54" rx="${success?27:8}" fill="#332D27" stroke="${success?'#83B89A':'#918171'}"/>${center(nx+nw/2,ny+23,label,13,500)}${center(nx+nw/2,ny+41,sub,10,400,'#A69B8E')}`;
 let v=`<svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="0 0 720 342" font-family="Satoshi, sans-serif"><defs><clipPath id="wf-clip-${id}"><rect x="0.5" y="0.5" width="719" height="341" rx="12"/></clipPath><pattern id="wf-dots-${id}" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="8" cy="8" r="0.7" fill="#494037"/></pattern><marker id="workflow-arrow-${id}" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 8 4 0 8Z" fill="#A69B8E"/></marker></defs><g clip-path="url(#wf-clip-${id})"><rect width="720" height="342" fill="#201C18"/><rect width="720" height="58" fill="#2B2520"/><path d="M0 58H720" stroke="#494037"/>${text(20,25,'Flow Designer',15,500)}${text(20,44,'order_sync',11,400,'#A69B8E')}<rect x="638" y="18" width="62" height="24" rx="5" fill="#332D27"/>${center(669,34,'Example',11,400,'#A69B8E')}<rect y="59" width="720" height="283" fill="url(#wf-dots-${id})"/>`;
 v+=`<g fill="none" stroke="#A69B8E" stroke-width="1.3" marker-end="${arrow}"><path d="M96 168H120"/><path d="M256 168H299"/><path d="M389 168H460"/><path d="M594 168H625"/><path d="M344 213V269"/><path d="M409 296H445Q527 296 527 260V196"/></g>`;
 v+=node(24,141,72,'Start','start',true)+node(120,141,136,'Validate order','validate_order');
 v+=`<path d="M344 123 389 168 344 213 299 168Z" fill="#3B2B20" stroke="#E87832"/>${center(344,163,'Approval',12,500)}${center(344,180,'condition',12,500)}`;
 v+=node(460,141,134,'Record inventory','movement')+node(625,141,72,'Complete','complete',true)+node(285,269,124,'Review','review_order');
 v+=`<rect x="393" y="150" width="62" height="20" rx="4" fill="#2B2520"/>${center(424,164,'Approved',10,400,'#83B89A')}<rect x="295" y="227" width="98" height="20" rx="4" fill="#2B2520"/>${center(344,241,'Missing approval',10,400,'#E4C078')}<rect x="498" y="231" width="58" height="20" rx="4" fill="#2B2520"/>${center(527,245,'Reviewed',10,400,'#BFB5A9')}</g><rect x="0.5" y="0.5" width="719" height="341" rx="12" fill="none" stroke="#918171"/></svg>`;
 return v;
}
function tablet(w,h,android,id){const split=w>=1024&&w/h>1.15;const fw=Math.min(420,w-96);const fx=split?w-96-fw:(w-fw)/2;const showcasePortrait=!split&&w>=768&&h>=1100;const fy=split?Math.round((h-440)/2)+25:showcasePortrait?550:Math.round((h-440)/2)+10;
let s=`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" font-family="Satoshi, sans-serif"><defs><clipPath id="clip-${id}"><rect width="${w}" height="${h}" rx="24"/></clipPath><filter id="blur-${id}" x="-15%" y="-10%" width="130%" height="120%" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="9"/></filter><radialGradient id="quiet-${id}" cx="${split?'73%':'50%'}" cy="48%" r="66%"><stop offset="0" stop-color="#201C18" stop-opacity="1"/><stop offset="0.44" stop-color="#201C18" stop-opacity="0.98"/><stop offset="1" stop-color="#201C18" stop-opacity="0.25"/></radialGradient></defs><g clip-path="url(#clip-${id})"><rect width="${w}" height="${h}" fill="#201C18"/><image href="${art}" x="0" y="0" width="${split?Math.round(w*.75):w}" height="${h}" preserveAspectRatio="xMidYMid slice" opacity="0.42" filter="url(#blur-${id})"/><rect width="${w}" height="${h}" fill="url(#quiet-${id})"/></g><rect x="0.5" y="0.5" width="${w-1}" height="${h-1}" rx="24" fill="none" stroke="#494037"/>`;
s+=text(30,28,'9:41',12,500)+text(w-35,28,'Wi-Fi  100%',11,400,'#A69B8E','text-anchor="end"');
s+=vector(theme==='dark'?'logos/Black BG Main Logo.svg':'logos/Main Logo.svg',split?80:48,80,142,32,theme==='dark');
if(split){
 const px=64,pw=fx-128,py=310;
 s+=text(px,py-38,'Your process, made visible.',22,500);
 s+=workflowPreview(px,py,pw,id);
 s+=text(px,py+pw*450/947+38,'Example Flow: order validation and approval',14,500,'#BFB5A9');
 s+=text(px,py+pw*450/947+64,'Validate. Review when needed. Record the outcome.',14,400,'#A69B8E');
 s+=`<path d="M${fx-48} 160v${h-320}" stroke="#494037"/>`;
}else if(showcasePortrait){
 const pw=Math.min(640,w-96),px=(w-pw)/2,py=154;
 s+=workflowPreview(px,py,pw,id);
 s+=text(px,py+pw*450/947+28,'Example Flow: order validation and approval',13,400,'#A69B8E');
}
s+=form(fx,fy,fw,android);
const footerY=h-70;s+=text(w/2-104,footerY,'Privacy policy',12,400,'#A69B8E')+center(w/2-10,footerY,'·',12,400,'#A69B8E')+vector('sigmar-ia-icons/idle.svg',w/2+8,footerY-16,20,20)+text(w/2+36,footerY,'Help',12,400,'#A69B8E');
s+=`<rect x="${w/2-60}" y="${h-17}" width="120" height="4" rx="2" fill="#A69B8E"/></svg>`;return s;}
function palette(svg){if(theme==='dark')return svg;const colors={'#201C18':'#F7F4EE','#171411':'#E9E2D8','#E8DCCB':'#29231F','#BFB5A9':'#514940','#A69B8E':'#665C52','#494037':'#CFC2B4','#918171':'#8F8072','#2B2520':'#E9E2D8','#332D27':'#FFFAF4','#3B2B20':'#F4E2D3','#F08D4C':'#9C450C','#83B89A':'#326146','#E4C078':'#785417'};return svg.replace(/#[0-9A-Fa-f]{6}/g,c=>colors[c]||c);}
const layouts=[{id:'compact-portrait',w:600,h:960,android:true,label:'Compact portrait · 600 × 960 · Android'},{id:'regular-portrait',w:834,h:1194,android:false,label:'Regular portrait · 834 × 1194 · iPadOS'},{id:'large-landscape',w:1366,h:1024,android:true,label:'Large landscape · 1366 × 1024 · Android'}];
async function build(){let board='<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="1840" viewBox="0 0 1280 1840"><rect width="1280" height="1840" fill="#171411"/>';
for(const [i,l]of layouts.entries()){const raw=tablet(l.w,l.h,l.android,l.id);const svg=palette(raw);const name=`01-login-tablet-${l.id}-${theme}-v3`;fs.writeFileSync(path.join(__dirname,name+'.svg'),svg);await sharp(Buffer.from(svg),{density:144}).png().toFile(path.join(__dirname,name+'.png'));const scale=i===2?.82:.65;const x=i===0?130:i===1?650:80;const y=i===2?940:70;board+=`<g transform="translate(${x},${y}) scale(${scale})"><image href="data:image/png;base64,${fs.readFileSync(path.join(__dirname,name+'.png')).toString('base64')}" width="${l.w}" height="${l.h}"/></g><g font-family="Satoshi, sans-serif">${center(x+l.w*scale/2,y+l.h*scale+34,l.label,14,400,'#A69B8E')}</g>`;}
board+='</svg>';board=palette(board);const name=`01-login-tablets-${theme}-overview-v3`;fs.writeFileSync(path.join(__dirname,name+'.svg'),board);await sharp(Buffer.from(board),{density:108}).png().toFile(path.join(__dirname,name+'.png'));console.log(`Created ${theme}: tablet product-preview layouts and overview.`);}
build().catch(e=>{console.error(e);process.exitCode=1;});
