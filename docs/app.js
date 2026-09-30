(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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

  /* Top app bar: collapses (shrinks + tonal surface + elevation) on scroll; scroll progress line */
  var bar = $('#app-bar'), fab = $('#fab'), hero = $('.hero');
  fab.hidden = false;
  var ticking = false;
  function onScroll() {
    var y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
    bar.classList.toggle('is-scrolled', y > 24);
    bar.style.setProperty('--progress', max > 0 ? Math.min(1, y / max).toFixed(4) : 0);
    var ir = $('#interest').getBoundingClientRect();
    fab.classList.toggle('is-visible', y > hero.offsetHeight * 0.7 && ir.top > window.innerHeight * 0.6);
    routeScroll();
    spy();
    ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
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
  var mq = window.matchMedia('(min-width: 900px)');
  function onMq(m) { if (m.matches && drawer.classList.contains('is-open')) setDrawer(false); }
  if (mq.addEventListener) mq.addEventListener('change', onMq); else if (mq.addListener) mq.addListener(onMq); /* Safari < 14 */

  /* Segmented button (tabs): Portugal / Málaga */
  var tabs = $$('.ftab');
  function selectTab(t, focus) {
    tabs.forEach(function (b) {
      var on = b === t, p = document.getElementById(b.getAttribute('aria-controls'));
      b.setAttribute('aria-selected', on);
      b.tabIndex = on ? 0 : -1;
      if (on) { p.hidden = false; p.classList.remove('is-entering'); void p.offsetWidth; p.classList.add('is-entering'); }
      else p.hidden = true;
    });
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
  var lens = pathsShown.map(function (p) { return p.getTotalLength(); });
  var total = lens.reduce(function (a, b) { return a + b; }, 0);
  function setRoute(p) {
    var d = p * total, k = 0, pt = pathsShown[0] ? pathsShown[0].getPointAtLength(0) : null; /* park the head at the start when nothing is drawn (it used to stay wherever the last fast scroll left it) */
    masks.forEach(function (m, i) {
      var seg = Math.max(0, Math.min(1, (d - k) / lens[i]));
      m.style.strokeDashoffset = (1 - seg).toFixed(4);
      if (seg > 0) pt = pathsShown[i].getPointAtLength(seg * lens[i]);
      k += lens[i];
    });
    if (pt && head) { head.setAttribute('cx', pt.x.toFixed(1)); head.setAttribute('cy', pt.y.toFixed(1)); }
  }
  function routeScroll() {
    if (!routeSec) return;
    if (reduce) { setRoute(1); return; }
    var r = routeSec.getBoundingClientRect(), vh = window.innerHeight;
    var p = (vh * 0.85 - r.top) / (r.height + vh * 0.25);
    setRoute(Math.max(0, Math.min(1, p)));
  }
  routeScroll();
  window.addEventListener('resize', routeScroll);

  /* Nav scrollspy */
  var spyLinks = $$('.top-nav__link'), spySecs = spyLinks.map(function (a) { return $(a.getAttribute('href')); });
  function spy() {
    var cur = -1, line = window.innerHeight * 0.35;
    spySecs.forEach(function (s, i) { if (s && s.getBoundingClientRect().top < line) cur = i; });
    spyLinks.forEach(function (a, i) { if (i === cur) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
  }
  spy();

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

  /* Scroll reveal */
  var rev = $$('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    rev.forEach(function (el, i) {
      var sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.setProperty('--d', Math.min(sib, 4) * 60 + 'ms');
      io.observe(el);
    });
  } else { rev.forEach(function (el) { el.classList.add('in'); }); }
  /* Safety net: if the observer never fires (some iOS/WebKit builds, fast flicks, restored scroll positions),
     anything at or above the bottom of the viewport is revealed on scroll, and everything after 4 seconds of scrolling around. */
  if (!reduce && rev.length) {
    var revLeft = function () { return rev.filter(function (e) { return !e.classList.contains('in'); }); };
    var sweep = function () { var vh = window.innerHeight; revLeft().forEach(function (e) { if (e.getBoundingClientRect().top < vh) e.classList.add('in'); }); };
    window.addEventListener('scroll', sweep, { passive: true });
    setTimeout(function () { sweep(); }, 1500);
    setTimeout(function () { revLeft().forEach(function (e) { e.classList.add('in'); }); }, 6000);
  }

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
})();
