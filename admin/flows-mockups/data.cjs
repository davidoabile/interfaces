const core=require('./catalogue.cjs');require('./domain.cjs');require('./extra.cjs');require('./completion.cjs');const template=require('./templates.cjs');
const screens=[...core.screens,...template.screens];
// Related review states expose alternatives outside customer navigation.
for(const sc of screens){if(sc.cataloguePage){sc.groups=sc.groups.filter(g=>g.title!=='Browse the catalogue');sc.reviewStates=[...(sc.reviewStates||[]),...[1,2,3,4].filter(p=>p!==sc.cataloguePage).map(p=>({label:'Catalogue page '+p,to:'flow-templates-page-'+p}))];}}
for(const sc of screens.filter(s=>s.canvas?.mode==='edit'&&s.id===core.models[s.model]?.edit))sc.reviewStates=[...(sc.reviewStates||[]),{label:'IF branch label choices',to:core.models[sc.model].edit+'-branch-label'}];
const ids=new Set(screens.map(s=>s.id));if(ids.size!==screens.length)throw Error('Duplicate Flow scene');
for(const s of screens){s.category='Discover';s.groups||=[];s.actions||=[];if(s.tone&&!s.feedbackTitle)throw Error('Missing contextual feedback: '+s.id);for(const a of [...s.groups.flatMap(g=>g.rows),...s.actions,...(s.reviewStates||[]),...(s.templateGrid||[])])if(a.to&&!a.to.startsWith('@')&&!ids.has(a.to))throw Error(s.id+' -> '+a.to);}
const categories=[['New conversation','plus','@aos-01'],['Search conversations','search','@search'],['Discover','board','@discover'],['Projects','layers','@projects']];
module.exports={...core,screens,categories,templates:template.templates,industries:template.industries};
