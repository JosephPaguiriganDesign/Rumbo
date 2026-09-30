import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./SectionDivider-CIY7zhnE.js";var i=t({AllEdges:()=>l,Default:()=>c,OnCobalt:()=>u,OnInk:()=>d,__namedExportsOrder:()=>f,default:()=>s}),a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),a={paper:`var(--md-sys-color-on-surface)`,lowest:`var(--md-sys-color-on-surface)`,cobalt:`var(--md-sys-color-on-primary)`,clay:`var(--md-sys-color-on-tertiary-container)`,ink:`var(--md-sys-color-inverse-on-surface)`,sun:`var(--md-sys-color-on-sun-container)`},o={paper:`var(--md-sys-color-surface)`,lowest:`var(--md-sys-color-surface-container-lowest)`,cobalt:`var(--md-sys-color-primary)`,clay:`var(--md-sys-color-tertiary-container)`,ink:`var(--md-sys-color-inverse-surface)`,sun:`var(--md-sys-color-sun-container)`},s={title:`Components/Section divider (torn edge)`,parameters:{layout:`fullscreen`},argTypes:{edge:{control:`select`,options:[`torn1`,`torn2`,`torn3`,`torn4`,`torn5`,`wave1`]},from:{control:`select`,options:Object.keys(o)},to:{control:`select`,options:Object.keys(o)}},args:{edge:`torn1`,from:`paper`,to:`lowest`},render:e=>n({...e,from:o[e.from],to:o[e.to],fgA:a[e.from],fgB:a[e.to]})},c={},l={render:()=>{let e=[`paper`,`lowest`,`cobalt`,`paper`,`clay`,`paper`],t=[`lowest`,`cobalt`,`paper`,`clay`,`ink`,`sun`];return[`torn1`,`torn2`,`torn3`,`torn4`,`torn5`,`wave1`].map((r,i)=>n({edge:r,from:o[e[i]],to:o[t[i]],fgA:a[e[i]],fgB:a[t[i]],textA:``,textB:r})).join(``)}},u={args:{from:`lowest`,to:`cobalt`,edge:`torn2`}},d={args:{from:`clay`,to:`ink`,edge:`torn5`}},f=[`Default`,`AllEdges`,`OnCobalt`,`OnInk`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const A = ['paper', 'lowest', 'cobalt', 'paper', 'clay', 'paper'],
      B = ['lowest', 'cobalt', 'paper', 'clay', 'ink', 'sun'];
    return ['torn1', 'torn2', 'torn3', 'torn4', 'torn5', 'wave1'].map((e, i) => sectionDivider({
      edge: e,
      from: C[A[i]],
      to: C[B[i]],
      fgA: FG[A[i]],
      fgB: FG[B[i]],
      textA: '',
      textB: e
    })).join('');
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    from: 'lowest',
    to: 'cobalt',
    edge: 'torn2'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    from: 'clay',
    to: 'ink',
    edge: 'torn5'
  }
}`,...d.parameters?.docs?.source}}}})))()}export{i as a,d as i,c as n,p as o,u as r,l as t};