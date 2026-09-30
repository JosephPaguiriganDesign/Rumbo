import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{o as n,r}from"./story-C0YChiH4.js";import{n as i,t as a}from"./Button-MTcHEQ_D.js";function o({tabs:e=s,selected:t=0,label:r=`Choose a leg of the trip`}={}){let i=n(`ft`);return`<div class="legs"><div class="folder-tabs" role="tablist" aria-label="${r}">
${e.map((e,n)=>`<button class="ftab state" role="tab" id="${i}-t${n}" aria-selected="${n===t}" aria-controls="${i}-p${n}" ${n===t?``:`tabindex="-1"`} type="button"><span class="ftab__n mono">${e.n}</span><span class="ftab__t">${e.t}</span></button>`).join(``)}
</div>
${e.map((e,n)=>`<div class="leg" role="tabpanel" id="${i}-p${n}" aria-labelledby="${i}-t${n}" tabindex="0" ${n===t?``:`hidden`}><div class="leg__body"><h3 class="title-xl">${e.h}</h3><p>${e.p}</p>${a({label:`Ask about the whole trip`,href:`#interest`})}</div></div>`).join(``)}</div>`}var s;function c(){return(c=e((()=>{r(),i(),s=[{n:`Days 1–7`,t:`Lisbon coast`,h:`Week one: the Lisbon coast`,p:`We base ourselves on the coast west of Lisbon, close enough to the city for a day out and close enough to the sea that nobody can claim they didn’t get a swim.`},{n:`Days 8–14`,t:`Málaga coast`,h:`Week two: the Málaga coast`,p:`A short flight south and the light changes. Week two is match week: fewer drills, more games.`}]})))()}var l=t({Default:()=>d,SecondSelected:()=>f,ThreeTabs:()=>p,__namedExportsOrder:()=>m,default:()=>u}),u,d,f,p,m;function h(){return(h=e((()=>{c(),u={title:`Components/Folder tabs`,parameters:{layout:`padded`},argTypes:{selected:{control:{type:`number`,min:0,max:1}},label:{control:`text`}},args:{selected:0,label:`Choose a leg of the trip`},render:e=>`<div class="sb-panel sb-panel--low" style="max-width:760px;padding-top:36px">${o(e)}</div>`},d={},f={args:{selected:1}},p={render:()=>`<div class="sb-panel sb-panel--low" style="max-width:860px">${o({selected:1,tabs:[{n:`Days 1–5`,t:`Lisbon`,h:`Lisbon`,p:`Landing, pastéis, first session.`},{n:`Days 6–10`,t:`Estoril`,h:`Estoril`,p:`Sea, sessions, friendlies.`},{n:`Days 11–14`,t:`Málaga`,h:`Málaga`,p:`Match week.`}]})}</div>`},m=[`Default`,`SecondSelected`,`ThreeTabs`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    selected: 1
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => \`<div class="sb-panel sb-panel--low" style="max-width:860px">\${folderTabs({
    selected: 1,
    tabs: [{
      n: 'Days 1–5',
      t: 'Lisbon',
      h: 'Lisbon',
      p: 'Landing, pastéis, first session.'
    }, {
      n: 'Days 6–10',
      t: 'Estoril',
      h: 'Estoril',
      p: 'Sea, sessions, friendlies.'
    }, {
      n: 'Days 11–14',
      t: 'Málaga',
      h: 'Málaga',
      p: 'Match week.'
    }]
  })}</div>\`
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,p as i,l as n,f as r,d as t};