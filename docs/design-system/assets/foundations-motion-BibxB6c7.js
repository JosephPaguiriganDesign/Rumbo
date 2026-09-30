import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{s as t}from"./chunk-W22LQPXL-iSyfK3kp.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,s as a}from"./blocks-B22--VfG.js";import{i as o,r as s}from"./tokens-B-7ngRye.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{title:`Foundations/Motion`}),`
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
| linear | --md-sys-motion-easing-linear | cubic-bezier(0, 0, 1, 1) | Colour fades only |
| thump | --md-sys-motion-easing-thump | cubic-bezier(0.34, 1.56, 0.64, 1) | Overshoot: stamps, pins, section numbers, tab pop, FAB, accordion icon |
| wipe | --md-sys-motion-easing-wipe | cubic-bezier(0.76, 0, 0.24, 1) | Torn-paper wipe between legs |`}),`
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
| draw | --md-sys-motion-duration-draw | 900ms | Tactics arrows |
| stagger | --md-sys-motion-duration-stagger | 70ms | Sibling delay in staggered entrances |
| count | --md-sys-motion-duration-count | 1400ms | Number count-up |`}),`
`,(0,u.jsx)(t.h2,{id:`reduced-motion`,children:`Reduced motion`}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.code,{children:`@media (prefers-reduced-motion: reduce)`}),` sets every transition and animation to 0.01ms, shows all reveals, draws the tactics board and route immediately, and stops smooth scroll. The Storybook toolbar has a `,(0,u.jsx)(t.strong,{children:`Motion: reduced`}),` switch that applies the same rule to a story.`]}),`
`,(0,u.jsx)(t.h2,{id:`patterns`,children:`Patterns`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Reveal`}),`: one system, varied by `,(0,u.jsx)(t.code,{children:`data-rv`}),`. Default is fade + 24px rise (`,(0,u.jsx)(t.code,{children:`long2`}),`, decelerate). `,(0,u.jsx)(t.code,{children:`card`}),` lands with a small tilt, `,(0,u.jsx)(t.code,{children:`thump`}),` (section numbers, DRAFT stamp) scales down from 2.2x with the overshoot easing, `,(0,u.jsx)(t.code,{children:`words`}),` (headlines) rises word by word then sweeps the highlighter on, `,(0,u.jsx)(t.code,{children:`tear`}),` opens the torn edge upward, `,(0,u.jsx)(t.code,{children:`print`}),` (receipt) prints out in 22 chunky steps, `,(0,u.jsx)(t.code,{children:`stagger`}),` delays each child by the stagger token (max 9).`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Hero entrance`}),`: plays once on load, after fonts are ready. Words rise, board and photo drop in with overshoot, ticket slides in and its stub tugs, tape peels, SALIDA stamp thumps at 1.5s.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Parallax`}),`: hero layers (sun glow, doodles, board-back, board, print, tape, ticket, note) get a scroll offset of 2 to 30% of scroll distance; photo frames move the image inside its frame by up to 7.5% of the frame height (the image sits in a 118%-tall layer, so the frame never shows a gap). Written by JS with requestAnimationFrame into the individual `,(0,u.jsx)(t.code,{children:`translate`}),` property, so it composes with each element's resting rotation. Never applied to elements with `,(0,u.jsx)(t.code,{children:`mix-blend-mode`}),` (the SALIDA stamp is only animated on entrance).`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Route`}),`: dotted line and head follow scroll; pins pop (`,(0,u.jsx)(t.code,{children:`thump`}),`) when the line reaches them; a ripple pulses from the head while the route is moving. The app-bar progress line has a ball that rolls along it.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Tab / leg switch`}),`: View Transitions API where available (old leg slides back, new leg is wiped in with a torn edge); otherwise the same wipe as a CSS clip-path animation. Then photos drop in and "develop" (scale-down fade), text rises in sequence. Direction follows tab order.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Drawer`}),`: ticket perforation grows down the stub, header and links slide in one after another.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Accordion`}),`: `,(0,u.jsx)(t.code,{children:`grid-template-rows 0fr → 1fr`}),`; the answer fades and settles in after the height opens; the plus turns 135° with overshoot.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Form`}),`: fields underline with a wipe-in bar on focus, invalid fields shake once, chosen options punch.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Reduced motion`}),`: no parallax, no travel/tilt/scale, no wipes, no count-up, no ball. Reveals keep a 300ms opacity fade. Everything is visible with JS off or if app.js fails (the motion start-states hang off `,(0,u.jsx)(t.code,{children:`html.mo`}),`, which is removed after 3.5s if app.js never finishes).`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`Budget`}),`: transform / opacity / individual transform properties only, plus SVG stroke-dashoffset and one background-size underline on inputs. `,(0,u.jsx)(t.code,{children:`will-change`}),` only on hero parallax layers and the app-bar ball.`]}),`
`]}),`
`,(0,u.jsxs)(`div`,{className:`rumbo`,style:{padding:24,marginTop:16},children:[(0,u.jsx)(`p`,{className:`sb-label`,children:`Hover the bars to see each easing on the longest duration (400ms)`}),Object.entries(o.motion.easing).map(([e,t])=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,margin:`8px 0`},children:[(0,u.jsx)(`span`,{className:`mono`,style:{width:220},children:e}),(0,u.jsx)(`div`,{style:{flex:1,height:14,background:`var(--md-sys-color-surface-container-high)`,position:`relative`},className:`motion-track`,children:(0,u.jsx)(`span`,{style:{position:`absolute`,left:0,top:0,width:14,height:14,background:`var(--md-sys-color-tertiary)`,transition:`left 400ms `+t},className:`motion-dot`})})]},e)),(0,u.jsx)(`style`,{children:`.motion-track:hover .motion-dot{left:calc(100% - 14px)!important}`})]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),i(),s()})))()}d();export{l as default};