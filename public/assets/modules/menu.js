const btnMenu = document.querySelector('#btn-menu');
const menu = document.querySelector('#menu');
const ul = document.querySelector('#menu > ul');
const li = ul.querySelectorAll('li');
const check = document.querySelector('#check-menu');

export default function menuHandler(){
    if(check.checked){
        close();
        check.checked = false;
    }
    else{
        open();
        check.checked = true;
    }
}

function open(){
    const menuOpen = document.createElement('div');
    btnMenu.classList = 'animation-btn-menu';
    for(let i = 0; i < 2; i++){
        li[i].style.marginBottom = '10px';
    }
    ul.style.display = 'block';
    menuOpen.classList = 'animation-menu-open';
    menuOpen.setAttribute('id', 'menu-open');
    menuOpen.appendChild(ul);
    menu.appendChild(menuOpen);
}

function close(){
    const menuOpen = document.querySelector('#menu-open')
    btnMenu.classList = 'animation-btn-menu-close';
    menuOpen.parentNode.removeChild(menuOpen);
}