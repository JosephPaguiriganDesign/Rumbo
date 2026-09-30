import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,r}from"./icons-DjAScHZn.js";function i({tone:e=`note`,title:t=``,text:r=`Preview only: this form doesn’t send anything yet.`,role:i,dismissible:a=!1,link:o=``}={}){let s=i||(e===`error`?`alert`:e===`note`?`note`:`status`),c=e===`error`||e===`warn`?n.alert(24):e===`success`?n.check(24):n.info(24);return`<div class="banner${e===`note`?``:` banner--`+e}" role="${s}">${c}<p>${t?`<span class="banner__title">${t}</span>`:``}${r}${o?` <a href="#">${o}</a>`:``}</p>${a?`<button class="banner__close state" type="button" aria-label="Dismiss notice"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button>`:``}</div>`}function a(){return(a=e((()=>{r()})))()}var o=t({Default:()=>c,Dismissible:()=>u,Tones:()=>l,__namedExportsOrder:()=>d,default:()=>s}),s,c,l,u,d;function f(){return(f=e((()=>{a(),s={title:`Components/Banner`,parameters:{layout:`padded`},argTypes:{tone:{control:`inline-radio`,options:[`note`,`info`,`warn`,`error`,`success`]},title:{control:`text`},text:{control:`text`},dismissible:{control:`boolean`},role:{control:`inline-radio`,options:[void 0,`note`,`status`,`alert`]}},args:{tone:`note`,title:``,text:`Preview only: this form doesn’t send anything yet.`,dismissible:!1},render:e=>`<div style="max-width:560px;padding:12px">${i(e)}</div>`},c={},l={render:()=>`<div style="max-width:560px;padding:12px;display:grid;gap:14px">${[i({tone:`note`,title:`Draft`,text:`Details are placeholders until families hear from us.`}),i({tone:`info`,title:`Good to know`,text:`The 20-minute call is with a parent and the player.`}),i({tone:`warn`,title:`Match days are “hoped for”`,text:`Fixtures depend on other people’s calendars.`}),i({tone:`error`,title:`Two things need another look`,text:`Email and age are highlighted below.`}),i({tone:`success`,title:`Thanks`,text:`You’re on the list. We’ll write when there’s something real to say.`})].join(``)}</div>`},u={args:{dismissible:!0,tone:`info`,title:`Heads up`,text:`This one can be dismissed. Focus returns to the page.`}},d=[`Default`,`Tones`,`Dismissible`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => \`<div style="max-width:560px;padding:12px;display:grid;gap:14px">\${[banner({
    tone: 'note',
    title: 'Draft',
    text: 'Details are placeholders until families hear from us.'
  }), banner({
    tone: 'info',
    title: 'Good to know',
    text: 'The 20-minute call is with a parent and the player.'
  }), banner({
    tone: 'warn',
    title: 'Match days are “hoped for”',
    text: 'Fixtures depend on other people’s calendars.'
  }), banner({
    tone: 'error',
    title: 'Two things need another look',
    text: 'Email and age are highlighted below.'
  }), banner({
    tone: 'success',
    title: 'Thanks',
    text: 'You’re on the list. We’ll write when there’s something real to say.'
  })].join('')}</div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    dismissible: true,
    tone: 'info',
    title: 'Heads up',
    text: 'This one can be dismissed. Focus returns to the page.'
  }
}`,...u.parameters?.docs?.source}}}})))()}export{f as a,l as i,c as n,u as r,o as t};