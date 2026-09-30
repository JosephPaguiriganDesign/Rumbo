import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{i as n,n as r,r as i}from"./story-C0YChiH4.js";import{n as a,t as o}from"./Button-MTcHEQ_D.js";import{n as s,t as c}from"./photos-D2yNnq8D.js";function l({kicker:e=`Week one`,title:t=`The Lisbon coast`,body:n=`Sessions on rented grass and 3G pitches, two a day, with our own coaches.`,variant:r=`paper`,tape:i=!1,tilt:a=!1,interactive:c=!1,media:l=!1,action:u=`Ask about the trip`,state:d=``}={}){return`<article class="${[`card`,r!==`paper`&&`card--${r}`,i&&`card--tape`,a&&`card--tilt`,c&&`card--interactive`,d&&`is-${d}`].filter(Boolean).join(` `)}">${l?`<div class="card__media"><div class="duo duo--cobalt" style="aspect-ratio:16/9"><img src="${s.estoril.src}" width="900" height="506" alt="${s.estoril.alt}" loading="lazy"></div></div>`:``}<p class="card__k">${e}</p><h3 class="card__title">${c?`<a class="card__link" href="#interest">${t}</a>`:t}</h3><p class="card__body">${n}</p>${!c&&u?`<div class="card__actions">${o({label:u,variant:`tonal`,size:`sm`,href:`#interest`})}</div>`:``}</article>`}function u({k:e=`Rumbo · Summer 2027 · per player · USD`,price:t=`4,850`,sub:n=`Draft price. Confirmed before registration opens.`,included:r=[`13 nights in shared rooms (3–4 players)`,`Breakfast and dinner daily, plus lunch on match days`,`Coaching, pitch hire, and match arrangements`,`Group travel medical insurance`],excluded:i=[`Flights to Lisbon and home from Málaga`,`Lunch on non-match days`,`Spending money and souvenirs`],foot:a=`$500 deposit · balance due 1 Apr 2027 · payment details sent after your chat with us`}={}){return`<article class="receipt" aria-label="Cost receipt"><p class="receipt__k mono">${e}</p><p class="receipt__price"><span class="receipt__cur">$</span>${t}</p><p class="receipt__sub mono">${n}</p>
<div class="receipt__cols"><div><h3 class="receipt__h">Included</h3><ul class="ledger ledger--in">${r.map(e=>`<li>${e}</li>`).join(``)}</ul></div><div><h3 class="receipt__h">Not included</h3><ul class="ledger ledger--out">${i.map(e=>`<li>${e}</li>`).join(``)}</ul></div></div>
<p class="receipt__foot mono">${a}</p></article>`}function d(){return(d=e((()=>{a(),c()})))()}var f=t({Default:()=>m,Interactive:()=>_,InteractiveStates:()=>v,Receipt:()=>y,ReceiptOnPaper:()=>b,Variants:()=>h,WithPhotoAndTape:()=>g,__namedExportsOrder:()=>x,default:()=>p}),p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{d(),i(),p={title:`Components/Card`,parameters:{layout:`padded`},argTypes:{variant:{control:`inline-radio`,options:[`paper`,`sun`,`tonal`,`flat`]},tape:{control:`boolean`},tilt:{control:`boolean`},interactive:{control:`boolean`},media:{control:`boolean`},kicker:{control:`text`},title:{control:`text`},body:{control:`text`},state:{control:`select`,options:[``,`hover`]}},args:{kicker:`Week one`,title:`The Lisbon coast`,body:`Sessions on rented grass and 3G pitches, two a day, with our own coaches.`,variant:`paper`,tape:!1,tilt:!1,interactive:!1,media:!1,state:``},render:e=>`<div style="max-width:380px;padding:16px">${l(e)}</div>`},m={},h={render:()=>r([`paper`,`sun`,`tonal`,`flat`].map(e=>n(e,l({variant:e,title:`${e[0].toUpperCase()}${e.slice(1)} card`}))),260)},g={args:{media:!0,tape:!0,tilt:!0,variant:`paper`}},_={args:{interactive:!0},parameters:{docs:{description:{story:`Whole card is one link (stretched ::after). Only one focus stop per card; do not nest buttons inside.`}}}},v={render:()=>r([n(`default`,l({interactive:!0})),n(`hover`,l({interactive:!0,state:`hover`}))],260)},y={parameters:{backgrounds:{disable:!0}},render:()=>`<div class="sb-panel sb-panel--inverse" style="padding-bottom:64px">${u()}</div>`,name:`Receipt (on dark ground)`},b={render:()=>`<div style="max-width:640px;padding:24px">${u()}</div>`},x=[`Default`,`Variants`,`WithPhotoAndTape`,`Interactive`,`InteractiveStates`,`Receipt`,`ReceiptOnPaper`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => grid(['paper', 'sun', 'tonal', 'flat'].map(v => labelled(v, card({
    variant: v,
    title: \`\${v[0].toUpperCase()}\${v.slice(1)} card\`
  }))), 260)
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    media: true,
    tape: true,
    tilt: true,
    variant: 'paper'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    interactive: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Whole card is one link (stretched ::after). Only one focus stop per card; do not nest buttons inside.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => grid([labelled('default', card({
    interactive: true
  })), labelled('hover', card({
    interactive: true,
    state: 'hover'
  }))], 260)
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      disable: true
    }
  },
  render: () => \`<div class="sb-panel sb-panel--inverse" style="padding-bottom:64px">\${receipt()}</div>\`,
  name: 'Receipt (on dark ground)'
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'{\n  render: () => `<div style="max-width:640px;padding:24px">${receipt()}</div>`\n}',...b.parameters?.docs?.source}}}})))()}export{y as a,g as c,v as i,S as l,m as n,b as o,_ as r,h as s,f as t};