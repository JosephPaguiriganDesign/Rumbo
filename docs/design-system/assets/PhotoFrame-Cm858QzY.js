import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,i as a,n as o,s}from"./blocks-B22--VfG.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./PhotoFrame.stories-BhaArRx5.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{of:f}),`
`,(0,_.jsx)(t.h1,{id:`tape--photo-frame`,children:`Tape & photo frame`}),`
`,(0,_.jsx)(t.p,{children:`A paper print with a mono caption, held by a torn strip of tape. Photos get a duotone (paper highlights, one ink in the shadows) and a 5px halftone.`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Extracted from the site:`}),` `,(0,_.jsx)(t.code,{children:`.pic`}),`, `,(0,_.jsx)(t.code,{children:`.pic--tall/wide`}),`, `,(0,_.jsx)(t.code,{children:`.duo`}),`, `,(0,_.jsx)(t.code,{children:`.duo--cobalt/clay`}),`, `,(0,_.jsx)(t.code,{children:`.tape`}),`.`]}),`
`,(0,_.jsx)(o,{of:m}),`
`,(0,_.jsx)(a,{of:m}),`
`,(0,_.jsx)(t.h2,{id:`variants-and-states`,children:`Variants and states`}),`
`,(0,_.jsx)(t.h3,{id:`duotones`,children:`Duotones`}),`
`,(0,_.jsx)(o,{of:u}),`
`,(0,_.jsx)(t.h3,{id:`shapes`,children:`Shapes`}),`
`,(0,_.jsx)(o,{of:l}),`
`,(0,_.jsx)(t.h3,{id:`tape-only`,children:`Tape Only`}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(t.h3,{id:`with-credit`,children:`With Credit`}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`props--variants`,children:`Props / variants`}),`
`,(0,_.jsxs)(t.p,{children:[`| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| photo | bridge | belem | estoril | alcazaba | muelle | bridge | Site photos (read from assets/photos/web). |
| duo | cobalt | clay | ink | sun | plain | cobalt | Duotone ink. `,(0,_.jsx)(t.code,{children:`plain`}),` = no treatment. |
| shape | tall | wide | square | wide | 3:4, 4:3, 1:1 |
| caption / alt | string | from photo | Caption is visible; alt describes the picture. |
| credit | boolean | false | Show the author on the print. |
| tilt / halftone / showTape | boolean | true |  |
| tapeKind / tapePos | yellow | clay / a | b | corner | yellow / a |  |`]}),`
`,(0,_.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Write alt text that says what is in the frame, not “photo of”.`}),`
`,(0,_.jsx)(t.li,{children:`Credit every photo (CC BY-SA needs it) in the footer credits list.`}),`
`,(0,_.jsx)(t.li,{children:`Use CSS filters, not baked-in duotones: the original file stays clean.`}),`
`]}),`
`,(0,_.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Do not use photos where kids are identifiable without consent.`}),`
`,(0,_.jsx)(t.li,{children:`Do not use club logos or stadium shots that imply a partnership.`}),`
`,(0,_.jsx)(t.li,{children:`Do not put essential text in a photo.`}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`<figure>`}),` with `,(0,_.jsx)(t.code,{children:`<figcaption>`}),`; `,(0,_.jsx)(t.code,{children:`alt`}),` on the image is unique (caption is not a substitute).`]}),`
`,(0,_.jsxs)(t.li,{children:[`Tape is `,(0,_.jsx)(t.code,{children:`aria-hidden`}),`.`]}),`
`,(0,_.jsx)(t.li,{children:`Caption contrast on-surface-variant/surface-container-lowest 7.4:1; minimum 11px.`}),`
`,(0,_.jsxs)(t.li,{children:[`Duotone uses `,(0,_.jsx)(t.code,{children:`mix-blend-mode`}),`; forced-colors users still get the raw `,(0,_.jsx)(t.code,{children:`<img>`}),` and border.`]}),`
`,(0,_.jsx)(t.li,{children:`Photos never carry text or information that the page does not repeat.`}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),i(),p()})))()}v();export{g as default};