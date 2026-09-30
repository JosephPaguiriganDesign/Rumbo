import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,i as a,n as o,s}from"./blocks-B22--VfG.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./Chip.stories-B-gcsOEp.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{of:u}),`
`,(0,_.jsx)(t.h1,{id:`chip-ticket-punch`,children:`Chip (ticket punch)`}),`
`,(0,_.jsx)(t.p,{children:`A choice chip shaped like a ticket with a half-circle punch notch on its left edge. Selecting it fills it cobalt and nudges it right.`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Extracted from the site:`}),` `,(0,_.jsx)(t.code,{children:`.choice`}),`, `,(0,_.jsx)(t.code,{children:`.punch`}),`, `,(0,_.jsx)(t.code,{children:`.punch__body`}),`, `,(0,_.jsx)(t.code,{children:`.punch__t`}),`, `,(0,_.jsx)(t.code,{children:`.punch__s`}),`.`]}),`
`,(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(a,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`variants-and-states`,children:`Variants and states`}),`
`,(0,_.jsx)(t.h3,{id:`group`,children:`Group`}),`
`,(0,_.jsx)(o,{of:l}),`
`,(0,_.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,_.jsx)(o,{of:d}),`
`,(0,_.jsx)(t.h3,{id:`checkbox`,children:`Checkbox`}),`
`,(0,_.jsx)(o,{of:m}),`
`,(0,_.jsx)(t.h3,{id:`group-error`,children:`Group Error`}),`
`,(0,_.jsx)(o,{of:c}),`
`,(0,_.jsx)(t.h2,{id:`props--variants`,children:`Props / variants`}),`
`,(0,_.jsx)(t.p,{children:`| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| title / sub | string | – | Bold label + mono sub-label. |
| type | radio | checkbox | radio | Single or multiple choice. |
| checked | boolean | false |  |
| disabled | boolean | false | Dashed border, 50% opacity. |
| name / value | string | – | Native form fields. |`}),`
`,(0,_.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,_.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`Wrap chips in a `,(0,_.jsx)(t.code,{children:`<fieldset>`}),` with a `,(0,_.jsx)(t.code,{children:`<legend>`}),`.`]}),`
`,(0,_.jsx)(t.li,{children:`Offer a “Not sure yet” option instead of forcing a choice.`}),`
`,(0,_.jsx)(t.li,{children:`Keep titles under ~16 characters.`}),`
`]}),`
`,(0,_.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsx)(t.li,{children:`Do not use chips as buttons or filters that act instantly.`}),`
`,(0,_.jsxs)(t.li,{children:[`Do not hide the native input with `,(0,_.jsx)(t.code,{children:`display:none`}),` (breaks keyboard).`]}),`
`,(0,_.jsx)(t.li,{children:`Do not use more than 5 options in a row; use a select.`}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`A real `,(0,_.jsx)(t.code,{children:`<input>`}),` covers the whole chip (opacity 0, full hit area): native keyboard (arrows for radios, Space for checkboxes) and form semantics.`]}),`
`,(0,_.jsx)(t.li,{children:`Selected is shown by fill, tick (✓), and translation, not colour alone (1.4.1).`}),`
`,(0,_.jsx)(t.li,{children:`Focus-visible draws a 3px ring around the chip body.`}),`
`,(0,_.jsxs)(t.li,{children:[`Group error: `,(0,_.jsx)(t.code,{children:`aria-describedby`}),` on the fieldset pointing at the error message.`]}),`
`,(0,_.jsx)(t.li,{children:`Height 56dp. Contrast: on-primary/primary 9.0:1 selected; on-surface/surface-container-lowest 15.5:1 default.`}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),r(),i(),p()})))()}v();export{g as default};