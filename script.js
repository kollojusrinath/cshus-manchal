// Nav active state
document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === page || (page === '' && href === 'index.html'))) {
      a.classList.add('active');
    }
  });
});

// Mobile menu
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const ham = document.getElementById('hamburger');
  if (menu && menu.classList.contains('open') && !menu.contains(e.target) && ham && !ham.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// WhatsApp share
function shareWA(text) {
  const msg = encodeURIComponent(text + '\n\n🚩 చత్రపతి శివాజీ హిందూ ఉత్సవ కమిటీ, మంచాల\nజై శివాజీ! జై భవాని!');
  window.open('https://wa.me/?text=' + msg, '_blank');
}

// Nav HTML
const NAV_HTML = `
<nav>
  <div class="nav-brand">
    <span class="nav-flag">🚩</span>
    <div class="nav-brand-text">
      <span class="line1">చత్రపతి శివాజీ హిందూ ఉత్సవ కమిటీ</span>
      <span class="line2">మంచాల • Manchal</span>
    </div>
  </div>
  <ul class="nav-links">
    <li><a href="index.html">🏠 హోమ్</a></li>
    <li><a href="history.html">📜 చరిత్ర</a></li>
    <li><a href="gallery.html">🖼️ గ్యాలరీ</a></li>
    <li><a href="events.html">🎊 ఉత్సవాలు</a></li>
    <li><a href="members.html">👥 సభ్యులు</a></li>
    <li><a href="updates.html">📢 అప్‌డేట్స్</a></li>
    <li><a href="contact.html">📞 సంప్రదించండి</a></li>
    <li><a href="sitemap.html">🗺️ సైట్ మ్యాప్</a></li>
  </ul>
  <button class="hamburger" onclick="toggleMenu()" id="hamburger">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">🏠 హోమ్</a>
  <a href="history.html">📜 చరిత్ర కార్డులు</a>
  <a href="gallery.html">🖼️ గ్యాలరీ</a>
  <a href="events.html">🎊 ఉత్సవాలు</a>
  <a href="members.html">👥 సభ్యులు</a>
  <a href="updates.html">📢 అప్‌డేట్స్</a>
  <a href="contact.html">📞 సంప్రదించండి</a>
  <a href="sitemap.html">🗺️ సైట్ మ్యాప్</a>
</div>`;

const FOOTER_HTML = `
<footer>
  <div style="font-size:28px;margin-bottom:12px">🚩</div>
  <div class="footer-logo">చత్రపతి శివాజీ హిందూ ఉత్సవ కమిటీ</div>
  <div class="footer-place">మంచాల, హైదరాబాద్</div>
  <div class="footer-links">
    <a href="index.html">హోమ్</a>
    <a href="history.html">చరిత్ర</a>
    <a href="gallery.html">గ్యాలరీ</a>
    <a href="events.html">ఉత్సవాలు</a>
    <a href="members.html">సభ్యులు</a>
    <a href="updates.html">అప్‌డేట్స్</a>
    <a href="contact.html">సంప్రదించండి</a>
  </div>
  <div class="footer-copy">© 2025 చత్రపతి శివాజీ హిందూ ఉత్సవ కమిటీ, మంచాల • జై శివాజీ 🚩</div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.innerHTML = NAV_HTML;
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
  // Re-run active state after nav injection
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
});
