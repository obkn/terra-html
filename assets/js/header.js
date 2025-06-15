document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  const hero = document.querySelector('.hero');

  // SP: メニュー開閉
  toggle.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });

  // TOP: スクロールで背景変更
  if (hero && window.innerWidth >= 768) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('is-scrolled', window.scrollY > hero.offsetHeight - 80);
    });
  }
});