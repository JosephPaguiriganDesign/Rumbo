import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,r,t as i}from"./icons-DjAScHZn.js";import{i as a,n as o,r as s}from"./story-C0YChiH4.js";function c({kicker:e=`Rumbo · Summer 2027`,from:t=`LIS`,to:r=`AGP`,dates:a=`Sun 11 Jul – Sat 24 Jul 2027`,stub:o=`14 days`,tilt:s=!0,big:c=!1,ariaLabel:l=`Boarding pass style summary of the trip`}={}){return`<div class="pass pass--static${s?``:` pass--flat`}${c?` pass--big`:``}" role="group" aria-label="${l}"><div class="pass__main"><p class="pass__k mono">${e}</p><div class="pass__route"><span class="pass__code">${t}</span>${n.plane()}<span class="pass__code">${r}</span></div><p class="pass__d mono">${a}</p></div><div class="pass__stub" aria-hidden="true"><svg viewBox="0 0 130 40" width="100%" height="34" preserveAspectRatio="none" fill="currentColor">${i}</svg><p class="mono">${o}</p></div></div>`}function l(){return(l=e((()=>{r()})))()}var u=t({Default:()=>f,Flat:()=>p,Large:()=>m,Legs:()=>h,__namedExportsOrder:()=>g,default:()=>d}),d,f,p,m,h,g;function _(){return(_=e((()=>{l(),s(),d={title:`Components/Boarding pass`,parameters:{layout:`padded`},argTypes:{kicker:{control:`text`},from:{control:`text`},to:{control:`text`},dates:{control:`text`},stub:{control:`text`},tilt:{control:`boolean`},big:{control:`boolean`}},args:{kicker:`Rumbo · Summer 2027`,from:`LIS`,to:`AGP`,dates:`Sun 11 Jul – Sat 24 Jul 2027`,stub:`14 days`,tilt:!0,big:!1},render:e=>`<div style="padding:28px 20px;max-width:460px">${c(e)}</div>`},f={},p={args:{tilt:!1}},m={args:{big:!0,tilt:!1}},h={render:()=>`<div style="padding:28px 20px">${o([a(`leg 1`,c({from:`LIS`,to:`AGP`,stub:`Days 1–7`,tilt:!1})),a(`leg 2`,c({from:`LIS`,to:`AGP`,dates:`Sun 18 Jul 2027`,kicker:`Rumbo · Flight to Málaga`,stub:`Days 8–14`,tilt:!1}))],340)}</div>`},g=[`Default`,`Flat`,`Large`,`Legs`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tilt: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    big: true,
    tilt: false
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => \`<div style="padding:28px 20px">\${grid([labelled('leg 1', boardingPass({
    from: 'LIS',
    to: 'AGP',
    stub: 'Days 1–7',
    tilt: false
  })), labelled('leg 2', boardingPass({
    from: 'LIS',
    to: 'AGP',
    dates: 'Sun 18 Jul 2027',
    kicker: 'Rumbo · Flight to Málaga',
    stub: 'Days 8–14',
    tilt: false
  }))], 340)}</div>\`
}`,...h.parameters?.docs?.source}}}})))()}export{h as a,m as i,f as n,_ as o,p as r,u as t};