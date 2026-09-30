import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{i as n,n as r,o as i,r as a}from"./story-C0YChiH4.js";function o({title:e=`Ages 12–14`,sub:t=`Younger group`,name:n=`group`,type:r=`radio`,checked:a=!1,disabled:o=!1,state:s=``,value:c}={}){let l=i(`p`);return`<label class="punch${r===`checkbox`?` punch--check`:``}${s===`hover`?` is-hover`:``}" for="${l}"><input id="${l}" type="${r}" name="${n}" value="${c||e}" ${a?`checked`:``} ${o?`disabled`:``}><span class="punch__body state${s===`focus`?` is-focus`:``}"><span class="punch__t">${e}</span><span class="punch__s mono">${t}</span></span></label>`}function s({legend:e=`Age group`,name:t=`group`,type:n=`radio`,options:r=[[`Ages 12–14`,`Younger group`],[`Ages 15–17`,`Older group`],[`Not sure yet`,`Ask us`]],checked:a=-1,disabledIdx:s=-1,error:c=``}={}){let l=i(`cg`);return`<fieldset class="choice" ${c?`aria-describedby="${l}-err"`:``}><legend class="tf__label mono">${e}</legend><div class="choice__row">${r.map(([e,r],i)=>o({title:e,sub:r,name:t,type:n,checked:i===a,disabled:i===s})).join(``)}</div>${c?`<p class="tf__err" id="${l}-err" style="margin-top:8px">${c}</p>`:``}</fieldset>`}function c(){return(c=e((()=>{a()})))()}var l=t({Checkbox:()=>m,Default:()=>d,Group:()=>f,GroupError:()=>h,States:()=>p,__namedExportsOrder:()=>g,default:()=>u}),u,d,f,p,m,h,g;function _(){return(_=e((()=>{c(),a(),u={title:`Components/Chip (ticket punch)`,parameters:{layout:`padded`},argTypes:{title:{control:`text`},sub:{control:`text`},type:{control:`inline-radio`,options:[`radio`,`checkbox`]},checked:{control:`boolean`},disabled:{control:`boolean`}},args:{title:`Ages 12–14`,sub:`Younger group`,type:`radio`,checked:!1,disabled:!1},render:e=>`<div style="max-width:300px;padding:12px">${o(e)}</div>`},d={},f={render:()=>`<div style="max-width:720px;padding:12px">${s({checked:1})}</div>`},p={render:()=>r([n(`default`,o({name:`s1`})),n(`hover`,o({name:`s2`,state:`hover`})),n(`focus-visible`,o({name:`s3`,state:`focus`})),n(`selected`,o({name:`s4`,checked:!0})),n(`disabled`,o({name:`s5`,disabled:!0})),n(`disabled + selected`,o({name:`s6`,disabled:!0,checked:!0}))],260)},m={render:()=>`<div style="max-width:720px;padding:12px">${s({legend:`Anything we should know?`,type:`checkbox`,name:`know`,options:[[`Vegetarian`,`Meals`],[`Allergies`,`We will call`],[`Travelling alone`,`Ask us`]],checked:0})}</div>`},h={render:()=>`<div style="max-width:720px;padding:12px">${s({error:`Pick an age group, or choose “Not sure yet”.`})}</div>`},g=[`Default`,`Group`,`States`,`Checkbox`,`GroupError`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => \`<div style="max-width:720px;padding:12px">\${choiceGroup({
    checked: 1
  })}</div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => grid([labelled('default', punch({
    name: 's1'
  })), labelled('hover', punch({
    name: 's2',
    state: 'hover'
  })), labelled('focus-visible', punch({
    name: 's3',
    state: 'focus'
  })), labelled('selected', punch({
    name: 's4',
    checked: true
  })), labelled('disabled', punch({
    name: 's5',
    disabled: true
  })), labelled('disabled + selected', punch({
    name: 's6',
    disabled: true,
    checked: true
  }))], 260)
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => \`<div style="max-width:720px;padding:12px">\${choiceGroup({
    legend: 'Anything we should know?',
    type: 'checkbox',
    name: 'know',
    options: [['Vegetarian', 'Meals'], ['Allergies', 'We will call'], ['Travelling alone', 'Ask us']],
    checked: 0
  })}</div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => \`<div style="max-width:720px;padding:12px">\${choiceGroup({
    error: 'Pick an age group, or choose “Not sure yet”.'
  })}</div>\`
}`,...h.parameters?.docs?.source}}}})))()}export{h as a,f as i,l as n,p as o,d as r,_ as s,m as t};