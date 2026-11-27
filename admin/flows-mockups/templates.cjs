/* Source-faithful Flow catalogue. Names and previews are illustrative; no executable packages. */
const screens=[];
const info=(title,detail)=>({title,detail,kind:'info'});
const field=(title,detail)=>({title,detail,kind:'field'});
const row=(title,detail,to,value='')=>({title,detail,to,value,kind:'link'});
const group=(title,rows)=>({title,rows});
const act=(label,to,kind='primary')=>({label,to,kind});
const add=(id,title,intro,groups=[],actions=[],extra={})=>screens.push({id,title,intro,context:'Template catalogue',groups,actions,...extra});
const slug=s=>s.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const source=[
 ['Construction',[
  ['Progress payments','Release payments against verified milestones.'],
  ['Defect rectification','Track and verify repairs.'],
  ['Contract variations','Approve scope changes.'],
  ['Practical completion','Verify handover evidence.']
 ]],
 ['Real estate',[
  ['Property purchase','Sign and settle purchase terms.'],
  ['Tenancy onboarding','Verify tenants and agreements.'],
  ['Rental bond release','Resolve and release bond.'],
  ['Property inspection','Record condition and defects.']
 ]],
 ['Healthcare',[
  ['Patient consent','Review and capture consent.'],
  ['Referral management','Route and track referrals.'],
  ['Treatment approval','Obtain authorised approval.'],
  ['Clinical incident review','Record and investigate incidents.']
 ]],
 ['Education',[
  ['Student enrolment','Verify enrolment requirements.'],
  ['Apprenticeship','Agree training obligations.'],
  ['Qualification verification','Verify credential evidence.'],
  ['Scholarship approval','Review applicants and awards.']
 ]],
 ['Agriculture',[
  ['Livestock transfer','Capture movement evidence.'],
  ['Produce supply agreements','Agree grower supply terms.'],
  ['Harvest acceptance','Verify grading and receipt.'],
  ['Biosecurity clearance','Record inspection and approval.']
 ]],
 ['Manufacturing',[
  ['Quality inspection','Record tests and acceptance.'],
  ['Production acceptance','Approve completed production.'],
  ['Product recall','Trace and manage affected batches.'],
  ['Equipment maintenance','Verify service and readiness.']
 ]],
 ['Transport & logistics',[
  ['Proof of delivery','Confirm delivery evidence.'],
  ['Freight settlement','Settle after confirmed delivery.'],
  ['Customs clearance','Collect clearance evidence.'],
  ['Damaged goods claims','Record and assess damage.']
 ]],
 ['Mining',[
  ['Contractor mobilisation','Verify contractor readiness.'],
  ['Site access approval','Confirm induction and access.'],
  ['Safety incident reporting','Report and review incidents.'],
  ['Rehabilitation milestones','Verify restoration progress.']
 ]],
 ['Energy & utilities',[
  ['Grid connection','Approve connection and inspection.'],
  ['Meter installation','Verify installation evidence.'],
  ['Outage response','Coordinate restoration and closure.'],
  ['Renewable project acceptance','Verify commissioning.']
 ]],
 ['Government',[
  ['Tender evaluation','Review and score submissions.'],
  ['Procurement acceptance','Approve delivered outcomes.'],
  ['Grant disbursement','Release against milestones.'],
  ['Permit approvals','Review and approve applications.']
 ]],
 ['Insurance & finance',[
  ['Claims assessment','Validate evidence and decision.'],
  ['Loan disbursement','Check conditions before release.'],
  ['Equity purchase','Agree and settle equity terms.'],
  ['Insurance policy renewal','Review terms and renew.']
 ]],
 ['Hospitality & tourism',[
  ['Group reservations','Confirm group booking terms.'],
  ['Event bookings','Agree event requirements.'],
  ['Supplier agreements','Verify supplier obligations.'],
  ['Booking cancellations','Apply agreed cancellation rules.']
 ]],
 ['Professional services & IT',[
  ['Software acceptance testing','Verify test evidence.'],
  ['Architecture approval','Review design conformance.'],
  ['Service-level review','Assess service performance.'],
  ['Change management','Authorise and verify changes.']
 ]],
 ['Human resources',[
  ['Employment offers','Sign offer and acceptance.'],
  ['Employee onboarding','Verify onboarding requirements.'],
  ['Performance reviews','Record review and goals.'],
  ['Staff exit','Confirm offboarding and handover.']
 ]],
 ['Community, sport & arts',[
  ['Sponsorship','Agree commitments and deliverables.'],
  ['Athlete agreements','Review and sign terms.'],
  ['Artist royalties','Verify and allocate royalties.'],
  ['Community funding','Review and approve funding.']
 ]],
 ['Retail & commerce',[
  ['Purchase orders','Approve orders and receipt.'],
  ['Customer returns','Verify returns and resolution.'],
  ['Supplier onboarding','Verify supplier requirements.'],
  ['Marketplace transactions','Agree and settle orders.']
 ]]
];
const industries=source.map(([name,items],index)=>({id:slug(name),name,page:Math.floor(index/4)+1,templates:items.map(([title,detail])=>({id:'flow-template-'+slug(name)+'-'+slug(title),title,detail,category:name,page:Math.floor(index/4)+1}))}));
const templates=industries.flatMap(i=>i.templates);
const card=t=>({title:t.title,detail:t.detail,to:t.id+'-preview',category:t.category});
const pageNav=page=>group('Browse the catalogue',[
 row('Industry filter','Choose one of the sixteen supplied industries.','flow-templates-industries'),
 row('Search templates','Find a process by name or industry.','flow-templates-search'),
 row('Workspace templates','Review this workspace’s own examples.','flow-templates-workspace'),
 ...[1,2,3,4].filter(p=>p!==page).map(p=>row('Page '+p,'Browse the next group of industries.','flow-templates-page-'+p))
]);
for(let page=1;page<=4;page++){
 const actions=[];
 if(page<4)actions.push(act('Next page','flow-templates-page-'+(page+1)));
 if(page>1)actions.push(act('Previous page','flow-templates-page-'+(page-1),'secondary'));
 actions.push(act('Back to Flows','flow-home','secondary'));
 add('flow-templates-page-'+page,'Flow templates','Page '+page+' of 4 · 64 example processes across 16 industries.',[pageNav(page)],actions,{templateGrid:templates.filter(t=>t.page===page).map(card),cataloguePage:page});
}
add('flow-templates-industries','Choose an industry','Filter the supplied catalogue without changing any Flow.',[
 group('Industries',industries.map(i=>row(i.name,'Four example process previews.','flow-templates-industry-'+i.id))),
 group('All industries',[row('Browse all examples','Return to the first catalogue page.','flow-templates-page-1')])
],[act('Back to catalogue','flow-templates-page-1','secondary')]);
for(const industry of industries)add('flow-templates-industry-'+industry.id,industry.name+' templates','Four supplied process previews · choose one to plan a draft.',[
 group('Browse',[row('Change industry','Choose another industry.','flow-templates-industries'),row('All industries','Return to the full catalogue.','flow-templates-page-'+industry.page)])
],[act('Back to catalogue','flow-templates-page-'+industry.page,'secondary')],{templateGrid:industry.templates.map(card),industry:industry.name});
add('flow-templates-workspace','Workspace templates','No workspace templates are shown in this example.',[
 group('Start with a draft',[info('Your workspace','A template preview does not create or publish a Flow automatically. Start a draft and configure its real steps.'),row('Browse platform examples','Explore the supplied industry catalogue.','flow-templates-page-1')])
],[act('Start a Flow','flow-create'),act('Back to Flows','flow-home','secondary')]);
const progress=templates.find(t=>t.title==='Progress payments');
add('flow-templates-search','Search Flow templates','Example search · progress',[
 group('Search',[field('Name, industry or process','progress')]),
 group('Results',[info('One matching example','Progress payments · Construction.')])
],[act('Search another phrase','flow-templates-search-empty','secondary'),act('Back to catalogue','flow-templates-page-1','secondary')],{templateGrid:[card(progress)]});
add('flow-templates-search-empty','No matching template previews','Example search · orbital harvest',[
 group('Try another search',[field('Name, industry or process','orbital harvest'),info('Search suggestion','Use a process name such as progress payments, or browse an industry.')])
],[act('Search again','flow-templates-search'),act('Browse industries','flow-templates-industries','secondary')]);
const constructionOutline=[
 'Select owner and contractor',
 'Agree milestone and payment terms',
 'Record work completion evidence',
 'Independent inspection',
 'Approve milestone or request rectification',
 'Release authorised payment',
 'Record settlement and close'
];
for(const template of templates){
 const id=template.id,construction=template===progress;
 const previewGroups=[group('Template overview',[
  info('Industry',template.category),
  info('Purpose',template.detail),
  info('What using it does','Starts a named draft for you to configure. No request, approval, payment or publication starts from this preview.')
 ])];
 if(construction){
  previewGroups.push(group('Progress payments · process preview',constructionOutline.map((title,i)=>info((i+1)+' · '+title,'Proposed process stage; configure its real action and responsible party in the draft.'))));
  previewGroups.push(group('Includes',[info('Flow definition · Contract · Terms','These are the areas to configure, not a prevalidated executable package.'),info('Before any payment','Configure parties, inspection rules, amounts and settlement conditions. Payment release must keep its required approvals.') ]));
 }else previewGroups.push(group('Plan before running',[
  info('Responsibilities','Choose who is responsible for each step and which approvals are required.'),
  info('Evidence and conditions','Add the real actions, supporting evidence, permitted data and completion rules for this process.'),
  info('Readiness','A catalogue title does not establish legal compliance, clinical suitability, authority or production readiness.')
 ]));
 add(id+'-preview',template.title,template.category+' · process preview.',previewGroups,[act('Use template',id+'-details'),act('Back to catalogue','flow-templates-page-'+template.page,'secondary')],{templateId:id});
 add(id+'-details','Start '+template.title,'Review the name and purpose for this draft.',[
  group('Draft details',[field('Flow name',template.title),field('Purpose',template.detail),info('Industry',template.category)]),
  group('Before you continue',[info('An empty draft','This adds a Start and End only. You will add and configure the real steps yourself.'),info('No activation','Adding a draft does not validate, publish or run it.')])
 ],[act('Add draft',id+'-created'),act('Back to preview',id+'-preview','secondary')],{templateId:id});
 add(id+'-created',template.title+' draft added','An illustrative local draft for '+template.category+'.',[
  group('Your named draft',[info('Flow name',template.title),info('Purpose',template.detail),info('Current structure','Start → End. No action steps are configured yet.')]),
  group('Next step',[info('Plan the real work','Configure actions, responsibilities, evidence and approvals before validation or publication.'),info('Nothing has run','This draft is not executable or approved. No payment, message, approval request or external call has started.')])
 ],[act('Review draft details',id+'-details'),act('Back to catalogue','flow-templates-page-'+template.page,'secondary')],{
  templateId:id,tone:'info',feedbackTitle:template.title+' is a draft only',feedbackDetail:'The name and purpose are kept in this illustrative local draft. Start and End are placeholders; no action is ready to run.'
 });
}
const ids=new Set(screens.map(s=>s.id)),external=new Set(['flow-home','flow-create','flow-edit']);
if(ids.size!==screens.length)throw Error('Duplicate Flow-template state');
for(const sc of screens)for(const a of [...sc.actions,...sc.groups.flatMap(g=>g.rows),...(sc.templateGrid||[]),...(sc.reviewStates||[])])if(a.to&&!ids.has(a.to)&&!external.has(a.to))throw Error(sc.id+' → '+a.to);
module.exports={screens,industries,templates};
