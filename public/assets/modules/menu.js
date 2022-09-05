const btnMenu = document.querySelector('#btn-menu');
const menu = document.querySelector('#menu');
const ul = document.querySelector('#menu > ul');
const li = ul.querySelectorAll('li');
const check = document.querySelector('#check-menu');

export default function menuHandler(){
    if(check.checked){
        btnMenu.addEventListener('click', close);
    }
    else{
        btnMenu.addEventListener('click', open);
    }
    console.log(check.checked)

}


function open(){//se der erro colocar o 'e'
    console.log('clicked');
    const menuOpen = document.createElement('div');
    btnMenu.classList = 'animation-btn-menu';
    for(let i = 0; i < 2; i++){
        li[i].style.marginBottom = '10px';
    }
    ul.style.display = 'block';
    menuOpen.classList.add('animation-menu-open');
    menuOpen.setAttribute('id', 'menu-open');
    menuOpen.appendChild(ul);
    menu.appendChild(menuOpen);
    check.checked = true;
}
console.log(check.checked, '2');

function close(){//se der erro colocar o 'e'
    console.log('entrou');
    const menuOpen = document.querySelector('#menu-open')
    btnMenu.classList = 'animation-btn-menu-close';
    menuOpen.parentNode.removeChild(menuOpen);
}