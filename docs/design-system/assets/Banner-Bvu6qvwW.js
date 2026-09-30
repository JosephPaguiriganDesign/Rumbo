import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,i as a,n as o,s}from"./blocks-C4z-K45U.js";import{a as c,i as l,n as u,r as d,t as f}from"./Banner.stories-CrTZOSDS.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{of:f}),`
`,(0,h.jsx)(t.h1,{id:`banner--notice`,children:`Banner / notice`}),`
`,(0,h.jsx)(t.p,{children:`A dashed, cut-corner note. Five tones; the clay “note” is the site default for “preview only” messages.`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`Extracted from the site:`}),` `,(0,h.jsx)(t.code,{children:`.banner`}),` in styles.css; tones are DS additions.`]}),`
`,(0,h.jsx)(o,{of:u}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`variants-and-states`,children:`Variants and states`}),`
`,(0,h.jsx)(t.h3,{id:`tones`,children:`Tones`}),`
`,(0,h.jsx)(o,{of:l}),`
`,(0,h.jsx)(t.h3,{id:`dismissible`,children:`Dismissible`}),`
`,(0,h.jsx)(o,{of:d}),`
`,(0,h.jsx)(t.h2,{id:`props--variants`,children:`Props / variants`}),`
`,(0,h.jsx)(t.p,{children:`| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| tone | note | info | warn | error | success | note |  |
| title | string | – | Bold lead-in. |
| text | string | – |  |
| role | note | status | alert | by tone | error → alert, note → note, others → status. |
| dismissible | boolean | false | Adds a 48dp close button. |`}),`
`,(0,h.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,h.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Say what and what next: “Email and age are highlighted below.”`}),`
`,(0,h.jsxs)(t.li,{children:[`Use `,(0,h.jsx)(t.code,{children:`alert`}),` only for errors that need attention right now.`]}),`
`,(0,h.jsx)(t.li,{children:`Keep to two lines.`}),`
`]}),`
`,(0,h.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`Do not stack banners.`}),`
`,(0,h.jsxs)(t.li,{children:[`Do not use `,(0,h.jsx)(t.code,{children:`alert`}),` for static notes (it interrupts screen readers).`]}),`
`,(0,h.jsx)(t.li,{children:`Do not use colour alone: each tone has its own icon and a title.`}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`Roles: `,(0,h.jsx)(t.code,{children:`note`}),` (static), `,(0,h.jsx)(t.code,{children:`status`}),` (polite live region), `,(0,h.jsx)(t.code,{children:`alert`}),` (assertive).`]}),`
`,(0,h.jsx)(t.li,{children:`Icon is decorative, the tone is carried in the title/text.`}),`
`,(0,h.jsx)(t.li,{children:`Contrast: note 12.0:1, info 12.6:1, warn 11.0:1, error 13.3:1, success 11.3:1 (light).`}),`
`,(0,h.jsxs)(t.li,{children:[`Close button has `,(0,h.jsx)(t.code,{children:`aria-label`}),`, 48×48.`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),r(),i(),c()})))()}g();export{m as default};