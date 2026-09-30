import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,s as a}from"./blocks-C4z-K45U.js";import{i as o,r as s}from"./tokens-D0IX_VUT.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{title:`Foundations/Motion`}),`
`,(0,u.jsx)(t.h1,{id:`motion`,children:`Motion`}),`
`,(0,u.jsxs)(t.p,{children:[`M3 easing and duration tokens, used sparingly. The rule: `,(0,u.jsx)(t.strong,{children:`motion shows cause and effect`}),` (a tab lifts, a drawer slides, a route draws) and never decorates on its own.`]}),`
`,(0,u.jsx)(t.h2,{id:`easing`,children:`Easing`}),`
`,(0,u.jsx)(t.p,{children:`| Token | CSS var | Curve | Use |
| --- | --- | --- | --- |
| standard | --md-sys-motion-easing-standard | cubic-bezier(0.2, 0, 0, 1) | Hover fades, state layers |
| emphasized | --md-sys-motion-easing-emphasized | cubic-bezier(0.2, 0, 0, 1) | Drawer, tabs, accordion, route |
| emphasized-decelerate | --md-sys-motion-easing-emphasized-decelerate | cubic-bezier(0.05, 0.7, 0.1, 1) | Things entering: panels, reveals, button lift |
| emphasized-accelerate | --md-sys-motion-easing-emphasized-accelerate | cubic-bezier(0.3, 0, 0.8, 0.15) | Things leaving |
| standard-decelerate | --md-sys-motion-easing-standard-decelerate | cubic-bezier(0, 0, 0, 1) | DS addition |
| standard-accelerate | --md-sys-motion-easing-standard-accelerate | cubic-bezier(0.3, 0, 1, 1) | DS addition |
| linear | --md-sys-motion-easing-linear | cubic-bezier(0, 0, 1, 1) | Colour fades only |`}),`
`,(0,u.jsx)(t.h2,{id:`duration`,children:`Duration`}),`
`,(0,u.jsx)(t.p,{children:`| Token | CSS var | Value | Used by |
| --- | --- | --- | --- |
| short1 | --md-sys-motion-duration-short1 | 50ms |  |
| short2 | --md-sys-motion-duration-short2 | 100ms | Icon/colour |
| short3 | --md-sys-motion-duration-short3 | 150ms |  |
| short4 | --md-sys-motion-duration-short4 | 200ms | Hover, state layer, field colour |
| medium1 | --md-sys-motion-duration-medium1 | 250ms |  |
| medium2 | --md-sys-motion-duration-medium2 | 300ms | Scrim, tab lift, accordion icon, app bar |
| medium3 | --md-sys-motion-duration-medium3 | 350ms |  |
| medium4 | --md-sys-motion-duration-medium4 | 400ms | Drawer, accordion height, panel enter |
| long1 | --md-sys-motion-duration-long1 | 450ms |  |
| long2 | --md-sys-motion-duration-long2 | 500ms | Scroll reveal |
| long3 | --md-sys-motion-duration-long3 | 550ms |  |
| long4 | --md-sys-motion-duration-long4 | 600ms |  |
| extra-long1 | --md-sys-motion-duration-extra-long1 | 700ms | Reserved |
| extra-long2 | --md-sys-motion-duration-extra-long2 | 800ms |  |
| draw | --md-sys-motion-duration-draw | 900ms | Tactics arrows |`}),`
`,(0,u.jsx)(t.h2,{id:`reduced-motion`,children:`Reduced motion`}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.code,{children:`@media (prefers-reduced-motion: reduce)`}),` sets every transition and animation to 0.01ms, shows all reveals, draws the tactics board and route immediately, and stops smooth scroll. The Storybook toolbar has a `,(0,u.jsx)(t.strong,{children:`Motion: reduced`}),` switch that applies the same rule to a story.`]}),`
`,(0,u.jsx)(t.h2,{id:`patterns`,children:`Patterns`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`Reveal: fade + 18px rise, `,(0,u.jsx)(t.code,{children:`long2`}),`, decelerate, stagger 60ms × sibling index (max 4).`]}),`
`,(0,u.jsxs)(t.li,{children:[`Tab / panel: panel rises 10px, `,(0,u.jsx)(t.code,{children:`medium4`}),`.`]}),`
`,(0,u.jsxs)(t.li,{children:[`Accordion: `,(0,u.jsx)(t.code,{children:`grid-template-rows 0fr → 1fr`}),`, so height animates without measuring.`]}),`
`,(0,u.jsxs)(t.li,{children:[`Route line: the dotted line's `,(0,u.jsx)(t.code,{children:`stroke-dashoffset`}),` follows scroll progress; the head pin follows the path.`]}),`
`]}),`
`,(0,u.jsxs)(`div`,{className:`rumbo`,style:{padding:24,marginTop:16},children:[(0,u.jsx)(`p`,{className:`sb-label`,children:`Hover the bars to see each easing on the longest duration (400ms)`}),Object.entries(o.motion.easing).map(([e,t])=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,margin:`8px 0`},children:[(0,u.jsx)(`span`,{className:`mono`,style:{width:220},children:e}),(0,u.jsx)(`div`,{style:{flex:1,height:14,background:`var(--md-sys-color-surface-container-high)`,position:`relative`},className:`motion-track`,children:(0,u.jsx)(`span`,{style:{position:`absolute`,left:0,top:0,width:14,height:14,background:`var(--md-sys-color-tertiary)`,transition:`left 400ms `+t},className:`motion-dot`})})]},e)),(0,u.jsx)(`style`,{children:`.motion-track:hover .motion-dot{left:calc(100% - 14px)!important}`})]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),i(),s()})))()}d();export{l as default};