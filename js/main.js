// =====================
// AARTI FOR GIRLS â main.js
// =====================

const NAV_HTML = `
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="nav-inner">
    <a class="nav-logo" href="index.html" aria-label="Aarti For Girls home">
      <img src="assets/images/logo.png" alt="Aarti For Girls logo" height="48">
    </a>
    <ul class="nav-links" id="navLinks">
      <li class="has-drop">
        <button aria-expanded="false" aria-haspopup="true">About <span class="nav-chevron">&#9660;</span></button>
        <ul class="nav-drop">
          <li><a href="about-history.html">Our History</a></li>
          <li><a href="about-mission.html">Mission, Vision &amp; Core Values</a></li>
          <li><a href="about-milestones.html">Milestones</a></li>
          <li><a href="about-voicesofaarti.html">Voices of Aarti</a></li>
          <li><a href="about-aartivillage.html">Aarti Village</a></li>
          <li><a href="about-humansofaarti.html">Humans of Aarti</a></li>
          <li><a href="about-annualreport.html">Annual Report</a></li>
        </ul>
      </li>
      <li class="has-drop">
        <button aria-expanded="false" aria-haspopup="true">Impact <span class="nav-chevron">&#9660;</span></button>
        <ul class="nav-drop">
          <li><a href="impact-care.html">Care</a></li>
          <li><a href="impact-education.html">Education</a></li>
          <li><a href="impact-empower.html">Empower</a></li>
          <li><a href="impact-advocate.html">Advocate</a></li>
        </ul>
      </li>
      <li><a href="partners.html">Partners</a></li>
      <li class="has-drop">
        <button aria-expanded="false" aria-haspopup="true">News / Blogs <span class="nav-chevron">&#9660;</span></button>
        <ul class="nav-drop">
          <li><a href="news-blog.html">Blogs</a></li>
          <li><a href="news.html">News</a></li>
        </ul>
      </li>
      <li><a href="volunteer.html">Volunteer</a></li>
      <li class="nav-donate">
        <a href="donate.html" class="btn btn-pink">Donate</a>
      </li>
    </ul>
    <button class="nav-burger" id="navBurger" aria-label="Toggle menu" aria-expanded="false">&#9776;</button>
  </div>
</nav>`;

const FOOTER_HTML = `
<section class="cta-section">
  <div class="container">
    <img class="cta-img" src="assets/images/cta-girls.jpg" alt="Two Aarti girls laughing together">
    <h2>Success follows opportunity.</h2>
    <p>Every child deserves an equal chance at life, education, and happiness. Aarti for Girls ensures this.</p>
    <a href="donate.html" class="btn btn-yellow btn-lg">Donate Now</a>
  </div>
</section>
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-logo">
      <a href="index.html"><img src="assets/images/logo.png" alt="Aarti For Girls"></a>
      <p class="footer-address" style="color:rgba(255,255,255,.6);margin-top:.6rem;">Vijay Foundation Trust Association<br>D.No. 1/713, Dwarakanagar,<br>Kadapa, Y.S.R. District &ndash; 516 004<br>Andhra Pradesh, India</p>
      <p style="margin-top:.5rem;font-size:.8rem;"><a href="mailto:aartihome@aartiforgirls.org" style="color:rgba(255,255,255,.6);">aartihome@aartiforgirls.org</a></p>
      <div class="footer-socials" style="margin-top:.75rem;">
        <a href="https://www.facebook.com/AartiHome/" target="_blank" rel="noopener" aria-label="Facebook">f</a>
        <a href="https://www.instagram.com/aartiforgirls/" target="_blank" rel="noopener" aria-label="Instagram">&#9650;</a>
        <a href="https://x.com/Aarti_for_Girls" target="_blank" rel="noopener" aria-label="Twitter/X">X</a>
        <a href="https://www.youtube.com/channel/UCcsQOWRbyEerw2w3HcESqMg" target="_blank" rel="noopener" aria-label="YouTube">&#9654;</a>
        <a href="https://in.linkedin.com/company/aartiforgirls" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
      </div>
    </div>
    <div>
      <h4>About</h4>
      <ul>
        <li><a href="about-history.html">Our History</a></li>
        <li><a href="about-mission.html">Mission &amp; Vision</a></li>
        <li><a href="about-milestones.html">Milestones</a></li>
        <li><a href="about-voicesofaarti.html">Voices of Aarti</a></li>
        <li><a href="about-aartivillage.html">Aarti Village</a></li>
        <li><a href="about-humansofaarti.html">Humans of Aarti</a></li>
        <li><a href="about-annualreport.html">Annual Report</a></li>
      </ul>
    </div>
    <div>
      <h4>Impact</h4>
      <ul>
        <li><a href="impact-care.html">Care</a></li>
        <li><a href="impact-education.html">Education</a></li>
        <li><a href="impact-empower.html">Empower</a></li>
        <li><a href="impact-advocate.html">Advocate</a></li>
      </ul>
      <h4 style="margin-top:1.25rem;">Get Involved</h4>
      <ul>
        <li><a href="donate.html">Donate</a></li>
        <li><a href="volunteer.html">Volunteer</a></li>
        <li><a href="partners.html">Partners</a></li>
      </ul>
    </div>
    <div>
      <h4>Legal</h4>
      <ul>
        <li><a href="privacy-policy.html">Privacy Policy</a></li>
        <li><a href="certifications.html">Certifications</a></li>
        <li><a href="faqs.html">FAQs</a></li>
      </ul>
      <h4 style="margin-top:1.25rem;">News &amp; Blog</h4>
      <ul>
        <li><a href="news.html">News</a></li>
        <li><a href="news-blog.html">Blog</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>Copyright &copy; Aarti For Girls 2025. Developed with &hearts; by <a href="https://www.firebrandlabs.in/" target="_blank" rel="noopener" style="color:rgba(255,255,255,.6);">Firebrand Labs</a>.</p>
    <p style="font-size:.72rem;color:rgba(255,255,255,.35);">Vijay Foundation Trust Association &mdash; FCRA Reg. No. 010050098</p>
  </div>
</footer>`;

// Inject nav & footer
function injectLayout() {
  const navEl = document.getElementById('nav-placeholder');
  const footEl = document.getElementById('footer-placeholder');
  if (navEl)  navEl.outerHTML  = NAV_HTML;
  if (footEl) footEl.outerHTML = FOOTER_HTML;
}

// Highlight active page in nav
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) {
      const parent = a.closest('.has-drop') || a.closest('li');
      if (parent) parent.classList.add('active');
    }
  });
}

// Dropdown menus
function initDropdowns() {
  document.querySelectorAll('.has-drop > button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const li = btn.closest('li');
      const wasOpen = li.classList.contains('open');
      document.querySelectorAll('.nav-links .has-drop.open').forEach(l => {
        l.classList.remove('open');
        l.querySelector('button')?.setAttribute('aria-expanded','false');
      });
      if (!wasOpen) { li.classList.add('open'); btn.setAttribute('aria-expanded','true'); }
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-links .has-drop.open').forEach(l => {
      l.classList.remove('open');
      l.querySelector('button')?.setAttribute('aria-expanded','false');
    });
  });
}

// Mobile burger
function initBurger() {
  const burger = document.getElementById('navBurger');
  const links  = document.getElementById('navLinks');
  if (!burger || !links) return;
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.textContent = open ? '\u2715' : '\u2630';
    burger.setAttribute('aria-expanded', String(open));
  });
}

// Tab widget (donate page)
function initTabs() {
  document.querySelectorAll('[data-tabs]').forEach(wrap => {
    const btns   = wrap.querySelectorAll('.tab-btn');
    const panels = wrap.querySelectorAll('.tab-panel');
    btns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        if (panels[i]) panels[i].classList.add('active');
      });
    });
  });
}

// UPI modal
function initUpiModal() {
  const triggers = document.querySelectorAll('[data-upi]');
  if (!triggers.length) return;
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-label="UPI QR Code">
      <button class="modal-close" aria-label="Close">&times;</button>
      <h3>Scan to Donate via UPI</h3>
      <p>Vijay Foundation Trust Association</p>
      <img src="assets/images/upi-qr.jpg" alt="UPI QR Code">
      <p style="font-size:.78rem;margin-top:.5rem;">Scan with any UPI app &mdash; Google Pay, PhonePe, Paytm, etc.</p>
    </div>`;
  document.body.appendChild(overlay);
  triggers.forEach(t => t.addEventListener('click', () => overlay.classList.add('open')));
  overlay.querySelector('.modal-close').addEventListener('click', () => overlay.classList.remove('open'));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') overlay.classList.remove('open'); });
}

// FAQ accordion
function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

// Boot
document.addEventListener('DOMContentLoaded', () => {
  injectLayout();
  setActiveNav();
  initDropdowns();
  initBurger();
  initTabs();
  initUpiModal();
  initFaq();
});
