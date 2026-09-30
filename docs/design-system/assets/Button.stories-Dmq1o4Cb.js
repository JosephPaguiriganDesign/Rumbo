import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,i as r,n as i,r as a}from"./story-C0YChiH4.js";import{n as o,t as s}from"./Button-MTcHEQ_D.js";var c=t({Block:()=>h,Default:()=>u,OnColour:()=>g,Sizes:()=>f,States:()=>m,Variants:()=>d,WithIcon:()=>p,__namedExportsOrder:()=>_,default:()=>l}),l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{o(),a(),l={title:`Components/Button`,parameters:{docs:{description:{component:`Cut-corner paper label with an ink offset shadow. Five variants, three sizes, optional trailing arrow, icon-only.`}}},argTypes:{label:{control:`text`},variant:{control:`inline-radio`,options:[`filled`,`tonal`,`outlined`,`accent`,`text`]},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},icon:{control:`boolean`},iconOnly:{control:`boolean`},disabled:{control:`boolean`},block:{control:`boolean`},state:{control:`select`,options:[``,`hover`,`focus`,`pressed`],description:`Force a state for documentation`}},args:{label:`Get on the list`,variant:`filled`,size:`md`,icon:!1,iconOnly:!1,disabled:!1,block:!1,state:``},render:e=>s(e)},u={},d={render:()=>n([`filled`,`tonal`,`outlined`,`accent`,`text`].map(e=>s({variant:e,label:e[0].toUpperCase()+e.slice(1)})))},f={render:()=>n([`sm`,`md`,`lg`].map(e=>s({size:e,label:`Size ${e}`})))},p={render:()=>n([s({icon:!0,size:`lg`}),s({variant:`tonal`,icon:!0,label:`Follow the route`}),s({variant:`outlined`,iconOnly:!0,ariaLabel:`Next leg`}),s({variant:`filled`,iconOnly:!0,ariaLabel:`Next leg`,size:`lg`})])},m={render:()=>i([`filled`,`tonal`,`outlined`,`accent`,`text`].map(e=>r(e,`<div style="display:grid;gap:14px;justify-items:start">${[``,`hover`,`focus`,`pressed`].map(t=>s({variant:e,state:t,label:t||`Default`})).join(``)}${s({variant:e,disabled:!0,label:`Disabled`})}</div>`)),170),parameters:{docs:{description:{story:`Hover, focus and pressed are forced with .is-hover / .is-focus / .is-pressed so they can be shown statically. Real states use :hover, :focus-visible, :active.`}}}},h={render:()=>`<div style="max-width:360px">${s({block:!0,size:`lg`,label:`Put us on the list`})}</div>`},g={render:()=>`<div style="display:grid;gap:16px">
  <div class="sb-panel sb-panel--primary on-primary-panel">${n([s({variant:`tonal`,label:`Tonal on cobalt`})])}</div>
  <div class="sb-panel sb-panel--sun">${n([s({label:`Filled on sun`}),s({variant:`outlined`,label:`Outlined on sun`})])}</div></div>`,parameters:{docs:{description:{story:`Text button on a cobalt panel inherits ink colour and fails contrast; use tonal or a light --btn-fg there. This story shows the safe combos plus one to avoid is omitted.`}}}},_=[`Default`,`Variants`,`Sizes`,`WithIcon`,`States`,`Block`,`OnColour`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => row(['filled', 'tonal', 'outlined', 'accent', 'text'].map(v => button({
    variant: v,
    label: v[0].toUpperCase() + v.slice(1)
  })))
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => row(['sm', 'md', 'lg'].map(s => button({
    size: s,
    label: \`Size \${s}\`
  })))
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => row([button({
    icon: true,
    size: 'lg'
  }), button({
    variant: 'tonal',
    icon: true,
    label: 'Follow the route'
  }), button({
    variant: 'outlined',
    iconOnly: true,
    ariaLabel: 'Next leg'
  }), button({
    variant: 'filled',
    iconOnly: true,
    ariaLabel: 'Next leg',
    size: 'lg'
  })])
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => grid(['filled', 'tonal', 'outlined', 'accent', 'text'].map(v => labelled(v, \`<div style="display:grid;gap:14px;justify-items:start">\${['', 'hover', 'focus', 'pressed'].map(s => button({
    variant: v,
    state: s,
    label: s || 'Default'
  })).join('')}\${button({
    variant: v,
    disabled: true,
    label: 'Disabled'
  })}</div>\`)), 170),
  parameters: {
    docs: {
      description: {
        story: 'Hover, focus and pressed are forced with .is-hover / .is-focus / .is-pressed so they can be shown statically. Real states use :hover, :focus-visible, :active.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => \`<div style="max-width:360px">\${button({
    block: true,
    size: 'lg',
    label: 'Put us on the list'
  })}</div>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => \`<div style="display:grid;gap:16px">
  <div class="sb-panel sb-panel--primary on-primary-panel">\${row([button({
    variant: 'tonal',
    label: 'Tonal on cobalt'
  })])}</div>
  <div class="sb-panel sb-panel--sun">\${row([button({
    label: 'Filled on sun'
  }), button({
    variant: 'outlined',
    label: 'Outlined on sun'
  })])}</div></div>\`,
  parameters: {
    docs: {
      description: {
        story: 'Text button on a cobalt panel inherits ink colour and fails contrast; use tonal or a light --btn-fg there. This story shows the safe combos plus one to avoid is omitted.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}}})))()}export{f as a,p as c,g as i,v as l,c as n,m as o,u as r,d as s,h as t};