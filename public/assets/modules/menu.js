const btnMenu = document.querySelector('#btn-menu');
const containerMenu = document.querySelector('#container-menu');

let checked = false;
export default function menuHandler(){
    if(checked){
        close();
        checked = false;
    }
    else{
        open();
        checked = true;
    }
}

function close(){
    const menuOpen = document.querySelector('#menu-open');
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
    menuOpen.classList = 'animation-menu-open';
    menuOpen.setAttribute('id', 'menu-open');
    menuOpen.appendChild(ul);
    return menuOpen;
}

function open(){
    const menuOpen = createMenu();
    btnMenu.classList = 'animation-btn-menu';
    containerMenu.appendChild(menuOpen);
    optionClicked();
}

function optionClicked(){
    const ul = document.querySelector('#responsive-menu');
    const arrayLi = ul.children;
    for(let i = 0; i < 3; i++){
        arrayLi[i].firstChild.addEventListener('click', () => {
            close();
            checked = false;
        })
    }
}

