import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,i as a,n as o,s}from"./blocks-B22--VfG.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./BoardingPass.stories-B7KEgKfJ.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:p}),`
`,(0,g.jsx)(t.h1,{id:`boarding-pass-ticket`,children:`Boarding-pass ticket`}),`
`,(0,g.jsx)(t.p,{children:`Trip summary as a boarding pass: route codes in Fraunces, dates in mono, a barcode stub, and punched semicircles top and bottom.`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Extracted from the site:`}),` `,(0,g.jsx)(t.code,{children:`.pass`}),`, `,(0,g.jsx)(t.code,{children:`.pass__main`}),`, `,(0,g.jsx)(t.code,{children:`.pass__stub`}),`, `,(0,g.jsx)(t.code,{children:`.pass__code`}),`.`]}),`
`,(0,g.jsx)(o,{of:u}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(t.h2,{id:`variants-and-states`,children:`Variants and states`}),`
`,(0,g.jsx)(t.h3,{id:`flat`,children:`Flat`}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(t.h3,{id:`large`,children:`Large`}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(t.h3,{id:`legs`,children:`Legs`}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(t.h2,{id:`props--variants`,children:`Props / variants`}),`
`,(0,g.jsx)(t.p,{children:`| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| kicker / from / to / dates / stub | string | LIS → AGP | Content. |
| tilt | boolean | true | −2.5° like the site. |
| big | boolean | false | Larger type, for stand-alone use. |`}),`
`,(0,g.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,g.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`Keep to one route and one date range.`}),`
`,(0,g.jsx)(t.li,{children:`Use real airport codes only when the flight is real: mark samples.`}),`
`,(0,g.jsx)(t.li,{children:`Use the stub for one short fact (“14 days”).`}),`
`]}),`
`,(0,g.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`Do not make the barcode scannable or imply a real ticket.`}),`
`,(0,g.jsx)(t.li,{children:`Do not put a button in it.`}),`
`,(0,g.jsx)(t.li,{children:`Do not use it for more than one trip per row.`}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:`role="group"`}),` with `,(0,g.jsx)(t.code,{children:`aria-label`}),`; text is real text so it is read in order: kicker, LIS, AGP, dates.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Barcode stub is `,(0,g.jsx)(t.code,{children:`aria-hidden`}),` and repeated as text (“14 days”) only if it matters (site marks it decorative).`]}),`
`,(0,g.jsx)(t.li,{children:`Mask notches are decorative, and the outline uses a 2px ink border.`}),`
`,(0,g.jsx)(t.li,{children:`Contrast: on-sun-container/sun-container 11.0:1; tertiary kicker on sun-container measured on the Accessibility page (mono 11px text: keep ≥4.5:1).`}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};