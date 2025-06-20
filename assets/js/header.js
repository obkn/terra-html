document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const hero = document.querySelector('.hero');
  const spanTop = toggle.querySelector('.bar-top');
  const spanMiddle = toggle.querySelector('.bar-middle');
  const spanBottom = toggle.querySelector('.bar-bottom');

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
      header.classList.remove('nav-closing');
      toggle.classList.remove('open');
    }
  }

  // メニュー開閉（SP）
  toggle.addEventListener('click', () => {
    if (header.classList.contains('nav-open')) {
      // 閉じるとき：アニメーション用クラス追加
      header.classList.add('nav-closing');

      setTimeout(() => {
        header.classList.remove('nav-open');
        header.classList.remove('nav-closing');
      }, 300); // アニメーション時間と合わせる
      toggle.classList.remove('open');
    } else {
      // 開くとき
      header.classList.add('nav-open');
      toggle.classList.add('open');
    }
  });

  // スクロール・リサイズ時に状態を更新
  window.addEventListener('scroll', updateHeaderState);
  window.addEventListener('resize', updateHeaderState);
  updateHeaderState(); // 初回呼び出し
});