import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,i as r,n as i,r as a}from"./story-C0YChiH4.js";import{n as o,t as s}from"./photos-D2yNnq8D.js";function c({photo:e=`bridge`,duo:t=`cobalt`,shape:n=`wide`,caption:r,credit:i=!1,tapeKind:a=`yellow`,tapePos:s=`a`,tilt:c=!0,halftone:u=!0,alt:d,showTape:f=!0,width:p}={}){let m=o[e];return`<figure class="pic pic--${n}${c?``:` no-tilt`}" style="${p?`width:${p}px;`:``}margin-top:${n===`wide`&&c?12:0}px"><div class="duo duo--${t}${u?``:` duo--nohalftone`}"><img src="${m.src}" width="${m.w}" height="${m.h}" alt="${d??m.alt}" loading="lazy" decoding="async"></div>${f?l({kind:a,pos:s}):``}<figcaption class="mono">${r??m.cap}</figcaption>${i?`<span class="pic__credit">${m.credit.split(`,`)[0]}</span>`:``}</figure>`}var l;function u(){return(u=e((()=>{s(),l=({kind:e=`yellow`,pos:t=`a`}={})=>`<span class="tape tape--${t}${e===`clay`?` tape--clay`:``}" aria-hidden="true"></span>`})))()}var d=t({Default:()=>p,Duotones:()=>m,Shapes:()=>h,TapeOnly:()=>g,WithCredit:()=>_,__namedExportsOrder:()=>v,default:()=>f}),f,p,m,h,g,_,v;function y(){return(y=e((()=>{u(),a(),f={title:`Components/Tape & photo frame`,parameters:{layout:`padded`},argTypes:{photo:{control:`select`,options:[`bridge`,`belem`,`estoril`,`alcazaba`,`muelle`]},duo:{control:`select`,options:[`cobalt`,`clay`,`ink`,`sun`,`plain`]},shape:{control:`inline-radio`,options:[`tall`,`wide`,`square`]},caption:{control:`text`},alt:{control:`text`},credit:{control:`boolean`},tilt:{control:`boolean`},halftone:{control:`boolean`},showTape:{control:`boolean`},tapeKind:{control:`inline-radio`,options:[`yellow`,`clay`]},tapePos:{control:`inline-radio`,options:[`a`,`b`,`corner`]}},args:{photo:`bridge`,duo:`cobalt`,shape:`wide`,credit:!1,tilt:!0,halftone:!0,showTape:!0,tapeKind:`yellow`,tapePos:`a`},render:e=>`<div style="width:min(100%,420px);padding:28px 20px">${c(e)}</div>`},p={},m={render:()=>`<div style="padding:28px 12px">${i([[`cobalt`,`belem`],[`clay`,`estoril`],[`ink`,`alcazaba`],[`sun`,`muelle`],[`plain`,`bridge`]].map(([e,t])=>r(e,c({duo:e,photo:t,shape:`wide`,tilt:!1}))),240)}</div>`},h={render:()=>`<div style="padding:28px 12px">${n([c({shape:`tall`,photo:`belem`,width:220}),c({shape:`wide`,photo:`estoril`,duo:`clay`,width:300,tapePos:`b`}),c({shape:`square`,photo:`alcazaba`,width:220,tapeKind:`clay`,tapePos:`corner`})],32)}</div>`},g={render:()=>`<div style="padding:40px;display:flex;gap:60px;position:relative">${[`a`,`b`,`corner`].map(e=>`<div style="position:relative;width:120px;height:60px;background:var(--md-sys-color-surface-container-lowest);border:1.5px solid var(--md-sys-color-on-surface)">${l({pos:e})}</div>`).join(``)}${`<div style="position:relative;width:120px;height:60px;background:var(--md-sys-color-surface-container-lowest);border:1.5px solid var(--md-sys-color-on-surface)">${l({kind:`clay`})}</div>`}</div>`},_={args:{credit:!0,shape:`wide`,tilt:!1}},v=[`Default`,`Duotones`,`Shapes`,`TapeOnly`,`WithCredit`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => \`<div style="padding:28px 12px">\${grid([['cobalt', 'belem'], ['clay', 'estoril'], ['ink', 'alcazaba'], ['sun', 'muelle'], ['plain', 'bridge']].map(([d, p]) => labelled(d, photoFrame({
    duo: d,
    photo: p,
    shape: 'wide',
    tilt: false
  }))), 240)}</div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => \`<div style="padding:28px 12px">\${row([photoFrame({
    shape: 'tall',
    photo: 'belem',
    width: 220
  }), photoFrame({
    shape: 'wide',
    photo: 'estoril',
    duo: 'clay',
    width: 300,
    tapePos: 'b'
  }), photoFrame({
    shape: 'square',
    photo: 'alcazaba',
    width: 220,
    tapeKind: 'clay',
    tapePos: 'corner'
  })], 32)}</div>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => \`<div style="padding:40px;display:flex;gap:60px;position:relative">\${['a', 'b', 'corner'].map(p => \`<div style="position:relative;width:120px;height:60px;background:var(--md-sys-color-surface-container-lowest);border:1.5px solid var(--md-sys-color-on-surface)">\${tape({
    pos: p
  })}</div>\`).join('')}\${\`<div style="position:relative;width:120px;height:60px;background:var(--md-sys-color-surface-container-lowest);border:1.5px solid var(--md-sys-color-on-surface)">\${tape({
    kind: 'clay'
  })}</div>\`}</div>\`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    credit: true,
    shape: 'wide',
    tilt: false
  }
}`,..._.parameters?.docs?.source}}}})))()}export{g as a,h as i,m as n,_ as o,d as r,y as s,p as t};