import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,r}from"./icons-DjAScHZn.js";import{i,n as a,o,r as s}from"./story-C0YChiH4.js";function c({items:e=l,open:t=[0],single:r=!1,variant:i=`rule`,disabledIdx:a=-1,state:s=``,headingLevel:c=3}={}){let u=o(`acc`);return`<div class="accordion${i===`card`?` accordion--card`:``}" ${r?`data-single`:``}>${e.map(([e,r],i)=>`<div class="acc"><h${c} class="acc__h"><button class="acc__btn state${s&&i===0?` is-`+s:``}" type="button" id="${u}-b${i}" aria-expanded="${t.includes(i)}" aria-controls="${u}-p${i}" ${i===a?`disabled`:``}><span>${e}</span>${n.plus(24)}</button></h${c}><div class="acc__panel" id="${u}-p${i}" role="region" aria-labelledby="${u}-b${i}"><div><p>${r}</p></div></div></div>`).join(``)}</div>`}var l;function u(){return(u=e((()=>{r(),s(),l=[[`Is a place at a professional club guaranteed?`,`<strong>No.</strong> Rumbo is a training and playing trip. We can promise good coaching, real matches and honest feedback. We can’t promise a trial, a placement or a contract, and nobody honest can.`],[`Who are the friendlies against?`,`Local youth clubs and academies in the Lisbon and Málaga areas. None are confirmed yet, so we won’t name anyone. Once a match is agreed in writing, we’ll tell families who, where and when.`],[`What should my child pack?`,`Two pairs of boots (grass and turf), shin guards, three training kits, a swimsuit, a hat, a refillable water bottle, sunscreen, any medication, and a passport in a carry-on.`]]})))()}var d=t({AllClosed:()=>m,AllOpen:()=>h,CardVariant:()=>_,Default:()=>p,SingleOpen:()=>g,States:()=>v,__namedExportsOrder:()=>y,default:()=>f}),f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{u(),s(),f={title:`Components/Accordion`,parameters:{layout:`padded`},argTypes:{variant:{control:`inline-radio`,options:[`rule`,`card`]},single:{control:`boolean`},open:{control:`object`},headingLevel:{control:`inline-radio`,options:[2,3,4]},state:{control:`select`,options:[``,`hover`,`focus`]},disabledIdx:{control:{type:`number`,min:-1,max:2}}},args:{variant:`rule`,single:!1,open:[0],headingLevel:3,state:``,disabledIdx:-1},render:e=>`<div style="max-width:720px;padding:12px">${c(e)}</div>`},p={},m={args:{open:[]}},h={args:{open:[0,1,2]}},g={args:{single:!0}},_={args:{variant:`card`}},v={render:()=>a([i(`hover (first row)`,c({open:[],state:`hover`})),i(`focus (first row)`,c({open:[],state:`focus`})),i(`disabled (2nd row)`,c({open:[],disabledIdx:1}))],340)},y=[`Default`,`AllClosed`,`AllOpen`,`SingleOpen`,`CardVariant`,`States`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    open: []
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    open: [0, 1, 2]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    single: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => grid([labelled('hover (first row)', accordion({
    open: [],
    state: 'hover'
  })), labelled('focus (first row)', accordion({
    open: [],
    state: 'focus'
  })), labelled('disabled (2nd row)', accordion({
    open: [],
    disabledIdx: 1
  }))], 340)
}`,...v.parameters?.docs?.source}}}})))()}export{p as a,b as c,_ as i,m as n,g as o,h as r,v as s,d as t};