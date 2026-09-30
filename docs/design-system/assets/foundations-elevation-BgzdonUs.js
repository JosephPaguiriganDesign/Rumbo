import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,s as a}from"./blocks-C4z-K45U.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`Foundations/Elevation`}),`
`,(0,c.jsx)(t.h1,{id:`elevation`,children:`Elevation`}),`
`,(0,c.jsxs)(t.p,{children:[`M3 uses tonal surface + soft shadow. Rumbo uses a `,(0,c.jsx)(t.strong,{children:`hard offset ink shadow`}),`: no blur, same angle (down-right), three heights. Things that are physically pinned (photos, passes) use one soft print shadow.`]}),`
`,(0,c.jsxs)(t.p,{children:[`| Token | CSS var | Light | Dark | Used by |
| --- | --- | --- | --- | --- |
| elevation/1 | `,(0,c.jsx)(t.code,{children:`--md-sys-elevation-1`}),` | 2px 2px 0 rgb(34 29 24 / .9) | 2px 2px 0 rgb(0 0 0 / .8) | Tonal button, match day, person card |
| elevation/2 | `,(0,c.jsx)(t.code,{children:`--md-sys-elevation-2`}),` | 3px 3px 0 rgb(34 29 24 / .9) | 3px 3px 0 rgb(0 0 0 / .8) | Filled button, FAB, card |
| elevation/3 | `,(0,c.jsx)(t.code,{children:`--md-sys-elevation-3`}),` | 5px 5px 0 rgb(34 29 24 / .9) | 5px 5px 0 rgb(0 0 0 / .8) | Hover, form card, leg panel, map |
| soft | `,(0,c.jsx)(t.code,{children:`--soft-shadow`}),` | 0 1px 1px .18 · 0 10px 20px −8px .35 | same | Photos, boarding pass, tactics board |
| receipt | `,(0,c.jsx)(t.code,{children:`--rumbo-shadow-receipt`}),` | 0 18px 30px −12px rgb(0 0 0 / .6) | same | Receipt on ink band |`]}),`
`,(0,c.jsx)(t.h2,{id:`behaviour`,children:`Behaviour`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hover`}),` raises a level and moves the element −1/−1 (shadow grows to the right, it looks lifted).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Pressed`}),` moves +2/+2 and drops the shadow to 0 (it looks pushed into the page).`]}),`
`,(0,c.jsx)(t.li,{children:`Offset shadows never blur, so they survive forced-colors and print.`}),`
`,(0,c.jsxs)(t.li,{children:[`Hierarchy is also carried by `,(0,c.jsx)(t.em,{children:`border weight`}),` (2px ink), not by shadow alone.`]}),`
`]}),`
`,(0,c.jsx)(`div`,{className:`rumbo`,style:{padding:32,marginTop:16,display:`flex`,flexWrap:`wrap`,gap:36},children:[[`elevation-1`,`var(--md-sys-elevation-1)`],[`elevation-2`,`var(--md-sys-elevation-2)`],[`elevation-3`,`var(--md-sys-elevation-3)`],[`soft`,`var(--soft-shadow)`]].map(([e,t])=>(0,c.jsx)(`div`,{style:{width:140,height:90,background:`var(--md-sys-color-surface-container-lowest)`,border:`2px solid var(--md-sys-color-on-surface)`,boxShadow:t,display:`grid`,placeItems:`center`},className:`mono`,children:e},e))})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),i()})))()}l();export{s as default};