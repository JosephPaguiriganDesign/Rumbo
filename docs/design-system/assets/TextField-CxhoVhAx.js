import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,i as a,n as o,s}from"./blocks-C4z-K45U.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./TextField.stories-DDKWl-AE.js";function g(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{of:f}),`
`,(0,v.jsx)(t.h1,{id:`text-field-underlined`,children:`Text field (underlined)`}),`
`,(0,v.jsx)(t.p,{children:`Underlined fields on a paper form card. Label sits above in mono caps (site) or floats inside (DS variant). Hover and focus paint a highlighter wash.`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Extracted from the site:`}),` `,(0,v.jsx)(t.code,{children:`.tf`}),`, `,(0,v.jsx)(t.code,{children:`.tf__label`}),`, `,(0,v.jsx)(t.code,{children:`.tf__input`}),`, `,(0,v.jsx)(t.code,{children:`.tf__hint`}),`, `,(0,v.jsx)(t.code,{children:`.tf__err`}),`, `,(0,v.jsx)(t.code,{children:`.is-invalid`}),`, `,(0,v.jsx)(t.code,{children:`setInvalid()`}),` in app.js; floating label is a DS variant.`]}),`
`,(0,v.jsx)(o,{of:h}),`
`,(0,v.jsx)(a,{of:h}),`
`,(0,v.jsx)(t.h2,{id:`variants-and-states`,children:`Variants and states`}),`
`,(0,v.jsx)(t.h3,{id:`variants`,children:`Variants`}),`
`,(0,v.jsx)(o,{of:m}),`
`,(0,v.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,v.jsx)(o,{of:c}),`
`,(0,v.jsx)(t.h3,{id:`error`,children:`Error`}),`
`,(0,v.jsx)(o,{of:p}),`
`,(0,v.jsx)(t.h3,{id:`floating-error`,children:`Floating Error`}),`
`,(0,v.jsx)(o,{of:u}),`
`,(0,v.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,v.jsx)(o,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`props--variants`,children:`Props / variants`}),`
`,(0,v.jsxs)(t.p,{children:[`| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| label | string | – | Always visible text; never placeholder-only. |
| type | text | email | number | tel | text | Also set `,(0,v.jsx)(t.code,{children:`autocomplete`}),`. |
| hint | string | – | Linked with `,(0,v.jsx)(t.code,{children:`aria-describedby`}),`. |
| error | string | – | Shows the error, sets `,(0,v.jsx)(t.code,{children:`aria-invalid`}),`, colours the underline. |
| required | boolean | true | Adds “(required)” for screen readers. |
| floating | boolean | false | Label rests in the field and rises. |
| short | boolean | false | Max 15rem for ages, codes. |
| disabled | boolean | false |  |`]}),`
`,(0,v.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,v.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Say what went wrong and how to fix it: “Please enter an age between 12 and 17.”`}),`
`,(0,v.jsx)(t.li,{children:`Validate on submit, clear on input as soon as valid.`}),`
`,(0,v.jsx)(t.li,{children:`Move focus to the first invalid field on submit.`}),`
`,(0,v.jsxs)(t.li,{children:[`Give inputs the right `,(0,v.jsx)(t.code,{children:`type`}),` and `,(0,v.jsx)(t.code,{children:`autocomplete`}),`.`]}),`
`]}),`
`,(0,v.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:`Do not use placeholder as the label.`}),`
`,(0,v.jsx)(t.li,{children:`Do not signal errors by red alone: the message and a “!” badge are always present.`}),`
`,(0,v.jsx)(t.li,{children:`Do not validate on every keystroke before the user has left the field.`}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`<label for>`}),` always; required is announced via an `,(0,v.jsx)(t.code,{children:`sr-only`}),` “(required)”.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Error: `,(0,v.jsx)(t.code,{children:`aria-invalid="true"`}),`, message linked in `,(0,v.jsx)(t.code,{children:`aria-describedby`}),`, message has an icon and bold text; underline goes from ink to error (3px). Error text on paper measures 5.5:1 (light) / 10.6:1 (dark; the DS uses M3 dark error #ffb4ab, the site keeps #ba1a1a).`]}),`
`,(0,v.jsxs)(t.li,{children:[`On submit: focus the first invalid field and update a `,(0,v.jsx)(t.code,{children:`role="status"`}),` line.`]}),`
`,(0,v.jsx)(t.li,{children:`Focus: underline turns cobalt, a 3px shadow and a yellow wash appear (2.4.7 and 1.4.11 met by the 3px cobalt line vs paper, 8.2:1).`}),`
`,(0,v.jsx)(t.li,{children:`Input height ≥52dp. Font-size 1.15rem prevents iOS zoom.`}),`
`,(0,v.jsx)(t.li,{children:`Floating label never shrinks below 0.78× (≈14px).`}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=t(),r(),i(),l()})))()}y();export{_ as default};