import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./TopAppBar-Csj5qxy8.js";var i=t({Compact:()=>l,Default:()=>s,NoCurrentLink:()=>d,Scrolled:()=>u,Wide:()=>c,__namedExportsOrder:()=>f,default:()=>o}),a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),a=(e,t=140,n=`100%`)=>`<div class="sb-frame" style="height:${t}px;width:${n};max-width:100%">${e}</div>`,o={title:`Components/Top app bar`,parameters:{layout:`padded`},argTypes:{layout:{control:`inline-radio`,options:[`wide`,`compact`]},current:{control:{type:`number`,min:-1,max:5}},progress:{control:{type:`range`,min:0,max:1,step:.05}},scrolled:{control:`boolean`},cta:{control:`text`}},args:{layout:`wide`,current:1,progress:.35,scrolled:!1,cta:`Get on the list`},render:e=>a(n(e),110,e.layout===`compact`?`390px`:`100%`)},s={},c={args:{layout:`wide`}},l={args:{layout:`compact`}},u={args:{scrolled:!0,progress:.7},parameters:{docs:{description:{story:`Once the page scrolls past 24px the bar gains an ink offset shadow and the dotted route line fills to the scroll progress.`}}}},d={args:{current:-1,progress:0}},f=[`Default`,`Wide`,`Compact`,`Scrolled`,`NoCurrentLink`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'wide'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'compact'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    scrolled: true,
    progress: 0.7
  },
  parameters: {
    docs: {
      description: {
        story: 'Once the page scrolls past 24px the bar gains an ink offset shadow and the dotted route line fills to the scroll progress.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    current: -1,
    progress: 0
  }
}`,...d.parameters?.docs?.source}}}})))()}export{i as a,u as i,s as n,c as o,d as r,p as s,l as t};