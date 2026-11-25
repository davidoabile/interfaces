const fs = require('node:fs');
const path = require('node:path');
process.env.FONTCONFIG_FILE = path.join(__dirname, 'fontconfig.xml');
const sharp = require('/Users/doabile/workspace/hedgetech/workers/sigmar-aos-site/node_modules/sharp');
const theme=process.argv[2] === 'light' ? 'light' : 'dark';
const root = path.resolve(__dirname, '../../..');
const embed = p => 'data:image/svg+xml;base64,' + fs.readFileSync(path.join(root,p)).toString('base64');
const logo='data:image/svg+xml;base64,'+Buffer.from(fs.readFileSync(path.join(root,'logos/Black BG Main Logo.svg'),'utf8').replace('<rect width="221.2" height="50"/>','')).toString('base64');
const ai=embed('sigmar-ia-icons/idle.svg');
const backdrop='data:image/png;base64,'+fs.readFileSync(path.join(__dirname,`sigmar-dna-${theme}-background.png`)).toString('base64');
function vector(file,x,y,width,height,matte=false){
 let source=fs.readFileSync(path.join(root,file),'utf8').replace(/<\?xml[^>]*>/g,'').replace(/<!--[\s\S]*?-->/g,'');
 if(matte)source=source.replace('<rect width="221.2" height="50"/>','');
 return source.replace(/<svg\b[^>]*>/, match=>match.replace(/\s(?:x|y|width|height)="[^"]*"/g,'').replace('<svg',`<svg x="${x}" y="${y}" width="${width}" height="${height}"`));
}
const text=(x,y,s,size=16,weight=400,fill='#E8DCCB',extra='')=>`<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" ${extra}>${s}</text>`;
const center=(x,y,s,size=16,weight=400,fill='#E8DCCB')=>text(x,y,s,size,weight,fill,'text-anchor="middle"');
function screen(x,android){
const ink='#E8DCCB',muted='#A69B8E';
let s=`<g transform="translate(${x},48)" font-family="Satoshi, sans-serif"><defs><filter id="dna-soft-${android?'android':'ios'}" x="-15%" y="-10%" width="130%" height="120%" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="6"/></filter><clipPath id="phone-${android?'android':'ios'}"><rect width="393" height="852" rx="26"/></clipPath><linearGradient id="scrim-${android?'android':'ios'}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#201C18" stop-opacity="0.20"/><stop offset="0.12" stop-color="#201C18" stop-opacity="0.35"/><stop offset="0.23" stop-color="#201C18" stop-opacity="0.96"/><stop offset="0.36" stop-color="#201C18" stop-opacity="0.99"/><stop offset="0.65" stop-color="#201C18" stop-opacity="0.98"/><stop offset="0.78" stop-color="#201C18" stop-opacity="0.20"/><stop offset="0.9" stop-color="#201C18" stop-opacity="0.90"/><stop offset="1" stop-color="#201C18" stop-opacity="0.82"/></linearGradient></defs><g clip-path="url(#phone-${android?'android':'ios'})"><rect width="393" height="852" fill="#201C18"/><image href="${backdrop}" width="393" height="852" preserveAspectRatio="xMidYMid slice" opacity="0.48" filter="url(#dna-soft-${android?'android':'ios'})"/><rect width="393" height="852" fill="url(#scrim-${android?'android':'ios'})"/></g><rect width="393" height="852" rx="26" fill="none" stroke="#494037"/>${vector(theme==='dark'?'logos/Black BG Main Logo.svg':'logos/Main Logo.svg',24,99,124,28,theme==='dark')}`;
s+=text(30,29,'9:41',13,600);
s+=android?'<circle cx="196" cy="24" r="4.5" fill="#080706"/>':'<rect x="157" y="12" width="80" height="23" rx="11.5" fill="#080706"/>';
s+='<path d="M316 26v-4m4 4v-7m4 7V16" stroke="#E8DCCB" stroke-width="2.4"/><path d="M332 20q7-7 14 0m-11 3q4-4 8 0" stroke="#E8DCCB" stroke-width="1.6" fill="none"/><rect x="353" y="17" width="17" height="9" rx="2" stroke="#E8DCCB" fill="none"/><rect x="355" y="19" width="12" height="5" rx="1" fill="#E8DCCB"/>';
s+=text(24,193,'Log in to Sigmar',22,500);
s+=text(24,224,'Use your email address or mobile number.',16,400,'#BFB5A9');
if(android){s+='<rect x="24" y="262" width="345" height="48" rx="24" fill="none" stroke="#918171"/><path d="M196.5 262v48" stroke="#918171"/><path d="M48 262H196.5v48H48a24 24 0 0 1 0-48Z" fill="#3B2B20"/><path d="m71 286 4 4 8-9" fill="none" stroke="#E8DCCB" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>';s+=center(126,292,'Email',14,500)+center(282,292,'Mobile number',14,500);
s+='<rect x="24" y="347" width="345" height="56" rx="4" fill="none" stroke="#918171"/><rect x="35" y="337" width="100" height="20" fill="#201C18"/>';s+=text(39,352,'Email address',14,500,muted)+text(40,382,'Enter your email address',16,400,muted);
}else{s+='<rect x="24" y="268" width="345" height="36" rx="9" fill="#2B2520"/><rect x="26" y="270" width="169" height="32" rx="7" fill="#332D27" stroke="#918171" stroke-width="0.5"/>';s+=center(110,291,'Email',14,500)+center(282,291,'Mobile number',14,400);s+=text(24,339,'Email address',14,500,muted)+'<rect x="24" y="350" width="345" height="52" rx="10" fill="#332D27" stroke="#918171"/>'+text(40,382,'Enter your email address',16,400,muted);}
s+=`<rect x="24" y="426" width="345" height="52" rx="${android?26:12}" fill="#E87832"/>`+center(196.5,458,'Send passcode',15,500,'#1F1A16');
s+=center(196.5,504,'We’ll send you a one-time code.',13,400,muted);
s+=center(147,569,'New to Sigmar?',14,400,muted)+text(201,569,'Create account',14,500,'#F08D4C');
s+=text(89,778,'Privacy policy',12,400,muted)+center(183,778,'·',12,400,muted)+`${vector('sigmar-ia-icons/idle.svg',201,762,20,20)}`+text(229,778,'Help',12,400,muted);
s+=`<rect x="${android?152:136}" y="831" width="${android?89:121}" height="4" rx="2" fill="${android?'#A69B8E':ink}"/></g>`;
return s;
}
let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="960" height="960" viewBox="0 0 960 960"><rect width="960" height="960" fill="#171411"/>${screen(54,false)}${screen(513,true)}<g font-family="Satoshi, sans-serif">${center(250.5,930,'iOS · SwiftUI',13,400,'#A69B8E')}${center(709.5,930,'Android · Kotlin',13,400,'#A69B8E')}</g></svg>`;
if(theme==='light'){
 const palette={'#201C18':'#F7F4EE','#171411':'#E9E2D8','#E8DCCB':'#29231F','#BFB5A9':'#514940','#A69B8E':'#665C52','#494037':'#CFC2B4','#918171':'#8F8072','#2B2520':'#E9E2D8','#332D27':'#FFFAF4','#3B2B20':'#F4E2D3','#F08D4C':'#9C450C'};
 svg=svg.replace(/#[0-9A-Fa-f]{6}/g,color=>palette[color] || color);
}
const filename=`01-login-native-dna-${theme}-v6`;
fs.writeFileSync(path.join(__dirname,filename+'.svg'),svg);
sharp(Buffer.from(svg),{density:192}).resize(1920,1920).png().toFile(path.join(__dirname,filename+'.png')).then(()=>console.log(`Created ${theme} soft-focus DNA login sample v6.`));
