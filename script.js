// === MOBILE NAV TOGGLE ===
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// === REVEAL ON SCROLL ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// === SKILL BAR ANIMATION ===
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(bar => {
        const w = bar.getAttribute('data-width');
        bar.style.width = w + '%';
        bar.classList.add('animate');
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-layout').forEach(el => barObserver.observe(el));

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// === COPY PHONE ===
function copyPhone() {
  navigator.clipboard.writeText('(21) 97287-1582').then(() => {
    const btn = document.getElementById('copyBtn');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
    btn.style.color = 'var(--green)';
    btn.style.borderColor = 'var(--green)';
    setTimeout(() => {
      btn.innerHTML = original;
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 2000);
  }).catch(() => alert('Erro ao copiar.'));
}

// === HEADER SHRINK ON SCROLL ===
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 60) {
    header.style.padding = '0.8rem 0';
  } else {
    header.style.padding = '1.2rem 0';
  }
});

// === STAGGER HERO ANIMATIONS ===
window.addEventListener('load', () => {
  const heroReveal = document.querySelector('#hero .reveal');
  if (heroReveal) {
    heroReveal.style.transitionDelay = '0.1s';
  }
  const heroReveal2 = document.querySelector('#hero .reveal:last-child');
  if (heroReveal2) {
    heroReveal2.style.transitionDelay = '0.3s';
  }
});
