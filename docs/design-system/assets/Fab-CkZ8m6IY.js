import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,i as a,n as o,s}from"./blocks-B22--VfG.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./Fab.stories-DAeYd5bz.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:u}),`
`,(0,g.jsx)(t.h1,{id:`fab--extended-button`,children:`FAB / extended button`}),`
`,(0,g.jsx)(t.p,{children:`A little sticker that follows the reader down the page and points at the interest form. Tilted −3°, tonal yellow, hard shadow.`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Extracted from the site:`}),` `,(0,g.jsx)(t.code,{children:`.fab`}),`, `,(0,g.jsx)(t.code,{children:`.fab.is-visible`}),` (hidden until the hero has passed; hides again when the form is on screen).`]}),`
`,(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(a,{of:p}),`
`,(0,g.jsx)(t.h2,{id:`variants-and-states`,children:`Variants and states`}),`
`,(0,g.jsx)(t.h3,{id:`kinds`,children:`Kinds`}),`
`,(0,g.jsx)(o,{of:l}),`
`,(0,g.jsx)(t.h3,{id:`states`,children:`States`}),`
`,(0,g.jsx)(o,{of:c}),`
`,(0,g.jsx)(t.h3,{id:`floating-in-frame`,children:`Floating In Frame`}),`
`,(0,g.jsx)(o,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`props--variants`,children:`Props / variants`}),`
`,(0,g.jsxs)(t.p,{children:[`| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| label | string | "Get on the list" | Visible text (extended) or aria-label (icon/small). |
| kind | extended | icon | small | extended | 52dp / 56dp / 48dp |
| href | string | #interest | It is a link, not a button. |
| floating | boolean | false | `,(0,g.jsx)(t.code,{children:`true`}),` = position:fixed bottom-right as on the site. |
| state | hover | focus | pressed | – | Force a state for docs. |`]}),`
`,(0,g.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,g.jsx)(t.h3,{id:`do`,children:`Do`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`Show one FAB per page, aimed at the single conversion.`}),`
`,(0,g.jsxs)(t.li,{children:[`Wrap the floating FAB in `,(0,g.jsx)(t.code,{children:`<nav aria-label="Quick link">`}),`.`]}),`
`,(0,g.jsx)(t.li,{children:`Hide it when the target is already on screen.`}),`
`]}),`
`,(0,g.jsx)(t.h3,{id:`dont`,children:`Don't`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`Do not cover content: keep 16px / 28px from the edges and pad the footer.`}),`
`,(0,g.jsx)(t.li,{children:`Do not add a second floating element.`}),`
`,(0,g.jsx)(t.li,{children:`Do not animate it in for reduced-motion users (transition drops to 0.01ms).`}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`Rendered as a link: activation on Enter.`}),`
`,(0,g.jsxs)(t.li,{children:[`Hidden state uses `,(0,g.jsx)(t.code,{children:`pointer-events:none`}),` + opacity 0; the site also sets `,(0,g.jsx)(t.code,{children:`hidden`}),` until JS runs. Toggle `,(0,g.jsx)(t.code,{children:`hidden`}),`/`,(0,g.jsx)(t.code,{children:`inert`}),` when off screen so keyboard users cannot tab to an invisible link.`]}),`
`,(0,g.jsx)(t.li,{children:`Contrast on-sun/sun 10.3:1.`}),`
`,(0,g.jsxs)(t.li,{children:[`Icon and small kinds need `,(0,g.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=t(),r(),i(),d()})))()}_();export{h as default};