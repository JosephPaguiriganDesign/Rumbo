import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,i as a,n as o,s}from"./blocks-C4z-K45U.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./Accordion.stories-CvNF-mDX.js";function g(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{of:h}),`
`,(0,v.jsx)(t.h1,{id:`accordion`,children:`Accordion`}),`
`,(0,v.jsx)(t.p,{children:`FAQ rows separated by heavy ink rules. The plus icon is a hand-drawn wobbly circle that turns into an × and fills yellow when open.`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Extracted from the site:`}),` `,(0,v.jsx)(t.code,{children:`.accordion`}),`, `,(0,v.jsx)(t.code,{children:`.acc`}),`, `,(0,v.jsx)(t.code,{children:`.acc__btn`}),`, `,(0,v.jsx)(t.code,{children:`.acc__icon`}),`, `,(0,v.jsx)(t.code,{children:`.acc__panel`}),` (grid-rows 0fr→1fr).`]}),`
`,(0,v.jsx)(o,{of:c}),`
`,(0,v.jsx)(a,{of:c}),`
`,(0,v.jsx)(t.h2,{id:`variants-and-states`,children:`Variants and states`}),`
`,(0,v.jsx)(t.h3,{id:`all-closed`,children:`All Closed`}),`
`,(0,v.jsx)(o,{of:d}),`
`,(0,v.jsx)(t.h3,{id:`all-open`,children:`All Open`}),`
`,(0,v.jsx)(o,{of:p}),`
`,(0,v.jsx)(t.h3,{id:`single-open`,children:`Single Open`}),`
`,(0,v.jsx)(o,{of:f}),`
`,(0,v.jsx)(t.h3,{id:`card-variant`,children:`Card Variant`}),`
`,(0,v.jsx)(o,{of:u}),`
`,(0,v.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,v.jsx)(o,{of:m}),`
`,(0,v.jsx)(t.h2,{id:`props--variants`,children:`Props / variants`}),`
`,(0,v.jsxs)(t.p,{children:[`| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| items | [question, answer][] | 3 FAQs | Answer may contain `,(0,v.jsx)(t.code,{children:`<strong>`}),`. |
| open | number[] | [0] | Initially open rows. |
| single | boolean | false | Only one open at a time (`,(0,v.jsx)(t.code,{children:`data-single`}),`). |
| variant | rule | card | rule |  |
| headingLevel | 2 | 3 | 4 | 3 | Match the page outline. |
| disabledIdx | number | -1 | Disabled row. |`]}),`
`,(0,v.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,v.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Write the question as the reader would say it.`}),`
`,(0,v.jsx)(t.li,{children:`Open the most important answer by default.`}),`
`,(0,v.jsx)(t.li,{children:`Answer first, then explain: “No. Rumbo is a training and playing trip…”`}),`
`]}),`
`,(0,v.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Do not hide the only copy of legal or safety information in an accordion.`}),`
`,(0,v.jsx)(t.li,{children:`Do not put interactive controls in the header button.`}),`
`,(0,v.jsx)(t.li,{children:`Do not nest accordions.`}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`Pattern: WAI-ARIA Accordion. Heading > button with `,(0,v.jsx)(t.code,{children:`aria-expanded`}),` and `,(0,v.jsx)(t.code,{children:`aria-controls`}),`; panel `,(0,v.jsx)(t.code,{children:`role="region"`}),` with `,(0,v.jsx)(t.code,{children:`aria-labelledby`}),`.`]}),`
`,(0,v.jsx)(t.li,{children:`Keys: Enter/Space toggle; ↑ ↓ Home End move focus between headers.`}),`
`,(0,v.jsxs)(t.li,{children:[`Closed panels use `,(0,v.jsx)(t.code,{children:`visibility:hidden`}),` after the collapse transition, so their contents are not tabbable.`]}),`
`,(0,v.jsx)(t.li,{children:`Icon turns 135° and gains fill, not colour alone.`}),`
`,(0,v.jsx)(t.li,{children:`Row height ≥64dp. Question 1.125–1.4rem Fraunces 650.`}),`
`,(0,v.jsx)(t.li,{children:`Reduced motion: no height animation.`}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),i(),l()})))()}y();export{_ as default};