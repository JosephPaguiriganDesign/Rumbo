import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,i as a,n as o,s}from"./blocks-B22--VfG.js";import{a as c,i as l,n as u,r as d,t as f}from"./FolderTabs.stories-BFit80Pn.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:u}),`
`,(0,h.jsx)(t.h1,{id:`segmented-folder-tabs`,children:`Segmented folder tabs`}),`
`,(0,h.jsx)(t.p,{children:`A pair (or trio) of manila-folder tabs that switch panels. The selected tab lifts, turns yellow, and fuses with its panel.`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Extracted from the site:`}),` `,(0,h.jsx)(t.code,{children:`.folder-tabs`}),`, `,(0,h.jsx)(t.code,{children:`.ftab`}),`, `,(0,h.jsx)(t.code,{children:`.leg[role=tabpanel]`}),`; `,(0,h.jsx)(t.code,{children:`selectTab()`}),` in app.js.`]}),`
`,(0,h.jsx)(o,{of:f}),`
`,(0,h.jsx)(a,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`variants-and-states`,children:`Variants and states`}),`
`,(0,h.jsx)(t.h3,{id:`second-selected`,children:`Second Selected`}),`
`,(0,h.jsx)(o,{of:d}),`
`,(0,h.jsx)(t.h3,{id:`three-tabs`,children:`Three Tabs`}),`
`,(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(t.h2,{id:`props--variants`,children:`Props / variants`}),`
`,(0,h.jsxs)(t.p,{children:[`| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| tabs | {n,t,h,p}[] | 2 legs | n = mono kicker, t = tab title, h/p = panel heading and copy. |
| selected | number | 0 | Selected index. |
| label | string | Choose a leg… | `,(0,h.jsx)(t.code,{children:`aria-label`}),` of the tablist. |`]}),`
`,(0,h.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Keep tab titles short (2–3 words) with a mono sub-label.`}),`
`,(0,h.jsx)(t.li,{children:`Use for parallel views of the same thing (two legs of a trip).`}),`
`,(0,h.jsxs)(t.li,{children:[`Give every panel `,(0,h.jsx)(t.code,{children:`tabindex="0"`}),` when it has no focusable child at the start.`]}),`
`]}),`
`,(0,h.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Do not use tabs to hide required form steps.`}),`
`,(0,h.jsx)(t.li,{children:`Do not use more than 4 tabs on mobile.`}),`
`,(0,h.jsx)(t.li,{children:`Do not navigate to a new URL from a tab: use links.`}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Pattern: WAI-ARIA Tabs (automatic activation).`}),`
`,(0,h.jsx)(t.li,{children:`Roving tabindex: only the selected tab is in the tab order.`}),`
`,(0,h.jsx)(t.li,{children:`Keys: ← → ↑ ↓ move and select, Home/End jump.`}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`aria-selected`}),`, `,(0,h.jsx)(t.code,{children:`aria-controls`}),`, panel `,(0,h.jsx)(t.code,{children:`aria-labelledby`}),`, `,(0,h.jsx)(t.code,{children:`hidden`}),` on inactive panels.`]}),`
`,(0,h.jsx)(t.li,{children:`Selected vs unselected is shown by fill + lift + scale, not colour alone. Contrast on-sun-container/sun-container 11.0:1 (light), 7.1:1 (dark).`}),`
`,(0,h.jsxs)(t.li,{children:[`Panel entrance animation (`,(0,h.jsx)(t.code,{children:`legIn`}),`) is disabled under reduced motion.`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),i(),c()})))()}g();export{m as default};