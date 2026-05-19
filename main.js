// ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav__links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-open');
  navLinks.classList.toggle('is-open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-open');
    navLinks.classList.remove('is-open');
  });
});

// スクロールアニメーション
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ナビ：スクロールで背景を強調
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('is-scrolled', window.scrollY > 40);
});
