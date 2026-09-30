import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,s as a}from"./blocks-B22--VfG.js";import{i as o,r as s}from"./tokens-B-7ngRye.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{title:`Foundations/Spacing`}),`
`,(0,u.jsx)(t.h1,{id:`spacing`,children:`Spacing`}),`
`,(0,u.jsx)(t.p,{children:`A 4dp base with an 8dp rhythm on the even steps. Layout numbers are the site's, unchanged.`}),`
`,(0,u.jsx)(t.p,{children:`| Token | CSS var | Value |
| --- | --- | --- |
| 0 | --rumbo-space-0 | 0px |
| 1 | --rumbo-space-1 | 4px |
| 2 | --rumbo-space-2 | 8px |
| 3 | --rumbo-space-3 | 12px |
| 4 | --rumbo-space-4 | 16px |
| 5 | --rumbo-space-5 | 20px |
| 6 | --rumbo-space-6 | 24px |
| 8 | --rumbo-space-8 | 32px |
| 10 | --rumbo-space-10 | 40px |
| 12 | --rumbo-space-12 | 48px |
| 14 | --rumbo-space-14 | 56px |
| 16 | --rumbo-space-16 | 64px |
| 20 | --rumbo-space-20 | 80px |
| 24 | --rumbo-space-24 | 96px |`}),`
`,(0,u.jsx)(t.h2,{id:`layout`,children:`Layout`}),`
`,(0,u.jsxs)(t.p,{children:[`| Token | CSS var | Value | Note |
| --- | --- | --- | --- |
| bar-h | `,(0,u.jsx)(t.code,{children:`--bar-h`}),` | 64px (72px ≥ 900px) | App bar |
| gutter | `,(0,u.jsx)(t.code,{children:`--gutter`}),` | clamp(18px, 5vw, 48px) | Page side padding |
| max | `,(0,u.jsx)(t.code,{children:`--max`}),` | 1180px | Content width |
| touch-target | `,(0,u.jsx)(t.code,{children:`--rumbo-touch-target`}),` | 48px | Every interactive element |
| section padding | — | clamp(72px, 11vw, 132px) | Vertical, per section |`]}),`
`,(0,u.jsx)(t.h2,{id:`breakpoints`,children:`Breakpoints`}),`
`,(0,u.jsx)(t.p,{children:`| Token | Value | What changes |
| --- | --- | --- |
| sm | 640px | Choice chips go to 3 columns, receipt 2 columns |
| md | 900px | Top nav replaces Menu; bar is 72dp; hero and route go two-column |
| lg | 1100px | FAQ two-column; stepper indents |
| frame-mobile | 390px | Figma / screenshot frame |
| frame-desktop | 1280px | Figma / screenshot frame |`}),`
`,(0,u.jsx)(t.p,{children:`CSS media queries cannot read custom properties, so breakpoints exist in tokens for JS, Figma and docs; keep the literals in CSS.`}),`
`,(0,u.jsx)(`div`,{className:`rumbo`,style:{padding:24,marginTop:16},children:Object.entries(o.space).map(([e,t])=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,marginBottom:6},children:[(0,u.jsxs)(`span`,{className:`mono`,style:{width:70},children:[`space/`,e]}),(0,u.jsx)(`span`,{style:{display:`block`,height:16,width:t,background:`var(--md-sys-color-primary)`}}),(0,u.jsx)(`span`,{className:`mono`,children:t})]},e))})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),i(),s()})))()}d();export{l as default};