const btnMenu = document.querySelector('#btn-menu');
const menu = document.querySelector('#menu');
let checked = false;
export default function menuHandler(){
    if(checked){
        close(open());
        checked = false;
    }
    else{
        open();
        checked = true;
    }
}

function open(){
    const menuOpen = createMenu();
    btnMenu.classList = 'animation-btn-menu';
    menuOpen.classList = 'animation-menu-open';
    menuOpen.setAttribute('id', 'menu-open');
    menuOpen.appendChild(ul);
    menu.appendChild(menuOpen);
    return menuOpen;
}

function close(menuOpen){
    console.log(menuOpen)
    btnMenu.classList = 'animation-btn-menu-close';
    menuOpen.parentNode.removeChild(menuOpen);
}

function createMenu(){
    const menuOpen = document.createElement('div');
    const ul = document.createElement('ul');
    let liNames = ['Trabalhos', 'Sobre', 'Contato'];
    let IDs = ['#trabalhos', '#sobre', '#contato'];
    ul.setAttribute('id', 'responsive-menu');
    for(let i = 0; i < 3; i++){
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', IDs[i]);
        a.innerHTML = liNames[i];
        li.appendChild(a);
        ul.appendChild(li);
    }

    return menuOpen;
}