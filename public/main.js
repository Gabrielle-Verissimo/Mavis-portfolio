import loadImg from './assets/modules/modal.js';
import menuHandler from './assets/modules/menu.js';
import initValidator from './assets/modules/contato.js';
const btnMenu = document.querySelector('#btn-menu');

btnMenu.addEventListener('click', menuHandler);
loadImg();
initValidator();