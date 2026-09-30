import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{r as n}from"./icons-DjAScHZn.js";import{i as r,n as i,o as a,r as o}from"./story-C0YChiH4.js";function s({label:e=`Parent or guardian name`,type:t=`text`,name:n=`parent`,value:r=``,hint:i=``,error:o=``,required:s=!0,disabled:c=!1,floating:l=!1,short:u=!1,placeholder:d=``,state:f=``,autocomplete:p=``,describeExtra:m=``}={}){let h=a(`tf`),g=[i&&`${h}-hint`,o&&`${h}-err`].filter(Boolean).join(` `),_=`<input class="tf__input${f?` is-`+f:``}" id="${h}" name="${n}" type="${t}" ${r?`value="${r}"`:``} ${s?`required`:``} ${c?`disabled`:``} ${p?`autocomplete="${p}"`:``} placeholder="${l?` `:d}" ${o?`aria-invalid="true"`:``} ${g?`aria-describedby="${g}"`:``}>`,v=`<label class="tf__label${l?``:` mono`}" for="${h}">${e}${s?`<span class="sr-only"> (required)</span>`:``}</label>`;return`<div class="tf${u?` tf--short`:``}${l?` tf--float`:``}${o?` is-invalid`:``}">${l?_+v:v+_}${i?`<p class="tf__hint" id="${h}-hint">${i}</p>`:``}<p class="tf__err" id="${h}-err" ${o?``:`hidden`}><span>${o}</span></p></div>`}function c(){return(c=e((()=>{o(),n()})))()}var l=t({Default:()=>d,Disabled:()=>g,Error:()=>m,FloatingError:()=>h,States:()=>p,Variants:()=>f,__namedExportsOrder:()=>_,default:()=>u}),u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{c(),o(),u={title:`Components/Text field`,parameters:{layout:`padded`},argTypes:{label:{control:`text`},type:{control:`select`,options:[`text`,`email`,`number`,`tel`]},value:{control:`text`},hint:{control:`text`},error:{control:`text`},required:{control:`boolean`},disabled:{control:`boolean`},floating:{control:`boolean`},short:{control:`boolean`}},args:{label:`Parent or guardian name`,type:`text`,value:``,hint:``,error:``,required:!0,disabled:!1,floating:!1,short:!1},render:e=>`<div style="max-width:420px;padding:12px">${s(e)}</div>`},d={},f={render:()=>i([r(`label above (site default)`,s({label:`Email`,type:`email`,name:`e1`,hint:`We reply from a real inbox.`})),r(`floating label`,s({label:`Email`,type:`email`,name:`e2`,floating:!0})),r(`floating, filled`,s({label:`Email`,type:`email`,name:`e3`,floating:!0,value:`ana@example.com`})),r(`short`,s({label:`Player’s age`,type:`number`,name:`age`,short:!0,hint:`Ages 12 to 17 on 11 July 2027.`}))],300)},p={render:()=>i([r(`default`,s({name:`s1`,label:`Name`})),r(`hover`,s({name:`s2`,label:`Name`,state:`hover`})),r(`focus`,s({name:`s3`,label:`Name`,state:`focus`})),r(`filled`,s({name:`s4`,label:`Name`,value:`Joseph`})),r(`error`,s({name:`s5`,label:`Email`,type:`email`,value:`joseph@`,error:`Please enter a valid email address.`})),r(`disabled`,s({name:`s6`,label:`Name`,value:`Locked after registration`,disabled:!0}))],300)},m={args:{label:`Email`,type:`email`,value:`joseph@`,error:`Please enter a valid email address.`}},h={args:{label:`Email`,type:`email`,floating:!0,value:`joseph@`,error:`Please enter a valid email address.`}},g={args:{disabled:!0,value:`Locked`}},_=[`Default`,`Variants`,`States`,`Error`,`FloatingError`,`Disabled`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => grid([labelled('label above (site default)', textField({
    label: 'Email',
    type: 'email',
    name: 'e1',
    hint: 'We reply from a real inbox.'
  })), labelled('floating label', textField({
    label: 'Email',
    type: 'email',
    name: 'e2',
    floating: true
  })), labelled('floating, filled', textField({
    label: 'Email',
    type: 'email',
    name: 'e3',
    floating: true,
    value: 'ana@example.com'
  })), labelled('short', textField({
    label: 'Player’s age',
    type: 'number',
    name: 'age',
    short: true,
    hint: 'Ages 12 to 17 on 11 July 2027.'
  }))], 300)
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => grid([labelled('default', textField({
    name: 's1',
    label: 'Name'
  })), labelled('hover', textField({
    name: 's2',
    label: 'Name',
    state: 'hover'
  })), labelled('focus', textField({
    name: 's3',
    label: 'Name',
    state: 'focus'
  })), labelled('filled', textField({
    name: 's4',
    label: 'Name',
    value: 'Joseph'
  })), labelled('error', textField({
    name: 's5',
    label: 'Email',
    type: 'email',
    value: 'joseph@',
    error: 'Please enter a valid email address.'
  })), labelled('disabled', textField({
    name: 's6',
    label: 'Name',
    value: 'Locked after registration',
    disabled: true
  }))], 300)
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    value: 'joseph@',
    error: 'Please enter a valid email address.'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    floating: true,
    value: 'joseph@',
    error: 'Please enter a valid email address.'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Locked'
  }
}`,...g.parameters?.docs?.source}}}})))()}export{p as a,v as c,h as i,g as n,l as o,m as r,f as s,d as t};