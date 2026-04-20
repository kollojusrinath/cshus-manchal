// ── NAV HTML ─────────────────────────────────────────
const NAV_HTML = `
<nav id="mainNav">
  <div class="nav-inner">
    <div class="nav-brand">
      <div class="nav-logo">🚩</div>
      <div class="nav-brand-text">
        <span class="l1">చత్రపతి శివాజీ హిందూ ఉత్సవ కమిటీ</span>
        <span class="l2">మంచాల • Manchal</span>
      </div>
    </div>
    <ul class="nav-links">
      <li><a href="index.html">హోమ్</a></li>
      <li><a href="history.html">చరిత్ర</a></li>
      <li><a href="gallery.html">గ్యాలరీ</a></li>
      <li><a href="events.html">ఉత్సవాలు</a></li>
      <li><a href="members.html">సభ్యులు</a></li>
      <li><a href="updates.html">అప్‌డేట్స్</a></li>
      <li><a href="contact.html">సంప్రదించండి</a></li>
    </ul>
    <button class="hamburger" id="hamburger" onclick="toggleMenu()">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">🏠 హోమ్</a>
  <a href="history.html">📜 హైందవి స్వరాజ్య చరిత్ర</a>
  <a href="gallery.html">🖼️ గ్యాలరీ</a>
  <a href="events.html">🎊 ఉత్సవాలు</a>
  <a href="members.html">👥 సభ్యులు</a>
  <a href="updates.html">📢 అప్‌డేట్స్</a>
  <a href="contact.html">📞 సంప్రదించండి</a>
  <a href="sitemap.html">🗺️ సైట్ మ్యాప్</a>
</div>`;

// ── FOOTER HTML ──────────────────────────────────────
const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="fb-logo">🚩</div>
      <h3>చత్రపతి శివాజీ హిందూ ఉత్సవ కమిటీ</h3>
      <p>మంచాల, హైదరాబాద్, తెలంగాణ<br>
      శివాజీ స్ఫూర్తిని నిత్యం వెలిగిద్దాం<br>
      జై శివాజీ! జై భవాని!</p>
    </div>
    <div class="footer-col">
      <h4>Pages</h4>
      <ul>
        <li><a href="index.html">హోమ్</a></li>
        <li><a href="history.html">హైందవి స్వరాజ్య చరిత్ర</a></li>
        <li><a href="gallery.html">గ్యాలరీ</a></li>
        <li><a href="sitemap.html">సైట్ మ్యాప్</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Committee</h4>
      <ul>
        <li><a href="members.html">సభ్యులు</a></li>
        <li><a href="events.html">ఉత్సవాలు</a></li>
        <li><a href="updates.html">అప్‌డేట్స్</a></li>
        <li><a href="contact.html">సంప్రదించండి</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Admin</h4>
      <ul>
        <li><a href="admin/">Admin Login</a></li>
        <li><a href="admin/">Photos Upload</a></li>
        <li><a href="admin/">Content Edit</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-copy">© 2025 చత్రపతి శివాజీ హిందూ ఉత్సవ కమిటీ, మంచాల &nbsp;•&nbsp; జై శివాజీ 🚩</div>
</footer>`;

// ── INIT ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.innerHTML = NAV_HTML;
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  // Active nav
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Scroll nav effect
  const nav = document.getElementById('mainNav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, {passive: true});
    onScroll();
  }

  // Fade-in on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; }});
  }, {threshold: 0.1});
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
document.addEventListener('click', e => {
  const menu = document.getElementById('mobileMenu');
  const ham = document.getElementById('hamburger');
  if (menu && menu.classList.contains('open') && !menu.contains(e.target) && ham && !ham.contains(e.target)) menu.classList.remove('open');
});

function shareWA(text) {
  const msg = encodeURIComponent(text + '\n\n🚩 చత్రపతి శివాజీ హిందూ ఉత్సవ కమిటీ, మంచాల\nజై శివాజీ! జై భవాని!\n' + window.location.origin);
  window.open('https://wa.me/?text=' + msg, '_blank');
}

// Image fallback helper
function imgFail(img, emoji, bgClass) {
  const ph = document.createElement('div');
  ph.className = 'ph-bg ' + (bgClass || 'fort');
  ph.innerHTML = emoji || '🏰';
  img.parentNode.replaceChild(ph, img);
}

// ── HERO PARTICLES ─────────────────────────────────
(function(){
  const c = document.getElementById('heroParticles');
  if(!c) return;
  const colors = ['#E8600A','#C8860A','#E6A818','#FF8C42','#FFF8EC'];
  for(let i=0;i<18;i++){
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = [
      'left:' + Math.random()*100 + '%',
      'background:' + colors[Math.floor(Math.random()*colors.length)],
      '--dur:' + (7+Math.random()*6) + 's',
      '--delay:' + (Math.random()*8) + 's',
      'width:' + (4+Math.random()*5) + 'px',
      'height:' + (4+Math.random()*5) + 'px'
    ].join(';');
    c.appendChild(p);
  }
})();

// ── SHARE WHATSAPP ─────────────────────────────────
function shareWA(text){
  window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank');
}
