import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,r}from"./story-C0YChiH4.js";function i({kicker:e=`Team sheet · sample staff`,title:t=`The adults on the trip`,rows:n=o,foot:r=`Names above are sample. Final staff and full names go to families before registration closes.`,tilt:i=!0}={}){return`<div class="sheet${i?``:` sheet--flat`}" role="group" aria-labelledby="sheet-title-x"><p class="sheet__k mono">${e}</p><h3 class="title-xl" id="sheet-title-x">${t}</h3><ul class="sheet__list">${n.map(([e,t,n])=>`<li><span class="sheet__no mono">${e}</span><span class="sheet__name">${t}</span><span class="sheet__role">${n}</span></li>`).join(``)}</ul>${r?`<p class="sheet__foot mono">${r}</p>`:``}</div>`}function a({no:e=`4`,name:t=`Sofia`,role:n=`Welfare lead and chaperone, first-aid certified`,tags:r=[`First aid`],tone:i=``}={}){return`<article class="person${i?` person--`+i:``}"><span class="person__no" aria-hidden="true">${e}</span><h3 class="person__name">${t}</h3><p class="person__role">${n}</p>${r.length?`<div class="person__tags">${r.map(e=>`<span class="tag">${e}</span>`).join(``)}</div>`:``}</article>`}var o;function s(){return(s=e((()=>{o=[[`1`,`Marco`,`Head coach, sessions and selection for friendlies`],[`2`,`Ana`,`Goalkeeper coach, also runs video review`],[`3`,`Diego`,`Assistant coach for the older group`],[`4`,`Sofia`,`Welfare lead and chaperone, first-aid certified`],[`5`,`Joseph`,`Runs Rumbo. Logistics, parents, and bags.`]]})))()}var c=t({Default:()=>u,Flat:()=>d,PersonCards:()=>f,__namedExportsOrder:()=>p,default:()=>l}),l,u,d,f,p;function m(){return(m=e((()=>{s(),r(),l={title:`Components/Team sheet & person card`,parameters:{layout:`padded`},argTypes:{kicker:{control:`text`},title:{control:`text`},foot:{control:`text`},tilt:{control:`boolean`}},args:{kicker:`Team sheet · sample staff`,title:`The adults on the trip`,tilt:!0},render:e=>`<div style="max-width:520px;padding:28px 20px">${i(e)}</div>`},u={},d={args:{tilt:!1}},f={render:()=>`<div style="padding:24px">${n([a({}),a({no:`1`,name:`Marco`,role:`Head coach`,tags:[`UEFA B`]}),a({no:`5`,name:`Joseph`,role:`Runs Rumbo. Logistics, parents, and bags.`,tags:[],tone:`sun`})],300)}</div>`},p=[`Default`,`Flat`,`PersonCards`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tilt: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => \`<div style="padding:24px">\${grid([personCard({}), personCard({
    no: '1',
    name: 'Marco',
    role: 'Head coach',
    tags: ['UEFA B']
  }), personCard({
    no: '5',
    name: 'Joseph',
    role: 'Runs Rumbo. Logistics, parents, and bags.',
    tags: [],
    tone: 'sun'
  })], 300)}</div>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,c as i,d as n,f as r,u as t};