const fs = require('node:fs');
const path = require('node:path');
const sharp = require('/Users/doabile/workspace/hedgetech/workers/sigmar-aos-site/node_modules/sharp');
const root = path.resolve(__dirname, '../../..');
const embed = p => 'data:image/svg+xml;base64,' + fs.readFileSync(path.join(root,p)).toString('base64');
const logo=embed('logos/Main Logo.svg');
const ai=embed('sigmar-ia-icons/idle.svg');
const text=(x,y,s,size=16,weight=400,fill='#292724',extra='')=>`<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" ${extra}>${s}</text>`;
const center=(x,y,s,size=16,weight=400,fill='#292724')=>text(x,y,s,size,weight,fill,'text-anchor="middle"');
function screen(x,android){
const ink='#292724',muted='#716D66';
let s=`<g transform="translate(${x},48)" font-family="${android?'Roboto, Arial':'Helvetica Neue, Arial'}, sans-serif"><rect width="393" height="852" rx="26" fill="#F8F6F2" stroke="#D4D0C8"/><image href="${logo}" x="24" y="99" width="124" height="28"/>`;
s+=text(30,29,'9:41',13,600);
s+=android?'<circle cx="196" cy="24" r="4.5" fill="#292724"/>':'<rect x="157" y="12" width="80" height="23" rx="11.5" fill="#1F1E1B"/>';
s+='<path d="M316 26v-4m4 4v-7m4 7V16" stroke="#292724" stroke-width="2.4"/><path d="M332 20q7-7 14 0m-11 3q4-4 8 0" stroke="#292724" stroke-width="1.6" fill="none"/><rect x="353" y="17" width="17" height="9" rx="2" stroke="#292724" fill="none"/><rect x="355" y="19" width="12" height="5" rx="1" fill="#292724"/>';
s+=text(24,193,'Log in to Sigmar',22,600);
s+=text(24,224,'Use your email address or mobile number.',16,400,muted);
if(android){s+='<rect x="24" y="262" width="345" height="48" rx="24" fill="none" stroke="#A8A29A"/><path d="M196.5 262v48" stroke="#A8A29A"/><path d="M48 262H196.5v48H48a24 24 0 0 1 0-48Z" fill="#F9DEC9"/><path d="m71 286 4 4 8-9" fill="none" stroke="#292724" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>';s+=center(126,292,'Email',14,500)+center(282,292,'Mobile number',14,500);
s+='<rect x="24" y="347" width="345" height="56" rx="4" fill="none" stroke="#827C73"/><rect x="35" y="340" width="87" height="15" fill="#F8F6F2"/>';s+=text(39,352,'Email address',12,400,muted)+text(40,382,'Enter your email address',16,400,muted);
}else{s+='<rect x="24" y="268" width="345" height="36" rx="9" fill="#E9E5DF"/><rect x="26" y="270" width="169" height="32" rx="7" fill="#FFFDF9" stroke="#DDD8CF" stroke-width="0.5"/>';s+=center(110,291,'Email',14,500)+center(282,291,'Mobile number',14,400);s+=text(24,339,'Email address',13,500,muted)+'<rect x="24" y="350" width="345" height="52" rx="10" fill="#FFFDF9" stroke="#CFC9C0"/>'+text(40,382,'Enter your email address',16,400,muted);}
s+=`<rect x="24" y="426" width="345" height="52" rx="${android?26:12}" fill="#EC7107"/>`+center(196.5,458,'Send passcode',16,500);
s+=center(196.5,504,'We’ll send you a one-time code.',13,400,muted);
s+=center(147,569,'New to Sigmar?',14,400,muted)+text(201,569,'Create account',14,500,'#A94700');
s+=text(89,778,'Privacy Policy',12,400,muted)+center(183,778,'·',12,400,muted)+`<image href="${ai}" x="201" y="762" width="20" height="20"/>`+text(229,778,'Help',12,400,muted);
s+=`<rect x="${android?152:136}" y="831" width="${android?89:121}" height="4" rx="2" fill="${android?'#716D66':ink}"/></g>`;
return s;
}
const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="960" height="960" viewBox="0 0 960 960"><rect width="960" height="960" fill="#EAE7E1"/>${screen(54,false)}${screen(513,true)}<g font-family="Helvetica Neue, Arial, sans-serif">${center(250.5,930,'iOS · SwiftUI',13,400,'#5E5A54')}${center(709.5,930,'Android · Kotlin',13,400,'#5E5A54')}</g></svg>`;
fs.writeFileSync(path.join(__dirname,'01-login-native-sample-v2.svg'),svg);
sharp(Buffer.from(svg)).resize(1920,1920).png().toFile(path.join(__dirname,'01-login-native-sample-v2.png')).then(()=>console.log('Created exact-asset login sample, SVG and PNG.'));
