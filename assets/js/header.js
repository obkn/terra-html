document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const hero = document.querySelector('.hero');

  // 初期設定
  function updateHeaderState() {
    const scrollY = window.scrollY;
    const heroHeight = hero?.offsetHeight || 0;
    const isTop = scrollY < heroHeight - 80;

    header.classList.toggle('is-top', isTop);
    header.classList.toggle('is-scrolled', !isTop);
  }

  // メニュー開閉（SP）
  toggle.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });

  // スクロールイベント（PC・SP共通）
  window.addEventListener('scroll', updateHeaderState);
  window.addEventListener('resize', updateHeaderState); // リサイズ時も判定し直す
  updateHeaderState(); // 初回呼び出し
});
