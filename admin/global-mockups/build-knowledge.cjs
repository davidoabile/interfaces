const fs=require('node:fs'),path=require('node:path');
const root=__dirname;
const states={
'knowledge-add':['Add knowledge','Choose how to capture knowledge.',[['note','Add a note','Type or speak an observation.'],['upload','Add a source','Upload a document or link a reference.'],['insight','Record insight','Capture experience and reflection.']]],
'knowledge-note':['Add a note','Describe what you observed.',[['','Title','Supplier onboarding lessons'],['','Observation','Verify documentation before scheduling delivery.'],['insight','Record by speaking','Review the transcript before saving.'],['evidence','Continue','Attach supporting evidence.']]],
'knowledge-insight':['Record insight','Describe the experience and what you learned.',[['','Experience','Supplier onboarding'],['','Reflection','Confirm required documents before arranging delivery.'],['evidence','Continue','Review supporting evidence.']]],
'knowledge-upload':['Add source','Choose a document or enter a reference.',[['preview','Choose document','supplier-checklist.pdf'],['preview','Reference URL','Example reference'],['sources','Cancel','Return to sources.']]],
'knowledge-preview':['Source preview','supplier-checklist.pdf · example document',[['','Document','Supplier onboarding checklist'],['','Provenance','Member upload · version 1'],['evidence','Link source','Attach to candidate.'],['sources','Back to sources','']]],
'knowledge-evidence':['Supporting evidence','Review evidence before submitting.',[['preview','Supplier checklist','Document · version 1'],['upload','Add another source',''],['classify','Continue','Set classification and scope.']]],
'knowledge-classify':['Classification and scope','Choose access within existing authority.',[['','Classification','Standard'],['','Owner','My.Work'],['','Access','Existing authorised scope'],['submit','Review submission','']]],
'knowledge-submit':['Review submission','Confirm content, evidence and scope.',[['','Supplier onboarding lessons','Standard · My.Work · 1 source'],['submitted','Submit for review','Add a candidate to the queue.'],['evidence','Edit evidence','']]],
'knowledge-submitted':['Candidate submitted','Example confirmation · review pending.',[['candidate','View candidate',''],['home','Return to Knowledge','']]],
'knowledge-queue':['Review queue','12 items need review.',[['candidate','Needs evidence · 4','Supplier onboarding lessons'],['review','Ready for review · 5','Operational procedures'],['promote','Awaiting approval · 3','Training completion criteria'],['history','Completed reviews','Previous decisions']]],
'knowledge-candidates':['Candidates','Knowledge awaiting review.',[['candidate','Supplier onboarding lessons','Needs evidence · Standard'],['review','Operational procedures','Ready for review · Internal'],['add','Add knowledge','']]],
'knowledge-candidate':['Supplier onboarding lessons','Candidate · Standard · My.Work',[['','Content','Confirm supplier documentation before scheduling delivery.'],['preview','Supporting evidence','Supplier checklist · version 1'],['','Provenance','Member observation'],['review','Review candidate',''],['history','History and audit','']]],
'knowledge-review':['Review candidate','Inspect content, evidence and provenance before deciding.',[['','Operational procedures','Candidate · My.Work · Internal'],['preview','Supporting evidence','Review linked document.'],['request','Request evidence',''],['revision','Return for revision',''],['approve','Approve for promotion',''],['reject','Reject candidate','']]],
'knowledge-request':['Request evidence','Specify the evidence needed.',[['','Reason','Provide the source of the verification procedure.'],['requested','Send request',''],['review','Cancel','']]],
'knowledge-revision':['Return for revision','Explain what needs to change.',[['','Reason','Clarify which checks are mandatory.'],['returned','Return candidate',''],['review','Cancel','']]],
'knowledge-approve':['Approve candidate','Approval records the review decision, not promotion.',[['','Decision','Evidence reviewed.'],['approved','Confirm approval',''],['review','Cancel','']]],
'knowledge-reject':['Reject candidate','Record the reason. Audit history is retained.',[['','Reason','Evidence does not support the conclusion.'],['rejected','Confirm rejection',''],['review','Cancel','']]],
'knowledge-requested':['Evidence requested','Example outcome · awaiting evidence.',[['queue','Review queue','']]],
'knowledge-returned':['Returned for revision','Example outcome · candidate returned.',[['queue','Review queue','']]],
'knowledge-approved':['Candidate approved','Example outcome · ready for promotion.',[['promote','Review promotion',''],['queue','Review queue','']]],
'knowledge-rejected':['Candidate rejected','Example outcome · decision retained.',[['queue','Review queue',''],['history','Audit history','']]],
'knowledge-promote':['Promote candidate','Choose a proposed destination.',[['promote-knowledge','Knowledge','Reusable reference'],['promote-skill','Skill','Proposed capability evidence'],['promote-dna','DNA','Proposed DNA change subject to compilation and approval']]],
'knowledge-promote-knowledge':['Review knowledge promotion','Confirm evidence, scope and destination.',[['','Destination','Knowledge'],['','Approval','Required policy checks apply.'],['promoted','Submit promotion request','']]],
'knowledge-promote-skill':['Review skill promotion','Confirm evidence and capability.',[['','Destination','Skill'],['','Approval','Required policy checks apply.'],['promoted','Submit promotion request','']]],
'knowledge-promote-dna':['Review DNA promotion','A request does not change compiled DNA.',[['','Destination','DNA'],['','Approval','Evidence, compilation and approval required.'],['promoted','Submit promotion request','']]],
'knowledge-promoted':['Promotion requested','Example outcome · awaiting applicable approval.',[['queue','Review queue','']]],
'knowledge-sources':['Sources','Browse supporting references and their access.',[['preview','Supplier checklist','Document · Standard'],['preview','Integration reference','Document · Private'],['upload','Add source','']]],
'knowledge-permissions':['Permissions','Review source ownership and authorised access.',[['','Owner','My.Work'],['','Classification','Standard'],['','Scope','Existing authorised Personas and Guilds'],['access','Manage access',''],['history','Audit history','']]],
'knowledge-access':['Review access change','Access cannot widen inherited authority.',[['','Proposed scope','My.Work · read'],['access-request','Review request',''],['permissions','Cancel','']]],
'knowledge-access-request':['Access request','Example outcome · approval required.',[['permissions','Permissions','']]],
'knowledge-detail':['Integration playbook','Reviewed · Private · My.Work',[['','Content','Integration procedures and supporting references.'],['sources','Supporting sources','3 sources'],['connections','Connections','Personas, Guilds and projects'],['permissions','Permissions',''],['history','Version history and audit','']]],
'knowledge-connections':['Connections','Review authorised contexts using this knowledge.',[['','My.Work','Persona · authorised'],['','Integration project','Project · existing scope'],['permissions','Manage permissions','']]],
'knowledge-history':['Version history and audit','Example record of review and changes.',[['','Version 2','Review recorded · evidence retained'],['','Version 1','Candidate submitted · source linked'],['candidate','View candidate','']]],
'knowledge-menu':['Knowledge options','Manage the workspace.',[['permissions','Permissions',''],['history','Version history and audit',''],['sources','Sources','']]],
'knowledge-search':['Search knowledge','Example results for integration.',[['detail','Integration playbook','Reviewed · Private'],['detail','API contract standards','Promoted · Confidential']]]};
const layouts=['macos','web','web-phone','ios','ipad','android','android-tablet'];
const esc=v=>String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
function render(s,id,dark,dev){
const m=s.match(/^<svg[^>]* width="(\d+)" height="(\d+)"/),W=+m[1],H=+m[2],wide=W>=1200;
const mark=s.slice(s.indexOf('</defs>')).match(/<rect x="(\d+)" y="(\d+)" width="24" height="2"/);
const x=+mark[1],top=+mark[2],start=s.indexOf(mark[0],s.indexOf('</defs>'));
const cm=[...s.matchAll(/<g filter="url\(#lift\)"><rect x="(\d+)" y="(\d+)" width="(\d+)" height="124"/g)].at(-1),end=cm.index,oldY=+cm[2],cw=+cm[3];
const p=dark?{ink:'#E8DCCB',body:'#BFB5A9',muted:'#A69B8E',card:'#2B2520',line:'#494037',bound:'#918171',sel:'#3B2B20',link:'#F08D4C',accent:'#E87832',on:'#201C18',primary:'#E87832'}:{ink:'#202630',body:'#424C5B',muted:'#5B6573',card:'#FFFFFF',line:'#DCE1E8',bound:'#8C96A5',sel:'#E4E8EF',link:'#98450F',accent:'#9F6B49',on:'#FFFFFF',primary:'#202630'};
let a=[],y=top;
const r=(X,Y,w,h,f=p.card,st=p.line,rx=12)=>a.push(`<rect x="${X}" y="${Y}" width="${w}" height="${h}" rx="${rx}" fill="${f}" stroke="${st}"/>`);
const t=(X,Y,v,sz=14,weight=400,c=p.body)=>a.push(`<text x="${X}" y="${Y}" font-size="${sz}" font-weight="${weight}" fill="${c}">${esc(v)}</text>`);
const wrap=(v,w,sz)=>{let lines=[],q='';for(const word of v.split(' ')){if(q&&(q+' '+word).length*sz*.58>w){lines.push(q);q=word}else q+=(q?' ':'')+word}if(q)lines.push(q);return lines};
const para=(X,Y,v,w,sz=14,c=p.body,weight=400)=>{let lines=wrap(v,w,sz);lines.forEach((q,i)=>t(X,Y+i*(sz+6),q,sz,weight,c));return Y+lines.length*(sz+6)};
const link=(target,label,fn)=>{a.push(`<a href="${target==='home'?'aos-06':'knowledge-'+target}.svg" aria-label="${esc(label)}"><title>${esc(label)}</title>`);fn();a.push('</a>')};
const btn=(X,Y,w,label,target,primary=false)=>link(target,label,()=>{r(X,Y,w,48,primary?p.primary:p.card,primary?'none':p.bound,9);t(X+12,Y+30,label,13,500,primary?p.on:p.ink)});
const title=(v,desc)=>{r(x,y,24,2,p.accent,'none',1);y=para(x,y+34,v,cw,26,p.ink,500)+5;y=para(x,y,desc,cw,14)+10};
const row=(X,Y,w,target,v,desc)=>{let ll=wrap(v,w-52,15),dd=wrap(desc,w-52,13),h=Math.max(64,24+ll.length*21+dd.length*19);const draw=()=>{r(X,Y,w,h,p.card,p.line,9);para(X+14,Y+24,v,w-52,15,p.ink,500);if(desc)para(X+14,Y+24+ll.length*21,desc,w-52,13);if(target)t(X+w-24,Y+30,'›',19,400,p.muted)};if(target)link(target,v,draw);else draw();return Y+h+8};
if(id==='aos-06'){
title('Knowledge','Capture experience, review evidence and manage knowledge you can use.');
let bw=Math.min(170,Math.floor(cw*.49));btn(x,y,bw,'+ Add knowledge','add',true);btn(x+bw+8,y,Math.min(170,cw-bw-8),'Review queue · 12','queue');y+=64;
let tw=(cw-56)/3;for(const [i,v,target] of [[0,'All','home'],[1,'Candidates','candidates'],[2,'Sources','sources']])link(target,v,()=>{r(x+i*tw,y,tw-3,48,i===0?p.sel:p.card,p.line,8);t(x+i*tw+8,y+30,v,13,500,p.ink)});btn(x+cw-48,y,48,'…','menu');y+=60;
btn(x,y,cw,'Search knowledge','search');y+=64;
const items=[['detail','Integration playbook','My.Work · 3 supporting sources · Reviewed · Private'],['review','Operational procedures','My.Work · Candidate · Internal']];
const queue=[['candidate','Needs evidence · 4','Supplier onboarding lessons'],['review','Ready for review · 5','Operational procedures'],['promote','Awaiting approval · 3','Training completion criteria']];
if(wide){let q=y,l=Math.floor(cw*.62),rr=cw-l-24;t(x,q+20,'Knowledge items',16,500,p.ink);q+=38;for(const v of items)q=row(x,q,l,...v);let z=y;t(x+l+24,z+20,'Review queue',16,500,p.ink);z+=38;for(const v of queue)z=row(x+l+24,z,rr,...v);y=Math.max(q,z)+12}else{t(x,y+20,'Review queue',16,500,p.ink);y+=36;for(const v of queue)y=row(x,y,cw,...v);t(x,y+24,'Knowledge items',16,500,p.ink);y+=40;for(const v of items)y=row(x,y,cw,...v)}
t(x,y+25,'Knowledge lifecycle',16,500,p.ink);y+=43;y=para(x,y,'Observation → Experience → Reflection → Candidate → Review → Promote → Knowledge, Skill or DNA',cw,13)+12;
}else{const [name,desc,rows]=states[id];btn(x,y,145,'‹ Knowledge','home');y+=64;title(name,desc);let ww=wide?Math.min(cw,740):cw;for(const v of rows)y=row(x,y,ww,...v)}
const newY=y+22,delta=newY-oldY,newH=H+delta;
let prefix=s.slice(0,start).replace(new RegExp('height="'+H+'"','g'),'height="'+newH+'"').replace('viewBox="0 0 '+W+' '+H+'"','viewBox="0 0 '+W+' '+newH+'"').replace(new RegExp('V'+H+'"','g'),'V'+newH+'"').replace('full content '+H,'full content '+newH).replace(/<metadata>[\s\S]*?<\/metadata>/,'<metadata>'+esc(JSON.stringify({screen:id,platform:dev,theme:dark?'dark':'light',canvasHeight:newH,illustrative:true}))+'</metadata>').replace(/<title id="screen-title">[^<]*<\/title>/,'<title id="screen-title">'+esc(id==='aos-06'?'Knowledge':states[id][0])+' · '+dev+' · '+(dark?'dark':'light')+'</title>');
const cut=s.slice(start,end),bal=(cut.match(/<g[\s>]/g)||[]).length-(cut.match(/<\/g>/g)||[]).length;/* the cut may open a group whose close stays after it; reopen it so the tags stay balanced */
return prefix+(bal>0?'<g>'.repeat(bal):'</g>'.repeat(-bal))+a.join('')+'<g transform="translate(0 '+delta+')">'+s.slice(end,-6)+'</g></svg>';
}
function build(){for(const dark of [false,true])for(const dev of layouts){const dir=path.join(root,dark?'dark':'',dev),file=path.join(dir,'aos-06.svg'),src=path.join(dir,'knowledge-shell.svg');if(!fs.existsSync(src))fs.copyFileSync(file,src);const s=fs.readFileSync(src,'utf8');for(const id of ['aos-06',...Object.keys(states)])fs.writeFileSync(path.join(dir,id+'.svg'),render(s,id,dark,dev));}}
if(require.main===module)build();
module.exports={render,states,layouts};
