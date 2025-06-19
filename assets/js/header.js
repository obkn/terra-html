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

    // 横幅が992px以上なら nav-open を削除
    if (window.innerWidth >= 992 && header.classList.contains('nav-open')) {
      header.classList.remove('nav-open');
    }
  }

  // メニュー開閉（SP）
  toggle.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });

  // スクロール・リサイズ時に状態を更新
  window.addEventListener('scroll', updateHeaderState);
  window.addEventListener('resize', updateHeaderState);
  updateHeaderState(); // 初回呼び出し
});