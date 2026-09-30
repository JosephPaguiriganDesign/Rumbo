import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./icons-DjAScHZn.js";import{o as r,r as i}from"./story-C0YChiH4.js";import{n as a,t as o}from"./Button-MTcHEQ_D.js";function s({layout:e=`wide`,current:n=1,progress:i=.35,scrolled:a=!1,cta:s=`Get on the list`,drawerId:l=``}={}){let u=r(`bar`);return`<header class="app-bar app-bar--${e}${a?` is-scrolled`:``}" style="--progress:${i}">
  <div class="app-bar__inner">
    <a class="brand" href="#top" aria-label="Rumbo, back to top">${t.brandMark(36)}<span class="brand__word">Rumbo</span></a>
    <nav aria-label="Primary" class="top-nav" id="${u}">${c.map(([e,t],r)=>`<a class="top-nav__link state" href="${e}"${r===n?` aria-current="true"`:``}>${t}</a>`).join(``)}</nav>
    ${o({variant:`tonal`,label:s,extra:`btn--bar`,href:`#interest`})}
    <button class="menu-btn state" type="button" aria-label="Open menu" aria-expanded="false" ${l?`aria-controls="${l}" data-drawer-open="${l}"`:``}><span class="menu-btn__lines" aria-hidden="true"><i></i><i></i><i></i></span><span class="menu-btn__txt">Menu</span></button>
  </div>
  <div class="app-bar__route" aria-hidden="true"></div>
</header>`}var c;function l(){return(l=e((()=>{n(),a(),i(),c=[[`#route`,`The route`],[`#how`,`How it works`],[`#week`,`Sample fortnight`],[`#people`,`Who's coming`],[`#cost`,`Cost`],[`#faq`,`FAQ`]]})))()}export{s as n,l as t};