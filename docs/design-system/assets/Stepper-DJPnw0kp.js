import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,i as a,n as o,s}from"./blocks-C4z-K45U.js";import{a as c,i as l,n as u,r as d,t as f}from"./Stepper.stories-CRnQzOgp.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:l}),`
`,(0,h.jsx)(t.h1,{id:`stepper`,children:`Stepper`}),`
`,(0,h.jsx)(t.p,{children:`The “how you get on the plane” play: numbered wobbly rings in a dashed ledger, on cobalt or on paper.`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Extracted from the site:`}),` `,(0,h.jsx)(t.code,{children:`.play`}),`, `,(0,h.jsx)(t.code,{children:`.play__step`}),`, `,(0,h.jsx)(t.code,{children:`.play__n`}),`, `,(0,h.jsx)(t.code,{children:`.play__arrow`}),`.`]}),`
`,(0,h.jsx)(o,{of:f}),`
`,(0,h.jsx)(a,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`variants-and-states`,children:`Variants and states`}),`
`,(0,h.jsx)(t.h3,{id:`on-paper`,children:`On Paper`}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsx)(t.h3,{id:`progress`,children:`Progress`}),`
`,(0,h.jsx)(o,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`props--variants`,children:`Props / variants`}),`
`,(0,h.jsxs)(t.p,{children:[`| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| items | [title, text][] | 4 steps |  |
| tone | primary | paper | primary | primary = on a cobalt panel; paper = on paper. |
| current | number | 0 | 1-based `,(0,h.jsx)(t.code,{children:`aria-current="step"`}),`. |
| done | number | 0 | Steps completed (tick, dashed ring, “(done)” for AT). |`]}),`
`,(0,h.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Use an ordered list: order matters.`}),`
`,(0,h.jsx)(t.li,{children:`Start each title with a verb.`}),`
`,(0,h.jsx)(t.li,{children:`Keep to 3–6 steps.`}),`
`]}),`
`,(0,h.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Do not use for tabs or navigation.`}),`
`,(0,h.jsx)(t.li,{children:`Do not skip numbers.`}),`
`,(0,h.jsx)(t.li,{children:`Do not use yellow numerals on paper (1.4:1): use clay.`}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`<ol>`}),` gives the count and position for free; the ring is `,(0,h.jsx)(t.code,{children:`aria-hidden`}),` (so the number is not read twice).`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`aria-current="step"`}),` plus sr-only “(current step)”.`]}),`
`,(0,h.jsx)(t.li,{children:`Step number on cobalt: highlight-on-primary/primary 6.0:1 light / 8.9:1 dark (large text). Body: on-primary-muted 7.4:1 light / 6.5:1 dark (DS token; the site reuses primary-container, 7.4:1 light / 4.9:1 dark).`}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),i(),c()})))()}g();export{m as default};