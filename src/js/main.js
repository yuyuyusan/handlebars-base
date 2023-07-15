// ハンバーガーメニュー
const menuBox = document.querySelector('.menuBox');
const menuElements = document.querySelectorAll('.menuTop, .menuCenter, .menuBottom');
const headerNav = document.querySelector('.headerMenu');
const logoHidden = document.querySelector('.logo.pc');

menuBox.addEventListener('click', () => {
  for (const element of menuElements) {
    element.classList.toggle('active');
  }
  headerNav.classList.toggle('active');
  menuBox.classList.toggle('active');
});




