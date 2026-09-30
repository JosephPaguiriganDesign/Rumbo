import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,r}from"./icons-DjAScHZn.js";import{i,n as a,o,r as s}from"./story-C0YChiH4.js";function c({label:e=`Anything else we should know?`,name:t=`notes`,value:n=``,hint:r=`Allergies, nerves, a favourite formation. All fine.`,error:i=``,required:a=!1,disabled:s=!1,floating:c=!1,rows:l=4,state:u=``}={}){let d=o(`ta`),f=[r&&`${d}-hint`,i&&`${d}-err`].filter(Boolean).join(` `),p=`<textarea class="tf__input${u?` is-`+u:``}" id="${d}" name="${t}" rows="${l}" ${a?`required`:``} ${s?`disabled`:``} placeholder="${c?` `:``}" ${i?`aria-invalid="true"`:``} ${f?`aria-describedby="${f}"`:``}>${n}</textarea>`,m=`<label class="tf__label${c?``:` mono`}" for="${d}">${e}${a?`<span class="sr-only"> (required)</span>`:``}</label>`;return`<div class="tf${c?` tf--float`:``}${i?` is-invalid`:``}">${c?p+m:m+p}${r?`<p class="tf__hint" id="${d}-hint">${r}</p>`:``}<p class="tf__err" id="${d}-err" ${i?``:`hidden`}><span>${i}</span></p></div>`}function l({label:e=`Position`,name:t=`position`,options:r=[`Goalkeeper`,`Defender`,`Midfielder`,`Forward`,`Not sure`],placeholder:i=`Pick one (or don’t)`,value:a=``,error:s=``,required:c=!1,disabled:l=!1,floating:u=!1,state:d=``}={}){let f=o(`sel`),p=s?`${f}-err`:``,m=`<select class="tf__input${d?` is-`+d:``}" id="${f}" name="${t}" ${c?`required`:``} ${l?`disabled`:``} ${s?`aria-invalid="true"`:``} ${p?`aria-describedby="${p}"`:``}><option value="">${i}</option>${r.map(e=>`<option${e===a?` selected`:``}>${e}</option>`).join(``)}</select>`,h=`<label class="tf__label${u?``:` mono`}" for="${f}">${e}${c?`<span class="sr-only"> (required)</span>`:``}</label>`;return`<div class="tf tf--select${u?` tf--float`:``}${s?` is-invalid`:``}">${u?m+h:h+m}${n.chevron(24)}<p class="tf__err" id="${f}-err" ${s?``:`hidden`}><span>${s}</span></p></div>`}function u(){return(u=e((()=>{s(),r()})))()}var d=t({Default:()=>p,Select:()=>h,SelectStates:()=>g,TextareaStates:()=>m,__namedExportsOrder:()=>_,default:()=>f}),f,p,m,h,g,_;function v(){return(v=e((()=>{u(),s(),f={title:`Components/Textarea & select`,parameters:{layout:`padded`},argTypes:{label:{control:`text`},hint:{control:`text`},error:{control:`text`},required:{control:`boolean`},disabled:{control:`boolean`},floating:{control:`boolean`},rows:{control:{type:`number`,min:2,max:10}}},args:{label:`Anything else we should know?`,hint:`Allergies, nerves, a favourite formation. All fine.`,error:``,required:!1,disabled:!1,floating:!1,rows:4},render:e=>`<div style="max-width:460px;padding:12px">${c(e)}</div>`},p={},m={render:()=>a([i(`default`,c({})),i(`floating`,c({floating:!0,label:`Notes`})),i(`error`,c({required:!0,error:`Tell us a little, even “nothing” is fine.`})),i(`disabled`,c({disabled:!0,value:`Closed after registration.`}))],300)},h={render:()=>`<div style="max-width:360px;padding:12px">${l({})}</div>`},g={render:()=>a([i(`default`,l({})),i(`selected`,l({value:`Goalkeeper`})),i(`floating`,l({floating:!0,value:`Forward`})),i(`error`,l({required:!0,error:`Pick a position, or “Not sure”.`})),i(`disabled`,l({disabled:!0}))],280)},_=[`Default`,`TextareaStates`,`Select`,`SelectStates`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => grid([labelled('default', textarea({})), labelled('floating', textarea({
    floating: true,
    label: 'Notes'
  })), labelled('error', textarea({
    required: true,
    error: 'Tell us a little, even “nothing” is fine.'
  })), labelled('disabled', textarea({
    disabled: true,
    value: 'Closed after registration.'
  }))], 300)
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'{\n  render: () => `<div style="max-width:360px;padding:12px">${select({})}</div>`\n}',...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => grid([labelled('default', select({})), labelled('selected', select({
    value: 'Goalkeeper'
  })), labelled('floating', select({
    floating: true,
    value: 'Forward'
  })), labelled('error', select({
    required: true,
    error: 'Pick a position, or “Not sure”.'
  })), labelled('disabled', select({
    disabled: true
  }))], 280)
}`,...g.parameters?.docs?.source}}}})))()}export{m as a,d as i,h as n,v as o,g as r,p as t};