function generate(original,dev,dark){
const states={
"aos-06":["Knowledge","Capture experience, review evidence and manage knowledge you can use.",[]],
"knowledge-add":["Add knowledge","Choose how to capture knowledge.",[["Write a note","Record an observation or reflection.","knowledge-note"],["Add a source","Attach a document or link.","knowledge-upload"],["Record an insight","Review a transcript.","knowledge-insight"]]],
"knowledge-note":["Write a note","Capture your experience.",[["Title","Supplier onboarding lessons"],["Observation","Missing documents delayed onboarding."],["Reflection","A checklist may reduce repeated requests."],["Continue","Attach evidence and set access.","knowledge-evidence"]]],
"knowledge-insight":["Record an insight","Review your transcript before submitting.",[["Transcript","Missing documents delayed supplier onboarding."],["Continue","Attach evidence and set access.","knowledge-evidence"]]],
"knowledge-upload":["Add a source","Choose a document or source URL.",[["Document","Supplier onboarding checklist.pdf"],["Source URL","Optional reference"],["Preview","Inspect the source.","knowledge-source"],["Continue","Link evidence to a candidate.","knowledge-evidence"]]],
"knowledge-evidence":["Evidence and access","Review supporting material and scope.",[["Supporting evidence","Supplier onboarding checklist","knowledge-source"],["Classification","Standard"],["Owner and scope","My.Work · inherited access","knowledge-permissions"],["Review candidate","Check before submitting.","knowledge-submit"]]],
"knowledge-submit":["Review candidate","Submission does not promote knowledge.",[["Title","Supplier onboarding lessons"],["Evidence","1 source · Standard"],["Submit candidate","Send for review.","knowledge-submitted"]]],
"knowledge-submitted":["Candidate submitted","Awaiting review.",[["View review queue","See pending candidates.","knowledge-queue"]]],
"knowledge-queue":["Review queue","Review evidence and decide the next step.",[["Needs evidence · 4","Supplier onboarding lessons","knowledge-review-evidence"],["Ready for review · 5","Operational procedures","knowledge-review"],["Awaiting approval · 3","Training completion criteria","knowledge-approval"],["Completed reviews","View decisions.","knowledge-history"]]],
"knowledge-review-evidence":["Supplier onboarding lessons","Needs evidence · Standard",[["Candidate","A checklist may reduce delays."],["Provenance","My.Work · observation"],["Evidence","No supporting source verified."],["Request evidence","Specify missing evidence.","knowledge-request"],["Return for revision","Explain required changes.","knowledge-revise"],["Reject candidate","Record a reason.","knowledge-reject"]]],
"knowledge-review":["Operational procedures","Ready for review · Internal",[["Candidate","Document supplier onboarding steps."],["Evidence","Checklist and review notes.","knowledge-source"],["Request evidence","Ask for supporting material.","knowledge-request"],["Return for revision","Specify changes.","knowledge-revise"],["Approve review","Review decision.","knowledge-approval"],["Reject candidate","Record a reason.","knowledge-reject"]]],
"knowledge-request":["Request evidence","Explain what is needed.",[["Evidence required","Provide dated supporting records."],["Send request","Return to needs evidence.","knowledge-requested"]]],
"knowledge-revise":["Return for revision","Explain required changes.",[["Revision notes","Clarify procedure scope and source."],["Return candidate","Send for revision.","knowledge-revised"]]],
"knowledge-reject":["Reject candidate","Record why the evidence is insufficient.",[["Reason","Evidence does not support the conclusion."],["Confirm rejection","Record decision.","knowledge-rejected"]]],
"knowledge-approval":["Approve review","Approval does not automatically promote.",[["Candidate","Operational procedures"],["Evidence","Checklist and review notes"],["Confirm approval","Record review decision.","knowledge-approved"]]],
"knowledge-approved":["Review approved","The review decision is recorded.",[["Review promotion","Choose an asset type.","knowledge-promote"],["Review history","Inspect decision.","knowledge-history"]]],
"knowledge-promote":["Promote candidate","Choose the appropriate asset type.",[["Knowledge","Preserve a verified finding.","knowledge-promote-knowledge"],["Skill","Submit a demonstrated capability.","knowledge-promote-skill"],["DNA","Submit a proposed DNA change.","knowledge-promote-dna"]]],
"knowledge-promote-knowledge":["Promote to Knowledge","Review evidence and applicable approvals.",[["Evidence","Reviewed candidate and sources"],["Access","Existing restrictions remain"],["Request promotion","Submit for approval.","knowledge-promotion-pending"]]],
"knowledge-promote-skill":["Promote to Skill","Review evidence of capability.",[["Evidence","Demonstration and review record"],["Access","Existing restrictions remain"],["Request promotion","Submit for approval.","knowledge-promotion-pending"]]],
"knowledge-promote-dna":["Promote to DNA","DNA changes require evidence and applicable approval.",[["Evidence","Reviewed candidate and proposed change"],["Access","Existing restrictions remain"],["Request promotion","Submit for approval.","knowledge-promotion-pending"]]],
"knowledge-promotion-pending":["Promotion requested","Awaiting applicable approval.",[["Review history","Inspect recorded request.","knowledge-history"],["Return to queue","View pending reviews.","knowledge-queue"]]],
"knowledge-requested":["Evidence requested","Candidate remains in the queue.",[["Return to queue","Needs evidence.","knowledge-queue"]]],
"knowledge-revised":["Revision requested","Candidate returned for revision.",[["Return to queue","View pending reviews.","knowledge-queue"]]],
"knowledge-rejected":["Candidate rejected","Reason and decision retained.",[["Review history","Inspect recorded decision.","knowledge-history"]]],
"knowledge-candidates":["Candidates","Review captured knowledge before promotion.",[["Supplier onboarding lessons","Needs evidence","knowledge-review-evidence"],["Operational procedures","Ready for review","knowledge-review"],["Add knowledge","Capture a candidate.","knowledge-add"]]],
"knowledge-sources":["Sources","Browse authorised supporting material.",[["Integration playbook","3 sources · Private","knowledge-source"],["Supplier onboarding checklist","Document · Standard","knowledge-source"],["Add source","Upload or enter URL.","knowledge-upload"]]],
"knowledge-source":["Source details","Inspect provenance and access.",[["Supplier onboarding checklist.pdf","Document · Standard"],["Provenance","Uploaded by authorised member"],["Preview","Verify supplier identity and documentation."],["Link to candidate","Review evidence and scope.","knowledge-evidence"],["Permissions","Inspect access.","knowledge-permissions"]]],
"knowledge-permissions":["Permissions","Review access within inherited authority.",[["Owner","My.Work"],["Classification","Standard"],["Authorised scope","Inherited policy"],["Manage access","Propose permission change.","knowledge-access"]]],
"knowledge-access":["Review access change","Changes remain subject to existing approval.",[["Proposed scope","Invite an authorised member"],["Access","Read · within source authority"],["Request approval","Submit proposed change.","knowledge-access-pending"]]],
"knowledge-access-pending":["Access change requested","No new access until approved.",[["View permissions","Inspect current access.","knowledge-permissions"]]],
"knowledge-detail":["Integration playbook","Reviewed · Private",[["Content","Integration procedures and operational notes."],["Supporting sources","3 authorised references","knowledge-sources"],["Connections","My.Work · linked Persona"],["Permissions","Review authorised access.","knowledge-permissions"],["Version history and audit","Inspect decisions.","knowledge-history"]]],
"knowledge-history":["Review history and audit","Inspect decisions and evidence.",[["Review approved","Evidence retained"],["Revision requested","Reason retained"],["Version 1","Original candidate and sources","knowledge-detail"]]],
"knowledge-menu":["Knowledge options","Manage knowledge and supporting context.",[["Permissions","Review access.","knowledge-permissions"],["Knowledge lifecycle","View stages.","knowledge-lifecycle"],["Review history","Inspect decisions.","knowledge-history"]]],
"knowledge-lifecycle":["Knowledge lifecycle","Capture, review and promote evidence-backed knowledge.",[["Observation → Experience","Capture what happened."],["Reflection → Candidate","Record insight and evidence."],["Review → Promote","Review evidence and request approval."],["Knowledge, Skill or DNA","Preserve approved asset within authority."]]]
};
const esc=v=>String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
const h=original.match(/^<svg[^>]* width="(\d+)" height="(\d+)"/),W=+h[1],H=+h[2];
const mark=original.slice(original.indexOf("</defs>")+7).match(/<rect x="(\d+)" y="(\d+)" width="24" height="2"/);
const x=+mark[1],top=+mark[2],start=original.indexOf(mark[0],original.indexOf("</defs>"));
const marker=original.match(/<g filter="url\(#lift\)"><rect x="(\d+)" y="(\d+)" width="(\d+)" height="124"/g).at(-1),end=original.lastIndexOf(marker),oldY=+marker.match(/y="(\d+)"/)[1],cw=+marker.match(/width="(\d+)"/)[1];
const p=dark?{ink:"#E8DCCB",body:"#BFB5A9",muted:"#A69B8E",line:"#494037",card:"#2B2520",sel:"#3B2B20",accent:"#E87832",link:"#F08D4C",bound:"#918171",primary:"#E8DCCB"}:{ink:"#202630",body:"#424C5B",muted:"#5B6573",line:"#DCE1E8",card:"#FFFFFF",sel:"#E4E8EF",accent:"#9F6B49",link:"#98450F",bound:"#8C96A5",primary:"#FFFFFF"};
return Object.entries(states).map(([id,info])=>{
let a=[],y=top;const wide=cw>900;
const t=(X,Y,v,sz=14,weight=400,c=p.body)=>a.push('<text x="'+X+'" y="'+Y+'" font-size="'+sz+'" font-weight="'+weight+'" fill="'+c+'">'+esc(v)+'</text>');
const r=(X,Y,w,h,f=p.card,st=p.line,rx=12)=>a.push('<rect x="'+X+'" y="'+Y+'" width="'+w+'" height="'+h+'" rx="'+rx+'" fill="'+f+'" stroke="'+st+'"/>');
const wrap=(v,w,sz)=>{let arr=[],q="";for(const word of v.split(" ")){if(q&&(q+" "+word).length*sz*.57>w){arr.push(q);q=word}else q+=(q?" ":"")+word}if(q)arr.push(q);return arr};
const para=(X,Y,v,w,sz=13,c=p.body)=>{let l=wrap(v,w,sz);l.forEach((q,i)=>t(X,Y+i*(sz+5),q,sz,400,c));return Y+l.length*(sz+5)};
const link=(dest,label,fn)=>{if(!states[dest])throw Error(dest);a.push('<a href="'+dest+'.svg" aria-label="'+esc(label)+'"><title>'+esc(label)+'</title>');fn();a.push("</a>")};
const btn=(X,Y,w,label,dest,primary=false)=>link(dest,label,()=>{r(X,Y,w,48,primary?"url(#charcoal)":p.card,primary?"none":p.bound,9);t(X+12,Y+30,label,14,500,primary?p.primary:p.ink)});
const row=(X,Y,w,title,sub,dest)=>{let ls=wrap(sub,w-48,13),hh=Math.max(76,48+ls.length*18);const fn=()=>{r(X,Y,w,hh,p.card,p.line,10);t(X+14,Y+25,title,14,500,p.ink);para(X+14,Y+47,sub,w-42,13);if(dest)t(X+w-23,Y+26,"›",17,400,p.muted)};if(dest)link(dest,title,fn);else fn();return Y+hh+9};
r(x,y,24,2,p.accent,"none",1);
if(id!=="aos-06"){link("aos-06","Back to Knowledge",()=>{r(x,y+12,160,44,"transparent","none",7);t(x,y+39,"‹ Knowledge",14,500,p.link)});y+=54}
y=para(x,y+34,info[0],cw,26,p.ink)+8;y=para(x,y,info[1],cw,15)+12;
if(id==="aos-06"){
const bW=Math.min(170,Math.floor((cw-12)/2));btn(x,y,bW,"+ Add knowledge","knowledge-add",true);btn(x+bW+12,y,bW,"Review queue · 12","knowledge-queue");y+=64;
const ow=48,tw=(cw-ow-12)/3;[["All","aos-06"],["Candidates","knowledge-candidates"],["Sources","knowledge-sources"]].forEach(([v,d],i)=>link(d,v,()=>{r(x+i*tw,y,tw-4,48,i===0?p.sel:"transparent",p.line,7);t(x+i*tw+8,y+30,v,13,i===0?500:400,p.ink)}));btn(x+cw-ow,y,ow,"…","knowledge-menu");y+=64;
const left=wide?Math.floor(cw*.58):cw,right=cw-left-20;let Y=y;
t(x,Y+19,"Knowledge items",16,500,p.ink);Y+=32;
Y=row(x,Y,left,"Integration playbook","My.Work · 3 sources · Reviewed · Private","knowledge-detail");
Y=row(x,Y,left,"Operational procedures","My.Work · Candidate · Internal","knowledge-review");
let Q=wide?y:Y+10,X=wide?x+left+20:x,U=wide?right:cw;
t(X,Q+19,"Review queue",16,500,p.ink);Q+=32;
for(const [v,n,d] of [["Needs evidence","4 items","knowledge-review-evidence"],["Ready for review","5 items","knowledge-review"],["Awaiting approval","3 items","knowledge-approval"]])Q=row(X,Q,U,v,n,d);
y=Math.max(Y,Q)+10;
y=row(x,y,cw,"Knowledge lifecycle","Observation → Experience → Reflection → Candidate → Review → Promote → Knowledge, Skill or DNA","knowledge-lifecycle");
}else{for(const [title,sub,dest] of info[2])y=row(x,y,cw,title,sub,dest);btn(x,y,Math.min(180,cw),"Back to Knowledge","aos-06");y+=64;}
const newY=y+20,delta=newY-oldY,newH=H+delta;
let prefix=original.slice(0,start).replace(new RegExp('height="'+H+'"',"g"),'height="'+newH+'"').replace('viewBox="0 0 '+W+' '+H+'"','viewBox="0 0 '+W+' '+newH+'"').replace(new RegExp("V"+H+'"',"g"),"V"+newH+'"').replace("full content "+H,"full content "+newH).replace("&quot;canvasHeight&quot;:"+H,"&quot;canvasHeight&quot;:"+newH).replace(/<title id="screen-title">[^<]+<\/title>/,'<title id="screen-title">'+esc(info[0])+' · '+dev+' · '+(dark?"dark":"light")+'</title>');
const cut=original.slice(start,end),bal=(cut.match(/<g[\s>]/g)||[]).length-(cut.match(/<\/g>/g)||[]).length;/* the cut may open a group whose close stays after it; reopen it so the tags stay balanced */
return {id,title:info[0],content:prefix+(bal>0?"<g>".repeat(bal):"</g>".repeat(-bal))+a.join("")+'<g transform="translate(0 '+delta+')">'+original.slice(end,-6)+'</g></svg>'};
});
}
module.exports = generate;
