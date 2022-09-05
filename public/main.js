import loadImg from './assets/modules/images.js';
import menuHandler from './assets/modules/menu.js';
const btnMenu = document.querySelector('#btn-menu');

btnMenu.addEventListener('click', menuHandler);

loadImg();