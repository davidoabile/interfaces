/* Approved shared charcoal theme. Preserve content and review routes across all layouts. */
const fs=require('node:fs'),path=require('node:path');
const {vector,sharp}=require('../aos-native-mockups/components.cjs');
const home=__dirname;
const palette={
 '#FCFDFE':'#201C18','#F6F8FA':'#201C18','#F3F5F7':'#171411','#EBEFF3':'#171411',
 '#F8F9FB':'#201C18','#F0F2F5':'#2B2520','#F4F5F7':'#332D27',
 '#E4E8EF':'#3B2B20','#DCE1E8':'#494037','#8C96A5':'#918171',
 '#424C5B':'#BFB5A9','#5B6573':'#A69B8E','#98450F':'#F08D4C',
 '#78543E':'#F08D4C','#9F6B49':'#E87832','#EEF1F5':'#2B2520',
 '#E2E6EC':'#494037','#1F1A16':'#201C18','#F7F1E9':'#332D27',
 '#326146':'#83B89A','#785417':'#E4C078','#A27050':'#E87832',
 '#17212F':'#000000'
};
function toDark(light,e,dna){const artwork=[];let s=light.replace(/<svg\b(?=[^>]*\bx=")[^>]*>[\s\S]*?<\/svg>/g,svg=>{
 if(/viewBox="0 0 720 342"/.test(svg))return svg; // Authored teaser follows semantic colours.
 if(/viewBox="0 0 221\.2 50"/.test(svg)){const attr=n=>svg.match(new RegExp('\\b'+n+'="([^\\"]+)"'))?.[1];svg=vector('logos/Black BG Main Logo.svg',attr('x'),attr('y'),attr('width'),attr('height'),true);}
 artwork.push(svg);return '__BRAND_ARTWORK_'+(artwork.length-1)+'__';});
 s=s.replace(/#[0-9a-f]{6}/gi,c=>palette[c.toUpperCase()]||c);
 s=s.replace(/<text\b[^>]*>/g,tag=>tag.replace(/fill="#(?:202630|FFFFFF)"/gi,'fill="#E8DCCB"'));
 s=s.replace(/<rect\b[^>]*>/g,tag=>tag.replace(/fill="#FFFFFF"/gi,'fill="#2B2520"').replace(/fill="#202630"/gi,'fill="#332D27"'));
 s=s.replace(/<stop\b[^>]*>/g,tag=>tag.replace(/stop-color="#(?:303945|202630)"/gi,'stop-color="#332D27"'));
 s=s.replace(/(<text\b[^>]*>)Light(<\/text>)/g,'$1Dark$2');
 s=s.replace(/stroke="#(?:202630|FFFFFF)"/gi,'stroke="#E8DCCB"');
 s=s.replace(/ · light<\/title>/g,' · dark</title>').replace(/&quot;theme&quot;:&quot;light&quot;/g,'&quot;theme&quot;:&quot;dark&quot;');
 s=s.replace(/__BRAND_ARTWORK_(\d+)__/g,(_,i)=>artwork[Number(i)]);
 s=s.replace(/href="data:image\/png;base64,[^"]+"/g,`href="data:image/png;base64,${dna}"`);

 return s;
}
async function build(){const p=path.join(home,'manifest.json'),m=JSON.parse(fs.readFileSync(p));
 const settings=m.entries.filter(e=>['Settings','Persona management','Own AI'].includes(e.group));const lights=m.entries.filter(e=>e.theme==='light'&&!['Settings','Persona management','Own AI'].includes(e.group));if(![595,602].includes(lights.length))throw Error('Main AOS light inventory is incomplete');
 const dna=(await sharp(path.resolve(home,'../login-register/samples/sigmar-dna-dark-background.png')).resize({width:1100}).blur(9).png({palette:true,colors:96}).toBuffer()).toString('base64');
 const dark=[];for(const e of lights){const out='dark/'+e.svg,file=path.join(home,out);fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,toDark(fs.readFileSync(path.join(home,e.svg),'utf8'),e,dna));dark.push({...e,theme:'dark',svg:out});}
 m.entries=[...lights,...dark,...settings];m.screens=new Set(m.entries.map(e=>e.screen)).size;m.total=m.entries.length;m.themes=['light','dark'];m.theme='Light and approved Sigmar charcoal';m.darkSampleOnly=false;m.darkReference='dark/macos/discover-charcoal-v2.svg';m.version=2;
 fs.writeFileSync(p,JSON.stringify(m,null,2));console.log(dark.length+' main dark SVGs written; '+settings.length+' settings SVGs preserved. Total: '+m.total);}
module.exports={build,toDark,palette};if(require.main===module)build().catch(e=>{console.error(e);process.exitCode=1;});
