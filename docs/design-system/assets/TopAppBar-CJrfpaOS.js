import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,i as a,n as o,s}from"./blocks-B22--VfG.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./TopAppBar.stories-BYfma5Sm.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{of:c}),`
`,(0,_.jsx)(t.h1,{id:`top-app-bar`,children:`Top app bar`}),`
`,(0,_.jsx)(t.p,{children:`A strip of paper with the wordmark, six anchor links, one CTA and a dotted route line along the bottom that fills as you read.`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Extracted from the site:`}),` `,(0,_.jsx)(t.code,{children:`.app-bar`}),`, `,(0,_.jsx)(t.code,{children:`.app-bar__inner`}),`, `,(0,_.jsx)(t.code,{children:`.app-bar__route`}),` (`,(0,_.jsx)(t.code,{children:`--progress`}),`), `,(0,_.jsx)(t.code,{children:`.brand`}),`, `,(0,_.jsx)(t.code,{children:`.top-nav__link[aria-current]`}),`, `,(0,_.jsx)(t.code,{children:`.menu-btn`}),`.`]}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(a,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`variants-and-states`,children:`Variants and states`}),`
`,(0,_.jsx)(t.h3,{id:`wide`,children:`Wide`}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.h3,{id:`compact`,children:`Compact`}),`
`,(0,_.jsx)(o,{of:m}),`
`,(0,_.jsx)(t.h3,{id:`scrolled`,children:`Scrolled`}),`
`,(0,_.jsx)(o,{of:l}),`
`,(0,_.jsx)(t.h3,{id:`no-current-link`,children:`No Current Link`}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`props--variants`,children:`Props / variants`}),`
`,(0,_.jsxs)(t.p,{children:[`| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| layout | wide | compact | wide | Wide shows links (site: ≥900px). Compact shows the Menu button; in real pages this is automatic by media query. |
| current | number | 1 | Index of the link that gets `,(0,_.jsx)(t.code,{children:`aria-current="true"`}),` and the wavy clay underline. −1 = none. |
| progress | 0–1 | 0.35 | Route line fill. On the site: scrollY / (document height − viewport). |
| scrolled | boolean | false | Adds the offset shadow (site toggles `,(0,_.jsx)(t.code,{children:`.is-scrolled`}),` after 24px). |
| cta | string | Get on the list |  |`]}),`
`,(0,_.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Keep to ≤6 links; add sections to the drawer, not to the bar.`}),`
`,(0,_.jsxs)(t.li,{children:[`Use scroll-spy for `,(0,_.jsx)(t.code,{children:`aria-current`}),`.`]}),`
`,(0,_.jsxs)(t.li,{children:[`Keep the route line decorative (`,(0,_.jsx)(t.code,{children:`aria-hidden`}),`).`]}),`
`]}),`
`,(0,_.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Do not put the CTA in the nav list: it is a separate button.`}),`
`,(0,_.jsx)(t.li,{children:`Do not use the wavy underline for anything except the current page.`}),`
`,(0,_.jsx)(t.li,{children:`Do not make the bar taller than 72dp.`}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`<header>`}),` with a `,(0,_.jsx)(t.code,{children:`nav`}),` labelled “Primary”; the drawer nav is labelled “Mobile” so the two are distinguishable.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`aria-current="true"`}),` for scroll-spy sections, `,(0,_.jsx)(t.code,{children:`"page"`}),` for real page links.`]}),`
`,(0,_.jsxs)(t.li,{children:[`Menu button: `,(0,_.jsx)(t.code,{children:`aria-expanded`}),`, `,(0,_.jsx)(t.code,{children:`aria-controls`}),`, visible “Menu” text plus icon (the site also sets `,(0,_.jsx)(t.code,{children:`aria-label="Open menu"`}),`; the visible word is in the label so voice-control users can say “Menu”).`]}),`
`,(0,_.jsxs)(t.li,{children:[`Add a “Skip to content” link as the first focusable element (`,(0,_.jsx)(t.code,{children:`.skip`}),`).`]}),`
`,(0,_.jsxs)(t.li,{children:[`Sticky bar: set `,(0,_.jsx)(t.code,{children:`scroll-padding-top`}),` (bar height + 16px) so anchors and focus are never hidden under it (WCAG 2.2 focus-not-obscured, 2.4.11).`]}),`
`,(0,_.jsx)(t.li,{children:`Target size 48dp for every link.`}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),i(),p()})))()}v();export{g as default};