/* Regression checks for the reported alert, wizard and media gaps. */
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');const home=__dirname,m=require('./manifest.json');let uploads=0,libraries=0,wizard=0,overview=0;
const forbidden=['Review before continuing','Your change needs attention','Your previous accepted state remains in effect while the update is pending.'];
for(const e of m.entries){const s=fs.readFileSync(path.join(home,e.svg),'utf8');for(const text of forbidden)assert(!s.includes(text),e.screen+' generic status copy');
if(e.screen==='persona-home'){assert(s.includes('persona-wizard-1.svg'));assert(s.includes('persona-media-career-library.svg'));overview++;}
if(/^persona-wizard-[1-4]$/.test(e.screen)){assert(s.includes('Add Persona · step '+e.step+' of 4'));wizard++;}
if(/^persona-(career|work|learning|family|health|travel)-.+-upload$/.test(e.screen)){assert(s.includes('Choose files')&&s.includes('stroke-dasharray'),e.screen+' lacks upload UI');uploads++;}
if(/^persona-media-.+-library$/.test(e.screen)){assert(s.includes('Preview Profile landscape.png')&&s.includes('Preview example-persona-notes.pdf'),e.screen+' lacks previews');libraries++;}}
assert.equal(overview,14);assert.equal(wizard,56);assert.equal(libraries,98);const gallery=fs.readFileSync(path.join(home,'../global-mockups/index.html'),'utf8');for(const id of ['personaHome','personaWizard','personaMedia'])assert(gallery.includes('id="'+id+'"'));
for(const mod of ['./catalogue.cjs','../settings-mockups/catalogue.cjs','../own-ai-mockups/catalogue.cjs'])for(const s of require(mod).screens.filter(s=>s.tone)){assert(s.feedbackTitle,s.id+' needs specific feedback');assert(!['Review before continuing','Action needed','Confirmed','Information'].includes(s.feedbackTitle),s.id+' generic feedback');}
const report={overviewEntries:overview,wizardScreens:wizard,mediaLibraries:libraries,sectionUploadScreens:uploads,genericAlertCopies:0,galleryShortcuts:3};fs.writeFileSync(path.join(home,'ux-verification.json'),JSON.stringify(report,null,2));console.log(report);
