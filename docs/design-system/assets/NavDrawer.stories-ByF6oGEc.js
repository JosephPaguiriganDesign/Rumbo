import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{o as n,r}from"./story-C0YChiH4.js";import{n as i,t as a}from"./Button-MTcHEQ_D.js";function o({id:e=n(`drawer`),open:t=!1,current:r=-1,tag:i=`Summer 2027 · Iberia`,cta:o=`Get on the list`}={}){return`<div class="scrim${t?` is-open`:``}" ${t?``:`hidden`}></div>
<div class="drawer${t?` is-open`:``}" id="${e}" role="dialog" aria-modal="true" aria-label="Site navigation" ${t?``:`inert`}>
  <div class="drawer__head"><p class="drawer__tag mono">${i}</p><button class="menu-btn menu-btn--close state" type="button" aria-label="Close menu" data-drawer-close><span class="menu-btn__txt">Close</span></button></div>
  <nav aria-label="Mobile">${s.map(([e,t],n)=>`<a class="drawer__item state" href="${e}"${n===r?` aria-current="page"`:``}><span class="drawer__n mono">0${n+1}</span>${t}</a>`).join(``)}
  ${a({label:o,block:!0,href:`#interest`})}</nav>
</div>`}var s,c;function l(){return(l=e((()=>{i(),r(),s=[[`#route`,`The route`],[`#how`,`How it works`],[`#week`,`Sample fortnight`],[`#people`,`Who's coming`],[`#cost`,`Cost`],[`#faq`,`FAQ`]],c=e=>`<button class="menu-btn state" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="${e}" data-drawer-open="${e}"><span class="menu-btn__lines" aria-hidden="true"><i></i><i></i><i></i></span><span class="menu-btn__txt">Menu</span></button>`})))()}var u=t({CurrentItem:()=>m,Default:()=>f,Interactive:()=>h,Open:()=>p,__namedExportsOrder:()=>g,default:()=>d}),d,f,p,m,h,g;function _(){return(_=e((()=>{l(),r(),d={title:`Components/Nav drawer`,parameters:{layout:`padded`},argTypes:{open:{control:`boolean`},current:{control:{type:`number`,min:-1,max:5}},tag:{control:`text`},cta:{control:`text`}},args:{open:!0,current:-1,tag:`Summer 2027 · Iberia`,cta:`Get on the list`},render:e=>`<div class="sb-frame" style="height:620px;max-width:420px">${o(e)}</div>`},f={},p={},m={args:{current:2}},h={args:{open:!1},render:e=>{let t=n(`drawer`);return`<div class="sb-frame" style="height:620px;max-width:420px"><div style="padding:16px;display:flex;justify-content:flex-end">${c(t)}</div><p class="sb-panel" style="padding-top:8px">Press Menu. Focus moves into the drawer and stays there (Tab wraps), Escape or the scrim closes it, and focus goes back to Menu.</p>${o({...e,id:t})}</div>`}},g=[`Default`,`Open`,`CurrentItem`,`Interactive`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    current: 2
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: a => {
    const id = uid('drawer');
    return \`<div class="sb-frame" style="height:620px;max-width:420px"><div style="padding:16px;display:flex;justify-content:flex-end">\${drawerTrigger(id)}</div><p class="sb-panel" style="padding-top:8px">Press Menu. Focus moves into the drawer and stays there (Tab wraps), Escape or the scrim closes it, and focus goes back to Menu.</p>\${navDrawer({
      ...a,
      id
    })}</div>\`;
  }
}`,...h.parameters?.docs?.source}}}})))()}export{p as a,u as i,f as n,_ as o,h as r,m as t};