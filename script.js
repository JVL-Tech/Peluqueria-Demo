/* ============================================================
   Mareva Studio · Lógica compartida multipágina
   - Navegación + scroll dinámico
   - Reveal animations + stagger
   - Modal de servicios (desktop + mobile flip)
   - Carrusel testimonios
   - Galería con filtros + lightbox
   - Form handlers
   ============================================================ */

(function(){
  'use strict';

  /* ============= TOPBAR (scroll detection) ============= */
  const topbar = document.getElementById('topbar');
  if (topbar){
    const isHome = topbar.dataset.home === 'true';
    if (isHome){
      window.addEventListener('scroll', () => {
        topbar.classList.toggle('scrolled', window.scrollY > 60);
      });
    }
  }

  /* ============= MENÚ MÓVIL ============= */
  const menuBtn = document.querySelector('.menu-toggle');
  if (menuBtn){
    // Botón de cierre dentro del panel
    const nav = document.querySelector('.nav');
    const closeBtn = document.createElement('button');
    closeBtn.className = 'nav-close';
    closeBtn.setAttribute('aria-label', 'Cerrar menú');
    closeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
    nav.prepend(closeBtn);
    closeBtn.addEventListener('click', () => document.body.classList.remove('menu-open'));

    menuBtn.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });
    document.querySelectorAll('.nav a').forEach(a => {
      a.addEventListener('click', () => document.body.classList.remove('menu-open'));
    });
    document.addEventListener('click', (e) => {
      if (document.body.classList.contains('menu-open') &&
          !e.target.closest('.nav') && !e.target.closest('.menu-toggle')){
        document.body.classList.remove('menu-open');
      }
    });
  }

  /* ============= REVEAL on scroll + STAGGER ============= */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  function applyReveals(){
    document.querySelectorAll('.reveal, .stagger').forEach(el => {
      revealObserver.observe(el);
    });
    document.querySelectorAll('.stagger').forEach(group => {
      Array.from(group.children).forEach((child, i) => {
        child.style.setProperty('--d', i);
      });
    });
  }

  /* ============= HOME HERO PARALLAX ============= */
  const heroImg = document.querySelector('.hero-img');
  const hero = document.querySelector('.hero');
  if (heroImg && hero){
    document.body.classList.add('home');
    window.addEventListener('scroll', () => {
      const progress = Math.min(window.scrollY / hero.offsetHeight, 1);
      heroImg.style.transform = `scale(${1 + progress * 0.08})`;
    });
  }
  /* Page hero parallax (subpáginas) */
  const phBg = document.querySelector('.page-hero-bg');
  if (phBg){
    window.addEventListener('scroll', () => {
      const y = Math.min(window.scrollY, 400);
      phBg.style.transform = `translateY(${y * .25}px) scale(${1 + y * .0002})`;
    });
  }

  /* ============= SMOOTH SCROLL ============= */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const t = document.getElementById(id);
      if (t){
        e.preventDefault();
        window.scrollTo({top: t.offsetTop - 60, behavior: 'smooth'});
      }
    });
  });

  /* ============= RIPPLE en botones ============= */
  function addRipple(btn, e){
    const rect = btn.getBoundingClientRect();
    const r = document.createElement('span');
    const size = Math.max(rect.width, rect.height) * 1.2;
    r.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${e.clientX - rect.left - size/2}px;top:${e.clientY - rect.top - size/2}px;border-radius:50%;background:rgba(255,255,255,.4);transform:scale(0);pointer-events:none;animation:ripple-anim .65s ease-out forwards`;
    btn.appendChild(r);
    setTimeout(() => r.remove(), 700);
  }
  function bindRipple(){
    document.querySelectorAll('.modal-cta, .submit, .nav-cta, .hero-cta, .newsletter-form button').forEach(btn => {
      if (btn.dataset.rippleBound) return;
      btn.dataset.rippleBound = '1';
      btn.style.position = btn.style.position || 'relative';
      btn.style.overflow = 'hidden';
      btn.addEventListener('click', e => addRipple(btn, e));
    });
  }
  /* Inyectar keyframes ripple una vez */
  if (!document.getElementById('ripple-kf')){
    const s = document.createElement('style');
    s.id = 'ripple-kf';
    s.textContent = '@keyframes ripple-anim{to{transform:scale(1);opacity:0}}';
    document.head.appendChild(s);
  }

  /* ============= RENDERIZAR SERVICIOS ============= */
  /* En index.html (home) → mostrar 6 servicios destacados con flag .home === true */
  /* En servicios.html → todos agrupados por categoría */
  const homeGrid = document.getElementById('services-grid');
  if (homeGrid && typeof SERVICES !== 'undefined'){
    const featured = SERVICES.filter(s => s.home).slice(0, 6);
    homeGrid.innerHTML = featured.map((s) => `
      <div class="service-row reveal" data-id="${s.id}">
        <div class="name">${s.name}</div>
        <div class="desc">${s.desc}</div>
        <div class="price">${s.price}<small>${s.unit}</small></div>
        <div class="arr">→</div>
      </div>
    `).join('');
    homeGrid.classList.add('stagger');
  }
  const fullGrid = document.getElementById('services-full');
  if (fullGrid && typeof SERVICES !== 'undefined' && typeof CATEGORIES !== 'undefined'){
    const html = Object.entries(CATEGORIES).map(([catId, cat]) => {
      const items = SERVICES.filter(s => s.cat === catId);
      if (!items.length) return '';
      return `
        <div class="svc-category reveal">
          <span>${cat.label}</span>
          <small>${cat.sub}</small>
        </div>
        <div class="services-grid stagger">
          ${items.map(s => `
            <div class="service-row" data-id="${s.id}">
              <div class="name">${s.name}</div>
              <div class="desc">${s.desc}</div>
              <div class="price">${s.price}<small>${s.unit}</small></div>
              <div class="arr">→</div>
            </div>`).join('')}
        </div>`;
    }).join('');
    fullGrid.innerHTML = html;
  }

  /* ============= MODAL SERVICIOS ============= */
  const backdrop = document.getElementById('modal-backdrop');
  const card = document.getElementById('modal-card');

  function openServiceById(id){
    if (!backdrop || typeof SERVICES === 'undefined') return;
    const s = SERVICES.find(x => x.id === id);
    if (!s) return;

    const includesHtml = s.includes.map(([k,v]) => `<li><span>${k}</span><span>${v}</span></li>`).join('');

    /* Desktop */
    const setText = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
    const setHtml = (id, val) => { const e = document.getElementById(id); if (e) e.innerHTML = val; };
    setText('m-name-desktop', s.name);
    setText('m-lead-desktop', s.lead);
    setText('m-time-desktop', s.time);
    setText('m-price-desktop', s.price);
    setText('m-freq-desktop', s.freq);
    setHtml('m-includes-desktop', includesHtml);

    const imgUrl = `url('${s.img}')`;
    const imgD = document.getElementById('m-img-desktop');
    if (imgD) imgD.style.setProperty('--svc-img', imgUrl);
    const imgF = document.getElementById('m-img-front');
    if (imgF) imgF.style.setProperty('--svc-img', imgUrl);

    /* Mobile flip */
    setText('m-name-front', s.name);
    setText('m-name-back', s.name);
    setText('m-lead-mobile', s.lead);
    setText('m-time-mobile', s.time);
    setText('m-price-mobile', s.price);
    setText('m-freq-mobile', s.freq);
    setHtml('m-includes-mobile', includesHtml);

    if (card) card.classList.remove('is-flipped');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(){
    if (!backdrop) return;
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { if (card) card.classList.remove('is-flipped'); }, 400);
  }
  window.openServiceById = openServiceById;
  window.closeServiceModal = closeModal;

  document.addEventListener('click', (e) => {
    const row = e.target.closest('.service-row');
    if (row && row.dataset.id){
      openServiceById(row.dataset.id);
    }
  });

  if (backdrop){
    backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', e => { e.stopPropagation(); closeModal(); });
    });
    if (card){
      card.addEventListener('click', (e) => {
        if (e.target.closest('.modal-cta')) return;
        card.classList.toggle('is-flipped');
      });
    }
    document.querySelectorAll('.modal-cta').forEach(cta => {
      cta.addEventListener('click', () => closeModal());
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  }

  /* ============= TESTIMONIOS — render + carrusel ============= */
  const testTrack = document.getElementById('test-track');
  if (testTrack && typeof TESTIMONIALS !== 'undefined'){
    const googleSvg = `<svg viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>`;
    testTrack.innerHTML = TESTIMONIALS.map(t => `
      <div class="testimonio">
        <div class="testimonio-card">
          <div class="testimonio-header">
            <div class="testimonio-avatar" style="background:${t.color}">${t.initial}</div>
            <div class="testimonio-meta">
              <strong>${t.name}</strong>
              <time>${t.date}</time>
            </div>
          </div>
          <div class="testimonio-stars">★★★★★</div>
          <p class="testimonio-text">${t.text}</p>
          <div class="testimonio-source">${googleSvg} Publicado en Google</div>
        </div>
      </div>`).join('');

    /* Carrusel infinito */
    const dotsWrap = document.getElementById('test-dots');
    const prevBtn  = document.getElementById('test-prev');
    const nextBtn  = document.getElementById('test-next');
    const origCards= Array.from(testTrack.querySelectorAll('.testimonio'));
    const total    = origCards.length;
    let current = 0, busy = false;

    function pp(){ return window.innerWidth >= 980 ? 3 : 1; }
    function setup(){
      const n = pp();
      testTrack.querySelectorAll('.testimonio-clone').forEach(c => c.remove());
      const pre = document.createDocumentFragment();
      origCards.slice(-n).forEach(c => { const cl = c.cloneNode(true); cl.classList.add('testimonio-clone'); pre.appendChild(cl); });
      testTrack.insertBefore(pre, testTrack.firstChild);
      origCards.slice(0, n).forEach(c => { const cl = c.cloneNode(true); cl.classList.add('testimonio-clone'); testTrack.appendChild(cl); });
      testTrack.querySelectorAll('.testimonio').forEach(c => c.style.flex = '0 0 ' + (100/n) + '%');
      current = n;
      setPos(false);
      buildDots();
    }
    function setPos(animate){
      const n = pp();
      testTrack.style.transition = animate ? 'transform .5s cubic-bezier(.4,0,.2,1)' : 'none';
      if (!animate) testTrack.offsetHeight;
      testTrack.style.transform = 'translateX(-' + (current * (100/n)) + '%)';
    }
    function buildDots(){
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      for (let i = 0; i < total; i++){
        const d = document.createElement('button');
        d.className = 'test-dot';
        d.setAttribute('aria-label', 'Reseña ' + (i+1));
        d.addEventListener('click', () => { if (!busy) moveTo(pp() + i); });
        dotsWrap.appendChild(d);
      }
      syncDots();
    }
    function syncDots(){
      if (!dotsWrap) return;
      const n = pp();
      const idx = ((current - n) % total + total) % total;
      Array.from(dotsWrap.children).forEach((d, j) => d.classList.toggle('active', j === idx));
    }
    function moveTo(i){ busy = true; current = i; setPos(true); syncDots(); }
    testTrack.addEventListener('transitionend', e => {
      if (e.propertyName !== 'transform') return;
      const n = pp();
      if (current < n)              { current += total; setPos(false); }
      else if (current >= n + total){ current -= total; setPos(false); }
      syncDots();
      busy = false;
    });
    if (prevBtn) prevBtn.addEventListener('click', () => { if (!busy) moveTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', () => { if (!busy) moveTo(current + 1); });
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { busy = false; setup(); }, 150);
    });
    setup();
    /* Auto-play suave */
    setInterval(() => { if (!busy && !document.hidden) moveTo(current + 1); }, 7000);
  }

  /* ============= GALERÍA + LIGHTBOX ============= */
  const galHomeGrid = document.querySelector('.gallery-wrap');
  if (galHomeGrid && typeof GALLERY !== 'undefined' && galHomeGrid.dataset.auto === 'true'){
    const featured = GALLERY.slice(0, 6);
    galHomeGrid.innerHTML = featured.map((g, i) => `
      <div class="gal gal-${i+1}" style="background-image:url('${g.src}')" data-i="${GALLERY.indexOf(g)}">
        <span class="gal-tag">${g.title}</span>
      </div>`).join('');
  }

  const galFull = document.getElementById('gallery-full');
  if (galFull && typeof GALLERY !== 'undefined'){
    function renderGallery(filter = 'all'){
      const items = filter === 'all' ? GALLERY : GALLERY.filter(g => g.cat === filter);
      galFull.innerHTML = items.map(g => {
        const realIndex = GALLERY.indexOf(g);
        return `<div class="gal gal-full-item" style="background-image:url('${g.src}')" data-i="${realIndex}">
          <span class="gal-tag">${g.title}</span>
        </div>`;
      }).join('');
      /* All items same size in full grid */
      galFull.querySelectorAll('.gal').forEach((el, i) => {
        const span = (i % 6 === 0 || i % 6 === 4) ? 5 : (i % 6 === 1 || i % 6 === 3) ? 4 : 3;
        el.style.gridColumn = `span ${span}`;
        el.style.height = (span === 5 ? 380 : span === 4 ? 320 : 300) + 'px';
        if (i % 6 === 2) el.style.marginTop = '40px';
        else if (i % 6 === 5) el.style.marginTop = '20px';
      });
    }
    renderGallery('all');

    const filterBar = document.getElementById('gallery-filters');
    if (filterBar){
      filterBar.addEventListener('click', (e) => {
        const pill = e.target.closest('.filter-pill');
        if (!pill) return;
        filterBar.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        renderGallery(pill.dataset.filter);
      });
    }
  }

  /* Lightbox */
  const lightbox = document.getElementById('lightbox');
  if (lightbox){
    const lImg = lightbox.querySelector('.lightbox-img');
    const lTitle = lightbox.querySelector('.lightbox-title');
    const lIndex = lightbox.querySelector('.lightbox-index');
    const lPrev = lightbox.querySelector('.lightbox-prev');
    const lNext = lightbox.querySelector('.lightbox-next');
    const lClose = lightbox.querySelector('.lightbox-close');
    let curIdx = 0;

    function openLightbox(i){
      curIdx = i;
      const g = GALLERY[curIdx];
      lImg.style.backgroundImage = `url('${g.src}')`;
      if (lTitle) lTitle.textContent = g.title;
      if (lIndex) lIndex.textContent = (curIdx + 1) + ' / ' + GALLERY.length;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeLightbox(){
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
    function nav(dir){
      curIdx = (curIdx + dir + GALLERY.length) % GALLERY.length;
      openLightbox(curIdx);
    }
    document.addEventListener('click', (e) => {
      const gal = e.target.closest('.gal');
      if (gal && gal.dataset.i !== undefined){
        openLightbox(+gal.dataset.i);
      }
    });
    if (lClose) lClose.addEventListener('click', closeLightbox);
    if (lPrev)  lPrev.addEventListener('click', () => nav(-1));
    if (lNext)  lNext.addEventListener('click', () => nav(1));
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft')  nav(-1);
      if (e.key === 'ArrowRight') nav(1);
    });
  }

  /* ============= FORM HANDLERS ============= */
  document.querySelectorAll('form[data-pretty]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.submit, button[type="submit"]');
      if (!btn) return;
      const orig = btn.textContent;
      btn.textContent = 'Enviado · te llamamos en 24 h';
      btn.style.background = 'var(--accent)';
      setTimeout(() => { btn.textContent = orig; btn.style.background = ''; form.reset(); }, 3500);
    });
  });

  /* ============= BLOG render ============= */
  const blogPreview = document.getElementById('blog-preview');
  if (blogPreview && typeof POSTS !== 'undefined'){
    blogPreview.innerHTML = POSTS.slice(0, 3).map(p => `
      <article class="post">
        <div class="post-img" style="background-image:url('${p.img}')"></div>
        <div class="meta">${p.date} · ${p.read} · ${p.cat}</div>
        <h3>${p.title}</h3>
        <p>${p.intro}</p>
        <span class="read">Leer artículo →</span>
      </article>`).join('');
  }

  const blogFull = document.getElementById('blog-full');
  if (blogFull && typeof POSTS !== 'undefined' && typeof POST_CATEGORIES !== 'undefined'){
    function renderPosts(cat){
      const items = (cat === 'Todo' || !cat) ? POSTS : POSTS.filter(p => p.cat === cat);
      blogFull.innerHTML = items.map(p => `
        <article class="post">
          <div class="post-img" style="background-image:url('${p.img}')"></div>
          <div class="meta">${p.date} · ${p.read} · ${p.cat}</div>
          <h3>${p.title}</h3>
          <p>${p.intro}</p>
          <span class="read">Leer artículo →</span>
        </article>`).join('');
    }
    renderPosts('Todo');
    const catBar = document.getElementById('blog-categories');
    if (catBar){
      catBar.innerHTML = POST_CATEGORIES.map((c, i) => `<button class="filter-pill ${i===0?'active':''}" data-cat="${c}">${c}</button>`).join('');
      catBar.addEventListener('click', e => {
        const pill = e.target.closest('.filter-pill');
        if (!pill) return;
        catBar.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        renderPosts(pill.dataset.cat);
      });
    }
  }

  /* ============= TEAM render ============= */
  const teamGrid = document.getElementById('team-grid');
  if (teamGrid && typeof TEAM !== 'undefined'){
    teamGrid.innerHTML = TEAM.map(m => `
      <div class="team-card">
        <div class="team-photo" style="background-image:url('${m.img}')"></div>
        <h4 class="team-name">${m.name}</h4>
        <div class="team-role">${m.role}</div>
        <p class="team-bio">${m.bio}</p>
        <div class="team-tags">${m.tags.map(t => `<span class="team-tag">${t}</span>`).join('')}</div>
      </div>`).join('');
  }

  /* ============= TIMELINE render ============= */
  const timeline = document.getElementById('timeline');
  if (timeline && typeof TIMELINE !== 'undefined'){
    timeline.innerHTML = TIMELINE.map(t => `
      <div class="timeline-item">
        <div class="year">${t.year}</div>
        <h4>${t.title}</h4>
        <p>${t.text}</p>
      </div>`).join('');
  }

  /* ============= PILLARS / PHILOSOPHY ============= */
  const pillarsGrid = document.getElementById('pillars-grid');
  if (pillarsGrid && typeof PILLARS !== 'undefined'){
    pillarsGrid.innerHTML = PILLARS.map(p => `
      <div class="pillar">
        <div class="pillar-num">${p.num}</div>
        <h4>${p.title}</h4>
        <p>${p.text}</p>
      </div>`).join('');
  }

  /* ============= AWARDS render ============= */
  const awardsGrid = document.getElementById('awards-grid');
  if (awardsGrid && typeof AWARDS !== 'undefined'){
    awardsGrid.innerHTML = AWARDS.map(a => `
      <div class="award">
        <div class="award-year">${a.year}</div>
        <h5>${a.title}</h5>
        <p>${a.org}</p>
      </div>`).join('');
  }

  /* ============= BRANDS render ============= */
  const brandsStrip = document.getElementById('brands-strip');
  if (brandsStrip && typeof BRANDS !== 'undefined'){
    brandsStrip.innerHTML = BRANDS.map(b => `
      <div class="brand-logo">
        <span class="brand-name">${b.name}</span>
        <span class="brand-use">${b.use}</span>
      </div>`).join('');
  }

  /* ============= ADDONS render ============= */
  const addonsGrid = document.getElementById('addons-grid');
  if (addonsGrid && typeof ADDONS !== 'undefined'){
    addonsGrid.innerHTML = ADDONS.map(a => `
      <div class="addon">
        <h4>${a.name}</h4>
        <p>${a.desc}</p>
        <div class="addon-price">${a.price}</div>
      </div>`).join('');
  }

  /* ============= PACKS render ============= */
  const packsGrid = document.getElementById('packs-grid');
  if (packsGrid && typeof PACKS !== 'undefined'){
    packsGrid.innerHTML = PACKS.map(p => `
      <div class="pack ${p.featured ? 'featured' : ''}">
        ${p.tag ? `<span class="pack-tag">${p.tag}</span>` : ''}
        <h4>${p.name}</h4>
        <div class="pack-price">${p.price}<small>${p.duration}</small></div>
        <ul>${p.items.map(i => `<li>${i}</li>`).join('')}</ul>
        <a href="contacto.html" class="modal-cta">${p.cta} →</a>
      </div>`).join('');
  }

  /* ============= FAQ render ============= */
  const faqList = document.getElementById('faq-list');
  if (faqList && typeof FAQS !== 'undefined'){
    faqList.innerHTML = FAQS.map(f => `
      <details class="faq-item">
        <summary>${f.q}</summary>
        <div class="faq-answer">${f.a}</div>
      </details>`).join('');
  }

  /* ============= HOURS render ============= */
  const hoursGrid = document.getElementById('hours-grid');
  if (hoursGrid && typeof HOURS !== 'undefined'){
    hoursGrid.innerHTML = HOURS.map(h => `
      <div class="hours-card ${h.closed ? 'closed' : ''}">
        <div class="day">${h.day}</div>
        <div class="hour">${h.hour}</div>
        ${h.small ? `<div class="small">${h.small}</div>` : ''}
      </div>`).join('');
  }

  /* ============= INIT ============= */
  applyReveals();
  bindRipple();
})();
