import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,i as a,n as o,s}from"./blocks-B22--VfG.js";import{a as c,i as l,n as u,r as d,t as f}from"./RouteLine.stories-DY7z4UNH.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:d}),`
`,(0,h.jsx)(t.h1,{id:`route-line--progress`,children:`Route line / progress`}),`
`,(0,h.jsx)(t.p,{children:`A dotted route that fills with progress and carries a head pin. On the app bar it tracks scroll; stand-alone it can show trip or form progress.`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Extracted from the site:`}),` `,(0,h.jsx)(t.code,{children:`.app-bar__route`}),` (`,(0,h.jsx)(t.code,{children:`--progress`}),`), the SVG route mask in #route.`]}),`
`,(0,h.jsx)(o,{of:f}),`
`,(0,h.jsx)(a,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`variants-and-states`,children:`Variants and states`}),`
`,(0,h.jsx)(t.h3,{id:`steps`,children:`Steps`}),`
`,(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(t.h3,{id:`in-app-bar`,children:`In App Bar`}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`props--variants`,children:`Props / variants`}),`
`,(0,h.jsxs)(t.p,{children:[`| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| progress | 0–1 | 0.4 | Fill. |
| stops | string[] | Land · Lisbon coast · Málaga coast | Labels under the line. |
| label / now | string | Trip progress | `,(0,h.jsx)(t.code,{children:`aria-label`}),` and a visible “now” sentence. |`]}),`
`,(0,h.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Show a text equivalent of the value (“Day 6 of 14”).`}),`
`,(0,h.jsx)(t.li,{children:`Use it for a journey, not for a loading spinner.`}),`
`,(0,h.jsx)(t.li,{children:`Keep pin colours: clay stops, ink head.`}),`
`]}),`
`,(0,h.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Do not use it as the only progress indication.`}),`
`,(0,h.jsx)(t.li,{children:`Do not animate under reduced motion (the site jumps straight to 100%).`}),`
`,(0,h.jsx)(t.li,{children:`Do not put more than 4 stops.`}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Stand-alone: `,(0,h.jsx)(t.code,{children:`role="progressbar"`}),` with `,(0,h.jsx)(t.code,{children:`aria-valuenow`}),` and `,(0,h.jsx)(t.code,{children:`aria-valuetext`}),` (“Day 6 of 14”).`]}),`
`,(0,h.jsxs)(t.li,{children:[`In the app bar it is `,(0,h.jsx)(t.code,{children:`aria-hidden`}),` (scroll position is already exposed by the browser).`]}),`
`,(0,h.jsxs)(t.li,{children:[`Reduced motion: `,(0,h.jsx)(t.code,{children:`transition:none`}),`; the site draws the map route fully at once.`]}),`
`,(0,h.jsx)(t.li,{children:`Dotted track is decoration; clay on paper 5.4:1 for the dots.`}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),i(),c()})))()}g();export{m as default};