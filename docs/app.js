(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* WebKit fallback: `font-optical-sizing:auto` does not drive Fraunces' `opsz` axis in every WebKit build
     (with or without font-variation-settings), so display type comes out with the small-text (opsz 14) shapes:
     wider glyphs, different wrapping. Detect that and set opsz explicitly = computed font-size (what auto does elsewhere). */
  (function () {
    if (!document.fonts || !document.fonts.ready) return;
    function broken() {
      var t = document.createElement('span');
      t.textContent = 'Lisbon to Málaga, one ball.';
      t.style.cssText = 'position:absolute;left:-9999px;top:0;white-space:nowrap;font:italic 700 90px Fraunces,serif;font-optical-sizing:auto;font-variation-settings:"SOFT" 100,"WONK" 1';
      document.body.appendChild(t);
      var auto = t.getBoundingClientRect().width;
      t.style.fontVariationSettings = '"SOFT" 100,"WONK" 1,"opsz" 90';
      var expl = t.getBoundingClientRect().width;
      t.remove();
      return Math.abs(auto - expl) > 2;
    }
    var els = null, raf = 0;
    function apply() {
      raf = 0;
      if (!els) {
        els = $$('body *').filter(function (e) { return /Fraunces/.test(getComputedStyle(e).fontFamily); });
        els.forEach(function (e) { e.__fvs = getComputedStyle(e).fontVariationSettings; });
      }
      var sizes = els.map(function (e) { return parseFloat(getComputedStyle(e).fontSize); });
      els.forEach(function (e, i) {
        var base = e.__fvs && e.__fvs !== 'normal' ? e.__fvs + ', ' : '';
        e.style.fontVariationSettings = base + '"opsz" ' + Math.max(9, Math.min(144, sizes[i])).toFixed(1);
      });
    }
    document.fonts.ready.then(function () {
      if (!broken()) return;
      apply();
      window.addEventListener('resize', function () { if (!raf) raf = requestAnimationFrame(apply); });
    });
  })();

  /* Top app bar: collapses (shrinks + tonal surface + elevation) on scroll; scroll progress line + a ball that rolls along it.
     One rAF-throttled handler. Reads (rects) happen first, writes (styles) after, so there is no layout thrash. */
  var bar = $('#app-bar'), fab = $('#fab'), hero = $('.hero'), barBall = $('#bar-ball');
  fab.hidden = false;
  var ticking = false, barW = 0, interestEl = $('#interest');
  var pxHero = [], pxSec = [], duos = [];
  var motionOn = !reduce;
  if (motionOn) {
    pxHero = $$('[data-pxh]').map(function (el) { return { el: el, k: parseFloat(el.getAttribute('data-pxh')) / 100 }; });
    pxSec = $$('[data-px]').map(function (el) {
      var t = getComputedStyle(el).transform; /* keep the element's resting rotation, then add our translate in front of it */
      return { el: el, k: parseFloat(el.getAttribute('data-px')) / 100, base: t && t !== 'none' ? ' ' + t : '' };
    });
    duos = $$('.duo__in').map(function (el) { return { el: el, host: el.parentNode }; });
    hero.classList.add('is-px');
  }
  function measureBar() { barW = bar.clientWidth; }
  measureBar();
  var moveTimer = 0;
  function onScroll() {
    ticking = false;
    var vh = window.innerHeight, y = window.scrollY, max = document.documentElement.scrollHeight - vh;
    /* ---- reads ---- */
    var ir = interestEl.getBoundingClientRect();
    var rr = routeSec ? routeSec.getBoundingClientRect() : null;
    var line = vh * 0.35, cur = -1;
    spySecs.forEach(function (sec, i) { if (sec && sec.getBoundingClientRect().top < line) cur = i; });
    var heroH = hero.offsetHeight;
    var duoY = null, secY = null;
    if (motionOn) {
      duoY = duos.map(function (d) {
        var r = d.host.getBoundingClientRect();
        if (r.height === 0 || r.bottom < -80 || r.top > vh + 80) return null;
        var p = ((r.top + r.height / 2) - vh / 2) / (vh / 2 + r.height / 2); /* -1 (entering from below) .. 1 (leaving up) */
        return Math.max(-1, Math.min(1, p)) * r.height * 0.075;
      });
      secY = pxSec.map(function (d) {
        var r = d.el.getBoundingClientRect();
        if (r.bottom < -120 || r.top > vh + 120) return null;
        return ((r.top + r.height / 2) - vh / 2) * d.k;
      });
    }
    /* ---- writes ---- */
    var prog = max > 0 ? Math.min(1, y / max) : 0;
    bar.classList.toggle('is-scrolled', y > 24);
    bar.style.setProperty('--progress', prog.toFixed(4));
    if (barBall && motionOn) barBall.style.transform = 'translate3d(' + Math.max(0, prog * (barW - 16)).toFixed(1) + 'px,0,0) rotate(' + (y * 0.45).toFixed(0) + 'deg)';
    fab.classList.toggle('is-visible', y > heroH * 0.7 && ir.top > vh * 0.6);
    if (motionOn) {
      if (y < heroH * 1.25) pxHero.forEach(function (d) { d.el.style.translate = '0 ' + (y * d.k).toFixed(1) + 'px'; });
      duos.forEach(function (d, i) { if (duoY[i] !== null) d.el.style.translate = '0 ' + duoY[i].toFixed(1) + 'px'; });
      pxSec.forEach(function (d, i) { if (secY[i] !== null) d.el.style.transform = 'translate3d(0,' + secY[i].toFixed(1) + 'px,0)' + d.base; });
    }
    routeScroll(rr, vh);
    spyLinks.forEach(function (a, i) { if (i === cur) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
  }
  function requestTick() { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', function () { measureBar(); requestTick(); }, { passive: true });
  /* Modal navigation drawer */
  var drawer = $('#drawer'), scrim = $('#scrim'), menuBtn = $('#menu-btn'), closeBtn = $('#drawer-close');
  function setDrawer(open) {
    drawer.classList.toggle('is-open', open);
    document.body.classList.toggle('drawer-open', open);
    menuBtn.setAttribute('aria-expanded', open);
    if (open) { scrim.hidden = false; requestAnimationFrame(function () { scrim.classList.add('is-open'); }); drawer.removeAttribute('inert'); closeBtn.focus(); }
    else { scrim.classList.remove('is-open'); setTimeout(function () { if (!drawer.classList.contains('is-open')) scrim.hidden = true; }, reduce ? 0 : 300); drawer.setAttribute('inert', ''); if (document.activeElement && drawer.contains(document.activeElement)) menuBtn.focus(); }
  }
  menuBtn.addEventListener('click', function () { setDrawer(true); });
  closeBtn.addEventListener('click', function () { setDrawer(false); });
  scrim.addEventListener('click', function () { setDrawer(false); });
  $$('a', drawer).forEach(function (a) { a.addEventListener('click', function () { setDrawer(false); }); });
  document.addEventListener('keydown', function (e) {
    if (!drawer.classList.contains('is-open')) return;
    if (e.key === 'Escape') { setDrawer(false); return; }
    if (e.key === 'Tab') {
      var f = $$('a,button', drawer), first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  $$('#drawer nav > *').forEach(function (e, i) { e.style.setProperty('--i', i); });
  var mq = window.matchMedia('(min-width: 900px)');
  function onMq(m) { if (m.matches && drawer.classList.contains('is-open')) setDrawer(false); }
  if (mq.addEventListener) mq.addEventListener('change', onMq); else if (mq.addListener) mq.addListener(onMq); /* Safari < 14 */

  /* Segmented button (tabs): Portugal / Málaga */
  var tabs = $$('.ftab');
  function stageLeg(p) { /* per-photo / per-paragraph stagger indices for the entrance animations */
    $$('.pic', p).forEach(function (e, i) { e.style.setProperty('--i', i); });
    $$('.leg__body > *', p).forEach(function (e, i) { e.style.setProperty('--i', i); });
  }
  function swapPanels(t) {
    tabs.forEach(function (b) {
      var on = b === t, p = document.getElementById(b.getAttribute('aria-controls'));
      b.setAttribute('aria-selected', on);
      b.tabIndex = on ? 0 : -1;
      p.hidden = !on;
    });
  }
  function selectTab(t, focus) {
    var cur = tabs.filter(function (b) { return b.getAttribute('aria-selected') === 'true'; })[0];
    if (cur === t) { if (focus) t.focus(); return; }
    var dir = tabs.indexOf(t) > tabs.indexOf(cur) ? 'fwd' : 'back';
    var p = document.getElementById(t.getAttribute('aria-controls'));
    if (reduce) { swapPanels(t); }
    else if (document.startViewTransition && !window.__noVT) {
      /* View Transitions: the outgoing card slides back a touch while the new one is wiped in with a torn-paper edge (CSS: ::view-transition-*(leg)).
         .is-vt turns off the CSS-only fallback animation so they don't double up. */
      root.classList.add('vt-' + dir); stageLeg(p);
      var vt;
      try { vt = document.startViewTransition(function () { swapPanels(t); }); } catch (e) { vt = null; swapPanels(t); }
      var done = function () {
        root.classList.remove('vt-fwd', 'vt-back');
        p.classList.add('is-after'); setTimeout(function () { p.classList.remove('is-after'); }, 1700); /* photos drop in once the wipe has landed */
      };
      if (vt && vt.finished) vt.finished.then(done, done); else setTimeout(done, 1200);
    } else {
      /* CSS fallback: the new leg is wiped in over the top with the same torn edge, then its photos "develop" and drop in */
      swapPanels(t); stageLeg(p);
      p.setAttribute('data-dir', dir); p.classList.remove('is-entering'); void p.offsetWidth; p.classList.add('is-entering');
      setTimeout(function () { p.classList.remove('is-entering'); }, 1700);
    }
    t.classList.remove('pop'); void t.offsetWidth; t.classList.add('pop');
    if (focus) t.focus();
  }
  tabs.forEach(function (b, i) {
    b.addEventListener('click', function () { selectTab(b); });
    b.addEventListener('keydown', function (e) {
      var n = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = tabs[(i + 1) % tabs.length];
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === 'Home') n = tabs[0]; else if (e.key === 'End') n = tabs[tabs.length - 1];
      if (n) { e.preventDefault(); selectTab(n, true); }
    });
  });
  $$('.leg').forEach(function (p) { if (p.id !== 'panel-pt') p.hidden = true; });

  /* Accordion */
  var accBtns = $$('.acc__btn');
  accBtns.forEach(function (b) { var a = b.closest('.acc'); if (a) a.classList.toggle('is-open', b.getAttribute('aria-expanded') === 'true'); });
  accBtns.forEach(function (b, i) {
    b.addEventListener('click', function () {
      var open = b.getAttribute('aria-expanded') !== 'true';
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
      /* .is-open mirrors :has(.acc__btn[aria-expanded=true]) for Safari < 15.4, which has no :has() */
      var a = b.closest('.acc'); if (a) a.classList.toggle('is-open', open);
    });
    b.addEventListener('keydown', function (e) {
      var n = null;
      if (e.key === 'ArrowDown') n = accBtns[(i + 1) % accBtns.length];
      else if (e.key === 'ArrowUp') n = accBtns[(i - 1 + accBtns.length) % accBtns.length];
      else if (e.key === 'Home') n = accBtns[0]; else if (e.key === 'End') n = accBtns[accBtns.length - 1];
      if (n) { e.preventDefault(); n.focus(); }
    });
  });


  /* Route line: draws itself as the route section scrolls through the viewport.
     Two masked segments (landing -> Lisbon, Lisbon -> Málaga) share one 0..1 progress value. */
  var routeSec = $('#route-map'), masks = $$('.route-mask'), head = $('.map__head'), pathsShown = $$('.map g[mask] path');
  var mapEl = $('.map'), dotL = $('.map__dot--l'), dotA = $('.map__dot--a');
  var lens = pathsShown.map(function (p) { return p.getTotalLength(); });
  var total = lens.reduce(function (a, b) { return a + b; }, 0);
  var lastP = -1;
  function pingDot(d) { if (!d || d.classList.contains('hit')) return; d.classList.add('hit'); if (!reduce) { d.classList.remove('ping'); void d.getBoundingClientRect(); d.classList.add('ping'); } }
  function setRoute(p) {
    var d = p * total, k = 0, pt = pathsShown[0] ? pathsShown[0].getPointAtLength(0) : null; /* park the head at the start when nothing is drawn (it used to stay wherever the last fast scroll left it) */
    masks.forEach(function (m, i) {
      var seg = Math.max(0, Math.min(1, (d - k) / lens[i]));
      m.style.strokeDashoffset = (1 - seg).toFixed(4);
      if (seg > 0) pt = pathsShown[i].getPointAtLength(seg * lens[i]);
      k += lens[i];
    });
    if (pt && head) { head.setAttribute('cx', pt.x.toFixed(1)); head.setAttribute('cy', pt.y.toFixed(1)); var ring = $('.map__ring'); if (ring) { ring.setAttribute('cx', pt.x.toFixed(1)); ring.setAttribute('cy', pt.y.toFixed(1)); } }
    /* pins pop when the line reaches them; a ripple pulses off the head while the route is travelling */
    if (p >= (lens[0] / total) - 0.002 && p > 0) pingDot(dotL); else if (dotL && p <= 0.001) dotL.classList.remove('hit', 'ping');
    if (p >= 0.995) pingDot(dotA); else if (dotA && p < 0.9) dotA.classList.remove('hit', 'ping');
    if (mapEl && !reduce && lastP >= 0 && Math.abs(p - lastP) > 0.0005 && p > 0 && p < 1) {
      mapEl.classList.add('is-moving'); clearTimeout(moveTimer); moveTimer = setTimeout(function () { mapEl.classList.remove('is-moving'); }, 220);
    }
    lastP = p;
  }
  function routeScroll(r, vh) {
    if (!routeSec) return;
    if (reduce) { setRoute(1); return; }
    r = r || routeSec.getBoundingClientRect(); vh = vh || window.innerHeight;
    var p = (vh * 0.85 - r.top) / (r.height + vh * 0.25);
    setRoute(Math.max(0, Math.min(1, p)));
  }
  routeScroll();

  /* Nav scrollspy (updated from onScroll) */
  var spyLinks = $$('.top-nav__link'), spySecs = spyLinks.map(function (a) { return $(a.getAttribute('href')); });

  /* Tactics board: arrows draw in one after another when the board scrolls into view */
  var board = $('.board');
  if (board) {
    $$('.tb-arrow', board).forEach(function (a, i) { a.style.setProperty('--i', i); a.style.transitionDelay = ''; });
    $$('.tb-o', board).forEach(function (o, i) { o.style.setProperty('--i', i); });
    if (reduce || !('IntersectionObserver' in window)) board.classList.add('is-drawn');
    else {
      var bo = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { board.classList.add('is-drawn'); bo.disconnect(); } }); }, { threshold: 0.3 });
      bo.observe(board);
      setTimeout(function () { board.classList.add('is-drawn'); }, 900);
    }
  }

  /* Scroll reveal. Each .reveal picks its entrance from data-rv (card / thump / words / tear / print / stagger / draw).
     Start states only exist under html.mo; the safety nets below make sure nothing is left hidden if the observer never fires. */
  $$('[data-rv="words"]').forEach(function (h) { /* headline: wrap each word so they can rise one after another (markup children such as .hl stay intact) */
    var n = 0;
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (c) {
        if (c.nodeType === 3) {
          var parts = c.nodeValue.split(/(\s+)/), frag = document.createDocumentFragment();
          parts.forEach(function (w) {
            if (!w) return;
            if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(w)); return; }
            var sp = document.createElement('span'); sp.className = 'w'; sp.style.setProperty('--i', n++); sp.textContent = w; frag.appendChild(sp);
          });
          node.replaceChild(frag, c);
        } else if (c.nodeType === 1 && !c.classList.contains('w')) {
          if (c.classList.contains('hl')) { c.classList.add('w'); c.style.setProperty('--i', n++); } else walk(c);
        }
      });
    })(h);
  });
  $$('[data-rv="stagger"]').forEach(function (g) { Array.prototype.forEach.call(g.children, function (c, i) { c.style.setProperty('--i', Math.min(i, 9)); }); });
  function countUp(el) {
    var end = parseFloat(el.getAttribute('data-count')), sep = el.getAttribute('data-sep') || '', t0 = 0, dur = 1400;
    function fmt(v) { var n = Math.round(v).toString(); return sep ? n.replace(/\B(?=(\d{3})+(?!\d))/g, sep) : n; }
    function step(t) {
      if (!t0) t0 = t;
      var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 4);
      el.textContent = fmt(end * e);
      if (k < 1) requestAnimationFrame(step); else el.textContent = fmt(end);
    }
    el.textContent = fmt(0); requestAnimationFrame(step);
  }
  var counted = [];
  function showIn(el) {
    if (el.classList.contains('in')) return;
    el.classList.add('in');
    if (!reduce) $$('.count', el).forEach(function (c) { if (counted.indexOf(c) < 0) { counted.push(c); countUp(c); } });
  }
  var rev = $$('.reveal, [data-rv="stagger"]');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { showIn(e.target); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    rev.forEach(function (el, i) {
      var sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.setProperty('--d', Math.min(sib, 4) * 60 + 'ms');
      io.observe(el);
    });
  } else { rev.forEach(function (el) { el.classList.add('in'); }); }
  /* counters that are on screen from the start (or when observer is missing) just show their final number (markup already holds it) */
  /* Safety net: if the observer never fires (some iOS/WebKit builds, fast flicks, restored scroll positions),
     anything at or above the bottom of the viewport is revealed on scroll, and everything after 6 seconds. */
  if (!reduce && rev.length) {
    var revLeft = function () { return rev.filter(function (e) { return !e.classList.contains('in'); }); };
    var sweep = function () { var vh = window.innerHeight; revLeft().forEach(function (e) { if (e.getBoundingClientRect().top < vh) showIn(e); }); };
    window.addEventListener('scroll', sweep, { passive: true });
    setTimeout(function () { sweep(); }, 1500);
    setTimeout(function () { revLeft().forEach(function (e) { showIn(e); }); }, 6000);
  }

  /* Hero: staged entrance after fonts are ready (never later than 1.2s, so the page is never left waiting on a font) */
  (function () {
    var go = function () { if (hero.classList.contains('is-live')) return; hero.classList.add('is-live'); if (!reduce) setTimeout(function () { $$('.hero .count').forEach(function (c) { counted.push(c); countUp(c); }); }, 1900); };
    requestAnimationFrame(function () { requestAnimationFrame(function () {
      if (document.fonts && document.fonts.ready) { document.fonts.ready.then(go); setTimeout(go, 1200); } else go();
    }); });
  })();

  /* Photos: never leave a lazy photo waiting on the browser's heuristics. Once the page has loaded, fetch them all. */
  window.addEventListener('load', function () { $$('img[loading="lazy"]').forEach(function (i) { i.loading = 'eager'; }); });

  /* Theme: the warm paper look is the default everywhere, regardless of the phone's dark-mode setting.
     Dark ("night train") is opt-in: open the page with ?theme=dark (remembered), or ?theme=light to clear it. */
  (function () {
    var root = document.documentElement, KEY = 'rumbo-theme', q = /[?&]theme=(dark|light)\b/.exec(location.search), t = null;
    try {
      if (q) { if (q[1] === 'dark') localStorage.setItem(KEY, 'dark'); else localStorage.removeItem(KEY); }
      t = localStorage.getItem(KEY);
    } catch (e) { t = q && q[1] === 'dark' ? 'dark' : null; }
    if (t === 'dark') root.setAttribute('data-theme', 'dark');
  })();

  /* Interest form: validates, never submits. */
  var form = $('#interest-form'), note = $('#form-note');
  var CONTACT = 'hello@rumbo.example'; // sample address. The form stays non-submitting until this is a real inbox: set CONTACT_LIVE = true.
  var CONTACT_LIVE = false;
  function setInvalid(input, bad) {
    var wrap = input.closest('.tf'), err = wrap && $('.tf__err', wrap);
    if (!wrap) return;
    wrap.classList.toggle('is-invalid', bad);
    input.setAttribute('aria-invalid', bad ? 'true' : 'false');
    if (err) err.hidden = !bad;
  }
  $$('.tf__input[required]', form).forEach(function (i) { i.addEventListener('input', function () { if (i.validity.valid) setInvalid(i, false); }); });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var firstBad = null;
    $$('.tf__input[required]', form).forEach(function (i) { var bad = !i.validity.valid; setInvalid(i, bad); if (bad && !firstBad) firstBad = i; });
    if (firstBad) { firstBad.focus(); return; }
    var f = form.elements, v = function (n) { return f[n].value; };
    var body = 'Parent: ' + v('parent') + '\nEmail: ' + v('email') + '\nPlayer age: ' + v('age') + '\nPosition: ' + v('position') + '\nAge group: ' + v('group');
    if (CONTACT_LIVE) {
      location.href = 'mailto:' + CONTACT + '?subject=' + encodeURIComponent('Rumbo interest list – Summer 2027') + '&body=' + encodeURIComponent(body);
    } else {
      note.textContent = 'Thanks. Nothing was sent, because this preview isn\'t connected to an inbox yet. Once the contact address is live, this button will open your email app with your details filled in.';
    }
  });
  onScroll();
  window.__rumboMo = true; /* set last: tells the head script that app.js ran to the end, so the motion start-states (html.mo) may stay. If anything above throws, html.mo is removed after 3.5s and the page shows plainly. */
})();
