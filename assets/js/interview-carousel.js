const list = document.querySelector('.interview-list');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

// スクロールして表示を更新
function updateButtonVisibility() {
  const scrollLeft = list.scrollLeft;
  const maxScroll = list.scrollWidth - list.clientWidth;

  prevBtn.style.display = scrollLeft <= 10 ? 'none' : 'block';
  nextBtn.style.display = scrollLeft >= maxScroll - 10 ? 'none' : 'block';
}

// 最初に表示状態をチェック
updateButtonVisibility();

// ボタンクリック時
prevBtn.addEventListener('click', () => {
  list.scrollBy({ left: -300, behavior: 'smooth' });
});
nextBtn.addEventListener('click', () => {
  list.scrollBy({ left: 300, behavior: 'smooth' });
});

// スクロール時に表示状態を更新
list.addEventListener('scroll', updateButtonVisibility);

// 画面リサイズでも更新
window.addEventListener('resize', updateButtonVisibility);