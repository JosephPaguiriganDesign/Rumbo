import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,r}from"./icons-DjAScHZn.js";function i({items:e=a,tone:t=`primary`,current:r=0,done:i=0}={}){return`<ol class="play${t===`paper`?` play--paper`:``}">${e.map(([e,t],a)=>{let o=a<i,s=r===a+1;return`<li class="play__step${o?` is-done`:``}"${s?` aria-current="step"`:``}><span class="play__n" aria-hidden="true">${o?n.check(28):a+1}</span><div><h3 class="title">${e}${o?`<span class="sr-only"> (done)</span>`:``}${s?`<span class="sr-only"> (current step)</span>`:``}</h3><p>${t}</p></div></li>`}).join(``)}</ol>`}var a;function o(){return(o=e((()=>{r(),a=[[`Put your name down`,`Fill in the interest list. It’s not an application and it’s not a commitment.`],[`Have a chat`,`A 20-minute video call with a parent and the player. Ask us anything, including the awkward stuff.`],[`Lock in a spot`,`A $500 deposit holds a place in one of the two age groups. The balance is due on 1 April 2027.`],[`Fly out together`,`Most of the group flies into Lisbon on Sunday 11 July. We’ll help with flight timing so nobody lands alone.`]]})))()}var s=t({Default:()=>l,OnPaper:()=>u,Progress:()=>d,__namedExportsOrder:()=>f,default:()=>c}),c,l,u,d,f;function p(){return(p=e((()=>{o(),c={title:`Components/Stepper`,parameters:{layout:`fullscreen`},argTypes:{tone:{control:`inline-radio`,options:[`primary`,`paper`]},current:{control:{type:`number`,min:0,max:4}},done:{control:{type:`number`,min:0,max:4}}},args:{tone:`primary`,current:0,done:0},render:e=>`<div class="sb-panel ${e.tone===`primary`?`sb-panel--primary on-primary-panel`:``}">${i(e)}</div>`},l={},u={args:{tone:`paper`}},d={args:{tone:`paper`,done:2,current:3},parameters:{docs:{description:{story:`aria-current="step" marks the active step; completed steps swap the number for a tick and add “(done)” for screen readers.`}}}},f=[`Default`,`OnPaper`,`Progress`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'paper'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tone: 'paper',
    done: 2,
    current: 3
  },
  parameters: {
    docs: {
      description: {
        story: 'aria-current="step" marks the active step; completed steps swap the number for a tick and add “(done)” for screen readers.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,s as i,u as n,d as r,l as t};