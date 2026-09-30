import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{i as n,r}from"./story-C0YChiH4.js";import{n as i,t as a}from"./TopAppBar-Csj5qxy8.js";function o({progress:e=.4,stops:t=[`Land`,`Lisbon coast`,`Málaga coast`],label:n=`Trip progress`,now:r=``}={}){let i=Math.round(e*100);return`<div class="route-line" style="--progress:${e}" role="progressbar" aria-label="${n}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${i}" aria-valuetext="${r||i+`% of the route`}"><div class="route-line__track" aria-hidden="true"><span class="route-line__base"></span><span class="route-line__done"></span><span class="route-line__pin" style="left:0"></span><span class="route-line__pin" style="left:50%"></span><span class="route-line__pin" style="left:100%"></span><span class="route-line__pin route-line__pin--head"></span></div><div class="route-line__stops" aria-hidden="true">${t.map(e=>`<span>${e}</span>`).join(``)}</div>${r?`<p class="route-line__now">${r}</p>`:``}</div>`}var s=t({Default:()=>l,InAppBar:()=>d,Steps:()=>u,__namedExportsOrder:()=>f,default:()=>c}),c,l,u,d,f;function p(){return(p=e((()=>{a(),r(),c={title:`Components/Route line`,parameters:{layout:`padded`},argTypes:{progress:{control:{type:`range`,min:0,max:1,step:.05}},label:{control:`text`},now:{control:`text`}},args:{progress:.4,label:`Trip progress`,now:`Day 6 of 14: Lisbon on foot`},render:e=>`<div style="max-width:640px;padding:24px 20px">${o(e)}</div>`},l={},u={render:()=>`<div style="max-width:640px;padding:24px 20px;display:grid;gap:36px">${[0,.25,.5,.75,1].map(e=>n(`${e*100}%`,o({progress:e}).replace(`role="progressbar"`,`role="progressbar"`))).join(``)}</div>`,parameters:{a11y:{test:`todo`}}},d={render:()=>`<div class="sb-frame" style="height:110px">${i({progress:.6})}</div>`,parameters:{docs:{description:{story:`Same dotted line runs along the bottom edge of the top app bar, driven by --progress (scroll position). That instance is aria-hidden: it is decoration, not a control.`}}}},f=[`Default`,`Steps`,`InAppBar`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => \`<div style="max-width:640px;padding:24px 20px;display:grid;gap:36px">\${[0, 0.25, 0.5, 0.75, 1].map(p => labelled(\`\${p * 100}%\`, routeLine({
    progress: p
  }).replace('role="progressbar"', 'role="progressbar"'))).join('')}</div>\`,
  parameters: {
    a11y: {
      test: 'todo'
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => \`<div class="sb-frame" style="height:110px">\${topAppBar({
    progress: 0.6
  })}</div>\`,
  parameters: {
    docs: {
      description: {
        story: 'Same dotted line runs along the bottom edge of the top app bar, driven by --progress (scroll position). That instance is aria-hidden: it is decoration, not a control.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,u as i,d as n,s as r,l as t};