/* First dark sample only. Extend the batch after its explicit review. */
const fs=require('node:fs'),path=require('node:path');
const {vector}=require('../aos-native-mockups/components.cjs');
const home=__dirname;
if(JSON.parse(fs.readFileSync(path.join(home,'manifest.json'))).darkSampleOnly===false)throw Error('The dark batch is approved and complete. Use build-dark.cjs or build-all.cjs.');
const light=fs.readFileSync(path.join(home,'macos/discover.svg'),'utf8');
// Exact warm-charcoal foundations from the shared Sigmar branding topology.
const palette={
 '#FCFDFE':'#201C18','#F6F8FA':'#201C18',
 '#F3F5F7':'#171411','#EBEFF3':'#171411',
 '#F8F9FB':'#201C18','#F0F2F5':'#2B2520','#F4F5F7':'#332D27',
 '#E4E8EF':'#3B2B20','#DCE1E8':'#494037','#8C96A5':'#918171',
 '#424C5B':'#BFB5A9','#5B6573':'#A69B8E',
 '#98450F':'#F08D4C','#78543E':'#F08D4C','#9F6B49':'#E87832',
 '#EEF1F5':'#2B2520','#E2E6EC':'#494037','#1F1A16':'#201C18'
};
// Swap the exact original vector lockup, then protect it from theme recolouring.
const lightLogo=vector('logos/Main Logo.svg',24,88,132,30);
if(!light.includes(lightLogo))throw Error('Original sidebar logo not found');
let svg=light.replace(lightLogo,'__ORIGINAL_DARK_LOGO__');
svg=svg.replace(/#[0-9a-f]{6}/gi,c=>palette[c.toUpperCase()]||c);
// Separate semantic foreground, surface and primary-action roles.
svg=svg.replace(/<text\b[^>]*>/g,tag=>tag.replace(/fill="#202630"/gi,'fill="#E8DCCB"'));
svg=svg.replace(/<rect\b[^>]*>/g,tag=>tag.replace(/fill="#FFFFFF"/gi,'fill="#2B2520"'));
svg=svg.replace(/<stop\b[^>]*>/g,tag=>tag.replace(/stop-color="#303945"/gi,'stop-color="#332D27"').replace(/stop-color="#202630"/gi,'stop-color="#332D27"'));
svg=svg.replace(/<text\b[^>]*>/g,tag=>tag.replace(/fill="#FFFFFF"/gi,'fill="#E8DCCB"'));
svg=svg.replace('__ORIGINAL_DARK_LOGO__',vector('logos/Black BG Main Logo.svg',24,88,132,30,true));
svg=svg.replace('Discover · macOS · light','Discover · macOS · dark').replace(/&quot;theme&quot;:&quot;light&quot;/g,'&quot;theme&quot;:&quot;dark&quot;');
svg=svg.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/g,'<g data-preview-control="true">$1</g>');
svg=svg.replace('SVG mockup. Global Sigmar design;', 'First dark-mode sample awaiting approval. Global Sigmar design;');
const out='dark/macos/discover-charcoal-v2.svg';fs.mkdirSync(path.join(home,'dark/macos'),{recursive:true});fs.writeFileSync(path.join(home,out),svg);
const p=path.join(home,'manifest.json'),m=JSON.parse(fs.readFileSync(p,'utf8'));m.entries=m.entries.filter(e=>e.theme!=='dark');
const base=m.entries.find(e=>e.platform==='macos'&&e.screen==='discover'&&e.theme==='light');
m.entries.push({...base,theme:'dark',svg:out,notice:'Sigmar charcoal · revised sample awaiting approval',sample:true});
m.total=m.entries.length;m.theme='Light set and first dark-mode sample';m.themes=['light','dark'];m.darkSampleOnly=true;
fs.writeFileSync(p,JSON.stringify(m,null,2));console.log('First dark sample added. Light set preserved.');
