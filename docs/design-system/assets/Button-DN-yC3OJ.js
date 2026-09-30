import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,i as a,n as o,s}from"./blocks-C4z-K45U.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./Button.stories-Dmq1o4Cb.js";function _(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{of:f}),`
`,(0,y.jsx)(t.h1,{id:`button`,children:`Button`}),`
`,(0,y.jsx)(t.p,{children:`Cut-corner paper label with a hard ink offset shadow. It is the only thing on the page that asks the reader to do something, so there is one filled button per view.`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Extracted from the site:`}),` `,(0,y.jsx)(t.code,{children:`.btn`}),`, `,(0,y.jsx)(t.code,{children:`.btn--filled`}),`, `,(0,y.jsx)(t.code,{children:`.btn--tonal`}),`, `,(0,y.jsx)(t.code,{children:`.btn--text`}),`, `,(0,y.jsx)(t.code,{children:`.btn--lg`}),`, `,(0,y.jsx)(t.code,{children:`.btn--block`}),` in styles.css; `,(0,y.jsx)(t.code,{children:`outlined`}),`, `,(0,y.jsx)(t.code,{children:`accent`}),`, `,(0,y.jsx)(t.code,{children:`sm`}),`, `,(0,y.jsx)(t.code,{children:`icon`}),`, disabled are DS additions.`]}),`
`,(0,y.jsx)(o,{of:m}),`
`,(0,y.jsx)(a,{of:m}),`
`,(0,y.jsx)(t.h2,{id:`variants-and-states`,children:`Variants and states`}),`
`,(0,y.jsx)(t.h3,{id:`variants`,children:`Variants`}),`
`,(0,y.jsx)(o,{of:h}),`
`,(0,y.jsx)(t.h3,{id:`sizes`,children:`Sizes`}),`
`,(0,y.jsx)(o,{of:c}),`
`,(0,y.jsx)(t.h3,{id:`with-icon`,children:`With Icon`}),`
`,(0,y.jsx)(o,{of:l}),`
`,(0,y.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,y.jsx)(o,{of:p}),`
`,(0,y.jsx)(t.h3,{id:`block`,children:`Block`}),`
`,(0,y.jsx)(o,{of:g}),`
`,(0,y.jsx)(t.h3,{id:`on-colour`,children:`On Colour`}),`
`,(0,y.jsx)(o,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`props--variants`,children:`Props / variants`}),`
`,(0,y.jsxs)(t.p,{children:[`| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| label | string | "Get on the list" | Visible text. Verb first, specific. |
| variant | filled | tonal | outlined | accent | text | filled | filled = cobalt (primary action), tonal = sun yellow (secondary/bar CTA), outlined = ink outline, accent = clay, text = wavy underline |
| size | sm | md | lg | md | 40 / 48 / 56 dp tall. `,(0,y.jsx)(t.code,{children:`sm`}),` keeps a 48dp hit area via a pseudo-element. |
| icon | boolean | false | Trailing arrow (decorative). |
| iconOnly | boolean | false | Square 48/56 button; `,(0,y.jsx)(t.strong,{children:`requires`}),` `,(0,y.jsx)(t.code,{children:`ariaLabel`}),`. |
| disabled | boolean | false | Native `,(0,y.jsx)(t.code,{children:`disabled`}),` on `,(0,y.jsx)(t.code,{children:`<button>`}),`; on links use `,(0,y.jsx)(t.code,{children:`aria-disabled="true"`}),` and remove `,(0,y.jsx)(t.code,{children:`href`}),`. |
| block | boolean | false | Full width (drawer, form submit). |
| href | string | – | Renders `,(0,y.jsx)(t.code,{children:`<a class="btn">`}),` when navigation, `,(0,y.jsx)(t.code,{children:`<button>`}),` when action. |`]}),`
`,(0,y.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,y.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`Use `,(0,y.jsx)(t.code,{children:`<a>`}),` for navigation (goes somewhere), `,(0,y.jsx)(t.code,{children:`<button>`}),` for actions (does something).`]}),`
`,(0,y.jsx)(t.li,{children:`Keep labels to 2–4 words: “Get on the list”, “Ask about the whole trip”.`}),`
`,(0,y.jsx)(t.li,{children:`Pair one filled with at most one tonal or text button.`}),`
`,(0,y.jsx)(t.li,{children:`On cobalt panels use tonal (yellow) so the ink border and shadow still read.`}),`
`]}),`
`,(0,y.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`Do not put a text button on cobalt: its ink label measures 1.7:1.`}),`
`,(0,y.jsx)(t.li,{children:`Do not stack two filled buttons side by side.`}),`
`,(0,y.jsx)(t.li,{children:`Do not use “Click here”, “Submit”, or “Learn more”.`}),`
`,(0,y.jsx)(t.li,{children:`Do not rely on the shadow alone to show pressed: the button also moves 2px.`}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`Native elements: `,(0,y.jsx)(t.code,{children:`<button>`}),` fires on Enter and Space, `,(0,y.jsx)(t.code,{children:`<a>`}),` on Enter.`]}),`
`,(0,y.jsxs)(t.li,{children:[`Focus: 3px ring, 3px offset (`,(0,y.jsx)(t.code,{children:`--md-sys-color-primary`}),`, sun in dark), never removed. The state layer (12% overlay) is an extra cue, not the only one.`]}),`
`,(0,y.jsxs)(t.li,{children:[`Target size: 48dp minimum (40dp `,(0,y.jsx)(t.code,{children:`sm`}),` gets a 4px hit-area extension top and bottom). WCAG 2.2 AA asks for 24px.`]}),`
`,(0,y.jsx)(t.li,{children:`Contrast (measured): filled 9.0:1, tonal 10.3:1, accent 6.2:1 (light). See Accessibility page.`}),`
`,(0,y.jsxs)(t.li,{children:[`Icon-only buttons need `,(0,y.jsx)(t.code,{children:`aria-label`}),`. The arrow SVG is `,(0,y.jsx)(t.code,{children:`aria-hidden`}),`.`]}),`
`,(0,y.jsxs)(t.li,{children:[`Disabled is exempt from contrast rules but keeps a dashed-free 38% ink label, no shadow, `,(0,y.jsx)(t.code,{children:`cursor:not-allowed`}),`. Prefer explaining why (helper text) over disabling.`]}),`
`,(0,y.jsx)(t.li,{children:`Reduced motion: hover lift and press travel drop to 0.01ms.`}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),i(),d()})))()}b();export{v as default};