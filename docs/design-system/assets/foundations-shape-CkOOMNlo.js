import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,s as a}from"./blocks-C4z-K45U.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`Foundations/Shape`}),`
`,(0,c.jsx)(t.h1,{id:`shape`,children:`Shape`}),`
`,(0,c.jsxs)(t.p,{children:[`Stock M3 shape is round and symmetrical. Rumbo is `,(0,c.jsx)(t.strong,{children:`cut like paper`}),`: opposite corners are large and small, so surfaces look guillotined by hand.`]}),`
`,(0,c.jsx)(t.p,{children:`| Token | CSS var | Value | Used by |
| --- | --- | --- | --- |
| corner/extra-small | --md-sys-shape-corner-extra-small | 3px |  |
| corner/small | --md-sys-shape-corner-small | 6px |  |
| corner/medium | --md-sys-shape-corner-medium | 10px |  |
| corner/large | --md-sys-shape-corner-large | 18px |  |
| corner/full | --md-sys-shape-corner-full | 9999px |  |
| cut/primary | --shape-cut | 22px 5px 22px 5px | Filled button, FAB. |
| cut/alt | --shape-cut-alt | 5px 20px 5px 20px | Tonal button, menu button. |
| cut/ticket | --rumbo-shape-ticket | 3px 16px 3px 16px | Ticket-punch chip. |
| cut/banner | --rumbo-shape-banner | 3px 12px 3px 12px | Notice banner. |
| cut/day | --rumbo-shape-day | 2px 14px 2px 14px | Timeline day card. |
| cut/tab | --rumbo-shape-tab | 16px 16px 0 0 | Folder tab. |
| cut/scribble | --rumbo-shape-scribble | 50% 44% 52% 48% | Hand-drawn round icon holder. |
| border/hairline | --rumbo-border-hairline | 1px |  |
| border/thin | --rumbo-border-thin | 1.5px |  |
| border/regular | --rumbo-border-regular | 2px |  |
| border/thick | --rumbo-border-thick | 2.5px |  |
| border/focus | --rumbo-border-focus | 3px |  |`}),`
`,(0,c.jsx)(t.h2,{id:`cut-corner-rule`,children:`Cut-corner rule`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`border-radius: TL TR BR BL`}),`. Big corners on one diagonal, small on the other. Alternate the diagonal between neighbours: filled button `,(0,c.jsx)(t.code,{children:`22 5 22 5`}),`, tonal button `,(0,c.jsx)(t.code,{children:`5 20 5 20`}),`. Never round all four corners the same.`]}),`
`,(0,c.jsx)(t.h2,{id:`borders`,children:`Borders`}),`
`,(0,c.jsx)(t.p,{children:`Ink borders are 2px (cards, buttons, tabs), 1.5px for quiet rules (dashed lines, day cards), 2.5px for field underlines, 3px for focus.`}),`
`,(0,c.jsx)(t.h2,{id:`tilt`,children:`Tilt`}),`
`,(0,c.jsx)(t.p,{children:`Objects pinned to the board rotate: hero pieces ±2–5°, cards ±0.35–1.4°. Never rotate text blocks over 1.5° or anything with form controls (the form card is +0.5° at most).`}),`
`,(0,c.jsx)(`div`,{className:`rumbo`,style:{padding:24,marginTop:16,display:`flex`,flexWrap:`wrap`,gap:24},children:[[`cut/primary`,`var(--shape-cut)`],[`cut/alt`,`var(--shape-cut-alt)`],[`cut/ticket`,`var(--rumbo-shape-ticket)`],[`cut/banner`,`var(--rumbo-shape-banner)`],[`cut/day`,`var(--rumbo-shape-day)`],[`cut/tab`,`var(--rumbo-shape-tab)`],[`cut/scribble`,`var(--rumbo-shape-scribble)`]].map(([e,t])=>(0,c.jsx)(`div`,{style:{width:130,height:80,border:`2px solid var(--md-sys-color-on-surface)`,borderRadius:t,background:`var(--md-sys-color-sun-container)`,display:`grid`,placeItems:`center`},className:`mono`,children:e},e))})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),i()})))()}l();export{s as default};