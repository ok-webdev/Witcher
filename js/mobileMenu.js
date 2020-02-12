const mobMenuLink = document.querySelector('.menu-link__mobile');
const menu = document.querySelector('.menu-list');

mobMenuLink.onclick = function() {
  this.classList.toggle('menu-link__mobile_active');
  menu.classList.toggle('menu-list__active');
}