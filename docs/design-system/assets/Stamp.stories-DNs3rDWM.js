import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,i as r,o as i,r as a}from"./story-C0YChiH4.js";function o({kind:e=`round`,word:t=`SALIDA`,date:n=`11 · VII · 27`,ring:r=`RUMBO · SUMMER 2027 · IBERIA · `,sub:a=`SUBJECT TO CHANGE`,ariaLabel:o,still:s=!0,color:c=`tertiary`}={}){let l=`var(--md-sys-color-${c})`,u=i(`sc`);return e===`draft`?`<svg class="stamp stamp--draft${s?` stamp--still`:``}" viewBox="0 0 200 64" role="img" aria-label="${o||`Stamp: ${t.toLowerCase()}, ${a.toLowerCase()}`}"><g filter="url(#wear)" fill="none" stroke="${l}" color="${l}"><rect x="4" y="4" width="192" height="56" rx="6" stroke-width="3.5"/><text class="stamp__big" x="100" y="31" text-anchor="middle" font-weight="800" font-size="24" letter-spacing="3" fill="currentColor" stroke="none">${t}</text><text class="stamp__mono" x="100" y="50" text-anchor="middle" font-size="10.5" letter-spacing="1.6" fill="currentColor" stroke="none">${a}</text></g></svg>`:e===`box`?`<span class="stampline"><span class="stampline__box" style="color:${l};border-color:${l}">${t}</span></span>`:`<svg class="stamp${s?` stamp--still`:``}" viewBox="0 0 140 140" role="img" aria-label="${o||`Stamp: ${t.toLowerCase()}, ${n}`}"><g filter="url(#wear)" fill="none" stroke="${l}" color="${l}"><circle cx="70" cy="70" r="65" stroke-width="3.5"/><circle cx="70" cy="70" r="51" stroke-width="1.6"/><path id="${u}" d="M70 70m-58 0a58 58 0 1 1 116 0a58 58 0 1 1-116 0" stroke="none"/><text class="stamp__mono" font-size="11.5" font-weight="500" letter-spacing="2.4" fill="currentColor" stroke="none"><textPath href="#${u}" startOffset="0">${r}</textPath></text><text class="stamp__big" x="70" y="66" text-anchor="middle" font-weight="800" font-size="27" fill="currentColor" stroke="none">${t}</text><text class="stamp__mono" x="70" y="87" text-anchor="middle" font-size="11" letter-spacing="2" fill="currentColor" stroke="none">${n}</text></g></svg>`}function s(){return(s=e((()=>{a()})))()}var c=t({Colours:()=>f,Default:()=>u,Kinds:()=>d,Tilted:()=>p,__namedExportsOrder:()=>m,default:()=>l}),l,u,d,f,p,m;function h(){return(h=e((()=>{s(),a(),l={title:`Components/Stamp`,parameters:{layout:`padded`},argTypes:{kind:{control:`inline-radio`,options:[`round`,`draft`,`box`]},word:{control:`text`},date:{control:`text`},sub:{control:`text`},color:{control:`inline-radio`,options:[`tertiary`,`primary`,`error`]},still:{control:`boolean`}},args:{kind:`round`,word:`SALIDA`,date:`11 · VII · 27`,sub:`SUBJECT TO CHANGE`,color:`tertiary`,still:!0},render:e=>`<div style="padding:24px">${o(e.kind===`draft`&&e.word===`SALIDA`?{...e,word:`DRAFT`}:e)}</div>`},u={},d={render:()=>`<div style="padding:24px">${n([r(`round`,o({})),r(`draft`,o({kind:`draft`,word:`DRAFT`})),r(`box (hero stampline)`,o({kind:`box`,word:`Summer 2027 · Iberia`}))],40)}</div>`},f={render:()=>`<div style="padding:24px">${n([r(`clay (default)`,o({})),r(`cobalt`,o({color:`primary`})),r(`error`,o({kind:`draft`,word:`VOID`,sub:`NOT VALID`,color:`error`}))],40)}</div>`},p={args:{still:!1},parameters:{docs:{description:{story:`The site rotates stamps (-14° / 6°) and multiplies them onto paper. Use tilt for decoration only; the aria-label carries the message.`}}}},m=[`Default`,`Kinds`,`Colours`,`Tilted`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => \`<div style="padding:24px">\${row([labelled('round', stamp({})), labelled('draft', stamp({
    kind: 'draft',
    word: 'DRAFT'
  })), labelled('box (hero stampline)', stamp({
    kind: 'box',
    word: 'Summer 2027 · Iberia'
  }))], 40)}</div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => \`<div style="padding:24px">\${row([labelled('clay (default)', stamp({})), labelled('cobalt', stamp({
    color: 'primary'
  })), labelled('error', stamp({
    kind: 'draft',
    word: 'VOID',
    sub: 'NOT VALID',
    color: 'error'
  }))], 40)}</div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    still: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The site rotates stamps (-14° / 6°) and multiplies them onto paper. Use tilt for decoration only; the aria-label carries the message.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}}})))()}export{p as a,c as i,u as n,h as o,d as r,f as t};