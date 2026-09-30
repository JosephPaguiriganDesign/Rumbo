import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,i as a,n as o,s}from"./blocks-C4z-K45U.js";import{a as c,i as l,n as u,r as d,t as f}from"./Timeline.stories-BkJYC5sC.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:d}),`
`,(0,h.jsx)(t.h1,{id:`timeline-itinerary-day`,children:`Timeline (itinerary day)`}),`
`,(0,h.jsx)(t.p,{children:`One card per day: big Fraunces day number, mono date, title, one-line note. Yellow with an ink border for match days; a clay left edge for travel days.`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Extracted from the site:`}),` `,(0,h.jsx)(t.code,{children:`.days`}),`, `,(0,h.jsx)(t.code,{children:`.day`}),`, `,(0,h.jsx)(t.code,{children:`.day--wk`}),`, `,(0,h.jsx)(t.code,{children:`.day--match`}),`, `,(0,h.jsx)(t.code,{children:`.tag`}),`.`]}),`
`,(0,h.jsx)(o,{of:f}),`
`,(0,h.jsx)(a,{of:f}),`
`,(0,h.jsx)(t.h2,{id:`variants-and-states`,children:`Variants and states`}),`
`,(0,h.jsx)(t.h3,{id:`kinds`,children:`Kinds`}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsx)(t.h3,{id:`two-columns`,children:`Two Columns`}),`
`,(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(t.h2,{id:`props--variants`,children:`Props / variants`}),`
`,(0,h.jsxs)(t.p,{children:[`| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| items | {n,d,t,p,kind}[] | 4 days | kind: (none) | wk | match | fly. |
| label | string | Sample day-by-day plan | `,(0,h.jsx)(t.code,{children:`aria-label`}),` of the list. |
| current | number | -1 | Highlights “today” with a ring and `,(0,h.jsx)(t.code,{children:`aria-current="date"`}),`. |`]}),`
`,(0,h.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Put the date in mono, the action in Fraunces.`}),`
`,(0,h.jsx)(t.li,{children:`Say “hoped for” until a fixture is confirmed.`}),`
`,(0,h.jsx)(t.li,{children:`Tag match days with the words “match day”, not only the colour.`}),`
`]}),`
`,(0,h.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Do not rotate more than ±0.35°: legibility comes first.`}),`
`,(0,h.jsxs)(t.li,{children:[`Do not use the day number as the only label (it is `,(0,h.jsx)(t.code,{children:`aria-hidden`}),`; the date is real text).`]}),`
`,(0,h.jsx)(t.li,{children:`Do not put more than one sentence in the note.`}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`<ol>`}),` with heading per day. The decorative number is `,(0,h.jsx)(t.code,{children:`aria-hidden`}),`; the mono date is real text.`]}),`
`,(0,h.jsx)(t.li,{children:`Match day = yellow fill + ink border + text tag (not colour alone).`}),`
`,(0,h.jsx)(t.li,{children:`Contrast on-sun-container/sun-container 11.0:1; tertiary date on surface-container-lowest 5.9:1.`}),`
`,(0,h.jsx)(t.li,{children:`Tilt is decoration; 0.3° never clips text.`}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),i(),c()})))()}g();export{m as default};