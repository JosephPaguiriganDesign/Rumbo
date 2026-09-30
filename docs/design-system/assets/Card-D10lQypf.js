import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,i as a,n as o,s}from"./blocks-C4z-K45U.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./Card.stories-DKulVtgE.js";function _(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{of:g}),`
`,(0,y.jsx)(t.h1,{id:`card-paper--receipt`,children:`Card (paper / receipt)`}),`
`,(0,y.jsx)(t.p,{children:`Two card families: the paper card (ink border, offset shadow, optional tape and tilt) and the receipt, a printed object that always stays paper-coloured.`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Extracted from the site:`}),` `,(0,y.jsx)(t.code,{children:`.receipt`}),`, `,(0,y.jsx)(t.code,{children:`.ledger`}),`, `,(0,y.jsx)(t.code,{children:`.leg`}),`, `,(0,y.jsx)(t.code,{children:`.form`}),` in styles.css; `,(0,y.jsx)(t.code,{children:`.card`}),` variants are DS additions.`]}),`
`,(0,y.jsx)(o,{of:f}),`
`,(0,y.jsx)(a,{of:f}),`
`,(0,y.jsx)(t.h2,{id:`variants-and-states`,children:`Variants and states`}),`
`,(0,y.jsx)(t.h3,{id:`variants`,children:`Variants`}),`
`,(0,y.jsx)(o,{of:h}),`
`,(0,y.jsx)(t.h3,{id:`with-photo-and-tape`,children:`With Photo And Tape`}),`
`,(0,y.jsx)(o,{of:l}),`
`,(0,y.jsx)(t.h3,{id:`interactive`,children:`Interactive`}),`
`,(0,y.jsx)(o,{of:m}),`
`,(0,y.jsx)(t.h3,{id:`interactive-states`,children:`Interactive States`}),`
`,(0,y.jsx)(o,{of:u}),`
`,(0,y.jsx)(t.h3,{id:`receipt`,children:`Receipt`}),`
`,(0,y.jsx)(o,{of:c}),`
`,(0,y.jsx)(t.h3,{id:`receipt-on-paper`,children:`Receipt On Paper`}),`
`,(0,y.jsx)(o,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`props--variants`,children:`Props / variants`}),`
`,(0,y.jsxs)(t.p,{children:[`| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| variant | paper | sun | tonal | flat | paper | Surface treatment. |
| kicker / title / body | string | – | Mono kicker, Fraunces title, body. |
| tape | boolean | false | Clay tape strip on top-left. |
| tilt | boolean | false | −0.7° rotate. Max one tilted card per row. |
| interactive | boolean | false | Whole card is one link (stretched `,(0,y.jsx)(t.code,{children:`::after`}),`). |
| media | boolean | false | Duotone photo across the top. |`]}),`
`,(0,y.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,y.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`Use the receipt for anything with a price or a ledger.`}),`
`,(0,y.jsxs)(t.li,{children:[`Keep receipt colours pinned to paper/ink (`,(0,y.jsx)(t.code,{children:`--rumbo-receipt-*`}),`): it is paper in both themes.`]}),`
`,(0,y.jsx)(t.li,{children:`One primary action per card.`}),`
`]}),`
`,(0,y.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsx)(t.li,{children:`Do not nest cards.`}),`
`,(0,y.jsx)(t.li,{children:`Do not tilt more than one card in a row.`}),`
`,(0,y.jsx)(t.li,{children:`Do not put a button inside an interactive card: it is already a link.`}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`Cards are `,(0,y.jsx)(t.code,{children:`<article>`}),` with a heading (h3 by default; match your outline).`]}),`
`,(0,y.jsxs)(t.li,{children:[`Interactive card: the heading contains a real `,(0,y.jsx)(t.code,{children:`<a>`}),`; its `,(0,y.jsx)(t.code,{children:`::after`}),` stretches the hit area; `,(0,y.jsx)(t.code,{children:`:focus-within`}),` draws the ring around the card.`]}),`
`,(0,y.jsxs)(t.li,{children:[`Receipt has an `,(0,y.jsx)(t.code,{children:`aria-label`}),`; price is real text (not an image).`]}),`
`,(0,y.jsx)(t.li,{children:`Ledger tick/cross icons are CSS backgrounds, so the meaning comes from the “Included / Not included” headings.`}),`
`,(0,y.jsx)(t.li,{children:`Contrast: receipt-ink on receipt-paper 15.5:1, receipt-muted 7.4:1, accent 5.9:1.`}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=t(),r(),i(),d()})))()}b();export{v as default};