import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,i as a,n as o,s}from"./blocks-C4z-K45U.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./SectionDivider.stories-VoiBbzZA.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:c}),`
`,(0,g.jsx)(t.h1,{id:`section-divider-torn-edge`,children:`Section divider (torn edge)`}),`
`,(0,g.jsxs)(t.p,{children:[`A hand-torn paper edge painted in the colour of the section below, overlapping the section above by 29px. Six paths from the site (`,(0,g.jsx)(t.code,{children:`torn1…5`}),`, `,(0,g.jsx)(t.code,{children:`wave1`}),`).`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Extracted from the site:`}),` `,(0,g.jsx)(t.code,{children:`.tear`}),` + `,(0,g.jsx)(t.code,{children:`edges.json`}),`.`]}),`
`,(0,g.jsx)(o,{of:u}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(t.h2,{id:`variants-and-states`,children:`Variants and states`}),`
`,(0,g.jsx)(t.h3,{id:`all-edges`,children:`All Edges`}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(t.h3,{id:`on-cobalt`,children:`On Cobalt`}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(t.h3,{id:`on-ink`,children:`On Ink`}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`props--variants`,children:`Props / variants`}),`
`,(0,g.jsx)(t.p,{children:`| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| edge | torn1…torn5 | wave1 | torn1 | Path from _src/edges.json. |
| from / to | colour role | paper → lowest | Preview colours only. |`}),`
`,(0,g.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,g.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`Set `,(0,g.jsx)(t.code,{children:`--sec`}),` on the section to the colour you want the tear painted in (`,(0,g.jsx)(t.code,{children:`fill: var(--sec)`}),`).`]}),`
`,(0,g.jsx)(t.li,{children:`Vary the edge between neighbours so it never looks stamped.`}),`
`,(0,g.jsx)(t.li,{children:`Put the tear as the first child of the section.`}),`
`]}),`
`,(0,g.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`Do not leave a gap: the section above needs no bottom padding hack, the tear overlaps by −29px.`}),`
`,(0,g.jsx)(t.li,{children:`Do not put text in the tear.`}),`
`,(0,g.jsx)(t.li,{children:`Do not use it more than once per screen.`}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`SVG is `,(0,g.jsx)(t.code,{children:`aria-hidden`}),` and `,(0,g.jsx)(t.code,{children:`pointer-events:none`}),`: purely decorative.`]}),`
`,(0,g.jsx)(t.li,{children:`Because the tear paints over 29px of the previous section, keep padding-bottom on that section ≥ 40px so no text is covered.`}),`
`,(0,g.jsx)(t.li,{children:`Check that both sides meet contrast on their own colours.`}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};